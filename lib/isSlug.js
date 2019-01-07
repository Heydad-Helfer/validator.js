"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSlug;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
// const numericNoSymbols = /^[0-9]+$/;
function isSlug(str) {
  (0, _assertString.default)(str);
  return str.indexOf(' ') === -1;
}

module.exports = exports.default;