webpackHotUpdate("static/development/pages/searchtest.js",{

/***/ "./pages/searchtest.js":
/*!*****************************!*\
  !*** ./pages/searchtest.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchExampleStandard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");








var _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/tracker/pages/searchtest.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var source = lodash__WEBPACK_IMPORTED_MODULE_8___default.a.times(200, function () {
  return {
    title: faker__WEBPACK_IMPORTED_MODULE_9___default.a.company.companyName(),
    description: faker__WEBPACK_IMPORTED_MODULE_9___default.a.company.catchPhrase(),
    image: faker__WEBPACK_IMPORTED_MODULE_9___default.a.internet.avatar(),
    price: faker__WEBPACK_IMPORTED_MODULE_9___default.a.finance.amount(0, 100, 2, "$")
  };
});

console.log(typeof source[0].title);
var initialState = {
  isLoading: false,
  results: source,
  value: ""
};

var SearchExampleStandard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchExampleStandard, _Component);

  var _super = _createSuper(SearchExampleStandard);

  function SearchExampleStandard() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SearchExampleStandard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", initialState);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleResultSelect", function (e, _ref) {
      var result = _ref.result;

      _this.setState({
        value: result.title
      });

      console.log(result);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSearchChange", function (e, _ref2) {
      var value = _ref2.value;
      console.log(value);

      _this.setState({
        isLoading: true,
        value: value
      });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.setState(initialState);
        var re = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_8___default.a.escapeRegExp(_this.state.value), "i");

        var isMatch = function isMatch(result) {
          return re.test(result.title);
        };

        _this.setState({
          isLoading: false,
          results: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.filter(source, isMatch)
        });
      }, 300);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SearchExampleStandard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
      console.log(results);
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
        width: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Search"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        loading: isLoading,
        onResultSelect: this.handleResultSelect,
        onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_8___default.a.debounce(this.handleSearchChange, 500, {
          leading: true
        }),
        results: results,
        value: value
      }, this.props, {
        renderer: function renderer(_ref3) {
          var image = _ref3.image,
              price = _ref3.price,
              title = _ref3.title,
              description = _ref3.description;
          return [image && __jsx("div", {
            key: "image",
            className: "image",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }
          }, createHTMLImage(image, {
            autoGenerateKey: false
          })), __jsx("div", {
            key: "content",
            className: "content",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }
          }, title && __jsx("div", {
            className: "title",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 27
            }
          }, title), title && __jsx("div", {
            className: "title",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 27
            }
          }, title), description && __jsx("div", {
            className: "description",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }
          }, description))];
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }
      }, __jsx("pre", {
        style: {
          overflowX: "auto"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, this.state.results.map(function (i, jj) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
          key: jj,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 19
          }
        }, __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }
        }, i.title), __jsx("br", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }
        }), " ", __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 28
          }
        }, i.description), " ", __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }
        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Image"], {
          src: i.image,
          size: "small",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 23
          }
        })), __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }
        }, i.price)));
      })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
        width: 10,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, "State"), __jsx("pre", {
        style: {
          overflowX: "auto"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }, JSON.stringify(this.state, null, 2)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Header"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }, "Options"), __jsx("pre", {
        style: {
          overflowX: "auto"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, JSON.stringify(source, null, 2)))));
    }
  }]);

  return SearchExampleStandard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=searchtest.js.0add2def751f8f3ee3be.hot-update.js.map