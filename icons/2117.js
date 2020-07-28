import React from 'react';

const SoundRecordingCopyright = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "#fff",
      "fill-rule": "evenodd",
      "paint-order": "normal"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(29.2 21.73) scale(4.079)",
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m0 7v-7h2.669c0.963 0 1.744 0.781 1.744 1.744s-0.781 1.743-1.744 1.743h-2.669",
      "clip-rule": "evenodd"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26.68",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "4.74",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(29.2 21.73) scale(4.079)",
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m0 7v-7h2.669c0.963 0 1.744 0.781 1.744 1.744s-0.781 1.743-1.744 1.743h-2.669",
      "clip-rule": "evenodd"
    })));
  }
};

export default SoundRecordingCopyright;