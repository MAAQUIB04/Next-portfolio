import React from "react";

function SkillItem({ icon: Icon, name }) {
  return (
    <div
      className="col-md-2 col-4 scroll-animation"
      data-animation="fade_from_right"
    >
      <div className="skill">
        <div className="skill-inner">
          <Icon />
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
  );
}

export default SkillItem;
