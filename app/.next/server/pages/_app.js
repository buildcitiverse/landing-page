"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/slices/counterSlice.ts
var counterSlice = __webpack_require__(1045);
// EXTERNAL MODULE: ./src/api-client/index.ts + 3 modules
var api_client = __webpack_require__(6645);
;// CONCATENATED MODULE: ./src/redux/slices/userSlice.ts


const getUser = (0,toolkit_.createAsyncThunk)("user/getUser", async () => {
  const currentUsers = await api_client/* productApi.getProducts */.Fr.getProducts();
  return currentUsers;
});
const userSlice = (0,toolkit_.createSlice)({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    current: [],
    loading: false,
    error: ""
  },
  reducers: {},

  extraReducers(builder) {
    builder.addCase(getUser.pending, state => {
      state.loading = true;
    }).addCase(getUser.fulfilled, (state, action) => {
      state.loading = false; // Add any fetched posts to the array

      state.current = action.payload.data;
    }).addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }

});
const {
  reducer: userReducer
} = userSlice;
/* harmony default export */ const slices_userSlice = (userReducer);
;// CONCATENATED MODULE: ./src/redux/store.ts



const store = (0,toolkit_.configureStore)({
  reducer: {
    counterReducer: counterSlice/* counterSlice.reducer */.r2.reducer,
    userReducer: slices_userSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}); // Infer the `RootState` and `AppDispatch` types from the store itself
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
    store: store,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Citiverse"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Citiverse"
      }, "title"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "The First Co-creation Citiverse Ecosystem"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/Logo.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-PWPTYZ5FLW"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        dangerouslySetInnerHTML: {
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PWPTYZ5FLW');
            `
        }
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mj": () => (/* binding */ decrement),
/* harmony export */   "ds": () => (/* binding */ incrementByAmount),
/* harmony export */   "nP": () => (/* binding */ increment),
/* harmony export */   "r2": () => (/* binding */ counterSlice)
/* harmony export */ });
/* unused harmony export selectCount */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// Define the initial state using that type
const initialState = {
  value: 0
};
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});
const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions; // Other code such as selectors can use the imported `RootState` type

const selectCount = state => state.counterReducer.value;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [645], () => (__webpack_exec__(4065)));
module.exports = __webpack_exports__;

})();