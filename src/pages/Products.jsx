import React from "react";
import { Helmet } from "react-helmet-async";
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
            <img src="https://ik.imagekit.io/kdcrwlsl7/Venchidex/home-light.jpeg" alt="LED Bulb" />
            <h3>LED Bulbs</h3>
            <p>Energy-saving LED bulbs for homes and offices.</p>
          </div>
          <div className="product-card fade-in">
            <img src="https://ik.imagekit.io/kdcrwlsl7/Venchidex/street-light.jpeg?updatedAt=1775504704211" alt="Street Light" />
            <h3>Street Lights</h3>
            <p>Durable street lighting solutions for communities.</p>
          </div>
          <div className="product-card fade-in">
            <img src="https://ik.imagekit.io/kdcrwlsl7/Venchidex/solar-light.jpeg?updatedAt=1775504703901" alt="Solar Light" />
            <h3>Solar Street Lights</h3>
            <p>Eco-friendly solar-powered lights for sustainable living.</p>
          </div>
          <div className="product-card fade-in">
            <img src="https://ik.imagekit.io/kdcrwlsl7/Venchidex/https:__ik.imagekit.io_kdcrwlsl7_ik-genimg-prompt-Component_20image_20for_20elet3onic_20store_20an_20image_20to_20show_20socket_2C_20switches_20and_20wires_0A_4ee1ebad-76c4-497c-926d-77b6b245d294_image.jpg_tr=f-jpg_2Ch-1024_2Cw-1024&ik-s=2241bc567504e8cdd42a1c506236912346338d58" />
            <h3>Electrical Components</h3>
            <p>Switches, sockets, and wiring accessories.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;