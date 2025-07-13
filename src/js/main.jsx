import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import PropTypes from 'prop-types';

// components
function SecondsCounter(props) {
  return (
    <div className="container">
      <div className="clock">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="six">{props.digitSix % 10}</div>
      <div className="five">{props.digitFive % 10}</div>
      <div className="four">{props.digitFour % 10}</div>
      <div className="three">{props.digitThree % 10}</div>
      <div className="two">{props.digitTwo % 10}</div>
      <div className="one">{props.digitOne % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};


let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);

  counter++;

  // console.log(six, five, four, three,two, one);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
    </React.StrictMode>,
  )

}, 1000);


