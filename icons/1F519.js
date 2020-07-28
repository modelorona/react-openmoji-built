import React from 'react';

const BACKArrow = ({
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
      fill: "#3f3f3f",
      d: "m56.25 26.12v5.867h-27.84v8.067l-12.66-11 12.84-11.02s-0.1813 8.089-0.1813 8.089 27.84-3e-3 27.84-3e-3"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m56.25 31.99h-27.84v8.067l-12.66-11 12.66-11v8.066h27.84v5.867"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m34.99 53.94-4.1-10s-4.09 10-4.09 10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m28.16 51.54h5.47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.64 44.38v9.56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.64 50.58s5.47-6.2 5.47-6.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m51.27 47.59 3.28 6.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m44.76 53.04c-0.6237 0.5544-1.43 0.86-2.264 0.8589v0c-0.9054 2.653e-4 -1.774-0.3592-2.414-0.9993-0.6403-0.6401-1-1.508-1-2.414v-2.731c5.52e-4 -1.885 1.528-3.412 3.413-3.413v0c0.8345-0.001186 1.64 0.3046 2.264 0.8591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.43 49.1h-3.645v-4.761h3.645c1.315-1.159e-7 2.38 1.065 2.381 2.38v0c2.654e-4 0.6316-0.2505 1.237-0.6971 1.684s-1.052 0.6974-1.684 0.6971v0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.43 53.86h-3.645v-4.761h3.645c1.314 5.518e-4 2.379 1.066 2.38 2.38v-2.9e-9c1.175e-7 1.315-1.065 2.38-2.38 2.381v0"
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
      d: "m56.25 31.99h-27.84v8.067l-12.66-11 12.66-11v8.066h27.84v5.867"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m34.99 53.94-4.1-10s-4.09 10-4.09 10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m28.16 51.54h5.47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.64 44.38v9.56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m48.64 50.58s5.47-6.2 5.47-6.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m51.27 47.59 3.28 6.35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m44.76 53.04c-0.6237 0.5544-1.43 0.86-2.264 0.8589v0c-0.9054 2.653e-4 -1.774-0.3592-2.414-0.9993-0.6403-0.6401-1-1.508-1-2.414v-2.731c5.52e-4 -1.885 1.528-3.412 3.413-3.413v0c0.8345-0.001186 1.64 0.3046 2.264 0.8591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.43 49.1h-3.645v-4.761h3.645c1.315-1.159e-7 2.38 1.065 2.381 2.38v0c2.654e-4 0.6316-0.2505 1.237-0.6971 1.684s-1.052 0.6974-1.684 0.6971v0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.43 53.86h-3.645v-4.761h3.645c1.314 5.518e-4 2.379 1.066 2.38 2.38v-2.9e-9c1.175e-7 1.315-1.065 2.38-2.38 2.381v0"
    })));
  }
};

export default BACKArrow;