import { useTranslation } from "react-i18next";
import { IconWhatsApp } from "./Icons";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="block" id="contact">
      <div className="container">
        <div>
          <div className="section-label reveal">{t("contactSec.label")}</div>
          <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("contactSec.title") }} />
          <p className="contact-sub reveal">
            {t("contactSec.lead")} {t("contactSec.response")}
          </p>
        </div>
        <div className="contact-blocks">
          <div className="contact-block reveal">
            <div className="k">{t("contactPage.info.email")}</div>
            <div className="v">
              <a href="mailto:info@microtechindia.com">info@microtechindia.com</a>
            </div>
          </div>
          <div className="contact-block reveal">
            <div className="k">{t("contactPage.info.persons")}</div>
            <div className="v contact-persons">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span>Parv Patel — </span>
                <a href="tel:+918866831889">88668 31889</a>
                <a href="https://wa.me/918866831889" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', color: '#25D366', borderBottom: 'none' }} title="Chat on WhatsApp">
                  <IconWhatsApp />
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <span>Bharat Patel — </span>
                <a href="tel:+919427340658">94273 40658</a>
                <a href="https://wa.me/919427340658" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', color: '#25D366', borderBottom: 'none' }} title="Chat on WhatsApp">
                  <IconWhatsApp />
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Dhruvil Patel — </span>
                <a href="tel:+919427169961">94271 69961</a>
                <a href="https://wa.me/919427169961" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', color: '#25D366', borderBottom: 'none' }} title="Chat on WhatsApp">
                  <IconWhatsApp />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-block reveal">
            <div className="k">{t("contactPage.info.office")}</div>
            <div className="v addr">
              Microtech India<br />
              Plot No. 5046, G.I.D.C.,<br />
              Ankleshwar — 393 002,<br />
              Gujarat, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
