import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import propTypes from "prop-types";

export default function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="four">4</div>
      <div className="three">3</div>
      <div className="two">2</div>
      <div className="one">1</div>
    </div>
  );
}
// SimpleCounter.propTypes = {
//   digitFour: propTypes.number,
//   digitThree: propTypes.number,
//   digitTwo: propTypes.number,
//   digitOne: propTypes.number
// };

