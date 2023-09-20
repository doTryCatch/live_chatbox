"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.tsx":
/*!************************!*\
  !*** ./pages/chat.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_send_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/send.png */ \"./pages/images/send.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(\"http://localhost:3001\");\nconst color = [\n    \"yellow\",\n    \"blue\",\n    \"yellow\",\n    \"orange\",\n    \"green\"\n];\n\nvar sent = false;\nfunction Page() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const brosweRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [news_data, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            title: \"\",\n            content: \"\",\n            img: \"\",\n            url: \"\",\n            date: \"\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"https://newsdata.io/api/1/news?apikey=pub_2971235970e3d943531bb2e9fc7e1855cbc3b&q=all%20technology%20news%20in%20english\").then((response)=>{\n            if (!response.ok) throw new Error(\"network is not responding!!\");\n            return response.json();\n        }).then((data)=>{\n            const news = data.results;\n            console.log(news);\n            const formattedNews = news.map((elem)=>({\n                    title: elem.title,\n                    content: elem.description,\n                    img: elem.image_url,\n                    url: elem.url,\n                    date: elem.pubDate\n                }));\n            // Update the state with the new array\n            setNews(formattedNews);\n        });\n    }, []);\n    const interval = setInterval(()=>{\n        setIsVisible(true);\n        setTimeout(()=>{\n            var i = index;\n            i < news_data.length - 1 ? i++ : i = 0;\n            setIndex(i);\n            setIsVisible(false);\n        // console.log(news_data[index])\n        }, 4000);\n    }, 4000);\n    const Img = news_data[index].img;\n    const [Msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        message: \"\",\n        side: \"justify-start\",\n        color: \"bg-white-700\"\n    });\n    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { name, room } = router.query;\n    socket.emit(\"join\", room);\n    const set_value = (e)=>{\n        setMsg(e.target.value);\n    };\n    const send = ()=>{\n        socket.emit(\"send\", Msg);\n        setAction({\n            message: Msg,\n            side: \"justify-end\",\n            color: \"bg-green-700\"\n        });\n        console.log(\"send\", Msg);\n    };\n    socket.on(\"receive\", (msg)=>{\n        console.log(\"receive\", msg);\n        setAction({\n            message: msg,\n            side: \"justify-start\",\n            color: \"bg-orange-700\"\n        });\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _board;\n        const board = document.querySelector(\".board\");\n        // Create the parent div element\n        const parentDiv = document.createElement(\"div\");\n        parentDiv.className = \"flex \";\n        parentDiv.classList.add(action.side);\n        // Create the child div element\n        const childDiv = document.createElement(\"div\");\n        childDiv.className = \"max-w-xs mx-2 my-2 p-3  rounded-lg shadow-md text-white\";\n        childDiv.classList.add(action.color);\n        // Create the paragraph element\n        const paragraph = document.createElement(\"p\");\n        paragraph.className = \"text-sm text-bold\";\n        action.message != \"\" ? paragraph.textContent = action.message : paragraph.textContent = \"welcome to this chat house!!!\";\n        // Append the paragraph to the child div\n        childDiv.appendChild(paragraph);\n        // Append the child div to the parent div\n        parentDiv.appendChild(childDiv);\n        (_board = board) === null || _board === void 0 ? void 0 : _board.append(parentDiv);\n    }, [\n        action\n    ]);\n    // News apperance from api\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"container flex md:w-[100rem] w-[25rem] \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chat_area md:w-[70%] w-[100%] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"show_content_area w-[100%] h-[35vh] text-center flex items-center justify-center  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"stroy w-[95%] h-[100%] my-20  font-mono \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-[35px] text-bold text-white\",\n                                    children: \"News\"\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"transition-opacity duration-500 ease-in-out \".concat(isVisible ? \"opacity-100 blog-card text-white  w-[100%] h-[80%] flex \" : \"opacity-0 blog-card text-white  w-[100%] h-[80%] flex \"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"img w-[25%] bg-white  shadow-md opacity-70 rounded-lg overflow-hidden\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: news_data[index].img,\n                                                alt: \"\",\n                                                className: \"scale-[1.5] h-full w-full \"\n                                            }, void 0, false, {\n                                                fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 16\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"info w-[75%]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"head text-left mx-4\",\n                                                    children: news_data[index].title\n                                                }, void 0, false, {\n                                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                    lineNumber: 143,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                    className: \"w-[80%] mx-4 my-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                    lineNumber: 144,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"description  text-left mx-4 my-2 text-xs h-20 \",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"truncate-text\",\n                                                            children: news_data[index].content\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                            lineNumber: 146,\n                                                            columnNumber: 3\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: news_data[index].url,\n                                                            className: \"text-yellow-600 text-lg\",\n                                                            children: \"Read More..\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                            lineNumber: 147,\n                                                            columnNumber: 3\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                                    lineNumber: 145,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow overflow-y-auto px-4 h-[50vh]  w-full board \",\n                        ref: chatContainerRef\n                    }, void 0, false, {\n                        fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"type_area  w-[100%] flex items-center justify-center my-8  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cont flex w-[90%] md:w-[95%]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input w-[80%] md:w-[90%]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"room-id\",\n                                        onChange: set_value,\n                                        className: \" input-area text-slate-200  w-[100%]  px-3 py-2 border-b bg-transparent border-gray-300 focus:outline-none focus:border-blue-500\",\n                                        placeholder: \"Enter Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"btn w-[20%] text-center  center \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"send\",\n                                        onClick: send,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: _images_send_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            alt: \"My Image\",\n                                            width: 25,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                            lineNumber: 175,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                        lineNumber: 174,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/one/Downloads/chat/client/pages/chat.tsx\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Page, \"vj4hdiW0CbytrItSMNKWhv+al5k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNKLE1BQU0sQ0FBQ00sS0FBSzs7Ozs7OzhEQUM1RCw4REFBQ2dFO29EQUFHYixXQUFVOzs7Ozs7OERBQ2QsOERBQUNTO29EQUFJVCxXQUFVOztzRUFDakMsOERBQUNjOzREQUFFZCxXQUFVO3NFQUFrQnJELFNBQVMsQ0FBQ0osTUFBTSxDQUFDTyxPQUFPOzs7Ozs7c0VBQ3ZELDhEQUFDaUU7NERBQUVDLE1BQU1yRSxTQUFTLENBQUNKLE1BQU0sQ0FBQ1MsR0FBRzs0REFBRWdELFdBQVU7c0VBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPM0QsOERBQUNTO3dCQUNDVCxXQUFVO3dCQUNWaUIsS0FBS2xDOzs7Ozs7a0NBR1AsOERBQUMwQjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ1M7NEJBQUlULFdBQVU7OzhDQUNiLDhEQUFDUztvQ0FBSVQsV0FBVTs4Q0FDYiw0RUFBQ2tCO3dDQUNDQyxNQUFLO3dDQUNMQyxJQUFHO3dDQUdIQyxVQUFVakM7d0NBQ1ZZLFdBQVU7d0NBQ1ZzQixhQUFZOzs7Ozs7Ozs7Ozs4Q0FJaEIsOERBQUNiO29DQUFJVCxXQUFVOzhDQUNiLDRFQUFDdUI7d0NBQU92QixXQUFVO3dDQUFPd0IsU0FBU2hDO2tEQUNoQyw0RUFBQ3pELG1EQUFLQTs0Q0FDSjRFLEtBQUt6RSx3REFBSUE7NENBQ1QwRSxLQUFJOzRDQUNKYSxPQUFPOzRDQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUI7R0FoTHdCdEY7O1FBQ1BOLGtEQUFTQTs7O0tBREZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQudHN4P2ZmMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIpO1xuY29uc3QgY29sb3IgPSBbXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwieWVsbG93XCIsIFwib3JhbmdlXCIsIFwiZ3JlZW5cIl07XG5pbXBvcnQgU2VuZCBmcm9tIFwiLi9pbWFnZXMvc2VuZC5wbmdcIjtcbmltcG9ydCBGaWxlIGZyb20gXCIuL2ltYWdlcy9maWxlLnBuZ1wiO1xudmFyIHNlbnQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJyb3N3ZVJlZj11c2VSZWYobnVsbClcbiAgY29uc3QgW2luZGV4LHNldEluZGV4XT11c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtuZXdzX2RhdGEsIHNldE5ld3NdID0gdXNlU3RhdGUoW3tcbiAgICB0aXRsZTogXCJcIixcbiAgICBjb250ZW50OiBcIlwiLFxuICAgIGltZzogXCJcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGF0ZTpcIlwiLFxuICB9XSk7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoKFxuICAgICAgXCJodHRwczovL25ld3NkYXRhLmlvL2FwaS8xL25ld3M/YXBpa2V5PXB1Yl8yOTcxMjM1OTcwZTNkOTQzNTMxYmIyZTlmYzdlMTg1NWNiYzNiJnE9YWxsJTIwdGVjaG5vbG9neSUyMG5ld3MlMjBpbiUyMGVuZ2xpc2hcIlxuICAgICApIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwibmV0d29yayBpcyBub3QgcmVzcG9uZGluZyEhXCIpO1xuICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyBcbiAgICAgXG4gICAgfSkudGhlbigoZGF0YSk9PntcbiAgICAgIGNvbnN0IG5ld3M9ZGF0YS5yZXN1bHRzXG4gICAgICBjb25zb2xlLmxvZyhuZXdzKVxuICAgICAgY29uc3QgZm9ybWF0dGVkTmV3cyA9IG5ld3MubWFwKChlbGVtKSA9PiAoe1xuICAgICAgICBcbiAgICAgICAgdGl0bGU6IGVsZW0udGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IGVsZW0uZGVzY3JpcHRpb24sXG4gICAgICAgIGltZzogZWxlbS5pbWFnZV91cmwsXG4gICAgICAgIHVybDogZWxlbS51cmwsXG4gICAgICAgIGRhdGU6IGVsZW0ucHViRGF0ZSxcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgYXJyYXlcbiAgICAgIHNldE5ld3MoZm9ybWF0dGVkTmV3cyk7XG5cbiAgICAgXG4gICAgfSk7XG4gIFxuICB9LFtdKVxuIFxuXG5cbmNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBzZXRJc1Zpc2libGUodHJ1ZSk7XG5zZXRUaW1lb3V0KCgpPT57XG4gIHZhciBpPWluZGV4O1xuICBpPG5ld3NfZGF0YS5sZW5ndGgtMT9pKys6aT0wXG5zZXRJbmRleChpKVxuc2V0SXNWaXNpYmxlKGZhbHNlKTtcbi8vIGNvbnNvbGUubG9nKG5ld3NfZGF0YVtpbmRleF0pXG59LDQwMDApXG59LDQwMDApXG5jb25zdCBJbWc9bmV3c19kYXRhW2luZGV4XS5pbWdcblxuICBjb25zdCBbTXNnLCBzZXRNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBzaWRlOiBcImp1c3RpZnktc3RhcnRcIixcbiAgICBjb2xvcjogXCJiZy13aGl0ZS03MDBcIixcbiAgfSk7XG4gIGNvbnN0IGNoYXRDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgbmFtZSwgcm9vbSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBzb2NrZXQuZW1pdChcImpvaW5cIiwgcm9vbSk7XG5cbiAgY29uc3Qgc2V0X3ZhbHVlID0gKGUpID0+IHtcbiAgICBzZXRNc2coZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHNlbmQgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoXCJzZW5kXCIsIE1zZyk7XG4gICAgc2V0QWN0aW9uKHsgbWVzc2FnZTogTXNnLCBzaWRlOiBcImp1c3RpZnktZW5kXCIsIGNvbG9yOiBcImJnLWdyZWVuLTcwMFwiIH0pO1xuICAgIGNvbnNvbGUubG9nKFwic2VuZFwiLCBNc2cpO1xuICB9O1xuICBzb2NrZXQub24oXCJyZWNlaXZlXCIsIChtc2cpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVcIiwgbXNnKTtcbiAgICBzZXRBY3Rpb24oeyBtZXNzYWdlOiBtc2csIHNpZGU6IFwianVzdGlmeS1zdGFydFwiLCBjb2xvcjogXCJiZy1vcmFuZ2UtNzAwXCIgfSk7XG4gIH0pO1xuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgcGFyZW50IGRpdiBlbGVtZW50XG4gICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYXJlbnREaXYuY2xhc3NOYW1lID0gYGZsZXggYDtcbiAgICBwYXJlbnREaXYuY2xhc3NMaXN0LmFkZChhY3Rpb24uc2lkZSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGNoaWxkIGRpdiBlbGVtZW50XG4gICAgY29uc3QgY2hpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoaWxkRGl2LmNsYXNzTmFtZSA9IGBtYXgtdy14cyBteC0yIG15LTIgcC0zICByb3VuZGVkLWxnIHNoYWRvdy1tZCB0ZXh0LXdoaXRlYDtcbiAgICBjaGlsZERpdi5jbGFzc0xpc3QuYWRkKGFjdGlvbi5jb2xvcik7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHBhcmFncmFwaCBlbGVtZW50XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidGV4dC1zbSB0ZXh0LWJvbGRcIjtcbiAgICBhY3Rpb24ubWVzc2FnZSAhPSBcIlwiXG4gICAgICA/IChwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBhY3Rpb24ubWVzc2FnZSlcbiAgICAgIDogKHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwid2VsY29tZSB0byB0aGlzIGNoYXQgaG91c2UhISFcIik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHBhcmFncmFwaCB0byB0aGUgY2hpbGQgZGl2XG4gICAgY2hpbGREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgIC8vIEFwcGVuZCB0aGUgY2hpbGQgZGl2IHRvIHRoZSBwYXJlbnQgZGl2XG4gICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGNoaWxkRGl2KTtcblxuICAgIGJvYXJkPy5hcHBlbmQocGFyZW50RGl2KTtcbiAgfSwgW2FjdGlvbl0pO1xuXG4gIC8vIE5ld3MgYXBwZXJhbmNlIGZyb20gYXBpXG4gXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggbWQ6dy1bMTAwcmVtXSB3LVsyNXJlbV0gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdF9hcmVhIG1kOnctWzcwJV0gdy1bMTAwJV0gXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93X2NvbnRlbnRfYXJlYSB3LVsxMDAlXSBoLVszNXZoXSB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cm95IHctWzk1JV0gaC1bMTAwJV0gbXktMjAgIGZvbnQtbW9ubyBcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzM1cHhdIHRleHQtYm9sZCB0ZXh0LXdoaXRlXCI+TmV3czwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgJHtcbiAgICAgICAgICBpc1Zpc2libGUgPyAnb3BhY2l0eS0xMDAgYmxvZy1jYXJkIHRleHQtd2hpdGUgIHctWzEwMCVdIGgtWzgwJV0gZmxleCAnIDogJ29wYWNpdHktMCBibG9nLWNhcmQgdGV4dC13aGl0ZSAgdy1bMTAwJV0gaC1bODAlXSBmbGV4ICdcbiAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyB3LVsyNSVdIGJnLXdoaXRlICBzaGFkb3ctbWQgb3BhY2l0eS03MCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgPGltZyBzcmM9e25ld3NfZGF0YVtpbmRleF0uaW1nfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJzY2FsZS1bMS41XSBoLWZ1bGwgdy1mdWxsIFwiLz5cblxuICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHctWzc1JV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkIHRleHQtbGVmdCBteC00XCI+e25ld3NfZGF0YVtpbmRleF0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LVs4MCVdIG14LTQgbXktMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiAgdGV4dC1sZWZ0IG14LTQgbXktMiB0ZXh0LXhzIGgtMjAgXCI+XG4gIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlLXRleHRcIiA+e25ld3NfZGF0YVtpbmRleF0uY29udGVudH08L3A+XG4gIDxhIGhyZWY9e25ld3NfZGF0YVtpbmRleF0udXJsfSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy02MDAgdGV4dC1sZ1wiPlJlYWQgTW9yZS4uPC9hPlxuPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IG92ZXJmbG93LXktYXV0byBweC00IGgtWzUwdmhdICB3LWZ1bGwgYm9hcmQgXCJcbiAgICAgICAgICAgIHJlZj17Y2hhdENvbnRhaW5lclJlZn1cbiAgICAgICAgICA+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVfYXJlYSAgdy1bMTAwJV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktOCAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnQgZmxleCB3LVs5MCVdIG1kOnctWzk1JV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dCB3LVs4MCVdIG1kOnctWzkwJV1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicm9vbS1pZFwiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRfdmFsdWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaW5wdXQtYXJlYSB0ZXh0LXNsYXRlLTIwMCAgdy1bMTAwJV0gIHB4LTMgcHktMiBib3JkZXItYiBiZy10cmFuc3BhcmVudCBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biB3LVsyMCVdIHRleHQtY2VudGVyICBjZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZW5kXCIgb25DbGljaz17c2VuZH0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtTZW5kfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJNeSBJbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX0gLy8gU3BlY2lmeSB0aGUgZGVzaXJlZCB3aWR0aFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfSAvLyBTcGVjaWZ5IHRoZSBkZXNpcmVkIGhlaWdodFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW8iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJzb2NrZXQiLCJjb2xvciIsIlNlbmQiLCJzZW50IiwiUGFnZSIsInJvdXRlciIsImJyb3N3ZVJlZiIsImluZGV4Iiwic2V0SW5kZXgiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJuZXdzX2RhdGEiLCJzZXROZXdzIiwidGl0bGUiLCJjb250ZW50IiwiaW1nIiwidXJsIiwiZGF0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwibmV3cyIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVkTmV3cyIsIm1hcCIsImVsZW0iLCJkZXNjcmlwdGlvbiIsImltYWdlX3VybCIsInB1YkRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsImkiLCJsZW5ndGgiLCJJbWciLCJNc2ciLCJzZXRNc2ciLCJhY3Rpb24iLCJzZXRBY3Rpb24iLCJtZXNzYWdlIiwic2lkZSIsImNoYXRDb250YWluZXJSZWYiLCJuYW1lIiwicm9vbSIsInF1ZXJ5IiwiZW1pdCIsInNldF92YWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmQiLCJvbiIsIm1zZyIsImJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNoaWxkRGl2IiwicGFyYWdyYXBoIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImFwcGVuZCIsInNlY3Rpb24iLCJkaXYiLCJoMSIsInNyYyIsImFsdCIsImhyIiwicCIsImEiLCJocmVmIiwicmVmIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.tsx\n"));

/***/ })

});