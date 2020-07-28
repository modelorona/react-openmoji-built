import React from 'react';

const BerlinFlag = ({
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
      fill: "#fff",
      d: "M67 17H5.31909V54.8044H67V17Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "8",
      fill: "#D22F27"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "47",
      width: "62",
      height: "8",
      fill: "#D22F27"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "bevel",
      d: "m29 29h2.5"
    }), /*#__PURE__*/React.createElement("path", {
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m34.45 39.55c-0.1988 1.895-0.0059 2.834 0.5562 4.637-1.005 1.063-1.834 2.039-3.279 2.039l-0.3433-1.028 1.62-0.5105c-0.9113-1.066-2.173-2.228-2.002-2.999-2.507 0.2343-2.746 1.631-3.661 3.763l-3.004-0.9997 0.4613-1.107 1.698 0.8426c-0.4406-2.904 0.9531-4.623 3.004-5.998-0.8301-0.6769-0.949-1.62-0.9503-2.607-2.516 0.6583-4.081 0.8835-5.557-1.391l0.5006-0.9997c1.766 3.186 2.875 1.521 5.084 0.2249-4.49-2.806-3.859-1.68-5.084-4.724l1.001-0.4998c0.5779 2.902 2.239 2.353 4.505 2.999l2.503-1.999c-0.6635-2.516-2.985-0.184-3.004-2.499h1.502c1.595-1.816 3.339-0.361 4.505-0.4998l-0.5006 0.9997c0.1421 1.168 3e-3 1.993-0.5006 2.999 1.237 1.851-0.1047 2.506-0.3807 4.573-0.1109 0.8306 1.116 3.144 1.326 4.786z",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "bevel",
      d: "m29 29h2.5"
    }), /*#__PURE__*/React.createElement("path", {
      "fill-rule": "evenodd",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m34.45 39.55c-0.1988 1.895-0.0059 2.834 0.5562 4.637-1.005 1.063-1.834 2.039-3.279 2.039l-0.3433-1.028 1.62-0.5105c-0.9113-1.066-2.173-2.228-2.002-2.999-2.507 0.2343-2.746 1.631-3.661 3.763l-3.004-0.9997 0.4613-1.107 1.698 0.8426c-0.4406-2.904 0.9531-4.623 3.004-5.998-0.8301-0.6769-0.949-1.62-0.9503-2.607-2.516 0.6583-4.081 0.8835-5.557-1.391l0.5006-0.9997c1.766 3.186 2.875 1.521 5.084 0.2249-4.49-2.806-3.859-1.68-5.084-4.724l1.001-0.4998c0.5779 2.902 2.239 2.353 4.505 2.999l2.503-1.999c-0.6635-2.516-2.985-0.184-3.004-2.499h1.502c1.595-1.816 3.339-0.361 4.505-0.4998l-0.5006 0.9997c0.1421 1.168 3e-3 1.993-0.5006 2.999 1.237 1.851-0.1047 2.506-0.3807 4.573-0.1109 0.8306 1.116 3.144 1.326 4.786z",
      "clip-rule": "evenodd"
    })));
  }
};

export default BerlinFlag;