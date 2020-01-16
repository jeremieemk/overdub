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
}, "\n    .skill-bar-container {\n      margin-left: var(--global-margin);\n\n      width: 100%;\n    }\n    .skill-name-container,\n    .skill-measure-bar-container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      font-family: var(--font4);\n    }\n    .skill {\n      color: white;\n    }\n    .skill-name-container > p {\n      margin-block-start: 0.5rem;\n      margin-block-end: 0.5rem;\n    }\n\n    .skill-measure-bar-container {\n      padding-right: 4rem;\n    }\n    .skill-bar-outline {\n      width: 100%;\n      height: 1rem;\n      border: 1px solid white;\n    }\n    .skill-bar {\n      border-bottom: 1rem solid white;\n    }\n    @media (min-width: 801px) {\n      .skill-name-container {\n        font-size: 1.2rem;\n      }\n      .skill-name-container > p {\n        margin-block-start: 1.5rem;\n        margin-block-end: 0.8rem;\n      }\n      .skill-bar {\n        border-bottom: 1.2rem solid white;\n      }\n      .skill-bar-outline {\n        height: 1.2rem;\n      }\n    }\n  ");

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _components_SkillBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SkillBar */ "./components/SkillBar.js");
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
  }), __jsx("div", {
    className: "books-pic-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    className: "books",
    src: "/img/bookish.png",
    alt: "me-carrying-books",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    className: "skill-bar-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "JavaScript",
    percentage: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "React",
    percentage: "85%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "CSS",
    percentage: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "HTML",
    percentage: "90%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "React-Native",
    percentage: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "jQuery",
    percentage: "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "Python",
    percentage: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "C",
    percentage: "30%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "SQL",
    percentage: "40%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "Figma",
    percentage: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "Heroku",
    percentage: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_SkillBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    skillName: "Git",
    percentage: "65%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "\n    .books {\n      width: 15rem;\n      height: auto;\n    }\n    .books-pic-container {\n      text-align: center;\n    }\n    .skill-bar-group {\n      padding-top: 2rem;\n      padding-bottom: 5rem;\n    }\n    @media (min-width: 801px) {\n      .skill-bar-group {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n      .books {\n        width: 20rem;\n        height: auto;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./style/GlobalStyles.js":
/*!*******************************!*\
  !*** ./style/GlobalStyles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var GlobalStyles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3722228556",
  __self: undefined
}, "@font-face{font-family:\"PxGroteskBold\";src:url(\"fonts/PxGrotesk-Bold.woff2\") format(\"woff2\");src:url(\"fonts/PxGrotesk-Bold.woff\") format(\"woff\");src:url(\"fonts/PxGroteskBold.ttf\") format(\"truetype\");}@font-face{font-family:\"Sectra\";src:url(\"fonts/Sectra.woff2\") format(\"woff2\");src:url(\"fonts/Sectra.woff\") format(\"woff\");src:url(\"fonts/Sectra.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Bold\";src:url(\"fonts/WorkSans-Bold.woff2\") format(\"woff2\");src:url(\"fonts/WorkSans-Bold.woff\") format(\"woff\");src:url(\"fonts/WorkSans-Bold.ttf\") format(\"truetype\");}@font-face{font-family:\"WorkSans-Regular\";src:url(\"fonts/WorkSans-Regular.ttf\") format(\"truetype\");}:root{--global-margin:2rem;--desktop-padding:25%;--color1:#f85e3c;--color2:#fff55a;--font1:\"Sectra\";--font2:\"PxGroteskBold\";--font3:\"WorkSans-Bold\";--font4:\"WorkSans-Regular\";--line-width:0.1rem;}body{background-color:var(--color1);margin:0;}a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbWllL3dlYi8yOF9wb3J0Zm9saW8vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNxQixBQUdtQyxBQU1QLEFBTU8sQUFNRyxBQUtWLEFBV1UsQUFJVixxQkEvQnlCLEFBaUJ4QixPQXZCZ0MsQUFZRCxHQU1JLEFBZ0JoRCxTQUNYLEdBWG1CLE9BY0gsVUFiRyxJQWNuQixHQWhDOEMsVUFtQjNCLElBYmtDLENBWkMsTUFrQnRELE1BUTBCLGlCQW5CdUIsT0FvQnZCLGNBZDhCLEVBWkEsUUEyQjNCLGdCQXBCN0IsV0FxQnNCLGlCQWZ0QixFQVpBLENBNEJBIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbWllL3dlYi8yOF9wb3J0Zm9saW8vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2xvYmFsU3R5bGVzID0gKFxuICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6IFwiUHhHcm90ZXNrQm9sZFwiO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9QeEdyb3Rlc2stQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvUHhHcm90ZXNrLUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9QeEdyb3Rlc2tCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICB9XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICBmb250LWZhbWlseTogXCJTZWN0cmFcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvU2VjdHJhLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9TZWN0cmEud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICAgICAgc3JjOiB1cmwoXCJmb250cy9TZWN0cmEudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zLUJvbGRcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gICAgICBzcmM6IHVybChcImZvbnRzL1dvcmtTYW5zLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmtTYW5zLVJlZ3VsYXJcIjtcbiAgICAgIHNyYzogdXJsKFwiZm9udHMvV29ya1NhbnMtUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgfVxuXG4gICAgOnJvb3Qge1xuICAgICAgLS1nbG9iYWwtbWFyZ2luOiAycmVtO1xuICAgICAgLS1kZXNrdG9wLXBhZGRpbmc6IDI1JTtcbiAgICAgIC0tY29sb3IxOiAjZjg1ZTNjO1xuICAgICAgLS1jb2xvcjI6ICNmZmY1NWE7XG4gICAgICAtLWZvbnQxOiBcIlNlY3RyYVwiO1xuICAgICAgLS1mb250MjogXCJQeEdyb3Rlc2tCb2xkXCI7XG4gICAgICAtLWZvbnQzOiBcIldvcmtTYW5zLUJvbGRcIjtcbiAgICAgIC0tZm9udDQ6IFwiV29ya1NhbnMtUmVndWxhclwiO1xuICAgICAgLS1saW5lLXdpZHRoOiAwLjFyZW07XG4gICAgfVxuICAgIGJvZHkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIGB9PC9zdHlsZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbiJdfQ== */\n/*@ sourceURL=/Users/jeremie/web/28_portfolio/style/GlobalStyles.js */");

/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ })

})
//# sourceMappingURL=skills.js.ffca4f896e818933d678.hot-update.js.map