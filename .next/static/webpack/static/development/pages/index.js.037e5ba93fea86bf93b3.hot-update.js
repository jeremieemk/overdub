webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hello */ "./components/Hello.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Index() {
  var handleScroll = function handleScroll() {
    return console.log("scrolled");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "landing-logo-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    className: "avatar",
    src: "/img/avatar1.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("h1", {
    className: "over",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "over-"), __jsx("h1", {
    className: "dub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "duB"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("h2", {
    className: "web",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "WEB DEV."))), __jsx("div", {
    className: "arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/arrow.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx(_components_Hello__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "\n    .landing-logo-container {\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .avatar {\n      width: 5.5rem;\n      height: auto;\n      margin-left: -0.5rem;\n    }\n\n    .over {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 3.5rem;\n\n      margin-top: -1rem;\n    }\n    .dub {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 6rem;\n      margin-top: -1.6rem;\n    }\n    h1,\n    h2 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n    }\n    hr {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      border-color: white;\n      width: 5.5rem;\n      border-top: 1px solid white;\n      margin-inline-start: 5rem;\n      margin-top: -1.3rem;\n      margin-inline-end: 0;\n    }\n    .web {\n      font-family: var(--font3);\n      color: white;\n      font-size: 1.15rem;\n      margin-left: 5.2rem;\n      margin-top: 0.1rem;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.037e5ba93fea86bf93b3.hot-update.js.map