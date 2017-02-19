/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentReady = documentReady;
exports.h = h;
function documentReady(cb) {
  return new Promise(function (cb) {
    if (document.readyState != 'loading') {
      cb();
    } else {
      document.addEventListener('DOMContentLoaded', cb);
    }
  });
}

function h() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var el = document.createElement(type);

  Object.keys(attributes).forEach(function (key) {
    var value = attributes[key];
    if (typeof value === 'function') {
      el.addEventListener(key, function (e) {
        return value(e);
      }, false);
    } else {
      el.setAttribute(key, value);
    }
  });

  if (children instanceof Array) {
    children.forEach(function (child) {
      return el.appendChild(child);
    });
  } else if (children instanceof HTMLElement) {
    el.appendChild(children);
  } else if (typeof children === 'string') {
    el.innerHTML = children;
  }

  return el;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;
exports.matches = matches;

var _Home = __webpack_require__(4);

var _Home2 = _interopRequireDefault(_Home);

var _NotFound = __webpack_require__(6);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Search = __webpack_require__(9);

var _Search2 = _interopRequireDefault(_Search);

var _Random = __webpack_require__(8);

var _Random2 = _interopRequireDefault(_Random);

var _Hukam = __webpack_require__(5);

var _Hukam2 = _interopRequireDefault(_Hukam);

var _About = __webpack_require__(2);

var _About2 = _interopRequireDefault(_About);

var _Privacy = __webpack_require__(7);

var _Privacy2 = _interopRequireDefault(_Privacy);

var _TermsOfService = __webpack_require__(11);

var _TermsOfService2 = _interopRequireDefault(_TermsOfService);

var _Ang = __webpack_require__(3);

var _Ang2 = _interopRequireDefault(_Ang);

var _Shabad = __webpack_require__(10);

var _Shabad2 = _interopRequireDefault(_Shabad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = {
  home: _Home2.default,
  search: _Search2.default,
  random: _Random2.default,
  hukam: _Hukam2.default,
  about: _About2.default,
  privacy: _Privacy2.default,
  termsofservice: _TermsOfService2.default,
  ang: _Ang2.default,
  shabad: _Shabad2.default
};

function matches(pathname) {
  return new Promise(function (yes, no) {
    if (pathname === '/') {
      yes(_Home2.default);
    } else if (typeof routes[pathname.split('/')[1]] === 'function') {
      yes(routes[pathname.split('/')[1]]);
    } else {
      no(_NotFound2.default);
    }
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = About;

var _util = __webpack_require__(0);

function About(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'About'));
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ang;

var _util = __webpack_require__(0);

function Ang(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Ang'));
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _util = __webpack_require__(0);

function Home(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Home'));
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hukam;

var _util = __webpack_require__(0);

function Hukam(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Hukam'));
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _util = __webpack_require__(0);

function NotFound(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'These are not the singhs you are looking for'));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Privacy;

var _util = __webpack_require__(0);

function Privacy(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Privacy'));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Random;

var _util = __webpack_require__(0);

function Random(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Random'));
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

var _util = __webpack_require__(0);

function Search(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Search'));
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Shabad;

var _util = __webpack_require__(0);

function Shabad(target) {
  target.innerHTML = '';
  target.appendChild((0, _util.h)('div', {}, 'Shabad'));
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return 'TermsOfService';
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _routes = __webpack_require__(1);

var _util = __webpack_require__(0);

function router() {
  // get path
  var _location = location,
      pathname = _location.pathname;


  var App = document.getElementById('app');

  // render
  (0, _routes.matches)(pathname).then(function (route) {
    return route(App);
  }).catch(function (NotFound) {
    return NotFound(App);
  });
}

(0, _util.documentReady)().then(function () {
  router();
  //$search.focus();
  //updateSearchLang();
});

/***/ })
/******/ ]);