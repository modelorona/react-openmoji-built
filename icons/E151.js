import React from 'react';

const FrenchPress = ({
  size,
  outline
}) => {
  if (!size) size = '1.7em';

  if (!outline) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M22 16H50V22H23L18 18L22 16Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      "fill-rule": "evenodd",
      d: "M50 21V21.6981V56C50 58.2091 48.2091 60 46 60H26C23.7909 60 22 58.2091 22 56V21.6981V21H50Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M35.5 5C33.567 5 32 6.567 32 8.5C32 9.0368 32.1208 9.54537 32.3368 10H38.6632C38.8792 9.54537 39 9.0368 39 8.5C39 6.567 37.433 5 35.5 5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M34 15.5L37 15.5V26L34 24V15.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      "fill-rule": "evenodd",
      d: "M50 16.5V15C50 13.3431 48.6569 12 47 12H25C23.3431 12 22 13.3431 22 15V16.5H50Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      "fill-rule": "evenodd",
      d: "M50 56H22C22 58.2091 23.7909 60 26 60H46C48.2091 60 50 58.2091 50 56Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      "fill-rule": "evenodd",
      d: "M50 46V50C57.732 50 64 43.732 64 36C64 28.268 57.732 22 50 22V26C55.5228 26 60 30.4772 60 36C60 41.5228 55.5228 46 50 46Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#3F3F3F",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M35.5 5C33.567 5 32 6.567 32 8.5C32 9.0368 32.1208 9.54537 32.3368 10H38.6632C38.8792 9.54537 39 9.0368 39 8.5C39 6.567 37.433 5 35.5 5Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line_2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22 15C22 13.3431 23.3431 12 25 12H47C48.6569 12 50 13.3431 50 15V17V21.9556V24.6444V56C50 58.2091 48.2091 60 46 60H26C23.7909 60 22 58.2091 22 56V21.5L17.5 18L22 15.5V15Z",
      "clip-rule": "evenodd"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M50 50H49V51H50V50ZM50 46V45H49V46H50ZM50 22V21H49V22H50ZM50 26H49V27H50V26ZM51 50V46H49V50H51ZM63 36C63 43.1797 57.1797 49 50 49V51C58.2843 51 65 44.2843 65 36H63ZM50 23C57.1797 23 63 28.8203 63 36H65C65 27.7157 58.2843 21 50 21V23ZM51 26V22H49V26H51ZM50 27C54.9706 27 59 31.0294 59 36H61C61 29.9249 56.0751 25 50 25V27ZM59 36C59 40.9706 54.9706 45 50 45V47C56.0751 47 61 42.0751 61 36H59Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M22 15.5H47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M32.3368 10C32.1208 9.54537 32 9.0368 32 8.5C32 6.567 33.567 5 35.5 5C37.433 5 39 6.567 39 8.5C39 9.0368 38.8792 9.54537 38.6632 10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M34 16L34 24"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37",
      x2: "37",
      y1: "16",
      y2: "26",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "31",
      y1: "22",
      y2: "22",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M40 22H50"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line_2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22 15C22 13.3431 23.3431 12 25 12H47C48.6569 12 50 13.3431 50 15V17V21.9556V24.6444V56C50 58.2091 48.2091 60 46 60H26C23.7909 60 22 58.2091 22 56V21.5L17.5 18L22 15.5V15Z",
      "clip-rule": "evenodd"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M50 50H49V51H50V50ZM50 46V45H49V46H50ZM50 22V21H49V22H50ZM50 26H49V27H50V26ZM51 50V46H49V50H51ZM63 36C63 43.1797 57.1797 49 50 49V51C58.2843 51 65 44.2843 65 36H63ZM50 23C57.1797 23 63 28.8203 63 36H65C65 27.7157 58.2843 21 50 21V23ZM51 26V22H49V26H51ZM50 27C54.9706 27 59 31.0294 59 36H61C61 29.9249 56.0751 25 50 25V27ZM59 36C59 40.9706 54.9706 45 50 45V47C56.0751 47 61 42.0751 61 36H59Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M22 15.5H47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M32.3368 10C32.1208 9.54537 32 9.0368 32 8.5C32 6.567 33.567 5 35.5 5C37.433 5 39 6.567 39 8.5C39 9.0368 38.8792 9.54537 38.6632 10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M34 16L34 24"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37",
      x2: "37",
      y1: "16",
      y2: "26",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "31",
      y1: "22",
      y2: "22",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M40 22H50"
    })));
  }
};

export default FrenchPress;