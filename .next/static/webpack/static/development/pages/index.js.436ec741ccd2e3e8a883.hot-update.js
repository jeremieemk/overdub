webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hello.js":
/*!*****************************!*\
  !*** ./components/Hello.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _text_HelloText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text/HelloText */ "./components/text/HelloText.js");
/* harmony import */ var _LinkBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkBox */ "./components/LinkBox.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/Hello.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Hello(props) {
  var helloContainerClassName = props.fireAnimation ? "hello-container animate" : "hello-container";
  return __jsx("div", {
    className: helloContainerClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Hey, Hi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("div", {
    className: "under-the-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_text_HelloText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/about",
    name: "about me",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/portfolio",
    name: "portfolio",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/skills",
    name: "skills",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    externalLink: "/img/cv2020.pdf",
    target: "_blank",
    name: "cv",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "\n    .hello-container {\n      opacity: 0;\n      margin-bottom: 2rem;\n    }\n    .animate {\n      animation: fadeIn 1.5s;\n      animation-fill-mode: forwards;\n    }\n\n    .under-the-title {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    @media (min-width: 801px) {\n      .hello-container {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n      .under-the-title {\n        margin-bottom: 3rem;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ })

})
//# sourceMappingURL=index.js.436ec741ccd2e3e8a883.hot-update.js.map