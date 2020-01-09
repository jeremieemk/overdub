webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/LinkBox.js":
/*!*************************************!*\
  !*** ./pages/components/LinkBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/LinkBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LinkBox(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "text-box-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.name)), props.showArrow ? __jsx("div", {
    className: "arrow-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/whitearrow3.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })) : null))), style, !props.showArrow ? centeredTitle : null);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "\n    .text-box-container {\n      margin-top: 1rem;\n      display: flex;\n      cursor: \"pointer\";\n    }\n    .text-box {\n      color: white;\n      font-family: var(--font3);\n      border: var(--line-width) solid white;\n      font-size: 1.3rem;\n      width: 11rem;\n      height: 3rem;\n      display: flex;\n      align-items: center;\n    }\n    .arrow-box {\n      border-width: var(--line-width) var(--line-width) var(--line-width) 0;\n      width: 5rem;\n      border-style: solid;\n      border-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      padding-left: 2rem;\n    }\n    .arrow {\n      width: 2rem;\n      height: auto;\n    }\n  ");

var centeredTitle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "\n    .text-box {\n      justify-content: center;\n      width: 80vw;\n    }\n    .text {\n      padding-left: 0;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (LinkBox);

/***/ })

})
//# sourceMappingURL=index.js.5b3a0a2ac893b488b2d3.hot-update.js.map