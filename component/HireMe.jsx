import React from "react";
import LinkedIn from "./icons/LinkedIn";
import Mail from "./icons/Mail";
import Call from "./icons/Call";
import Github from "./icons/Github";

function HireMe() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src="assets/images/aquib.png" alt="Logo" width={200} />
        <span className="designation">Business Analyst</span>
      </div>
      <img className="me" src="assets/images/AquibProfile.jpeg" alt="Me" height={370} width={250} />
      <h2 className="address">Based in Mississauga, Ontario, Canada</h2>
      <p className="copyright">© 2025 Aquib. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://www.linkedin.com/in/maaquibkhan/"
            target="_blank"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href="mailto:maak0401@gmail.com">
            <Mail />
          </a>
        </li>
        <li>
          <a href="tel:+1 (437) 424-6034">
            <Call />
          </a>
        </li>
        <li>
          <a href="https://github.com/MAAQUIB04" target="_blank">
            <Github />
          </a>
        </li>
      </ul>
      <a href="/Mohammad-Abdul-Aquib-Khan.pdf" download={true} className="theme-btn">
        <i className="las la-arrow-down" /> Download CV
      </a>
    </div>
  );
}

export default HireMe;
