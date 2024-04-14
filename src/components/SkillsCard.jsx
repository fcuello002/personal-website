import React from "react";

const SkillsCard = (props) => {
  return (
    <article>
      <span>{props.icon}</span>
      <h4 className="mt-6 font-bold">{props.title}</h4>
      <p className="mt-2 text-slate-500">{props.text}</p>
    </article>
  );
};

export default SkillsCard;
