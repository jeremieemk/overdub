webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Hamburger.js":
/*!***************************************!*\
  !*** ./pages/components/Hamburger.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamburgerOpenMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HamburgerOpenMenu */ "./pages/components/HamburgerOpenMenu.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/Hamburger.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Hamburger() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var handleHamburgerClick = function handleHamburgerClick() {
    return setOpen(!isOpen);
  };

  return __jsx("div", {
    className: "hamburger-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "lines",
    onClick: handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "line upper-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: "line lower-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), isOpen ? __jsx(_HamburgerOpenMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : null, style, isOpen ? openStyle : null);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "\n    .lines {\n      margin-top: var(--global-margin);\n      margin-right: var(--global-margin);\n    }\n\n    .line {\n      margin-bottom: 0.5rem;\n      width: 2rem;\n      border-bottom: 0.2rem solid white;\n      position: relative;\n    }\n  ");

var openStyle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "\n    .line {\n      border-bottom: 0.2rem solid black;\n      z-index: 100;\n      margin-bottom: 0;\n    }\n    .lower-line {\n      transform: rotate(45deg);\n    }\n    .upper-line {\n      transform: rotate(-45deg);\n      transform: translateY(0.2rem;);\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

/***/ })

})
//# sourceMappingURL=index.js.a6bc5ffb99eaced9dec6.hot-update.js.map