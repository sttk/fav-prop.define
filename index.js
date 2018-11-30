'use strict';

var isFunction = require('@fav/type.is-function');

exports.immutable = function(obj, name, value) {
  Object.defineProperty(obj, name, {
    value: value,
  });
};

exports.mutable = function(obj, name, value) {
  Object.defineProperty(obj, name, {
    writable: true,
    configurable: true,
    value: value,
  });
};

exports.override = function(obj, name, fn) {
  if (isFunction(name)) {
    fn = name;
    if (!(name = fn.name || getFunctionName(fn))) {
      return;
    }
  }

  var superFn = obj[name];
  if (isFunction(superFn)) {
    Object.defineProperty(fn, '$uper', {
      value: superFn.bind(obj),
    });
  }

  Object.defineProperty(obj, name, {
    enumerable: true,
    writable: true,
    value: fn,
  });
};

/* istanbul ignore next */
function getFunctionName(fn) {  // for IE11
  var result = /^\s*function ([^(]+)\(/.exec(fn.toString());
  if (result) {
    return result[1];
  }
}
