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
              Crafting Digital Experiences <br /> with <span>Purpose</span> and{" "}
              <span>Passion</span>
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            With over <strong>3+ years</strong> of hands-on experience as a{" "}
            <strong>frontend developer</strong>, I specialize in building{" "}
            <strong>seamless</strong>, <strong>responsive</strong> and{" "}
            <strong>user-focused digital products</strong>.
          </p>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            My expertise lies in technologies like <strong>React.js</strong>,{" "}
            <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
            <strong>AWS</strong>, enabling me to craft solutions that are not
            only <strong>robust</strong> but also <strong>future-ready</strong>.
          </p>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            Whether it's enhancing <strong>user experiences</strong>, mentoring{" "}
            <strong>new talent</strong>, or leading{" "}
            <strong>full-stack projects</strong>, I thrive on solving problems
            with
            <strong>creativity</strong> and <strong>precision</strong>. I’m{" "}
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
