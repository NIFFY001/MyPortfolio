import React from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <NavBar />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-glow"></div>
        <div className="contact-orbit contact-orbit-one"></div>
        <div className="contact-orbit contact-orbit-two"></div>

        <div className="contact-hero-content">
          <div className="contact-label">
            <span>04</span>
            <p>Get in touch</p>
          </div>

          <h1>
            Let's build something
            <span>worth talking about.</span>
          </h1>

          <p className="contact-intro">
            Have a project, idea, or opportunity in mind? Tell me what you're
            working on and let's start a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* CONTACT DETAILS */}
          <div className="contact-info">
            <div className="contact-info-header">
              <span>01</span>
              <h2>Contact details</h2>
            </div>

            <div className="contact-details">
              <a
                href="mailto:victorakinsanmi2018@gmail.com"
                className="contact-detail"
              >
                <div>
                  <span className="detail-label">EMAIL</span>
                  <p>victorakinsanmi2018@gmail.com</p>
                </div>

                <span className="detail-arrow">↗</span>
              </a>

              <a href="tel:09152043037" className="contact-detail">
                <div>
                  <span className="detail-label">PHONE</span>
                  <p>+353899856862</p>
                </div>

                <span className="detail-arrow">↗</span>
              </a>
            </div>

            {/* SOCIALS */}
            <div className="social-section">
              <div className="contact-info-header">
                <span>02</span>
                <h2>Find me online</h2>
              </div>

              <div className="social-grid">
                <a
                  href="https://github.com/NIFFY001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div>
                    <span className="social-name">GitHub</span>
                    <small>@NIFFY001</small>
                  </div>

                  <span className="social-arrow">↗</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/akinsanmi-victor-oluwanifemi-4ba3a61b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div>
                    <span className="social-name">LinkedIn</span>
                    <small>Victor Akinsanmi</small>
                  </div>

                  <span className="social-arrow">↗</span>
                </a>

                <a
                  href="https://www.instagram.com/iam_victorakinsanmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div>
                    <span className="social-name">Instagram</span>
                    <small>@iam_victorakinsanmi</small>
                  </div>

                  <span className="social-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <div>
                <span>03</span>
                <h2>Send a message</h2>
              </div>

              <p>I'll get back to you as soon as possible.</p>
            </div>

            <div className="form-box">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STATEMENT */}
      <section className="contact-end">
        <div className="contact-end-line"></div>

        <p>
          <span>Available</span> for selected opportunities
        </p>

        <div className="contact-end-line"></div>
      </section>
    </div>
  );
}

export default Contact;
