import React from 'react';

const DripCoffeeMaker = ({
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
      d: "M16.6168 37.555C16.837 36.0864 18.0986 35 19.5836 35H33.4164C34.9014 35 36.163 36.0864 36.3832 37.555L38.4832 51.555C38.7553 53.3688 37.3505 55 35.5164 55H17.4836C15.6495 55 14.2447 53.3688 14.5168 51.555L16.6168 37.555Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M20.7439 35H19.5836C18.0986 35 16.837 36.0864 16.6168 37.555L14.5168 51.555C14.4656 51.8957 14.4737 52.2301 14.5327 52.5483C13.0333 51.8183 12 50.2798 12 48.5V36.5C12 34.0147 14.0147 32 16.5 32C18.4593 32 20.1262 33.2522 20.7439 35Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      "fill-rule": "evenodd",
      d: "M18 55H35C36.6569 55 38 53.6569 38 52V45H15V52C15 53.6569 16.3431 55 18 55Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M13 12C12.4477 12 12 12.4477 12 13V26H43V55H12V59C12 59.5523 12.4477 60 13 60H59C59.5523 60 60 59.5523 60 59V13C60 12.4477 59.5523 12 59 12H13Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "49",
      y: "19",
      rx: "1",
      width: "4",
      height: "20",
      fill: "#D0CFCE"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.5",
      cy: "46.5",
      r: "2.5",
      fill: "#D22F27",
      stroke: "#D0CFCE",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "29",
      width: "19",
      height: "6",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M19.5836 35C18.0986 35 16.837 36.0864 16.6168 37.555L14.5168 51.555C14.4656 51.8957 14.4737 52.2301 14.5327 52.5483C13.0333 51.8183 12 50.2798 12 48.5V36.5C12 34.0147 14.0147 32 16.5 32"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M12 26H11C11 26.5523 11.4477 27 12 27V26ZM43 26H44C44 25.4477 43.5523 25 43 25V26ZM43 55V56C43.5523 56 44 55.5523 44 55H43ZM12 55V54C11.4477 54 11 54.4477 11 55H12ZM13 13V13V11C11.8954 11 11 11.8954 11 13H13ZM13 26V13H11V26H13ZM12 27H43V25H12V27ZM42 26V55H44V26H42ZM43 54H12V56H43V54ZM13 59V55H11V59H13ZM13 59H13H11C11 60.1046 11.8954 61 13 61V59ZM59 59H13V61H59V59ZM59 59V61C60.1046 61 61 60.1046 61 59H59ZM59 13V59H61V13H59ZM59 13H61C61 11.8954 60.1046 11 59 11V13ZM13 13H59V11H13V13Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 26L42.5 26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M40 26V12.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "60",
      y1: "55",
      y2: "55",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M51.5 49C50.1193 49 49 47.8807 49 46.5C49 45.1193 50.1193 44 51.5 44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M16.6168 37.555C16.837 36.0864 18.0986 35 19.5836 35H33.4164C34.9014 35 36.163 36.0864 36.3832 37.555L38.4832 51.555C38.7553 53.3688 37.3505 55 35.5164 55H17.4836C15.6495 55 14.2447 53.3688 14.5168 51.555L16.6168 37.555Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "29",
      width: "19",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      x2: "50",
      y1: "20",
      y2: "38",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 20H52"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 38H52"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 29L52 29"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M19.5836 35C18.0986 35 16.837 36.0864 16.6168 37.555L14.5168 51.555C14.4656 51.8957 14.4737 52.2301 14.5327 52.5483C13.0333 51.8183 12 50.2798 12 48.5V36.5C12 34.0147 14.0147 32 16.5 32"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M12 26H11C11 26.5523 11.4477 27 12 27V26ZM43 26H44C44 25.4477 43.5523 25 43 25V26ZM43 55V56C43.5523 56 44 55.5523 44 55H43ZM12 55V54C11.4477 54 11 54.4477 11 55H12ZM13 13V13V11C11.8954 11 11 11.8954 11 13H13ZM13 26V13H11V26H13ZM12 27H43V25H12V27ZM42 26V55H44V26H42ZM43 54H12V56H43V54ZM13 59V55H11V59H13ZM13 59H13H11C11 60.1046 11.8954 61 13 61V59ZM59 59H13V61H59V59ZM59 59V61C60.1046 61 61 60.1046 61 59H59ZM59 13V59H61V13H59ZM59 13H61C61 11.8954 60.1046 11 59 11V13ZM13 13H59V11H13V13Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 26L42.5 26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M40 26V12.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "60",
      y1: "55",
      y2: "55",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M51.5 49C50.1193 49 49 47.8807 49 46.5C49 45.1193 50.1193 44 51.5 44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M16.6168 37.555C16.837 36.0864 18.0986 35 19.5836 35H33.4164C34.9014 35 36.163 36.0864 36.3832 37.555L38.4832 51.555C38.7553 53.3688 37.3505 55 35.5164 55H17.4836C15.6495 55 14.2447 53.3688 14.5168 51.555L16.6168 37.555Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "17",
      y: "29",
      width: "19",
      height: "6",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50",
      x2: "50",
      y1: "20",
      y2: "38",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 20H52"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 38H52"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M50 29L52 29"
    })));
  }
};

export default DripCoffeeMaker;