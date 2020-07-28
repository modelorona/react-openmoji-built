import React from 'react';

const BowlWithSpoon = ({
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      d: "M50,23c0,0,3,1,6,1c0.25,0,2.75,0,3,0c3,0,6-1,6-1c0,2.7617-2.2383,5-5,5c-0.916,0-4.084,0-5,0 C52.2383,28,50,25.7617,50,23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M49,36c0,16.0156-4,29-13,29c16.0166,0,29-12.9844,29-29H49z"
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M8,23h42c0,0,3,1,6,1c0.25,0,2.75,0,3,0c3,0,6-1,6-1c0,2.7617-2.2383,5-5,5c-0.916,0-4.084,0-5,0c-2.7617,0-5-2.2383-5-5"
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
      d: "M7,36c0,16.0166,12.9834,29,29,29s29-12.9834,29-29H7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M8,23h42c0,0,3,1,6,1c0.25,0,2.75,0,3,0c3,0,6-1,6-1c0,2.7617-2.2383,5-5,5c-0.916,0-4.084,0-5,0c-2.7617,0-5-2.2383-5-5"
    })));
  }
};

export default BowlWithSpoon;