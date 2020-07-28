import React from 'react';

const OkStencil = ({
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
      fill: "#b1cc33",
      d: "M58.6949,60.08h-46a1.0021,1.0021,0,0,1-1-1v-46a1.0021,1.0021,0,0,1,1-1h46a1.0021,1.0021,0,0,1,1,1v46A.9448.9448,0,0,1,58.6949,60.08Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.6949,60.08h-46a1.0021,1.0021,0,0,1-1-1v-46a1.0021,1.0021,0,0,1,1-1h46a1.0021,1.0021,0,0,1,1,1v46A.9448.9448,0,0,1,58.6949,60.08Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M38.7946,41.68a.9993.9993,0,0,1-1-1v-9.4a1,1,0,0,1,2,0v9.4A.9994.9994,0,0,1,38.7946,41.68Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46.0192,40.0359,42.3049,35.625l3.2045-3.6887A1,1,0,0,0,44,30.6238l-2.9125,3.3526v3.3075L44.49,41.325a1,1,0,0,0,1.5293-1.2891Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M29.5588,39.5849A2.3629,2.3629,0,0,1,27.8053,37.28v-2.7a2.3617,2.3617,0,0,1,1.7535-2.3039V30.2437A4.333,4.333,0,0,0,25.8053,34.58v2.7a4.3332,4.3332,0,0,0,3.7535,4.3371Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.8513,30.2437v2.0324A2.3619,2.3619,0,0,1,32.6051,34.58v2.7a2.3633,2.3633,0,0,1-1.7538,2.3047v2.0324A4.3332,4.3332,0,0,0,34.6051,37.28v-2.7A4.333,4.333,0,0,0,30.8513,30.2437Z"
    })))));
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
      d: "M58.6949,60.08h-46a1.0021,1.0021,0,0,1-1-1v-46a1.0021,1.0021,0,0,1,1-1h46a1.0021,1.0021,0,0,1,1,1v46A.9448.9448,0,0,1,58.6949,60.08Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M38.7946,41.68a.9993.9993,0,0,1-1-1v-9.4a1,1,0,0,1,2,0v9.4A.9994.9994,0,0,1,38.7946,41.68Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M46.0192,40.0359,42.3049,35.625l3.2045-3.6887A1,1,0,0,0,44,30.6238l-2.9125,3.3526v3.3075L44.49,41.325a1,1,0,0,0,1.5293-1.2891Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M29.5588,39.5849A2.3629,2.3629,0,0,1,27.8053,37.28v-2.7a2.3617,2.3617,0,0,1,1.7535-2.3039V30.2437A4.333,4.333,0,0,0,25.8053,34.58v2.7a4.3332,4.3332,0,0,0,3.7535,4.3371Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.8513,30.2437v2.0324A2.3619,2.3619,0,0,1,32.6051,34.58v2.7a2.3633,2.3633,0,0,1-1.7538,2.3047v2.0324A4.3332,4.3332,0,0,0,34.6051,37.28v-2.7A4.333,4.333,0,0,0,30.8513,30.2437Z"
    })))));
  }
};

export default OkStencil;