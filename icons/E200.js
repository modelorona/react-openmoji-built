import React from 'react';

const Cafeteria = ({
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
      fill: "#d0cfce",
      d: "m22.81 29.6s-0.6781-0.3875-1.162-4.844h6.781s-0.2906 3.778-1.356 4.844"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "m37.94 55.69h-3.875v-22.28l-17.44-0.09688v-3.681h38.75v3.681l-17.44 0.09687z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "m47.66 41.24-0.01512 14.45h-3.881l0.03125-18.32h19.38v-20.44h3.875v38.75h-3.875v-14.43z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "m8.862 41.25v14.43h-3.875v-38.75h3.875v20.44h19.38v18.31h-3.875v-14.43z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m22.8 29.6s-0.6792-0.3879-1.164-4.849h6.792s-0.2911 3.782-1.358 4.849"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m37.94 55.69h-3.881v-22.31l-17.47-0.09698v-3.685h38.81v3.685l-17.47 0.09698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m47.63 41.24 0.0099 14.45h-3.881v-18.33h19.41v-20.46h3.881v38.79h-3.881v-14.45z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.39 20.19s0.5822-1.94 0-3.879"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m26.1 20.19s0.5822-1.746 0-3.394"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m28.24 37.36v18.33h-3.881v-14.45l-15.52-2e-6v14.37l-3.881 0.08v-38.79h3.881v20.46z"
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
      d: "m22.8 29.6s-0.6792-0.3879-1.164-4.849h6.792s-0.2911 3.782-1.358 4.849"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m37.94 55.69h-3.881v-22.31l-17.47-0.09698v-3.685h38.81v3.685l-17.47 0.09698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m47.63 41.24 0.0099 14.45h-3.881v-18.33h19.41v-20.46h3.881v38.79h-3.881v-14.45z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.39 20.19s0.5822-1.94 0-3.879"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m26.1 20.19s0.5822-1.746 0-3.394"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m28.24 37.36v18.33h-3.881v-14.45l-15.52-2e-6v14.37l-3.881 0.08v-38.79h3.881v20.46z"
    })));
  }
};

export default Cafeteria;