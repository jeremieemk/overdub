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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasScrolled = _useState[0],
      sethasScrolled = _useState[1];

  var handleScroll = function handleScroll() {
    if (window.scrollY > 150) {
      sethasScrolled(true);
    } else {
      sethasScrolled(false);
    }
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
      lineNumber: 20
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: hasScrolled ? "landing-page-container logo-fades" : "landing-page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "landing-logo-container",
    onClick: console.log("arrow clicked"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "landing-logo-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    className: "avatar",
    src: "/img/avatar1.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("h1", {
    className: "over",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "over-"), __jsx("h1", {
    className: "dub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "duB"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("h2", {
    className: "web",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "WEB DEV."))), __jsx("div", {
    className: "arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/arrow.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }))), __jsx("div", {
    className: hasScrolled ? "hello-section-jumps-up" : "hello-section-pre-scroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_Hello__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "\n    .landing-page-container {\n      visibility: visible;\n      opacity: 1;\n      transition: visibility 3s, opacity 2s linear;\n      position: relative;\n      z-index: -1;\n    }\n    .landing-logo-container {\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      z-index: -1;\n    }\n    .avatar {\n      width: 5.5rem;\n      height: auto;\n      margin-left: -0.5rem;\n      position: relative;\n      z-index: -1;\n    }\n\n    .over {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 3.5rem;\n\n      margin-top: -1rem;\n      position: relative;\n      z-index: -1;\n    }\n    .dub {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 6rem;\n      margin-top: -1.6rem;\n      position: relative;\n      z-index: -1;\n    }\n    h1,\n    h2 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      position: relative;\n      z-index: -1;\n    }\n    hr {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      border-color: white;\n      width: 5.5rem;\n      border-top: 1px solid white;\n      margin-inline-start: 5rem;\n      margin-top: -1.3rem;\n      margin-inline-end: 0;\n      position: relative;\n      z-index: -1;\n    }\n    .web {\n      font-family: var(--font3);\n      color: white;\n      font-size: 1.15rem;\n      margin-left: 5.2rem;\n      margin-top: 0.1rem;\n      position: relative;\n      z-index: -1;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-bottom: 10rem;\n      transform: translateY(-4rem);\n      position: relative;\n      z-index: -1;\n    }\n    .logo-fades {\n      visibility: hidden;\n      opacity: 0;\n      position: relative;\n      z-index: -1;\n    }\n    .hello-section-pre-scroll {\n      opacity: 0;\n    }\n    .hello-section-jumps-up {\n      margin-top: -5rem;\n      position: relative;\n      opacity: 1;\n      transition: opacity 1s linear;\n    }\n    @media (min-width: 801px) {\n      .landing-logo-wrapper {\n        transform: scale(1.4) translateZ(-1em);\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7663dcf47b2d3774880d.hot-update.js.map