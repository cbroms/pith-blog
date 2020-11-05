webpackHotUpdate(1,{

/***/ "./components/colorMode.js":
/*!*********************************!*\
  !*** ./components/colorMode.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorMode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/cbroms/Desktop/pith-blog/components/colorMode.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ColorMode() {
  var setDark = function setDark() {
    window.localStorage.setItem("pith-color-mode", "dark");
    document.documentElement.style.setProperty("--background-color", "var(--dark-dark)");
    document.documentElement.style.setProperty("--reading-color", "var(--mid-dark)");
    document.documentElement.style.setProperty("--heading-text", "var(--mid-light)");
    document.documentElement.style.setProperty("--body-text", "var(--dark-light)");
    document.documentElement.style.setProperty("--logo-color", "var(--light-light)");
  };

  var setLight = function setLight() {
    window.localStorage.setItem("pith-color-mode", "light");
    document.documentElement.style.setProperty("--background-color", "var(--mid-light)");
    document.documentElement.style.setProperty("--reading-color", "var(--light-light)");
    document.documentElement.style.setProperty("--heading-text", "var(--mid-dark)");
    document.documentElement.style.setProperty("--body-text", "var(--mid-dark)");
    document.documentElement.style.setProperty("--logo-color", "var(--black)");
  };

  var mode = window.localStorage.getItem("pith-color-mode");
  if (mode === "dark") setDark();else if (mode === "light") setLight();else {
    var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) setDark();else setLight();
  }
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "light-square",
    onClick: function onClick() {
      return setLight();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("div", {
    id: "dark-square",
    onClick: function onClick() {
      return setDark();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=1.158315068b3fbca6bd9b.hot-update.js.map