"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutme",{

/***/ "./pages/aboutme.tsx":
/*!***************************!*\
  !*** ./pages/aboutme.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _jsonfile_about_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonfile/about.json */ \"./pages/jsonfile/about.json\");\n/* harmony import */ var _images_profile_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/profile.jpeg */ \"./pages/images/profile.jpeg\");\n\n\n\n\n\nconst Resume = ()=>{\n    const { personal_information, education, programming_languages, web_development, hobbies, additional_info } = _jsonfile_about_json__WEBPACK_IMPORTED_MODULE_3__;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"about center text-slate-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 rounded-lg shadow-lg  w-[80%]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _images_profile_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"Profile\",\n                            className: \"w-32 h-32 rounded-full mx-auto mb-4\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold\",\n                            children: personal_information.name\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: personal_information.location\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: personal_information.email\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: personal_information.phone\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: personal_information.whatsapp\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"links center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: personal_information.linkedin,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: \"LinkedIn\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: personal_information.github,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: \"GitHub\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: personal_information.website,\n                                        className: \"text-blue-500 hover:underline\",\n                                        children: \"Personal\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg md:text-xl font-semibold\",\n                            children: \"Education\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: education.university\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: education.degree_status\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: education.university_details.name\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg md:text-xl font-semibold\",\n                            children: \"Programming Languages\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: programming_languages\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg md:text-xl font-semibold\",\n                            children: \"Web Development\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: web_development.front_end\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: web_development.back_end\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: web_development.databases\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"md:text-xl font-semibold\",\n                            children: \"Hobbies\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: hobbies.outdoor_games\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: hobbies.indoor_games\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-lg md:text-xl font-semibold\",\n                            children: \"Additional Info\"\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: additional_info.interests\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[15px] md:text-lg\",\n                            children: additional_info.why_programming\n                        }, void 0, false, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/one/Downloads/chat/client/pages/aboutme.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Resume;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Resume);\nvar _c;\n$RefreshReg$(_c, \"Resume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjJCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlFO0tBbEZNakM7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRtZS50c3g/ZjMxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vanNvbmZpbGUvYWJvdXQuanNvblwiXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi9pbWFnZXMvcHJvZmlsZS5qcGVnXCJcblxuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGVyc29uYWxfaW5mb3JtYXRpb24sIGVkdWNhdGlvbiwgcHJvZ3JhbW1pbmdfbGFuZ3VhZ2VzLCB3ZWJfZGV2ZWxvcG1lbnQsIGhvYmJpZXMsIGFkZGl0aW9uYWxfaW5mbyB9ID0gZGF0YTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBjZW50ZXIgdGV4dC1zbGF0ZS01MDBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLWxnIHNoYWRvdy1sZyAgdy1bODAlXVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17UHJvZmlsZX0vLyBBZGQgdGhlIHBhdGggdG8geW91ciBpbWFnZVxuICAgICAgICAgIGFsdD1cIlByb2ZpbGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgbXgtYXV0byBtYi00XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj57cGVyc29uYWxfaW5mb3JtYXRpb24ubmFtZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtZDp0ZXh0LWxnXCI+e3BlcnNvbmFsX2luZm9ybWF0aW9uLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1sZ1wiPntwZXJzb25hbF9pbmZvcm1hdGlvbi5lbWFpbH08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57cGVyc29uYWxfaW5mb3JtYXRpb24ucGhvbmV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtZDp0ZXh0LWxnXCI+e3BlcnNvbmFsX2luZm9ybWF0aW9uLndoYXRzYXBwfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rcyBjZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtwZXJzb25hbF9pbmZvcm1hdGlvbi5saW5rZWRpbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMaW5rZWRJblxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17cGVyc29uYWxfaW5mb3JtYXRpb24uZ2l0aHVifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17cGVyc29uYWxfaW5mb3JtYXRpb24ud2Vic2l0ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQZXJzb25hbFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiAuLi4gUmVzdCBvZiB0aGUgcmVzdW1lIGNvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBmb250LXNlbWlib2xkXCI+RWR1Y2F0aW9uPC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1sZ1wiPntlZHVjYXRpb24udW5pdmVyc2l0eX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57ZWR1Y2F0aW9uLmRlZ3JlZV9zdGF0dXN9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtZDp0ZXh0LWxnXCI+e2VkdWNhdGlvbi51bml2ZXJzaXR5X2RldGFpbHMubmFtZX08L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlByb2dyYW1taW5nIExhbmd1YWdlczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57cHJvZ3JhbW1pbmdfbGFuZ3VhZ2VzfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBmb250LXNlbWlib2xkXCI+V2ViIERldmVsb3BtZW50PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1sZ1wiPnt3ZWJfZGV2ZWxvcG1lbnQuZnJvbnRfZW5kfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1sZ1wiPnt3ZWJfZGV2ZWxvcG1lbnQuYmFja19lbmR9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtZDp0ZXh0LWxnXCI+e3dlYl9kZXZlbG9wbWVudC5kYXRhYmFzZXN9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWQ6dGV4dC14bCBmb250LXNlbWlib2xkXCI+SG9iYmllczwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57aG9iYmllcy5vdXRkb29yX2dhbWVzfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gbWQ6dGV4dC1sZ1wiPntob2JiaWVzLmluZG9vcl9nYW1lc308L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPkFkZGl0aW9uYWwgSW5mbzwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57YWRkaXRpb25hbF9pbmZvLmludGVyZXN0c308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIG1kOnRleHQtbGdcIj57YWRkaXRpb25hbF9pbmZvLndoeV9wcm9ncmFtbWluZ308L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiZGF0YSIsIlByb2ZpbGUiLCJSZXN1bWUiLCJwZXJzb25hbF9pbmZvcm1hdGlvbiIsImVkdWNhdGlvbiIsInByb2dyYW1taW5nX2xhbmd1YWdlcyIsIndlYl9kZXZlbG9wbWVudCIsImhvYmJpZXMiLCJhZGRpdGlvbmFsX2luZm8iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJoMSIsIm5hbWUiLCJwIiwibG9jYXRpb24iLCJlbWFpbCIsInBob25lIiwid2hhdHNhcHAiLCJhIiwiaHJlZiIsImxpbmtlZGluIiwiZ2l0aHViIiwid2Vic2l0ZSIsImgyIiwidW5pdmVyc2l0eSIsImRlZ3JlZV9zdGF0dXMiLCJ1bml2ZXJzaXR5X2RldGFpbHMiLCJmcm9udF9lbmQiLCJiYWNrX2VuZCIsImRhdGFiYXNlcyIsIm91dGRvb3JfZ2FtZXMiLCJpbmRvb3JfZ2FtZXMiLCJpbnRlcmVzdHMiLCJ3aHlfcHJvZ3JhbW1pbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/aboutme.tsx\n"));

/***/ })

});