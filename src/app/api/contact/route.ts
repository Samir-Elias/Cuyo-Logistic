import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos requeridos incompletos' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: ['info@logisticacuyo.com.ar'],
          subject: `Nueva consulta de ${name} — ${service || 'Consulta general'}`,
          html: `
            <h2>Nueva consulta desde logisticacuyo.com.ar</h2>
            <p><strong>Nombre / Empresa:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            <p><strong>Servicio:</strong> ${service || '—'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
      }
    } else {
      console.log('Contact form submission (no RESEND_API_KEY):', { name, email, phone, service, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
