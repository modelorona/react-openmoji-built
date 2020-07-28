import React from 'react';

const MensRoom = ({
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
      fill: "#61b2e4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m60 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m43.2 40.83-0.6336-15.2c-0.0917-1.839-2.366-3.982-4.166-4h-4.8c-1.8 0.0175-4.075 2.161-4.166 4l-0.6336 15.2c-0.0047 0.1041 0.6157 0.6698 0.5739 0.7648l2.524-1.98-0.7458 17.69c-0.026 0.252 0.2117 0.5213 0.3655 0.72 0.0303 0.0387 0.0737 0.0644 0.1216 0.0721 0.1712 0 0.5256-0.3422 0.5888-0.9004l2.034-18.03c0.0429-0.3697 0.1378-0.7311 0.2816-1.073l0.7872-0.4984h1.3l0.5796 0.6441c0.123 0.3151 0.2828 0.6169 0.3223 0.9538l2.319 18c0.0632 0.5591 0.4168 0.9004 0.588 0.9004 0.0479-0.0077 0.0912-0.0333 0.1216-0.072 0.1539-0.1987 0.2257-0.451 0.2-0.7031l-0.5709-17.71 2.401 1.945c-0.058-0.1074 0.6151-0.6073 0.6094-0.7299z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "16.08",
      r: "2.375",
      fill: "#fff"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m60 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40 26.36 1.52 30.4c0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m43.2 40.76-0.6336-15.2c-0.1156-2.224-1.94-3.975-4.166-4h-4.8c-2.227 0.0249-4.051 1.776-4.166 4l-0.6336 15.2"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m60 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40 26.36 1.52 30.4c0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m43.2 40.76-0.6336-15.2c-0.1156-2.224-1.94-3.975-4.166-4h-4.8c-2.227 0.0249-4.051 1.776-4.166 4l-0.6336 15.2"
    })));
  }
};

export default MensRoom;