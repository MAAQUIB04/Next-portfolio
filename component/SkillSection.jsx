import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";
import PowerBIIcon from "./icons/PowerBIIcon";
import TableauIcon from "./icons/TableauIcon";
import AzureIcon from "./icons/AzureIcon";
import PythonIcon from "./icons/PythonIcon";
import SQLIcon from "./icons/SQLIcon";
import DAXIcon from "./icons/DAXIcon";
import ExcelIcon from "./icons/ExcelIcon";
import DataModelingIcon from "./icons/DataModelingIcon";
import DataVisualizationIcon from "./icons/DataVisualizationIcon";
import ETLIcon from "./icons/ETLIcon";
import ReportingIcon from "./icons/ReportingIcon";

const skills = [
  { icon: PowerBIIcon, name: "Power BI" },
  { icon: TableauIcon, name: "Tableau" },
  { icon: AzureIcon, name: "Azure" },
  { icon: PythonIcon, name: "Python" },
  { icon: SQLIcon, name: "SQL" },
  { icon: DAXIcon, name: "DAX" },
  { icon: ExcelIcon, name: "MS Excel" },
  { icon: ETLIcon, name: "ETL"},
  { icon: DataModelingIcon, name: "Data Modelling" },
  { icon: DataVisualizationIcon, name: "Data Visualization" },
  { icon: ReportingIcon, name: "Reporting"},
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
