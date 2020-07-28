import React from 'react';

const Paperclip = ({
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
      d: "M27.7547,31.7245l15.2668,15.2632c1.1716,1.1716,3.0711,1.1716,4.2426,0c1.1716-1.1715,1.1716-3.071,0-4.2426L24.1953,19.6747 c-2.3431-2.3432-6.1421-2.3432-8.4853,0c-2.3431,2.3431-2.3431,6.1421,0,8.4852l25.1983,25.3054 c3.9053,3.9052,10.2369,3.9052,14.1422-0.0001c3.9052-3.9052,3.9052-10.2369-0.0001-14.1421L42.5472,26.8199"
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
      d: "M27.7547,31.7245l15.2668,15.2632c1.1716,1.1716,3.0711,1.1716,4.2426,0c1.1716-1.1715,1.1716-3.071,0-4.2426L24.1953,19.6747 c-2.3431-2.3432-6.1421-2.3432-8.4853,0c-2.3431,2.3431-2.3431,6.1421,0,8.4852l25.1983,25.3054 c3.9053,3.9052,10.2369,3.9052,14.1422-0.0001c3.9052-3.9052,3.9052-10.2369-0.0001-14.1421L42.5472,26.8199"
    })));
  }
};

export default Paperclip;