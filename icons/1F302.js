import React from 'react';

const ClosedUmbrella = ({
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
      fill: "#8967aa",
      d: "m54.75 64.05-9.824-39.03c-12.55 2.717-15 5.801-19.45 11.19z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      d: "m29.18 31.43 25.57 32.62-21.28-36.38z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      d: "m38.82 25.89 15.93 38.16-9.824-39.03c-1.715 1.145-3.645 1.719-6.111 0.8618z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m25.48 36.21c2.03-0.4991 3.683-3.204 3.7-4.783 1.717-0.2918 3.768-1.743 4.293-3.76 1.858 0.7027 4.348-0.05031 5.344-1.785 1.475 1.057 4.452 0.9916 6.111-0.8618l9.824 39.03z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m33.47 27.67-10.61-18.15c-2.058-3.519-7.198-0.5248-5.144 2.988"
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
      d: "m25.48 36.21c2.03-0.4991 3.683-3.204 3.7-4.783 1.717-0.2918 3.768-1.743 4.293-3.76 1.858 0.7027 4.348-0.05031 5.344-1.785 1.475 1.057 4.452 0.9916 6.111-0.8618l9.824 39.03z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m33.47 27.67-10.61-18.15c-2.058-3.519-7.198-0.5248-5.144 2.988"
    })));
  }
};

export default ClosedUmbrella;