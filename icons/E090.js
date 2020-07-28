import React from 'react';

const FirstAid = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "27.67 43.857 13.72 43.857 13.72 28.467 27.714 28.502 27.732 14.384 43.461 14.384 43.461 28.334 57.278 28.252 57.278 43.857 43.461 43.857 43.461 57.941 27.635 57.941 27.67 43.857"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.67 43.857 13.72 43.857 13.72 28.467 27.714 28.502 27.732 14.384 43.461 14.384 43.461 28.334 57.278 28.252 57.278 43.857 43.461 43.857 43.461 57.941 27.635 57.941 27.67 43.857"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.67 43.857 13.72 43.857 13.72 28.467 27.714 28.502 27.732 14.384 43.461 14.384 43.461 28.334 57.278 28.252 57.278 43.857 43.461 43.857 43.461 57.941 27.635 57.941 27.67 43.857"
    })));
  }
};

export default FirstAid;