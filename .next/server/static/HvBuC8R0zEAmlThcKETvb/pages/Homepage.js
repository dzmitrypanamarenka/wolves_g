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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
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
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
      var route = this.props.router.route;

      if (route === '/Blog') {
        return this.props.fetchPreviewPosts('all');
      }

      this.props.fetchPreviewPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var previews = this.props.previews ? setImages(this.props.previews) : {};

      var chunkedPreviews = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.chunk(previews, 2);

      var styles = {
        backgroundImage: 'url(' + '../../static/img/preview1.JPG' + ')'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog-content"
      }, chunkedPreviews.map(function (el) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniqueId(),
          className: "wrap"
        }, el.map(function (e, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.uniqueId(),
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/blog/posts/".concat(e._id)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: "link"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "img",
            style: e.styles
          }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "title-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(15);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Header/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Header = external_antd_["Layout"].Header;

var Header_HeaderNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderNav, _React$Component);

  function HeaderNav() {
    _classCallCheck(this, HeaderNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderNav).apply(this, arguments));
  }

  _createClass(HeaderNav, [{
    key: "render",
    value: function render() {
      var route = this.props.router.route;
      var defaultCN = 'title';
      var defaultMobileCN = 'menu-item';
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
        className: "".concat(defaultCN, " ").concat(route === '/Homepage' ? '-active' : '')
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
        className: "".concat(defaultCN, " ").concat(route === '/Blog' ? '-active' : '')
      }, "BLOG"))), external_react_default.a.createElement("li", {
        className: "item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", {
        className: "".concat(defaultCN, " ").concat(route === '/UberUns' ? '-active' : '')
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
        className: "".concat(defaultCN, " ").concat(route === '/Donate' ? '-active' : '')
      }, "UNTERST\xDCTZEN")))), external_react_default.a.createElement(external_react_burger_menu_["slide"], {
        right: true,
        className: "mobile-menu"
      }, external_react_default.a.createElement("a", {
        id: "home",
        className: "".concat(defaultMobileCN, " ").concat(route === '/Homepage' ? '-active' : ''),
        href: "/"
      }, "STARTSEITE"), external_react_default.a.createElement("a", {
        id: "magazine",
        className: "menu-item",
        href: "https://magazine.gamingwolves.net"
      }, "ONLINE-MAGAZIN"), external_react_default.a.createElement("a", {
        id: "home",
        className: "".concat(defaultMobileCN, " ").concat(route === '/Blog' ? '-active' : ''),
        href: "/"
      }, "BLOG"), external_react_default.a.createElement("a", {
        id: "home",
        className: "".concat(defaultMobileCN, " ").concat(route === '/UberUns' ? '-active' : ''),
        href: "/"
      }, "\xDCBER UNS"), external_react_default.a.createElement("a", {
        id: "shop",
        className: "menu-item",
        href: "https://shop.spreadshirt.de/gaming-wolves/"
      }, "SHOP"), external_react_default.a.createElement("a", {
        id: "home",
        className: "".concat(defaultMobileCN, " ").concat(route === '/Donate' ? '-active' : ''),
        href: "/"
      }, "UNTERST\xDCTZEN")))));
    }
  }]);

  return HeaderNav;
}(external_react_default.a.Component);

/* harmony default export */ var components_Header = (Object(router_["withRouter"])(Header_HeaderNav));
// CONCATENATED MODULE: ./components/Footer/index.js
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }





var Footer = external_antd_["Layout"].Footer;

var Footer_PageFooter =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(PageFooter, _React$Component);

  function PageFooter() {
    Footer_classCallCheck(this, PageFooter);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(PageFooter).apply(this, arguments));
  }

  Footer_createClass(PageFooter, [{
    key: "render",
    value: function render() {
      var route = this.props.router.route;
      var defaultCN = 'title';
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
      }, "GAMING WOLVES ist ein neues online Gaming Magazin \xFCber Brett-, Karten- und Digital-Spiele. Das Magazin ist kostenlos und erscheint alle drei Monate. Die Idee von GAMING WOLVES ist zum einen, Spiele interaktiv und anders zu pr\xE4sentieren. Zum anderen wollen wir die Community und die unterschiedlichen Plattformen wie YouTube, Blogs und Podcasts einbinden, sodass man sich vom Spiel ein besseres Bild machen kann und gleichzeitig neue Kan\xE4le entdeckt. Wir w\xFCnschen euch viel Spa\xDF beim lesen!")), external_react_default.a.createElement("div", {
        className: "legal"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "RECHTLICHES"), external_react_default.a.createElement(link_default.a, {
        href: "/contact"
      }, external_react_default.a.createElement("a", {
        className: "link"
      }, external_react_default.a.createElement("h3", {
        className: "".concat(defaultCN, " ").concat(route === '/Contact' ? '-active' : '')
      }, "Kontakt"))), external_react_default.a.createElement(link_default.a, {
        href: "/impressum"
      }, external_react_default.a.createElement("a", {
        className: "link -impressum"
      }, external_react_default.a.createElement("h3", {
        className: "".concat(defaultCN, " ").concat(route === '/Impressum' ? '-active' : '')
      }, "Impressum"))), external_react_default.a.createElement(link_default.a, {
        href: "/legal"
      }, external_react_default.a.createElement("a", {
        className: "link"
      }, external_react_default.a.createElement("h3", {
        className: "".concat(defaultCN, " ").concat(route === '/Legal' ? '-active' : '')
      }, "Datenschutzerkl\xE4rung"))))));
    }
  }]);

  return PageFooter;
}(external_react_default.a.Component);

/* harmony default export */ var components_Footer = (Object(router_["withRouter"])(Footer_PageFooter));
// EXTERNAL MODULE: ./components/Layout/index.js
var Layout = __webpack_require__(10);

// EXTERNAL MODULE: ./components/BlogPreview/index.js
var BlogPreview = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Social/styles/style.scss
var style = __webpack_require__(25);

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
var external_react_facebook_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Twitter/styles/style.scss
var styles_style = __webpack_require__(26);

// CONCATENATED MODULE: ./components/Twitter/index.js
function Twitter_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Twitter_typeof = function _typeof(obj) { return typeof obj; }; } else { Twitter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Twitter_typeof(obj); }

function Twitter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Twitter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Twitter_createClass(Constructor, protoProps, staticProps) { if (protoProps) Twitter_defineProperties(Constructor.prototype, protoProps); if (staticProps) Twitter_defineProperties(Constructor, staticProps); return Constructor; }

function Twitter_possibleConstructorReturn(self, call) { if (call && (Twitter_typeof(call) === "object" || typeof call === "function")) { return call; } return Twitter_assertThisInitialized(self); }

function Twitter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Twitter_getPrototypeOf(o) { Twitter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Twitter_getPrototypeOf(o); }

function Twitter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Twitter_setPrototypeOf(subClass, superClass); }

function Twitter_setPrototypeOf(o, p) { Twitter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Twitter_setPrototypeOf(o, p); }

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
  Twitter_inherits(Twitter, _Component);

  function Twitter() {
    Twitter_classCallCheck(this, Twitter);

    return Twitter_possibleConstructorReturn(this, Twitter_getPrototypeOf(Twitter).apply(this, arguments));
  }

  Twitter_createClass(Twitter, [{
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


// EXTERNAL MODULE: ./components/Post/styles.scss
var styles = __webpack_require__(27);

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
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "left",
    className: "icon"
  }), external_react_default.a.createElement("span", {
    className: "title"
  }, "Alle Artikel"))), external_react_default.a.createElement("h3", {
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
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "left",
    className: "icon"
  }), external_react_default.a.createElement("span", {
    className: "title"
  }, "Alle Artikel"))), external_react_default.a.createElement("h3", {
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
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "left",
    className: "icon"
  }), external_react_default.a.createElement("span", {
    className: "title"
  }, "Alle Artikel"))), external_react_default.a.createElement("h3", {
    className: "title"
  }, "Gloomhaven"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/roll1.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, "Gestern das erste ", external_react_default.a.createElement("b", null, "Mal Gloomhaven"), " gespielt, hat richtig Bock gemacht! I \u2764\uFE0Fit! Ein Kumpel und ich, sind neu und mitten im Abenteuer eingestiegen, was gar kein Problem gemacht hat, sehr nice! \uD83D\uDC4D"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/roll2.jpg')"
    },
    className: "img -post -left"
  }), "Mich hat es direkt in seinem Bann gezogen. Vor allem die Art und Weise, wie man sein pers\xF6nliches Kartendeck spielt. Denn man muss jedes Mal entscheiden, ob man die Aktion (auf den Karten - 2 Optionen) verwendet, die anschlie\xDFend auf dem Ablagestapel gelegt wird oder ein m\xE4chtigere Aktion, die man dann aber ganz aus diesem Spiel verliert! Mega! Dazu zieht man vor jedem Abenteuer 2 Karten, wo man sich eine aussucht, die eine Aufgabe bereith\xE4lt. Wenn man diese erfolgreich absolviert bekommt man am Ende einen Bonus!"), external_react_default.a.createElement("p", {
    className: "text"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/roll3.jpg')"
    },
    className: "img -post -right"
  }), "Das f\xFChrte zu lustigen Reaktionen meiner Mitspieler und Gesichtsausdr\xFCcke! Denn ich spiele einen Supporter und alle dachten sich, was steht der in vorderster Front!?! Dann hab ich auch noch die Karte ausgespielt, mit der niedrigsten Zahl, somit h\xF6chste Initiative und habe angegriffen! Boom \uD83D\uDCA5 ! Wham ! Bam! Shazzam! Einen Elite get\xF6tet und 2 schwer verwundet und bewegungsf\xE4hig gemacht! Die anschlie\xDFenden Gesichter meiner Mitspieler, waren Gold wert! Hab mein Ziel erf\xFCllt (Zielkarte) Was besagte, t\xF6te den ersten Gegner!"), external_react_default.a.createElement("p", {
    className: "text"
  }, "Also, freu mich aufs n\xE4chste Spiel und kann jeden empfehlen, mal eine Partie zu testen und zu spielen, es lohnt sich! F\xFCr mich wird es dem Hype und der Platzierung bei BBG gerecht!"));
};
var Post_Post4 = function Post4() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "left",
    className: "icon"
  }), external_react_default.a.createElement("span", {
    className: "title"
  }, "Alle Artikel"))), external_react_default.a.createElement("h3", {
    className: "title"
  }, external_react_default.a.createElement("span", null, "Impressionen von RISING SUN")), external_react_default.a.createElement("div", {
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
var Post_Post5 = function Post5() {
  return external_react_default.a.createElement("section", {
    className: "post-wrap"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/blog"
  }, external_react_default.a.createElement("a", {
    className: "link"
  }, external_react_default.a.createElement(external_antd_["Icon"], {
    type: "left",
    className: "icon"
  }), external_react_default.a.createElement("span", {
    className: "title"
  }, "Alle Artikel"))), external_react_default.a.createElement("h3", {
    className: "title"
  }, "Highlights 2018"), external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url('../../static/img/preview0.jpg')"
    },
    className: "img"
  }), external_react_default.a.createElement("p", {
    className: "text"
  }, "Heute stellen wir Euch unsere Highlights 2018, im Bereich Brett- und Kartenspiele vor. Es spiegelt nat\xFCrlich unsere Subjektive Meinung wieder, welche Spiele wie oft gespielt wurden."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high1.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "1. Rising Sun (Area-Control)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " CMON / Asmodee", external_react_default.a.createElement("br", null), "F\xFCr mich ist ", external_react_default.a.createElement("b", null, "Rising Sun"), " das Highlight des Jahres! Eric Lang hat es nach Blood Rage wieder geschafft, ein Spiel zu kreieren, was optisch, von der Mechanik und dem Spa\xDF-Faktor genau meinen Nerv getroffen hat. Die Figuren sind wieder eine Meisterleistung und sind das Ma\xDF aller Dinge. Die Spielmechanik brauch sich dahinter aber nicht verstecken. ", external_react_default.a.createElement("b", null, "Rising Sun"), " kombiniert eindrucksvoll ein strategisches Area-Control-Spiel, mit einem interaktiven Verhandlungs-Mechanismus und ein interessantes wie auch spannendes Kampfsystem, dass sogar noch ein wenig besser ist als das von Cry Havoc. Dazu gibt es unterschiedliche Clans die sich alle unterschiedlich spielen und in meinen Augen sehr gut ausbalanciert sind."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high2.jpg')"
    },
    className: "img -post -right"
  }), external_react_default.a.createElement("b", null, "2. KeyForge"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Fantasy Flight Games / Asmodee", external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "KeyForge"), " ist f\xFCr mich das Kartenspiel-Highlight des Jahres 2018 und endlich eine Revolution in diesem Genre! Richard Garfield hat nach Magic The Gathering wieder einen Meilenstein kreiert. ", external_react_default.a.createElement("b", null, "KeyForge"), " in Kombination mit Unique Games ist f\xFCr alle Typen von Spielern geeignet und spricht dadurch auch alle gleicherma\xDFen an. Damit wurde was geschaffen, was ich f\xFCr nicht m\xF6glich gehalten habe. Es werden n\xE4mlich Interessierte, Anf\xE4nger, Gelegenheits-, Viel- und Turnierspieler abgeholt. Vor allem auch die Spieler, die dem TCG und LCG abgeschworen haben, da sie es leid waren, so viel Zeit und Geld zu investieren. Durch die Unique Decks gibt es keinen Nachbau und die immer gleichen Kartendecks, gegen die man spielt. So muss man selbstst\xE4ndig das Spiel erkunden, erlernen und meistern. ", external_react_default.a.createElement("b", null, "KeyForge"), " macht wirklich mal was anders, geht ganz neue Wege und ist keine billige Kopie. Diese neuen Wege, das Selbstentscheiden ob ich nach Bedarf ein neues Deck kaufen m\xF6chte und nicht nach irgendeinem Zyklus finde ich sehr beruhigend. So kann man es n\xE4mlich auch sehr sch\xF6n zwischen den vielen anderen Karten-, Brett- oder Digitalspielen spielen, ohne einen Nachteil zu haben."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high3.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "3. Brass Birmingham (Wirtschafts-Spiel)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Roxley Games", external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Brass Birmingham"), " ist ein Meisterwerk der komplexen Strategie- und Wirtschaftsspiele und ist f\xFCr mich sogar das beste Wirtschaftsspiel auf dem Markt! ", external_react_default.a.createElement("b", null, "Brass Birmingham"), " empfehle ich jedem Spieler, der die wahre Kunst im Expertenspielbereich kennen lernen m\xF6chte. Da diese Version noch komplexer und anspruchsvoller ist, sowie mehr Spieltiefe besitzt als die Version von ", external_react_default.a.createElement("b", null, "Brass"), " Lancashire. Zugleich ist diese Version auch f\xFCr diejenigen geeignet, die schon die Original Version von ", external_react_default.a.createElement("b", null, "Brass"), " oder die deutsche Version Kohle besitzen. Da hier neue und interessante Komponenten dazukamen und somit ein ganz neues Spielgef\xFChl erh\xE4lt.", external_react_default.a.createElement("b", null, "Brass Birmingham"), " ist nicht nur hochintelligent, spannend und komplex konzipiert, sondern besitzt dazu noch einen wunderbaren Mechanismus, wie Industrien aktiviert werden. Dazu bietet ", external_react_default.a.createElement("b", null, "Brass Birmingham"), " einen hohen Wiederspielwert und ist dazu noch thematisch toll umgesetzt. Man hat wirklich das Gef\xFChl, gerade bei der industriellen Revolution mitzuwirken und teilzuhaben. Die Neuauflage ist ein Augenschmaus und wundersch\xF6n gezeichnet und geh\xF6rt f\xFCr mich zu den sch\xF6nsten Spielen in meinem Spieleregal. Zus\xE4tzlich ist das komplette Spielmaterial extrem hochwertig. Wie die tollen M\xFCnz-Chips im Poker-Look, die man zus\xE4tzlich f\xFCr jedes Spiel verwenden kann, was ich grandios finde und schon oft verwendet habe."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high4.jpg')"
    },
    className: "img -post -right"
  }), external_react_default.a.createElement("b", null, "4. Architekten des Westfrankenreichs (Worker-Placement)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Garphill Games / Schwerkraft-Verlag", external_react_default.a.createElement("br", null), "F\xFCr mich k\xF6nnte ", external_react_default.a.createElement("b", null, "Architekten des Westfrankenreichs"), " das n\xE4chste Kennerspiel des Jahres werden! Eing\xE4ngige Regeln, tolle Spielmechanismen, sehr interaktiv und f\xFCr ein Worker-Placement Spiel extrem fl\xFCssig, keine Downtimes und vor allem extrem schnell zu spielen. Man merkt dem Spiel sofort an, dass das Erfolgsduo - Shem Philipps (Autor) und \u201EThe Mico\u201C (Illustrator) sich wieder zusammengetan haben. Auch Optisch f\xFChlt man sich direkt mit der Nordsee Trilogie verbunden und die Symbolsprache ist so gut wie die gleiche. Hierdurch werden Kenner der Spielreihe sich schnell zurechtfinden. ", external_react_default.a.createElement("b", null, "Architekten des Westfrankenreichs"), " ist somit ein fulminanter Auftakt einer neuen Trilogie und ist in meinen Augen sogar noch besser als ", external_react_default.a.createElement("b", null, "R\xE4uber der Nordsee"), " und das sage ich als \u201Eoller\u201C Wikinger Fan! \uD83D\uDE09 Dazu spielt sich das Spiel mit der Spieleranzahl gleich gut. Zu dem Solo-Modus kann ich euch nichts sagen, da ich Brettspiele prinzipiell nicht solo spiele. Wer ein schnelles, sehr gutes Strategiespiel sucht, mit Euro-Games und Worker-Placement Spiele klarkommt, den empfehle ich uneingeschr\xE4nkt ", external_react_default.a.createElement("b", null, "Architekten des Westfrankenreichs"), "."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high5.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "5. Spirit Island (Koop-Area-Control)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Greater Than Games / Pegasus Spiele", external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Spirit Island"), " ist aktuell mein Lieblings-Strategie-Koop-Spiel. Denn es ist wirklich fordernd und man hat direkt vom ersten Zug an Stress! Dazu finde ich die Idee erfrischend, dass die Spieler in die Rolle von Geistern schl\xFCpfen und sich gegen die menschliche Bev\xF6lkerung stellen, um gegen deren nat\xFCrlichen Drang anzuk\xE4mpfen, sich immer weiter auszubreiten.", external_react_default.a.createElement("b", null, "Spirit Island"), " ist dazu noch sehr interaktiv und wenn sich die Gruppe nicht permanent abspricht, ist das Unterfangen zum Scheitern verurteilt. Alles in allem ein Schwergewicht, mit sch\xF6nem Deckbuilding-Mechanismus, erfrischenden Ideen, hohem Wiederspielreiz, unterschiedlichen Schwierigkeitsgraden und Spielmaterial, was sich nicht verstecken muss! Bin schon auf die Erweiterung gespannt, obwohl man aktuell noch genug damit zu tun hat, alle Geister kennen zu lernen, die sich dazu auch interessant und unterschiedlich spielen!"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high6.png')"
    },
    className: "img -post -right"
  }), external_react_default.a.createElement("b", null, "6. Dice Throne (Dice-Management)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Roxley Games", external_react_default.a.createElement("br", null), "Ich bin eigentlich kein richtiger Fan von W\xFCrfel spielen, da der Gl\xFCcksfaktor f\xFCr mich oft zu hoch wird. Aber dank ", external_react_default.a.createElement("b", null, "Dice Throne"), ", hat sich das ver\xE4ndert. Es hat mir so viel Spa\xDF gemacht, dass ich zu Weihnachten direkt die 2. Season bekommen habe, um noch mehr Helden und unterschiedliche Charaktere spielen zu k\xF6nnen. Ein leicht zu erlernendes W\xFCrfel-Management Spiel, was eine gute taktische und strategische tiefe besitzt. Von Anfang an hat man eine Reihe von Optionen auf dem eigenen und individuellen Spielbrett. Die unterschiedlichen Charaktere spielen sich wirklich anders und gibt dem Spiel somit einen hohen Wiederspielreiz. Was ich richtig gut finde, ist das jedes Spiel knapp ausging. Ob eines gegen eins oder im Team-Battle, was ich dem sehr guten Balancing den einzelnen Charakteren zukommen lasse. Ich freue mich jetzt schon riesig auf die Season two, und auf neue Charaktere und weitere sch\xF6ne und spannende Battles bei ", external_react_default.a.createElement("b", null, "Dice Throne"), "!"), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high7.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "7. Ruchlos (Deckbuilder)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Board Game Circus", external_react_default.a.createElement("br", null), "Ich liebe Deckbuilder und somit war ich sehr gespannt, was nach 2017 kommen wird? Denn 2017 kamen mit Hero Realms, Kong! Und Vikings gone Wild direkt 3 Deckbuilder heraus, die ich alle sehr gerne und viel gespielt habe! 2018 ist es f\xFCr mich ganz klar ", external_react_default.a.createElement("b", null, "Ruchlos"), "! Das Piraten Setting und die tolle Spielmechanik verschmelzen perfekt miteinander.", external_react_default.a.createElement("b", null, "Ruchlos"), " erfindet das Rad nicht neu, aber die unterschiedlichen Auslagen, wo man seine Karten spielt, die hohe Interaktion untereinander und die F\xE4higkeiten der einzelnen Piraten, machen das Spiel so interessant und spa\xDFig. Sodas wir dass ich es jederzeit immer gerne auf dem Tisch bringe. Zum Gl\xFCck spielt sich ", external_react_default.a.createElement("b", null, "Ruchlos"), " auch in jeder Kombination spannend. Zu zweit w\xFCrde ich aber ehrlich gesagt immer auf Hero Realms ausweichen! Wir fanden das Spiel so gut, dass wir direkt unsere eigenen Promokarten dazu anfertigen lie\xDFen! \uD83D\uDE0A Diese bekommt man direkt 2x, wenn man uns bei Patreon mit 2$, wie auch 5$ unterst\xFCtzt."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high8.jpg')"
    },
    className: "img -post -right"
  }), external_react_default.a.createElement("b", null, "8. Gloomhaven (Dungen Crawler)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Cephalofair Games / Feuerland Spiele", external_react_default.a.createElement("br", null), "Ich gebe zu, wir sind bei ", external_react_default.a.createElement("b", null, "Gloomhaven"), " noch nicht weit vorgeschritten, unser Projekt l\xE4sst gr\xFC\xDFen! \uD83D\uDE09 Aber jede Minute unserer bisherigen Abenteuer, die wir bis jetzt bestritten haben, waren spannend, interessant und vor allem haben uns Spa\xDF gemacht! F\xFCr uns ist es auch nicht nur ein einfacher Dungeon Crawler, denn es f\xFChlt sich dazu noch wie ein Brett-Rollenspiel an, bei welchem man sich darauf freut den eigenen Helden/Charakter aufleveln zu k\xF6nnen. Die jeweiligen Klassen spielen sich unterschiedlich und teilen sich dazu noch in verschiedene Klassen auf, wie wir es von Rollenspielen kennen (K\xE4mpfer, Heiler, Fernk\xE4mpfer und Unterst\xFCtzer). Dazu ist es aber auch ein Brainburner, den perfekten Zug, das \xDCberleben der Gruppe und das erfolgreiche abschlie\xDFen des Abenteuers zu sichern. Das Spiel hat einen stolzen Preis, was wir aber gerechtfertigt finden, bei der Anzahl an Spielmaterial, Spieltiefe und Zeit die man mit ", external_react_default.a.createElement("b", null, "Gloomhaven"), " verbringen kann. F\xFCr mich auf jeden Fall aktuell der spannendste und intensivste Dungen Crawler, den ich gespielt habe."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high9.jpg')"
    },
    className: "img -post -left"
  }), external_react_default.a.createElement("b", null, "9. Archmage (Area-Control)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " Starling Games", external_react_default.a.createElement("br", null), "Das erste was sofort auff\xE4llt ist das geniale und interessante ", external_react_default.a.createElement("b", null, "Archmage"), " Board, welches die unterschiedlichen Magier Schulen wiederspiegelt. Dieses Board und die Wahl der Farben/ Magieschule beeinflusst das eigene Kartendeck und welche weiteren Zauber man spielen kann. Das macht das ", external_react_default.a.createElement("b", null, "Archmage"), " zu einer richtigen harten Nuss und zu einem sehr taktischen und strategischen Area-Control-Spiel. Denn die Magier wollen nicht nur die Zauber verbessern, sondern sich gleichzeitig sich auch auf dem Spielfeld ausbreiten, um weitere Schulen zu gr\xFCnden, Relikten nachzujagen und gegnerische Magier auszul\xF6schen! \uD83D\uDE09 Ich bin schon auf die angek\xFCndigte Erweiterung zu ", external_react_default.a.createElement("b", null, "Archmage"), " gespannt und hoffe, dass es das Spiel bald auch in deutscher Sprache zu kaufen gibt. Denn die Zauber beinhalten schon recht viel Text und k\xF6nnten den einen oder andren damit \xFCberfordern."), external_react_default.a.createElement("p", {
    className: "text"
  }, external_react_default.a.createElement("span", {
    style: {
      backgroundImage: "url('../../static/img/high10.jpg')"
    },
    className: "img -post -right"
  }), external_react_default.a.createElement("b", null, "10. Detective Stories. Fall 1: Das Feuer in Adlerstein (Krimi-Spiel)"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("b", null, "Verlag:"), " iDventure / Asmodee", external_react_default.a.createElement("br", null), "F\xFCr mich hat ", external_react_default.a.createElement("b", null, "Detective Stories"), " den Escape-Markt neu belebt und auf eine ganz neue Ebene gehoben. Hier erlebt und bekommt man wirklich das Gef\xFChl, an einem realen Kriminalfall mitzuarbeiten und diesen zu l\xF6sen. Was das realistische Spielmaterial, welches mit viel Liebe zum Detail gestaltet wurde, noch zus\xE4tzlich unterstreicht. Das Beste daran ist, dass man hier nichts zerst\xF6ren oder beschriften muss. Somit kann es problemlos weiterverkauft oder verschenkt werden. Man k\xF6nnte das Spiel auch solo spielen, was sicherlich einige von euch bestimmt interessiert. Jedoch finde ich, dass dadurch einiges an Charme, Unterhaltungswert und Spielreiz verloren geht. Weil man somit auf die vielen Diskussionen und Spekulationen, die w\xE4hrend des L\xF6sen des Falls aufkommen verzichten muss. Wir fanden diese mindestens genauso unterhaltsam und spannend, wie das Spiel, an sich, zu l\xF6sen. Wir waren auf jeden Fall alle mega begeistert von ", external_react_default.a.createElement("b", null, "Detective Stories"), " und es ist f\xFCr mich bis jetzt die \xDCberraschung des Jahres 2018. Wir freuen uns jetzt schon auf den zweiten Fall."));
};
// EXTERNAL MODULE: ./containers/index.js + 1 modules
var containers = __webpack_require__(14);

// EXTERNAL MODULE: ./components/Blog/styles/index.scss
var Blog_styles = __webpack_require__(28);

// CONCATENATED MODULE: ./components/Blog/index.js
function Blog_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Blog_typeof = function _typeof(obj) { return typeof obj; }; } else { Blog_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Blog_typeof(obj); }

function Blog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Blog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Blog_createClass(Constructor, protoProps, staticProps) { if (protoProps) Blog_defineProperties(Constructor.prototype, protoProps); if (staticProps) Blog_defineProperties(Constructor, staticProps); return Constructor; }

function Blog_possibleConstructorReturn(self, call) { if (call && (Blog_typeof(call) === "object" || typeof call === "function")) { return call; } return Blog_assertThisInitialized(self); }

function Blog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Blog_getPrototypeOf(o) { Blog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Blog_getPrototypeOf(o); }

function Blog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Blog_setPrototypeOf(subClass, superClass); }

function Blog_setPrototypeOf(o, p) { Blog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Blog_setPrototypeOf(o, p); }

 // import axios from 'axios';
// import { Form, Input, Button } from 'antd';




 // const FormItem = Form.Item;
// const TextArea = Input.TextArea;
// const url = 'https://lit-island-20029.herokuapp.com/blog';

var Blog_FormBlog =
/*#__PURE__*/
function (_React$Component) {
  Blog_inherits(FormBlog, _React$Component);

  function FormBlog() {
    var _getPrototypeOf2;

    var _this;

    Blog_classCallCheck(this, FormBlog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Blog_possibleConstructorReturn(this, (_getPrototypeOf2 = Blog_getPrototypeOf(FormBlog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderSinglePost = function () {
      var id = _this.props.router.query.id;
      var match = {
        '5bc5d0412376d54c29cfaadf': Post_Post1,
        '5bc11a25ba69710417eb8f01': Post_Post5,
        '5bc5cf7be0bcd84b492597c0': Post_Post3,
        '5bc5c04f91a7c73df8bfcd4e': Post_Post4,
        '5c339e5cfb6fc0600bdb03be': Post_Post2
      };
      return external_react_default.a.createElement("div", {
        className: "blog-wrap"
      }, external_react_default.a.createElement("div", {
        className: "posts-wrap"
      }, match[id]()));
    };

    _this.renderAllPosts = function () {
      return external_react_default.a.createElement("div", {
        className: "blog-preview"
      }, external_react_default.a.createElement(containers["a" /* PreviewContainer */], null));
    };

    return _this;
  }

  Blog_createClass(FormBlog, [{
    key: "render",
    value: function render() {
      // const { getFieldDecorator } = this.props.form;
      return external_react_default.a.createElement(Layout["a" /* default */], null, this.props.router.query.id ? this.renderSinglePost() : this.renderAllPosts());
    }
  }]);

  return FormBlog;
}(external_react_default.a.Component); // const Index = Form.create()(FormBlog);


/* harmony default export */ var Blog = (Blog_FormBlog);
// EXTERNAL MODULE: external "react-instafeed"
var external_react_instafeed_ = __webpack_require__(17);
var external_react_instafeed_default = /*#__PURE__*/__webpack_require__.n(external_react_instafeed_);

// CONCATENATED MODULE: ./components/Instagram/template.js
/* harmony default export */ var template = (function () {
  return "<a href={{link}} target=\"_blank\" class=\"instafeed__item link\">\n    <div class=\"instafeed__item__background image\" style=\"background-image: url( 'https:{{image}}' );\"></div>\n</a>";
});
// EXTERNAL MODULE: ./components/Instagram/styles.scss
var Instagram_styles = __webpack_require__(29);

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
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "c", function() { return components_Header; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "b", function() { return components_Footer; });
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "e", function() { return Layout["a" /* default */]; });
/* unused concated harmony import BlogPreview */
/* concated harmony reexport Social */__webpack_require__.d(__webpack_exports__, "f", function() { return Social; });
/* concated harmony reexport Twitter */__webpack_require__.d(__webpack_exports__, "g", function() { return Twitter_Twitter; });
/* concated harmony reexport Blog */__webpack_require__.d(__webpack_exports__, "a", function() { return Blog; });
/* concated harmony reexport Instagram */__webpack_require__.d(__webpack_exports__, "d", function() { return Instagram_Instagram; });










/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _normalize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_normalize_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _fonts_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _Header_styles_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_styles_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Footer_styles_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _Footer_styles_style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Footer_styles_style_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);










var Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content;
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Gaming wolves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/img/favicon-32x32.png",
    sizes: "32x32"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/img/favicon-16x16.png",
    sizes: "16x16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/img/favicon.ico"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_9__[/* Header */ "c"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_9__[/* Footer */ "b"], null)));
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BlogPost_namespaceObject = {};
__webpack_require__.r(BlogPost_namespaceObject);
__webpack_require__.d(BlogPost_namespaceObject, "fetchPostsRequest", function() { return fetchPostsRequest; });
__webpack_require__.d(BlogPost_namespaceObject, "fetchPostsSuccess", function() { return fetchPostsSuccess; });
__webpack_require__.d(BlogPost_namespaceObject, "fetchPostsFailure", function() { return fetchPostsFailure; });
__webpack_require__.d(BlogPost_namespaceObject, "fetchPosts", function() { return BlogPost_fetchPosts; });
var BlogPreview_namespaceObject = {};
__webpack_require__.r(BlogPreview_namespaceObject);
__webpack_require__.d(BlogPreview_namespaceObject, "fetchPreviewRequest", function() { return fetchPreviewRequest; });
__webpack_require__.d(BlogPreview_namespaceObject, "fetchPreviewSuccess", function() { return fetchPreviewSuccess; });
__webpack_require__.d(BlogPreview_namespaceObject, "fetchPreviewFailure", function() { return fetchPreviewFailure; });
__webpack_require__.d(BlogPreview_namespaceObject, "fetchPreviewPosts", function() { return BlogPreview_fetchPreviewPosts; });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-actions"
var external_redux_actions_ = __webpack_require__(3);

// CONCATENATED MODULE: ./redux/actions/BlogPost/index.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchPostsRequest = Object(external_redux_actions_["createAction"])('POSTS_FETCH_REQUEST');
var fetchPostsSuccess = Object(external_redux_actions_["createAction"])('POSTS_FETCH_SUCCESS', function (posts) {
  return {
    posts: posts
  };
});
var fetchPostsFailure = Object(external_redux_actions_["createAction"])('POSTS_FETCH_FAILURE');
var BlogPost_fetchPosts = function fetchPosts() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var url, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(fetchPostsRequest());
                _context.prev = 1;
                // const url = 'http://ec2-18-223-109-21.us-east-2.compute.amazonaws.com/blog/posts';
                // const url = 'http://localhost:3000/blog/posts';
                url = 'https://sheltered-sierra-42301.herokuapp.com/blog/posts';

                if (!id) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return external_axios_default.a.post(url, {
                  id: id
                });

              case 6:
                data = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.next = 11;
                return external_axios_default.a.get(url);

              case 11:
                data = _context.sent;

              case 12:
                dispatch(fetchPostsSuccess(data));
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                dispatch(fetchPostsFailure());

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./redux/actions/BlogPreview/index.js


function BlogPreview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function BlogPreview_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { BlogPreview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { BlogPreview_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var fetchPreviewRequest = Object(external_redux_actions_["createAction"])('PREVIEW_FETCH_REQUEST');
var fetchPreviewSuccess = Object(external_redux_actions_["createAction"])('PREVIEW_FETCH_SUCCESS', function (previews) {
  return {
    previews: previews
  };
});
var fetchPreviewFailure = Object(external_redux_actions_["createAction"])('PREVIEW_FETCH_FAILURE');
var BlogPreview_fetchPreviewPosts = function fetchPreviewPosts(all) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = BlogPreview_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var url, _ref2, data;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(fetchPreviewRequest());
                _context.prev = 1;
                // let url = 'http://ec2-18-223-109-21.us-east-2.compute.amazonaws.com/blog/preview';
                // let url = 'http://localhost:3000/blog/preview';
                url = 'https://sheltered-sierra-42301.herokuapp.com/blog/preview';

                if (all) {
                  url += '/all';
                }

                _context.next = 6;
                return external_axios_default.a.get(url);

              case 6:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch(fetchPreviewSuccess(data));
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                dispatch(fetchPreviewFailure());

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./redux/actions/index.js
/* concated harmony reexport postActions */__webpack_require__.d(__webpack_exports__, "a", function() { return BlogPost_namespaceObject; });
/* concated harmony reexport previewActions */__webpack_require__.d(__webpack_exports__, "b", function() { return BlogPreview_namespaceObject; });




/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-facebook");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(13);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(5);

// EXTERNAL MODULE: ./redux/actions/index.js + 2 modules
var actions = __webpack_require__(11);

// EXTERNAL MODULE: ./components/BlogPreview/index.js
var BlogPreview = __webpack_require__(7);

// CONCATENATED MODULE: ./containers/Preview/index.js




var fetchPreviewPosts = actions["b" /* previewActions */].fetchPreviewPosts;

var mapStateToProps = function mapStateToProps(_ref) {
  var previews = _ref.previews;
  return previews;
};

var PreviewContainer = Object(external_react_redux_["connect"])(mapStateToProps, {
  fetchPreviewPosts: fetchPreviewPosts
})(BlogPreview["a" /* default */]);
/* harmony default export */ var Preview = (Object(router_["withRouter"])(PreviewContainer));
// CONCATENATED MODULE: ./containers/index.js
/* concated harmony reexport PreviewContainer */__webpack_require__.d(__webpack_exports__, "a", function() { return Preview; });



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-instafeed");

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
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var matchSrc = {
    0: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_1.jpg',
    1: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_2.jpg',
    2: 'http://www.spiele-offensive.de/gfxa/wbg/300x250_3.jpg'
  };
  var matchHref = {
    0: 'http://www.spiele-offensive.de/referrer.php?p=10&pid=483&bid=143',
    1: 'http://www.spiele-offensive.de/referrer.php?p=11&pid=483&bid=143',
    2: 'http://www.spiele-offensive.de/referrer.php?p=12&pid=483&bid=143'
  };
  var numb = Math.round(Math.random() * 2);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: matchHref[numb],
    className: "link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: matchSrc[numb],
    alt: "banner",
    className: "img"
  }));
});

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@u-wave/react-vimeo");

/***/ }),
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _bannerRandom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51);
/* harmony import */ var _node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7__);








var opts = {
  playerVars: {
    autoplay: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Layout */ "e"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_1___default.a, {
    video: "306598289"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "online-shop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title"
  }, "ONLINE-MAGAZIN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "magazine-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "NEU!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/magazine.png",
    alt: "magazine",
    className: "img"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "DAS", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "color -new"
  }, "NEUE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "color -magazine"
  }, "ONLINE MAGAZIN"), "\xDCBER BRETTSPIELE, KARTENSPIELE & DIGITALE SPIELE!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://magazine.gamingwolves.net",
    className: "link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title"
  }, "jetzt lesen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text"
  }, "Ausgabe 1 | DEZ 18 - FEB 19")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title -blog"
  }, "BLOG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_4__[/* PreviewContainer */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner"
  }, Object(_bannerRandom__WEBPACK_IMPORTED_MODULE_5__["default"])()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title"
  }, "FOLGT UNS AUF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Social */ "f"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title"
  }, "FACEBOOK"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Twitter */ "g"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title"
  }, "INSTAGRAM"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[/* Instagram */ "d"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper -tolerance"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title -sponsors"
  }, "TOLERANZ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img",
    style: {
      backgroundImage: "url('/static/img/tolerance.jpg')"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper -sponsors"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "block-title -sponsors"
  }, "Unterst\xFCtzt von"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.spiele-offensive.de",
    className: "img",
    style: {
      backgroundImage: "url('/static/img/sponsors2.jpg')"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.blackfire.eu/",
    className: "img",
    style: {
      backgroundImage: "url('/static/img/sponsors1.png')"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.magestore.de/",
    className: "img",
    style: {
      backgroundImage: "url('/static/img/sponsors3.jpg')"
    }
  })))))));
});

/***/ }),
/* 50 */
/***/ (function(module, exports) {



/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);