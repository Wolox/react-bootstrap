import ROUTES from '../../../constants/routes';

import image from './example.png';

// TODO customize your routes

const NAVBAR_ROUTES = [
  {
    text: 'Item 1',
    route: ROUTES.HOME,
    hidden: false,
    image: {
      src: image,
      alt: 'Image 1'
    }
  },
  {
    text: 'Item 2',
    route: ROUTES.LOGIN,
    hidden: false,
    image: {
      src: image,
      alt: 'Image 2'
    }
  },
  {
    text: 'Item 3',
    route: ROUTES.RECOVER_PASSWORD,
    hidden: false,
    image: {
      src: image,
      alt: 'Image 2'
    }
  }
];

export default NAVBAR_ROUTES;
