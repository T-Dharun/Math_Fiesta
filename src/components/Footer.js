import React from "react";

import img1 from "../assets/KEC_SYNDICATE.png";
import img2 from "../assets/Kec_Studens_Page.png";

import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div className="contact-section">
          <h1 className="contact-title cr">Contact Us</h1>
          <div className="social-icons">
            <ul>
              <a
                href="https://chat.whatsapp.com/GIrcSl34axX2a5elNtXDN6"
                rel="noopener noreferrer "
                target={"_blank"}
              >
                <li className="icon">
                  <img src={whatsapp} className="icon-effect" alt="whatsapp" />
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
                  <img src={instagram} className="icon-effect" alt="insta" />
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
              <p>ATHISH S K</p>
              <p>9790010353</p>
              <p>BOMMISRILEKKHAA G</p>
              <p>6380316750</p>
              <p>POONTAMILSELVAN P</p>
              <p>9361036499</p>
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
                href="https://www.instagram.com/kec_syndicate?igsh=MXBlbWI3em0wNnFmZQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img1}
                  alt="Media Partner"
                  className="social-media-icon syndicate"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kec_students_page?igsh=czYzMjAxc3NtZmYz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img2}
                  alt="Media Partner"
                  className="social-media-icon kec-student"
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
            rel="noreferrer"
          >
            SATHEESH K&nbsp;
          </a>
          &
          <a
            href="https://www.linkedin.com/in/dharun-t/"
            className="underline underline-offset-2"
            target={"_blank"}
            rel="noreferrer"
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
