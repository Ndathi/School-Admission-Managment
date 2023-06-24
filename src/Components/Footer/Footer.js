import React from "react";
import "./Footer.css"; //import css style
import logo from "../../images/logo-white.png";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer>
      <ScrollToTop smooth top="1000" style={{ backgroundColor: "#f7d919" }} />
      <ul className="footer-list">
        <li className="footer-item">
          <img src={logo} alt="" />
          <p>
            UCera is perhaps the biggest name in online courses and education.
            It has a global roster of universities and partners to offer more
            than 3,900 specialized courses.
          </p>
        </li>
        <li className="footer-item">
          <h4>Address</h4>
          <p>Nairobi Kenya</p>
        </li>
        <li className="footer-item">
          <h4>Contact</h4>
          <p>
            Mobile: (+254) 720 766 839 <br /> Hotline: 1800 - 1102 <br /> Mail:
            alexkimutai32@gmail.com
          </p>
        </li>
        <li className="footer-item">
          <h4>Hour of operation</h4>
          <p>
            Monday - Friday: 09:00 - 20:00 <br /> Sunday & Saturday: 10:30 -
            22:00
          </p>
        </li>
      </ul>
      <p className="copyright-text">
        <small>Copyright &copy; All Rights Reserved Alex Kimutai.</small>
      </p>
    </footer>
  );
};

export default Footer;
