"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9884:
/***/ ((module) => {

module.exports = require("http-proxy");

/***/ }),

/***/ 6238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9884);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const config = {
  api: {
    bodyParser: false
  }
};
const proxy = http_proxy__WEBPACK_IMPORTED_MODULE_0___default().createProxyServer();
function handler(req, res) {
  return new Promise(resolve => {
    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res);
    const accessToken = cookies.get("accessToken");

    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = "";
    proxy.once("proxyRes", () => {
      resolve(true);
    });
    proxy.web(req, res, {
      // target: "https://apitest.metacity.game/v1",
      target: "https://api.metadev.city/v1",
      // target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false
    });
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6238));
module.exports = __webpack_exports__;

})();