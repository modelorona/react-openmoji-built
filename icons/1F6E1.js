import React from 'react';

const Shield = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M35.9899,10.9064c-11.0457,0-20,4.4773-20,10l0.0261,0.2749c2.9513,30.53,18.6744,39.0674,19.8983,39.6877 l0.0756,0.0374c0,0,17-8,20-40C56.5055,15.4078,47.0356,10.9064,35.9899,10.9064z M35.992,54.884l-0.0604-0.0299 c-0.978-0.4957-13.5423-7.318-15.9006-31.7145L20.01,22.9201c0-4.4133,7.1553-7.991,15.9819-7.991 c8.8265,0,16.3938,3.5969,15.9819,7.991C49.5766,48.4912,35.992,54.884,35.992,54.884z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M35,17.9064l3,4l-3,4l3,4l-3,4l3,4l-3,4l3,4l-3,4l1,5.2597c0,0-15-11-16-32c0,0,0-8,16-8L35,17.9064z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M36,15.1661l-1,2.7403l3,4l-3,4l3,4l-3,4l3,4l-3,4l3,4l-3,4l1.002,4.9774 c0,0,13.8441-8.9583,15.9819-31.9638C51.9839,22.92,51.1505,15.9498,36,15.1661z"
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
      d: "M35.9245,60.8691c-1.2239-0.6204-16.947-9.1579-19.8983-39.6878L16,20.9064c0-5.5228,8.9543-10,20-10s20.5155,4.5013,20,10 c-3,32-20,40-20,40L35.9245,60.8691z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9417,54.854c-0.978-0.4958-13.5423-7.318-15.9006-31.7144L20.0201,22.92c0-4.4133,7.1553-7.991,15.9819-7.991 s16.3938,3.5969,15.9819,7.991C49.5866,48.4911,36.002,54.8838,36.002,54.8838L35.9417,54.854z"
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
      d: "M35.9245,60.8691c-1.2239-0.6204-16.947-9.1579-19.8983-39.6878L16,20.9064c0-5.5228,8.9543-10,20-10s20.5155,4.5013,20,10 c-3,32-20,40-20,40L35.9245,60.8691z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9417,54.854c-0.978-0.4958-13.5423-7.318-15.9006-31.7144L20.0201,22.92c0-4.4133,7.1553-7.991,15.9819-7.991 s16.3938,3.5969,15.9819,7.991C49.5866,48.4911,36.002,54.8838,36.002,54.8838L35.9417,54.854z"
    })));
  }
};

export default Shield;