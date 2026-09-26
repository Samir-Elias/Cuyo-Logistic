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

Se puede usar una planilla que ya exista (por ejemplo la de **Liquid Solutions**): las consultas de esta web van a una pestaña propia, **Logística Cuyo**, y el script de Liquid Solutions no se toca.

1. Abrí la planilla y copiá su ID, el código largo de la URL: `docs.google.com/spreadsheets/d/ESTE_CODIGO/edit`.
2. Entrá a [script.google.com](https://script.google.com) → **Nuevo proyecto** (un proyecto aparte, no el de Liquid Solutions). Nombralo por ejemplo “Consultas web Logística Cuyo”.
3. Pegá el contenido de [`scripts/google-apps-script-consultas.gs`](../scripts/google-apps-script-consultas.gs) y completá:
   - `TOKEN`: una clave larga inventada (ej. 30 letras y números al azar)
   - `SPREADSHEET_ID`: el código del paso 1
4. **Implementar → Nueva implementación** → tipo **Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
   - **Implementar**, autorizá los permisos (acceso a tus planillas) y copiá la **URL de la aplicación web** (termina en `/exec`).
5. En Vercel → proyecto → **Settings → Environment Variables** (entorno *Production*):
   - `LEADS_SHEET_WEBHOOK_URL` = la URL `/exec`
   - `LEADS_SHEET_TOKEN` = la misma clave del paso 3
6. **Redeploy** del proyecto en Vercel.
7. Probá: abrí la web y tocá “WhatsApp directo”. En unos segundos aparece la pestaña **Logística Cuyo** con una fila.

Si cambiás el código del script: **Implementar → Administrar implementaciones → Editar → Nueva versión**. Así se mantiene la misma URL.

> ¿Preferís que un único script reciba las dos webs? Cada aviso de esta web trae `"site": "logistica-cuyo"`, así que el `doPost` existente puede separarlos por ese campo.

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
