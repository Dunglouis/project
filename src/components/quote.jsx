import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const Quote = () => {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    setInterval(() => {
      axios
        .get("https://api.adviceslip.com/advice")
        .then((response) => {
          setAdvice(response);
        })
        .catch((error) => console.log(error));
    }, 4000);
  }, []);
  return (
    <div className="quote">
      <div className="quote__wrap">
        <p className="quote__title">
          "
          {advice.data && advice.data && advice.data.slip
            ? `${advice.data.slip.advice}`
            : "Nothing is impossible"}
          "
        </p>
        <p className="quote__author">_bobo_</p>
      </div>
    </div>
  );
};
