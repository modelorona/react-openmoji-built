import React from 'react';

const HeartWithArrow = ({
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
      fill: "#FFA7C0",
      d: "M60.5,25c0-7.4438-6.0557-13.5-13.5-13.5c-4.4033,0-8.4844,2.1377-11,5.6724 C33.4844,13.6377,29.4038,11.5,25,11.5c-7.4438,0-13.5,6.0562-13.5,13.5c0,2.7285,0.8403,5.4082,2.3833,7.6504l-0.0347,0.0273 l20.866,25.8619h2.5708l20.2273-25.0695l0.668-0.8369l-0.0352-0.0244C59.6699,30.3755,60.5,27.7119,60.5,25z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#61B2E4",
      points: "19.8211,52.1789 20.0962,58.9038 14.1071,64.8929 13.832,58.168 19.8211,52.1789"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#92D3F5",
      points: "7.8823,57.668 14.332,57.668 20.3211,51.6789 13.8713,51.6789 7.8823,57.668"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#92D3F5",
      points: "68.1798,3.6284 66.9243,8.4798 65.6689,13.3311 62.073,9.7352 58.477,6.1393 63.3284,4.8839"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line_1_"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.2632,48.9508L36,58.5397l20.7339-25.6975l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25 c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598C33.8861,15.1536,29.7533,12.5,25,12.5 c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034l7.8527,9.7326"
    })), /*#__PURE__*/React.createElement("line", {
      x1: "34.5",
      x2: "21",
      y1: "37.5",
      y2: "51",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62.0919",
      x2: "58",
      y1: "9.9081",
      y2: "14",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "20.5962,51.4541 13.6464,51.4541 7.1931,57.9074 14.1429,57.9074 14.1429,64.8571 20.5962,58.4038"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "68.1798,3.6284 66.9243,8.4798 65.6689,13.3311 62.073,9.7352 58.477,6.1393 63.3284,4.8839"
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
      id: "line_1_"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.2632,48.9508L36,58.5397l20.7339-25.6975l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25 c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598C33.8861,15.1536,29.7533,12.5,25,12.5 c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034l7.8527,9.7326"
    })), /*#__PURE__*/React.createElement("line", {
      x1: "34.5",
      x2: "21",
      y1: "37.5",
      y2: "51",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "62.0919",
      x2: "58",
      y1: "9.9081",
      y2: "14",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "20.5962,51.4541 13.6464,51.4541 7.1931,57.9074 14.1429,57.9074 14.1429,64.8571 20.5962,58.4038"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "68.1798,3.6284 66.9243,8.4798 65.6689,13.3311 62.073,9.7352 58.477,6.1393 63.3284,4.8839"
    })));
  }
};

export default HeartWithArrow;