import React from "react";

function ProjectSection() {
  return (
    <section
      className="services-area page-section scroll-to-page"
      id="projects"
    >
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-stream" /> Projects
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              My <span>Projects</span>
            </h1>
          </div>
          <div className="services-items">
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Dream Team - Canadian Premier League</h2>
              <p>
                Developed a player assessment dashboard to analyze player performance data and team statistics. 
                Determined the best players for each position based on key performance indicators (KPIs) like goals, assists, and tackles. 
                Created the "Dream Team" for the 2019 CPL Season by prioritizing requirements and aligning them with project objectives. 
              </p>
              <p>
                <span className="color-primary">Skills:</span> Power BI ·
                Power Query · Python · Scikit-learn · Data Modeling · Data Visualization 
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Fifa World Cup (Qatar 2022) - Prediction</h2>
              <p>
                A Created a comprehensive predictive model using Poisson Distribution to forecast Qatar 2022 World Cup outcomes. 
                Incorporated web-scraped historical World Cup data and team qualifications to forecast potential champions and an optimized 4-3-3 squad lineup. 
                Conducted risk analysis to address potential gaps in predictions and improve model accuracy.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Pytohn ·
                Pandas · Numpy · Pickle · Seaborn · Statistics ·
                Poisson Distribution 
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Spotify Data Analysis</h2>
              <p>
                A Spearheaded a 4-member team to perform statistical analysis on the Spotify data. 
                Uncovered audio trends from 1920 to 2020, revealing insights on song popularity, length, and attribute changes. 
                Designed impactful visualizations, highlighting key correlations 
                - the recent rise in energy and loudness, demonstrating expertise in data interpretation and music evolution across decades.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Python ·
                Pandas · Seaborn · Matplotlib · Statistics ·
                Correlation Matrix 
              </p>
            </div>
            <div
              className="service-item scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-code" />
              <h2>Gym Management Dashboard</h2>
              <p>
                A dashboard to manage multiple branches, employees, trainers,
                coaches, personal trainings, plans, memberships, invoices,
                therapies, users, coupons, biometric attendance etc,
                built on React, Node, Express js, pg db.
              </p>
              <p>
                <span className="color-primary">Skills:</span> Express.js · HTML5 · CSS3
                · React.js · Node.js · React Hooks · REST APIs · Responsive Web Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
