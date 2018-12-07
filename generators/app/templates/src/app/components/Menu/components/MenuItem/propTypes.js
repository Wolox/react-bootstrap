import PropTypes from 'prop-types';

import { subItemPropTypes } from './components/MenuSubItem/propTypes';

export const menuItemPropTypes = PropTypes.shape({
  category: PropTypes.string,
  icOff: PropTypes.any,
  icOn: PropTypes.string,
  id: PropTypes.number,
  path: PropTypes.string,
  subCategories: PropTypes.arrayOf(subItemPropTypes)
});
