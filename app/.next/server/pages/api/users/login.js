"use strict";
(() => {
var exports = {};
exports.id = 877;
exports.ids = [877];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 9884:
/***/ ((module) => {

module.exports = require("http-proxy");

/***/ }),

/***/ 6752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9884);
/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const config = {
  api: {
    bodyParser: false
  }
};
const proxy = http_proxy__WEBPACK_IMPORTED_MODULE_1___default().createProxyServer();
function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({
      message: "Method not supported"
    });
  }

  return new Promise(resolve => {
    req.headers.cookie = "";

    const handleLoginResponse = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const {
            token
          } = JSON.parse(body); //handle cookies

          const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res, {
            secure: true
          });
          cookies.set("token", token, {
            httpOnly: true,
            sameSite: "lax"
          }); //handle response

          res.status(200).json({
            message: "Login successfully"
          });
        } catch (error) {
          res.status(500).json({
            message: "Something went wrong"
          });
        }

        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true
    });
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6752));
module.exports = __webpack_exports__;

})();