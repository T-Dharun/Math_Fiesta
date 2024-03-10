import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/KEC_SYNDICATE.png";
import img2 from "../assets/Kec_Studens_Page.jpg";

import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import "./footer.css"; // Import the corresponding CSS file

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div className="contact-section">
          <h1 className="contact-title cr">Contact Us</h1>
          <div className="social-icons">
            <ul>
              <a
                href="https://chat.whatsapp.com/BQCgQBAIHdHIxM4yW65jtm"
                rel="noopener noreferrer "
                target={"_blank"}
              >
                <li className="icon">
                  <img src={whatsapp} className="icon-effect" />
                </li>
              </a>
            </ul>
            <ul>
              <a
                href="https://instagram.com/kec_mathematics_club?igshid=YmMyMTA2M2Y="
                rel="noopener noreferrer "
                target={"_blank"}
              >
                <li className="icon">
                  <img src={instagram} className="icon-effect" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="coordinator-section">
          <div className="staff-coordinator">
            <p className="coordinator-title">Staff Co-ordinator</p>
            <div className="coordinator-details cr">
              <p>Dr. M. DHAVAMANI Assc. Prof</p>
              <p>9842740601</p>
              <p>Dr. A.L. NACHAMMAI Asst. Prof (Sr. G)</p>
              <p>9095059729</p>
            </div>
          </div>
          <div className="student-coordinator">
            <p className="coordinator-title">Student Co-ordinator</p>
            <div className="coordinator-details">
              <p>K.A. THAMIZHINI</p>
              <p>9994061719</p>
              <p>S. VISHNUGILANAND</p>
              <p>9994231304</p>
              <p>S. PRANESH</p>
              <p>9659222849</p>
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="social-media-team">
          <p className="team-title">
            <center className="team-center cr">Social Media Team</center>
          </p>
          <ul className="social-media-icons">
            <li>
              <a
                href="https://instagram.com/horcrux._.creations?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img1}
                  alt="Media Partner"
                  className="social-media-icon"
                />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src={img2}
                  alt="Media Partner"
                  className="social-media-icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </center>
      <div className="footer-bottom">
        <hr />
        <div className="footer-developer">
          <p>Developed By</p>{" "}
          <a
            href="https://www.linkedin.com/in/-satheesh-k/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            SATHEESH K&nbsp;
          </a>
          &
          <a
            href="https://www.linkedin.com/in/dharun-t/"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            &nbsp;DHARUN T
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
