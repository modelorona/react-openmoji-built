import React from 'react';

const BalletShoes = ({
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
      fill: "#ffa7c0",
      d: "M10,54.9042c-2.2485-1.8528-3-8.2556-3-11.3966,0-2.79,1.1307-4.3151,2.9588-6.1432,0,0,2.6586-2.1324,4.0412-1,4.5288,3.7092,15.6575,15.2147,27.0042,3,0,0,15.5773,2.3421,20.32,3.5458C67,45,65.7407,45.03,65.7407,47.7325c0,8.6515-6.0838,7.5391-12.81,7.1718-3.7068-.2025-38.8008.2254-42.93,0"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10,54.9042c-2.2485-1.8528-3-8.2556-3-11.3966,0-2.79,1.1307-4.3151,2.9588-6.1432,0,0,2.6586-2.1324,4.0412-1,4.5288,3.7092,15.6575,14.2147,27.0042,2,0,0,15.9958,2.6356,20.32,4.5458C67,45,65.7407,45.03,65.7407,47.7325c0,8.6515-6.0838,7.5391-12.81,7.1718-3.7068-.2025-38.8008.2254-42.93,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46.5264",
      x2: "41.4548",
      y1: "39.8017",
      y2: "45.7397",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.3703",
      x2: "45.9025",
      y1: "39.604",
      y2: "43.7397",
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
      d: "M10,54.9042c-2.2485-1.8528-3-8.2556-3-11.3966,0-2.79,1.1307-4.3151,2.9588-6.1432,0,0,2.6586-2.1324,4.0412-1,4.5288,3.7092,15.6575,14.2147,27.0042,2,0,0,15.9958,2.6356,20.32,4.5458C67,45,65.7407,45.03,65.7407,47.7325c0,8.6515-6.0838,7.5391-12.81,7.1718-3.7068-.2025-38.8008.2254-42.93,0"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "46.5264",
      x2: "41.4548",
      y1: "39.8017",
      y2: "45.7397",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.3703",
      x2: "45.9025",
      y1: "39.604",
      y2: "43.7397",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default BalletShoes;