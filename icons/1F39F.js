import React from 'react';

const AdmissionTickets = ({
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
      fill: "#D22F27",
      d: "M57.6,35.9c0-4.9,3.9-9.1,9.4-10.6v-5.2H5v5.5c4.9,1.7,8.4,5.7,8.4,10.3S9.9,44.6,5,46.3v5.5h62v-5.2 C61.6,45.1,57.6,40.9,57.6,35.9z"
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2157",
      d: "M57.1,35.6 c0-4.9,3.9-9.1,9.4-10.6v-5.2h-62v5.5c4.9,1.7,8.4,5.7,8.4,10.3s-3.5,8.6-8.4,10.3v5.5h62v-5.2C61.1,44.7,57.1,40.5,57.1,35.6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.5",
      y: "25",
      width: "34",
      height: "20",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0945"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "18.5",
      y: "25",
      width: "34",
      height: "20",
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.1"
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
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.2157",
      d: "M57.1,35.6 c0-4.9,3.9-9.1,9.4-10.6v-5.2h-62v5.5c4.9,1.7,8.4,5.7,8.4,10.3s-3.5,8.6-8.4,10.3v5.5h62v-5.2C61.1,44.7,57.1,40.5,57.1,35.6z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "18.5",
      y: "25",
      width: "34",
      height: "20",
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0945"
    })));
  }
};

export default AdmissionTickets;