import React from 'react';

const Envelope = ({
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
      fill: "#D0CFCE",
      d: "M28,37l-4,4l-1.3301-0.4409L11.4549,50.89c-0.35-0.6201-0.57-1.44-0.57-2.32V22.06L28,37z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M60.8249,22.01v26.56c0,0.86-0.2,1.65-0.55,2.27L48.9583,40.478l-1.0289,0.0579l-4.0645-3.806 L60.8249,22.01z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5207",
      x2: "11.4583",
      y1: "21.6493",
      y2: "21.6103",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M26.8049,36.75l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01 c0.23-0.16,0.47-0.36,0.69-0.56l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M26.8049,36.75l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56l4.5-4.15 l15.41,14.11c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22L26.8049,36.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M47.9294,39.536L60.2749,50.84c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22 L23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M47.0238,38.7068"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M60.8249,22.01l-15.96,14.72l-4.5,4.15c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.6801,0.01 c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h46.48 c0.59,0,1.16,0.35,1.5699,0.91C60.7349,21.87,60.7849,21.94,60.8249,22.01z"
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
      d: "M22.6699,40.5591L11.4549,50.89c-0.35-0.6201-0.57-1.44-0.57-2.32V22.06"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.8249,22.01v26.56c0,0.86-0.2,1.65-0.55,2.27L48.9583,40.478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5207",
      x2: "11.4583",
      y1: "21.6493",
      y2: "21.6103",
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
      d: "M26.8049,36.75l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9294,39.536L60.2749,50.84c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22L23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.0238,38.7068"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.8249,22.01l-15.96,14.72l-4.5,4.15c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.6801,0.01 c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h46.48 c0.59,0,1.16,0.35,1.5699,0.91C60.7349,21.87,60.7849,21.94,60.8249,22.01z"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.6699,40.5591L11.4549,50.89c-0.35-0.6201-0.57-1.44-0.57-2.32V22.06"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.8249,22.01v26.56c0,0.86-0.2,1.65-0.55,2.27L48.9583,40.478"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "11.5207",
      x2: "11.4583",
      y1: "21.6493",
      y2: "21.6103",
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
      d: "M26.8049,36.75l4.47,4.13c0.24,0.22,0.48,0.41,0.72,0.57c2.4301,1.8,5.26,1.8,7.6801-0.01c0.23-0.16,0.47-0.36,0.69-0.56l4.5-4.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9294,39.536L60.2749,50.84c-0.42,0.77-1.07,1.27-1.79,1.27h-45.26c-0.7,0-1.34-0.47-1.77-1.22L23.533,39.764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.0238,38.7068"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.8249,22.01l-15.96,14.72l-4.5,4.15c-0.22,0.2-0.46,0.4-0.69,0.56c-2.42,1.81-5.25,1.81-7.6801,0.01 c-0.24-0.16-0.48-0.35-0.72-0.57l-4.47-4.13l-15.92-14.69c0.04-0.06,0.09-0.13,0.14-0.2c0.42-0.6,0.99-0.96,1.61-0.96h46.48 c0.59,0,1.16,0.35,1.5699,0.91C60.7349,21.87,60.7849,21.94,60.8249,22.01z"
    })));
  }
};

export default Envelope;