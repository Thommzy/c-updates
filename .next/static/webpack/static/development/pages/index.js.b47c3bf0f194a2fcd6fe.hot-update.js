webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Home/CardReport.js":
/*!***************************************!*\
  !*** ./Components/Home/CardReport.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Applications/XAMPP/xamppfiles/htdocs/covidtracker/tracker/Components/Home/CardReport.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var date = moment__WEBPACK_IMPORTED_MODULE_3___default()("2018-10-03T05:00:00.000+0000"); //console.log(date.format("LLLL"));

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

var CardReport = function CardReport(_ref) {
  var read = _ref.read;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "cardd",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    className: "card-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, Object.keys(read).map(function (key, i) {
    return read[key].value || key === "lastUpdate" ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      key: i,
      className: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "medkit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, read[key].value ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      className: key === "confirmed" ? "medkit__icon__confirmed" : key === "recovered" ? "medkit__icon__recovered" : key === "deaths" ? "medkit__icon__deaths" : null,
      name: "medkit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }) : null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, key === "lastUpdate" ? "Last Update" : key), key === "lastUpdate" ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      className: "lightText",
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }, " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(read[key]).format("LLLL")) : null, key === "confirmed" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/confirmed",
      as: "/".concat(key),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "button-way",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, "Read More")) : null, key === "recovered" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/recovered",
      as: "/".concat(key),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "button-way",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, "Read More")) : null, key === "deaths" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/deaths",
      as: "/".concat(key),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "button-way",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, "Read More")) : null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, read[key].value ? addComma(Number(read[key].value)) : null))) : null;
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardReport);

/***/ })

})
//# sourceMappingURL=index.js.b47c3bf0f194a2fcd6fe.hot-update.js.map