import { useState } from "react";
import "../style/hero.css";
import purple from "../assets/purple.png";
import red from "../assets/red.png";
import green from "../assets/green.png";

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState("purple");

  const shoeImages = { purple, red, green };

  return (
    <div className="nike-hero-container">
      <div className="nike-left-panel">
        <div className="nike-product-info">
          <h2 className="nike-product-name">JORDANS</h2>
          <p className="nike-product-type">New Collections</p>
          <h3 className="nike-price">$900</h3>

          <div className="nike-color-options">
            <span
              className={`color-circle purple ${selectedColor === "purple" ? "active" : ""}`}
              onClick={() => setSelectedColor("purple")}
            ></span>
            <span
              className={`color-circle red ${selectedColor === "red" ? "active" : ""}`}
              onClick={() => setSelectedColor("red")}
            ></span>
            <span
              className={`color-circle green ${selectedColor === "green" ? "active" : ""}`}
              onClick={() => setSelectedColor("green")}
            ></span>
          </div>

          <button className="nike-buy-button">BUY</button>
        </div>
      </div>

      <div className="nike-right-panel">
        <img
          src={shoeImages[selectedColor]}
          alt={`Nike Shoe - ${selectedColor}`}
          className="nike-hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
