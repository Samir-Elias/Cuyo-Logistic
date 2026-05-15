import { FAQS } from '@/data/site';

export default function FAQ() {
  return (
    <section id="faq" className="faq container">
      <div className="faq-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>PREGUNTAS</div>
          <h2>Lo que más<br />nos consultan.</h2>
          <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.55, marginTop: 24, maxWidth: '38ch' }}>
            ¿No encontrás tu respuesta? Escribinos directo y te respondemos
            en menos de 48hs hábiles.
          </p>
          <a href="#contacto" className="btn btn-primary" style={{ marginTop: 20 }}>
            Hacé tu consulta <span className="arrow">→</span>
          </a>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className="ico">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
