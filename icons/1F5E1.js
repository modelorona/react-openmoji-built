import React from 'react';

const Dagger = ({
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
      fill: "#3F3F3F",
      stroke: "none",
      d: "M35,27.1661h2c0,0,4-11,4-16l-0.0005-0.0676C40.9633,8.3682,38.7388,6.1661,36,6.1661 c-2.7369,0-4.9602,2.199-4.9995,4.9265L31,11.1661C31,16.1661,35,27.1661,35,27.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M28,27.1661c0,0-5,3,0,5c0,0,8-2,17,0c0,0,4-4-1-5C44,27.1661,38,28.1661,28,27.1661z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M36,65.71c-1.9819-4.6245-3.0667-9.5836-3.1967-14.6133l-0.488-18.8943c0,0,3.6847-0.4924,7.6847,0 l-0.488,18.8943c-0.1299,5.0297-1.2147,9.9888-3.1967,14.6133"
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
      d: "M35,26.9064h2c0,0,4-11,4-16l-0.0005-0.0676C40.9633,8.1086,38.7388,5.9064,36,5.9064c-2.7369,0-4.9602,2.199-4.9995,4.9265 L31,10.9064C31,15.9064,35,26.9064,35,26.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,26.9064c-1.6569,0-3,1.3431-3,3s1.3431,3,3,3v-0.0151"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,32.8913v0.0151c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,26.9064c5.2525,1.3131,10.7475,1.3131,16,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,32.8913c-5.2525-1.3132-10.7475-1.3132-16,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,65.71c-1.9819-4.6245-3.0667-9.5836-3.1967-14.6133l-0.488-18.8943c0,0,3.6847-0.4924,7.6847,0l-0.488,18.8943 c-0.1299,5.0297-1.2147,9.9888-3.1967,14.6133"
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
      d: "M35,26.9064h2c0,0,4-11,4-16l-0.0005-0.0676C40.9633,8.1086,38.7388,5.9064,36,5.9064c-2.7369,0-4.9602,2.199-4.9995,4.9265 L31,10.9064C31,15.9064,35,26.9064,35,26.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,26.9064c-1.6569,0-3,1.3431-3,3s1.3431,3,3,3v-0.0151"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,32.8913v0.0151c1.6569,0,3-1.3431,3-3s-1.3431-3-3-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,26.9064c5.2525,1.3131,10.7475,1.3131,16,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,32.8913c-5.2525-1.3132-10.7475-1.3132-16,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,65.71c-1.9819-4.6245-3.0667-9.5836-3.1967-14.6133l-0.488-18.8943c0,0,3.6847-0.4924,7.6847,0l-0.488,18.8943 c-0.1299,5.0297-1.2147,9.9888-3.1967,14.6133"
    })));
  }
};

export default Dagger;