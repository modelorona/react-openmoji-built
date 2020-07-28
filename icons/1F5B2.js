import React from 'react';

const Trackball = ({
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
      fill: "#d0cfce",
      d: "m38.32 14.95h-4.638a12.72 12.72 0 0 0-12.68 12.68v22.84a12.72 12.72 0 0 0 12.68 12.68h4.638a12.72 12.72 0 0 0 12.68-12.68v-22.84a12.72 12.72 0 0 0-12.68-12.68z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m34.84 16.71c3.809 1.634 7.429 3.98 7.851 9.907 0.4884 6.864-2.052 19.72-2.868 26.25-0.571 4.565-2.829 6.678-5.826 9.074 7.15 1.956 12.45-1.073 15.39-3.987 2.791-10 1.554-22.51 1.443-33.41-0.8459-5.23-6.24-8.613-11.53-8.356 0 0-9.629-0.4959-4.459 0.5303z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.74",
      cy: "30.51",
      r: "8.902",
      fill: "#f4aa41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "m37.95 21.03a6.238 6.238 0 0 1 1.407 3.94 8.902 8.902 0 0 1-8.902 8.901c-1.765 0-2.272-0.52-3.656-1.407 1.582 2.47 6.045 6.946 9.196 6.946a8.902 8.902 0 0 0 8.902-8.902c-1e-4 -3.151-4.476-7.897-6.946-9.479z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40.13 62.42h-8.259a10.75 10.75 0 0 1-10.72-10.72v-25.31a10.75 10.75 0 0 1 10.72-10.72h8.259a10.75 10.75 0 0 1 10.72 10.72v25.31a10.75 10.75 0 0 1-10.72 10.72z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "30.51",
      r: "8.902",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36 15.1c0.5005-13.15-19.03-4.582-21.79-9.568"
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
      d: "m40.13 62.42h-8.259a10.75 10.75 0 0 1-10.72-10.72v-25.31a10.75 10.75 0 0 1 10.72-10.72h8.259a10.75 10.75 0 0 1 10.72 10.72v25.31a10.75 10.75 0 0 1-10.72 10.72z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "30.51",
      r: "8.902",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36 15.1c0.5005-13.15-19.03-4.582-21.79-9.568"
    })));
  }
};

export default Trackball;