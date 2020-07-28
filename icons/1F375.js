import React from 'react';

const TeacupWithoutHandle = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M19.9055,55.7995h32.1874C62.8891,49.3081,68,36.2917,68,20.7519H4 C4,36.2917,9.1109,49.3081,19.9055,55.7995z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.3238",
      y: "29.4186",
      width: "14.019",
      height: "17.5238",
      fill: "#b1cc33",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#5c9e31",
      stroke: "none",
      points: "31,30 21,47 23,46.9424 32.3429,46.9424 32,30"
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
      d: "M19.5,20.3161H4c0,15.5398,5.1109,28.5562,15.9055,35.0476h32.1874C62.8891,48.8723,68,35.8559,68,20.3161H31.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.5",
      x2: "25.3334",
      y1: "20.5",
      y2: "31.4186",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.3238",
      y: "29.4186",
      width: "14.019",
      height: "17.5238",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.5,20.3161H4c0,15.5398,5.1109,28.5562,15.9055,35.0476h32.1874C62.8891,48.8723,68,35.8559,68,20.3161H31.5"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.5",
      x2: "25.3334",
      y1: "20.5",
      y2: "31.4186",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.3238",
      y: "29.4186",
      width: "14.019",
      height: "17.5238",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default TeacupWithoutHandle;