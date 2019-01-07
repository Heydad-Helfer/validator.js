import assertString from './util/assertString';

// const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
// const numericNoSymbols = /^[0-9]+$/;

export default function isSlug(str) {
  assertString(str);

  return str.indexOf(' ') === -1;
}
