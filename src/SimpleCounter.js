import "./simpleCounter.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  );
}

let counter = 0;
const interval = setInterval(function () {
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  console.log(four, three, two, one);
  ReactDOM.render(
    <SimpleCounter
      digitFour={four}
      digitThree={three}
      digitTwo={two}
      digitOne={one}
    />,
    document.querySelector("#root")
  );
  counter++;
  if (counter > 9999) clearInterval(interval);
}, 1000);

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

export default SimpleCounter;
