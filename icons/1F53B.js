import React from 'react';

const RedTrianglePointedDown = ({
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
      fill: "#EA5A47",
      stroke: "none",
      d: "M38.4549,57.1464l22.2257-38.4961c1.0911-1.8898-0.2728-4.252-2.4549-4.252l-44.4514,0 c-2.1821,0-3.5459,2.3622-2.4549,4.252l22.2257,38.4961C34.6362,59.0362,37.3638,59.0362,38.4549,57.1464z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.4549,57.1464l22.2257-38.4961 c1.0911-1.8898-0.2728-4.252-2.4549-4.252l-44.4514,0c-2.1821,0-3.5459,2.3622-2.4549,4.252l22.2257,38.4961 C34.6362,59.0362,37.3638,59.0362,38.4549,57.1464z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.4549,57.1464l22.2257-38.4961 c1.0911-1.8898-0.2728-4.252-2.4549-4.252l-44.4514,0c-2.1821,0-3.5459,2.3622-2.4549,4.252l22.2257,38.4961 C34.6362,59.0362,37.3638,59.0362,38.4549,57.1464z"
    })));
  }
};

export default RedTrianglePointedDown;