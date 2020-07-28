import React from 'react';

const Forceps = ({
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
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.251",
      d: "m23.21 63.42a4.609 4.609 0 0 0 3.514-2.904s22.26-40.97 25-51.13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.251",
      d: "m19.33 61.22a4.956 4.956 0 0 1 0.8883-4.53s24.13-39.9 31.51-47.4"
    }), /*#__PURE__*/React.createElement("path", {
      strokeWidth: "1.625",
      d: "m51.35 7.081 2.667 1.54a0.9753 0.9753 0 0 1 0.357 1.332l-5.254 9.101-4.356-2.515 5.254-9.101a0.9753 0.9753 0 0 1 1.332-0.357z"
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
      strokeWidth: "3.251",
      d: "m23.21 63.42a4.609 4.609 0 0 0 3.514-2.904s22.26-40.97 25-51.13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "3.251",
      d: "m19.33 61.22a4.956 4.956 0 0 1 0.8883-4.53s24.13-39.9 31.51-47.4"
    }), /*#__PURE__*/React.createElement("path", {
      strokeWidth: "1.625",
      d: "m51.35 7.081 2.667 1.54a0.9753 0.9753 0 0 1 0.357 1.332l-5.254 9.101-4.356-2.515 5.254-9.101a0.9753 0.9753 0 0 1 1.332-0.357z"
    })));
  }
};

export default Forceps;