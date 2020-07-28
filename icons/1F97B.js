import React from 'react';

const Sari = ({
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
      fill: "#8967aa",
      strokeWidth: "1.117",
      d: "m43.06 5.429c1.327 7.005 2.658 13.24 3.782 19.19 0.2279 2.307 1.3 6.233 2.32 7.732 0.9795 1.389 1.703 1.013 2.991 1.292 0.2647 0.7012-0.3259 4.201-0.3732 4.652-0.159 1.524-2.418 1.913-4.223 1.36-9.484-1.046-13.72-31.89-13.21-33.62 8.447-0.7377 0.3933-0.1629 8.709-0.6072z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      strokeWidth: "1.117",
      d: "m41.47 21.97c1.491-1.389 0.7566-0.7659 2.905-3.049 0.3888 0.4007 0.4811 3.184 1.71 3.397 1.4 0.1087 2.395-0.5617 3.952-1.028-0.3196-3.152-1.811-7.536-2.932-10.48-0.3618-0.952-0.6916-1.408-1.292-2.236-0.4916-0.6772-1.858-2.073-2.746-2.133-0.5975-0.0406-1.261-0.9974-2.229-0.7508-5.602 3.535-6.033 2.683-10.53 0.5606-0.5665-0.2546-1.16-0.1896-1.968-0.48-6.95 0.2027-11.35 14.8-7.763 16.08 1.556 0.4518 2.467 0.8008 3.113-0.2976 0.3653-0.6195 0.3686-3.378 1.324-1.983 0.242 2.051 1.755 2.203 5.633 3.844 2.979 0.5066 7.855-0.8025 10.82-1.438z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      strokeWidth: "1.117",
      d: "m24.21 65.45c7.447 2.76 13.26 2.107 19.52-2.316l-0.23-5.352 1.858-14.9-0.3547-3.668-0.5071-5.241c-1.077-1.343-0.3312-8.21-1.812-7.387-1.481 0.8222-3.569 0.2171-5.389 0.4279-3.372 0.6457-4.233 0.7106-6.639 0.267-1.937 4.239-4.425 8.162-5.118 8.609-0.7424 0.6094-3.011 2.826-1.943 5.862-0.4239 1.825 0.5133 21.38 0.6096 23.69z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b399c8",
      strokeWidth: "1.117",
      d: "m35.27 5.092c-4.329 3.314-6.454 6.985-8.536 14.62 0.5037 2.659 0.1619 9.019-2.449 10.82-0.5782 2.486-0.8803 6.426-1.196 9.215l3.808-6.181c0.8324-5.276 3.539-7.045 9.989-11.3 1.272-0.8398 3.17-4.079 3.544-5.357 0.2286-0.7814 0.7273-1.107 0.7073-2.025-0.01719-0.8244 0.5883-1.131 0.762-1.751 0.8355-3.001 1.366-5.829 0.178-7.901z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m34.12 28.28 9.204-1.935c4.835 15.8-0.2415 26.69 0.5185 36.97-4.841 4.621-14.38 4.644-19.64 2.324 0 0-1.181-16.79-0.8739-24.95"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m26.9 33.53c2.46-3.197 2.192-6.129 5.968-8.683 3.873-2.389 5.794-4.137 7.71-7.544 1.915-3.407 2.476-8.7 1.864-11.71-1.895-1.427-6.964-0.4846-8.14 0.3199-10.55 11.17-4.249 13.38-9.171 24.61-2.089 4.769-1.515 6.559-1.8 10.17 0.08298-2.994 2.288-5.338 3.569-7.162z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m36.6 22.48c5.541 0.1429 6.414-0.9615 7.361-3.341m3.101 2.29 2.734-0.7231c-0.8461-3.426-2.25-8.306-4.428-11.31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m27.27 21.99c-1.27-0.5516-2.236-1.788-2.462-2.738m-5.15 1.473c-0.06617-0.9363 0.2214-1.965 0.2214-1.965 1.313-7.245 5.705-13.48 8.444-12.36l1.667 0.5917m-7.935 14.41-2.398-0.6698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m48.07 38.86c5.159 1.14 4.208-5.481 4.208-5.481-4.155 0.9447-5.636-4.081-6.251-8.601"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m38.93 40.04 0.4518 1.319c0.5193 1.738 0.941 3.426 1.066 5.257 0.2729 4.04-0.9243 8.002-0.2044 12.03 0.2284 1.28 1.848 4.207 2.41 5.351 0.369 0.7541-0.4219-0.7207 0 0"
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
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m34.12 28.28 9.204-1.935c4.835 15.8-0.2415 26.69 0.5185 36.97-4.841 4.621-14.38 4.644-19.64 2.324 0 0-1.181-16.79-0.8739-24.95"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m26.9 33.53c2.46-3.197 2.192-6.129 5.968-8.683 3.873-2.389 5.794-4.137 7.71-7.544 1.915-3.407 2.476-8.7 1.864-11.71-1.895-1.427-6.964-0.4846-8.14 0.3199-10.55 11.17-4.249 13.38-9.171 24.61-2.089 4.769-1.515 6.559-1.8 10.17 0.08298-2.994 2.288-5.338 3.569-7.162z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m36.6 22.48c5.541 0.1429 6.414-0.9615 7.361-3.341m3.101 2.29 2.734-0.7231c-0.8461-3.426-2.25-8.306-4.428-11.31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m27.27 21.99c-1.27-0.5516-2.236-1.788-2.462-2.738m-5.15 1.473c-0.06617-0.9363 0.2214-1.965 0.2214-1.965 1.313-7.245 5.705-13.48 8.444-12.36l1.667 0.5917m-7.935 14.41-2.398-0.6698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m48.07 38.86c5.159 1.14 4.208-5.481 4.208-5.481-4.155 0.9447-5.636-4.081-6.251-8.601"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "1.5",
      strokeWidth: "1.675",
      d: "m38.93 40.04 0.4518 1.319c0.5193 1.738 0.941 3.426 1.066 5.257 0.2729 4.04-0.9243 8.002-0.2044 12.03 0.2284 1.28 1.848 4.207 2.41 5.351 0.369 0.7541-0.4219-0.7207 0 0"
    })));
  }
};

export default Sari;