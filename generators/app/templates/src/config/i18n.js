import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18next.use(initReactI18next).init({
  lng: 'es',
  // Remove supportedLngs and fallbackLng if your application does not have multilang support
  supportedLngs: ['es', 'en'],
  fallbackLng: 'en',
  initImmediate: false
});

if (process.env.NODE_ENV !== 'test') {
  requireAll(require.context('..', true, /i18n\.(js|ts)$/));
}

export default i18next;
