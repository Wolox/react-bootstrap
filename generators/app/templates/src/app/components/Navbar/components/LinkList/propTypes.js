import PropTypes from 'prop-types';

export const routesListPropTypes = PropTypes.shape({
  hidden: PropTypes.bool,
  route: PropTypes.string,
  text: PropTypes.string
});
