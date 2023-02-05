export function checkAlpha (value) {
    if(value.match(/[a-zA-Zа-яА-я]/))// || (!sku.match(/[A-Z]/))
     return false;
     else return true;
  }

/*
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: false
});
exports.default = void 0;

var _common = require("./common");

var _default = (0, _common.regex)('checkAlpha', /^[a-zA-Z]*$/);

exports.default = _default;*/