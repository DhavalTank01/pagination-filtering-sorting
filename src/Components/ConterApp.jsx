import React, { useCallback, useEffect, useState } from "react";
import Alert from "./Alert";
import "../css/style.scss";

const CounterApp = () => {
  const [state, setState] = useState(0);
  const [alert, setAlert] = useState({
    isShow: false,
    type: "warning",
    message: "Hii",
  });

  const Incre = useCallback(() => {
    setState(state + 1);
  }, [state]);

  const Decre = useCallback(() => {
    if (state === 0) {
      setAlert({
        isShow: true,
        type: "danger",
        message: "Value is 0.",
      });
      setState(state);
    } else {
      setState(state - 1);
    }
  }, [state]);

  const OnClose = useCallback(() => {
    setAlert({
      isShow: false,
      type: "",
      message: "",
    });
  }, []);

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        OnClose();
      }, 3000);
    }
  });

  useEffect(() => {
    if (state === 5) {
      setAlert({
        isShow: true,
        type: "success",
        message: "Value is 5.",
      });
    } else if (state === 10) {
      setAlert({
        isShow: true,
        type: "warning",
        message: "Value is 10.",
      });
    }
  }, [state]);

  return (
    <>
      {alert.isShow && (
        <Alert
          type={alert.type}
          message={alert.message}
          OnClose={OnClose}
        ></Alert>
      )}
      <div className="container m-5">
        <p className="h3 text-capitalize text-center">counter app</p>
        <div className="btns text-center">
          <button className="btn btn-primary m-lg-3" onClick={Incre}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button className="btn btn-primary" onClick={Decre}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <p className=" fs-1">{state}</p>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
