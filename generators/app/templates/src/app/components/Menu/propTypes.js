import PropTypes from 'prop-types';

export const menuItemPropTypes = PropTypes.shape({
  icOff: PropTypes.string,
  icOn: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  path: PropTypes.string
});

export const selectedItemPropTypes = PropTypes.shape({
  menuId: PropTypes.number,
  subMenuId: PropTypes.number
});
