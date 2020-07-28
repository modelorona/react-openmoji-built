import React from 'react';

const Package = ({
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
      fill: "#f4aa41",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.6649,11.98v48c0,0.55-0.45,1-1,1h-48c-0.55,0-1-0.45-1-1v-48c0-0.55,0.45-1,1-1h48C61.2149,10.98,61.6649,11.43,61.6649,11.98z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.8349,58.6251V60.98h-16.33v-2.3549c0-1.123,1.35-2.0418,3-2.0418h10.33C43.4849,56.5833,44.8349,57.5022,44.8349,58.6251z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.7761,11.9655v5.171c0,1.0639-1.35,1.9343-3,1.9343h-10.33c-1.65,0-3-0.8704-3-1.9343v-5.171"
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
      d: "M61.6649,11.98v48c0,0.55-0.45,1-1,1h-48c-0.55,0-1-0.45-1-1v-48c0-0.55,0.45-1,1-1h48C61.2149,10.98,61.6649,11.43,61.6649,11.98z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.8989,29.4378h-10.458 c-1.6157,0-2.9377-1.3219-2.9377-2.9377v0c0-1.6157,1.3219-2.9377,2.9377-2.9377h10.458c1.6157,0,2.9377,1.3219,2.9377,2.9377v0 C44.8366,28.1159,43.5146,29.4378,41.8989,29.4378z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.8349,58.6251V60.98h-16.33v-2.3549c0-1.123,1.35-2.0418,3-2.0418h10.33C43.4849,56.5833,44.8349,57.5022,44.8349,58.6251z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.7761,11.9655v5.171c0,1.0639-1.35,1.9343-3,1.9343h-10.33c-1.65,0-3-0.8704-3-1.9343v-5.171"
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
      d: "M61.6649,11.98v48c0,0.55-0.45,1-1,1h-48c-0.55,0-1-0.45-1-1v-48c0-0.55,0.45-1,1-1h48C61.2149,10.98,61.6649,11.43,61.6649,11.98z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.8989,29.4378h-10.458 c-1.6157,0-2.9377-1.3219-2.9377-2.9377v0c0-1.6157,1.3219-2.9377,2.9377-2.9377h10.458c1.6157,0,2.9377,1.3219,2.9377,2.9377v0 C44.8366,28.1159,43.5146,29.4378,41.8989,29.4378z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.8349,58.6251V60.98h-16.33v-2.3549c0-1.123,1.35-2.0418,3-2.0418h10.33C43.4849,56.5833,44.8349,57.5022,44.8349,58.6251z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.7761,11.9655v5.171c0,1.0639-1.35,1.9343-3,1.9343h-10.33c-1.65,0-3-0.8704-3-1.9343v-5.171"
    })));
  }
};

export default Package;