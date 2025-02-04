import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name && email && message) {
      const emailBody = `
      Hello Jeric,

      I hope you're doing well.

      You have received a new message from the contact form on your portfolio website. Below are the details:

      Name: ${name}
      Email: ${email}

      Message:
      ${message}

      Best regards,
      ${name}
      `;

      const mailtoLink = `mailto:javierjericm@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
        emailBody
      )}`;
      window.location.href = mailtoLink;
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind? Contact me here.</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find Me <i className="uil uil-corner-right-down"></i>
            </h2>
            <p>
              <i className="uil uil-envelope"></i> Email: javierjericm@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i> Contact No: +63 956 634 3793
            </p>
          </div>
        </div>
        <div className="col">
          <div className="form-control">
            <form onSubmit={handleSubmit}>
              <div className="form-inputs">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-area">
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-button">
                <button type="submit" className="btn" id="send-button">
                  Send <i className="uil uil-message"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
