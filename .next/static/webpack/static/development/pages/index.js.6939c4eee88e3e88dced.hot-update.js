webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DesktopNav.js":
/*!**********************************!*\
  !*** ./components/DesktopNav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/DesktopNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var menuItems = ["HELLO", "ABOUT ME", "PORTFOLIO", "SKILLS"];

var DesktopNav = function DesktopNav() {
  return __jsx("div", {
    className: "desktop-nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "title-plus-line-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, menuItems.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("a", {
      className: "menu-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, item[0]));
  }), __jsx("div", {
    className: "bottom-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "ABOUT ME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "PORTFOLIO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "SKILLS")), __jsx("a", {
    href: "https://res.cloudinary.com/dbslwolfi/image/upload/v1578760331/rss/CV2020_gsc1gi.pdf",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "CV"), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "\n    .desktop-nav-container {\n      z-index: 1;\n      width: 100%;\n      position: absolute;\n      padding-top: 2rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: var(--font4);\n      font-size: 1.2rem;\n      background-color: var(--color1);\n    }\n    .desktop-nav-container > * {\n      padding: 2rem;\n    }\n\n    .bottom-line {\n      padding-top: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 1rem;\n      display: none;\n      position: absolute;\n    }\n    .menu-item-name:hover + .bottom-line {\n      display: block;\n    }\n\n    @media (max-width: 801px) {\n      .desktop-nav-container {\n        display: none;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (DesktopNav);

/***/ })

})
//# sourceMappingURL=index.js.6939c4eee88e3e88dced.hot-update.js.map