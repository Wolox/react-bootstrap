import numeral from 'numeral';

const DEFAULT_ORDINAL = 'to';

const ORDINALS = ['ro', 'do', 'ro', DEFAULT_ORDINAL];

numeral.register('locale', 'es-ar', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  ordinal: number => (ORDINALS.length - 1 === number ? ORDINALS[number] : DEFAULT_ORDINAL),
  currency: {
    symbol: '$'
  }
});

numeral.locale('es-ar');

export default numeral;
