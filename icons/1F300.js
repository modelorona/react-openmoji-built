import React from 'react';

const Cyclone = ({
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
      strokeWidth: "2",
      d: "M35.9896,7 C50.6146,7,65,18.5833,65,35.9583C65,51.9583,52.2489,65,35.9896,65C22.1451,65,9.923,55.6042,9.923,41.1162 c0-10.4059,8.4357-18.8416,18.8416-18.8416c8.3247,0,15.0733,6.7485,15.0733,15.0733c0,6.6598-5.3988,12.0586-12.0586,12.0586 c-5.3278,0-9.6469-4.3191-9.6469-9.6469c0-4.2623,3.4552-7.7175,7.7175-7.7175c3.4098,0,6.174,2.7642,6.174,6.174 c0,2.7278-2.2114,4.9392-4.9392,4.9392c-2.1823,0-3.9578-1.7691-3.9514-3.9514c0.0053-1.8015,1.213-2.8736,2.8239-2.4426 c0.2681,0.0717,0.6559,0.2764,0.9406,0.633c0.3572,0.4473,0.4259,0.9031,0.4636,1.3122"
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
      strokeWidth: "2",
      d: "M35.9896,7 C50.6146,7,65,18.5833,65,35.9583C65,51.9583,52.2489,65,35.9896,65C22.1451,65,9.923,55.6042,9.923,41.1162 c0-10.4059,8.4357-18.8416,18.8416-18.8416c8.3247,0,15.0733,6.7485,15.0733,15.0733c0,6.6598-5.3988,12.0586-12.0586,12.0586 c-5.3278,0-9.6469-4.3191-9.6469-9.6469c0-4.2623,3.4552-7.7175,7.7175-7.7175c3.4098,0,6.174,2.7642,6.174,6.174 c0,2.7278-2.2114,4.9392-4.9392,4.9392c-2.1823,0-3.9578-1.7691-3.9514-3.9514c0.0053-1.8015,1.213-2.8736,2.8239-2.4426 c0.2681,0.0717,0.6559,0.2764,0.9406,0.633c0.3572,0.4473,0.4259,0.9031,0.4636,1.3122"
    })));
  }
};

export default Cyclone;