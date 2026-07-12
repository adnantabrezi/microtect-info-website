export function Contact() {
  return (
    <section className="block" id="contact">
      <div className="container">
        <div>
          <div className="section-label reveal">Get in touch</div>
          <h2 className="section-h2 reveal">
            Let's discuss your <span className="red">micronization</span> needs.
          </h2>
          <p className="contact-sub reveal">
            Reach out to our technical team to discuss your specific API requirements, request
            a feasibility trial, or schedule a facility tour. We respond to all technical inquiries within 24 hours.
          </p>
        </div>
        <div className="contact-blocks">
          <div className="contact-block reveal">
            <div className="k">Email</div>
            <div className="v">
              <a href="mailto:micro5046@gmail.com">micro5046@gmail.com</a>
            </div>
          </div>
          <div className="contact-block reveal">
            <div className="k">Contact Persons</div>
            <div className="v contact-persons">
              <div>Ravi Patel — <a href="tel:+918866831889">88668 31889</a></div>
              <div>Bharat Patel — <a href="tel:+919427340658">94273 40658</a></div>
              <div>Dhrunil Patel — <a href="tel:+919427169961">94271 69961</a></div>
            </div>
          </div>
          <div className="contact-block reveal">
            <div className="k">Office &amp; Works</div>
            <div className="v addr">
              Microtech India<br />
              Plot No. 5046, G.I.D.C.,<br />
              Ankleshwar — 393 002,<br />
              Gujarat, India<br />
              Ph.: +91 2646 227453
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
