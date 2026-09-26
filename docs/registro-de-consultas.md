# Registro de consultas de la web

Cada vez que alguien, desde la web:

- toca un botón de **WhatsApp** (hero, menú, botón flotante, contacto, footer),
- toca el **teléfono** o el **email**,
- o **envía el formulario** (que abre WhatsApp con la consulta armada),

el sitio lo registra en `/api/lead`. Desde ahí se manda a los destinos que estén configurados:

| Destino | Qué registra | Variables en Vercel |
|---|---|---|
| **Google Sheets** (recomendado) | Todo: una fila por contacto con fecha, canal, sección, datos del formulario, dispositivo, ciudad/país aproximados y de dónde vino la visita | `LEADS_SHEET_WEBHOOK_URL`, `LEADS_SHEET_TOKEN` |
| **Email** (opcional, vía Resend) | Envíos del formulario y clicks a WhatsApp | `RESEND_API_KEY`, `LEADS_NOTIFY_EMAIL`, `LEADS_FROM_EMAIL` (opcional) |
| **Logs de Vercel** | Siempre (Proyecto → Logs), solo como respaldo | — |

> Un click en WhatsApp significa que la persona **abrió** el chat desde la web. No se puede saber si después envió el mensaje, porque eso ocurre dentro de WhatsApp.

---

## 1. Google Sheets (unos 5 minutos)

1. Creá una planilla nueva en Google Sheets, por ejemplo “Consultas web Logística Cuyo”.
2. Andá a **Extensiones → Apps Script**. Borrá lo que haya y pegá el contenido de [`scripts/google-apps-script-consultas.gs`](../scripts/google-apps-script-consultas.gs).
3. En la línea `const TOKEN = '...'`, poné una clave larga inventada (ej. 30 letras y números al azar) y guardá.
4. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
   - **Implementar**, autorizá los permisos y copiá la **URL de la aplicación web** (termina en `/exec`).
5. En Vercel → proyecto → **Settings → Environment Variables** (entorno *Production*):
   - `LEADS_SHEET_WEBHOOK_URL` = la URL `/exec`
   - `LEADS_SHEET_TOKEN` = la misma clave del paso 3
6. **Redeploy** del proyecto en Vercel para que tome las variables.
7. Probá: abrí la web, tocá “WhatsApp directo”. En unos segundos aparece una fila en la hoja **Consultas**.

Si cambiás el código del Apps Script, hay que hacer **Implementar → Administrar implementaciones → Editar → Nueva versión**. Así la URL sigue siendo la misma.

## 2. Aviso por email (opcional)

1. Creá una cuenta gratis en [resend.com](https://resend.com) **con el email donde querés recibir los avisos**.
2. **API Keys → Create API Key** y copiala.
3. En Vercel agregá:
   - `RESEND_API_KEY` = la clave
   - `LEADS_NOTIFY_EMAIL` = tu email (el mismo de la cuenta de Resend)
4. Redeploy.

Sin dominio verificado, Resend solo permite enviar al email de la propia cuenta, y eso alcanza para este uso. Si más adelante se verifica el dominio (ej. `logisticacuyo.com.ar`), se puede poner `LEADS_FROM_EMAIL="Web Logística Cuyo <web@logisticacuyo.com.ar>"` y avisar a varias direcciones separadas por coma.

## Qué datos se guardan

- **Clicks**: fecha, canal, sección de la página, dispositivo, ciudad/país aproximados (los informa Vercel; no se guarda la IP), el sitio desde el que llegó la visita y los parámetros UTM de campañas.
- **Formulario**: además, nombre/empresa, email, teléfono, servicio y mensaje. El texto del formulario avisa que la consulta queda registrada.
