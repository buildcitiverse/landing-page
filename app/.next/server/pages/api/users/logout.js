"use strict";
(() => {
var exports = {};
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 3327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(640);
/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const config = {
  api: {
    bodyParser: false
  }
};
function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({
      message: "Method not supported"
    });
  }

  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);
  cookies.set("token");
  res.status(200).json({
    message: "Logout successfully"
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3327));
module.exports = __webpack_exports__;

})();