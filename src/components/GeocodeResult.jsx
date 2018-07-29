import React from 'react'
import PropTypes from 'prop-types';

const GeocodeResult = ({ address, lat, lng }) => (
  <ul className="geocode-result">
    <li>address:{address}</li>
    <li>lat:{lat}</li>
    <li>lng:{lng}</li>
  </ul>
);

GeocodeResult.PropTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GeocodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
};

export default GeocodeResult;
