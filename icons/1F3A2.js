import React from 'react';

const RollerCoaster = ({
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
      fill: "#fcea2b",
      d: "M39.4776,16.4928c5.5494-3.93,8.754-.6339,8.754-.6339a2.3228,2.3228,0,0,1,.2327,3.267L38.4981,30.6211a2.3227,2.3227,0,0,1-3.267.2328l-3.7134-3.2195a2.3227,2.3227,0,0,1-.2328-3.267l1.6316-1.8819L36.1507,25.29l5.8114-6.7029Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M45.9661,22.1935,38.86,30.39a2.3227,2.3227,0,0,1-3.2669.2327L31.88,27.403a2.3226,2.3226,0,0,1-.2327-3.2669l1.6315-1.8819,3.2343,2.804L38.93,22.27"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "14.271 50.034 7.866 47.472 7.866 63.893 14.271 63.893 14.271 50.034"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "10.38 49.63 10.38 63.713 13.583 63.713 13.583 50.9 10.38 49.63"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "30.613 48.78 24.208 50.473 24.208 63.893 30.613 63.893 30.613 48.78"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "27.41 50.111 27.41 64.194 30.613 64.194 30.613 48.78 27.41 50.111"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "48.353 36.383 41.948 42.796 41.948 63.935 48.353 63.935 48.353 36.383"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "44.515 40.249 44.515 64.194 47.718 64.194 47.718 37.986 44.515 40.249"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "64.822 11.896 58.417 22.378 58.417 63.893 64.822 63.893 64.822 11.896"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "61.62 17.866 61.62 63.358 64.822 63.358 64.822 13.565 61.62 17.866"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.3587,6.1951s-25.8251,55.94-55.1808,35.974"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.718 36.383 41.313 42.796 41.313 63.935 47.718 63.935 47.718 36.383"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30.613 48.78 24.208 50.473 24.208 63.893 30.613 63.893 30.613 48.78"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "13.583 50.034 7.178 47.472 7.178 63.893 13.583 63.893 13.583 50.034"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.8608,16.45c5.5494-3.9305,8.754-.6339,8.754-.6339a2.3228,2.3228,0,0,1,.2327,3.267L38.8813,30.5778a2.3228,2.3228,0,0,1-3.267.2328l-3.7134-3.2195a2.3227,2.3227,0,0,1-.2328-3.267L33.3,22.4422l3.2342,2.8041,5.8114-6.7029Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.5754",
      cy: "20.7695",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.8841",
      cy: "22.9915",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.021",
      cy: "30.6363",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2104",
      cy: "28.608",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "64.822 11.896 58.417 22.378 58.417 63.893 64.822 63.893 64.822 11.896"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.3587,6.1951s-25.8251,55.94-55.1808,35.974"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "47.718 36.383 41.313 42.796 41.313 63.935 47.718 63.935 47.718 36.383"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30.613 48.78 24.208 50.473 24.208 63.893 30.613 63.893 30.613 48.78"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "13.583 50.034 7.178 47.472 7.178 63.893 13.583 63.893 13.583 50.034"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.8608,16.45c5.5494-3.9305,8.754-.6339,8.754-.6339a2.3228,2.3228,0,0,1,.2327,3.267L38.8813,30.5778a2.3228,2.3228,0,0,1-3.267.2328l-3.7134-3.2195a2.3227,2.3227,0,0,1-.2328-3.267L33.3,22.4422l3.2342,2.8041,5.8114-6.7029Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.5754",
      cy: "20.7695",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.8841",
      cy: "22.9915",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.021",
      cy: "30.6363",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2104",
      cy: "28.608",
      r: "1.5501"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "64.822 11.896 58.417 22.378 58.417 63.893 64.822 63.893 64.822 11.896"
    })));
  }
};

export default RollerCoaster;