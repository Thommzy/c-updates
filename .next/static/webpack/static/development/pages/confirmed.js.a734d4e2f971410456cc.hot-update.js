webpackHotUpdate("static/development/pages/confirmed.js",{

/***/ "./pages/confirmed.js":
/*!****************************!*\
  !*** ./pages/confirmed.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirmed; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Header/MainMenu */ "./Components/Header/MainMenu.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/tracker/pages/confirmed.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







 // import us from "/static/us-flag.jpg";


var router = next_router__WEBPACK_IMPORTED_MODULE_10___default.a;
console.log(router);

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

var confirmed = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(confirmed, _Component);

  var _super = _createSuper(confirmed);

  function confirmed() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, confirmed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isLoading: false,
      results: _this.props.confirms,
      value: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleResultSelect", function (e, _ref) {
      var result = _ref.result;
      return _this.setState({
        value: result.countryRegion
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSearchChange", function (e, _ref2) {
      var value = _ref2.value;

      _this.setState({
        isLoading: true,
        value: value
      });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.setState({
          isLoading: false,
          results: _this.props.confirms,
          value: ""
        });
        var re = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.escapeRegExp(_this.state.value), "i");

        var isMatch = function isMatch(result) {
          return re.test(result.countryRegion);
        };

        console.log(isMatch);

        _this.setState({
          isLoading: false,
          results: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.filter(_this.props.confirms, isMatch)
        });
      }, 300);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(confirmed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          confirms = _this$props.confirms,
          loading = _this$props.loading;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_Components_Header_MainMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        router: router,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Search"], {
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        value: value,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, !loading ? __jsx("div", {
        className: "main-confirmed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Group, {
        className: "card-main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }
      }, Object.keys(results).map(function (key, i) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"], {
          key: i,
          className: "center",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 19
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Content, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Image"], {
          floated: "right",
          size: "mini",
          src: confirms[key].countryRegion === "US" ? "/static/us-flag.jpg" : confirms[key].countryRegion === "Spain" ? "/static/spain-flag.jpg" : confirms[key].countryRegion === "Italy" ? "/static/italy-flag.jpg" : confirms[key].countryRegion === "France" ? "/static/france-flag.jpg" : confirms[key].countryRegion === "Germany" ? "/static/germany-flag.gif" : confirms[key].countryRegion === "United Kingdom" ? "/static/uk-flag.jpg" : confirms[key].countryRegion === "Turkey" ? "/static/turkey-flag.jpg" : confirms[key].countryRegion === "Iran" ? "/static/iran-flag.jpg" : confirms[key].countryRegion === "Russia" ? "/static/russia-flag.jpg" : confirms[key].countryRegion === "China" ? "/static/china-flag.jpg" : confirms[key].countryRegion === "Brazil" ? "/static/brazil-flag.jpg" : confirms[key].countryRegion === "Belgium" ? "/static/belgium-flag.jpg" : confirms[key].countryRegion === "Netherlands" ? "/static/netherland-flag.jpg" : confirms[key].countryRegion === "Switzerland" ? "/static/switzerland-flag.jpg" : confirms[key].countryRegion === "India" ? "/static/india-flag.jpg" : confirms[key].countryRegion === "Peru" ? "/static/peru-flag.png" : confirms[key].countryRegion === "Canada" ? "/static/canada-flag.jpg" : confirms[key].countryRegion === "Portugal" ? "/static/portugal-flag.jpg" : confirms[key].countryRegion === "Ecuador" ? "/static/ecuador-flag.png" : confirms[key].countryRegion === "Ireland" ? "/static/ireland.jpg" : confirms[key].countryRegion === "Nigeria" ? "/static/nigeria-flag.jpg" : confirms[key].countryRegion === "Ghana" ? "/static/ghana-flag.jpg" : null,
          className: "center",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 23
          }
        }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, {
          className: "lowerSpace",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 23
          }
        }, "Province state:", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }
        }, confirms[key].provinceState)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, {
          className: "lowerSpace",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 23
          }
        }, "Country Region:", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }
        }, confirms[key].countryRegion)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, {
          className: "lowerSpace",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 23
          }
        }, "Last Update:", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 25
          }
        }, moment__WEBPACK_IMPORTED_MODULE_15___default()(confirms[key].lastUpdate).format("YYYY-MM-DD"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, {
          className: "lowerSpace",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 23
          }
        }, "Confirmed:", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }
        }, addComma(confirms[key].confirmed))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, {
          className: "lowerSpace",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 23
          }
        }, "Active:", __jsx("strong", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 25
          }
        }, addComma(confirms[key].active)))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Content, {
          extra: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: "ui two buttons",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 23
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
          basic: true,
          color: "red",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }
        }, "||"))));
      }))) : __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }
      }, "Loading...")));
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_11__["BASE_URL"], "/confirmed")));

            case 4:
              response = _context.sent;
              confirms = response.data; // console.table(confirms);

              _context.next = 10;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);

            case 10:
              return _context.abrupt("return", {
                confirms: confirms,
                loading: false
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]], Promise);
    }
  }]);

  return confirmed;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



/***/ })

})
//# sourceMappingURL=confirmed.js.a734d4e2f971410456cc.hot-update.js.map