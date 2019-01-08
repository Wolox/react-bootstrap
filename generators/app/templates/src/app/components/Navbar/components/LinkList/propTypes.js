import PropTypes from 'prop-types';

export const imagePropTypes = PropTypes.shape({
  alt: PropTypes.string,
  src: PropTypes.string
});

export const routesListPropTypes = PropTypes.shape({
  hidden: PropTypes.bool,
  image: imagePropTypes,
  route: PropTypes.string,
  text: PropTypes.string
});
