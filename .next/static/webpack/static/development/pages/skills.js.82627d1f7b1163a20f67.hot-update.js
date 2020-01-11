webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./pages/components/HamburgerOpenMenu.js":
/*!***********************************************!*\
  !*** ./pages/components/HamburgerOpenMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jeremie/web/28_portfolio/pages/components/HamburgerOpenMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HamburgerOpenMenu(props) {
  var test = function test() {
    return console.log("ça marche");
  };

  return __jsx("div", {
    className: "hamburger-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "nested-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "ABOUT ME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "PORTFOLIO")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SKILLS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/img/CV2020.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    onClick: props.handleHamburgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "CV")), __jsx("div", {
    className: "get-in-touch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("div", {
    className: "social-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/jeremieemk",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/fb.png",
    alt: "fb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/jeremiemoussaidkerouanton/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/linkedin.png",
    alt: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("a", {
    href: "mailto:jeremieemk@gmail.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    className: "social-icon-pic",
    src: "/img/mail.png",
    alt: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\n    .hamburger-menu-container {\n      height: 100vh;\n      width: 100vw;\n      left: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n    }\n    .nested-menu-container {\n      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      height: 100%;\n      width: 100%;\n      padding: 2rem;\n      font-size: 1.05rem;\n      font-family: var(--font3);\n      letter-spacing: 0.1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n    }\n    .nested-menu-container > a {\n      padding: 1rem;\n    }\n    .social-icon-pic {\n      width: 1.5rem;\n      padding: 1rem;\n      height: auto;\n    }\n    .get-in-touch {\n      text-align: center;\n      transform: translateY(8rem);\n    }\n    .get-in-touch > p {\n      color: black;\n\n      font-size: 0.8rem;\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (HamburgerOpenMenu);

/***/ })

})
//# sourceMappingURL=skills.js.82627d1f7b1163a20f67.hot-update.js.map