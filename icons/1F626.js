import React from 'react';

const FrowningFaceWithOpenMouth = ({
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
      fill: "#FCEA2B",
      d: "M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m42.87 45.7c0-2.592-3.834-4.694-6.869-4.694-3.035 0-6.869 2.101-6.869 4.694s3.659 0.9248 6.694 0.9248 7.044 1.667 7.044-0.9248z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m30 31c0 1.657-1.345 3-3 3-1.655 0-3-1.343-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48 31c0 1.657-1.345 3-3 3s-3-1.343-3-3c0-1.655 1.345-3 3-3s3 1.345 3 3"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m42.87 45.7c0-2.592-3.834-4.694-6.869-4.694-3.035 0-6.869 2.101-6.869 4.694s3.659 0.9248 6.694 0.9248 7.044 1.667 7.044-0.9248z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m30 31c0 1.657-1.345 3-3 3-1.655 0-3-1.343-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48 31c0 1.657-1.345 3-3 3s-3-1.343-3-3c0-1.655 1.345-3 3-3s3 1.345 3 3"
    })));
  }
};

export default FrowningFaceWithOpenMouth;