/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar input = document.getElementById('inputMessage');\nvar sender = document.getElementById('sender');\nvar messagesContainer = document.querySelector('.messages');\ninput.addEventListener('keydown', handleKeyDown);\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (!messageText) return;\n  var message = createMessage(messageText, \"user\");\n  saveMessageToLocalstorage(message);\n  displayMessage(message);\n  resetInput();\n  scrollToBottom();\n}\nfunction createMessage(text, sender) {\n  return {\n    text: text,\n    sender: sender,\n    timestamp: new Date().toISOString()\n  };\n}\nfunction handleKeyDown(event) {\n  if (event.key === 'Enter' && !event.shiftKey && input.value.trim() !== '') {\n    handleSubmit(event);\n  }\n}\nfunction saveMessageToLocalstorage(message) {\n  try {\n    var messages = getMessagesFromLocalstorage();\n    messages.push(message);\n    localStorage.setItem('messages', JSON.stringify(messages));\n  } catch (error) {\n    console.error('Error saving message to localStorage', error);\n  }\n}\nfunction getMessagesFromLocalstorage() {\n  try {\n    return JSON.parse(localStorage.getItem('messages')) || [];\n  } catch (error) {\n    console.error('Error retrieving messages from localStorage', error);\n    return [];\n  }\n}\nfunction displayMessage(message) {\n  var messageElement = createMessageElement(message);\n  messagesContainer.appendChild(messageElement);\n}\nfunction createMessageElement(message) {\n  var messageElement = document.createElement('div');\n  messageElement.className = message.sender === \"user\" ? 'user-message' : 'interlocutor-message';\n  var timeOptions = {\n    hour: '2-digit',\n    minute: '2-digit'\n  };\n  var timeString = new Date(message.timestamp).toLocaleTimeString([], timeOptions);\n  messageElement.innerHTML = \"\\n        <div class=\\\"text\\\">\".concat(message.text, \"</div>\\n        <div class=\\\"meta\\\">\").concat(timeString, \"</div>\\n    \");\n  return messageElement;\n}\nfunction scrollToBottom() {\n  messagesContainer.scrollTop = messagesContainer.scrollHeight;\n}\n\n// Сброс поля ввода\nfunction resetInput() {\n  input.value = '';\n  input.style.height = '40px';\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var messages = getMessagesFromLocalstorage();\n  var fragment = document.createDocumentFragment();\n  messages.forEach(function (message) {\n    fragment.appendChild(createMessageElement(message));\n  });\n  messagesContainer.appendChild(fragment);\n  scrollToBottom();\n});\nsender.addEventListener('click', handleSubmit);\ninput.addEventListener('input', function () {\n  this.style.height = '40px';\n  this.style.height = this.scrollHeight + 'px';\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });