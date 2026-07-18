import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconMail, IconPhone, IconMapPin, IconClock, IconWhatsApp } from "../components/Icons";

export function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mailData, setMailData] = useState({ subject: "", body: "" });
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject || "Inquiry from Website";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    setMailData({ subject, body });
    setShowModal(true);
  };

  const handleOpenGmail = () => {
    const to = "info@microtechindia.com";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(mailData.subject)}&body=${encodeURIComponent(mailData.body)}`;
    window.open(url, "_blank");
    setShowModal(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleOpenDefault = () => {
    const to = "info@microtechindia.com";
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(mailData.subject)}&body=${encodeURIComponent(mailData.body)}`;
    setShowModal(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopyText = () => {
    const textToCopy = `To: info@microtechindia.com\nSubject: ${mailData.subject}\n\n${mailData.body}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label reveal">{t("contactPage.label")}</div>
          <h1 className="page-hero-title reveal" dangerouslySetInnerHTML={{ __html: t("contactPage.title") }} />
          <p className="page-hero-lead reveal">
            {t("contactPage.lead")}
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="block" id="contact-page-content">
        <div className="container">
          <div className="contact-page-grid">
            {/* Left — Form */}
            <div className="contact-form-wrap">
              <div className="section-label reveal">{t("contactPage.sendLabel")}</div>
              <h2 className="section-h2 reveal" dangerouslySetInnerHTML={{ __html: t("contactPage.sendTitle") }} />
              <form className="contact-form reveal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">{t("contactPage.fields.name")}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder={t("contactPage.fields.namePl")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">{t("contactPage.fields.email")}</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder={t("contactPage.fields.emailPl")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">{t("contactPage.fields.subject")}</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t("contactPage.fields.subjectPl")}</option>
                    <option value="Contract Micronization Quote">{t("contactPage.fields.subjects.quote")}</option>
                    <option value="Feasibility Trial Request">{t("contactPage.fields.subjects.trial")}</option>
                    <option value="Facility Tour">{t("contactPage.fields.subjects.tour")}</option>
                    <option value="R&D Consultation">{t("contactPage.fields.subjects.rnd")}</option>
                    <option value="General Inquiry">{t("contactPage.fields.subjects.general")}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">{t("contactPage.fields.message")}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t("contactPage.fields.messagePl")}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit-btn">
                  {submitted ? t("contactPage.fields.sending") : t("contactPage.fields.sendBtn")}{" "}
                  <span className="arrow">→</span>
                </button>
              </form>

              {/* ── Location Map ── */}
              <div className="reveal" style={{ marginTop: "2rem", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--line)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4443.68849564297!2d73.03562606159109!3d21.612859814833453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023b5f91c5655%3A0x38d0dcce47c5c960!2sMICROTECH%20(INDIA)!5e0!3m2!1sen!2sin!4v1784106565420!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* Right — Contact Details */}
            <div className="contact-details-wrap">
              <div className="contact-detail-card reveal">
                <div className="icon-circle">
                  <IconMail />
                </div>
                <div className="contact-detail-label">{t("contactPage.info.email")}</div>
                <a href="mailto:info@microtechindia.com" className="contact-detail-value">
                  info@microtechindia.com
                </a>
              </div>

              <div className="contact-detail-card reveal">
                <div className="icon-circle">
                  <IconPhone />
                </div>
                <div className="contact-detail-label">{t("contactPage.info.persons")}</div>
                <div className="contact-detail-value contact-detail-persons">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span>Bharat Patel — </span>
                    <a href="tel:+919427340658">94273 40658</a>
                    <a href="https://wa.me/919427340658" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', color: '#25D366', borderBottom: 'none' }} title="Chat on WhatsApp">
                      <IconWhatsApp />
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <span>Parv Patel — </span>
                    <a href="tel:+918866831889">88668 31889</a>
                    <a href="https://wa.me/918866831889" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', color: '#25D366', borderBottom: 'none' }} title="Chat on WhatsApp">
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

              <div className="contact-detail-card reveal">
                <div className="icon-circle">
                  <IconMapPin />
                </div>
                <div className="contact-detail-label">{t("contactPage.info.office")}</div>
                <div className="contact-detail-value contact-detail-address">
                  <div style={{ marginBottom: '1.2rem' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Office & Work</div>
                    Microtech India<br />
                    Plot No. 5046, G.I.D.C.,<br />
                    Ankleshwar — 393 002,<br />
                    Gujarat, India
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>Unit - 1</div>
                    Microtech India<br />
                    Plot No. 205-206-207/20,<br />
                    GIDC, Estate, Panoli — 394 115,<br />
                    Gujarat, India
                  </div>
                </div>
              </div>

              <div className="contact-detail-card reveal">
                <div className="icon-circle">
                  <IconClock />
                </div>
                <div className="contact-detail-label">{t("contactPage.info.responseTime")}</div>
                <div className="contact-detail-value" dangerouslySetInnerHTML={{ __html: t("contactPage.info.responseLead") }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Client Selection Modal ── */}
      {showModal && (
        <div className="mail-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="mail-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="mail-modal-btn-close" onClick={() => setShowModal(false)}>×</button>
            <h3 className="mail-modal-title">Send Email</h3>
            <p className="mail-modal-lead">
              Choose how you would like to send your inquiry to <strong>info@microtechindia.com</strong>:
            </p>
            <div className="mail-modal-options">
              <button className="mail-modal-btn mail-modal-btn-gmail" onClick={handleOpenGmail}>
                Open Gmail (Web)
              </button>
              <button className="mail-modal-btn mail-modal-btn-default" onClick={handleOpenDefault}>
                Default Mail App
              </button>
              <button className="mail-modal-btn mail-modal-btn-copy" onClick={handleCopyText}>
                {copied ? "Copied!" : "Copy Email Content"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPage;
