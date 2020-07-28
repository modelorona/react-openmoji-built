import React from 'react';

const HotFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      strokeWidth: "0.8516",
      d: "m32.47 49h-3.617c-1.856-0.0056-3.36-1.546-3.365-3.448 0.0055-1.902 1.509-3.442 3.365-3.448h14.3c1.856 0.0056 3.36 1.546 3.365 3.448-0.0055 1.902-1.509 3.442-3.365 3.448h-1.785"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m40.87 49h-0.506"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m42.38 49h-1.505"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "m50.39 40.63c-0.5305-0.5275-0.8278-1.246-0.8256-1.994 0-2.479 2.343-4.851 2.443-4.95 0.2068-0.2071 0.5424-0.2073 0.7495-5e-4l5e-4 5e-4c0.1 0.1 2.443 2.472 2.444 4.951-0.0013 1.557-1.265 2.818-2.822 2.817-0.7462-6e-4 -1.462-0.2971-1.99-0.8243z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "m41.66 44.82c0 6.075-2.532 11-5.656 11s-5.656-4.925-5.656-11c4.014-1.7 7.761-1.537 11.31 0z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m30 30.92c-0.0014 1.657-1.346 2.999-3.002 2.998s-2.999-1.346-2.998-3.002 1.346-2.999 3.002-2.998c1.657 2e-3 2.998 1.346 2.998 3.002"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48 30.94c-0.0014 1.657-1.346 2.999-3.002 2.998s-2.999-1.346-2.998-3.002 1.346-2.999 3.002-2.998c1.657 0.0019 2.998 1.346 2.998 3.002"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m20.88 25.89c1.714 0.4976 3.552 0.3383 5.155-0.4469 1.341-0.6851 2.429-1.78 3.105-3.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m51.14 25.89c-1.714 0.4976-3.552 0.3383-5.155-0.4469-1.341-0.6851-2.429-1.78-3.105-3.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m41.66 44.82c0 6.075-2.532 11-5.656 11s-5.656-4.925-5.656-11c5.141-1.979 8.198-0.9474 11.31 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m50.39 40.63c-0.5305-0.5275-0.8278-1.246-0.8256-1.994 0-2.479 2.343-4.851 2.443-4.95 0.2068-0.2071 0.5424-0.2073 0.7495-5e-4l5e-4 5e-4c0.1 0.1 2.443 2.472 2.444 4.951-0.0013 1.557-1.265 2.818-2.822 2.817-0.7462-6e-4 -1.462-0.2971-1.99-0.8243z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "2",
      strokeWidth: "1.737",
      d: "m31.56 49.05h-2.739c-1.865-0.0058-3.375-1.601-3.381-3.571 0.0055-1.97 1.516-3.566 3.381-3.571h14.37c1.865 0.0058 3.375 1.601 3.381 3.571-0.0055 1.97-1.516 3.566-3.381 3.571h-2.649"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m30 30.92c-0.0014 1.657-1.346 2.999-3.002 2.998s-2.999-1.346-2.998-3.002 1.346-2.999 3.002-2.998c1.657 2e-3 2.998 1.346 2.998 3.002"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m48 30.94c-0.0014 1.657-1.346 2.999-3.002 2.998s-2.999-1.346-2.998-3.002 1.346-2.999 3.002-2.998c1.657 0.0019 2.998 1.346 2.998 3.002"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m20.88 25.89c1.714 0.4976 3.552 0.3383 5.155-0.4469 1.341-0.6851 2.429-1.78 3.105-3.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m51.14 25.89c-1.714 0.4976-3.552 0.3383-5.155-0.4469-1.341-0.6851-2.429-1.78-3.105-3.126"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m41.66 44.82c0 6.075-2.532 11-5.656 11s-5.656-4.925-5.656-11c5.141-1.979 8.198-0.9474 11.31 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m50.39 40.63c-0.5305-0.5275-0.8278-1.246-0.8256-1.994 0-2.479 2.343-4.851 2.443-4.95 0.2068-0.2071 0.5424-0.2073 0.7495-5e-4l5e-4 5e-4c0.1 0.1 2.443 2.472 2.444 4.951-0.0013 1.557-1.265 2.818-2.822 2.817-0.7462-6e-4 -1.462-0.2971-1.99-0.8243z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "2",
      strokeWidth: "1.737",
      d: "m31.56 49.05h-2.739c-1.865-0.0058-3.375-1.601-3.381-3.571 0.0055-1.97 1.516-3.566 3.381-3.571h14.37c1.865 0.0058 3.375 1.601 3.381 3.571-0.0055 1.97-1.516 3.566-3.381 3.571h-2.649"
    })));
  }
};

export default HotFace;