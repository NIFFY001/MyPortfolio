import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameSpace, setNameSpace] = useState(2); // default space

  const handleSendEmail = () => {
    const subject = "Enquiry Form";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:victorakinsanmi2018@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form>
        <div className="mb-4">
          <label className="block text-white"></label>
          <input
            type="text"
            className={`w-full px-${nameSpace} py-2 border-b border-gray-300 bg-transparent`}
            placeholder="Name"
            style={{ borderBottomColor: "#CCCCCC" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white"></label>
          <input
            type="email"
            className="w-full px-2 py-2 border-b border-gray-300 bg-transparent"
            placeholder="Email"
            style={{ borderBottomColor: "#CCCCCC" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white"></label>
          <textarea
            className="w-full px-2 py-2 border-b border-gray-300 bg-transparent"
            placeholder="Message"
            rows="2"
            style={{ borderBottomColor: "#CCCCCC" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleSendEmail}
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
