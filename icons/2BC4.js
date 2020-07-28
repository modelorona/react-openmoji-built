import React from 'react';

const BlackOctagon = ({
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
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeWidth: "2",
      d: "M15.177,16.259 C15.38,15.769 15.769,15.38 16.259,15.177 L35.235,7.317 C35.725,7.114 36.275,7.114 36.765,7.317 L55.741,15.177 C56.231,15.38 56.62,15.769 56.823,16.259 L64.683,35.235 C64.886,35.725 64.886,36.275 64.683,36.765 L56.823,55.741 C56.62,56.231 56.231,56.62 55.741,56.823 L36.765,64.683 C36.275,64.886 35.725,64.886 35.235,64.683 L16.259,56.823 C15.769,56.62 15.38,56.231 15.177,55.741 L7.317,36.765 C7.114,36.275 7.114,35.725 7.317,35.235 L15.177,16.259 z"
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
      stroke: "#000000",
      strokeWidth: "2",
      d: "M15.177,16.259 C15.38,15.769 15.769,15.38 16.259,15.177 L35.235,7.317 C35.725,7.114 36.275,7.114 36.765,7.317 L55.741,15.177 C56.231,15.38 56.62,15.769 56.823,16.259 L64.683,35.235 C64.886,35.725 64.886,36.275 64.683,36.765 L56.823,55.741 C56.62,56.231 56.231,56.62 55.741,56.823 L36.765,64.683 C36.275,64.886 35.725,64.886 35.235,64.683 L16.259,56.823 C15.769,56.62 15.38,56.231 15.177,55.741 L7.317,36.765 C7.114,36.275 7.114,35.725 7.317,35.235 L15.177,16.259 z"
    })));
  }
};

export default BlackOctagon;