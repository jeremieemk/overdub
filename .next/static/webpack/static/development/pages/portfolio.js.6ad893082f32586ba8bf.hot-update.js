webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/components/ProjectDescriptionTitle.js":
/*!*****************************************************!*\
  !*** ./pages/components/ProjectDescriptionTitle.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/ProjectDescriptionTitle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProjectDescriptionTitle(props) {
  return __jsx("div", {
    className: "page-title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "page-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.title), __jsx("div", {
    "class": "title-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "\n    .page-title-container {\n      padding-top: 30%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .page-title {\n      color: var(--color2);\n      font-family: var(--font3);\n      text-align: center;\n      font-size: 1.3rem;\n    }\n    .title-line {\n      margin-bottom: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 3.3rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProjectDescriptionTitile);

/***/ }),

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "COMPANY"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.company), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "ROLE"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.role), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "TOOLS"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.tools), __jsx("img", {
    className: "screenshot",
    src: props.img,
    alt: "screenshot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "\n    h1 {\n      color: var(--color2);\n      font-family: var(--font3);\n      font-size: 1.3rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=portfolio.js.6ad893082f32586ba8bf.hot-update.js.map