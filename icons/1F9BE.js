import React from 'react';

const MechanicalArm = ({
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
      transform: "translate(-10.1 -9.952) scale(1.299)",
      fill: "#d0cfce",
      d: "m22.46 40.4 2.03 3.94-0.1088 3.962-2.731 1.381-7.28-0.6751 0.2453-7.234 4.245-1.424 1.097-4.584 1.673-0.806z"
    }), /*#__PURE__*/React.createElement("polygon", {
      transform: "translate(-10.1 -9.952) scale(1.299)",
      fill: "#d0cfce",
      points: "44.83 48.92 40.74 48.7 40.74 44.05 43.53 42.19 47.25 45.91"
    }), /*#__PURE__*/React.createElement("polygon", {
      transform: "translate(-8.357 -9.905) scale(1.299)",
      fill: "#d0cfce",
      points: "39.81 48.24 37.95 50.1 25.85 50.1 23.99 48.24 23.99 43.59 25.85 41.73 37.95 41.73 39.81 43.59"
    }), /*#__PURE__*/React.createElement("polygon", {
      transform: "translate(-10.1 -9.952) scale(1.299)",
      fill: "#d0cfce",
      points: "46.04 23.84 51.14 20.45 57.08 23 57.08 28.09 49.44 45.06 46.89 45.91 43.5 42.52 44.35 33.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      strokeWidth: "2",
      d: "m59.84 19.09s1.206 8.559-9.042 29.17c0.1585 1.189 4.087 1.766 9.719-12.93 0 0 8.38-14.96-0.6761-16.24"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-10.1 -9.952) scale(1.299)",
      fill: "#9b9b9a",
      d: "m45.87 44.06-3.385 4.322h3.49z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m44.04 46.24 0.6839-0.4559a2.55 2.55 0 0 1 3.218 0.3187l1.65 1.65a2.55 2.55 0 0 1 0.1854 3.399l-0.8328 1.038a2.55 2.55 0 0 1-2.126 0.95l-1.501-0.08121a2.55 2.55 0 0 1-2.412-2.546v-2.151a2.55 2.55 0 0 1 1.135-2.122z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.59 46.21 0.7924-0.7046a2.55 2.55 0 0 1 1.694-0.6445h13.48a2.55 2.55 0 0 1 1.695 0.6445l0.7923 0.7046a2.55 2.55 0 0 1 0.8555 1.905v2.985a2.55 2.55 0 0 1-0.8555 1.905l-0.7923 0.7046a2.55 2.55 0 0 1-1.695 0.6445h-13.48a2.55 2.55 0 0 1-1.694-0.6445l-0.7924-0.7046a2.55 2.55 0 0 1-0.8554-1.905v-2.985a2.55 2.55 0 0 1 0.8551-1.905z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m49.86 48.06-2.37-2.37a2.55 2.55 0 0 1-0.7364-2.034l0.9638-10.6q0.01032-0.1132 0.03073-0.2253l1.951-10.73a2.55 2.55 0 0 1 1.094-1.665l4.443-2.962a2.55 2.55 0 0 1 2.419-0.2221l4.76 2.04a2.55 2.55 0 0 1 1.546 2.344v4.265a2.55 2.55 0 0 1-0.2246 1.046l-9.057 20.13a2.55 2.55 0 0 1-1.519 1.373l-0.6913 0.2304a2.55 2.55 0 0 1-2.609-0.6159z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m15.86 47.11h-1.54"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m15.65 44.32-1.25 0.1"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m20.65 50.15c0.3858-3.8e-5 0.7633-0.1117 1.087-0.3215l2.447-1.586v-3.53l-1.629-3.167c-0.1011-0.1966-0.1689-0.4086-0.2007-0.6273l-0.7261-4.998c-0.268-0.8935-1.974-0.9759-2.502-0.092-0.2689 1.154-0.3842 2.339-0.3429 3.523 0.03806 1.08-0.7724 2.001-1.848 2.102l-2.45 0.1825c-1.7 0.1012-1.778 2.576-0.0882 2.785-1.721 0.6565-1.495 2.417-0.0775 2.694-1.519 0.3195-1.474 2.498 0.05605 2.763l1.741 0.2732z"
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
      strokeWidth: "2",
      d: "m44.04 46.24 0.6839-0.4559a2.55 2.55 0 0 1 3.218 0.3187l1.65 1.65a2.55 2.55 0 0 1 0.1854 3.399l-0.8328 1.038a2.55 2.55 0 0 1-2.126 0.95l-1.501-0.08121a2.55 2.55 0 0 1-2.412-2.546v-2.151a2.55 2.55 0 0 1 1.135-2.122z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.59 46.21 0.7924-0.7046a2.55 2.55 0 0 1 1.694-0.6445h13.48a2.55 2.55 0 0 1 1.695 0.6445l0.7923 0.7046a2.55 2.55 0 0 1 0.8555 1.905v2.985a2.55 2.55 0 0 1-0.8555 1.905l-0.7923 0.7046a2.55 2.55 0 0 1-1.695 0.6445h-13.48a2.55 2.55 0 0 1-1.694-0.6445l-0.7924-0.7046a2.55 2.55 0 0 1-0.8554-1.905v-2.985a2.55 2.55 0 0 1 0.8551-1.905z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m49.86 48.06-2.37-2.37a2.55 2.55 0 0 1-0.7364-2.034l0.9638-10.6q0.01032-0.1132 0.03073-0.2253l1.951-10.73a2.55 2.55 0 0 1 1.094-1.665l4.443-2.962a2.55 2.55 0 0 1 2.419-0.2221l4.76 2.04a2.55 2.55 0 0 1 1.546 2.344v4.265a2.55 2.55 0 0 1-0.2246 1.046l-9.057 20.13a2.55 2.55 0 0 1-1.519 1.373l-0.6913 0.2304a2.55 2.55 0 0 1-2.609-0.6159z"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m15.86 47.11h-1.54"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m15.65 44.32-1.25 0.1"
    }), /*#__PURE__*/React.createElement("path", {
      transform: "translate(-8.565 -9.172) scale(1.275)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.569",
      d: "m20.65 50.15c0.3858-3.8e-5 0.7633-0.1117 1.087-0.3215l2.447-1.586v-3.53l-1.629-3.167c-0.1011-0.1966-0.1689-0.4086-0.2007-0.6273l-0.7261-4.998c-0.268-0.8935-1.974-0.9759-2.502-0.092-0.2689 1.154-0.3842 2.339-0.3429 3.523 0.03806 1.08-0.7724 2.001-1.848 2.102l-2.45 0.1825c-1.7 0.1012-1.778 2.576-0.0882 2.785-1.721 0.6565-1.495 2.417-0.0775 2.694-1.519 0.3195-1.474 2.498 0.05605 2.763l1.741 0.2732z"
    })));
  }
};

export default MechanicalArm;