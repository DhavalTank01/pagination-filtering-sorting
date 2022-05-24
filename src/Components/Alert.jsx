import React from "react";
import "../css/style.scss";

const Alert = ({ type, message, OnClose }) => {
  return (
    <div
      className={
        "alert alert-" + type + " alert-dismissible fade show my-alert"
      }
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={OnClose}
      ></button>
    </div>
  );
};

export default Alert;
