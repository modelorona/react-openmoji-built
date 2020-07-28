import React from 'react';

const Label = ({
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
      d: "M24.7,16.4l-17,6v27.9l17,6h40v-40h-40V16.4z M16.2,41.4c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5 S19,41.4,16.2,41.4z"
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
      d: "M24.7,16.4l-17,6v27.9l17,6h40v-40h-40V16.4z M16.2,41.4c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S19,41.4,16.2,41.4z"
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
      d: "M24.7,16.4l-17,6v27.9l17,6h40v-40h-40V16.4z M16.2,41.4c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S19,41.4,16.2,41.4z"
    })));
  }
};

export default Label;