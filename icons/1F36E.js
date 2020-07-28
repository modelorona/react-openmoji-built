import React from 'react';

const Custard = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "38.5",
      cy: "15",
      r: "2",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "15",
      r: "2",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "11",
      r: "2",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60,57c0,1.6563-1.3428,3-3,3H15c-1.6572,0-3-1.3437-3-3v-1h48V57z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M55.7666,34.4141L58,56H14l2.2334-21.5859L17,27c0-5.5229,4.4775-10,10-10h18c5.5225,0,10,4.4771,10,10 L55.7666,34.4141z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      stroke: "none",
      d: "M55.5332,34.4141C55.0371,34.7773,54.4297,35,53.7666,35c-1.6572,0-3-1.3437-3-3v-2c0-1.6567-1.3428-3-3-3 s-3,1.3433-3,3v2c0,1.6563-1.3428,3-3,3s-3-1.3437-3-3v-2c0-1.6567-1.3428-3-3-3s-3,1.3433-3,3v2c0,1.6563-1.3428,3-3,3 s-3-1.3437-3-3v-2c0-1.6567-1.3428-3-3-3c-1.6572,0-3,1.3433-3,3v2c0,1.6563-1.3428,3-3,3c-0.6631,0-1.2705-0.2227-1.7666-0.5859 L16.7666,27c0-5.5229,4.4775-10,10-10h18c5.5225,0,10,4.4771,10,10L55.5332,34.4141z"
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
      d: "M60,57c0,1.6563-1.3428,3-3,3H15c-1.6572,0-3-1.3437-3-3v-1h48V57z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.5",
      cy: "15",
      r: "2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "15",
      r: "2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "11",
      r: "2",
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
      d: "M16.2334,34.4141L17,27c0-5.5229,4.4775-10,10-10h18c5.5225,0,10,4.4771,10,10l0.7666,7.4141"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.2334,34.4141 14,56 58,56 55.7666,34.4141"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2334,34.4141C16.7295,34.7773,17.3369,35,18,35c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2 c0,1.6563,1.3428,3,3,3c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2c0,1.6563,1.3428,3,3,3 c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2c0,1.6563,1.3428,3,3,3 c0.6631,0,1.2705-0.2227,1.7666-0.5859"
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
      d: "M60,57c0,1.6563-1.3428,3-3,3H15c-1.6572,0-3-1.3437-3-3v-1h48V57z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.5",
      cy: "15",
      r: "2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "15",
      r: "2",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "11",
      r: "2",
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
      d: "M16.2334,34.4141L17,27c0-5.5229,4.4775-10,10-10h18c5.5225,0,10,4.4771,10,10l0.7666,7.4141"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.2334,34.4141 14,56 58,56 55.7666,34.4141"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2334,34.4141C16.7295,34.7773,17.3369,35,18,35c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2 c0,1.6563,1.3428,3,3,3c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2c0,1.6563,1.3428,3,3,3 c1.6572,0,3-1.3437,3-3v-2c0-1.6567,1.3428-3,3-3c1.6572,0,3,1.3433,3,3v2c0,1.6563,1.3428,3,3,3 c0.6631,0,1.2705-0.2227,1.7666-0.5859"
    })));
  }
};

export default Custard;