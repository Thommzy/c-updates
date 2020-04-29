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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dj9r");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dj9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirmed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("obyI");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("08x6");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import us from "/static/us-flag.jpg";


const router = next_router__WEBPACK_IMPORTED_MODULE_1___default.a; //console.log(router);

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

class confirmed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps() {
    let confirms = [];

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__[/* BASE_URL */ "a"]}/confirmed`);
      confirms = response.data; // console.table(confirms);
    } catch (error) {//  console.log(error);
    }

    return {
      confirms,
      loading: false
    };
  }

  componentDidMount() {} // console.log("Yay");
  // renderConfirmed(confirms) {
  //   return confirms.map((key) => {
  //     //  console.log(confirms);
  //     return confirms;
  //   });
  // }


  render() {
    const {
      confirms,
      loading
    } = this.props; // console.log(!loading);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      router: router
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Container"], null, !loading ? __jsx("div", {
      className: "main-confirmed"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Group, {
      className: "card-main"
    }, Object.keys(confirms).map((key, i) => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      key: i,
      className: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Image"], {
      floated: "right",
      size: "mini",
      src: confirms[key].countryRegion === "US" ? "/static/us-flag.jpg" : confirms[key].countryRegion === "Spain" ? "/static/spain-flag.jpg" : confirms[key].countryRegion === "Italy" ? "/static/italy-flag.jpg" : confirms[key].countryRegion === "France" ? "/static/france-flag.jpg" : confirms[key].countryRegion === "Germany" ? "/static/germany-flag.gif" : confirms[key].countryRegion === "United Kingdom" ? "/static/uk-flag.jpg" : confirms[key].countryRegion === "Turkey" ? "/static/turkey-flag.jpg" : confirms[key].countryRegion === "Iran" ? "/static/iran-flag.jpg" : confirms[key].countryRegion === "Russia" ? "/static/russia-flag.jpg" : confirms[key].countryRegion === "China" ? "/static/china-flag.jpg" : confirms[key].countryRegion === "Brazil" ? "/static/brazil-flag.jpg" : confirms[key].countryRegion === "Belgium" ? "/static/belgium-flag.jpg" : confirms[key].countryRegion === "Netherlands" ? "/static/netherland-flag.jpg" : confirms[key].countryRegion === "Switzerland" ? "/static/switzerland-flag.jpg" : confirms[key].countryRegion === "India" ? "/static/india-flag.jpg" : confirms[key].countryRegion === "Peru" ? "/static/peru-flag.png" : confirms[key].countryRegion === "Canada" ? "/static/canada-flag.jpg" : confirms[key].countryRegion === "Portugal" ? "/static/portugal-flag.jpg" : confirms[key].countryRegion === "Ecuador" ? "/static/ecuador-flag.png" : confirms[key].countryRegion === "Ireland" ? "/static/ireland.jpg" : confirms[key].countryRegion === "Nigeria" ? "/static/nigeria-flag.jpg" : confirms[key].countryRegion === "Ghana" ? "/static/ghana-flag.jpg" : null,
      className: "center"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Description, {
      className: "lowerSpace"
    }, "Province state:", __jsx("strong", null, confirms[key].provinceState)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Description, {
      className: "lowerSpace"
    }, "Country Region:", __jsx("strong", null, confirms[key].countryRegion)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Description, {
      className: "lowerSpace"
    }, "Last Update:", __jsx("strong", null, moment__WEBPACK_IMPORTED_MODULE_6___default()(confirms[key].lastUpdate).format("YYYY-MM-DD"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Description, {
      className: "lowerSpace"
    }, "Confirmed:", __jsx("strong", null, addComma(confirms[key].confirmed))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Description, {
      className: "lowerSpace"
    }, "Active:", __jsx("strong", null, addComma(confirms[key].active)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, {
      extra: true
    }, __jsx("div", {
      className: "ui two buttons"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      basic: true,
      color: "red"
    }, "||"))))))) : __jsx("h1", null, "Loading...")));
  }

}

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