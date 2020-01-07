/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".main.bundle.js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("2YZa");
module.exports = __webpack_require__("jh8G");


/***/ }),

/***/ "2YZa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "MFE.GLB.React"
var external_MFE_GLB_React_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "MFE.GLB.ReactDOM"
var external_MFE_GLB_ReactDOM_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "MFE.SHC"
var external_MFE_SHC_ = __webpack_require__("tkT3");

// EXTERNAL MODULE: external "MFE.TCI"
var external_MFE_TCI_ = __webpack_require__("zAC/");

// CONCATENATED MODULE: ./src/TeamAComponent1.tsx

var TeamAComponent1 = function () {
    return external_MFE_GLB_React_["createElement"]("div", { className: "card bg-warning" },
        external_MFE_GLB_React_["createElement"]("div", { className: "card-body" },
            external_MFE_GLB_React_["createElement"]("h5", { className: "card-title" }, "Team A Component 1"),
            external_MFE_GLB_React_["createElement"]("p", { className: "card-text" }, "Normal component from team A")),
        external_MFE_GLB_React_["createElement"]("ul", { className: "list-group list-group-flush" },
            external_MFE_GLB_React_["createElement"]("li", { className: "list-group-item" }, "Cras justo odio"),
            external_MFE_GLB_React_["createElement"]("li", { className: "list-group-item" }, "Dapibus ac facilisis in"),
            external_MFE_GLB_React_["createElement"]("li", { className: "list-group-item" }, "Vestibulum at eros")));
};
/* harmony default export */ var src_TeamAComponent1 = (TeamAComponent1);

// CONCATENATED MODULE: ./src/TeamAComponent2Lazy.tsx


var TeamAComponent2 = Object(external_MFE_GLB_React_["lazy"])(function () { return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "3Nbg")); });
var TeamAComponent2Lazy = function () {
    return external_MFE_GLB_React_["createElement"]("div", { className: "central-comp" },
        external_MFE_GLB_React_["createElement"](external_MFE_GLB_React_["Suspense"], { fallback: external_MFE_GLB_React_["createElement"]("p", null, "Loading Team A Component 2 ...") },
            external_MFE_GLB_React_["createElement"](TeamAComponent2, null)));
};
/* harmony default export */ var src_TeamAComponent2Lazy = (TeamAComponent2Lazy);

// CONCATENATED MODULE: ./src/page.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var page_Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        return external_MFE_GLB_React_["createElement"]("div", { className: "container", style: { margin: '40px auto' } },
            external_MFE_GLB_React_["createElement"](external_MFE_SHC_["Header"], null),
            external_MFE_GLB_React_["createElement"]("div", { className: "row" },
                external_MFE_GLB_React_["createElement"]("div", { className: "col-3" },
                    external_MFE_GLB_React_["createElement"](external_MFE_SHC_["UIComponentA"], null),
                    external_MFE_GLB_React_["createElement"]("div", { className: "mb-2" }),
                    external_MFE_GLB_React_["createElement"](external_MFE_SHC_["UIComponentBLazy"], null)),
                external_MFE_GLB_React_["createElement"]("div", { className: "col" },
                    external_MFE_GLB_React_["createElement"](src_TeamAComponent1, null),
                    external_MFE_GLB_React_["createElement"]("div", { className: "mb-2" }),
                    external_MFE_GLB_React_["createElement"](src_TeamAComponent2Lazy, null)),
                external_MFE_GLB_React_["createElement"]("div", { className: "col-4" },
                    external_MFE_GLB_React_["createElement"](external_MFE_TCI_["TeamCComponent"], null))));
    };
    return Page;
}(external_MFE_GLB_React_["Component"]));
/* harmony default export */ var page = (page_Page);

// CONCATENATED MODULE: ./src/index.tsx


console.log("Hello from Team A Page");

external_MFE_GLB_ReactDOM_["render"](external_MFE_GLB_React_["createElement"](page, null), document.getElementById('root'));


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = MFE.GLB.React;

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = MFE.GLB.ReactDOM;

/***/ }),

/***/ "jh8G":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tkT3":
/***/ (function(module, exports) {

module.exports = MFE.SHC;

/***/ }),

/***/ "zAC/":
/***/ (function(module, exports) {

module.exports = MFE.TCI;

/***/ })

/******/ });