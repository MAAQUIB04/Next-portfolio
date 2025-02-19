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
const instaAwardSkills = ["React", "Redux", "Node Js"];
const reactCertSills = ["React", "Redux"];
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
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              <span>Awards</span>
            </h1>
          </div>
          <div className="row portfolio-items">
            <AwardItem
              name="HackOPUS"
              imageUrl={"/assets/images/hackopus.png"}
              skills={hackOPUSSkills}
              description={"HackOPUS - A Hackathon conducted by Infosys Client"}
            />
            <AwardItem
              name="Insta Award"
              imageUrl={"/assets/images/Rise-Insta-Awards-02-Aug-2024.png"}
              skills={hackOPUSSkills}
              description={
                "Insta Award - Commendable achievement with wining 1st Rank in Hackathon event conducted by client"
              }
            />
            <AwardItem
              name="Insta Award"
              imageUrl={"/assets/images/Rise-Insta-Awards-01-Mar-2024.png"}
              skills={instaAwardSkills}
              description={
                "Insta Award - Scaling up quickly in client project and started handling stories idenpendently in short span of time"
              }
            />
            {/* <AwardItem
              name="Insta Award"
              imageUrl={"/assets/images/star-of-the-month-Feb-2024.png"}
              skills={instaAwardSkills}
              description={
                "Star of the Month - For contributing well in Client Project, getting appreciation from client Senior Engineer, presenting BTN idea (Server Side Pagination), and many more"
              }
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
              name="Infosys Certified React Professional"
              imageUrl={
                "/assets/images/Infosys-Certified-React-Professional.png"
              }
              skills={reactCertSills}
              description={"Infosys Certified React Professional"}
            />

            <AwardItem
              name="Infosys-Certified-Front-End-Web-Developer"
              imageUrl={
                "/assets/images/Infosys-Certified-Front-End-Web-Developer.png"
              }
              skills={frontendCertSills}
              description={"Infosys Certified Front End Web Developer"}
            />

            <AwardItem
              name="Infosys-Certified-Java-SE8-Developer"
              imageUrl={
                "/assets/images/Infosys-Certified-Java-SE8-Developer.png"
              }
              description={"Infosys Certified Java SE8 Developer"}
            />

            <AwardItem
              name="Infosys-Global-Agile-Developer-Certification"
              imageUrl={
                "/assets/images/Infosys-Global-Agile-Developer-Certification.png"
              }
              description={
                "Infosys Global Agile Developer Certification"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsAndCertifications;
