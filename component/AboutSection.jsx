import React from "react";

function AboutSection() {
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="lar la-user" /> About
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Decoding Data, Crafting Stories, <br /> and <span>Powering</span> Business Impact{" "}
              <span>with Precision</span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Pioneered<strong> data driven solutions</strong> as an Analyst with hands-on exprience in{" "}
            <strong>Data Analysis Modeling and Visualization</strong>, I specialize in building{" "}
            <strong>seamless</strong>, <strong>responsive</strong> and{" "}
            <strong>user-focused dashboards and reports</strong>.
          </p>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            My expertise lies in technologies like <strong>Power BI</strong>,{" "}
            <strong>Python</strong>, <strong>SQL</strong>, and{" "}
            <strong>Azure</strong>, enabling me to craft solutions that are not
            only <strong>robust</strong> but also <strong>future-ready</strong>.
          </p>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Whether it's enhancing <strong>user experiences</strong>, collaborating{" "}
            <strong>with cross functional</strong>, teams{" "}
            <strong>and optmizing processes</strong>, I thrive on solving problems
            with
            <strong> creativity</strong> and <strong>precision</strong>. I’m{" "}
            <strong>curious</strong> by nature, <strong>confident</strong> in my
            skills, and dedicated to constantly evolving—one{" "}
            <strong>innovative project</strong> at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
