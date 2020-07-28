import React from 'react';

const Instagram = ({
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
      fill: "#FFFFFF",
      d: "M46.7845,12.6136h-21.569c-6.9598,0-12.6019,5.6421-12.6019,12.6019v21.5689 c0,6.9598,5.6421,12.6019,12.6019,12.6019h21.5689c6.9598,0,12.6019-5.6421,12.6019-12.6019V25.2155 C59.3864,18.2557,53.7443,12.6136,46.7845,12.6136z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.7845,12.6136h-21.569 c-6.9598,0-12.6019,5.6421-12.6019,12.6019v21.5689c0,6.9598,5.6421,12.6019,12.6019,12.6019h21.5689 c6.9598,0,12.6019-5.6421,12.6019-12.6019V25.2155C59.3864,18.2557,53.7443,12.6136,46.7845,12.6136z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "11.29",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.7092",
      cy: "22.2908",
      r: "2.4193"
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
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.7845,12.6136h-21.569 c-6.9598,0-12.6019,5.6421-12.6019,12.6019v21.5689c0,6.9598,5.6421,12.6019,12.6019,12.6019h21.5689 c6.9598,0,12.6019-5.6421,12.6019-12.6019V25.2155C59.3864,18.2557,53.7443,12.6136,46.7845,12.6136z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "11.29",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.7092",
      cy: "22.2908",
      r: "2.4193"
    })));
  }
};

export default Instagram;