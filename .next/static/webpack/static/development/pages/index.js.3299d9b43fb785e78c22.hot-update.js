webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hello */ "./components/Hello.js");

var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Index() {
  var _jsx;

  var logoClasses = "landing-logo-container";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasScrolled = _useState[0],
      sethasScrolled = _useState[1];

  var handleScroll = function handleScroll() {
    sethasScrolled(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", (_jsx = {
    className: logoClasses
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", hasScrolled ? "hidden-strike" : "landing-logo-container"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 18
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("div", {
    className: "landing-logo-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    className: "avatar",
    src: "/img/avatar1.png",
    alt: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("h1", {
    className: "over",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "over-"), __jsx("h1", {
    className: "dub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "duB"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("h2", {
    className: "web",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "WEB DEV."))), __jsx("div", {
    className: "arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/arrow.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(_components_Hello__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "\n    .landing-logo-container {\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .avatar {\n      width: 5.5rem;\n      height: auto;\n      margin-left: -0.5rem;\n    }\n\n    .over {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 3.5rem;\n\n      margin-top: -1rem;\n    }\n    .dub {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 6rem;\n      margin-top: -1.6rem;\n    }\n    h1,\n    h2 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n    }\n    hr {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      border-color: white;\n      width: 5.5rem;\n      border-top: 1px solid white;\n      margin-inline-start: 5rem;\n      margin-top: -1.3rem;\n      margin-inline-end: 0;\n    }\n    .web {\n      font-family: var(--font3);\n      color: white;\n      font-size: 1.15rem;\n      margin-left: 5.2rem;\n      margin-top: 0.1rem;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-bottom: 10rem;\n      transform: translateY(-4rem);\n    }\n    .hidden {\n      display: none;\n    }\n    @media (min-width: 801px) {\n      .landing-logo-wrapper {\n        transform: scale(2);\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3299d9b43fb785e78c22.hot-update.js.map