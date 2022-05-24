import React from "react";

const Title = ({ title }) => {
  return (
    <p className="fs-4 text-capitalize border border-1 border-top-0 border-end-0 border-start-0">
      {title}
    </p>
  );
};

export default Title;
