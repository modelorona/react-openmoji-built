import React from 'react';

const Bucket = ({
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
      fill: "#92d3f5",
      d: "m44.01 60.96h-16.57a3.857 3.857 0 0 1-3.816-3.444l-2.695-23.7h29.83l-2.936 23.74a3.864 3.864 0 0 1-3.811 3.406z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m45.04 33.81-2.937 23.74a3.864 3.864 0 0 1-3.811 3.406h5.716a3.864 3.864 0 0 0 3.811-3.406l2.936-23.74z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m50.97 35.87h-30.02a2.172 2.172 0 0 1-2.156-2.183v-0.7919a5.459 5.459 0 0 1 5.418-5.486h23.5a5.459 5.459 0 0 1 5.418 5.486v0.7919a2.172 2.172 0 0 1-2.155 2.183z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m40.73 8.888v5.155h-9.552v-5.155z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m49.18 38.23-2.374 19.19a2.836 2.836 0 0 1-2.802 2.504h-16.57a2.836 2.836 0 0 1-2.805-2.532l-2.179-19.17"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m50.97 34.84a1.145 1.145 0 0 0 1.138-1.153v-0.7926a4.428 4.428 0 0 0-4.4-4.456h-23.5a4.428 4.428 0 0 0-4.4 4.456v0.7926a1.145 1.145 0 0 0 1.138 1.152z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.18",
      y: "8.888",
      width: "9.552",
      height: "5.155",
      transform: "translate(71.91 22.93) rotate(180)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m40.71 11.54a20.7 20.7 0 0 1 15.29 20.26h-1.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m31.18 11.57a20.7 20.7 0 0 0-15.18 20.23h1.156"
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
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m49.18 38.23-2.374 19.19a2.836 2.836 0 0 1-2.802 2.504h-16.57a2.836 2.836 0 0 1-2.805-2.532l-2.179-19.17"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m50.97 34.84a1.145 1.145 0 0 0 1.138-1.153v-0.7926a4.428 4.428 0 0 0-4.4-4.456h-23.5a4.428 4.428 0 0 0-4.4 4.456v0.7926a1.145 1.145 0 0 0 1.138 1.152z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "31.18",
      y: "8.888",
      width: "9.552",
      height: "5.155",
      transform: "translate(71.91 22.93) rotate(180)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m40.71 11.54a20.7 20.7 0 0 1 15.29 20.26h-1.01"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m31.18 11.57a20.7 20.7 0 0 0-15.18 20.23h1.156"
    })));
  }
};

export default Bucket;