import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18next.use(initReactI18next).init({
  lng: 'es',
  // uncomment next line if you have multilang in your application and you have a fallback language
  // fallbackLng: 'en',
  initImmediate: false
});

if (process.env.NODE_ENV !== 'test') {
  requireAll(require.context('..', true, /i18n\.(js|ts)$/));
}

export default i18next;
