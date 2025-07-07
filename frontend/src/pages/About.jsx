import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";
import "../style/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <Title text1={"ABOUT"} text2={"NIKE"} />
      </div>

      <div className="about-section">
        <img
          src={assets.about_img}
          alt="About Nike"
          className="about-image"
        />
        <div className="about-content">
          <p>
            👟 At Nike, we bring inspiration and innovation to every athlete* in the world. (*If you have a body, you are an athlete.) Our mission is to push the boundaries of human potential through sport and style.
          </p>
          <p>
            🏃‍♀️ From groundbreaking footwear and apparel technology to iconic designs that shape culture, Nike sets the standard for performance and self-expression. We believe greatness is never done — it’s trained for, lived in, and earned every day.
          </p>
          <strong className="about-subheading">Our Purpose</strong>
          <p>
            ✨ We exist to move the world forward through the power of sport. Every collection, every product, every innovation is driven by our commitment to help you perform at your best — on the field, in the streets, or wherever you choose to Just Do It.
          </p>
        </div>
      </div>

      <div className="about-newsletter">
        <NewsLetterBox />
      </div>
    </div>
  );
};

export default About;
