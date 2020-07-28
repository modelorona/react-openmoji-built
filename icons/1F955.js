import React from 'react';

const Carrot = ({
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
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.3844,13.6361 c0.926-1.558,2.003-2.5905,2.003-2.5905s1.8608,1.0058,1.8355,3.6491c2.357-2.2668,4.8651-2.6375,4.8651-2.6375 s-0.0095,2.5317-1.913,5.1908c0.6025-0.094,1.1372-0.0757,1.5959,0.0135c1.5347,0.2795,2.2838,1.2805,2.2838,1.2805 s-2.2545,3.1413-5.3876,4.0649c-0.6449,0.194-1.2192,0.2554-1.7259,0.2386c-1.9705-0.0642-5.2636-2.639-4.804-5.8863 C47.3108,15.7326,47.8195,14.5866,48.3844,13.6361"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      stroke: "#f4aa41",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.8744,19.1062c-2.3448,0.8863-5.1547,3.1861-7.338,6.2834L18.5417,50.9171c-6.5373,9.2739-0.804,13.9743,7.0082,5.7457 l21.504-22.6504c4.2279-4.4533,6.0798-10.1092,3.8963-11.8994l-3.5093-2.8771C46.6049,18.5505,45.3292,18.5563,43.8744,19.1062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      stroke: "#d22f27",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.735,23.36 c-0.13-0.46-0.34-0.85-0.66-1.14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      stroke: "#E27022",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.695,26 c-0.1,0.46-0.24,0.94-0.42,1.44c-0.05,0.15-0.11,0.31-0.1801,0.46c-0.06,0.17-0.1299,0.34-0.21,0.5c-0.09,0.21-0.19,0.41-0.29,0.62 c-0.43,0.86-0.96,1.75-1.59,2.6201c-0.12,0.18-0.25,0.35-0.39,0.53c-0.13,0.18-0.28,0.37-0.42,0.55c-0.36,0.44-0.74,0.87-1.14,1.29 l-21.51,22.65c-3.66,3.86-6.86,4.87-8.56,3.9c6.4143,0.1209,35.7538-37.3765,34.09-40.16C51.075,20.4,52.4062,24.2812,51.695,26z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M59.05,18.54c0,0-2.25,3.14-5.38,4.07c-0.65,0.19-1.22,0.25-1.73,0.24c-0.92-0.04-2.14-0.62-3.11-1.56 l8.26-9.23c0,0-0.01,2.53-1.92,5.19c0.61-0.1,1.14-0.08,1.6,0.01C58.31,17.54,59.05,18.54,59.05,18.54z"
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
      d: "M42.2577,19.8977c-1.9435,1.1541-4.0222,3.0815-5.7213,5.4919L18.5417,50.9171c-6.5373,9.2739-0.804,13.9743,7.0082,5.7457 l21.504-22.6504c1.9941-2.1004,3.4596-4.4682,4.2225-6.5719"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.3844,13.6361 c0.926-1.558,2.003-2.5905,2.003-2.5905s1.8608,1.0058,1.8355,3.6491c2.357-2.2668,4.8651-2.6375,4.8651-2.6375 s-0.0095,2.5317-1.913,5.1908c0.6025-0.094,1.1372-0.0757,1.5959,0.0135c1.5347,0.2795,2.2838,1.2805,2.2838,1.2805 s-2.2545,3.1413-5.3876,4.0649c-0.6449,0.194-1.2192,0.2554-1.7259,0.2386c-1.9705-0.0642-5.2636-2.639-4.804-5.8863 C47.3108,15.7326,47.8195,14.5866,48.3844,13.6361"
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
      d: "M42.2577,19.8977c-1.9435,1.1541-4.0222,3.0815-5.7213,5.4919L18.5417,50.9171c-6.5373,9.2739-0.804,13.9743,7.0082,5.7457 l21.504-22.6504c1.9941-2.1004,3.4596-4.4682,4.2225-6.5719"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.3844,13.6361 c0.926-1.558,2.003-2.5905,2.003-2.5905s1.8608,1.0058,1.8355,3.6491c2.357-2.2668,4.8651-2.6375,4.8651-2.6375 s-0.0095,2.5317-1.913,5.1908c0.6025-0.094,1.1372-0.0757,1.5959,0.0135c1.5347,0.2795,2.2838,1.2805,2.2838,1.2805 s-2.2545,3.1413-5.3876,4.0649c-0.6449,0.194-1.2192,0.2554-1.7259,0.2386c-1.9705-0.0642-5.2636-2.639-4.804-5.8863 C47.3108,15.7326,47.8195,14.5866,48.3844,13.6361"
    })));
  }
};

export default Carrot;