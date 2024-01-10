"use strict";
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 8740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 //Định nghĩa các props của component





const NewsText = props => {
  const {
    data,
    //dât để lấy dữ liệu từ api render ra giao diện
    Revert,
    // Revert: Đổi vị trí trên dưới của author và descrition
    ContentWidth,
    //ContentWidth: set lại độ dài của cả vùng content News text
    header_display,
    //header_display: ẩn hiện header
    title_margin_bottom,
    //title_margin_bottom: đặt giá trị margin-bottom cho title
    titleAg,
    //titleAg: set lại class text cho title
    author_hide,
    //author_hide:Ẩn hiện cụm thòn tin tác giả
    author_margin_top,
    //author_margin_top: đặt giá trị margin-top cho cụm author
    author_margin_bottom,
    //author_margin_bottom: đặt giá trị margin-bottom cho cụm author
    decsAg //decsAg: set lại class text cho décrition

  } = props; //set giá trị để inline style

  const styles = {
    flex_direction: Revert ? "column-reverse" : "column",
    content_width: ContentWidth ? ContentWidth : "100%",
    header: header_display ? "block" : "none",
    author: author_hide ? "none" : "flex",
    titleBottom: title_margin_bottom,
    authorTop: author_margin_top,
    titleAg: titleAg ? titleAg : "Headline_4",
    author_margin_bottom: author_margin_bottom,
    decsAg: decsAg ? decsAg : "Paragraph_Large_Regular"
  }; //handleRedirectDetail: Hàm để chuyển url sang trang detail

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  function handleRedirectDetail(val) {
    // console.log("router la:", router.pathname);
    router.push(`/news/detail?id=${val}`);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "News_container",
      style: {
        width: styles.content_width || "auto"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "Hairline_1 News_header",
        style: {
          display: styles.header
        },
        children: data.header
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: `${styles.titleAg} News_title`,
        style: {
          marginBottom: styles.titleBottom
        },
        onClick: () => handleRedirectDetail(data.id),
        children: data.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "NewsContent",
        style: {
          flexDirection: styles.flex_direction
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: `${styles.decsAg} News_describe`,
          children: data.desc ? data.desc : ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "Author",
          style: {
            display: styles.author,
            marginTop: styles.authorTop,
            marginBottom: styles.author_margin_bottom
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "Author_avatar",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              className: "Author_img",
              src: data.imgAuthor ? data.imgAuthor : "",
              alt: "Img author"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "Author_text",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
              className: "Caption-bold Author_name",
              children: data.authorName ? data.authorName : ""
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "Caption Sub_info",
              children: [data.publish ? data.publish : "", " \u2022", " ", data.ReadTime ? data.ReadTime : "", " read", " "]
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsText);

/***/ }),

/***/ 4148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const LoadingMeta = ({
  status
}) => {
  const display = status ? {
    display: "block"
  } : {
    display: "none"
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "loadingMeta",
    style: display,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "loadingMeta-ring",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingMeta);

/***/ }),

/***/ 1328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Variant1_2_Variant1_2)
});

// EXTERNAL MODULE: ./src/shared/ElementsBase/NewsText/NewsText.tsx
var NewsText = __webpack_require__(8740);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/shared/news/Variant1_2/Variant1_2Element.tsx




function Variant1_2Element(props) {
  const {
    data,
    handleRedirectDetail
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "Variant1_2Element_container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "variant1_2_img variant_img",
      style: {
        backgroundImage: data.backgroundImage ? data.backgroundImage : ""
      },
      onClick: () => handleRedirectDetail(data.id)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "variant1_2_content",
      children: /*#__PURE__*/jsx_runtime_.jsx(NewsText/* default */.Z, {
        data: data,
        decsAg: "Body_2",
        titleAg: "Body_1-bold"
      })
    })]
  });
}

/* harmony default export */ const Variant1_2_Variant1_2Element = (Variant1_2Element);
;// CONCATENATED MODULE: ./src/shared/news/Variant1_2/Variant1_2.tsx



function Variant1_2({
  theme,
  data,
  handleRedirectDetail
}) {
  const Variant1_2Styles = {
    theme: theme
  };
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${Variant1_2Styles.theme} variant_container variant1_2_container`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "Variant1_2_floor1",
        children: data && data.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(Variant1_2_Variant1_2Element, {
            data: item,
            handleRedirectDetail: handleRedirectDetail
          }, index);
        })
      })
    })
  });
}

/* harmony default export */ const Variant1_2_Variant1_2 = (Variant1_2);

/***/ }),

/***/ 3558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Variant3_Variant3)
});

// EXTERNAL MODULE: ./src/shared/ElementsBase/NewsText/NewsText.tsx
var NewsText = __webpack_require__(8740);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/shared/news/Variant3/Variant3Element.tsx





function Variant3Element(props) {
  const {
    data,
    handleRedirectDetail
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: data && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "variant3_post",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "variant3_img variant_img",
        style: {
          backgroundImage: data.backgroundImage ? data.backgroundImage : ""
        },
        onClick: () => handleRedirectDetail(data.id)
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "variant3_content",
        children: /*#__PURE__*/jsx_runtime_.jsx(NewsText/* default */.Z, {
          data: data,
          author_hide: true,
          titleAg: "Body_1-bold",
          decsAg: "Body_2"
        })
      })]
    })
  });
}

/* harmony default export */ const Variant3_Variant3Element = (Variant3Element);
;// CONCATENATED MODULE: ./src/shared/news/Variant3/Variant3.tsx






function Variant3(props) {
  const {
    theme,
    data,
    handleRedirectDetail
  } = props;
  const Variant3Styles = {
    theme: theme
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: data.length !== 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${Variant3Styles.theme} variant_container variant3_container`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "variant3_left",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "variant3_left_img variant_img",
          style: {
            backgroundImage: data[0].backgroundImage ? data[0].backgroundImage : ""
          },
          onClick: () => handleRedirectDetail(data[0].id)
        }), /*#__PURE__*/jsx_runtime_.jsx(NewsText/* default */.Z, {
          data: data[0],
          decsAg: "Body_2"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "line line_phone",
          style: {
            margin: "32px 0px"
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "variant3_right",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Variant3_Variant3Element, {
          data: data[1],
          handleRedirectDetail: handleRedirectDetail
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "line",
          style: {
            margin: "24px 0px"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(Variant3_Variant3Element, {
          data: data[2],
          handleRedirectDetail: handleRedirectDetail
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "line",
          style: {
            margin: "24px 0px"
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(Variant3_Variant3Element, {
          data: data[3],
          handleRedirectDetail: handleRedirectDetail
        })]
      })]
    })
  });
}

/* harmony default export */ const Variant3_Variant3 = (Variant3);

/***/ })

};
;