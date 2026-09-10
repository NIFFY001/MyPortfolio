import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    const subject = "Enquiry Form";

    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    window.location.href = `mailto:victorakinsanmi2018@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="modern-contact-form" onSubmit={handleSendEmail}>
      <div className="form-field">
        <label htmlFor="name">Your name</label>

        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email address</label>

        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Your message</label>

        <textarea
          id="message"
          placeholder="Tell me a little about your project..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="contact-submit">
        <span>Send message</span>
        <span className="submit-arrow">↗</span>
      </button>
    </form>
  );
};

export default ContactForm;
