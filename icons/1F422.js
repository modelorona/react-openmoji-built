import React from 'react';

const Turtle = ({
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
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeMiterlimit: "10",
      strokeWidth: "1.185",
      d: "m39.95 44.06s8.292 0 10.66-1.185c2.369-1.185 4.22 0.8144 4.22 0.8144 0.6663-1.555-0.6663-3.183-0.6663-3.183 4.738 2.369 7.107 0 7.107 0 3.554 0 3.554-14.21-5.923-15.4-9.476-1.185-9.476 10.66-9.476 10.66l-2.369 1.185s0 2.369-3.554 7.107z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      strokeWidth: "1.185",
      d: "m43.5 35.77s-10.66-10.66-22.51-5.923c-11.85 4.738-10.66 16.58-10.66 16.58s8.292 5.923 18.95 2.369c10.66-3.554 11.99-6.663 11.99-6.663s2.221-1.629 2.221-6.367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      strokeWidth: "1.185",
      d: "m16.45 50.06-8.496 3.032s4.508 3.841 9.311 2.953 5.097-5.617 5.097-5.617l-5.911-0.3678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      strokeWidth: "1.185",
      d: "m32.77 47.46 3.628 7.255s5.923 1.185 9.476 0-6.367-9.624-9.106-8.958"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeMiterlimit: "10",
      strokeWidth: "1.185",
      d: "m29.22 36.38-9.411 2.935s0 2.369-1.185 4.738c-1.185 2.369 13.03 1.185 15.4-2.369z"
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
      strokeWidth: "2.378",
      d: "m40.26 44.23s8.323 0 10.7-1.189c2.378-1.189 4.236 0.8175 4.236 0.8175 0.6688-1.561-0.6688-3.196-0.6688-3.196 4.756 2.378 7.134 0 7.134 0 3.567 0 3.567-14.27-5.945-15.46s-9.512 10.7-9.512 10.7l-2.378 1.189s0 2.378-3.567 7.134z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m43.83 35.9s-10.7-10.7-22.59-5.945c-11.89 4.756-10.7 16.65-10.7 16.65s8.323 5.945 19.02 2.378 12.04-6.688 12.04-6.688 2.229-1.635 2.229-6.391"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m11.72 42.4s17.15 10.5 29.73-7.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m18.86 44.23s3.567-5.202-4.756-8.323"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.303 -10.47) scale(1.189)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "23 42 30.94 39.52 32 34"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.02",
      x2: "29.56",
      y1: "41.25",
      y2: "37.09",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m16.67 50.25-8.529 3.043s4.525 3.856 9.346 2.964c4.821-0.8913 5.116-5.638 5.116-5.638l-5.934-0.3692"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m33.05 47.65 3.641 7.283s5.945 1.189 9.512 0c3.567-1.189-6.391-9.661-9.141-8.992"
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
      strokeWidth: "2.378",
      d: "m40.26 44.23s8.323 0 10.7-1.189c2.378-1.189 4.236 0.8175 4.236 0.8175 0.6688-1.561-0.6688-3.196-0.6688-3.196 4.756 2.378 7.134 0 7.134 0 3.567 0 3.567-14.27-5.945-15.46s-9.512 10.7-9.512 10.7l-2.378 1.189s0 2.378-3.567 7.134z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m43.83 35.9s-10.7-10.7-22.59-5.945c-11.89 4.756-10.7 16.65-10.7 16.65s8.323 5.945 19.02 2.378 12.04-6.688 12.04-6.688 2.229-1.635 2.229-6.391"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m11.72 42.4s17.15 10.5 29.73-7.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m18.86 44.23s3.567-5.202-4.756-8.323"
    }), /*#__PURE__*/React.createElement("polyline", {
      transform: "translate(-7.303 -10.47) scale(1.189)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "23 42 30.94 39.52 32 34"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.02",
      x2: "29.56",
      y1: "41.25",
      y2: "37.09",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m16.67 50.25-8.529 3.043s4.525 3.856 9.346 2.964c4.821-0.8913 5.116-5.638 5.116-5.638l-5.934-0.3692"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.378",
      d: "m33.05 47.65 3.641 7.283s5.945 1.189 9.512 0c3.567-1.189-6.391-9.661-9.141-8.992"
    })));
  }
};

export default Turtle;