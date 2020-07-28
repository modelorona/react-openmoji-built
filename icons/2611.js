import React from 'react';

const CheckBoxWithCheck = ({
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
      fill: "#D0CFCE",
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,29.0772V50.318c0,0.2541-0.2059,0.46-0.46,0.46H22.46c-0.254,0-0.46-0.2059-0.46-0.46v-22.08c0-0.254,0.2059-0.46,0.46-0.46 h13.9961h0.3953H45V29.0772z"
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
      d: "M51.2308,14.778c-15.2308,18-18,30.4615-18,30.4615s-2.7692-6.9231-5.5385-9.6923"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,29.0772V50.318c0,0.2541-0.2059,0.46-0.46,0.46H22.46c-0.254,0-0.46-0.2059-0.46-0.46v-22.08c0-0.254,0.2059-0.46,0.46-0.46 h13.9961h0.3953"
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
      d: "M51.2308,14.778c-15.2308,18-18,30.4615-18,30.4615s-2.7692-6.9231-5.5385-9.6923"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,29.0772V50.318c0,0.2541-0.2059,0.46-0.46,0.46H22.46c-0.254,0-0.46-0.2059-0.46-0.46v-22.08c0-0.254,0.2059-0.46,0.46-0.46 h13.9961h0.3953"
    })));
  }
};

export default CheckBoxWithCheck;