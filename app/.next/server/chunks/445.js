exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9337);
/* harmony import */ var _shared_ElementsBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8128);
/* harmony import */ var _shared_Icons_MenuIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8596);
/* harmony import */ var _ListIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6596);
/* harmony import */ var _FooterSocials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2058);
/* harmony import */ var _FooterPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3442);
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6645);
/* harmony import */ var _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3467);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_ElementsBase__WEBPACK_IMPORTED_MODULE_3__]);
_shared_ElementsBase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const iconMobile = {
  active: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("svg", {
    width: "16",
    height: "8",
    viewBox: "0 0 16 8",
    fill: "var(--neutrals-4)",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("path", {
      d: "M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H15C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0H1Z"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("path", {
      d: "M1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H1Z"
    })]
  }),
  close: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z",
      fill: "var(--neutrals-4)"
    })
  })
};

const MainLayout = ({
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: statusInput,
    1: setStatusInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT);
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: messError,
    1: setMessError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: stateInput,
    1: setStateInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    handleEmail(email);
  }, [email]);

  const validateEmail = email => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }; //vadidate Email


  function handleEmail(email) {
    if (email != null) {
      if (validateEmail(email)) {
        setMessError("");
        setStatusInput(_shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT);
        setInputValue(email);
      } else {
        setMessError("Email is invalid");
        setStatusInput(_shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.ERROR */ .p.ERROR);
        setInputValue(email);
      }
    } else {
      setStatusInput(_shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT);
    }
  } //Xu ly setTimeout


  function timeout(ms, state, newState) {
    return new Promise(() => {
      setTimeout(function () {
        setStatusInput(state);
        setMessError("");
        setStateInput(false);
      }, ms);
      setStatusInput(newState);
    });
  } //post email by api


  async function postApiGmail(email) {
    setStatusInput(_shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.SENDING */ .p.SENDING);
    setStateInput(true);

    try {
      const res = await _api_client__WEBPACK_IMPORTED_MODULE_8__/* .miniGameApi.submitEmail */ .ON.submitEmail({
        email
      });

      if (res.data.code === 200 && res.data.message === "Ok") {
        timeout(2000, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.SUCCESS */ .p.SUCCESS);
      } else {
        timeout(2000, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.ERROR */ .p.ERROR);
        setMessError("Something went wrong. Please try again.");
      }
    } catch {
      timeout(2000, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT, _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.ERROR */ .p.ERROR);
      setMessError("Something went wrong. Please try again.");
    }
  } // Xu ly khi an nut submit


  async function handleSubmit(email) {
    // console.log("======submit", email);
    if (statusInput == _shared_ElementsBase_single_input_SingleInput__WEBPACK_IMPORTED_MODULE_9__/* .StatusSingleInput.DEFAULT */ .p.DEFAULT && email != "") {
      await postApiGmail(email);
      await setInputValue("");
    } else {
      return;
    }
  } // Xu lt suvmit email khi nhan enter


  function handleEnter(e, email) {
    if (e.key == "Enter") {
      handleSubmit(email);
    }
  } //Giao dien trang


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "header_left",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
          className: "metalogo",
          style: {
            paddingRight: 20
          },
          src: "/meta_logo.png",
          onClick: () => {
            router.push("/");
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W, {})]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "header_right",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_ListIcon__WEBPACK_IMPORTED_MODULE_5__/* .ListIcon */ .D, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
        className: "header_menuIcon",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
          className: "icon__active",
          onClick: () => setActive(!active),
          children: !active ? iconMobile.active : iconMobile.close
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "main",
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "footer",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "footerLeft",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("img", {
          style: {
            paddingRight: 20
          },
          src: "/meta_logo.png"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
          className: "Caption_2",
          children: "Copyright \xA9 2022 Metacity"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "footerRight",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_FooterPage__WEBPACK_IMPORTED_MODULE_7__/* .FooterPage */ .S, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_FooterSocials__WEBPACK_IMPORTED_MODULE_6__/* .FooterSocials */ .V, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "join_us",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h6", {
            className: "Body_2-bold footer_title",
            children: "Join Newsletter"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "Caption join_content",
            children: "By subscribing to the Metacity Newsletter you are agreeing to receive newsletters and accepting the data privacy statement"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_shared_ElementsBase__WEBPACK_IMPORTED_MODULE_3__/* .SingleInput */ .Ho, {
            errorMessage: messError,
            mode: "dark",
            placeholder: "Enter your email",
            stateInput: stateInput,
            status: statusInput,
            statusInput: statusInput,
            setEmail: setEmail,
            handleSubmit: handleSubmit,
            handleEnter: handleEnter,
            value: inputValue
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_shared_Icons_MenuIcon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      active: active,
      setActive: setActive
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ linkScroll),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_main_ListIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6596);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const linkScroll = ["Citiverse Ecosystem", // "Earning ways",
// "Gameplay",
"Team", "Partners", "Roadmap", "News", "Academy"];

const MenuIcon = ({
  active,
  setActive
}) => {
  // function handleScroll(id: number) {
  //   if (typeof window !== "undefined") {
  //     const elementScroll = document.getElementById(`Scroll_${id}`);
  //     if (elementScroll)
  //       elementScroll.scrollIntoView({ behavior: "smooth", block: "start" });
  //     setActive(false);
  //   }
  // }
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); //Hàm để xử lý việc sroll page trong header

  function ScrollPage(item) {
    const elementScroll = document.getElementById(`Scroll_${item}`);
    if (elementScroll) elementScroll.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function handleScroll(item) {
    if (false) {}
  } //Kết thúc hàm scroll


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: `menuBar___mobile-${active ? "active" : ""}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "menuBar___mobile--list",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "list_Link",
        children: linkScroll.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          onClick: () => handleScroll(item),
          className: "Body_1-bold",
          children: item
        }, item))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_layouts_main_ListIcon__WEBPACK_IMPORTED_MODULE_0__/* .ListIcon */ .D, {
        size: "large"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);

/***/ }),

/***/ 2336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8710);
/* harmony import */ var _TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const TabControl = ({
  activeTab,
  tabOpts = [],
  onChangeTab,
  className,
  style
}) => {
  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const tabsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const {
    0: left,
    1: setLeft
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('calc(50% - 51px)');

  const initTabNode = (node, index) => {
    if (node && tabsRef.current) {
      tabsRef.current[index] = node;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!divRef.current) return; // divRef.current.get
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    ref: divRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tabs), className),
    children: tabOpts.map((tab, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      ref: el => el && initTabNode(el, index),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tab), {
        [(_TabControl_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active)]: index === activeTab
      }),
      onClick: () => onChangeTab(index),
      children: tab
    }, tab))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabControl);

/***/ }),

/***/ 9337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ shared_Navigation),
  "a": () => (/* reexport */ TabControl/* default */.Z)
});

// EXTERNAL MODULE: ./src/shared/Icons/MenuIcon.tsx
var MenuIcon = __webpack_require__(8596);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/shared/Navigation/index.tsx




const Navigation = () => {
  const router = (0,router_.useRouter)(); //Hàm để xử lý việc sroll page trong header

  function ScrollPage(item) {
    const elementScroll = document.getElementById(`Scroll_${item}`);
    if (elementScroll) elementScroll.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  function handleScroll(item) {
    if (false) {}
  } //Kết thúc hàm scroll


  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "navbar",
    children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: MenuIcon/* linkScroll.map */.K.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
        onClick: () => handleScroll(item),
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "Button_2",
          children: item
        })
      }, item))
    })
  });
};

/* harmony default export */ const shared_Navigation = (Navigation);
// EXTERNAL MODULE: ./src/shared/TabControl/index.tsx
var TabControl = __webpack_require__(2336);
;// CONCATENATED MODULE: ./src/shared/index.tsx



/***/ }),

/***/ 8710:
/***/ ((module) => {

// Exports
module.exports = {
	"tabs": "TabControl_tabs__ns1G2",
	"tab": "TabControl_tab__69_8r",
	"active": "TabControl_active__kCWJ3"
};


/***/ })

};
;