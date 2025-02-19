import { Fragment } from "react";
import HireMe from "@/component/HireMe";
import HomeSection from "@/component/HomeSection";
import AboutSection from "@/component/AboutSection";
import SidebarMenu from "@/component/SidebarMenu";
import Menu from "@/component/Menu";
import ResumeSection from "@/component/ResumeSection";
import ProjectSection from "@/component/ProjectSection";
import SkillSection from "@/component/SkillSection";
import AwardsAndCertifications from "@/component/AwardsAndCertifications";
import ContactSection from "@/component/ContactSection";

export default function Home() {
  return (
    <Fragment>
      <SidebarMenu />
      <Menu />
      <HireMe />
      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HireMe />
            <HomeSection />
            <AboutSection />
            <ResumeSection />
            <ProjectSection />
            <SkillSection />
            <AwardsAndCertifications />
            <ContactSection />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
