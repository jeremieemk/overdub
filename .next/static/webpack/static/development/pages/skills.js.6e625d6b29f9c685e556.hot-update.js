webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./components/SkillBar.js":
/*!********************************!*\
  !*** ./components/SkillBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/SkillBar.js";

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
  }, "| ", __jsx("span", {
    className: "skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.skillName), " |")), __jsx("div", {
    className: "skill-measure-bar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "skill-bar-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "skill-bar",
    style: {
      width: props.percentage
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "\n    .skill-bar-container {\n      margin-left: var(--global-margin);\n\n      width: 100%;\n    }\n    .skill-name-container,\n    .skill-measure-bar-container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      font-family: var(--font4);\n    }\n    .skill {\n      color: white;\n    }\n    .skill-name-container > p {\n      margin-block-start: 0.5rem;\n      margin-block-end: 0.5rem;\n    }\n\n    .skill-bar-outline {\n      width: 100%;\n      height: 1rem;\n      border: 1px solid white;\n    }\n    .skill-bar {\n      border-bottom: 1rem solid white;\n    }\n    @media (min-width: 801px) {\n      .skill-name-container {\n        font-size: 1.2rem;\n      }\n      .skill-name-container > p {\n        margin-block-start: 1.5rem;\n        margin-block-end: 0.8rem;\n      }\n      .skill-bar {\n        border-bottom: 1.2rem solid white;\n      }\n      .skill-bar-outline {\n        height: 1.2rem;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (SkillBar);

/***/ })

})
//# sourceMappingURL=skills.js.6e625d6b29f9c685e556.hot-update.js.map