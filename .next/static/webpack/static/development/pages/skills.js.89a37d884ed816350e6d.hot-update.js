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
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.skillName), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "\n    .skill-bar-container {\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (SkillBar);

/***/ }),

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ "./pages/components/Layout.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PageTitle */ "./pages/components/PageTitle.js");
/* harmony import */ var _components_SkillBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SkillBar */ "./pages/components/SkillBar.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/skills.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Skills = function Skills() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "my technical Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "test"), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "React",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\n   \n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=skills.js.89a37d884ed816350e6d.hot-update.js.map