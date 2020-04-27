webpackHotUpdate("static/development/pages/recovered.js",{

/***/ "./pages/recovered.js":
/*!****************************!*\
  !*** ./pages/recovered.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return recovered; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Header/MainMenu */ "./Components/Header/MainMenu.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/covidtracker/tracker/pages/recovered.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 // import us from "/static/us-flag.jpg";


var router = next_router__WEBPACK_IMPORTED_MODULE_7___default.a; //console.log(router);

function addComma(str) {
  var aa = str.toString().split("");

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

var recovered = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(recovered, _Component);

  var _super = _createSuper(recovered);

  function recovered() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, recovered);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(recovered, [{
    key: "componentDidMount",
    value: function componentDidMount() {} //  console.log("Yay");
    // renderConfirmed(confirms) {
    //   return confirms.map((key) => {
    //     //  console.log(confirms);
    //     return confirms;
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var confirms = this.props.confirms; // console.log(confirms);

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
        router: router,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "main-confirmed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Group, {
        className: "card-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, Object.keys(confirms).map(function (key, i) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          key: i,
          className: "center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Content, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 19
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Image"], {
          floated: "right",
          size: "mini",
          src: confirms[key].countryRegion === "US" ? "/static/us-flag.jpg" : confirms[key].countryRegion === "Spain" ? "/static/spain-flag.jpg" : confirms[key].countryRegion === "Italy" ? "/static/italy-flag.jpg" : confirms[key].countryRegion === "France" ? "/static/france-flag.jpg" : confirms[key].countryRegion === "Germany" ? "/static/germany-flag.gif" : confirms[key].countryRegion === "United Kingdom" ? "/static/uk-flag.jpg" : confirms[key].countryRegion === "Turkey" ? "/static/turkey-flag.jpg" : confirms[key].countryRegion === "Iran" ? "/static/iran-flag.jpg" : confirms[key].countryRegion === "Russia" ? "/static/russia-flag.jpg" : confirms[key].countryRegion === "China" ? "/static/china-flag.jpg" : confirms[key].countryRegion === "Brazil" ? "/static/brazil-flag.jpg" : confirms[key].countryRegion === "Belgium" ? "/static/belgium-flag.jpg" : confirms[key].countryRegion === "Netherlands" ? "/static/netherland-flag.jpg" : confirms[key].countryRegion === "Switzerland" ? "/static/switzerland-flag.jpg" : confirms[key].countryRegion === "India" ? "/static/india-flag.jpg" : confirms[key].countryRegion === "Peru" ? "/static/peru-flag.png" : confirms[key].countryRegion === "Canada" ? "/static/canada-flag.jpg" : confirms[key].countryRegion === "Portugal" ? "/static/portugal-flag.jpg" : confirms[key].countryRegion === "Ecuador" ? "/static/ecuador-flag.png" : confirms[key].countryRegion === "Ireland" ? "/static/ireland.jpg" : confirms[key].countryRegion === "Nigeria" ? "/static/nigeria-flag.jpg" : confirms[key].countryRegion === "Ghana" ? "/static/ghana-flag.jpg" : null,
          className: "center",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, {
          className: "lowerSpace",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }
        }, "Province state:", __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 23
          }
        }, confirms[key].provinceState)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, {
          className: "lowerSpace",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 21
          }
        }, "Country Region:", __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 23
          }
        }, confirms[key].countryRegion)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, {
          className: "lowerSpace",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 21
          }
        }, "Last Update:", __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 23
          }
        }, moment__WEBPACK_IMPORTED_MODULE_12___default()(confirms[key].lastUpdate).format("YYYY-MM-DD"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, {
          className: "lowerSpace",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }
        }, "Recovered:", __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 23
          }
        }, addComma(confirms[key].recovered))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Description, {
          className: "lowerSpace",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }
        }, "Active:", __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 23
          }
        }, addComma(confirms[key].active)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Card"].Content, {
          extra: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 19
          }
        }, __jsx("div", {
          className: "ui two buttons",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 21
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          basic: true,
          color: "red",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 23
          }
        }, "||"))));
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var confirms, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              confirms = [];
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"], "/confirmed")));

            case 4:
              response = _context.sent;
              confirms = response.data; // console.table(confirms);

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
              return _context.abrupt("return", {
                confirms: confirms
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]], Promise);
    }
  }]);

  return recovered;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=recovered.js.b7fffffa0ebf76479b75.hot-update.js.map