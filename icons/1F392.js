import React from 'react';

const Backpack = ({
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
      fill: "#D22F27",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,31.0833c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20v33.875h40V31.0833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6465,52.9649v7.6214H20.3535v-7.492v1.9266v-24.416c0-8.6413,7.0052-15.6465,15.6465-15.6465s15.6465,7.0052,15.6465,15.6465 v24.416"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,31.0833c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20v33.875h40V31.0833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6465,52.9649v7.6214H20.3535v-7.492v1.9266v-24.416c0-8.6413,7.0052-15.6465,15.6465-15.6465s15.6465,7.0052,15.6465,15.6465 v24.416"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.9041",
      x2: "46.898",
      y1: "49.4554",
      y2: "49.4554",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,9c0-2.7614,2.2386-5,5-5s5,2.2386,5,5"
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
      d: "M56,31.0833c0-11.0457-8.9543-20-20-20s-20,8.9543-20,20v33.875h40V31.0833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6465,52.9649v7.6214H20.3535v-7.492v1.9266v-24.416c0-8.6413,7.0052-15.6465,15.6465-15.6465s15.6465,7.0052,15.6465,15.6465 v24.416"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.9041",
      x2: "46.898",
      y1: "49.4554",
      y2: "49.4554",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,9c0-2.7614,2.2386-5,5-5s5,2.2386,5,5"
    })));
  }
};

export default Backpack;