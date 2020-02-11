import React from 'react';
import Spinner from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT, TYPE_SPINNER } from './constants';

interface Spinner {
  className?: string;
  type?: typeof TYPE_SPINNER[number];
  color?: string;
}

function Loading({ className = '', type = SPINNER_DEFAULT, color = COLOR_SPINNER }: Spinner) {
  return <Spinner name={type} fadeIn="half" color={color} className={className} />;
}

export default Loading;
