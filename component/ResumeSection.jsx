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
              <li>Streamlined inventory tracking system using <strong>Power BI</strong> and <strong>DAX</strong>, identifying discrepancies and reducing audit time by <strong>30%</strong>.</li>
              <li>Designed a <strong>performance dashboard</strong> with key KPI metrics by conducting time studies and leveraging SAP data, improving data accessibility for stakeholders and improving warehouse efficiency by 15%.</li>
              <li>Managed <strong>50+</strong> weekly inbound and outbound returns and analyzed their <strong>financial impact</strong> to ensure accurate inventory adjustments and precise financial reporting.</li>
              <li>Facilitated a comprehensive <strong>stakeholder analysis</strong>, identifying and defining responsibilities for 5 impacted groups, resulting in a 30% improvement in project alignment and streamlined task prioritization.</li>
            </ul>
  
            <h2><strong>Business Analyst Intern</strong></h2>
            <ul>
              <li>Accelerated <strong>inventory optimization</strong> by designing a <strong>Power BI</strong> report to analyze inventory turnover and stock levels, improving inventory management efficiency.</li>
              <li>Enhanced the master data by optimizing data structures and processes with <strong>DAX Studio</strong>, resulting in a <strong>30%</strong> increase in <strong>refresh efficiency</strong>.</li>
              <li><strong>Automated</strong> the reporting process for Shoppers across Canada by optimizing the script using <strong>Excel macros</strong>, reducing processing time by <strong>40%</strong>.</li>
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
              <li>Resolved <strong>36 ETL issues</strong> during a single sprint, addressing backlog efficiently and meeting evolving client needs, leading to a smoother data pipeline and a <strong>20%</strong> increase in data processing speed.</li>
              <li>Leveraged <strong>advanced Excel functions</strong> to analyze and extract data from <strong>financial models</strong>, enhancing data interpretation.</li>
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
            <h2><strong>Bachelor of Business Administration(Finance) </strong></h2>
          </div>
  
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default ResumeSection;
