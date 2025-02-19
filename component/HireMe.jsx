import React from "react";
import LinkedIn from "./icons/LinkedIn";
import Mail from "./icons/Mail";
import Call from "./icons/Call";
import Github from "./icons/Github";

function HireMe() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="assets/images/Sid.png" alt="Logo" width={200} />
        <span className="designation">Frontend Developer</span>
      </div>
      <img className="me" src="assets/images/profile.jpeg" alt="Me" />
      <h2 className="address">Base in Indore, India</h2>
      <p className="copyright">© 2025 Siddhant. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/in/siddhanthakur/"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="mailto:siddhantthakur43@gmail.com">
            <Mail />
          </a>
        </li>
        <li>
          <a href="tel:+917477292838">
            <Call />
          </a>
        </li>
        <li>
          <a href="https://github.com/siddhanthakur43" target="_blank">
            <Github />
          </a>
        </li>
      </ul>
      <a href="/Siddhant-Singh-Thakur.pdf" download={true} className="theme-btn">
        <i className="las la-arrow-down" /> Download CV
      </a>
    </div>
  );
}

export default HireMe;
