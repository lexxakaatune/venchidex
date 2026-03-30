import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      {/* SEO Metadata */}
      <Helmet>
        <title>Home | Venchidex Electrical</title>
        <meta
          name="description"
          content="Discover premium LED, solar, and street lighting solutions from Venchidex Electrical. Energy-efficient, durable, and affordable products for homes and businesses."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero flex-center">
        <div className="hero-content">
          <h1>Lighting Up Your World</h1>
          <p>
            Reliable LED, solar, and street lighting solutions for every need.
          </p>
          <a href="/products" className="btn">Explore Products</a>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="highlights container">
        <h2 className="text-center">Our Solutions</h2>
        <div className="highlight-grid">
          <div className="highlight-card fade-in">
            <img src="/venchidex/assets/images/home-light.jpeg" alt="LED Bulb" />
            <h3>LED Lighting</h3>
            <p>Energy-efficient bulbs and fixtures for homes and offices.</p>
          </div>
          <div className="highlight-card fade-in">
            <img src="/venchidex/assets/images/street-light.jpeg" alt="Street Light" />
            <h3>Street Lights</h3>
            <p>Durable street lighting solutions for communities.</p>
          </div>
          <div className="highlight-card fade-in">
            <img src="/venchidex/assets/images/solar-light.jpeg" alt="Solar Light" />
            <h3>Solar Lights</h3>
            <p>Eco-friendly solar-powered lights for sustainable living.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;