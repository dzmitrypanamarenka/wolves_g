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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
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
    className: "title -main"
  }, "GAMING WOLVES Online-Magazin"), "Tobias Franken,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Mu\u0308nsterstr. 29, 40477 Du\u0308sseldorf Deutschland", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "email: info@gamingwolves.net"));
});

/***/ })
/******/ ]);