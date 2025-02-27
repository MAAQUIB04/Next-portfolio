import React from "react";

function ResumeSection() {
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
    <div className="custom-container">
      <div className="resume-content content-width">
        <div className="section-header">
          <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
            <i className="las la-briefcase" /> Resume
          </h4>
          <h1 className="scroll-animation" data-animation="fade_from_bottom">
            Professional Experience &amp; <span>Education</span>
          </h1>
        </div>
        <div className="resume-timeline">
          
          <div className="item scroll-animation" data-animation="fade_from_right">
            <div>
              <span className="color-primary">
                <strong>Shoppers Drug Mart - Specialty Health Network</strong>
              </span>
              <span className="date">
                <strong>Sep 2024 - Present</strong>
              </span>
            </div>
            <h2><strong>Analyst</strong></h2>
            <ul>
              <li>Streamlined inventory tracking system using Power BI and DAX, identifying discrepancies and reducing audit time by 30%.</li>
              <li>Designed a performance dashboard with key KPI metrics by conducting time studies and leveraging SAP data, enhancing operational visibility and improving warehouse efficiency by 15%.</li>
              <li>Managed 50+ weekly inbound and outbound returns and analyzed their financial impact to ensure accurate inventory adjustments and precise financial reporting.</li>
              <li>Facilitated a comprehensive stakeholder analysis, identifying and defining responsibilities for 5 impacted groups, resulting in a 30% improvement in project alignment and streamlined task prioritization.</li>
            </ul>
  
            <h2><strong>Business Analyst Intern</strong></h2>
            <ul>
              <li>Accelerated inventory optimization by designing a Power BI report to analyze inventory turnover and stock levels, improving inventory management efficiency.</li>
              <li>Enhanced the master data by optimizing data structures and processes with DAX Studio, resulting in a 30% increase in refresh efficiency.</li>
              <li>Automated the reporting process for Shoppers across Canada by optimizing the script using Excel macros, reducing processing time by 40%.</li>
            </ul>
          </div>
  
          <div className="item scroll-animation" data-animation="fade_from_right">
            <div>
              <span className="color-primary">
                <strong>Accenture, India</strong>
              </span>
              <span className="date">
                <strong>Jan 2022 - Aug 2022</strong>
              </span>
            </div>
            <h2><strong>Analyst</strong></h2>
            <ul>
              <li>Resolved 36 ETL issues during a single sprint, addressing backlog efficiently and meeting evolving client needs, leading to a smoother data pipeline and a 20% increase in data processing speed.</li>
              <li>Leveraged advanced Excel functions to analyze and extract data from financial models, enhancing data interpretation.</li>
            </ul>
          </div>
  
          <div className="item scroll-animation" data-animation="fade_from_right">
            <div>
              <span className="color-primary">
                <strong>Lambton College, Canada</strong>
              </span>
              <span className="date">
                <strong>Sep 2022 – Apr 2024</strong>
              </span>
            </div>
            <h2><strong>Business Analytics</strong></h2>
          </div>

          <div className="item scroll-animation" data-animation="fade_from_right">
            <div>
              <span className="color-primary">
                <strong>RDVV UNIVERSITY, India</strong>
              </span>
              <span className="date">
                <strong>Aug 2018 – Jun 2021</strong>
              </span>
            </div>
            <h2><strong>Baachelor of Business Administration(Finance) </strong></h2>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default ResumeSection;
