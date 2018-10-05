import numeral from 'numeral';

const ORDINALS = ['ro', 'do', 'ro', 'to'];

numeral.register('locale', 'es-ar', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  ordinal: number => (ORDINALS.length - 1 === number ? ORDINALS[number] : 'to'),
  currency: {
    symbol: '$'
  }
});

numeral.locale('es-ar');

export default numeral;
