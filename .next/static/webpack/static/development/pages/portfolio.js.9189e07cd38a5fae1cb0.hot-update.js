webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/components/ProjectItem.js":
/*!*****************************************!*\
  !*** ./pages/components/ProjectItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBox */ "./pages/components/LinkBox.js");
/* harmony import */ var _ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDescriptionTitle */ "./pages/components/ProjectDescriptionTitle.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/ProjectItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProjectItem(props) {
  return __jsx("div", {
    className: "project-item-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "COMPANY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.company), __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "ROLE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.role), __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "TOOLS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.tools), __jsx("img", {
    className: "screenshot",
    src: props.img,
    alt: "screenshot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "\n    .project-item-container {\n      padding-right: var(--global-margin);\n      padding-left: var(--global-margin);\n      margin-top: var(--global-margin);\n    }\n    h1 {\n      color: var(--color2);\n      font-family: var(--font3);\n      font-size: 1.2rem;\n    }\n    p {\n      font-size: 1rem;\n      color: white;\n      font-family: var(--font4);\n      margin-block-start: 0.2rem;\n      margin-block-end: 0;\n    }\n    .screenshot {\n      margin-top: var(--global-margin);\n      width: 100%;\n      height: auto;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=portfolio.js.9189e07cd38a5fae1cb0.hot-update.js.map