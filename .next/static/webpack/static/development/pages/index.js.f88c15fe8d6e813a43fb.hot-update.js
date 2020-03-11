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

var menuItems = [{
  name: "HELLO",
  link: "/"
}, {
  name: "ABOUT ME",
  link: "/about"
}, {
  name: "PORTFOLIO",
  link: "/portfolio"
}, {
  name: "SKILLS",
  link: "/skills"
}];

function renderMenuItems() {
  return menuItems.map(function (item) {
    return __jsx("div", {
      className: "title-plus-line-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      className: "menu-item-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "bottom-line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  });
}

function DesktopNav() {
  return __jsx("div", {
    className: "desktop-nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, renderMenuItems(), __jsx("div", {
    className: "title-plus-line-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: "menu-item-name",
    href: "/img/cv2020.pdf",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "CV"), __jsx("div", {
    className: "bottom-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), style);
}

var style = __jsx("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "\n    .desktop-nav-container > * {\n      padding: 2.3rem;\n    }\n\n    .bottom-line {\n      padding-top: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 0.5rem;\n      visibility: hidden;\n      opacity: 0;\n      transition: visibility 0s, opacity 0.3s linear;\n      position: absolute;\n    }\n    .menu-item-name:hover + .bottom-line {\n      visibility: visible;\n      opacity: 1;\n    }\n\n    @media (max-width: 801px) {\n      .desktop-nav-container {\n        display: none;\n      }\n    }\n  ");

/* harmony default export */ __webpack_exports__["default"] = (DesktopNav);

/***/ })

})
//# sourceMappingURL=index.js.f88c15fe8d6e813a43fb.hot-update.js.map