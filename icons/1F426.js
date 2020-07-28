import React from 'react';

const Bird = ({
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
      fill: "#6A462F",
      stroke: "none",
      d: "M40.203,22c0,0,3.1218-9,11.4467-4c0,0,8.585,0.75,8.9753,3.375c0,0-7.9346,1.625-10.0159,5.625 s3.1218,7-5.3331,15.625c0,0-4.0324,4.375-10.276,4.375c0,0-22,3-25,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M10.125,46.875C10.125,46.875,35,24,43,25s2,13.25-5.5,17.625S10.125,46.875,10.125,46.875z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "32.625",
      x2: "37",
      y1: "55.625",
      y2: "54",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M42.8504,29.4692c-0.7444-0.1428-0.9348,0.5114-0.9348,0.5114h-0.0005c-0.6837,2.166-3.0652,7.1369-10.4871,10.0829 l0.006,0.0082c0,0-0.7619,0.2029-0.443,1.0278c0.2757,0.7122,0.9802,0.5552,1.1667,0.4988 c8.3025-3.3272,10.7819-9.1109,11.4476-11.3398C43.6638,30.0615,43.5899,29.6108,42.8504,29.4692z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.625,40.875C31.625,40.875,40,39,43,29"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,22c0,0,3-9,11-4c0,0,8.25,0.75,8.625,3.375C60.625,21.375,53,23,51,27s3,7-5.125,15.625C45.875,42.625,42,47,36,47l-1,2l2,5 l6,1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.125,46.875C10.125,46.875,35,24,43,25s2,13.25-5.5,17.625S10.125,46.875,10.125,46.875z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "32.625",
      x2: "37",
      y1: "55.625",
      y2: "54",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M42.8504,29.4692c-0.7444-0.1428-0.9348,0.5114-0.9348,0.5114h-0.0005c-0.6837,2.166-3.0652,7.1369-10.4871,10.0829 l0.006,0.0082c0,0-0.7619,0.2029-0.443,1.0278c0.2757,0.7122,0.9802,0.5552,1.1667,0.4988 c8.3025-3.3272,10.7819-9.1109,11.4476-11.3398C43.6638,30.0615,43.5899,29.6108,42.8504,29.4692z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.625,40.875C31.625,40.875,40,39,43,29"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,22c0,0,3-9,11-4c0,0,8.25,0.75,8.625,3.375C60.625,21.375,53,23,51,27s3,7-5.125,15.625C45.875,42.625,42,47,36,47l-1,2l2,5 l6,1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.125,46.875C10.125,46.875,35,24,43,25s2,13.25-5.5,17.625S10.125,46.875,10.125,46.875z"
    })));
  }
};

export default Bird;