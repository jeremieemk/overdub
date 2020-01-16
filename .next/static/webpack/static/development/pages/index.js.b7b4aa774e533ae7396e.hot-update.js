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




var Hello = function Hello() {
  return __jsx("div", {
    className: "hello-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Hey, Hi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "under-the-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_text_HelloText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/about",
    name: "about me",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/portfolio",
    name: "portfolio",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    link: "/skills",
    name: "skills",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_LinkBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    externalLink: "https://res.cloudinary.com/dbslwolfi/image/upload/v1579188041/rss/CV2020_ytyjik.pdf",
    target: "_blank",
    name: "cv",
    showArrow: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), style);
};

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "\n    .hello-container {\n      height: 100vh;\n      margin-bottom: 5rem;\n    }\n\n    .under-the-title {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-bottom: 5rem;\n    }\n    @media (min-width: 801px) {\n      .hello-container {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "./components/LinkBox.js":
/*!*******************************!*\
  !*** ./components/LinkBox.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/LinkBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LinkBox(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "text-box-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "text-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    href: props.externalLink,
    target: props.target,
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.name)), props.showArrow ? __jsx("div", {
    className: "arrow-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/whitearrow3.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })) : null))), style, !props.showArrow ? centeredTitle : null);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "\n    .text-box-container {\n      margin-top: 1rem;\n      display: flex;\n      cursor: \"pointer\";\n    }\n    .text-box {\n      color: white;\n      font-family: var(--font3);\n      border: var(--line-width) solid white;\n      font-size: 1.3rem;\n      width: 11rem;\n      height: 3rem;\n      display: flex;\n      align-items: center;\n    }\n    .arrow-box {\n      border-width: var(--line-width) var(--line-width) var(--line-width) 0;\n      width: 5rem;\n      border-style: solid;\n      border-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      padding-left: 2rem;\n    }\n    .arrow {\n      width: 2rem;\n      height: auto;\n    }\n    @media (min-width: 801px) {\n      .text-box-container {\n        margin-top: 2rem;\n      }\n      .text-box {\n        width: 11rem;\n        height: 3rem;\n        font-size: 1.4rem;\n      }\n      .text {\n        padding-left: 2rem;\n      }\n      .arrow-box {\n        width: rem;\n      }\n    }\n  ");

var centeredTitle = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, "\n    .text-box {\n      justify-content: center;\n      width: 80vw;\n    }\n    .text {\n      padding-left: 0;\n      font-size: 1.2rem;\n    }\n    @media (min-width: 801px) {\n      .text-box-container {\n        margin-left: var(--desktop-padding);\n        margin-right: var(--desktop-padding);\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (LinkBox);

/***/ })

})
//# sourceMappingURL=index.js.b7b4aa774e533ae7396e.hot-update.js.map