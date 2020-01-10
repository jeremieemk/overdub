webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./pages/components/SkillBar.js":
/*!**************************************!*\
  !*** ./pages/components/SkillBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/SkillBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SkillBar(props) {
  return __jsx("div", {
    className: "skill-bar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "skill-name-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.skillName)), __jsx("div", {
    className: "skill-measure-bar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "skill-bar",
    style: {
      width: props.percentage
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "\n    .skill-bar-container {\n      margin-left: var(--global-margin);\n\n      width: 100%;\n      display: grid;\n      grid-template-columns: 20% 80%;\n    }\n    .skill-name-container,\n    .skill-measure-bar-container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: var(--font4);\n      color: var(--color2);\n    }\n    .skill-measure-bar-container {\n      justify-content: flex-start;\n      padding-right: 4rem;\n    }\n    .skill-bar {\n      border-bottom: 1rem solid white;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (SkillBar);

/***/ })

})
//# sourceMappingURL=skills.js.cf5869dfff1078549654.hot-update.js.map