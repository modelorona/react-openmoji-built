import React from 'react';

const AlarmClock = ({
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "50.258",
      x2: "53.1419",
      y1: "55.036",
      y2: "59.8645",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21.7419",
      x2: "18.858",
      y1: "55.036",
      y2: "59.8645",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M46.1859,14.7917c2.2534-4.6476,4.2653-4.0842,6.1673-4.3168c1.2869-0.1573,6.4609,3.1641,6.4609,6.5799 s-2.2433,4.739-3.5597,5.4867"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M25.8141,14.7917c-2.2533-4.6476-4.2652-4.0842-6.1672-4.3168c-1.287-0.1573-6.461,3.1641-6.461,6.5799 s2.2433,4.739,3.5597,5.4867"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36.2941",
      r: "23",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0257",
      x2: "36.0257",
      y1: "18.9893",
      y2: "35.9893",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9742",
      x2: "29.9742",
      y1: "35.9349",
      y2: "46.3272",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0785"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,12.6326"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.0725"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.2478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,12.7539"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.258",
      x2: "53.1419",
      y1: "55.036",
      y2: "59.8645",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21.7419",
      x2: "18.858",
      y1: "55.036",
      y2: "59.8645",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.8497,12.5761c0.9692-0.8502,2.2395-1.3655,3.6301-1.3655c3.0417,0,5.5076,2.4657,5.5076,5.5075 c0,1.1088-0.3277,2.1411-0.8914,3.0052"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.1504,12.5761c-0.9693-0.8502-2.2396-1.3655-3.6302-1.3655c-3.0417,0-5.5075,2.4657-5.5075,5.5075 c0,1.1088,0.3276,2.1411,0.8914,3.0052"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36.2941",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0257",
      x2: "36.0257",
      y1: "18.9893",
      y2: "35.9893",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9742",
      x2: "29.9742",
      y1: "35.9349",
      y2: "46.3272",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0785"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,12.6326"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.0725"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.2478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,12.7539"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.258",
      x2: "53.1419",
      y1: "55.036",
      y2: "59.8645",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21.7419",
      x2: "18.858",
      y1: "55.036",
      y2: "59.8645",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.8497,12.5761c0.9692-0.8502,2.2395-1.3655,3.6301-1.3655c3.0417,0,5.5076,2.4657,5.5076,5.5075 c0,1.1088-0.3277,2.1411-0.8914,3.0052"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.1504,12.5761c-0.9693-0.8502-2.2396-1.3655-3.6302-1.3655c-3.0417,0-5.5075,2.4657-5.5075,5.5075 c0,1.1088,0.3276,2.1411,0.8914,3.0052"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36.2941",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0257",
      x2: "36.0257",
      y1: "18.9893",
      y2: "35.9893",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.9742",
      x2: "29.9742",
      y1: "35.9349",
      y2: "46.3272",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0785"
    })));
  }
};

export default AlarmClock;