import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials">
      {/* SEO Metadata */}
      <Helmet>
        <title>Testimonials | Venchidex Electrical</title>
        <meta
          name="description"
          content="See what our customers say about Venchidex Electrical. Read testimonials and FAQs about our LED, solar, and street lighting solutions."
        />
      </Helmet>

      <section className="container">
        <h1 className="text-center">What Our Customers Say</h1>
        <div className="testimonial-grid">
          <div className="testimonial-card fade-in">
            <p>
              “The LED bulbs from Venchidex have cut my electricity bill in half.
              Excellent quality and service!”
            </p>
            <h4>- Sarah, Benin City</h4>
          </div>
          <div className="testimonial-card fade-in">
            <p>
              “Our community street lights are brighter and safer thanks to their
              solar solutions.”
            </p>
            <h4>- Michael, Edo State</h4>
          </div>
          <div className="testimonial-card fade-in">
            <p>
              “Affordable, durable, and stylish. I highly recommend Venchidex
              Electrical.”
            </p>
            <h4>- Grace, Lagos</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container faq">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Do you offer installation services?</h4>
          <p>Yes, we provide professional installation for all our products.</p>
        </div>
        <div className="faq-item">
          <h4>Are your solar lights weather-resistant?</h4>
          <p>Absolutely. Our solar lights are designed to withstand rain and heat.</p>
        </div>
        <div className="faq-item">
          <h4>Do you deliver outside Benin City?</h4>
          <p>Yes, we deliver nationwide across Nigeria.</p>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;