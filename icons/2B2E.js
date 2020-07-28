import React from 'react';

const BlackVerticalEllipse = ({
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
      d: "M56,36 C56,52.016 47.046,65 36,65 C24.954,65 16,52.016 16,36 C16,19.984 24.954,7 36,7 C47.046,7 56,19.984 56,36 z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeWidth: "2",
      d: "M56,35.957 C56.035,51.973 47.109,64.977 36.063,65.001 C25.017,65.025 16.034,52.06 16,36.043 C15.965,20.027 24.891,7.023 35.937,6.999 C46.983,6.975 55.966,19.94 56,35.957 z"
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
      d: "M56,36 C56,52.016 47.046,65 36,65 C24.954,65 16,52.016 16,36 C16,19.984 24.954,7 36,7 C47.046,7 56,19.984 56,36 z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeWidth: "2",
      d: "M56,35.957 C56.035,51.973 47.109,64.977 36.063,65.001 C25.017,65.025 16.034,52.06 16,36.043 C15.965,20.027 24.891,7.023 35.937,6.999 C46.983,6.975 55.966,19.94 56,35.957 z"
    })));
  }
};

export default BlackVerticalEllipse;