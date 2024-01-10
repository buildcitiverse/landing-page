"use strict";
exports.id = 645;
exports.ids = [645];
exports.modules = {

/***/ 2793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
}); // Add a response interceptor

axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error.response.data);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);

/***/ }),

/***/ 6645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ON": () => (/* reexport */ miniGameApi),
  "Fr": () => (/* reexport */ productApi)
});

// UNUSED EXPORTS: authApi

// EXTERNAL MODULE: ./src/api-client/axiosClient.ts
var axiosClient = __webpack_require__(2793);
;// CONCATENATED MODULE: ./src/api-client/auth.ts

const authApi = {
  login: payload => {
    return axiosClient/* default.post */.Z.post("users/login", payload);
  }
};
;// CONCATENATED MODULE: ./src/api-client/productApi.ts

const productApi = {
  getProducts: () => {
    return axiosClient/* default.get */.Z.get(`products`);
  },
  getProductId: id => {
    return axiosClient/* default.get */.Z.get(`products/${id}`);
  },
  createProduct: payload => {
    return axiosClient/* default.post */.Z.post(`products`, payload);
  },
  updateProduct: (id, payload) => {
    return axiosClient/* default.post */.Z.post(`products/${id}`, payload);
  },
  deleteProduct: id => {
    return axiosClient/* default.post */.Z.post(`products/${id}`);
  }
};
;// CONCATENATED MODULE: ./src/api-client/miniGameApi.ts

const miniGameApi = {
  getLeaderboard: code => {
    return axiosClient/* default.get */.Z.get(`/mini-game/leaderboard?mini_game=${code}`);
  },
  claimPrize: payload => {
    return axiosClient/* default.post */.Z.post(`/mini-game/claim`, payload);
  },
  submitEmail: payload => {
    return axiosClient/* default.post */.Z.post(`/email-sub/subscribe`, payload);
  },
  postCodeGetInfo: payload => {
    return axiosClient/* default.post */.Z.post(`mini-game/login-discord`, payload);
  }
};
;// CONCATENATED MODULE: ./src/api-client/index.ts





/***/ })

};
;