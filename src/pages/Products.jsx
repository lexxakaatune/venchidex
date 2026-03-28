import React from "react";
import { Helmet } from "react-helmet";
import "../css/Products.css";

function Products() {
  return (
    <div className="products">
      {/* SEO Metadata */}
      <Helmet>
        <title>Products | Venchidex Electrical</title>
        <meta
          name="description"
          content="Browse Venchidex Electrical's product catalog: LED bulbs, solar street lights, electrical components, and more. Durable, efficient, and affordable solutions."
        />
      </Helmet>

      <section className="container">
        <h1 className="text-center">Our Products</h1>
        <div className="product-grid">
          <div className="product-card fade-in">
            <img src="/assets/images/home-light.jpg" alt="LED Bulb" />
            <h3>LED Bulbs</h3>
            <p>Energy-saving LED bulbs for homes and offices.</p>
          </div>
          <div className="product-card fade-in">
            <img src="/assets/images/street-light.jpg" alt="Street Light" />
            <h3>Street Lights</h3>
            <p>Durable street lighting solutions for communities.</p>
          </div>
          <div className="product-card fade-in">
            <img src="/assets/images/solar-light.jpg" alt="Solar Light" />
            <h3>Solar Street Lights</h3>
            <p>Eco-friendly solar-powered lights for sustainable living.</p>
          </div>
          <div className="product-card fade-in">
            <img src="/assets/images/components.jpg" alt="Electrical Components" />
            <h3>Electrical Components</h3>
            <p>Switches, sockets, and wiring accessories.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;