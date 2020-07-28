import React from 'react';

const RiceCracker = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      d: "M54.9,59.2c0.6-0.8,0.4-1.6,0.8-2c0.6-0.6,0.8-1.5,0.5-2.3c0.3,0,0.5-0.1,0.8-0.3c0.7-0.5,1.1-1.3,0.9-2.1 c0.9,0.4,1.9,0.1,2.5-0.7c0.5-0.7,0.4-1.6-0.1-2.3c0.3-0.1,0.5-0.3,0.7-0.5c0.6-0.6,0.7-1.5,0.4-2.2c0.9,0.2,1.9-0.4,2.2-1.3 c0.3-0.8,0-1.7-0.6-2.2c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.7,0.3-1.6-0.2-2.3c0.9-0.1,1.7-0.8,1.8-1.8c0.1-0.9-0.4-1.7-1.1-2 c0.2-0.2,0.3-0.5,0.4-0.7c0.2-0.8-0.1-1.7-0.7-2.1c0.9-0.3,1.5-1.2,1.4-2.2c-0.1-0.9-0.8-1.5-1.6-1.7c0.1-0.2,0.2-0.5,0.2-0.8 c0-0.9-0.5-1.6-1.2-1.9c0.8-0.5,1.2-1.5,0.8-2.4c-0.3-0.8-1.1-1.3-2-1.2c0.1-0.3,0.1-0.5,0-0.8c-0.2-0.8-0.9-1.4-1.7-1.6 c0.7-0.7,0.8-1.8,0.2-2.6c-0.5-0.7-1.4-1-2.2-0.7c0-0.3-0.1-0.5-0.2-0.8c-0.4-0.8-1.2-1.2-2-1.1c0.5-0.8,0.3-1.9-0.4-2.5 s-1.6-0.6-2.3-0.2c-0.1-0.3-0.2-0.5-0.4-0.7C51.6,12,50.8,11.7,50,12c0.3-0.9-0.2-1.9-1-2.3c-0.8-0.4-1.7-0.2-2.3,0.4 c-0.1-0.2-0.3-0.5-0.6-0.6c-0.7-0.5-1.6-0.5-2.3,0c0-0.9-0.6-1.8-1.6-2c-0.9-0.2-1.7,0.2-2.1,0.9c-0.2-0.2-0.4-0.4-0.7-0.5 c-0.8-0.3-1.7-0.1-2.2,0.5c-0.2-0.9-1-1.6-2-1.6c-0.9,0-1.6,0.6-1.8,1.4c-0.2-0.1-0.5-0.2-0.8-0.3c-0.8-0.1-1.6,0.3-2,1 c-0.4-0.9-1.4-1.3-2.3-1c-0.8,0.2-1.4,1-1.4,1.8c-0.3-0.1-0.5-0.1-0.8-0.1c-0.8,0.1-1.5,0.7-1.7,1.5c-0.6-0.7-1.7-0.9-2.5-0.4 c-0.8,0.4-1.1,1.3-1,2.1c-0.3,0-0.6,0-0.8,0.1c-0.8,0.3-1.3,1-1.3,1.9C18,14.2,17,14.3,16.2,15c-0.6,0.6-0.8,1.5-0.4,2.3 c-0.3,0-0.5,0.1-0.8,0.3c-0.7,0.5-1,1.3-0.8,2.1c-0.9-0.4-1.9,0-2.4,0.8c-0.5,0.7-0.4,1.7,0.1,2.3c-0.2,0.1-0.5,0.3-0.7,0.5 c-0.6,0.6-0.7,1.5-0.3,2.3C10,25.5,9,26,8.7,27c-0.3,0.8,0,1.7,0.7,2.2c-0.2,0.2-0.4,0.4-0.5,0.6c-0.4,0.8-0.3,1.6,0.3,2.3 c-0.9,0.1-1.7,0.9-1.8,1.8c-0.1,0.9,0.5,1.6,1.2,2c-0.2,0.2-0.3,0.5-0.4,0.7c-0.2,0.7,0.1,1.5,0.8,2c-0.9,0.3-1.4,1.3-1.3,2.2 c0.2,0.9,0.8,1.5,1.7,1.6c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.9,0.5,1.6,1.3,1.9c-0.8,0.5-1.1,1.6-0.7,2.5c0.4,0.8,1.2,1.2,2,1.2 c0,0.3,0,0.6,0,0.8c0.2,0.8,0.9,1.4,1.7,1.5c-0.6,0.7-0.7,1.8-0.1,2.6c0.5,0.7,1.4,0.9,2.2,0.7c0,0.3,0.1,0.5,0.2,0.8 c0.4,0.8,1.2,1.1,2,1c-0.4,0.8-0.9,3-0.2,3.6l6.6,4.2c0.8,0.4,1.9-1.5,2.5-2.1c0.1,0.2,0.3,0.4,0.6,0.6c0.7,0.5,1.6,0.4,2.3,0 c0,1,0.7,1.8,1.6,2c0.9,0.2,1.7-0.3,2.1-1c0.2,0.2,0.4,0.3,0.7,0.4c0.2,0.1,0.4,0.1,0.6,0.1c0.4,0.5,1,0.9,1.7,0.9 c0.9,0,1.6-0.6,1.9-1.3c0.2,0.2,0.5,0.3,0.8,0.3c0.8,0.1,1.6-0.3,2.1-1c0.4,0.9,1.3,1.4,2.3,1.1c0.8-0.2,1.4-0.9,1.5-1.8 c0.3,0.1,0.5,0.1,0.8,0.1c0.9-0.1,3.2,0.4,5.2-0.4L54.9,59.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M64.8,38.8c0.1-0.9-0.4-1.7-1.1-2c0.2-0.2,0.3-0.5,0.4-0.7c0.2-0.8-0.1-1.7-0.7-2.1 c0.9-0.3,1.5-1.2,1.4-2.2c-0.1-0.9-0.8-1.5-1.6-1.7c0.1-0.2,0.2-0.5,0.2-0.8c0-0.9-0.5-1.6-1.2-1.9c0.8-0.5,1.2-1.5,0.8-2.4 c-0.3-0.8-1.1-1.3-2-1.2c0.1-0.3,0.1-0.5,0-0.8c-0.2-0.8-0.9-1.4-1.7-1.6c0.7-0.7,0.8-1.8,0.2-2.6c-0.5-0.7-1.4-1-2.2-0.7 c0-0.3-0.1-0.5-0.2-0.8c-0.4-0.8-1.2-1.2-2-1.1c0.5-0.8,0.3-1.9-0.4-2.5C54,13,53,12.9,52.3,13.3c-0.1-0.3-0.2-0.5-0.4-0.7 c-0.5-0.7-1.4-0.9-2.2-0.6c0.3-0.9-0.2-1.9-1-2.3c-0.8-0.4-1.7-0.2-2.3,0.4c-0.1-0.2-0.3-0.5-0.6-0.6c-0.7-0.5-1.6-0.5-2.3,0 c0-0.7-0.3-1.4-0.9-1.7c0.2,0.7,0.2,1.6-0.1,2.3c0.8-0.1,1.6,0.4,2,1.4c0.1,0.3,0.2,0.7,0.2,1.1c0.8-0.3,1.7,0,2.2,1 c0.6,1,0.5,2.5-0.2,3.3c0.8,0.2,1.5,0.9,1.7,2c0.1,0.4,0.1,0.7,0,1.1c0.8,0,1.6,0.6,2,1.6c0.4,1.2,0,2.5-0.8,3.2 c0.7,0.4,1.3,1.4,1.2,2.5c0,0.4-0.1,0.7-0.2,1.1c0.8,0.2,1.5,1.1,1.6,2.2c0.1,1.3-0.5,2.5-1.4,2.9c0.6,0.6,1,1.7,0.7,2.8 c-0.1,0.4-0.2,0.7-0.4,1c0.7,0.5,1.2,1.5,1.1,2.6c0,1.1-0.8,2.1-1.7,2.1c0.5,0.8,0.6,2,0.2,3c-0.1,0.3-0.3,0.6-0.6,0.8 c0.6,0.7,0.9,1.8,0.6,2.9c-0.3,1.2-1.3,1.9-2.2,1.7c0.3,1,0.2,2.1-0.4,2.9c-0.2,0.3-0.4,0.5-0.7,0.6c0.5,0.9,0.6,2.1,0.1,3 C47,58,45.9,58.3,45,57.8c0.2,1-0.2,2.1-0.9,2.7c-0.2,0.2-0.5,0.3-0.8,0.4c0.3,1,0.2,2.1-0.4,2.9l0,0c0.8-0.2,1.4-0.9,1.5-1.8 c0.3,0.1,0.5,0.1,0.8,0.1c0.9-0.1,3.2,0.4,5.2-0.4l4.1-2.5c0.6-0.8,0.4-1.6,0.8-2c0.6-0.6,0.8-1.5,0.5-2.3c0.3,0,0.5-0.1,0.8-0.3 c0.7-0.5,1.1-1.3,0.9-2.1c0.9,0.4,1.9,0.1,2.5-0.7c0.5-0.7,0.4-1.6-0.1-2.3c0.3-0.1,0.5-0.3,0.7-0.5c0.6-0.6,0.7-1.5,0.4-2.2 c0.9,0.2,1.9-0.4,2.2-1.3c0.3-0.8,0-1.7-0.6-2.2c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.7,0.3-1.6-0.2-2.3C63.9,40.5,64.7,39.8,64.8,38.8z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M50,62.6c-4.2,2.2-9,3.4-14,3.4c-5.1,0-9.8-1.3-14-3.5V44h28V62.6z"
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
      d: "M54.2,58.5c0.4-0.3,0.8-0.6,1.2-0.9c0.6-0.6,0.8-1.5,0.5-2.3c0.3,0,0.5-0.1,0.8-0.3c0.7-0.5,1.1-1.3,0.9-2.1 c0.9,0.4,1.9,0.1,2.5-0.7c0.5-0.7,0.4-1.7-0.1-2.3c0.3-0.1,0.5-0.3,0.7-0.5c0.6-0.6,0.7-1.5,0.4-2.2c0.9,0.2,1.9-0.4,2.2-1.3 c0.3-0.8,0-1.7-0.6-2.2c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.7,0.3-1.6-0.2-2.3c0.9-0.1,1.7-0.8,1.8-1.8c0.1-0.9-0.4-1.7-1.1-2 c0.2-0.2,0.3-0.5,0.4-0.7c0.2-0.8-0.1-1.7-0.7-2.1c0.9-0.3,1.5-1.2,1.4-2.2c-0.1-0.9-0.8-1.5-1.6-1.7c0.1-0.2,0.2-0.5,0.2-0.8 c0-0.9-0.5-1.6-1.2-1.9c0.8-0.5,1.2-1.5,0.8-2.4c-0.3-0.8-1.1-1.3-2-1.2c0.1-0.3,0.1-0.5,0-0.8c-0.2-0.8-0.9-1.4-1.7-1.6 c0.7-0.7,0.8-1.8,0.2-2.6c-0.5-0.7-1.4-1-2.2-0.7c0-0.3-0.1-0.5-0.2-0.8c-0.4-0.8-1.2-1.2-2-1.1c0.5-0.8,0.3-1.9-0.4-2.5 s-1.6-0.6-2.3-0.2c-0.1-0.3-0.2-0.5-0.4-0.7c-0.5-0.7-1.4-0.9-2.2-0.6c0.3-0.9-0.2-1.9-1-2.3c-0.8-0.4-1.7-0.2-2.3,0.4 c-0.1-0.2-0.3-0.5-0.6-0.6c-0.7-0.5-1.6-0.5-2.3,0c0-0.9-0.6-1.8-1.6-2c-0.9-0.2-1.7,0.2-2.1,0.9c-0.2-0.2-0.4-0.4-0.7-0.5 C38.4,7.8,37.6,8,37,8.6C36.8,7.7,36,7,35,7c-0.9,0-1.6,0.6-1.8,1.4c-0.2-0.1-0.5-0.2-0.8-0.3c-0.8-0.1-1.6,0.3-2,1 c-0.4-0.9-1.4-1.3-2.3-1c-0.8,0.2-1.4,1-1.4,1.8c-0.3-0.1-0.5-0.1-0.8-0.1c-0.8,0.1-1.5,0.7-1.7,1.5c-0.6-0.7-1.7-0.9-2.5-0.4 c-0.8,0.4-1.1,1.3-1,2.1c-0.3,0-0.6,0-0.8,0.1c-0.8,0.3-1.3,1-1.3,1.9c-0.8-0.6-1.8-0.5-2.6,0.2c-0.6,0.6-0.8,1.5-0.4,2.3 c-0.3,0-0.5,0.1-0.8,0.3c-0.7,0.5-1,1.3-0.8,2.1c-0.9-0.4-1.9,0-2.4,0.8c-0.5,0.7-0.4,1.7,0.1,2.3c-0.2,0.1-0.5,0.3-0.7,0.5 c-0.6,0.6-0.7,1.5-0.3,2.3c-0.9-0.1-1.9,0.4-2.2,1.4c-0.3,0.8,0,1.7,0.7,2.2C9,29.6,8.8,29.8,8.7,30c-0.4,0.8-0.3,1.6,0.3,2.3 C7.9,32.2,7.1,33,7.1,34c-0.1,0.9,0.5,1.6,1.2,2c-0.2,0.2-0.3,0.5-0.4,0.7c-0.2,0.8,0.1,1.7,0.8,2.1C7.8,39.1,7.3,40,7.4,41 c0.2,0.9,0.8,1.5,1.7,1.6c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.9,0.5,1.6,1.3,1.9c-0.8,0.5-1.1,1.6-0.7,2.5c0.4,0.8,1.2,1.2,2,1.2 c0,0.3,0,0.6,0,0.8c0.2,0.8,0.9,1.4,1.7,1.5c-0.6,0.7-0.7,1.8-0.1,2.6c0.5,0.7,1.4,0.9,2.2,0.7c0,0.3,0.1,0.5,0.2,0.8 c0.4,0.8,1.2,1.1,2,1c-0.4,0.8-0.2,1.9,0.5,2.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,62.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,62.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,62.6c-4.2,2.2-9,3.4-14,3.4c-5.1,0-9.8-1.3-14-3.5V44h28V62.6z"
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
      d: "M54.2,58.5c0.4-0.3,0.8-0.6,1.2-0.9c0.6-0.6,0.8-1.5,0.5-2.3c0.3,0,0.5-0.1,0.8-0.3c0.7-0.5,1.1-1.3,0.9-2.1 c0.9,0.4,1.9,0.1,2.5-0.7c0.5-0.7,0.4-1.7-0.1-2.3c0.3-0.1,0.5-0.3,0.7-0.5c0.6-0.6,0.7-1.5,0.4-2.2c0.9,0.2,1.9-0.4,2.2-1.3 c0.3-0.8,0-1.7-0.6-2.2c0.2-0.2,0.4-0.4,0.6-0.6c0.4-0.7,0.3-1.6-0.2-2.3c0.9-0.1,1.7-0.8,1.8-1.8c0.1-0.9-0.4-1.7-1.1-2 c0.2-0.2,0.3-0.5,0.4-0.7c0.2-0.8-0.1-1.7-0.7-2.1c0.9-0.3,1.5-1.2,1.4-2.2c-0.1-0.9-0.8-1.5-1.6-1.7c0.1-0.2,0.2-0.5,0.2-0.8 c0-0.9-0.5-1.6-1.2-1.9c0.8-0.5,1.2-1.5,0.8-2.4c-0.3-0.8-1.1-1.3-2-1.2c0.1-0.3,0.1-0.5,0-0.8c-0.2-0.8-0.9-1.4-1.7-1.6 c0.7-0.7,0.8-1.8,0.2-2.6c-0.5-0.7-1.4-1-2.2-0.7c0-0.3-0.1-0.5-0.2-0.8c-0.4-0.8-1.2-1.2-2-1.1c0.5-0.8,0.3-1.9-0.4-2.5 s-1.6-0.6-2.3-0.2c-0.1-0.3-0.2-0.5-0.4-0.7c-0.5-0.7-1.4-0.9-2.2-0.6c0.3-0.9-0.2-1.9-1-2.3c-0.8-0.4-1.7-0.2-2.3,0.4 c-0.1-0.2-0.3-0.5-0.6-0.6c-0.7-0.5-1.6-0.5-2.3,0c0-0.9-0.6-1.8-1.6-2c-0.9-0.2-1.7,0.2-2.1,0.9c-0.2-0.2-0.4-0.4-0.7-0.5 C38.4,7.8,37.6,8,37,8.6C36.8,7.7,36,7,35,7c-0.9,0-1.6,0.6-1.8,1.4c-0.2-0.1-0.5-0.2-0.8-0.3c-0.8-0.1-1.6,0.3-2,1 c-0.4-0.9-1.4-1.3-2.3-1c-0.8,0.2-1.4,1-1.4,1.8c-0.3-0.1-0.5-0.1-0.8-0.1c-0.8,0.1-1.5,0.7-1.7,1.5c-0.6-0.7-1.7-0.9-2.5-0.4 c-0.8,0.4-1.1,1.3-1,2.1c-0.3,0-0.6,0-0.8,0.1c-0.8,0.3-1.3,1-1.3,1.9c-0.8-0.6-1.8-0.5-2.6,0.2c-0.6,0.6-0.8,1.5-0.4,2.3 c-0.3,0-0.5,0.1-0.8,0.3c-0.7,0.5-1,1.3-0.8,2.1c-0.9-0.4-1.9,0-2.4,0.8c-0.5,0.7-0.4,1.7,0.1,2.3c-0.2,0.1-0.5,0.3-0.7,0.5 c-0.6,0.6-0.7,1.5-0.3,2.3c-0.9-0.1-1.9,0.4-2.2,1.4c-0.3,0.8,0,1.7,0.7,2.2C9,29.6,8.8,29.8,8.7,30c-0.4,0.8-0.3,1.6,0.3,2.3 C7.9,32.2,7.1,33,7.1,34c-0.1,0.9,0.5,1.6,1.2,2c-0.2,0.2-0.3,0.5-0.4,0.7c-0.2,0.8,0.1,1.7,0.8,2.1C7.8,39.1,7.3,40,7.4,41 c0.2,0.9,0.8,1.5,1.7,1.6c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.9,0.5,1.6,1.3,1.9c-0.8,0.5-1.1,1.6-0.7,2.5c0.4,0.8,1.2,1.2,2,1.2 c0,0.3,0,0.6,0,0.8c0.2,0.8,0.9,1.4,1.7,1.5c-0.6,0.7-0.7,1.8-0.1,2.6c0.5,0.7,1.4,0.9,2.2,0.7c0,0.3,0.1,0.5,0.2,0.8 c0.4,0.8,1.2,1.1,2,1c-0.4,0.8-0.2,1.9,0.5,2.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,62.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,62.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,62.6c-4.2,2.2-9,3.4-14,3.4c-5.1,0-9.8-1.3-14-3.5V44h28V62.6z"
    })));
  }
};

export default RiceCracker;