import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl capitalize font-medium tracking-wider">
        {props.text}
      </h2>
    </div>
  );
};

export default SectionTitle;
