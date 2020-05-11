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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "08x6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class MainMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      activeItem: "home"
    });

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => this.setState({
      activeItem: name
    }));
  }

  render() {
    const {
      activeItem
    } = this.state;
    const {
      router
    } = this.props;
    return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      size: "mini",
      className: "menu-header"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "covid_19",
      active: activeItem === "home",
      onClick: () => router.push("/")
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
      position: "right"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
      item: true,
      text: "Language"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Menu, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Dropdown"].Item, null, "English"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true
    }, "Explore")))));
  }

}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("XuXw");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "XuXw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deaths; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("obyI");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("08x6");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // import us from "/static/us-flag.jpg";


const router = next_router__WEBPACK_IMPORTED_MODULE_2___default.a;
console.log(router);

function addComma(str) {
  let aa = str.toString().split("");

  if (aa.length === 7) {
    aa.splice(1, 0, ",");
  }

  if (aa.length === 6) {
    aa.splice(3, 0, ",");
  }

  if (aa.length === 5) {
    aa.splice(2, 0, ",");
  }

  if (aa.length === 4) {
    aa.splice(1, 0, ",");
  }

  if (aa.length === 3) {
    aa;
  }

  return aa.join("");
}

class deaths extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isLoading: false,
      results: this.props.confirms,
      value: ""
    });

    _defineProperty(this, "handleResultSelect", (e, {
      result
    }) => this.setState({
      value: result.countryRegion
    }));

    _defineProperty(this, "handleSearchChange", (e, {
      value
    }) => {
      this.setState({
        isLoading: true,
        value
      });
      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState({
          isLoading: false,
          results: this.props.confirms,
          value: ""
        });
        const re = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.escapeRegExp(this.state.value), "i");

        const isMatch = result => re.test(result.countryRegion);

        this.setState({
          isLoading: false,
          results: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(this.props.confirms, isMatch)
        });
      }, 300);
    });
  }

  static async getInitialProps() {
    let confirms = [];

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__[/* BASE_URL */ "a"]}/confirmed`);
      confirms = response.data; // console.table(confirms);
    } catch (error) {//  console.log(error);
    }

    return {
      confirms,
      loading: false
    };
  }

  render() {
    const {
      confirms,
      loading
    } = this.props;
    const {
      isLoading,
      value,
      results
    } = this.state;
    console.log(results);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      router: router
    }), __jsx("div", {
      className: "searchBar"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Search"], {
      loading: isLoading,
      onResultSelect: this.handleResultSelect,
      onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(this.handleSearchChange, 500, {
        leading: true
      }),
      results: results,
      value: value,
      placeholder: "Search Country"
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], null, !loading ? __jsx("div", {
      className: "main-confirmed"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Group, {
      className: "card-main"
    }, results.map((key, i) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      key: i,
      className: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
      floated: "right",
      size: "mini",
      src: key.countryRegion === "US" ? "/static/us-flag.jpg" : key.countryRegion === "Spain" ? "/static/spain-flag.jpg" : key.countryRegion === "Italy" ? "/static/italy-flag.jpg" : key.countryRegion === "France" ? "/static/france-flag.jpg" : key.countryRegion === "Germany" ? "/static/germany-flag.gif" : key.countryRegion === "United Kingdom" ? "/static/uk-flag.jpg" : key.countryRegion === "Turkey" ? "/static/turkey-flag.jpg" : key.countryRegion === "Iran" ? "/static/iran-flag.jpg" : key.countryRegion === "Russia" ? "/static/russia-flag.jpg" : key.countryRegion === "China" ? "/static/china-flag.jpg" : key.countryRegion === "Brazil" ? "/static/brazil-flag.jpg" : key.countryRegion === "Belgium" ? "/static/belgium-flag.jpg" : key.countryRegion === "Netherlands" ? "/static/netherland-flag.jpg" : key.countryRegion === "Switzerland" ? "/static/switzerland-flag.jpg" : key.countryRegion === "India" ? "/static/india-flag.jpg" : key.countryRegion === "Peru" ? "/static/peru-flag.png" : key.countryRegion === "Canada" ? "/static/canada-flag.jpg" : key.countryRegion === "Portugal" ? "/static/portugal-flag.jpg" : key.countryRegion === "Ecuador" ? "/static/ecuador-flag.png" : key.countryRegion === "Ireland" ? "/static/ireland.jpg" : key.countryRegion === "Nigeria" ? "/static/nigeria-flag.jpg" : key.countryRegion === "Ghana" ? "/static/ghana-flag.jpg" : null,
      className: "center"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
      className: "lowerSpace"
    }, "Province state:", __jsx("strong", null, key.provinceState)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
      className: "lowerSpace"
    }, "Country Region:", __jsx("strong", null, key.countryRegion)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
      className: "lowerSpace"
    }, "Last Update:", __jsx("strong", null, moment__WEBPACK_IMPORTED_MODULE_7___default()(key.lastUpdate).format("YYYY-MM-DD"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
      className: "lowerSpace"
    }, "Deaths:", __jsx("strong", null, addComma(key.deaths))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
      className: "lowerSpace"
    }, "Active:", __jsx("strong", null, addComma(key.active)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, {
      extra: true
    }, __jsx("div", {
      className: "ui two buttons"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      basic: true,
      color: "red"
    }, "||"))))))) : __jsx("h1", null, "Loading...")));
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

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });
const BASE_URL = `https://covid19.mathdro.id/api`;

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });