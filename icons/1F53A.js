import React from 'react';

const RedTrianglePointedUp = ({
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
      d: "M33.5451,15.252L11.3194,53.748C10.2284,55.6378,11.5922,58,13.7743,58h44.4514 c2.1821,0,3.5459-2.3622,2.4549-4.252L38.4549,15.252C37.3638,13.3622,34.6362,13.3622,33.5451,15.252z"
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
      d: "M33.5451,15.252L11.3194,53.748 C10.2284,55.6378,11.5922,58,13.7743,58h44.4514c2.1821,0,3.5459-2.3622,2.4549-4.252L38.4549,15.252 C37.3638,13.3622,34.6362,13.3622,33.5451,15.252z"
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
      d: "M33.5451,15.252L11.3194,53.748 C10.2284,55.6378,11.5922,58,13.7743,58h44.4514c2.1821,0,3.5459-2.3622,2.4549-4.252L38.4549,15.252 C37.3638,13.3622,34.6362,13.3622,33.5451,15.252z"
    })));
  }
};

export default RedTrianglePointedUp;