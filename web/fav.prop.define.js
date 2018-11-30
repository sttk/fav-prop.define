(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.prop||(g.prop = {}));g.define = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"@fav/type.is-function":2}],2:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

function isNotFunction(value) {
  return (typeof value !== 'function');
}

Object.defineProperty(isFunction, 'not', {
  enumerable: true,
  value: isNotFunction,
});

module.exports = isFunction;

},{}]},{},[1])(1)
});
