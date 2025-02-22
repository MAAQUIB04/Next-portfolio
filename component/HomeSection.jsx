import React from "react";

function HomeSection() {
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-home" /> Introduce
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Hi from <span>Aquin</span>, Business Analyst
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Business Analyst with more than <b>3 years</b> of hands-on
            experience in web development, specializing in creating responsive
            and dynamic user interfaces. Skilled in a range of technologies
            including <b>Html</b>, <b>CSS</b>, <b>Javascript</b>,{" "}
            <b>React.js</b>, <b>Redux.js</b>, <b>Next.js</b>,{" "}
            <b>Node.js</b>, <b>express.js</b>,{" "}
            <b>AWS</b> and more.
          </p>
          <a
            href="#projects"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <img src="assets/images/round-text.png" alt="" />
            <i className="las la-arrow-down" />
          </a>
          <div className="facts d-flex">
            <div
              className="left scroll-animation"
              data-animation="fade_from_left"
            >
              <h1>3+</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div
              className="right scroll-animation"
              data-animation="fade_from_right"
            >
              <h1>10+</h1>
              <p>projects completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
