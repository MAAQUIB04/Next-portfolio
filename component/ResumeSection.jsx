import React from "react";

function ResumeSection() {
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-briefcase" /> Resume
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Education &amp; <span>Experience</span>
            </h1>
          </div>
          <div className="resume-timeline">
            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <div>
                <span className="color-primary">
                  <strong>Infosys</strong>
                </span>
                <span className="date">
                  <strong>Nov 2021 - Present</strong>
                </span>
              </div>
              <h2>
                <strong>Technology Analyst</strong>
              </h2>
              <ul>
                <li>
                  Spearheading the development of{" "}
                  <strong>web applications</strong> as part of the{" "}
                  <strong>Travel and Lifestyle Services</strong> team using{" "}
                  <strong>microfrontend technology (One App)</strong>, improving
                  user load times by <strong>20%</strong>.
                  <br />
                  <br />
                </li>
                <li>
                  Collaborating with <strong>stakeholders</strong> to align
                  design strategies with <strong>business goals</strong> and
                  optimize <strong>user experiences</strong>.
                  <br />
                  <br />
                </li>
                <li>
                  Following <strong>Agile methodologies</strong> to produce
                  rapid iterations and deliver features that meet client
                  expectations.
                  <br />
                  <br />
                </li>
                <li>
                  Contributed to the <strong>full SDLC</strong>, including{" "}
                  <strong>analysis, design, implementation, testing,</strong>{" "}
                  and <strong>deployment</strong>.
                  <br />
                  <br />
                </li>
                <li>
                  Providing <strong>Knowledge Transfer (KT)</strong> sessions to
                  other engineers, assisting them in completing their stories,
                  and facilitating their onboarding process.
                  <br />
                  <br />
                </li>
                <li>
                  Reviewing <strong>pull requests (PRs)</strong> to ensure{" "}
                  <strong>coding standards</strong> and{" "}
                  <strong>application quality</strong>.
                  <br />
                  <br />
                </li>
                <li>
                  Participating in the release of applications to{" "}
                  <strong>production</strong>, coordinating with{" "}
                  <strong>cross-functional teams</strong> to ensure smooth
                  deployment.
                  <br />
                  <br />
                </li>
              </ul>
            </div>

            <div
              className="item scroll-animation"
              data-animation="fade_from_right"
            >
              <div>
                <span className="color-primary">
                  <strong>
                    Acropolis Institute Of Technology And Research, Indore
                  </strong>
                </span>
                <span className="date">
                  <strong>Aug 2017 – July 2021</strong>
                </span>
              </div>
              <h2>
                <strong>Bachelor of Technology</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
