exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 8720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ footerPages),
/* harmony export */   "z": () => (/* binding */ footerSocials)
/* harmony export */ });
const footerPages = [{
  href: "/",
  name: "News"
}, {
  href: "/",
  name: "Docs"
}, {
  href: "/",
  name: "WhitePaper"
}, {
  href: "/",
  name: "Tokenomic"
}];
const footerSocials = [{
  href: "https://metacityofficial.medium.com",
  name: "Medium"
}, {
  href: "https://twitter.com/metacityB2E",
  name: "Twitter"
}, {
  href: "https://t.me/metacityb2e",
  name: "Telegram"
}, {
  href: "https://discord.com/invite/metacity",
  name: "Discord"
}];

/***/ }),

/***/ 3442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ FooterPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8720);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const FooterPage = () => {
  const {
    0: collapse,
    1: setCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleToggle = index => {
    collapse.includes(index) ? setCollapse(collapse.filter(c => c !== index)) : setCollapse([...collapse, index]);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "footer_pages",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h6", {
        className: "Body_2-bold footer_title",
        onClick: () => handleToggle(1),
        children: ["Page", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          src: "/icon/arrow-down-dark.svg",
          alt: ""
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("overflow", {
          ["collapse"]: collapse.includes(1)
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
          children: _dataLayout__WEBPACK_IMPORTED_MODULE_1__/* .footerPages.map */ .t.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: item.href,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                className: "Button_2",
                children: item.name
              })
            })
          }, item.name))
        })
      })]
    })
  });
};

/***/ }),

/***/ 2058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ FooterSocials)
/* harmony export */ });
/* harmony import */ var _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8720);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const FooterSocials = () => {
  const {
    0: collapse,
    1: setCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const handleToggle = index => {
    collapse.includes(index) ? setCollapse(collapse.filter(c => c !== index)) : setCollapse([...collapse, index]);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "footer_socials",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h6", {
        className: "Body_2-bold footer_title",
        onClick: () => handleToggle(2),
        children: ["Social", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
          src: "/icon/arrow-down-dark.svg",
          alt: ""
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("overflow", {
          ["collapse"]: collapse.includes(2)
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("ul", {
          children: _dataLayout__WEBPACK_IMPORTED_MODULE_2__/* .footerSocials.map */ .z.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: item.href,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                href: _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__/* .urlIcon */ .It[index],
                rel: "noreferrer",
                target: "_blank",
                className: "Button_2",
                children: item.name
              })
            })
          }, item.name))
        })
      })]
    })
  });
};

/***/ }),

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ListIcon)
/* harmony export */ });
/* harmony import */ var _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ListIcon = ({
  size = "normal",
  style
}) => {
  const dataRender = size === "normal" ? _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__/* .iconMetaHeader */ .gZ : _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__/* .iconMetaHeaderLarge */ .mt;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      style: style,
      className: "header_socials",
      children: dataRender.map((icon, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: _shared_constants_IconHeaderMetacity__WEBPACK_IMPORTED_MODULE_0__/* .urlIcon */ .It[index],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
          className: "iconMetaCity",
          children: icon
        })
      }, index))
    })
  });
};

/***/ }),

/***/ 8815:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/shared/ElementsBase/enum.ts
// single-input
let SingleInputStatus; // button

(function (SingleInputStatus) {
  SingleInputStatus["DEFAULT"] = "default";
  SingleInputStatus["SENDING"] = "sending";
  SingleInputStatus["SUCCESS"] = "success";
  SingleInputStatus["ERROR"] = "error";
})(SingleInputStatus || (SingleInputStatus = {}));

let StyleButtonMeta;

(function (StyleButtonMeta) {
  StyleButtonMeta["LIGHT"] = "light";
  StyleButtonMeta["NEUTRAL"] = "neutral";
  StyleButtonMeta["DARK"] = "dark";
})(StyleButtonMeta || (StyleButtonMeta = {}));

let enum_SizeButtonMeta;

(function (SizeButtonMeta) {
  SizeButtonMeta["MEDIUM"] = "medium";
  SizeButtonMeta["SMALL"] = "small";
})(enum_SizeButtonMeta || (enum_SizeButtonMeta = {}));

let enum_IconButtonMeta; //logo

(function (IconButtonMeta) {
  IconButtonMeta["FALSE"] = "false";
  IconButtonMeta["LEFT"] = "left";
  IconButtonMeta["RIGHT"] = "right";
})(enum_IconButtonMeta || (enum_IconButtonMeta = {}));

let ModeLogoMeta;

(function (ModeLogoMeta) {
  ModeLogoMeta["DARK"] = "Dark";
  ModeLogoMeta["LIGHT"] = "Light";
})(ModeLogoMeta || (ModeLogoMeta = {}));

let SizeLogoMeta; //circle button

(function (SizeLogoMeta) {
  SizeLogoMeta["HORIZONTAL"] = "Horizontal";
  SizeLogoMeta["VERTICAL"] = "Vertical";
  SizeLogoMeta["SYMBOL"] = "Symbol";
})(SizeLogoMeta || (SizeLogoMeta = {}));

let SizeCircleButtonMeta; //label

(function (SizeCircleButtonMeta) {
  SizeCircleButtonMeta["SMALL"] = "small";
  SizeCircleButtonMeta["LARGE"] = "large";
})(SizeCircleButtonMeta || (SizeCircleButtonMeta = {}));

let RuleLabelMeta;

(function (RuleLabelMeta) {
  RuleLabelMeta["DEFAULT"] = "default";
  RuleLabelMeta["POPULAR"] = "popular";
  RuleLabelMeta["NEW"] = "new";
  RuleLabelMeta["FEATURE"] = "featured";
  RuleLabelMeta["COMINGSOON"] = "comingsoon";
})(RuleLabelMeta || (RuleLabelMeta = {}));

let TypeLabelMeta;

(function (TypeLabelMeta) {
  TypeLabelMeta["SOLID"] = "Solid";
  TypeLabelMeta["GHOST"] = "Ghost";
})(TypeLabelMeta || (TypeLabelMeta = {}));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/shared/ElementsBase/button/ButtonMeta.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ButtonMeta = props => {
  const {
    content,
    icon,
    iconImage,
    size,
    style,
    disable,
    customStyle
  } = props;
  const valueProps = {
    padding: size === SizeButtonMeta.MEDIUM ? "0 22px " : "0 14px",
    height: size === SizeButtonMeta.MEDIUM ? 48 : 40,
    displayLeft: icon === IconButtonMeta.LEFT ? "inline" : "none",
    displayRight: icon === IconButtonMeta.RIGHT ? "inline" : "none",
    size: size === SizeButtonMeta.MEDIUM ? SizeButtonMeta.MEDIUM : SizeButtonMeta.SMALL,
    style: style,
    src: iconImage
  };
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx("button", {
      className: `ButtonMeta--${valueProps.style}`,
      style: _objectSpread(_objectSpread({}, customStyle), {}, {
        padding: valueProps.padding,
        height: valueProps.height
      }),
      disabled: disable,
      children: /*#__PURE__*/_jsxs("span", {
        className: `ButtonMeta__wrap-${valueProps.size}`,
        children: [/*#__PURE__*/_jsx("span", {
          style: {
            display: valueProps.displayLeft,
            marginRight: 13
          },
          children: valueProps.src
        }), content, /*#__PURE__*/_jsx("span", {
          style: {
            display: valueProps.displayRight,
            marginLeft: 13
          },
          children: valueProps.src
        })]
      })
    })
  });
};

/* harmony default export */ const button_ButtonMeta = ((/* unused pure expression or super */ null && (ButtonMeta)));

/***/ }),

/***/ 8128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ho": () => (/* reexport safe */ _single_input_SingleInput__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "w0": () => (/* reexport safe */ _meta_logo_MetaLogo__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _logo_Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3298);
/* harmony import */ var _button_ButtonMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8815);
/* harmony import */ var _single_input_SingleInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3467);
/* harmony import */ var _input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8205);
/* harmony import */ var _input_search_InputSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4350);
/* harmony import */ var _toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7449);
/* harmony import */ var _service_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1229);
/* harmony import */ var _meta_logo_MetaLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3068);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_input_search_InputSearch__WEBPACK_IMPORTED_MODULE_4__]);
_input_search_InputSearch__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4350:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const InputSearch = ({
  placeholder,
  onSearch,
  className
}) => {
  const tl = gsap.timeline();
  const searchBox = useRef(null);
  const form = useRef(null);
  const icon = useRef(null);
  const svg = useRef(null);
  const path = useRef(null);
  const {
    control,
    handleSubmit
  } = useForm();

  const submitForm = data => {
    if (data.search && typeof onSearch === "function") {
      onSearch(data.search);
    }
  };

  const animateSearch = () => {
    tl.reversed(!tl.reversed());
  };

  useEffect(() => {
    tl.to(icon.current, {
      backgroundColor: _colors.primary_1,
      duration: 1,
      ease: Power4.easeInOut
    }, 0);
    tl.to(svg.current, {
      width: 13,
      duration: 1,
      ease: Power4.easeInOut
    }, 0);
    tl.to(path.current, {
      fill: _colors.neutrals_8,
      duration: 1,
      ease: Power4.easeInOut
    }, 0);
    tl.to(form.current, {
      width: 312,
      duration: 1,
      ease: Power4.easeInOut
    }, 0.3);
    tl.to(searchBox.current, {
      borderColor: _colors.neutrals_6,
      duration: 2,
      ease: Power4.easeInOut
    }, 0);
    tl.reversed(true);
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    ref: searchBox,
    className: classNames(classes.search, className),
    children: [/*#__PURE__*/_jsx("form", {
      ref: form,
      onSubmit: handleSubmit(submitForm),
      children: /*#__PURE__*/_jsx(Controller, {
        control: control,
        name: "search",
        defaultValue: "",
        render: ({
          field
        }) => /*#__PURE__*/_jsx("input", _objectSpread(_objectSpread({}, field), {}, {
          placeholder: placeholder
        }))
      })
    }), /*#__PURE__*/_jsx("span", {
      ref: icon,
      className: classes.icon,
      onClick: animateSearch,
      children: /*#__PURE__*/_jsx("svg", {
        ref: svg,
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          ref: path,
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.9056 14.3199C11.551 15.3729 9.84871 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12.9056 14.3199ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",
          fill: "#FCFCFD"
        })
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (InputSearch)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8205:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Input = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(({
  status,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  onClear,
  className
}, ref) => {
  const configStyle = {
    default: {
      borderColor: "",
      icon: null,
      bgIcon: ""
    },
    success: {
      borderColor: 'var(--primary-4)',
      icon: './icon/check-dark.svg',
      bgIcon: ""
    },
    error: {
      borderColor: 'var(--primary-3)',
      icon: './icon/circle-close.svg',
      bgIcon: ""
    }
  };

  const handleClickIcon = () => {
    if (status === "error" && typeof onClear === 'function') {
      onClear();
    }
  };

  const style = configStyle[status || "default"];
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(className),
    children: [/*#__PURE__*/_jsx("label", {
      children: label
    }), /*#__PURE__*/_jsxs("div", {
      className: classes.inputField,
      children: [/*#__PURE__*/_jsx("input", {
        style: {
          borderColor: style.borderColor
        },
        type: type,
        name: name,
        placeholder: placeholder,
        value: value,
        onChange: onChange
      }), style.icon && /*#__PURE__*/_jsx("span", {
        className: classes.icon,
        style: {
          backgroundColor: style.bgIcon
        },
        onClick: handleClickIcon,
        children: /*#__PURE__*/_jsx("img", {
          src: style.icon,
          alt: ""
        })
      })]
    })]
  });
})));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Input)));

/***/ }),

/***/ 3298:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/shared/constants/LogoSymbol.js


// export const LogoSymbol = {
//   LightHorizontal: <img src="./icon/logo-light-horizontal.svg" />,
//   LightVertical:  <img src="./icon/logo-light-vertical.svg" />,
//   LightSymbol:  <img src="./icon/logo-light.svg" />,
//   DarkHorizontal:  <img src="./icon/logo-dark-horizontal.svg" />,
//   DarkVertical:  <img src="./icon/logo-dark-vertical.svg" />,
//   DarkSymbol:  <img src="./icon/logo-dark.svg" />,
// };
const LogoSymbol_LogoSymbol = {
  LightHorizontal: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "160",
    height: "47",
    viewBox: "0 0 160 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.8039 18.6878L18.8259 21.3024L13.0637 17.3094L6.60505 34.0126L46.9676 0L56.5339 47L25.0223 25.6795L28.1647 23.1712L52.3012 39.8218L44.4065 8.80863L0.885864 41.9685L11.2471 11.3726L21.8039 18.6878Z",
      fill: "url(#paint0_linear_725_2331)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M68.0928 29.7313L71.6817 11.7607H71.9786L78.5007 23.0937L84.6529 11.7607H84.9622L88.5755 29.7313H84.6529L83.1878 21.7827L78.5495 30.3702H78.2726L73.2924 21.6637L71.7748 29.7313H68.0928V29.7313ZM99.7141 29.7313V12.326H110.358V15.9148H103.718V19.0618H109.406V22.6267H103.718V26.0689H110.456V29.732H99.7141V29.7313ZM125.745 29.7313V15.9645H120.252V12.326H135.339V15.9645H129.871V29.7313H125.745H125.745ZM147.93 24.2002H152.471L150.229 18.7508L147.93 24.2002ZM141.461 29.7313L150.278 11.7853H150.539L159.16 29.7313H154.843L153.749 27.1993H146.734L145.615 29.7313H141.461H141.461Z",
      fill: "#283D64"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M91.5526 37.8943C91.9999 37.8943 92.3893 37.9647 92.7207 38.1048C93.0522 38.2448 93.3792 38.4642 93.7019 38.7615L93.1057 39.4759C92.8659 39.2636 92.6273 39.1062 92.3912 39.0039C92.155 38.9022 91.8965 38.8511 91.6149 38.8511C90.9689 38.8511 90.4555 39.1337 90.0742 39.6991C89.693 40.2644 89.503 41.1764 89.503 42.4349C89.503 43.659 89.6936 44.5626 90.0742 45.1446C90.4549 45.7272 90.9689 46.0181 91.6149 46.0181C91.9382 46.0181 92.2155 45.9587 92.4472 45.8397C92.679 45.7208 92.9319 45.5462 93.2054 45.3166L93.7892 46.0181C93.168 46.673 92.4223 46.9998 91.5526 46.9998C90.9147 46.9998 90.3496 46.8297 89.8568 46.4895C89.364 46.1499 88.979 45.637 88.7018 44.9527C88.4239 44.2684 88.2856 43.4287 88.2856 42.4337C88.2856 41.4475 88.4283 40.6142 88.7142 39.9338C89.0002 39.2533 89.3889 38.7436 89.8823 38.4034C90.3751 38.0638 90.9321 37.8931 91.5532 37.8931L91.5526 37.8943ZM106.268 38.06V46.8342H105.113V38.06H106.268ZM123.082 38.06L122.946 39.0288H120.847V46.8342H119.691V39.0288H117.529V38.06H123.082V38.06ZM139.363 38.06L136.902 43.4543V46.8342H135.735V43.4671L133.275 38.0593H134.518L136.344 42.4465L138.157 38.0593H139.363V38.06Z",
      fill: "#283D64"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_725_2331",
        x1: "51.6315",
        y1: "7.03673",
        x2: "3.08497",
        y2: "36.2901",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  }),
  LightVertical: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "109",
    height: "113",
    viewBox: "0 0 109 113",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M46.1185 22.3117L42.563 25.4334L35.6834 20.6661L27.9722 40.6084L76.1621 0L87.5834 56.1144L49.961 30.6593L53.7129 27.6647L82.5299 47.5442L73.1042 10.5168L21.144 50.1071L33.5144 13.578L46.1185 22.3117Z",
      fill: "url(#paint0_linear_725_2326)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 91.3703L4.28486 69.9148H4.63932L12.4263 83.4455L19.7714 69.9148H20.1408L24.4548 91.3703H19.7714L18.0223 81.8802L12.4845 92.133H12.1539L6.2079 81.7382L4.39605 91.3703H0ZM37.7534 91.3703V70.5896H50.4617V74.8744H42.5338V78.6316H49.3252V82.8879H42.5338V86.9976H50.5781V91.371H37.7534V91.3703ZM68.8317 91.3703V74.9338H62.2738V70.5896H80.2872V74.9338H73.7584V91.3703H68.8325H68.8317ZM95.32 84.7665H100.741L98.0647 78.2604L95.32 84.7665ZM87.5958 91.3703L98.1228 69.9441H98.434L108.728 91.3703H103.573L102.267 88.3472H93.8917L92.5559 91.3703H87.5965H87.5958Z",
      fill: "#283D64"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M28.0093 101.116C28.5434 101.116 29.0083 101.2 29.404 101.367C29.7997 101.535 30.1902 101.797 30.5755 102.152L29.8636 103.004C29.5773 102.751 29.2924 102.563 29.0105 102.441C28.7286 102.32 28.4199 102.259 28.0837 102.259C27.3124 102.259 26.6995 102.596 26.2443 103.271C25.7891 103.946 25.5622 105.035 25.5622 106.537C25.5622 107.999 25.7898 109.078 26.2443 109.772C26.6987 110.468 27.3124 110.815 28.0837 110.815C28.4697 110.815 28.8007 110.744 29.0774 110.602C29.3541 110.46 29.6561 110.252 29.9827 109.978L30.6796 110.815C29.938 111.597 29.0477 111.988 28.0093 111.988C27.2477 111.988 26.573 111.784 25.9847 111.378C25.3963 110.973 24.9366 110.36 24.6057 109.543C24.2739 108.726 24.1088 107.724 24.1088 106.536C24.1088 105.358 24.2791 104.364 24.6205 103.551C24.9619 102.739 25.4261 102.13 26.0152 101.724C26.6035 101.319 27.2685 101.115 28.0101 101.115L28.0093 101.116ZM45.5781 101.314V111.79H44.1991V101.314H45.5781ZM65.6535 101.314L65.4906 102.471H62.984V111.79H61.6042V102.471H59.0232V101.314H65.6535ZM85.0908 101.314L82.1534 107.754V111.79H80.7596V107.77L77.823 101.313H79.3062L81.4863 106.551L83.6515 101.313H85.0908V101.314Z",
      fill: "#283D64"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_725_2326",
        x1: "81.7304",
        y1: "8.40131",
        x2: "23.7695",
        y2: "43.3275",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  }),
  LightSymbol: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "64",
    height: "53",
    viewBox: "0 0 64 53",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23.9842 21.0734L20.6261 24.0218L14.1283 19.5192L6.84509 38.3547L52.3604 0L63.1478 53L27.6135 28.9577L31.1571 26.1293L58.3748 44.9055L49.4722 9.93314L0.395798 47.3262L12.0797 12.8244L23.9842 21.0734Z",
      fill: "url(#paint0_linear_2271_7991)"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_2271_7991",
        x1: "57.6197",
        y1: "7.93504",
        x2: "2.87565",
        y2: "40.9229",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  }),
  DarkHorizontal: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "160",
    height: "47",
    viewBox: "0 0 160 47",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M21.8039 18.6878L18.8259 21.3024L13.0637 17.3094L6.60505 34.0126L46.9676 0L56.5339 47L25.0223 25.6795L28.1647 23.1712L52.3012 39.8218L44.4065 8.80863L0.885864 41.9685L11.2471 11.3726L21.8039 18.6878Z",
      fill: "url(#paint0_linear_725_2331)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M68.0928 29.7313L71.6817 11.7607H71.9786L78.5007 23.0937L84.6529 11.7607H84.9622L88.5755 29.7313H84.6529L83.1878 21.7827L78.5495 30.3702H78.2726L73.2924 21.6637L71.7748 29.7313H68.0928V29.7313ZM99.7141 29.7313V12.326H110.358V15.9148H103.718V19.0618H109.406V22.6267H103.718V26.0689H110.456V29.732H99.7141V29.7313ZM125.745 29.7313V15.9645H120.252V12.326H135.339V15.9645H129.871V29.7313H125.745H125.745ZM147.93 24.2002H152.471L150.229 18.7508L147.93 24.2002ZM141.461 29.7313L150.278 11.7853H150.539L159.16 29.7313H154.843L153.749 27.1993H146.734L145.615 29.7313H141.461H141.461Z",
      fill: "#FCFCFD"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M91.5526 37.8943C91.9999 37.8943 92.3893 37.9647 92.7207 38.1048C93.0522 38.2448 93.3792 38.4642 93.7019 38.7615L93.1057 39.4759C92.8659 39.2636 92.6273 39.1062 92.3912 39.0039C92.155 38.9022 91.8965 38.8511 91.6149 38.8511C90.9689 38.8511 90.4555 39.1337 90.0742 39.6991C89.693 40.2644 89.503 41.1764 89.503 42.4349C89.503 43.659 89.6936 44.5626 90.0742 45.1446C90.4549 45.7272 90.9689 46.0181 91.6149 46.0181C91.9382 46.0181 92.2155 45.9587 92.4472 45.8397C92.679 45.7208 92.9319 45.5462 93.2054 45.3166L93.7892 46.0181C93.168 46.673 92.4223 46.9998 91.5526 46.9998C90.9147 46.9998 90.3496 46.8297 89.8568 46.4895C89.364 46.1499 88.979 45.637 88.7018 44.9527C88.4239 44.2684 88.2856 43.4287 88.2856 42.4337C88.2856 41.4475 88.4283 40.6142 88.7142 39.9338C89.0002 39.2533 89.3889 38.7436 89.8823 38.4034C90.3751 38.0638 90.9321 37.8931 91.5532 37.8931L91.5526 37.8943ZM106.268 38.06V46.8342H105.113V38.06H106.268ZM123.082 38.06L122.946 39.0288H120.847V46.8342H119.691V39.0288H117.529V38.06H123.082V38.06ZM139.363 38.06L136.902 43.4543V46.8342H135.735V43.4671L133.275 38.0593H134.518L136.344 42.4465L138.157 38.0593H139.363V38.06Z",
      fill: "#FCFCFD"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_725_2331",
        x1: "51.6315",
        y1: "7.03673",
        x2: "3.08497",
        y2: "36.2901",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  }),
  DarkVertical: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "110",
    height: "113",
    viewBox: "0 0 110 113",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M46.2908 22.3951L42.722 25.5284L35.8168 20.7433L28.0768 40.7601L76.4466 0L87.9106 56.3239L50.1477 30.7738L53.9135 27.768L82.8382 47.7218L73.3773 10.5561L21.223 50.2942L33.6397 13.6287L46.2908 22.3951Z",
      fill: "url(#paint0_linear_725_2336)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 91.7116L4.30086 70.176H4.65665L12.4727 83.7572L19.8453 70.176H20.216L24.5461 91.7116H19.8453L18.0896 82.1861L12.5311 92.4772H12.1993L6.23109 82.0436L4.41247 91.7116H0ZM37.8944 91.7116V70.8534H50.6502V75.1541H42.6926V78.9254H49.5094V83.1976H42.6926V87.3226H50.767V91.7124H37.8944V91.7116ZM69.0888 91.7116V75.2137H62.5064V70.8534H80.587V75.2137H74.0338V91.7116H69.0895H69.0888ZM95.6759 85.0832H101.118L98.4309 78.5528L95.6759 85.0832ZM87.9229 91.7116L98.4893 70.2055H98.8016L109.134 91.7116H103.96L102.649 88.6772H94.2424L92.9016 91.7116H87.9236H87.9229Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M28.114 101.494C28.6501 101.494 29.1167 101.578 29.5139 101.746C29.911 101.914 30.303 102.177 30.6897 102.533L29.9752 103.389C29.6878 103.135 29.4019 102.946 29.1189 102.824C28.836 102.702 28.5261 102.64 28.1887 102.64C27.4145 102.64 26.7993 102.979 26.3424 103.657C25.8855 104.334 25.6577 105.427 25.6577 106.935C25.6577 108.402 25.8862 109.485 26.3424 110.183C26.7985 110.881 27.4145 111.229 28.1887 111.229C28.5761 111.229 28.9084 111.158 29.1861 111.016C29.4638 110.873 29.767 110.664 30.0947 110.389L30.7943 111.229C30.0499 112.014 29.1562 112.406 28.114 112.406C27.3495 112.406 26.6724 112.202 26.0818 111.794C25.4913 111.387 25.0299 110.773 24.6976 109.953C24.3647 109.133 24.1989 108.126 24.1989 106.934C24.1989 105.752 24.3699 104.753 24.7126 103.938C25.0552 103.123 25.5211 102.512 26.1124 102.104C26.703 101.697 27.3704 101.492 28.1148 101.492L28.114 101.494ZM45.7484 101.692V112.207H44.3642V101.692H45.7484ZM65.8988 101.692L65.7353 102.854H63.2193V112.207H61.8344V102.854H59.2437V101.692H65.8988ZM85.4086 101.692L82.4603 108.157V112.207H81.0612V108.172L78.1137 101.692H79.6024L81.7906 106.949L83.964 101.692H85.4086V101.692Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_725_2336",
        x1: "82.0357",
        y1: "8.43268",
        x2: "23.8584",
        y2: "43.4893",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  }),
  DarkSymbol: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "64",
    height: "53",
    viewBox: "0 0 64 53",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23.9841 21.0734L20.626 24.0218L14.1282 19.5192L6.84505 38.3547L52.3603 0L63.1478 53L27.6134 28.9577L31.1571 26.1293L58.3747 44.9055L49.4722 9.93314L0.395752 47.3262L12.0797 12.8244L23.9841 21.0734Z",
      fill: "url(#paint0_linear_725_2341)"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "paint0_linear_725_2341",
        x1: "57.6196",
        y1: "7.93504",
        x2: "2.8756",
        y2: "40.9229",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  })
};
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
;// CONCATENATED MODULE: ./src/shared/ElementsBase/logo/Logo.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Logo({
  mode,
  size,
  style,
  className
}) {
  return /*#__PURE__*/_jsx("div", {
    className: classNames("LogoMetaCity", className),
    style: _objectSpread({}, style),
    children: LogoSymbol[`${mode}${size}`]
  });
}

/* harmony default export */ const logo_Logo = ((/* unused pure expression or super */ null && (Logo)));

/***/ }),

/***/ 3068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MetaLogo_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7629);
/* harmony import */ var _MetaLogo_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MetaLogo_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const MetaLogo = ({
  type = 'vertical',
  shapeColor = 'url(#paint0_linear_725_2326)',
  textColor = 'var(--undefind-2)',
  className = ''
}) => {
  const horizontal = type === 'horizontal';
  const vertical = type === 'vertical';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "109",
    height: "113",
    viewBox: "0 0 109 113",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      [(_MetaLogo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().horizontal)]: horizontal
    }, {
      [(_MetaLogo_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vertical)]: vertical
    }, {
      [className]: className
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M46.1185 22.3117L42.563 25.4334L35.6834 20.6661L27.9722 40.6084L76.1621 0L87.5834 56.1144L49.961 30.6593L53.7129 27.6647L82.5299 47.5442L73.1042 10.5168L21.144 50.1071L33.5144 13.578L46.1185 22.3117Z",
      fill: shapeColor
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M0 91.3703L4.28486 69.9148H4.63932L12.4263 83.4455L19.7714 69.9148H20.1408L24.4548 91.3703H19.7714L18.0223 81.8802L12.4845 92.133H12.1539L6.2079 81.7382L4.39605 91.3703H0ZM37.7534 91.3703V70.5896H50.4617V74.8744H42.5338V78.6316H49.3252V82.8879H42.5338V86.9976H50.5781V91.371H37.7534V91.3703ZM68.8317 91.3703V74.9338H62.2738V70.5896H80.2872V74.9338H73.7584V91.3703H68.8325H68.8317ZM95.32 84.7665H100.741L98.0647 78.2604L95.32 84.7665ZM87.5958 91.3703L98.1228 69.9441H98.434L108.728 91.3703H103.573L102.267 88.3472H93.8917L92.5559 91.3703H87.5965H87.5958Z",
      fill: textColor
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M28.0093 101.116C28.5434 101.116 29.0083 101.2 29.404 101.367C29.7997 101.535 30.1902 101.797 30.5755 102.152L29.8636 103.004C29.5773 102.751 29.2924 102.563 29.0105 102.441C28.7286 102.32 28.4199 102.259 28.0837 102.259C27.3124 102.259 26.6995 102.596 26.2443 103.271C25.7891 103.946 25.5622 105.035 25.5622 106.537C25.5622 107.999 25.7898 109.078 26.2443 109.772C26.6987 110.468 27.3124 110.815 28.0837 110.815C28.4697 110.815 28.8007 110.744 29.0774 110.602C29.3541 110.46 29.6561 110.252 29.9827 109.978L30.6796 110.815C29.938 111.597 29.0477 111.988 28.0093 111.988C27.2477 111.988 26.573 111.784 25.9847 111.378C25.3963 110.973 24.9366 110.36 24.6057 109.543C24.2739 108.726 24.1088 107.724 24.1088 106.536C24.1088 105.358 24.2791 104.364 24.6205 103.551C24.9619 102.739 25.4261 102.13 26.0152 101.724C26.6035 101.319 27.2685 101.115 28.0101 101.115L28.0093 101.116ZM45.5781 101.314V111.79H44.1991V101.314H45.5781ZM65.6535 101.314L65.4906 102.471H62.984V111.79H61.6042V102.471H59.0232V101.314H65.6535ZM85.0908 101.314L82.1534 107.754V111.79H80.7596V107.77L77.823 101.313H79.3062L81.4863 106.551L83.6515 101.313H85.0908V101.314Z",
      fill: textColor
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("linearGradient", {
        id: "paint0_linear_725_2326",
        x1: "81.7304",
        y1: "8.40131",
        x2: "23.7695",
        y2: "43.3275",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          stopColor: "#F72585"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("stop", {
          offset: "1",
          stopColor: "#480CA8"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaLogo);

/***/ }),

/***/ 1229:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Service = ({
  title,
  iconRight: IconRight,
  className,
  children
}) => {
  const {
    0: active,
    1: setActive
  } = useState(false);
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(classes.service, {
      [classes.active]: active
    }, className),
    onClick: () => setActive(!active),
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.right,
      children: [IconRight && /*#__PURE__*/_jsx("span", {
        className: classNames({
          [classes.active]: active
        }),
        children: /*#__PURE__*/_jsx(IconRight, {
          color: "#fff"
        })
      }), /*#__PURE__*/_jsx("p", {
        className: "Body_1-bold",
        children: title
      })]
    }), children]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Service)));

/***/ }),

/***/ 3467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ StatusSingleInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2047);
/* harmony import */ var _SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable react/display-name */





let StatusSingleInput;

(function (StatusSingleInput) {
  StatusSingleInput["DEFAULT"] = "default";
  StatusSingleInput["SENDING"] = "sending";
  StatusSingleInput["SUCCESS"] = "success";
  StatusSingleInput["ERROR"] = "error";
})(StatusSingleInput || (StatusSingleInput = {}));

const SingleInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  mode = "light",
  status,
  type,
  name,
  placeholder,
  errorMessage,
  value,
  onChange,
  onClear,
  className,
  setEmail,
  handleSubmit,
  handleEnter,
  stateInput
}, ref) => {
  const configStyle = {
    default: {
      borderColor: "",
      icon: "/icon/arrow-right-light.svg",
      bgIcon: "var(--primary-1)",
      spin: false
    },
    sending: {
      borderColor: "var(--primary-1)",
      icon: "/icon/loading-light.svg",
      bgIcon: "var(--primary-1)",
      spin: true
    },
    success: {
      borderColor: "var(--primary-4)",
      icon: "/icon/check-light.svg",
      bgIcon: "var(--primary-4)",
      spin: false
    },
    error: {
      borderColor: "var(--primary-3)",
      icon: "/icon/arrow-right-dark.svg",
      bgIcon: "var(--neutrals-5)",
      spin: false
    }
  };
  const style = configStyle[status || StatusSingleInput.DEFAULT];
  const modeClass = mode === "dark" ? (_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().darkMode) : "";
  const inputName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  function handleChangeInput(e) {
    inputName.current = e.target.value; // console.log("==== e.target",inputName.current);
    // onChange(e.target.value, name);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container), {
      [(_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error)]: errorMessage
    }, {
      [modeClass]: modeClass
    }, className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
      className: "Caption",
      style: {
        borderColor: style.borderColor
      },
      type: type,
      name: name,
      placeholder: placeholder // value={value}
      ,
      disabled: stateInput,
      onChange: handleChangeInput,
      onKeyDown: event => handleEnter(event, inputName.current),
      ref: inputName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().groupIcons),
      children: [status === "error" && value && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconLeft),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: "./images/close.svg",
          alt: "",
          onClick: onClear
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: (_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconRight),
        style: {
          backgroundColor: style.bgIcon
        },
        onClick: () => {
          handleSubmit(inputName.current);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: style.icon,
          alt: "",
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
            [(_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().spinner)]: style.spin
          })
        })
      })]
    }), errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("Caption_2-bold", (_SingleInput_module_scss__WEBPACK_IMPORTED_MODULE_3___default().errorInput)),
      children: errorMessage
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleInput);

/***/ }),

/***/ 7449:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Toggle = ({
  title,
  placement = "top",
  moreButton,
  children,
  className
}) => {
  const configStyle = {
    top: {
      paddingTop: 16,
      paddingBottom: 25,
      borderBottom: `1px solid var(--neutrals-6)`
    },
    bottom: {
      paddingTop: 25,
      paddingBottom: 16,
      borderTop: `1px solid var(--neutrals-6)`
    }
  };
  const contentRef = useRef(null);
  const contentOverRef = useRef(null);
  const {
    0: expand,
    1: setExpand
  } = useState(false);
  useEffect(() => {
    if (contentOverRef.current && contentRef.current) {
      expand ? gsap.to(contentOverRef.current, {
        height: contentRef.current.offsetHeight,
        duration: 1,
        ease: Power4.easeInOut
      }) : gsap.to(contentOverRef.current, {
        height: 0,
        duration: 1,
        ease: Power4.easeInOut
      });
    }
  }, [expand]);
  const style = configStyle[placement];
  const placementTop = placement === "top";
  const num = expand ? '02' : '01';
  const marginLeft = placementTop ? 32 : 0;
  const srcTop = expand ? './icon/arrow-up-dark.svg' : './icon/arrow-down-dark.svg';
  const scrBotom = expand ? './icon/minus-square-dark.svg' : './icon/plus-square-dark.svg';
  const paddingLeft = placementTop ? 48 : 0;
  return /*#__PURE__*/_jsxs("div", {
    className: classNames(className),
    children: [/*#__PURE__*/_jsxs("div", {
      className: classes.title,
      style: style,
      onClick: () => setExpand(!expand),
      children: [/*#__PURE__*/_jsxs("div", {
        className: classes.titleLeft,
        children: [placementTop && /*#__PURE__*/_jsx("span", {
          className: "Body_2-bold",
          children: num
        }), /*#__PURE__*/_jsx("h6", {
          className: "Body_2-bold",
          style: {
            marginLeft: marginLeft
          },
          children: title
        })]
      }), placementTop && /*#__PURE__*/_jsx("img", {
        src: srcTop,
        alt: ""
      }), placement === "bottom" && /*#__PURE__*/_jsx("img", {
        src: scrBotom,
        alt: ""
      })]
    }), /*#__PURE__*/_jsx("div", {
      ref: contentOverRef,
      className: classes.contentOver,
      children: /*#__PURE__*/_jsxs("div", {
        ref: contentRef,
        className: classes.content,
        style: {
          paddingLeft: paddingLeft
        },
        children: [children, moreButton && /*#__PURE__*/_jsx("a", {
          className: classNames('Button_2', classes.moreBtn),
          children: "Learn more"
        })]
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Toggle)));

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ urlIcon),
/* harmony export */   "gZ": () => (/* binding */ iconMetaHeader),
/* harmony export */   "mt": () => (/* binding */ iconMetaHeaderLarge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const iconMetaHeader = [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "22",
  height: "24",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M18.8889 0H1.11111C0.816426 0 0.533811 0.117063 0.325437 0.325437C0.117063 0.533811 0 0.816426 0 1.11111V18.8889C0 19.1836 0.117063 19.4662 0.325437 19.6746C0.533811 19.8829 0.816426 20 1.11111 20H18.8889C19.1836 20 19.4662 19.8829 19.6746 19.6746C19.8829 19.4662 20 19.1836 20 18.8889V1.11111C20 0.816426 19.8829 0.533811 19.6746 0.325437C19.4662 0.117063 19.1836 0 18.8889 0ZM16.6156 4.73889L15.5422 5.76667C15.4969 5.80124 15.4619 5.84762 15.4411 5.90072C15.4204 5.95382 15.4146 6.01161 15.4244 6.06778V13.6244C15.4146 13.6806 15.4204 13.7384 15.4411 13.7915C15.4619 13.8446 15.4969 13.891 15.5422 13.9256L16.5889 14.9544V15.1811H11.3211V14.9544L12.4067 13.9011C12.5144 13.7944 12.5144 13.7622 12.5144 13.6V7.49111L9.49667 15.1533H9.08778L5.57556 7.49111V12.6267C5.56169 12.7334 5.57207 12.8419 5.60593 12.944C5.63978 13.0462 5.69625 13.1394 5.77111 13.2167L7.18333 14.9289V15.1544H3.17889V14.9289L4.59111 13.2167C4.66544 13.1394 4.72064 13.0458 4.75228 12.9433C4.78393 12.8409 4.79114 12.7324 4.77333 12.6267V6.68889C4.78164 6.60761 4.77068 6.52551 4.74134 6.44926C4.71199 6.37301 4.6651 6.30474 4.60444 6.25L3.34889 4.73889V4.51333H7.24445L10.2556 11.1167L12.9022 4.51333H16.6167V4.73889H16.6156Z"
  })
}, "md"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28389 19.7706C1.85051 19.5631 2.01991 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C2.58355 15.1945 1.64925 8.4995 2.62224 5.00719C2.73648 4.59713 3.26961 4.59499 3.4845 4.96246C5.14598 7.80371 8.30515 9.39003 12.2645 9.02396C12.0932 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0146 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8928 4.65815C22.3207 4.59703 22.6193 5.07087 22.3796 5.43047L20.9999 7.5Z"
  })
}, "tw"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 17.5225 17.5225 22 12 22C6.4775 22 2 17.5225 2 12C2 6.4775 6.4775 2 12 2C17.5225 2 22 6.4775 22 12ZM12.3583 9.3825C11.3858 9.78667 9.44167 10.6242 6.52667 11.8942C6.05333 12.0825 5.805 12.2667 5.7825 12.4467C5.74417 12.7517 6.12583 12.8717 6.64417 13.0342C6.715 13.0567 6.78833 13.0792 6.86333 13.1042C7.37417 13.27 8.06083 13.4642 8.4175 13.4717C8.74167 13.4783 9.10333 13.345 9.5025 13.0717C12.2258 11.2325 13.6317 10.3033 13.72 10.2833C13.7825 10.2692 13.8692 10.2508 13.9275 10.3033C13.9858 10.355 13.98 10.4533 13.9742 10.48C13.9358 10.6408 12.4408 12.0317 11.6658 12.7517C11.4242 12.9758 11.2533 13.135 11.2183 13.1717C11.14 13.2525 11.06 13.33 10.9833 13.4042C10.5083 13.8608 10.1533 14.2042 11.0033 14.7642C11.4117 15.0333 11.7383 15.2558 12.0642 15.4775C12.42 15.72 12.775 15.9617 13.235 16.2633C13.3517 16.34 13.4633 16.4192 13.5725 16.4967C13.9867 16.7925 14.3592 17.0575 14.8192 17.0158C15.0858 16.9908 15.3625 16.74 15.5025 15.9908C15.8333 14.2192 16.485 10.3825 16.6358 8.80083C16.645 8.66951 16.6394 8.53757 16.6192 8.4075C16.607 8.30244 16.5559 8.20578 16.4758 8.13667C16.3567 8.03917 16.1717 8.01833 16.0883 8.02C15.7125 8.02667 15.1358 8.2275 12.3583 9.3825Z"
  })
}, "tl"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M19.6238 5.32698C18.2214 4.71369 16.7181 4.26038 15.146 4.00262C15.132 4.00002 15.1175 4.0017 15.1046 4.00743C15.0916 4.01316 15.0808 4.02266 15.0736 4.03462C14.8811 4.3626 14.6666 4.79013 14.5163 5.12788C12.849 4.88633 11.154 4.88633 9.4867 5.12788C9.31926 4.75356 9.13044 4.38857 8.92113 4.03462C8.91403 4.02252 8.9033 4.0128 8.89036 4.00676C8.87742 4.00073 8.86289 3.99866 8.84871 4.00084C7.27759 4.25861 5.7743 4.71191 4.37093 5.32609C4.35885 5.331 4.34862 5.33938 4.34159 5.35009C1.48901 9.41649 0.707116 13.3825 1.09119 17.2986C1.09226 17.3082 1.09533 17.3175 1.10021 17.3259C1.1051 17.3343 1.1117 17.3417 1.1196 17.3475C2.78458 18.5229 4.64164 19.4183 6.61303 19.9962C6.62677 20.0003 6.64147 20.0003 6.65521 19.9962C6.66894 19.9921 6.68108 19.984 6.69003 19.9731C7.11424 19.423 7.49016 18.8394 7.81383 18.2284C7.81832 18.22 7.82091 18.2108 7.82142 18.2014C7.82193 18.192 7.82035 18.1826 7.81679 18.1738C7.81322 18.1651 7.80776 18.1571 7.80076 18.1506C7.79377 18.1441 7.78541 18.139 7.77624 18.1359C7.1841 17.9197 6.61036 17.6588 6.06029 17.3555C6.05041 17.3501 6.04208 17.3423 6.03606 17.3329C6.03003 17.3236 6.02649 17.3129 6.02577 17.3019C6.02504 17.2909 6.02714 17.2799 6.03189 17.2698C6.03664 17.2598 6.04388 17.2511 6.05296 17.2444C6.16846 17.1618 6.28395 17.0755 6.39395 16.9893C6.40385 16.9816 6.41578 16.9766 6.4284 16.9751C6.44103 16.9735 6.45385 16.9754 6.46545 16.9804C10.0651 18.5483 13.9636 18.5483 17.521 16.9804C17.5327 16.9751 17.5456 16.973 17.5584 16.9744C17.5712 16.9758 17.5834 16.9807 17.5935 16.9884C17.7035 17.0755 17.818 17.1618 17.9345 17.2444C17.9436 17.2509 17.951 17.2595 17.9559 17.2695C17.9608 17.2794 17.9631 17.2904 17.9625 17.3014C17.962 17.3124 17.9586 17.3231 17.9528 17.3326C17.9469 17.342 17.9387 17.3499 17.929 17.3555C17.3808 17.6613 16.8106 17.9199 16.2121 18.135C16.2029 18.1383 16.1945 18.1434 16.1875 18.15C16.1805 18.1566 16.1751 18.1646 16.1715 18.1734C16.1679 18.1823 16.1664 18.1917 16.1669 18.2012C16.1674 18.2107 16.17 18.2199 16.1745 18.2284C16.5045 18.839 16.8821 19.4203 17.2974 19.9722C17.306 19.9836 17.318 19.992 17.3318 19.9965C17.3456 20.0009 17.3605 20.0012 17.3744 19.9971C19.3491 19.4208 21.2092 18.525 22.8761 17.3475C22.8842 17.342 22.891 17.3349 22.8961 17.3266C22.9011 17.3183 22.9043 17.3091 22.9054 17.2995C23.3637 12.7718 22.1372 8.83786 19.6522 5.35187C19.6461 5.34054 19.6361 5.33171 19.6238 5.32698ZM8.3519 14.9139C7.26843 14.9139 6.3747 13.9637 6.3747 12.7985C6.3747 11.6323 7.25101 10.6831 8.3519 10.6831C9.46103 10.6831 10.3465 11.6403 10.3291 12.7985C10.3291 13.9646 9.45278 14.9139 8.3519 14.9139ZM15.6621 14.9139C14.5777 14.9139 13.6849 13.9637 13.6849 12.7985C13.6849 11.6323 14.5603 10.6831 15.6621 10.6831C16.7712 10.6831 17.6567 11.6403 17.6393 12.7985C17.6393 13.9646 16.7722 14.9139 15.6621 14.9139Z"
  })
}, "dc")];
const iconMetaHeaderLarge = [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "32",
  height: "34",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M18.8889 0H1.11111C0.816426 0 0.533811 0.117063 0.325437 0.325437C0.117063 0.533811 0 0.816426 0 1.11111V18.8889C0 19.1836 0.117063 19.4662 0.325437 19.6746C0.533811 19.8829 0.816426 20 1.11111 20H18.8889C19.1836 20 19.4662 19.8829 19.6746 19.6746C19.8829 19.4662 20 19.1836 20 18.8889V1.11111C20 0.816426 19.8829 0.533811 19.6746 0.325437C19.4662 0.117063 19.1836 0 18.8889 0ZM16.6156 4.73889L15.5422 5.76667C15.4969 5.80124 15.4619 5.84762 15.4411 5.90072C15.4204 5.95382 15.4146 6.01161 15.4244 6.06778V13.6244C15.4146 13.6806 15.4204 13.7384 15.4411 13.7915C15.4619 13.8446 15.4969 13.891 15.5422 13.9256L16.5889 14.9544V15.1811H11.3211V14.9544L12.4067 13.9011C12.5144 13.7944 12.5144 13.7622 12.5144 13.6V7.49111L9.49667 15.1533H9.08778L5.57556 7.49111V12.6267C5.56169 12.7334 5.57207 12.8419 5.60593 12.944C5.63978 13.0462 5.69625 13.1394 5.77111 13.2167L7.18333 14.9289V15.1544H3.17889V14.9289L4.59111 13.2167C4.66544 13.1394 4.72064 13.0458 4.75228 12.9433C4.78393 12.8409 4.79114 12.7324 4.77333 12.6267V6.68889C4.78164 6.60761 4.77068 6.52551 4.74134 6.44926C4.71199 6.37301 4.6651 6.30474 4.60444 6.25L3.34889 4.73889V4.51333H7.24445L10.2556 11.1167L12.9022 4.51333H16.6167V4.73889H16.6156Z"
  })
}, "md"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "34",
  height: "34",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28389 19.7706C1.85051 19.5631 2.01991 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C2.58355 15.1945 1.64925 8.4995 2.62224 5.00719C2.73648 4.59713 3.26961 4.59499 3.4845 4.96246C5.14598 7.80371 8.30515 9.39003 12.2645 9.02396C12.0932 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0146 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8928 4.65815C22.3207 4.59703 22.6193 5.07087 22.3796 5.43047L20.9999 7.5Z"
  })
}, "tw"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "34",
  height: "34",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12C22 17.5225 17.5225 22 12 22C6.4775 22 2 17.5225 2 12C2 6.4775 6.4775 2 12 2C17.5225 2 22 6.4775 22 12ZM12.3583 9.3825C11.3858 9.78667 9.44167 10.6242 6.52667 11.8942C6.05333 12.0825 5.805 12.2667 5.7825 12.4467C5.74417 12.7517 6.12583 12.8717 6.64417 13.0342C6.715 13.0567 6.78833 13.0792 6.86333 13.1042C7.37417 13.27 8.06083 13.4642 8.4175 13.4717C8.74167 13.4783 9.10333 13.345 9.5025 13.0717C12.2258 11.2325 13.6317 10.3033 13.72 10.2833C13.7825 10.2692 13.8692 10.2508 13.9275 10.3033C13.9858 10.355 13.98 10.4533 13.9742 10.48C13.9358 10.6408 12.4408 12.0317 11.6658 12.7517C11.4242 12.9758 11.2533 13.135 11.2183 13.1717C11.14 13.2525 11.06 13.33 10.9833 13.4042C10.5083 13.8608 10.1533 14.2042 11.0033 14.7642C11.4117 15.0333 11.7383 15.2558 12.0642 15.4775C12.42 15.72 12.775 15.9617 13.235 16.2633C13.3517 16.34 13.4633 16.4192 13.5725 16.4967C13.9867 16.7925 14.3592 17.0575 14.8192 17.0158C15.0858 16.9908 15.3625 16.74 15.5025 15.9908C15.8333 14.2192 16.485 10.3825 16.6358 8.80083C16.645 8.66951 16.6394 8.53757 16.6192 8.4075C16.607 8.30244 16.5559 8.20578 16.4758 8.13667C16.3567 8.03917 16.1717 8.01833 16.0883 8.02C15.7125 8.02667 15.1358 8.2275 12.3583 9.3825Z"
  })
}, "tl"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
  width: "34",
  height: "34",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M19.6238 5.32698C18.2214 4.71369 16.7181 4.26038 15.146 4.00262C15.132 4.00002 15.1175 4.0017 15.1046 4.00743C15.0916 4.01316 15.0808 4.02266 15.0736 4.03462C14.8811 4.3626 14.6666 4.79013 14.5163 5.12788C12.849 4.88633 11.154 4.88633 9.4867 5.12788C9.31926 4.75356 9.13044 4.38857 8.92113 4.03462C8.91403 4.02252 8.9033 4.0128 8.89036 4.00676C8.87742 4.00073 8.86289 3.99866 8.84871 4.00084C7.27759 4.25861 5.7743 4.71191 4.37093 5.32609C4.35885 5.331 4.34862 5.33938 4.34159 5.35009C1.48901 9.41649 0.707116 13.3825 1.09119 17.2986C1.09226 17.3082 1.09533 17.3175 1.10021 17.3259C1.1051 17.3343 1.1117 17.3417 1.1196 17.3475C2.78458 18.5229 4.64164 19.4183 6.61303 19.9962C6.62677 20.0003 6.64147 20.0003 6.65521 19.9962C6.66894 19.9921 6.68108 19.984 6.69003 19.9731C7.11424 19.423 7.49016 18.8394 7.81383 18.2284C7.81832 18.22 7.82091 18.2108 7.82142 18.2014C7.82193 18.192 7.82035 18.1826 7.81679 18.1738C7.81322 18.1651 7.80776 18.1571 7.80076 18.1506C7.79377 18.1441 7.78541 18.139 7.77624 18.1359C7.1841 17.9197 6.61036 17.6588 6.06029 17.3555C6.05041 17.3501 6.04208 17.3423 6.03606 17.3329C6.03003 17.3236 6.02649 17.3129 6.02577 17.3019C6.02504 17.2909 6.02714 17.2799 6.03189 17.2698C6.03664 17.2598 6.04388 17.2511 6.05296 17.2444C6.16846 17.1618 6.28395 17.0755 6.39395 16.9893C6.40385 16.9816 6.41578 16.9766 6.4284 16.9751C6.44103 16.9735 6.45385 16.9754 6.46545 16.9804C10.0651 18.5483 13.9636 18.5483 17.521 16.9804C17.5327 16.9751 17.5456 16.973 17.5584 16.9744C17.5712 16.9758 17.5834 16.9807 17.5935 16.9884C17.7035 17.0755 17.818 17.1618 17.9345 17.2444C17.9436 17.2509 17.951 17.2595 17.9559 17.2695C17.9608 17.2794 17.9631 17.2904 17.9625 17.3014C17.962 17.3124 17.9586 17.3231 17.9528 17.3326C17.9469 17.342 17.9387 17.3499 17.929 17.3555C17.3808 17.6613 16.8106 17.9199 16.2121 18.135C16.2029 18.1383 16.1945 18.1434 16.1875 18.15C16.1805 18.1566 16.1751 18.1646 16.1715 18.1734C16.1679 18.1823 16.1664 18.1917 16.1669 18.2012C16.1674 18.2107 16.17 18.2199 16.1745 18.2284C16.5045 18.839 16.8821 19.4203 17.2974 19.9722C17.306 19.9836 17.318 19.992 17.3318 19.9965C17.3456 20.0009 17.3605 20.0012 17.3744 19.9971C19.3491 19.4208 21.2092 18.525 22.8761 17.3475C22.8842 17.342 22.891 17.3349 22.8961 17.3266C22.9011 17.3183 22.9043 17.3091 22.9054 17.2995C23.3637 12.7718 22.1372 8.83786 19.6522 5.35187C19.6461 5.34054 19.6361 5.33171 19.6238 5.32698ZM8.3519 14.9139C7.26843 14.9139 6.3747 13.9637 6.3747 12.7985C6.3747 11.6323 7.25101 10.6831 8.3519 10.6831C9.46103 10.6831 10.3465 11.6403 10.3291 12.7985C10.3291 13.9646 9.45278 14.9139 8.3519 14.9139ZM15.6621 14.9139C14.5777 14.9139 13.6849 13.9637 13.6849 12.7985C13.6849 11.6323 14.5603 10.6831 15.6621 10.6831C16.7712 10.6831 17.6567 11.6403 17.6393 12.7985C17.6393 13.9646 16.7722 14.9139 15.6621 14.9139Z"
  })
}, "dc")];
const urlIcon = ["https://medium.com/metacity-official", "https://twitter.com/metacityB2E", "http://t.me/metacity", "https://discord.com/invite/metacity"];

/***/ }),

/***/ 7629:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 2047:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "SingleInput_container__g9VJg",
	"groupIcons": "SingleInput_groupIcons__WCSID",
	"iconLeft": "SingleInput_iconLeft__vhLzl",
	"spinner": "SingleInput_spinner__REEvf",
	"loading": "SingleInput_loading__1eQnG",
	"errorInput": "SingleInput_errorInput__cEnN7",
	"darkMode": "SingleInput_darkMode__eAvT7"
};


/***/ })

};
;