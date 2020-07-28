import React from 'react';

const Key = ({
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
      fill: "#F4AA41",
      stroke: "none",
      d: "M33.5357,31.9911c-1.4016-4.2877-0.2247-9.41,3.4285-13.0632c5.018-5.018,12.8077-5.3639,17.3989-0.7727 s4.2452,12.381-0.7728,17.3989c-4.057,4.057-10.4347,5.5131-14.2685,2.5888"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#F4AA41",
      stroke: "#F4AA41",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.652,31.7364 31.2181,34.1872 14.6444,50.5142 14.6444,57.6603 22.0426,57.6603 22.0426,53.0835 27.0544,53.0835 27.0544,47.3024 32.04,47.3024 34.3913,44.9292 34.3913,40.6274 36.3618,40.6274 39.4524,37.5368"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#E27022",
      stroke: "none",
      points: "15.9847,53.3457 15.9857,51.4386 31.8977,35.8744 32.8505,36.8484"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.5201",
      cy: "23.9982",
      r: "3.9521",
      fill: "#E27022",
      stroke: "none"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "30.735,34.6557 14.3026,50.6814 14.3026,57.9214 21.868,57.9214 21.868,53.2845 26.9929,53.2845 26.9929,47.4274 32.0913,47.4274 34.4957,45.023 34.4957,40.6647 36.5107,40.6647"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.5201",
      cy: "23.9982",
      r: "3.9521",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.2256,31.1781c-1.4298-4.2383-0.3466-9.2209,3.1804-12.6947c4.8446-4.7715,12.4654-4.8894,17.0216-0.2634 s4.3223,12.2441-0.5223,17.0156c-3.9169,3.8577-9.6484,4.6736-14.1079,2.3998"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "30.735,34.6557 14.3026,50.6814 14.3026,57.9214 21.868,57.9214 21.868,53.2845 26.9929,53.2845 26.9929,47.4274 32.0913,47.4274 34.4957,45.023 34.4957,40.6647 36.5107,40.6647"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.5201",
      cy: "23.9982",
      r: "3.9521",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.2256,31.1781c-1.4298-4.2383-0.3466-9.2209,3.1804-12.6947c4.8446-4.7715,12.4654-4.8894,17.0216-0.2634 s4.3223,12.2441-0.5223,17.0156c-3.9169,3.8577-9.6484,4.6736-14.1079,2.3998"
    })));
  }
};

export default Key;