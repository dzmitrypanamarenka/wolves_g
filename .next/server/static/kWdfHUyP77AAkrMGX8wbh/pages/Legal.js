module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(11);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Header/styles/style.scss
var style = __webpack_require__(16);

// CONCATENATED MODULE: ./components/Header/index.js





var Header = external_antd_["Layout"].Header;
/* harmony default export */ var components_Header = (function () {
  return external_react_default.a.createElement(Header, {
    className: "main-header"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "wrapper"
  }, external_react_default.a.createElement("div", {
    className: "logo"
  })), external_react_default.a.createElement("div", {
    className: "main-nav"
  }, external_react_default.a.createElement("ul", {
    className: "list"
  }, external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "title"
  }, "STARTSEITE"))), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("a", {
    href: "https://magazine.gamingwolves.net",
    className: "title"
  }, "ONLINE-MAGAZIN")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "title"
  }, "BLOG"))), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/about"
  }, external_react_default.a.createElement("a", {
    className: "title"
  }, "\xDCBER UNS"))), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "https://shop.spreadshirt.de/gaming-wolves/"
  }, external_react_default.a.createElement("a", {
    className: "title"
  }, "SHOP"))), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/donate"
  }, external_react_default.a.createElement("a", {
    className: "title"
  }, "UNTERST\xDCTZEN")))), external_react_default.a.createElement(external_react_burger_menu_["slide"], {
    right: true,
    className: "mobile-menu"
  }, external_react_default.a.createElement("a", {
    id: "home",
    className: "menu-item",
    href: "/"
  }, "STARTSEITE"), external_react_default.a.createElement("a", {
    id: "about",
    className: "menu-item",
    href: "https://magazine.gamingwolves.net"
  }, "ONLINE-MAGAZIN"), external_react_default.a.createElement("a", {
    id: "about",
    className: "menu-item",
    href: "/blog"
  }, "BLOG"), external_react_default.a.createElement("a", {
    id: "contact",
    className: "menu-item",
    href: "/about"
  }, "\xDCBER UNS"), external_react_default.a.createElement("a", {
    id: "shop",
    className: "menu-item",
    href: "https://shop.spreadshirt.de/gaming-wolves/"
  }, "SHOP"), external_react_default.a.createElement("a", {
    id: "shop",
    className: "menu-item",
    href: "/donate"
  }, "UNTERST\xDCTZEN")))));
});
// EXTERNAL MODULE: ./components/Footer/styles/style.scss
var styles_style = __webpack_require__(17);

// CONCATENATED MODULE: ./components/Footer/index.js




var Footer = external_antd_["Layout"].Footer;
/* harmony default export */ var components_Footer = (function () {
  return external_react_default.a.createElement(Footer, {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "description"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "GAMING WOLVES"), external_react_default.a.createElement("p", {
    className: "text"
  }, "GAMING WOLVES ist ein Online-Magazin \xFCber Brett-und Kartenspiele, wie auch Digitale Spiele. Das Online-Magazin erscheint viertelj\xE4hrlich und es werden zwischendurch Berichte \u201EAngespielt\u201C erscheinen, die euch unsere Ersteindr\xFCcke \xFCber die jeweiligen Spiele geben werden. Die Idee ist,Euch Spiele interaktiv und anders zu pr\xE4sentieren, so dass ihr diese ganz neu erleben und wahrnehmen k\xF6nnt. Dabei w\xFCnschen wir euch ganz viel Spa\xDF!")), external_react_default.a.createElement("div", {
    className: "legal"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "RECHTLICHES"), external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Kontakt"))), external_react_default.a.createElement(link_default.a, {
    href: "/impressum"
  }, external_react_default.a.createElement("a", {
    className: "link -impressum"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Impressum"))), external_react_default.a.createElement(link_default.a, {
    href: "/legal"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Datenschutzerkl\xE4rung"))))));
});
// EXTERNAL MODULE: ./components/Layout/index.js
var Layout = __webpack_require__(6);

// EXTERNAL MODULE: ./components/BlogPreview/index.js
var BlogPreview = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Social/styles/style.scss
var Social_styles_style = __webpack_require__(24);

// CONCATENATED MODULE: ./components/Social/index.js




/* harmony default export */ var Social = (function () {
  return external_react_default.a.createElement("div", {
    className: "social-icons"
  }, external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/gamingwolvesnet/",
    className: "icon-wrap"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "instagram",
    theme: "outlined",
    className: "icon"
  })), external_react_default.a.createElement("a", {
    href: "https://www.youtube.com/channel/UCaVBl-zDv_5iv2CVLzt_4iQ?pbjreload=10",
    className: "icon-wrap"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "youtube",
    theme: "outlined",
    className: "icon"
  })), external_react_default.a.createElement("a", {
    href: "https://www.facebook.com/GamingWolves/ ",
    className: "icon-wrap"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "facebook",
    theme: "outlined",
    className: "icon"
  })), external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement("a", {
    className: "icon-wrap"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "mail",
    theme: "outlined",
    className: "icon"
  }))));
});
// EXTERNAL MODULE: external "react-facebook"
var external_react_facebook_ = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Twitter/styles/style.scss
var Twitter_styles_style = __webpack_require__(25);

// CONCATENATED MODULE: ./components/Twitter/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import React from 'react';
//
// import { FacebookProvider, Page } from 'react-facebook';
//
//
// export default () => <div className='twitter-wrapper'>
//
// </div>;




var Twitter_Twitter =
/*#__PURE__*/
function (_Component) {
  _inherits(Twitter, _Component);

  function Twitter() {
    _classCallCheck(this, Twitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Twitter).apply(this, arguments));
  }

  _createClass(Twitter, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_facebook_["FacebookProvider"], {
        appId: "783469808696972"
      }, external_react_default.a.createElement("div", {
        className: "fb-wrapper"
      }, external_react_default.a.createElement(external_react_facebook_["Page"], {
        href: "https://www.facebook.com/Gaming-Wolves-1936582516635559",
        tabs: "timeline",
        showFacepile: false,
        smallHeader: true,
        hideCover: true,
        width: "300px" // height='280px'

      })));
    }
  }]);

  return Twitter;
}(external_react_["Component"]);


// EXTERNAL MODULE: ./components/Blog/index.js + 1 modules
var Blog = __webpack_require__(9);

// EXTERNAL MODULE: external "react-instafeed"
var external_react_instafeed_ = __webpack_require__(12);
var external_react_instafeed_default = /*#__PURE__*/__webpack_require__.n(external_react_instafeed_);

// CONCATENATED MODULE: ./components/Instagram/template.js
/* harmony default export */ var template = (function () {
  return "<a href={{link}} target=\"_blank\" class=\"instafeed__item link\">\n    <div class=\"instafeed__item__background image\" style=\"background-image: url( 'https:{{image}}' );\"></div>\n</a>";
});
// EXTERNAL MODULE: ./components/Instagram/styles.scss
var styles = __webpack_require__(26);

// CONCATENATED MODULE: ./components/Instagram/index.js
function Instagram_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Instagram_typeof = function _typeof(obj) { return typeof obj; }; } else { Instagram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Instagram_typeof(obj); }

function Instagram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Instagram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Instagram_createClass(Constructor, protoProps, staticProps) { if (protoProps) Instagram_defineProperties(Constructor.prototype, protoProps); if (staticProps) Instagram_defineProperties(Constructor, staticProps); return Constructor; }

function Instagram_possibleConstructorReturn(self, call) { if (call && (Instagram_typeof(call) === "object" || typeof call === "function")) { return call; } return Instagram_assertThisInitialized(self); }

function Instagram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Instagram_getPrototypeOf(o) { Instagram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Instagram_getPrototypeOf(o); }

function Instagram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Instagram_setPrototypeOf(subClass, superClass); }

function Instagram_setPrototypeOf(o, p) { Instagram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Instagram_setPrototypeOf(o, p); }






var Instagram_Instagram =
/*#__PURE__*/
function (_Component) {
  Instagram_inherits(Instagram, _Component);

  function Instagram() {
    Instagram_classCallCheck(this, Instagram);

    return Instagram_possibleConstructorReturn(this, Instagram_getPrototypeOf(Instagram).apply(this, arguments));
  }

  Instagram_createClass(Instagram, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        id: "instagram-app",
        className: "instagram-wrap"
      }, external_react_default.a.createElement(external_react_instafeed_default.a, {
        limit: "2",
        ref: "instafeed",
        sortBy: "most-recent",
        target: "instagram-app",
        template: template(),
        userId: "8337366379",
        clientId: "52d1a9e8e66641d6922f82068017c921",
        accessToken: "8337366379.1677ed0.a5e1d0695eb649f1a386406b73ae1c70"
      }));
    }
  }]);

  return Instagram;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "b", function() { return components_Header; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "a", function() { return components_Footer; });
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "d", function() { return Layout["a" /* default */]; });
/* unused concated harmony import BlogPreview */
/* concated harmony reexport Social */__webpack_require__.d(__webpack_exports__, "e", function() { return Social; });
/* concated harmony reexport Twitter */__webpack_require__.d(__webpack_exports__, "f", function() { return Twitter_Twitter; });
/* unused concated harmony import Blog */
/* concated harmony reexport Instagram */__webpack_require__.d(__webpack_exports__, "c", function() { return Instagram_Instagram; });










/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_normalize_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);








var Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content;
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__[/* Header */ "b"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__[/* Footer */ "a"], null));
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var setImages = function setImages(previews) {
  return previews.map(function (el, i) {
    return _objectSpread({
      styles: {
        backgroundImage: "url('../../static/img/preview".concat(i, ".jpg')")
      }
    }, el);
  });
};

var BlogPreview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BlogPreview, _React$Component);

  function BlogPreview() {
    _classCallCheck(this, BlogPreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogPreview).apply(this, arguments));
  }

  _createClass(BlogPreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchPreviewPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var previews = this.props.previews ? setImages(this.props.previews) : {};

      var chunkedPreviews = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.chunk(previews, 2);

      var styles = {
        backgroundImage: 'url(' + '../../static/img/preview1.JPG' + ')'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog-content"
      }, chunkedPreviews.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniqueId(),
          className: "wrap"
        }, el.map(function (e, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniqueId(),
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/blog/posts/".concat(e._id)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "link"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img",
            style: e.styles
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "title-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/blog/posts/".concat(e._id)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "link"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
            className: "title"
          }, e.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "text"
          }, " ", e.tag)));
        }));
      }));
    }
  }]);

  return BlogPreview;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(2);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/Post/styles.scss
var styles = __webpack_require__(15);

// CONCATENATED MODULE: ./components/Post/index.js




var Post_testPost = function testPost(_ref) {
  var _id = _ref._id,
      title = _ref.title,
      text = _ref.text;
  return external_react_default.a.createElement("section", {
    className: "".concat(_id, "-post post-wrap")
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, title), external_react_default.a.createElement("p", {
    className: "text"
  }, text), external_react_default.a.createElement(link_default.a, {
    href: "/blog/posts/".concat(_id)
  }, external_react_default.a.createElement("a", null, "push")));
};

var Post_Post1 = function Post1() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Root angespielt"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/root1.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, "Ersteindruck von ROOT:"), external_react_default.a.createElement("p", {
    className: "text"
  }, "Diese Woche spielte ich in Duisburg zu viert (Fabian Selbach, Fabian und Chris von den Brettspiel Geeks) ROOT von Leder Games, welches von Andr\xE9 sehr gut erkl\xE4rte wurde! \uD83D\uDC4D"), external_react_default.a.createElement("p", {
    className: "text"
  }, "Ein sehr taktisches und Asymmetrisches Strategiespiel f\xFCr Kenner- und Vielspieler. Ein Kampf um Wald und Siegpunkte, was sehr h\xFCbsch aussah, aber auch gen\xFCgend Tiefe, interessante und Unterschiedliche Mechaniken beinhaltet!"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/root2.jpg')"
    },
    className: "img -post -left"
  }), "Root ist aber ein Spiel, was man definitiv mehrmals spielen sollte. Mindestens vier Mal, um so jede Rasse und dessen unterschiedlichen F\xE4higkeiten zu verstehen und somit im Spiel vorbereitet und richtig reagieren zu k\xF6nnen! Die Regeln sind grunds\xE4tzlich einfach, aber die jeweiligen Spezialf\xE4higkeiten, machen dass Spiel so komplex und dadurch ist der Einstieg recht Hoch! Sobald man aber einmal drin ist, spielt sich ROOT sehr gut und fl\xFCssig."), external_react_default.a.createElement("p", {
    className: "text"
  }, "Des Weiteren, muss man erw\xE4hnen, dass f\xFCr ROOT schon gute englisch Kenntnisse von N\xF6ten sind, da viele F\xE4higkeiten auf dem Spieler Tableau f\xFCr Fragezeichen sorgen k\xF6nnen. Dadurch das es Asymmetrisch gespielt wird und somit jeder Spieler seinen kompletten Zug absolviert, kann es leider zu Downtime\u2019s kommen!"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/root3.jpg')"
    },
    className: "img -post -right"
  }), "Interaktiv war es schon, obwohl man schon stark auf sich und seiner Strategie fokussiert ist. Liegt aber wahrscheinlich erst mal daran, dass man versucht das Spiel zu verstehen. Ich z.B. wusste nicht wie meine Gegner gewinnen k\xF6nnen und hab mich do It nur auf mich konzentriert! Ich w\xFCrde es immer mitspielen und bin froh das ich es durch Andr\xE9, vom Spieltreff Duisburg, jederzeit spielen kann!"), external_react_default.a.createElement("p", {
    className: "text"
  }, "I \u2764\uFE0F The Forest Rebels!"));
};
var Post_Post2 = function Post2() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Ersteindruck Civilization - A New Dawn"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/civilization1.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, "Wir haben das Neue ", external_react_default.a.createElement("b", null, "CIVILIZATION - A NEW DAWN"), " von Fantasy Flight Games zu dritt angespielt. Sieht wundersch\xF6n aus und spielt sich deutlich schneller und angenehmer als sein Vorg\xE4nger. Das beste war aber, dass man es zu dritt sehr gut spielen kann. Da jeder Spieler auf jeden aufpassen muss, wodurch kein Nachteil entsteht. Freu mich schon auf die n\xE4chsten Partien! \uD83D\uDE0A\uD83D\uDC4D"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/civilization2.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "PRO"), ": - nicht so langatmig wie die vorige Version - Spielmaterial Top - Gameplay Top - zu dritt gut Spielbar - wer am Anfang zur\xFCck liegt, kann noch    aufholen - variabler und nicht nur stur auf ein Weg zu verfolgen - variabelster Spielaufbau als der Vorg\xE4nger", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "CONTRA"), ": - W\xFCrfel beim Kampf am Anfang (Gl\xFCckskomponente) - Weltwunder unterschiedlich stark - manche Symbole etwas zu klein und dadurch nicht so gut ersichtlich"));
};
var Post_Post3 = function Post3() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Ersteindruck von Roll Player"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/roll1.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("b", null, "ROLL PLAYER"), ", welches auf deutsch bei Pegasus Spiele erscheint, konnte mich direkt in seinen Bann ziehen. Charaktere die man per W\xFCrfel erstellen muss, genial! Man merkt schnell, dass hier die Kennerspieler angesprochen werden sollen. Denn es gibt hier 3 Bereiche, die man beachten muss, um seine W\xFCrfel gewinnbringend zu platzieren. Dadurch ist es deutlich strategischer und anspruchsvoller als SAGRADA (Familienspiel)."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/roll2.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "PRO:"), "- tolles Gameplay - viele strategische M\xF6glichkeiten - thematisch gut umgesetzt - interessante Mechaniken - interaktiv", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "CONTRA:"), "- Gl\xFCcksfaktor"));
};
var Post_Post4 = function Post4() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement("h3", {
    className: "title"
  }, "Impressionen von RISING SUN"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/rising1.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, "In D\xFCsseldorf (Brettspielen D\xFCsseldorf - Erkl\xE4rvideos auf YouTube) spielte ich zu f\xFCnft RISING SUN von CMON / Asmodee Deutschland."), external_react_default.a.createElement("p", {
    className: "text"
  }, "Ich bin Oliver Palisch sehr dankbar, weil er dazu aufrief, in die Rolle der Clans im mystischen Japan der Feudalzeit zu schl\xFCpfen. Um seine Krieger in den Provinzen aufzustellen, die Ernte einzuholen und in den Krieg zu ziehen! Es geh\xF6rt immer noch zu meinen absoluten Lieblingsspielen. Auch wenn ich diesmal richtig schlecht war!"), external_react_default.a.createElement("p", {
    className: "text"
  }, "Durch die unterschiedlichen Klans, die strategischen M\xF6glichkeiten w\xE4hrend des Spiels, wie auch bei der Kampfphase und dem interessanten Diplomatie Aspekt, spielt sich jede Partie anders und unvorhersehbar."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/rising2.jpg')"
    },
    className: "img -post -left"
  }), "Die einzelnen Phasen im Spiel, spielen sich unterschiedlich, interessant und z\xFCgig, au\xDFer es sitzen zu viele Gr\xFCbler am Tisch! Ob Teezeremonie, wo die Spieler B\xFCndnisse untereinander schlie\xDFen. Die Politikphase, wo man eines der 5 Aktionen durchf\xFChrt (mehr oder wenig durch Zufall), inklusive dem verrechnen der Schrein-Boni, die man im Zug ber\xFCcksichtigen sollte. Die Kriegsphase, die sich f\xFCr mich noch taktischer, strategischer und interessanter spielt, als bei Cry Havoc (die schon sehr gut war)!"), external_react_default.a.createElement("p", {
    className: "text"
  }, "Es spricht dadurch Kenner wie auch Vielspieler gleicherma\xDFen an, aber auch Neueinsteiger kommen schnell zurecht und haben ihren Spa\xDF! Vom Spielmaterial und den wundersch\xF6nen Miniaturen, geh\xF6rt es f\xFCr mich zu dem besten, was der Brettspielmarkt zu bieten hat! Und ist somit jedes Mal aufs Neue ein Hochgenuss, auch wenn die gr\xF6\xDFten Monster, nicht unbedingt die st\xE4rksten sind!"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/rising3.jpg')"
    },
    className: "img -post -right"
  }), "Mit jeder Fraktion kann man gewinnen, wenn man wei\xDF wie man sie spielen muss. Was Oliver mit dem Gelben Klan (Bonsai), eindrucksvoll unter Beweis gestellt hat, die sich in meinen Augen, am schwierigsten spielt. Ich w\xFCrde jeden empfehlen, RISING SUN nur mit einer ungeraden Spieleranzahl zu spielen, da so der Diplomatie, wie auch der Verr\xE4ter Aspekt am besten zur Geltung kommt!"), external_react_default.a.createElement("p", {
    className: "text"
  }, "RISING SUN ist vor allem extrem interaktiv, spannend, wundersch\xF6n und niemals langweilig! F\xFCr mich ist Eric M. Lang ein Experte im Bereich Mehrheiten zu Erreichen und Gebiete zu erk\xE4mpfen. Was er mit Blood Rage, eines meiner anderen Lieblingsspiele, schon bestens unter Beweis stellen konnte! Ich w\xFCrde es immer mitspielen und bin froh das ich es damals bei Kickstarter komplett gebackt hatte. Wer es auf Deutsch spielen m\xF6chte, kann dank Asmodee auch in den Genuss kommen."), external_react_default.a.createElement("p", {
    className: "text"
  }, "Ich danke Oliver f\xFCr den Aufruf, dass Spiel zu spielen. Genauso wie unserer tollen, unterhaltsamen und sympathischen Spielgruppe, die das Spiel \xFCberhaupt so unterhaltsam gemacht hatte.!"));
};
// EXTERNAL MODULE: ./components/index.js + 6 modules
var components = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Blog/styles/index.scss
var Blog_styles = __webpack_require__(27);

// CONCATENATED MODULE: ./components/Blog/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var FormItem = external_antd_["Form"].Item;
var TextArea = external_antd_["Input"].TextArea;
var url = 'https://lit-island-20029.herokuapp.com/blog';

var Blog_FormBlog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormBlog, _React$Component);

  function FormBlog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormBlog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormBlog)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      id: ''
    };

    _this.onSubmit = function (e) {
      e.preventDefault();

      var values = _this.props.form.getFieldsValue();

      external_axios_default.a.post("".concat(url, "/new"), values);
    };

    _this.renderSinglePost = function () {
      var id = _this.props.router.query.id;
      var match = {
        '5bc5d0412376d54c29cfaadf': Post_Post1,
        '5bc11a25ba69710417eb8f01': Post_Post2,
        '5bc5cf7be0bcd84b492597c0': Post_Post3,
        '5bc5c04f91a7c73df8bfcd4e': Post_Post4
      };
      return match[id]();
    };

    _this.renderAllPosts = function () {
      return external_react_default.a.createElement("div", {
        className: "posts-wrap -all"
      }, external_react_default.a.createElement(Post_Post1, null), external_react_default.a.createElement(Post_Post2, null), external_react_default.a.createElement(Post_Post3, null), external_react_default.a.createElement(Post_Post4, null));
    };

    return _this;
  }

  _createClass(FormBlog, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return external_react_default.a.createElement(components["d" /* Layout */], null, external_react_default.a.createElement("div", {
        className: "blog-wrap"
      }, external_react_default.a.createElement("div", {
        className: "posts-wrap"
      }, this.props.router.query.id ? this.renderSinglePost() : this.renderAllPosts())));
    }
  }]);

  return FormBlog;
}(external_react_default.a.Component);

var Index = external_antd_["Form"].create()(Blog_FormBlog);
/* harmony default export */ var Blog = __webpack_exports__["a"] = (Index);

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-instafeed");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "static-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    title: "title -main"
  }, "Datenschutzerkl\xE4rung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-intro"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Diese Datenschutzerkl\xE4rung kl\xE4rt Sie \xFCber die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz \u201EDaten\u201C) im Rahmen der Erbringung unserer Leistungen sowie innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepr\xE4senzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als \u201EOnlineangebot\u201C). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. \u201EVerarbeitung\u201C oder \u201EVerantwortlicher\u201C verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-controller"
  }, "Verantwortlicher"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "tsmcontroller"
  }, "Tobias Franken / Gaming Wolves Online Magazin", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "M\xFCnsterstr. 29", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "40477, D\xFCsseldorf, Deutschland", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "E-Mailadresse: info@gamingwolves.net", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Gesch\xE4ftsf\xFChrer/ Inhaber: Tobias Franken", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Link zum Impressum: http://....de")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-datatype"
  }, "Arten der verarbeiteten Daten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "- Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Kontaktdaten (z.B., E-Mail, Telefonnummern).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Meta-/Kommunikationsdaten (z.B., Ger\xE4te-Informationen, IP-Adressen)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-datasubjects"
  }, "Kategorien betroffener Personen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als \u201ENutzer\u201C).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-purpose"
  }, "Zweck der Verarbeitung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "- Zurverf\xFCgungstellung des Onlineangebotes, seiner Funktionen und  Inhalte.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Sicherheitsma\xDFnahmen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Reichweitenmessung/Marketing", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "tsmcom"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-terms"
  }, "Verwendete Begrifflichkeiten "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u201EPersonenbezogene Daten\u201C sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person (im Folgenden \u201Ebetroffene Person\u201C) beziehen; als identifizierbar wird eine nat\xFCrliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identit\xE4t dieser nat\xFCrlichen Person sind.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u201EVerarbeitung\u201C ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgef\xFChrte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u201EPseudonymisierung\u201C die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zus\xE4tzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden k\xF6nnen, sofern diese zus\xE4tzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Ma\xDFnahmen unterliegen, die gew\xE4hrleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren nat\xFCrlichen Person zugewiesen werden.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u201EProfiling\u201C jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte pers\xF6nliche Aspekte, die sich auf eine nat\xFCrliche Person beziehen, zu bewerten, insbesondere um Aspekte bez\xFCglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, pers\xF6nliche Vorlieben, Interessen, Zuverl\xE4ssigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser nat\xFCrlichen Person zu analysieren oder vorherzusagen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Als \u201EVerantwortlicher\u201C wird die nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen \xFCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\u201EAuftragsverarbeiter\u201C eine nat\xFCrliche oder juristische Person, Beh\xF6rde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-legalbasis"
  }, "Ma\xDFgebliche Rechtsgrundlagen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nach Ma\xDFgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit.  F\xFCr Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die Rechtsgrundlage in der Datenschutzerkl\xE4rung nicht genannt wird, Folgendes: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Rechtsgrundlage f\xFCr die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Rechtsgrundlage f\xFCr die Verarbeitung zur Erf\xFCllung unserer Leistungen und Durchf\xFChrung vertraglicher Ma\xDFnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Rechtsgrundlage f\xFCr die Verarbeitung zur Erf\xFCllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "F\xFCr den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen nat\xFCrlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Rechtsgrundlage f\xFCr die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im \xF6ffentlichen Interesse liegt oder in Aus\xFCbung \xF6ffentlicher Gewalt erfolgt, die dem Verantwortlichen \xFCbertragen wurde ist Art. 6 Abs. 1 lit. e DSGVO. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Rechtsgrundlage f\xFCr die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie ehoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs. 4 DSGVO. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9 Abs. 2 DSGVO. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-securitymeasures"
  }, "Sicherheitsma\xDFnahmen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Wir treffen nach Ma\xDFgabe der gesetzlichen Vorgabenunter Ber\xFCcksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umst\xE4nde und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos f\xFCr die Rechte und Freiheiten nat\xFCrlicher Personen, geeignete technische und organisatorische Ma\xDFnahmen, um ein dem Risiko angemessenes Schutzniveau zu gew\xE4hrleisten.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Zu den Ma\xDFnahmen geh\xF6ren insbesondere die Sicherung der Vertraulichkeit, Integrit\xE4t und Verf\xFCgbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verf\xFCgbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, L\xF6schung von Daten und Reaktion auf Gef\xE4hrdung der Daten gew\xE4hrleisten. Ferner ber\xFCcksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-coprocessing"
  }, "Zusammenarbeit mit Auftragsverarbeitern, gemeinsam Verantwortlichen und Dritten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sofern wir im Rahmen unserer Verarbeitung Daten gegen\xFCber anderen Personen und Unternehmen (Auftragsverarbeitern, gemeinsam Verantwortlichen oder Dritten) offenbaren, sie an diese \xFCbermitteln oder ihnen sonst Zugriff auf die Daten gew\xE4hren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine \xDCbermittlung der Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserf\xFCllung erforderlich ist), Nutzer eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, \xFCbermitteln oder ihnen sonst den Zugriff gew\xE4hren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und dar\xFCberhinausgehend auf einer den gesetzlichen Vorgaben entsprechenden Grundlage. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-thirdparty"
  }, "\xDCbermittlungen in Drittl\xE4nder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sofern wir Daten in einem Drittland (d.h. au\xDFerhalb der Europ\xE4ischen Union (EU), des Europ\xE4ischen Wirtschaftsraums (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. \xDCbermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erf\xFCllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der gesetzlichen Voraussetzungen. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. f\xFCr die USA durch das \u201EPrivacy Shield\u201C) oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-rightssubject"
  }, "Rechte der betroffenen Personen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sie haben das Recht, eine Best\xE4tigung dar\xFCber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft \xFCber diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollst\xE4ndigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sie haben nach Ma\xDFgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverz\xFCglich gel\xF6scht werden, bzw. alternativ nach Ma\xDFgabe der gesetzlichen Vorgaben eine Einschr\xE4nkung der Verarbeitung der Daten zu verlangen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Ma\xDFgabe der gesetzlichen Vorgaben zu erhalten und deren \xDCbermittlung an andere Verantwortliche zu fordern. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sie haben ferner nach Ma\xDFgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zust\xE4ndigen Aufsichtsbeh\xF6rde einzureichen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-revokeconsent"
  }, "Widerrufsrecht"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sie haben das Recht, erteilte Einwilligungen mit Wirkung f\xFCr die Zukunft zu widerrufen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-object"
  }, "Widerspruchsrecht"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Sie k\xF6nnen der k\xFCnftigen Verarbeitung der Sie betreffenden Daten nach Ma\xDFgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung f\xFCr Zwecke der Direktwerbung erfolgen.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-cookies"
  }, "Cookies und Widerspruchsrecht bei Direktwerbung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Als \u201ECookies\u201C werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies k\xF6nnen unterschiedliche Angaben gespeichert werden. Ein Cookie dient prim\xE4r dazu, die Angaben zu einem Nutzer (bzw. dem Ger\xE4t auf dem das Cookie gespeichert ist) w\xE4hrend oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als tempor\xE4re Cookies, bzw. \u201ESession-Cookies\u201C oder \u201Etransiente Cookies\u201C, werden Cookies bezeichnet, die gel\xF6scht werden, nachdem ein Nutzer ein Onlineangebot verl\xE4sst und seinen Browser schlie\xDFt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als \u201Epermanent\u201C oder \u201Epersistent\u201C werden Cookies bezeichnet, die auch nach dem Schlie\xDFen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso k\xF6nnen in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die f\xFCr Reichweitenmessung oder Marketingzwecke verwendet werden. Als \u201EThird-Party-Cookie\u201C werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von \u201EFirst-Party Cookies\u201C).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wir k\xF6nnen tempor\xE4re und permanente Cookies einsetzen und kl\xE4ren hier\xFCber im Rahmen unserer Datenschutzerkl\xE4rung auf.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Falls die Nutzer nicht m\xF6chten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies k\xF6nnen in den Systemeinstellungen des Browsers gel\xF6scht werden. Der Ausschluss von Cookies kann zu Funktionseinschr\xE4nkungen dieses Onlineangebotes f\xFChren.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, \xFCber die US-amerikanische Seite ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.aboutads.info/choices/"
  }, "http://www.aboutads.info/choices/"), " oder die EU-Seite ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.youronlinechoices.com/"
  }, "http://www.youronlinechoices.com/"), " erkl\xE4rt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden k\xF6nnen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-erasure"
  }, "L\xF6schung von Daten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Die von uns verarbeiteten Daten werden nach Ma\xDFgabe der gesetzlichen Vorgaben gel\xF6scht oder in ihrer Verarbeitung eingeschr\xE4nkt. Sofern nicht im Rahmen dieser Datenschutzerkl\xE4rung ausdr\xFCcklich angegeben, werden die bei uns gespeicherten Daten gel\xF6scht, sobald sie f\xFCr ihre Zweckbestimmung nicht mehr erforderlich sind und der L\xF6schung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Sofern die Daten nicht gel\xF6scht werden, weil sie f\xFCr andere und gesetzlich zul\xE4ssige Zwecke erforderlich sind, wird deren Verarbeitung eingeschr\xE4nkt. D.h. die Daten werden gesperrt und nicht f\xFCr andere Zwecke verarbeitet. Das gilt z.B. f\xFCr Daten, die aus handels- oder steuerrechtlichen Gr\xFCnden aufbewahrt werden m\xFCssen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-general-changes"
  }, "\xC4nderungen und Aktualisierungen der Datenschutzerkl\xE4rung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Wir bitten Sie sich regelm\xE4\xDFig \xFCber den Inhalt unserer Datenschutzerkl\xE4rung zu informieren. Wir passen die Datenschutzerkl\xE4rung an, sobald die \xC4nderungen der von uns durchgef\xFChrten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die \xC4nderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-affiliate-amazon"
  }, "Amazon-Partnerprogramm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir sind auf Grundlage unserer berechtigten Interessen (d.h. Interesse am wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums f\xFCr Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann (sog. Affiliate-System). D.h. als Amazon-Partner verdienen wir an qualifizierten K\xE4ufen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Amazon setzt Cookies ein, um die Herkunft der Bestellungen nachvollziehen zu k\xF6nnen. Unter anderem kann Amazon erkennen, dass Sie den Partnerlink auf dieser Website geklickt und anschlie\xDFend ein Produkt bei Amazon erworben haben.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Weitere Informationen zur Datennutzung durch Amazon und Widerspruchsm\xF6glichkeiten erhalten Sie in der Datenschutzerkl\xE4rung des Unternehmens: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
  }, "https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Hinweis: Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner verbundenen Unternehmen.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-contact"
  }, "Kontaktaufnahme"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen),  Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet.. Die Angaben der Nutzer k\xF6nnen in einem Customer-Relationship-Management System (\"CRM System\") oder vergleichbarer Anfragenorganisation gespeichert werden.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wir l\xF6schen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir \xFCberpr\xFCfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-hostingprovider"
  }, "Hosting und E-Mail-Versand"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverf\xFCgungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazit\xE4t, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverf\xFCgungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-ga-googleanalytics"
  }, "Google Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC (\u201EGoogle\u201C) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen \xFCber Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA \xFCbertragen und dort gespeichert.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europ\xE4ische Datenschutzrecht einzuhalten (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"), ").", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports \xFCber die Aktivit\xE4ten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegen\xFCber zu erbringen. Dabei k\xF6nnen aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europ\xE4ischen Union oder in anderen Vertragsstaaten des Abkommens \xFCber den Europ\xE4ischen Wirtschaftsraum gek\xFCrzt. Nur in Ausnahmef\xE4llen wird die volle IP-Adresse an einen Server von Google in den USA \xFCbertragen und dort gek\xFCrzt.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die von dem Browser des Nutzers \xFCbermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengef\xFChrt. Die Nutzer k\xF6nnen die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer k\xF6nnen dar\xFCber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verf\xFCgbare Browser-Plugin herunterladen und installieren:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://tools.google.com/dlpage/gaoptout?hl=de"
  }, "http://tools.google.com/dlpage/gaoptout?hl=de"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsm\xF6glichkeiten, erfahren Sie in der Datenschutzerkl\xE4rung von Google (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "https://policies.google.com/privacy"), ") sowie in den Einstellungen f\xFCr die Darstellung von Werbeeinblendungen durch Google ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://adssettings.google.com/authenticated"
  }, "(https://adssettings.google.com/authenticated"), ").", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gel\xF6scht oder anonymisiert.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-socialmedia"
  }, "Onlinepr\xE4senzen in sozialen Medien"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir unterhalten Onlinepr\xE4senzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort \xFCber unsere Leistungen informieren zu k\xF6nnen.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wir weisen darauf hin, dass dabei Daten der Nutzer au\xDFerhalb des Raumes der Europ\xE4ischen Union verarbeitet werden k\xF6nnen. Hierdurch k\xF6nnen sich f\xFCr die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden k\xF6nnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Ferner werden die Daten der Nutzer im Regelfall f\xFCr Marktforschungs- und Werbezwecke verarbeitet. So k\xF6nnen z.B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile k\xF6nnen wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und au\xDFerhalb der Plattformen zu schalten, die mutma\xDFlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner k\xF6nnen in den Nutzungsprofilen auch Daten unabh\xE4ngig der von den Nutzern verwendeten Ger\xE4te gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern der Plattformen um eine Einwilligung in die vorbeschriebene Datenverarbeitung gebeten werden, ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "F\xFCr eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsm\xF6glichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden k\xF6nnen. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und k\xF6nnen direkt entsprechende Ma\xDFnahmen ergreifen und Ausk\xFCnfte geben. Sollten Sie dennoch Hilfe ben\xF6tigen, dann k\xF6nnen Sie sich an uns wenden.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) auf Grundlage einer ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/legal/terms/page_controller_addendum"
  }, "Vereinbarung \xFCber gemeinsame Verarbeitung personenbezogener Daten"), " - Datenschutzerkl\xE4rung: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/about/privacy/"
  }, "https://www.facebook.com/about/privacy/"), ", speziell f\xFCr Seiten: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/legal/terms/information_about_page_insights_data"
  }, "https://www.facebook.com/legal/terms/information_about_page_insights_data"), " , Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/settings?tab=ads"
  }, "https://www.facebook.com/settings?tab=ads"), " und ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.youronlinechoices.com"
  }, "http://www.youronlinechoices.com"), ", Privacy Shield: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Google/ YouTube (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) \u2013 Datenschutzerkl\xE4rung: \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "https://policies.google.com/privacy"), ", Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://adssettings.google.com/authenticated"
  }, "https://adssettings.google.com/authenticated"), ", Privacy Shield: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) \u2013 Datenschutzerkl\xE4rung/ Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://instagram.com/about/legal/privacy/"
  }, "http://instagram.com/about/legal/privacy/"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) - Datenschutzerkl\xE4rung: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://twitter.com/de/privacy"
  }, "https://twitter.com/de/privacy"), ", Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://twitter.com/personalization"
  }, "https://twitter.com/personalization"), ", Privacy Shield: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA) \u2013 Datenschutzerkl\xE4rung/ Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://about.pinterest.com/de/privacy-policy"
  }, "https://about.pinterest.com/de/privacy-policy"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) - Datenschutzerkl\xE4rung ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.linkedin.com/legal/privacy-policy"
  }, "https://www.linkedin.com/legal/privacy-policy"), " , Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
  }, "https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"), ", Privacy Shield:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Xing (XING AG, Dammtorstra\xDFe 29-32, 20354 Hamburg, Deutschland) - Datenschutzerkl\xE4rung/ Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://privacy.xing.com/de/datenschutzerklaerung"
  }, "https://privacy.xing.com/de/datenschutzerklaerung"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United Kingdom) - Datenschutzerkl\xE4rung/ Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://wakelet.com/privacy.html"
  }, "https://wakelet.com/privacy.html"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin, Deutschland) - Datenschutzerkl\xE4rung/ Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://soundcloud.com/pages/privacy"
  }, "https://soundcloud.com/pages/privacy"), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-thirdparty-einleitung"
  }, "Einbindung von Diensten und Inhalten Dritter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als \u201CInhalte\u201D). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden k\xF6nnten. Die IP-Adresse ist damit f\xFCr die Darstellung dieser Inhalte erforderlich. Wir bem\xFChen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter k\xF6nnen ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als \"Web Beacons\" bezeichnet) f\xFCr statistische oder Marketingzwecke verwenden. Durch die \"Pixel-Tags\" k\xF6nnen Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen k\xF6nnen ferner in Cookies auf dem Ger\xE4t der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-thirdparty-vimeo"
  }, "Vimeo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir k\xF6nnen die Videos der Plattform \u201CVimeo\u201D des Anbieters Vimeo Inc., Attention: Legal Department, 555 West 18th Street New York, New York 10011, USA, einbinden. Datenschutzerkl\xE4rung: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://vimeo.com/privacy"
  }, "https://vimeo.com/privacy"), ".  Wir weisen darauf hin, dass Vimeo Google Analytics einsetzen kann und verweisen hierzu auf die Datenschutzerkl\xE4rung (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://policies.google.com/privacy"
  }, "https://policies.google.com/privacy"), ") sowie Opt-Out-M\xF6glichkeiten f\xFCr Google-Analytics (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://tools.google.com/dlpage/gaoptout?hl=de"
  }, "http://tools.google.com/dlpage/gaoptout?hl=de"), ") oder die Einstellungen von Google f\xFCr die Datennutzung zu Marketingzwecken (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://adssettings.google.com/"
  }, "https://adssettings.google.com/"), ").")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-thirdparty-youtube"
  }, "Youtube"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir binden die Videos der Plattform \u201CYouTube\u201D des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerkl\xE4rung: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.google.com/policies/privacy/"
  }, "https://www.google.com/policies/privacy/"), ", Opt-Out: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://adssettings.google.com/authenticated"
  }, "https://adssettings.google.com/authenticated"), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-facebook-plugin"
  }, "Verwendung von Facebook Social Plugins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Social Plugins (\"Plugins\") des sozialen Netzwerkes facebook.com, welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland betrieben wird (\"Facebook\"). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Hierzu k\xF6nnen z.B. Inhalte wie Bilder, Videos oder Texte und Schaltfl\xE4chen geh\xF6ren, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Facebook teilen k\xF6nnen. Die Liste und das Aussehen der Facebook Social Plugins kann hier eingesehen werden:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://developers.facebook.com/docs/plugins/"
  }, "https://developers.facebook.com/docs/plugins/"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europ\xE4ische Datenschutzrecht einzuhalten (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
  }, "https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"), ").", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die ein solches Plugin enth\xE4lt, baut sein Ger\xE4t eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an das Ger\xE4t des Nutzers \xFCbermittelt und von diesem in das Onlineangebot eingebunden. Dabei k\xF6nnen aus den verarbeiteten Daten Nutzungsprofile der Nutzer erstellt werden. Wir haben daher keinen Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informiert die Nutzer daher entsprechend unserem Kenntnisstand.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Durch die Einbindung der Plugins erh\xE4lt Facebook die Information, dass ein Nutzer die entsprechende Seite des Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem Facebook-Konto zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button bet\xE4tigen oder einen Kommentar abgeben, wird die entsprechende Information von Ihrem Ger\xE4t direkt an Facebook \xFCbermittelt und dort gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist, besteht trotzdem die M\xF6glichkeit, dass Facebook seine IP-Adresse in Erfahrung bringt und speichert. Laut Facebook wird in Deutschland nur eine anonymisierte IP-Adresse gespeichert.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie die diesbez\xFCglichen Rechte und Einstellungsm\xF6glichkeiten zum Schutz der Privatsph\xE4re der Nutzer, k\xF6nnen diese den Datenschutzhinweisen von Facebook entnehmen:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/about/privacy/"
  }, "https://www.facebook.com/about/privacy/"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Wenn ein Nutzer Facebookmitglied ist und nicht m\xF6chte, dass Facebook \xFCber dieses Onlineangebot Daten \xFCber ihn sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verkn\xFCpft, muss er sich vor der Nutzung unseres Onlineangebotes bei Facebook ausloggen und seine Cookies l\xF6schen. Weitere Einstellungen und Widerspr\xFCche zur Nutzung von Daten f\xFCr Werbezwecke, sind innerhalb der Facebook-Profileinstellungen m\xF6glich:\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.facebook.com/settings?tab=ads"
  }, "https://www.facebook.com/settings?tab=ads"), " \xA0oder \xFCber die US-amerikanische Seite\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.aboutads.info/choices/"
  }, "http://www.aboutads.info/choices/"), " \xA0oder die EU-Seite\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.youronlinechoices.com/"
  }, "http://www.youronlinechoices.com/"), ". Die Einstellungen erfolgen plattformunabh\xE4ngig, d.h. sie werden f\xFCr alle Ger\xE4te, wie Desktopcomputer oder mobile Ger\xE4te \xFCbernommen.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title -sub",
    id: "dsg-thirdparty-instagram"
  }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "ts-muster-content"
  }, "Innerhalb unseres Onlineangebotes k\xF6nnen Funktionen und Inhalte des Dienstes Instagram, angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, eingebunden werden. Hierzu k\xF6nnen z.B. Inhalte wie Bilder, Videos oder Texte und Schaltfl\xE4chen geh\xF6ren, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Instagram teilen k\xF6nnen. Sofern die Nutzer Mitglieder der Plattform Instagram sind, kann Instagram den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Datenschutzerkl\xE4rung von Instagram: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://instagram.com/about/legal/privacy/"
  }, "http://instagram.com/about/legal/privacy/"), ".  ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://datenschutz-generator.de",
    class: "dsg1-6",
    rel: "nofollow",
    target: "_blank"
  }, "Erstellt mit Datenschutz-Generator.de von RA Dr. Thomas Schwenke")));
});

/***/ })
/******/ ]);