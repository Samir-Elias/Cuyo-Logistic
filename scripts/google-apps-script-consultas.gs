/**
 * Registro de consultas de la web de Logística Cuyo → Google Sheets.
 *
 * Instalación: ver docs/registro-de-consultas.md
 * 1) Pegar este código en Extensiones → Apps Script de la planilla.
 * 2) Cambiar TOKEN por una clave larga (la misma que LEADS_SHEET_TOKEN en Vercel).
 * 3) Implementar → Nueva implementación → Aplicación web → Ejecutar como: Yo · Acceso: Cualquier usuario.
 */

const TOKEN = 'CAMBIAR-POR-UNA-CLAVE-LARGA';
const SHEET_NAME = 'Consultas';
const TZ = 'America/Argentina/Mendoza';

const HEADERS = [
  'Fecha', 'Canal', 'Desde', 'Nombre / Empresa', 'Email', 'Teléfono', 'Servicio',
  'Mensaje', 'Dispositivo', 'País', 'Ciudad', 'Vino desde', 'Campaña', 'Página',
];

const CHANNEL = { whatsapp: 'WhatsApp', phone: 'Teléfono', email: 'Email', form: 'Formulario → WhatsApp' };

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad json' });
  }
  if (!body || body.token !== TOKEN) return json_({ ok: false, error: 'unauthorized' });

  const l = body.lead || {};
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }
    const fecha = l.ts ? Utilities.formatDate(new Date(l.ts), TZ, 'yyyy-MM-dd HH:mm:ss') : '';
    sh.appendRow([
      fecha, CHANNEL[l.channel] || l.channel, l.source, l.name, l.email, l.phone, l.service,
      l.message, l.device, l.country, l.city, l.referrer, l.utm, l.page,
    ].map(safe_));
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

// Evita que un texto que empieza con = + - @ se interprete como fórmula.
function safe_(v) {
  const s = v == null ? '' : String(v);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
