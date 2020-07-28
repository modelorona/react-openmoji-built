import React from 'react';

const RightAngerBubble = ({
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
      fill: "#fff",
      strokeMiterlimit: "10",
      d: "m22.65 48.79-0.0114-0.066-3.831 1.074-4.238 0.4377c1.496-3.562 2.558-4.463 3.443-6.804l-1.523-1.271-4.229-0.7571 4.536-6.072-1.174-0.5151-5.692-3.404 5.741-2.934-1.58-6.87 8.108 2.923-0.6864-1.771-1.229-7.019 8.244 3.134 0.013-0.0496 2.209-8.464 4.831 7.048 0.8654 1.447 1.581-2.69 3.688-6.183 2.125 7.784 1.057 1.714 7.881-3.814 0.1639 8.701 2.161 0.1806 6.17 0.6811-3.452 4.889-1.506 1.763 5.328 4.767-5.831 3.767-0.6412-0.09571 3.936 6.957-7.991-0.4924c-0.1997 3.132-0.09331 6.039 0.4204 9.119-1.569-2.326-3.839-3.337-6.284-4.675l-4.062 6.643c-1.371-2.131-2.831-4.205-4.135-6.378l-4.363 6.338c-1.141-2.316-2.048-4.207-3.545-6.32l-5.791 5.706-0.7089-8.43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m11.09 62.06 7.029-12.09c4.176-2.567 3.681-0.37 4.1 4.022z"
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
      strokeWidth: "2.089",
      d: "m22.64 48.72s-4.916 0.9132-8.068 1.512c1.144-1.453 3.571-7.636 3.571-7.636l-6.667-1.413 5.324-5.855-7.653-4.136 6.529-2.717-2.367-7.087 8.895 3.14-2.702-9.007 8.244 3.134 0.013-0.0496 2.209-8.464c2.055 3.016 6.484 8.713 6.484 8.713s3.875-5.801 5.269-8.873c1.048 3.227 3.182 9.498 3.182 9.498l7.881-3.814 0.1639 8.701 8.332 0.8617-4.958 6.652 6.533 5.093-7.678 3.345s2.351 4.196 3.936 6.957l-8.778-0.7098s0.6942 6.256 1.208 9.337c-2.828-2.004-7.071-4.892-7.071-4.892l-3.275 6.861-4.135-6.378-4.363 6.338c-1.141-2.316-3.545-6.32-3.545-6.32l-5.791 5.706z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m20.38 55.31-9.292 6.75 5.309-9.102"
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
      strokeWidth: "2.089",
      d: "m22.64 48.72s-4.916 0.9132-8.068 1.512c1.144-1.453 3.571-7.636 3.571-7.636l-6.667-1.413 5.324-5.855-7.653-4.136 6.529-2.717-2.367-7.087 8.895 3.14-2.702-9.007 8.244 3.134 0.013-0.0496 2.209-8.464c2.055 3.016 6.484 8.713 6.484 8.713s3.875-5.801 5.269-8.873c1.048 3.227 3.182 9.498 3.182 9.498l7.881-3.814 0.1639 8.701 8.332 0.8617-4.958 6.652 6.533 5.093-7.678 3.345s2.351 4.196 3.936 6.957l-8.778-0.7098s0.6942 6.256 1.208 9.337c-2.828-2.004-7.071-4.892-7.071-4.892l-3.275 6.861-4.135-6.378-4.363 6.338c-1.141-2.316-3.545-6.32-3.545-6.32l-5.791 5.706z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m20.38 55.31-9.292 6.75 5.309-9.102"
    })));
  }
};

export default RightAngerBubble;