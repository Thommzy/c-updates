module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("MxtO");


/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "MCK1":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "MxtO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchExampleStandard; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MCK1");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const source = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.times(200, () => ({
  title: faker__WEBPACK_IMPORTED_MODULE_1___default.a.company.companyName(),
  description: faker__WEBPACK_IMPORTED_MODULE_1___default.a.company.catchPhrase(),
  image: faker__WEBPACK_IMPORTED_MODULE_1___default.a.internet.avatar(),
  price: faker__WEBPACK_IMPORTED_MODULE_1___default.a.finance.amount(0, 100, 2, "$")
}));

console.log(typeof source[0].title);
const initialState = {
  isLoading: false,
  results: source,
  value: ""
};
class SearchExampleStandard extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", initialState);

    _defineProperty(this, "handleResultSelect", (e, {
      result
    }) => {
      this.setState({
        value: result.title
      });
      console.log(result);
    });

    _defineProperty(this, "handleSearchChange", (e, {
      value
    }) => {
      console.log(value);
      this.setState({
        isLoading: true,
        value
      });
      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState(initialState);
        const re = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.escapeRegExp(this.state.value), "i");

        const isMatch = result => re.test(result.title);

        this.setState({
          isLoading: false,
          results: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(source, isMatch)
        });
      }, 300);
    });
  }

  render() {
    const {
      isLoading,
      value,
      results
    } = this.state;
    console.log(results);
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
      width: 6
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Search"], _extends({
      loading: isLoading,
      onResultSelect: this.handleResultSelect,
      onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(this.handleSearchChange, 500, {
        leading: true
      }),
      results: results,
      value: value
    }, this.props, {
      renderer: ({
        image,
        price,
        title,
        description
      }) => [image && __jsx("div", {
        key: "image",
        className: "image"
      }, createHTMLImage(image, {
        autoGenerateKey: false
      })), __jsx("div", {
        key: "content",
        className: "content"
      }, title && __jsx("div", {
        className: "title"
      }, title), title && __jsx("div", {
        className: "title"
      }, title), description && __jsx("div", {
        className: "description"
      }, description))]
    })), __jsx("div", null, __jsx("pre", {
      style: {
        overflowX: "auto"
      }
    }, this.state.results.map((i, jj) => __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      key: jj
    }, __jsx("div", null, i.title), __jsx("br", null), " ", __jsx("div", null, i.description), " ", __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      src: i.image,
      size: "small"
    })), __jsx("div", null, i.price))))))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
      width: 10
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "State"), __jsx("pre", {
      style: {
        overflowX: "auto"
      }
    }, JSON.stringify(this.state, null, 2)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], null, "Options"), __jsx("pre", {
      style: {
        overflowX: "auto"
      }
    }, JSON.stringify(source, null, 2)))));
  }

}

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });