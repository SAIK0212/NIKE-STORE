import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="contact-content">
        <img
          src={assets.contact_img}
          alt="Contact Image"
          className="contact-image"
        />
        <div className="contact-details">
          <p className="contact-title">
            Our Store
          </p>
          <p className="contact-text">
            Froum, Koramangala <br />
            Bengaluru - 560062 <br />
            Karnataka, India
          </p>
          <p className="contact-text">
            Tel: +91 9800 0089 <br />
            Email: contactus@Nikefroum.com
          </p>
<button
  className="contact-button"
  onClick={() => window.open("https://maps.app.goo.gl/ueg9XtJgpvCoPknq9 ")}
>
  Get Location
</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
