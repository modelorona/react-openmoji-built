import React from 'react';

const HotDog = ({
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
      d: "M48.6367,13.4648c-1.9512-1.9531-5.1172-1.9531-7.0703,0L13.4648,41.5645 c-1.9531,1.9531-1.9531,5.1191-0.0019,7.0712l9.9004,9.8995c1.9531,1.9531,5.1191,1.9531,7.0703,0l28.1035-28.0997 c1.9512-1.9531,1.9512-5.1191,0-7.0712L48.6367,13.4648z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M20.5352,58.5352c-1.9532,1.9531-5.1192,1.9531-7.0723,0c-1.9512-1.9522-1.9512-5.1182,0-7.0704 l38.0019-38c1.9532-1.9531,5.1192-1.9531,7.0723,0c1.9512,1.9522,1.9512,5.1182,0,7.0704L20.5352,58.5352z"
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
      d: "M27,45.001c0,1.6562-1.3437,3.001-3.001,3.001c-1.6572,0-2.999,1.3437-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.002,33c0,1.6563-1.3438,3-3.002,3c-1.6562,0-2.999,1.3438-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,39c0,1.6563-1.3418,3.001-3,3c-1.6572,0-3,1.3447-3,3.001"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.002,26.998c0,1.6573-1.3418,3.002-3,3.001c-1.6582,0-3,1.3448-3,3.001"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.002,20.998c0,1.6563-1.3418,3-3,3c-1.6563,0-3,1.3448-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5352,58.5352c-1.9532,1.9531-5.1192,1.9531-7.0723,0c-1.9512-1.9522-1.9512-5.1182,0-7.0704l38.0019-38 c1.9532-1.9531,5.1192-1.9531,7.0723,0c1.9512,1.9522,1.9512,5.1182,0,7.0704L20.5352,58.5352z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0508,14.8789l-1.4141-1.4141c-1.9512-1.9531-5.1172-1.9531-7.0703,0L13.4648,41.5645 c-1.9531,1.9531-1.9531,5.1191-0.0019,7.0712l1.416,1.4151"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.9492,57.1211l1.4141,1.4141c1.9531,1.9531,5.1191,1.9531,7.0703,0l28.1035-28.0997c1.9512-1.9531,1.9512-5.1191,0-7.0712 l-1.4141-1.4151"
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
      d: "M27,45.001c0,1.6562-1.3437,3.001-3.001,3.001c-1.6572,0-2.999,1.3437-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.002,33c0,1.6563-1.3438,3-3.002,3c-1.6562,0-2.999,1.3438-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33,39c0,1.6563-1.3418,3.001-3,3c-1.6572,0-3,1.3447-3,3.001"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.002,26.998c0,1.6573-1.3418,3.002-3,3.001c-1.6582,0-3,1.3448-3,3.001"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.002,20.998c0,1.6563-1.3418,3-3,3c-1.6563,0-3,1.3448-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5352,58.5352c-1.9532,1.9531-5.1192,1.9531-7.0723,0c-1.9512-1.9522-1.9512-5.1182,0-7.0704l38.0019-38 c1.9532-1.9531,5.1192-1.9531,7.0723,0c1.9512,1.9522,1.9512,5.1182,0,7.0704L20.5352,58.5352z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.0508,14.8789l-1.4141-1.4141c-1.9512-1.9531-5.1172-1.9531-7.0703,0L13.4648,41.5645 c-1.9531,1.9531-1.9531,5.1191-0.0019,7.0712l1.416,1.4151"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.9492,57.1211l1.4141,1.4141c1.9531,1.9531,5.1191,1.9531,7.0703,0l28.1035-28.0997c1.9512-1.9531,1.9512-5.1191,0-7.0712 l-1.4141-1.4151"
    })));
  }
};

export default HotDog;