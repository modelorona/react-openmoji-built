import React from 'react';

const Jeans = ({
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
      fill: "#61B2E4",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.6214,29.6711c-2.5604,0-4.9347,1.7605-4.9347,2.8289s-2,35.4131-2,35.4131H17.625V28.5V16v-5.0417h20h20V16v12.5v39.4131 H44.5633c0,0-2-34.3446-2-35.4131s-2.3743-2.8289-4.9347-2.8289"
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
      d: "M37.6214,29.6711c-2.5604,0-4.9347,1.7605-4.9347,2.8289s-2,35.4131-2,35.4131H17.625V28.5V16v-5.0417h20h20V16v12.5v39.4131 H44.5633c0,0-2-34.3446-2-35.4131s-2.3743-2.8289-4.9347-2.8289"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.125",
      cy: "16.0705",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.8653,14.328c0,0-2.403,8.938,6.0876,11.4666"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.3847,14.328c0,0,2.403,8.938-6.0876,11.4666"
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
      d: "M37.6214,29.6711c-2.5604,0-4.9347,1.7605-4.9347,2.8289s-2,35.4131-2,35.4131H17.625V28.5V16v-5.0417h20h20V16v12.5v39.4131 H44.5633c0,0-2-34.3446-2-35.4131s-2.3743-2.8289-4.9347-2.8289"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.125",
      cy: "16.0705",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.8653,14.328c0,0-2.403,8.938,6.0876,11.4666"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.3847,14.328c0,0,2.403,8.938-6.0876,11.4666"
    })));
  }
};

export default Jeans;