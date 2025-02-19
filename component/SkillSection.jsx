import Image from "next/image";
import React from "react";
import ReactIcon from "./icons/ReactIcon";
import ReduxIcon from "./icons/ReduxIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import ReactNativeIcon from "./icons/ReactNativeIcon";
import TailwindIcon from "./icons/TailwindIcon";
import SkillItem from "./SkillItem";
import NextJSIcon from "./icons/NextJSIcon";
import WebpackIcon from "./icons/WebpackIcon";
import HTMLIcon from "./icons/HTMLIcon";
import CSSIcon from "./icons/CSSIcon";
import NodeJSIcon from "./icons/NodeJSIcon";
import ExpressJSIcon from "./icons/ExpressJSIcon";
import HapiJSIcon from "./icons/HapiJSIcon";
import SocketIcon from "./icons/SocketIcon";
import DockerIcon from "./icons/DockerIcon";
import RedisIcon from "./icons/RedisIcon";
import AWSIcon from "./icons/AWSIcon";

const skills = [
  { icon: HTMLIcon, name: "HTML" },
  { icon: CSSIcon, name: "CSS" },
  { icon: TailwindIcon, name: "Tailwind" },
  { icon: JavascriptIcon, name: "Javascript" },
  { icon: ReactIcon, name: "React" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: WebpackIcon, name: "Webpack" },
  // { icon: ReactNativeIcon, name: "React Native" },
  { icon: NextJSIcon, name: "Next JS" },
  { icon: NodeJSIcon, name: "Node JS" },
  { icon: ExpressJSIcon, name: "Express JS" },
  //   { icon: HapiJSIcon, name: "Hapi JS" },
  // { icon: SocketIcon, name: "Socket.IO" },
  // { icon: DockerIcon, name: "Docker" },
  // { icon: RedisIcon, name: "Redis" },
  { icon: AWSIcon, name: "AWS" },
];
function SkillSection() {
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-animation="fade_from_bottom"
            >
              <i className="las la-shapes" /> Skills
            </h4>
            <h1 className="scroll-animation" data-animation="fade_from_bottom">
              My <span>Skills</span>
            </h1>
          </div>
          <div className="row skills text-center">
            {skills.map((item) => (
              <SkillItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
