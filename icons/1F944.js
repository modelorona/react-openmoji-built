import React from 'react';

const Spoon = ({
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
      id: "_xD83E__xDD44_",
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.4573,21.3227c0-5.0582-2.6112-9.1586-5.8323-9.1586s-5.8323,4.1004-5.8323,9.1586c0,4.6982,1.3551,8.5665,4.257,9.0938l0,0\tl-0.8108,28.4123c0,1.1046,0.8954,2,2,2s2-0.8954,2-2l-0.0285-28.4181l0,0C42.1071,29.876,43.4573,26.0153,43.4573,21.3227z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      id: "_xD83E__xDD44_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.4573,21.3227c0-5.0582-2.6112-9.1586-5.8323-9.1586s-5.8323,4.1004-5.8323,9.1586c0,4.6982,1.3551,8.5665,4.257,9.0938l0,0\tl-0.8108,28.4123c0,1.1046,0.8954,2,2,2s2-0.8954,2-2l-0.0285-28.4181l0,0C42.1071,29.876,43.4573,26.0153,43.4573,21.3227z"
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
      id: "_xD83E__xDD44_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.4573,21.3227c0-5.0582-2.6112-9.1586-5.8323-9.1586s-5.8323,4.1004-5.8323,9.1586c0,4.6982,1.3551,8.5665,4.257,9.0938l0,0\tl-0.8108,28.4123c0,1.1046,0.8954,2,2,2s2-0.8954,2-2l-0.0285-28.4181l0,0C42.1071,29.876,43.4573,26.0153,43.4573,21.3227z"
    })));
  }
};

export default Spoon;