webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./components/ProjectItem.js":
/*!***********************************!*\
  !*** ./components/ProjectItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBox */ "./components/LinkBox.js");
/* harmony import */ var _ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectDescriptionTitle */ "./components/ProjectDescriptionTitle.js");
var _jsxFileName = "/Users/jeremie/web/28_portfolio/components/ProjectItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ProjectItem(props) {
  return __jsx("div", {
    className: "project-item-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "project-info-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "WEBSITE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("a", {
    href: props.link,
    target: "_blank",
    className: "link-and-arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.name), __jsx("div", {
    className: "link-arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    className: "link-arrow",
    src: "/img/whitearrow3.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "COMPANY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, props.company)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "ROLE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.role)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_ProjectDescriptionTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "TOOLS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, props.tools))), __jsx("a", {
    href: props.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    className: "screenshot",
    src: props.img,
    alt: "screenshot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("div", {
    className: "arrow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    className: "arrow",
    src: "/img/arrow.png",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\n    .project-item-container {\n      padding-right: var(--global-margin);\n      padding-left: var(--global-margin);\n      margin-top: 2rem;\n    }\n    .link-and-arrow-container {\n      display: flex;\n    }\n    .item-title-container {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n    .link-arrow {\n      width: 1rem;\n      transform: translateY(0.35rem);\n      padding-left: 0.4rem;\n      position: relative;\n      z-index: -1;\n    }\n    p {\n      font-size: 1.1rem;\n      color: white;\n      font-family: var(--font4);\n      margin-block-start: 0.2rem;\n      margin-block-end: 0;\n    }\n    .screenshot {\n      margin-top: 1.7rem;\n      margin-bottom: 1rem;\n      width: 100%;\n      height: auto;\n      border: 8px solid white;\n    }\n    .separation-line {\n      margin-bottom: 0.5rem;\n      width: 100%;\n      float: right;\n      border-bottom: 0.2rem solid white;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-top: 4rem;\n      margin-bottom: -5rem;\n      transform: translateY(-4rem);\n      position: relative;\n      z-index: -1;\n    }\n    .arrow {\n      width: 2rem;\n      opacity: 0.8;\n    }\n    @media (min-width: 801px) {\n      p {\n        font-size: 1rem;\n        margin-block-end: 0.5rem;\n      }\n      .project-info-section {\n        display: grid;\n        grid-template-columns: 50% 50%;\n      }\n      .link-arrow {\n        width: 1rem;\n        transform: translateY(0.4rem);\n        padding-left: 0.7rem;\n      }\n      .arrow {\n        width: 3rem;\n        opacity: 0.8;\n        z-index: -10;\n      }\n      .arrow-container {\n        margin-bottom: -3rem;\n      }\n      .screenshot {\n        margin-top: 2rem;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=portfolio.js.9b883529bc01cab8d028.hot-update.js.map