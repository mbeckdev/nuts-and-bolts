/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lib/awesome-drop-down-styles.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lib/awesome-drop-down-styles.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* --tab-color-selected: #e5eef5;\\r\\n  --tab-bkcolor-selected: #04080b;\\r\\n  --top-color: #2f4858; */\\r\\n  /* --tab-hover-color: #33658a; hsl(5, 86%, 38%) */\\r\\n  --menu-bk-color: darkblue;\\r\\n  --menu-text-color: white;\\r\\n  --menu-dropdown-bk-color: darkgreen;\\r\\n  --menu-item-width: 100px;\\r\\n}\\r\\n\\r\\nnav div {\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n/* first level of dropdown */\\r\\n/* nav > ul > li { */\\r\\n.level-1 {\\r\\n  position: relative;\\r\\n  /* z-index: 1; */\\r\\n  display: inline-block;\\r\\n\\r\\n  width: var(--menu-item-width);\\r\\n  padding: 4px 0;\\r\\n\\r\\n  text-align: center;\\r\\n\\r\\n  background-color: darkgray;\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n\\r\\n.level-2-container {\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n  width: var(--menu-item-width);\\r\\n  bottom: 0;\\r\\n  /* top: 0; */\\r\\n  left: 0;\\r\\n\\r\\n  /* border: 1px solid purple; */\\r\\n  /* transition: transform 300ms ease-in-out; */\\r\\n  transition: transform 300ms ease-in-out;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-items: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n.level-2-containers {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.level-1:hover .level-2-container {\\r\\n  /* display: block; */\\r\\n  /* position: relative; */\\r\\n  /* top: 0; */\\r\\n\\r\\n  /* z-index: 1; */\\r\\n  position: absolute;\\r\\n\\r\\n  /* transform-origin: -10%; */\\r\\n  transform: translate(0%, 100%);\\r\\n  /* transform: translateY(150px); */\\r\\n  /* heeeeeeeeeeeeeere change this in js */\\r\\n}\\r\\n\\r\\nheader {\\r\\n  /* position: relative;\\r\\n  z-index: 50; */\\r\\n}\\r\\n\\r\\n/* .level-1:hover {\\r\\n  background-color: white;\\r\\n} */\\r\\n\\r\\n/* second level of dropdown list item*/\\r\\n/* li > ul > li { */\\r\\n.level-2 {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n\\r\\n  height: 40px;\\r\\n  width: var(--menu-item-width);\\r\\n  /* border: 1px solid green; */\\r\\n\\r\\n  background-color: lightblue;\\r\\n\\r\\n  /* margin: auto 0; */\\r\\n  list-style-type: none;\\r\\n  cursor: pointer;\\r\\n  font-size: large;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.awesome-dropdown-not-hidden {\\r\\n  color: purple;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://nuts-and-bolts/./src/lib/awesome-drop-down-styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --tab-color-selected: #e5eef5;\\r\\n  --tab-bkcolor-selected: #04080b;\\r\\n  --top-color: #2f4858;\\r\\n  /* --tab-hover-color: #33658a; hsl(5, 86%, 38%) */\\r\\n  --menu-width: 100px;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-size: cover;\\r\\n  background-attachment: fixed;\\r\\n  font-family: 'EB Garamond', serif;\\r\\n  color: var(--tab-color-selected);\\r\\n  background-color: var(--tab-bkcolor-selected);\\r\\n  text-shadow: 1px 1px 3px black, -1px -1px 3px black;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: var(--top-color);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  /* justify-content: space-between; */\\r\\n  justify-content: space-around;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n  font-family: 'Cabin Sketch', cursive;\\r\\n  color: var(--tab-color-selected);\\r\\n}\\r\\n\\r\\n/* position: relative; */\\r\\n\\r\\n/* display: none; */\\r\\n/* visibility: hidden; */\\r\\n\\r\\n/* padding: 10px 20px; */\\r\\n\\r\\n/* transition: transform 300ms ease-in-out;   */\\r\\n/* visibility: hidden; */\\r\\n/* starting point of being hidden */\\r\\n/* bottom: 0; */\\r\\n/* left: 0; */\\r\\n/* z-index: -3; */\\r\\n\\r\\n/* second level of dropdowns container*/\\r\\nli > ul {\\r\\n  position: absolute;\\r\\n\\r\\n  /* starting point of being hidden */\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  z-index: -3;\\r\\n  transition: transform 300ms ease-in-out;\\r\\n}\\r\\n\\r\\n/* nav > ul > li:hover .li > ul > li {\\r\\n  transform: translate(200px, 150px) rotate(30deg);\\r\\n} */\\r\\n\\r\\n/* li {\\r\\n  padding: 10px 20px;\\r\\n  list-style-type: none;\\r\\n\\r\\n  cursor: pointer;\\r\\n  font-size: large;\\r\\n  \\r\\n} */\\r\\n\\r\\n/* li:hover {\\r\\n  text-decoration: underline;\\r\\n  background-color: var(--tab-hover-color);\\r\\n  transition: all;\\r\\n} */\\r\\n\\r\\n/* \\r\\nli:first-of-type:hover {\\r\\n  border-top-left-radius: 10px;\\r\\n}\\r\\nli:last-of-type:hover {\\r\\n  border-top-right-radius: 10px;\\r\\n} */\\r\\n\\r\\n#copy-container {\\r\\n  margin-top: 2em;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n/* #headline {\\r\\n  font-size: 60px;\\r\\n  font-family: 'Cabin Sketch', cursive;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#hype-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n#hype-container p {\\r\\n  margin: 20px;\\r\\n  width: 300px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  padding: 1px;\\r\\n} */\\r\\n\\r\\n/* .about-p {\\r\\n  margin: 1em 2em;\\r\\n}\\r\\n\\r\\n.menu-container {\\r\\n  margin: 1em;\\r\\n  padding: 0 1em;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n  word-break: normal;\\r\\n  margin-left: 2em;\\r\\n  text-indent: -2em;\\r\\n}\\r\\n\\r\\n.menu-row {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  line-height: 1.7em;\\r\\n} */\\r\\n\\r\\n/* .price {\\r\\n  margin-left: 2em;\\r\\n} */\\r\\n/* \\r\\n.tab-selected {\\r\\n  color: var(--tab-color-selected);\\r\\n  background-color: var(--tab-bkcolor-selected);\\r\\n} */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://nuts-and-bolts/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://nuts-and-bolts/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/lib/awesome-drop-down-styles.css":
/*!**********************************************!*\
  !*** ./src/lib/awesome-drop-down-styles.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_awesome_drop_down_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./awesome-drop-down-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/lib/awesome-drop-down-styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_awesome_drop_down_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_awesome_drop_down_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://nuts-and-bolts/./src/lib/awesome-drop-down-styles.css?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://nuts-and-bolts/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://nuts-and-bolts/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _lib_awesome_drop_down_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/awesome-drop-down-styles.css */ \"./src/lib/awesome-drop-down-styles.css\");\n/* harmony import */ var _lib_load_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/load-page.js */ \"./src/lib/load-page.js\");\n/* harmony import */ var _lib_awesome_drop_downs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/awesome-drop-downs.js */ \"./src/lib/awesome-drop-downs.js\");\n\r\n// import css from './styles.css';\r\n\r\n\r\n\r\n//GET PICTURES INTO THIS PROJECT WHEN YOU GET SOME PICTURES:\r\n// import MyPicture from './image.png';\r\n\r\n// const myPic = new Image();\r\n// myPic.src = MyPicture;\r\n// someDiv.appendChild(myPic);\r\n\r\n// in src/StyleSheet.css :\r\n// .someOtherDiv {\r\n//   color: red;\r\n//   background: url('./image.png');\r\n// }\r\n\r\n\r\n\r\n_lib_awesome_drop_downs_js__WEBPACK_IMPORTED_MODULE_3__.dropdowns.writeToScreen();\r\n\r\n// import { loadHomeTab } from './page-home.js';\r\n// import { loadMenuTab } from './page-menu.js';\r\n// import { loadAboutTab } from './page-about.js';\r\n\r\n// loadPage();\r\n// loadHomeTab();\r\n// loadMenuTab();\r\n// loadAboutTab();\r\n\n\n//# sourceURL=webpack://nuts-and-bolts/./src/index.js?");

/***/ }),

/***/ "./src/lib/awesome-drop-downs.js":
/*!***************************************!*\
  !*** ./src/lib/awesome-drop-downs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropdowns\": () => (/* binding */ dropdowns)\n/* harmony export */ });\n/* harmony import */ var _awesome_drop_down_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awesome-drop-down-styles.css */ \"./src/lib/awesome-drop-down-styles.css\");\n\r\n\r\nlet dropdowns = (function () {\r\n  let dropDownList = [];\r\n  // // addMainLevelDropdown\r\n  // addSubLevelDropdown(mainLevel){}\r\n  // // makeADrop\r\n  // // writes to the DOM inside a nav element you specify\r\n  // function writeToScreen(navElementToAttachTo) {\r\n  function writeToScreen() {\r\n    return console.log('asdf');\r\n  }\r\n\r\n  function initialSetup() {\r\n    _labelSections();\r\n    _setUpEventListeners();\r\n  }\r\n  initialSetup();\r\n\r\n  function _labelSections() {}\r\n\r\n  function _setUpEventListeners() {\r\n    // for containers that start out hidden, add a not-hiddden class\r\n    // when on hovering on parent element\r\n    let allUls = document.querySelectorAll('ul');\r\n    allUls.forEach((ul) => {\r\n      ul.classList.add('awesome-dropdown-not-hidden');\r\n    });\r\n  }\r\n\r\n  // let allMainLevelElements = [];\r\n  // addEventListeners() {\r\n  // }\r\n  // const mainTab = document.getElementById('main-tab');\r\n  // const menuTab = document.getElementById('menu-tab');\r\n  // const aboutTab = document.getElementById('about-tab');\r\n  // mainTab.addEventListener('click', function () {\r\n  //   clearAndSwitchTab(mainTab);\r\n  // });\r\n  // menuTab.addEventListener('click', function () {\r\n  //   clearAndSwitchTab(menuTab);\r\n  // });\r\n  // aboutTab.addEventListener('click', function () {\r\n  //   clearAndSwitchTab(aboutTab);\r\n  // });\r\n  // const copyContainer = document.getElementById('copy-container');\r\n  // function clearAndSwitchTab(tab) {\r\n  //   while (copyContainer.firstChild) {\r\n  //     copyContainer.removeChild(copyContainer.firstChild);\r\n  //   }\r\n  //   clearTabColors();\r\n  //   let theId = tab.id;\r\n  //   switch (theId) {\r\n  //     case 'main-tab':\r\n  //       mainTab.classList.add('tab-selected');\r\n  //       // loadHomeTab();\r\n  //       break;\r\n  //     case 'menu-tab':\r\n  //       menuTab.classList.add('tab-selected');\r\n  //       // loadMenuTab();\r\n  //       break;\r\n  //     case 'about-tab':\r\n  //       aboutTab.classList.add('tab-selected');\r\n  //       // loadAboutTab();\r\n  //       break;\r\n  //   }\r\n  // }\r\n  function clearTabColors() {\r\n    mainTab.classList.remove('tab-selected');\r\n    menuTab.classList.remove('tab-selected');\r\n    aboutTab.classList.remove('tab-selected');\r\n  }\r\n  return {\r\n    // writeToScreen: writeToScreen,\r\n    clearTabColors,\r\n    writeToScreen,\r\n  };\r\n})();\r\n\r\n// export default dropdowns;\r\n\n\n//# sourceURL=webpack://nuts-and-bolts/./src/lib/awesome-drop-downs.js?");

/***/ }),

/***/ "./src/lib/load-page.js":
/*!******************************!*\
  !*** ./src/lib/load-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\nfunction loadPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  // createHeader();\r\n\r\n  function createHeader() {\r\n    const headerNode = document.createElement('header');\r\n    content.appendChild(headerNode);\r\n    const h1Node = document.createElement('h1');\r\n    headerNode.appendChild(h1Node);\r\n    const h1Text = document.createTextNode('NUTS AND BOLTS');\r\n    h1Node.appendChild(h1Text);\r\n\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n\r\n    const li1 = document.createElement('li');\r\n    const li2 = document.createElement('li');\r\n    const li3 = document.createElement('li');\r\n\r\n    li1.setAttribute('id', 'main-tab');\r\n    li2.setAttribute('id', 'menu-tab');\r\n    li3.setAttribute('id', 'about-tab');\r\n\r\n    const li1Text = document.createTextNode('Main');\r\n    const li2Text = document.createTextNode('Menu');\r\n    const li3Text = document.createTextNode('About');\r\n\r\n    li1.appendChild(li1Text);\r\n    li2.appendChild(li2Text);\r\n    li3.appendChild(li3Text);\r\n    ul.appendChild(li1);\r\n    ul.appendChild(li2);\r\n    ul.appendChild(li3);\r\n    nav.appendChild(ul);\r\n    headerNode.appendChild(nav);\r\n\r\n    li1.classList.add('tab-selected');\r\n  }\r\n\r\n  const copyContainer = document.createElement('div');\r\n  copyContainer.setAttribute('id', 'copy-container');\r\n  content.appendChild(copyContainer);\r\n  // content.appendChild(myPic);\r\n  // content.appendChild(element);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://nuts-and-bolts/./src/lib/load-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;