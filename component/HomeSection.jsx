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
              <i className="las la-home" /> Introduction
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              Hi, I'm <span>Mohammad Abdul Aquib</span>,
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            a <b>Data Analyst</b> with <b>2 years</b> of hands-on
            experience in Data Analysis, Modeling and Visualization specializing in creating responsive
            and dynamic dashboards and reports. Skilled in a range of technologies
            including <b>Python</b>, <b>Power BI</b>, <b>SQL</b>,{" "}
            <b>Power Query</b>, <b>DAX</b>, <b>Tableau</b>,{" "}
            <b>MS Excel</b>, <b>SAP</b>,{" "}
            <b>Azure</b> and more.
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
              <h1>2</h1>
              <p>
                Years of Experience
              </p>
            </div>
            <div
              className="right scroll-animation"
              data-animation="fade_from_right"
            >
              <h1>5</h1>
              <p>projects </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
