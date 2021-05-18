import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'es',
  // Remove supportedLngs and fallbackLng if your application does not have multilang support
  supportedLngs: ['es', 'en'],
  fallbackLng: 'en',
  initImmediate: false
});

export default i18next;
