import React from 'react';

const Flashlight = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.1977",
      x2: "9.3351",
      y1: "46.2814",
      y2: "47.2719",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.1014",
      x2: "15.1726",
      y1: "53.1953",
      y2: "57.0258",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.2418",
      x2: "25.1433",
      y1: "59.4704",
      y2: "63.136",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M56.4871,16.9995c-1.958-1.958-3.9941-3.469-5.0309-2.7058L29.5787,36.1712 c1.2786,0.5446,2.8726,1.5088,3.8848,2.5215c1.0128,1.0124,2.8059,3.7926,3.3505,5.0717l21.8977-22.4561 C58.6697,20.8444,58.4949,19.0083,56.4871,16.9995z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M20.4502,38.2151l-4.7805,4.9489l14.1421,14.1421l5.1413-5.3317C36.6533,50.2752,36.5,48.1773,36.5,45.773 s-0.9148-4.9821-2.615-6.6822C30.3753,35.581,23.96,34.7053,20.4502,38.2151z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M35.8144,39.8366c0.4458,0.6337,0.6988,3.2212,0.9996,3.9278l21.8977-22.4561 c-0.0186-0.2055-0.106-2.1367-0.647-2.7353c-0.3112-0.3443-1.0305,0.7301-1.3133,0.3267L35.8144,39.8366z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M27.41,54.9043l2.4018,2.4018l4.7992-4.8814c1.7002-1.6992,2.3886-4.5444,2.3886-6.9487 c0-0.7988-0.3923-2.8729-0.8853-3.4553c-0.5057-0.5973-1.1173,0.2989-1.52-0.3901c-0.1932-0.3305,0.551,2.3353-0.5895,5.7511 C32.8642,50.7974,27.41,54.9043,27.41,54.9043z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5787,36.1712l21.8775-21.8775c0,0,1.4916-0.8489,4.609,2.2685s2.6169,4.9574,2.6169,4.9574L36.8046,43.3971"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.7429,39.0908c3.9052-3.9053,10.2369-3.9053,14.1421,0c3.9053,3.9052,3.9053,10.2369,0,14.1421l-4.0732,4.0732L15.6697,43.164 L19.7429,39.0908z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.1977",
      x2: "9.3351",
      y1: "46.2814",
      y2: "47.2719",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.1014",
      x2: "15.1726",
      y1: "53.1953",
      y2: "57.0258",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.2418",
      x2: "25.1433",
      y1: "59.4704",
      y2: "63.136",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "13.1977",
      x2: "9.3351",
      y1: "46.2814",
      y2: "47.2719",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.1014",
      x2: "15.1726",
      y1: "53.1953",
      y2: "57.0258",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.2418",
      x2: "25.1433",
      y1: "59.4704",
      y2: "63.136",
      fill: "none",
      stroke: "#FCEA2B",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5787,36.1712l21.8775-21.8775c0,0,1.4916-0.8489,4.609,2.2685s2.6169,4.9574,2.6169,4.9574L36.8046,43.3971"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.7429,39.0908c3.9052-3.9053,10.2369-3.9053,14.1421,0c3.9053,3.9052,3.9053,10.2369,0,14.1421l-4.0732,4.0732L15.6697,43.164 L19.7429,39.0908z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13.1977",
      x2: "9.3351",
      y1: "46.2814",
      y2: "47.2719",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19.1014",
      x2: "15.1726",
      y1: "53.1953",
      y2: "57.0258",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.2418",
      x2: "25.1433",
      y1: "59.4704",
      y2: "63.136",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Flashlight;