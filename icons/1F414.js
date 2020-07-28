import React from 'react';

const Chicken = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "m44.62 26.25s4.375-7.25 2.375-8.25-5 1-5 1 2-7-2-7-5 4-5 4-1.457-8.296-7-6c-3.464 1.435-5 5 0 15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m36 64s30-1 15-29c0 0-4-11-15-11-3.104 0-5.65 0.7166-7.729 1.79-5.289 2.732-7.553 7.774-8.271 9.21-1 2-16 27 16 29z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "m36 43s18-1 0 18c0 0-18-18 0-18z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m44.46 26.25s4.375-7.25 2.375-8.25-5 1-5 1 2-7-2-7-5 4-5 4-1.457-8.296-7-6c-3.464 1.435-5 5 0 15"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27",
      cy: "39",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "39",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m36.02 43s18-1 0 18c0 0-18-18 0-18z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m21 35s4-11 15-11 15 11 15 11c15 28-15 29-15 29s-30-1-15-29z"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m44.46 26.25s4.375-7.25 2.375-8.25-5 1-5 1 2-7-2-7-5 4-5 4-1.457-8.296-7-6c-3.464 1.435-5 5 0 15"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27",
      cy: "39",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "39",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m36.02 43s18-1 0 18c0 0-18-18 0-18z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m21 35s4-11 15-11 15 11 15 11c15 28-15 29-15 29s-30-1-15-29z"
    })));
  }
};

export default Chicken;