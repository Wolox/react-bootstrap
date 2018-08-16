import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, TYPE_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({ className, id, color }) {
  return <Spinner name={TYPE_SPINNER[id]} fadeIn="half" color={color} className={className} />;
}

Loading.defaultProps = {
  className: '',
  color: COLOR_SPINNER,
  id: SPINNER_DEFAULT
};

Loading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  color: PropTypes.string
};

export default Loading;
