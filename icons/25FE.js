import React from 'react';

const BlackMediumSmallSquare = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      id: "kleines_mittleres_schwarzes_quadrat_color_1",
      x: "20.2643",
      y: "20.306",
      width: "31.4714",
      height: "31.4714"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      id: "kleines_mittleres_schwarzes_quadrat_line_1",
      x: "20.2643",
      y: "20.306",
      width: "31.4714",
      height: "31.4714",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
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
    }, /*#__PURE__*/React.createElement("rect", {
      id: "kleines_mittleres_schwarzes_quadrat_line_1",
      x: "20.2643",
      y: "20.306",
      width: "31.4714",
      height: "31.4714",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default BlackMediumSmallSquare;