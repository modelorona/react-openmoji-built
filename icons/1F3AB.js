import React from 'react';

const Ticket = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      d: "M48.7127,23.515c-3.4279-3.5522-4.0284-8.7836-1.8682-12.9334l-3.6009-3.7315L6.8857,41.9362l3.8016,3.9394 c4.0722-1.5735,8.8681-0.6711,12.09,2.6676c3.2219,3.3387,3.9531,8.1636,2.2356,12.1773l3.8016,3.9394l36.3579-35.0861 l-3.6009-3.7315C57.3473,27.8534,52.1406,27.0671,48.7127,23.515z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.1546,23.505 c-3.4279-3.5522-4.0284-8.7836-1.8682-12.9334l-3.6009-3.7315L6.3276,41.9262l3.8016,3.9394 c4.0722-1.5735,8.8681-0.6711,12.09,2.6676s3.9531,8.1636,2.2356,12.1773l3.8016,3.9394l36.3579-35.0861l-3.6009-3.7315 C56.7892,27.8434,51.5825,27.0572,48.1546,23.505z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "37.1223",
      cy: "22.122",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -4.8096 32.5704)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.6116",
      cy: "28.6606",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -7.5322 39.0393)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50.101",
      cy: "35.1992",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -10.2548 45.5083)",
      fill: "#000000",
      stroke: "none"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.1546,23.505 c-3.4279-3.5522-4.0284-8.7836-1.8682-12.9334l-3.6009-3.7315L6.3276,41.9262l3.8016,3.9394 c4.0722-1.5735,8.8681-0.6711,12.09,2.6676s3.9531,8.1636,2.2356,12.1773l3.8016,3.9394l36.3579-35.0861l-3.6009-3.7315 C56.7892,27.8434,51.5825,27.0572,48.1546,23.505z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "37.1223",
      cy: "22.122",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -4.8096 32.5704)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.6116",
      cy: "28.6606",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -7.5322 39.0393)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50.101",
      cy: "35.1992",
      rx: "2",
      ry: "2",
      transform: "matrix(0.7098 -0.7044 0.7044 0.7098 -10.2548 45.5083)",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default Ticket;