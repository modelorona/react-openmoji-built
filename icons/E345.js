import React from 'react';

const Spade = ({
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
      id: "color",
      transform: "translate(-8.725 -6.562) scale(1.264)",
      strokeWidth: "0.6256"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "m39.04 14.27 0.0438-2.79-7.178 0.0215-0.0231 2.688 1.136 1.506a2.6 2.6 0 0 1 0.507 1.566l-0.0521 21.89h3.682l0.2063-21.75a2.558 2.558 0 0 1 0.6584-1.715z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m35.38 39.58v15.84c-1.824-0.01571-3.793-0.8574-5.827-2.064l-0.1956-13.78z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m41.4 39.58v13.87l-6.023 2.24v-16.11z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40.8 11.51 0.057-3.538-9.34 0.02726-0.03006 3.409 1.478 1.91a3.383 3.297 0 0 1 0.6597 1.986l-0.0678 27.75h4.792l0.2685-27.58a3.328 3.243 0 0 1 0.8568-2.174z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m36.16 43.43-0.0036 20.27s-6.522-0.6626-7.042-1.74c-0.5203-1.077-0.5829-18.33-0.5829-18.33z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m43.45 43.82 0.07691 17.61s-6.788 3.69-7.303 2.612c-0.01926-1.633-0.4829-20.46-0.4829-20.46z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m43.61 61.02v-17.54l-15.23 1e-3s0.2472 17.38 0.2472 17.42l0.5058 0.4658c3.928 3.495 9.924 3.555 13.92 0.1382z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m31.84 43.48 2.733 6.094c0.6533 0.9651 2.095 0.9978 2.793 0.0634l2.801-6.157"
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
      id: "line",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40.8 11.51 0.057-3.538-9.34 0.02726-0.03006 3.409 1.478 1.91a3.383 3.297 0 0 1 0.6597 1.986l-0.0678 27.75h4.792l0.2685-27.58a3.328 3.243 0 0 1 0.8568-2.174z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m36.16 43.43-0.0036 20.27s-6.522-0.6626-7.042-1.74c-0.5203-1.077-0.5829-18.33-0.5829-18.33z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m43.45 43.82 0.07691 17.61s-6.788 3.69-7.303 2.612c-0.01926-1.633-0.4829-20.46-0.4829-20.46z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m43.61 61.02v-17.54l-15.23 1e-3s0.2472 17.38 0.2472 17.42l0.5058 0.4658c3.928 3.495 9.924 3.555 13.92 0.1382z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m31.84 43.48 2.733 6.094c0.6533 0.9651 2.095 0.9978 2.793 0.0634l2.801-6.157"
    })));
  }
};

export default Spade;