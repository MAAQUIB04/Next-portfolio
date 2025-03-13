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
            <h2><strong>Inventory Control Coordinator</strong></h2>
            <ul>
              <li>Automated inventory tracking system using Power BI, identifying discrepancies and reducing audit time by 30% through strong analytical thinking and attention to detail.</li>
              <li>Collaborated closely with cross-functional teams to design a performance dashboard with key KPI metrics, leveraging time studies and SAP data, enhancing data accessibility for stakeholders and improving warehouse efficiency by 15%.</li>
              <li>Spearheaded the returns process by developing a KPI-driven dashboard, tracking inbound/outbound returns, their financial value, and vendor credits. Identified quarantined products worth $500K, ensuring accurate inventory adjustments and financial reporting to management, demonstrating strong organizational and problem-solving skills.</li>
              <li>Streamlined the supply planning process by developing a weekly report that tracked product demand and inventory levels, improved forecasting accuracy by 20% and provided key insights to support audit processes and drive business growth.</li>
            </ul>
  
            <h2><strong>Business Analyst Intern</strong></h2>
            <ul>
              <li>Curated automated Power BI reports to optimize inventory turnover and stock levels, providing clear insights to stakeholders.</li>
              <li>Optimized master data refresh efficiency by 30% through data structure enhancements using DAX Studio, rewriting and optimizing key measures within the data model to improve performance and reduce refresh time.</li>
              <li>Enhanced the reporting process for Shoppers across Canada by migrating to Excel macros, reducing processing time by 40%, leading to improved efficiency and operational effectiveness while maintaining 100% data accuracy.</li>
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
              <li>Streamlined the data pipeline by delivering ETL solutions as per client requirements, improving efficiency and ensuring reliable data flow. Resolved 36 ETL issues within a single sprint, contributing to a 20% increase in processing speed</li>
              <li>Developed and documented KPIs for non-technical stakeholders, enabling better decision-making and enhancing self-service capabilities by 15%, which led to a 20% reduction in support requests.</li>
              <li>Assisted with developing test case scenarios, reconciliations, User Acceptance Testing (UAT), and comprehensive gap assessments as part of a strategic initiative to rebuild client relationships across the practice.</li>
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
