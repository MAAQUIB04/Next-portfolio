import React from "react";

function Menu() {
  return (
    <ul className="menu scroll-nav d-flex">
      <li>
        <a className="scroll-to" href="#home">
          <span>Home</span> <i className="las la-home" />
        </a>
      </li>
      <li>
        <a className="scroll-to" href="#about">
          <span>About</span> <i className="lar la-user" />
        </a>
      </li>
      <li>
        <a className="scroll-to" href="#resume">
          <span>Resume</span> <i className="las la-briefcase" />
        </a>
      </li>
      <li>
        <a href="#projects">
          <span>Projects</span> <i className="las la-stream" />
        </a>
      </li>
      <li>
        <a className="scroll-to" href="#skills">
          <span>Skills</span> <i className="las la-shapes" />
        </a>
      </li>
      <li>
        <a className="scroll-to" href="#awards-certification">
          <span>Awards and Certifications</span>{" "}
          <i className="las la-grip-vertical" />
        </a>
      </li>
      <li>
        <a className="scroll-to" href="#contact">
          <span>Contact</span> <i className="las la-envelope" />
        </a>
      </li>
    </ul>
  );
}

export default Menu;
