import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  console.log(typeof props.name);
  return (<div>Hi {props.name}</div>);
}

Greeting.propTypes = {
  name: PropTypes.number,
}

export default Greeting;
