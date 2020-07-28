import React from 'react';

const Foot_DarkSkinTone = ({
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
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#6a462f",
      d: "M38,13s2,18,2,23c0,4.1231-2.1716,7.5858-5,9-4,2-14,7-19,7H12.6a4.8944,4.8944,0,0,0-.6,2.5A3.5,3.5,0,0,0,15.5,58H49a5,5,0,0,0,5-5c0-6-3-11-3-17s3-23,3-23V12H38Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#352318",
      d: "M45.5,58H49a5,5,0,0,0,5-5c0-6-3-11-3-17s3-23,3-23V12H50s-3,17-3,23,3,11,3,17a5,5,0,0,1-5,5Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38,13s2,18,2,23c0,4.1231-2.1716,7.5858-5,9-4,2-14,7-19,7H12.6a4.8944,4.8944,0,0,0-.6,2.5A3.5,3.5,0,0,0,15.5,58H49a5,5,0,0,0,5-5c0-6-3-11-3-17s3-23,3-23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,47a4,4,0,0,1-4,4"
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
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38,13s2,18,2,23c0,4.1231-2.1716,7.5858-5,9-4,2-14,7-19,7H12.6a4.8944,4.8944,0,0,0-.6,2.5A3.5,3.5,0,0,0,15.5,58H49a5,5,0,0,0,5-5c0-6-3-11-3-17s3-23,3-23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,47a4,4,0,0,1-4,4"
    })));
  }
};

export default Foot_DarkSkinTone;