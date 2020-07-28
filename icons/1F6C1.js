import React from 'react';

const Bathtub = ({
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
      fill: "#9B9B9A",
      stroke: "none",
      d: "M22.7591,54.4599h-5.4412l-2.5565,7.3286c-0.336,0.9633,0.3791,1.9701,1.3993,1.9701h3.3547 L22.7591,54.4599z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M47.124,54.4599h5.4412l2.5565,7.3286c0.336,0.9633-0.3791,1.9701-1.3993,1.9701h-3.3547L47.124,54.4599z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9B9B9A",
      stroke: "none",
      points: "16.5342,59.5982 15.3913,63.128 18.9152,63.128 19.5818,61.0744"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9B9B9A",
      stroke: "none",
      points: "53.439,59.5982 54.5818,63.128 51.058,63.128 50.3913,61.0744"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.0074,34.2178v9.4286c0,6.9143,5.4,12.5714,12,12.5714h26c6.6,0,12-5.6571,12-12.5714v-9.4286 C61.0074,34.2178,38.0074,36.313,11.0074,34.2178z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M43.8036,56.2178l16.7607-21.7089L60.508,47.2743c0,0-1.9682,5.6235-6.8045,8.0979 C53.7035,55.3721,48.3586,56.7802,43.8036,56.2178z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.1661,14.3051c1.6097-2.1022,4.2966-2.7481,6.0014-1.4428s1.7819,4.0678,0.1722,6.17L46.1661,14.3051z"
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
      d: "M11.0074,34.2178v9.4286c0,6.9143,5.4,12.5714,12,12.5714h26c6.6,0,12-5.6571,12-12.5714v-9.4286 C61.0074,34.2178,38.0074,36.313,11.0074,34.2178z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0074,33.7544"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.6681,34.2178V14.3617c0,0,0-6.9454-6.5006-1.4994"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.1661,14.3051c1.6097-2.1022,4.2966-2.7481,6.0014-1.4428s1.7819,4.0678,0.1722,6.17L46.1661,14.3051z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "53.439,59.5982 54.5818,63.128 51.058,63.128 50.3913,61.0744"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.5342,59.5982 15.3913,63.128 18.9152,63.128 19.5818,61.0744"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.0074,34.2178v9.4286c0,6.9143,5.4,12.5714,12,12.5714h26c6.6,0,12-5.6571,12-12.5714v-9.4286 C61.0074,34.2178,38.0074,36.313,11.0074,34.2178z"
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
      d: "M11.0074,34.2178v9.4286c0,6.9143,5.4,12.5714,12,12.5714h26c6.6,0,12-5.6571,12-12.5714v-9.4286 C61.0074,34.2178,38.0074,36.313,11.0074,34.2178z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0074,33.7544"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.6681,34.2178V14.3617c0,0,0-6.9454-6.5006-1.4994"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.1661,14.3051c1.6097-2.1022,4.2966-2.7481,6.0014-1.4428s1.7819,4.0678,0.1722,6.17L46.1661,14.3051z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "53.439,59.5982 54.5818,63.128 51.058,63.128 50.3913,61.0744"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "16.5342,59.5982 15.3913,63.128 18.9152,63.128 19.5818,61.0744"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.0074,34.2178v9.4286c0,6.9143,5.4,12.5714,12,12.5714h26c6.6,0,12-5.6571,12-12.5714v-9.4286 C61.0074,34.2178,38.0074,36.313,11.0074,34.2178z"
    })));
  }
};

export default Bathtub;