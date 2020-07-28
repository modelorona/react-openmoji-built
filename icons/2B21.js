import React from 'react';

const WhiteHexagon = ({
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
      fill: "#FFFFFF",
      d: "M35,7.577 C35.619,7.22 36.381,7.22 37,7.577 L60.115,20.923 C60.734,21.28 61.115,21.94 61.115,22.655 L61.115,49.345 C61.115,50.06 60.734,50.72 60.115,51.077 L37,64.423 C36.381,64.78 35.619,64.78 35,64.423 L11.885,51.077 C11.266,50.72 10.885,50.06 10.885,49.345 L10.885,22.655 C10.885,21.94 11.266,21.28 11.885,20.923 L35,7.577 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeWidth: "2",
      d: "M35,7.577 C35.619,7.22 36.381,7.22 37,7.577 L60.115,20.923 C60.734,21.28 61.115,21.94 61.115,22.655 L61.115,49.345 C61.115,50.06 60.734,50.72 60.115,51.077 L37,64.423 C36.381,64.78 35.619,64.78 35,64.423 L11.885,51.077 C11.266,50.72 10.885,50.06 10.885,49.345 L10.885,22.655 C10.885,21.94 11.266,21.28 11.885,20.923 L35,7.577 z"
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
      strokeWidth: "2",
      d: "M35,7.577 C35.619,7.22 36.381,7.22 37,7.577 L60.115,20.923 C60.734,21.28 61.115,21.94 61.115,22.655 L61.115,49.345 C61.115,50.06 60.734,50.72 60.115,51.077 L37,64.423 C36.381,64.78 35.619,64.78 35,64.423 L11.885,51.077 C11.266,50.72 10.885,50.06 10.885,49.345 L10.885,22.655 C10.885,21.94 11.266,21.28 11.885,20.923 L35,7.577 z"
    })));
  }
};

export default WhiteHexagon;