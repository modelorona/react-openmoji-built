import React from 'react';

const NameBadge = ({
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
      fill: "#ea5a47",
      d: "M52.1576,7.41l-7.652,17.1477L36.1566,7,27.9337,24.5572,19.45,7.4744S6.6522,23.6645,6.6522,38.8005,22.32,65,35.8392,65H36.6c13.52,0,27.9646-11.0636,27.9646-26.1995S52.1576,7.41,52.1576,7.41Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M25.452,31.01H51.958a2.9184,2.9184,0,0,1,2.9184,2.9184v17.133A2.9184,2.9184,0,0,1,51.958,53.98H20.8318a2.9184,2.9184,0,0,1-2.9184-2.9184V38.5485A7.5386,7.5386,0,0,1,25.452,31.01Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.0221",
      y: "31.7258",
      rx: "2.9184",
      ry: "2.9184",
      width: "33.071",
      height: "19.7312",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.1576,7.41l-7.652,17.1477L36.1566,7,27.9337,24.5572,19.45,7.4744S6.6522,23.6645,6.6522,38.8005,22.32,65,35.8392,65H36.6c13.52,0,27.9646-11.0636,27.9646-26.1995S52.1576,7.41,52.1576,7.41Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.0221",
      y: "31.7258",
      rx: "2.9184",
      ry: "2.9184",
      width: "33.071",
      height: "19.7312",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.1576,7.41l-7.652,17.1477L36.1566,7,27.9337,24.5572,19.45,7.4744S6.6522,23.6645,6.6522,38.8005,22.32,65,35.8392,65H36.6c13.52,0,27.9646-11.0636,27.9646-26.1995S52.1576,7.41,52.1576,7.41Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.0221",
      y: "31.7258",
      rx: "2.9184",
      ry: "2.9184",
      width: "33.071",
      height: "19.7312",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default NameBadge;