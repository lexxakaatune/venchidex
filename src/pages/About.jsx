import React from "react";
import { Helmet } from "react-helmet";
import "../css/About.css";

function About() {
  return (
    <div className="about">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us | Venchidex Electrical</title>
        <meta
          name="description"
          content="Learn about Venchidex Electrical: our mission, values, and dedication to providing reliable LED, solar, and street lighting solutions in Benin City and beyond."
        />
      </Helmet>

      <section className="about-hero">
        <img src="/assets/images/about.jpg" alt="About Venchidex Electrical" />
        <div className="about-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="container about-content">
        <h2>Our Story</h2>
        <p>
          Venchidex Electrical was founded with a vision to bring reliable,
          energy-efficient lighting solutions to homes, businesses, and
          communities. From LED bulbs to solar-powered street lights, we
          specialize in products that combine durability with affordability.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide sustainable and innovative electrical solutions that
          improve everyday life, reduce energy costs, and contribute to a
          brighter future.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>✅ Quality and durability in every product</li>
          <li>✅ Commitment to sustainability</li>
          <li>✅ Customer satisfaction above all</li>
          <li>✅ Innovation and continuous improvement</li>
        </ul>
      </section>
    </div>
  );
}

export default About;