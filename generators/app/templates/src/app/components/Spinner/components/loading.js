import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, TYPE_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({ className, id, colorSpinner }) {
  return <Spinner name={TYPE_SPINNER[id]} fadeIn="half" color={colorSpinner} className={className} />;
}

Loading.defaultProps = {
  className: '',
  colorSpinner: COLOR_SPINNER,
  id: SPINNER_DEFAULT
};

Loading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  colorSpinner: PropTypes.string
};

export default Loading;
