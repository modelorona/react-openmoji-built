import React from 'react';

const WindChime = ({
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M55.1767,38.6265a19.6726,19.6726,0,0,0,.4943-9.2146A19.9973,19.9973,0,0,0,16,33a19.7418,19.7418,0,0,0,.8242,5.63,2.0054,2.0054,0,0,0,1.9234,1.4292H53.2521A2.0071,2.0071,0,0,0,55.1767,38.6265Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M39,41a3,3,0,0,1-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M16,54a14.4232,14.4232,0,0,0,14-4l4,6a14.4232,14.4232,0,0,1-14,4Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1767,38.6265a19.6726,19.6726,0,0,0,.4943-9.2146A19.9973,19.9973,0,0,0,16,33a19.7418,19.7418,0,0,0,.8242,5.63,2.0054,2.0054,0,0,0,1.9234,1.4292H53.2521A2.0071,2.0071,0,0,0,55.1767,38.6265Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,13s.7889-4.1056-1-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,44s1,6-4,9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,41a3,3,0,0,1-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16,54a14.4232,14.4232,0,0,0,14-4l4,6a14.4232,14.4232,0,0,1-14,4Z"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1767,38.6265a19.6726,19.6726,0,0,0,.4943-9.2146A19.9973,19.9973,0,0,0,16,33a19.7418,19.7418,0,0,0,.8242,5.63,2.0054,2.0054,0,0,0,1.9234,1.4292H53.2521A2.0071,2.0071,0,0,0,55.1767,38.6265Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,13s.7889-4.1056-1-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,44s1,6-4,9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,41a3,3,0,0,1-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16,54a14.4232,14.4232,0,0,0,14-4l4,6a14.4232,14.4232,0,0,1-14,4Z"
    }))));
  }
};

export default WindChime;