import React from "react";

const Like = ({ liked, onClick }) => {
  if (liked)
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className="fa-solid fa-heart"
      ></i>
    );
  else
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className="fa-regular fa-heart"
      ></i>
    );
};

export default Like;
