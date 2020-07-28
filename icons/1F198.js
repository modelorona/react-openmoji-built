import React from 'react';

const SOSButton = ({
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
      fill: "#D22F27",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m36 42.01v0c-2.37 0-4.291-1.921-4.291-4.291v-3.433c0-2.37 1.921-4.291 4.291-4.291v0c2.37 0 4.291 1.921 4.291 4.291v3.433c0 2.37-1.921 4.291-4.291 4.291z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m26.21 32.39c-0.3516-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-0.0766 0.01111c2.082 0 3.769 1.344 3.769 3.001 0 1.657-1.687 3.001-3.769 3.001v0c-1.821 0-3.341-1.029-3.692-2.396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m53.25 32.39c-0.3516-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-0.0766 0.01111c2.082 0 3.769 1.344 3.769 3.001 0 1.657-1.687 3.001-3.769 3.001v0c-1.821 0-3.341-1.029-3.692-2.396"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0349,60H12.9651 C12.4343,60,12,59.5657,12,59.0349V12.9651C12,12.4343,12.4343,12,12.9651,12h46.0698C59.5657,12,60,12.4343,60,12.9651v46.0698 C60,59.5657,59.5657,60,59.0349,60z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m36 42.01v0c-2.37 0-4.291-1.921-4.291-4.291v-3.433c0-2.37 1.921-4.291 4.291-4.291v0c2.37 0 4.291 1.921 4.291 4.291v3.433c0 2.37-1.921 4.291-4.291 4.291z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m26.21 32.39c-0.3516-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-0.0766 0.01111c2.082 0 3.769 1.344 3.769 3.001 0 1.657-1.687 3.001-3.769 3.001v0c-1.821 0-3.341-1.029-3.692-2.396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.004",
      d: "m53.25 32.39c-0.3516-1.367-1.871-2.396-3.692-2.396v0c-2.082 0-3.769 1.344-3.769 3.001s1.687 3.001 3.769 3.001l-0.0766 0.01111c2.082 0 3.769 1.344 3.769 3.001 0 1.657-1.687 3.001-3.769 3.001v0c-1.821 0-3.341-1.029-3.692-2.396"
    })));
  }
};

export default SOSButton;