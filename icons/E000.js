import React from 'react';

const Goldfish = ({
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
      fill: "#F1B31C",
      stroke: "none",
      d: "M7,24c0,4.5035,1.4885,8.6593,4.0003,12.0024l-0.0056,0.0027C8.4863,39.3469,7,43.4999,7,48 c5.7457-0.9598,10.2971-4.5961,11.6138-9.2434l0.0066-0.0057C21.0555,44.0525,30.375,48,41.5,48C54.4787,48,65,42.6274,65,36 S54.4787,24,41.5,24c-11.127,0-20.4478,3.9489-22.8809,9.252l0.0089,0.0042C17.3466,28.6438,12.8817,25.0183,7.2187,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      stroke: "none",
      d: "M33.5741,47.3004C36.0503,47.7533,38.7187,48,41.5,48C54.4787,48,65,42.6274,65,36 c0-5.4539-7.1253-10.0581-16.8818-11.5175L33.5741,47.3004z"
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
      d: "M7,24c0,4.5035,1.4885,8.6593,4.0003,12.0024l-0.0056,0.0027C8.4863,39.3469,7,43.4999,7,48 c5.7457-0.9598,10.2971-4.5961,11.6138-9.2434l0.0066-0.0057C21.0555,44.0525,30.375,48,41.5,48C54.4787,48,65,42.6274,65,36 S54.4787,24,41.5,24c-11.127,0-20.4478,3.9489-22.8809,9.252l0.0089,0.0042C17.3466,28.6438,12.8817,25.0183,7.2187,24"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53",
      cy: "34",
      r: "2",
      fill: "#000000",
      stroke: "none"
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
      d: "M7,24c0,4.5035,1.4885,8.6593,4.0003,12.0024l-0.0056,0.0027C8.4863,39.3469,7,43.4999,7,48 c5.7457-0.9598,10.2971-4.5961,11.6138-9.2434l0.0066-0.0057C21.0555,44.0525,30.375,48,41.5,48C54.4787,48,65,42.6274,65,36 S54.4787,24,41.5,24c-11.127,0-20.4478,3.9489-22.8809,9.252l0.0089,0.0042C17.3466,28.6438,12.8817,25.0183,7.2187,24"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53",
      cy: "34",
      r: "2",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default Goldfish;