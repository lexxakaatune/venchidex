import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Us | Venchidex Electrical</title>
        <meta
          name="description"
          content="Get in touch with Venchidex Electrical for inquiries about LED, solar, and street lighting solutions. Contact us via phone, email, or WhatsApp."
        />
      </Helmet>

      <section className="contact-hero">
        <img src="https://ik.imagekit.io/kdcrwlsl7/Venchidex/image.jpg" alt="Contact Venchidex Electrical" />
        <div className="contact-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="container contact-content">
        <h2>We’d Love to Hear From You</h2>
        <p>
          Reach out for product inquiries, quotes, or support. Our team is ready
          to assist you.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p><strong>Phone:</strong> +234 904 090 3671</p>
            <p><strong>Email:</strong> info@venchidex.com</p>
            <p><strong>Address:</strong> Benin City, Edo State, Nigeria</p>
            <a
              href="https://wa.me/2349040903671"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;