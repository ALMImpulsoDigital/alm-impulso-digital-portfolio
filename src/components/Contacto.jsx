import "../styles/contacto.css";

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-inner">
        <h2 className="contacto-title">Contacto</h2>

        <p className="contacto-text">
          ¿Tenés una idea o proyecto en mente?
          <br />
          Hablemos y veamos cómo impulsarlo.
        </p>

        <a className="contacto-cta" href="mailto:almimpulsodigital@gmail.com">
          Escribime
        </a>

        <div className="contacto-grid">
          <div className="contacto-block">
            <h3 className="contacto-subtitle">Email</h3>
            <a
              className="contacto-link"
              href="mailto:almimpulsodigital@gmail.com"
            >
              almimpulsodigital@gmail.com
            </a>
          </div>

          <div className="contacto-block">
            <h3 className="contacto-subtitle">Sígueme</h3>

            <div className="contacto-social">
              <a
                className="social-btn"
                href="https://www.instagram.com/alm.impulsodigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <img src="/assets/instagram.svg" alt="Instagram" />
              </a>

              <a
                className="social-btn"
                href="https://github.com/ALMImpulsoDigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <img src="/assets/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
