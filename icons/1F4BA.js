import React from 'react';

const Seat = ({
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
      d: "M49.2446,52.5931H29.9128c-0.5523,0-1,0.4477-1,1V57.5c0,1.3807,1.1193,2.5,2.5,2.5h17.8318 c0.5523,0,1-0.4477,1-1v-5.4069C50.2446,53.0408,49.7969,52.5931,49.2446,52.5931z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M50.5779,46.6676H28.5796c-0.5523,0-1,0.4477-1,1v3.4069c0,1.6569,1.3431,3,3,3h17.9983 c1.6568,0,3-1.3431,3-3v-3.4069C51.5779,47.1153,51.1301,46.6676,50.5779,46.6676z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M33.917,43.1837l-9.2373-29.4265c-0.1654-0.5269-0.7266-0.82-1.2535-0.6546l-5.1587,1.6194 c-0.527,0.1654-0.82,0.7266-0.6546,1.2536l9.2372,29.4264c0.1654,0.527,0.7267,0.82,1.2536,0.6546l5.1587-1.6193 C33.7893,44.2718,34.0824,43.7106,33.917,43.1837z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M52.91,43.22v3.93c0,0.55-0.45,1-1,1H27.25c-0.56,0-1-0.45-1-1v-3.66l-8.64-27.51 c-0.16-0.53,0.13-1.09,0.66-1.26l5.16-1.62c0.52-0.16,1.08,0.13,1.25,0.66l8.94,28.46h18.29C52.46,42.22,52.91,42.67,52.91,43.22z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M29.4966,24.3829l-3.3355-10.6257c-0.1654-0.5269-0.7266-0.82-1.2536-0.6546l-1.0688,0.3355 c-0.527,0.1654-0.82,0.7267-0.6546,1.2536l3.3355,10.6257c0.1654,0.5269,0.7266,0.82,1.2536,0.6546l1.0688-0.3355 C29.369,25.4711,29.662,24.9098,29.4966,24.3829z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M46.0288,33.3353h-17.072C28.4284,33.3353,28,33.7636,28,34.292v2.5306 c0,0.5284,0.4284,0.9568,0.9568,0.9568h17.072c0.5284,0,0.9568-0.4284,0.9568-0.9568V34.292 C46.9856,33.7636,46.5572,33.3353,46.0288,33.3353z"
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
      d: "M50.24,53.5698c0,0.01,0,0.01,0,0.02v5.41c0,0.55-0.44,1-1,1H31.41c-1.3799,0-2.5-1.12-2.5-2.5v-3.91c0-0.01,0-0.01,0-0.02 c0.48,0.31,1.05,0.5,1.67,0.5h18C49.19,54.0698,49.76,53.8798,50.24,53.5698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.58,48.1498v2.92c0,1.05-0.54,1.96-1.34,2.5c-0.48,0.31-1.05,0.5-1.66,0.5h-18c-0.62,0-1.19-0.19-1.67-0.5 c-0.8-0.54-1.33-1.46-1.33-2.5v-2.92H51.58z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.84,25.6398l-0.39,0.12l-0.68,0.21c-0.52,0.17-1.09-0.13-1.25-0.65l-3.34-10.63c-0.16-0.52,0.13-1.09,0.66-1.25l0.49-0.16h0.01 l0.5699-0.18c0.52-0.16,1.09,0.1299,1.25,0.66l3.34,10.62C29.66,24.9098,29.37,25.4698,28.84,25.6398z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.91,43.2198v3.93c0,0.55-0.45,1-1,1H27.25c-0.56,0-1-0.45-1-1v-3.66l-8.64-27.51c-0.16-0.53,0.13-1.09,0.66-1.2599l5.16-1.62 c0.15-0.05,0.3-0.05,0.45-0.03c0.06,0.01,0.11,0.03,0.16,0.05c0.11,0.03,0.2,0.09,0.29,0.16l-0.49,0.16 c-0.53,0.16-0.82,0.73-0.66,1.25l3.34,10.63c0.16,0.52,0.73,0.82,1.25,0.65l0.68-0.21l2.38,7.58h-1.87c-0.53,0-0.96,0.42-0.96,0.95 v2.53c0,0.53,0.43,0.96,0.96,0.96h3.27l1.39,4.44h18.29C52.46,42.2198,52.91,42.6697,52.91,43.2198z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9136",
      d: "M46.99,34.2897v2.53c0,0.53-0.43,0.96-0.96,0.96H28.96c-0.53,0-0.96-0.43-0.96-0.96v-2.53c0-0.53,0.43-0.95,0.96-0.95h17.07 C46.56,33.3398,46.99,33.7598,46.99,34.2897z"
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
      d: "M50.24,53.5698c0,0.01,0,0.01,0,0.02v5.41c0,0.55-0.44,1-1,1H31.41c-1.3799,0-2.5-1.12-2.5-2.5v-3.91c0-0.01,0-0.01,0-0.02 c0.48,0.31,1.05,0.5,1.67,0.5h18C49.19,54.0698,49.76,53.8798,50.24,53.5698z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.58,48.1498v2.92c0,1.05-0.54,1.96-1.34,2.5c-0.48,0.31-1.05,0.5-1.66,0.5h-18c-0.62,0-1.19-0.19-1.67-0.5 c-0.8-0.54-1.33-1.46-1.33-2.5v-2.92H51.58z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.84,25.6398l-0.39,0.12l-0.68,0.21c-0.52,0.17-1.09-0.13-1.25-0.65l-3.34-10.63c-0.16-0.52,0.13-1.09,0.66-1.25l0.49-0.16h0.01 l0.5699-0.18c0.52-0.16,1.09,0.1299,1.25,0.66l3.34,10.62C29.66,24.9098,29.37,25.4698,28.84,25.6398z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.91,43.2198v3.93c0,0.55-0.45,1-1,1H27.25c-0.56,0-1-0.45-1-1v-3.66l-8.64-27.51c-0.16-0.53,0.13-1.09,0.66-1.2599l5.16-1.62 c0.15-0.05,0.3-0.05,0.45-0.03c0.06,0.01,0.11,0.03,0.16,0.05c0.11,0.03,0.2,0.09,0.29,0.16l-0.49,0.16 c-0.53,0.16-0.82,0.73-0.66,1.25l3.34,10.63c0.16,0.52,0.73,0.82,1.25,0.65l0.68-0.21l2.38,7.58h-1.87c-0.53,0-0.96,0.42-0.96,0.95 v2.53c0,0.53,0.43,0.96,0.96,0.96h3.27l1.39,4.44h18.29C52.46,42.2198,52.91,42.6697,52.91,43.2198z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9136",
      d: "M46.99,34.2897v2.53c0,0.53-0.43,0.96-0.96,0.96H28.96c-0.53,0-0.96-0.43-0.96-0.96v-2.53c0-0.53,0.43-0.95,0.96-0.95h17.07 C46.56,33.3398,46.99,33.7598,46.99,34.2897z"
    })));
  }
};

export default Seat;