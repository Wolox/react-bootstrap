import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT, TYPE_SPINNER } from './constants';

function Loading({ className, type, color }) {
  return <Spinner name={type} fadeIn="half" color={color} className={className} />;
}

Loading.defaultProps = {
  className: '',
  color: COLOR_SPINNER,
  type: SPINNER_DEFAULT
};

Loading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.oneOf(TYPE_SPINNER)
};

export default Loading;
