import React from "react";
import AwardItem from "./AwardItem";

const hackOPUSSkills = [
  "React",
  "Redux",
  "Node Js",
  "Hapi Js",
  "Socket.IO",
  "Redis",
];
const AwardSkills = ["React", "Redux", "Node Js"];
const frontendCertSills = ["HTML", "CSS", "Javascript"];

function AwardsAndCertifications() {
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="awards-certification"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-grip-vertical" /> Awards And Certification
            </h4>
            {/* <h1 className="scroll-animation" data-animation="fade_from_bottom">
              <span>Awards</span>
            </h1> */}
          </div>
          <div className="row portfolio-items">
            {/* <AwardItem
              name="HackOPUS"
              imageUrl={"/assets/images/hackopus.png"}
              skills={hackOPUSSkills}
              description={"HackOPUS - A Hackathon conducted by Infosys Client"}
            /> */}
            <div className="section-header">
              <h1
                className="scroll-animation"
                data-animation="fade_from_bottom"
              >
                <span>Certifications</span>
              </h1>
            </div>
            <AwardItem
              name="Accenture Data Analytics"
              imageUrl={
                "/assets/images/Accenture Data Analytics.png"
                
              }
              description={"Accenture Data Analytics"}
            />

            <AwardItem
              name="Statistics 101"
              imageUrl={
                "/assets/images/Statistics 101.png"
              }
              description={"Statistics 101, IBM"}
            />

            <AwardItem
              name="Big Data 101"
              imageUrl={
                "/assets/images/Big Data 101.png"
              }
              description={
                "Big Data 101, IBM"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsAndCertifications;
