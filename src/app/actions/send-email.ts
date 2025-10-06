"use server";

import { Resend } from "resend";
import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceType: z.string(),
  message: z.string(),
});

type ContactFormData = z.infer<typeof formSchema>;

// Mapeo de valores a texto legible
const serviceTypeMap: { [key: string]: string } = {
  liquids: "Transporte de Líquidos",
  containers: "Contenedores",
  modules: "Módulos Habitacionales",
  general: "Consulta General",
};

export async function sendEmail(formData: ContactFormData): Promise<{ success: boolean, error?: string }> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = "samireliassalatino@gmail.com";
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey) {
    console.error("Resend API key is not set.");
    return { success: false, error: "La configuración del servidor de correo está incompleta." };
  }
    
  const resend = new Resend(resendApiKey);

  const parsedData = formSchema.safeParse(formData);

  if (!parsedData.success) {
    console.error("Invalid form data:", parsedData.error);
    return { success: false, error: "Datos de formulario inválidos." };
  }

  const { name, email, phone, serviceType, message } = parsedData.data;
  const subject = `Nueva consulta de ${name} sobre ${serviceTypeMap[serviceType] || "Consulta General"}`;

  try {
    const { data, error } = await resend.emails.send({
      from: `Logística Cuyo <${fromEmail}>`,
      to: [toEmail],
      subject: subject,
      reply_to: email,
      html: `
        <h1>Nueva consulta desde la web</h1>
        <p><strong>Nombre/Empresa:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
        <p><strong>Tipo de Servicio:</strong> ${serviceTypeMap[serviceType] || serviceType}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    console.log("Email sent successfully:", data);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
        return { success: false, error: error.message };
    }
    return { success: false, error: "Error desconocido al enviar el email." };
  }
}
