import React from 'react';

const RolledUpNewspaper = ({
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
      fill: "#d0cfce",
      d: "M18.7308,35.288,51.0536,15.1054S63.2017,17.4511,60.7223,29.09l-10.005,8.8024L28.5734,54.9045s3.265-6.7108-.0966-10.6423A87.228,87.228,0,0,0,18.7308,35.288Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M23.2318,39.0817l-2.924,2.4575s5.1675,1.8864,5.5582,4.8693.112,5.1147-.5208,6.3865-1.5339,3.01-7.7116,3.52c0,0,3.5921,3.6172,5.7058,2.54s6.1977-3.2394,6.3307-4.793.61-8.3143-.6677-9.4794S23.2318,39.0817,23.2318,39.0817Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M16.3468,56.4944s-3.09.5421-3.54-9.2745c0,0,2.204-5.6592,5.4531-4.9507,0,0,6.3952.8884,4.3931,6.403,0,0-2.7457-4.7324-4.8049-1.9766,0,0-2.4963,5.449,1.3831,7.4591,0,0,3.8718.7912,4.6268,0S22.653,58.8549,16.3468,56.4944Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M21.4581,43.3374a6.4586,6.4586,0,0,1,.4513,5.5146s-.206,4.5555-3.65,3.057c0,0,.5034,2.3376,3.7639,2.0979,0,0,5.3319-.4781,4.2206-6.787C26.2444,47.22,24.153,43.3974,21.4581,43.3374Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M21.4581,48.1926s-.8292-2.5175-3.049-1.6184c0,0-1.9053,2.5775-.7755,4.7953a2.27,2.27,0,0,0,1.0972,1.7982s3.1907-.6855,3.07-3.52Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M46.6436,40.8149a12.54,12.54,0,0,0-5.1888-14.2023L29.868,33.8018s9.4553,5.7543,6.8227,15.3448Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.0744,16.79c1.5539-.9135,3.2775-2.0476,5.1366-1.6845A11.6435,11.6435,0,0,1,62,24.3155c.5589,2.9164-1.3411,5.6107-3.4232,7.2949"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.666,44.5825s-2.967-5.306-10.4061-8.9976L48.0744,16.79"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.9184",
      x2: "58.577",
      y1: "56.914",
      y2: "31.6104",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M21.9094,48.852c.0858-3.1169-2.2309-2.9971-2.2309-2.9971-1.6223-.103-2.3394,1.3973-2.6559,2.6974a5.2371,5.2371,0,0,0,.3447,3.504c2.09,4.31,6.5755,1.9634,6.5755,1.9634a5.8246,5.8246,0,0,0,2.5659-5.6731,3.9532,3.9532,0,0,0-.3332-1.3079,7.6974,7.6974,0,0,0-5.41-4.7587,6.4607,6.4607,0,0,0-7.1889,3.8446,11.6134,11.6134,0,0,0-.5913,1.6671,4.9354,4.9354,0,0,0-.1586.9214,9.557,9.557,0,0,0,4.0008,8.6531c7.2447,4.4384,11.7463-2.4617,11.7463-2.4617a9.2057,9.2057,0,0,0,.8758-8.6C27.179,39.86,18.26,35.5849,18.26,35.5849"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.3468,43.0114c.3429-.1894,6.3062-3.93,6.3062-3.93"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.34,35.5849c.1579-9.66-7.0056-12.9869-7.0056-12.9869"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.577,31.61A11.3593,11.3593,0,0,0,53.1562,20.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.6436,40.8149a12.54,12.54,0,0,0-5.1888-14.2023L29.868,33.8018s9.4553,5.7543,6.8227,15.3448Z"
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
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.0744,16.79c1.5539-.9135,3.2775-2.0476,5.1366-1.6845A11.6435,11.6435,0,0,1,62,24.3155c.5589,2.9164-1.3411,5.6107-3.4232,7.2949"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.666,44.5825s-2.967-5.306-10.4061-8.9976L48.0744,16.79"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "26.9184",
      x2: "58.577",
      y1: "56.914",
      y2: "31.6104",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M21.9094,48.852c.0858-3.1169-2.2309-2.9971-2.2309-2.9971-1.6223-.103-2.3394,1.3973-2.6559,2.6974a5.2371,5.2371,0,0,0,.3447,3.504c2.09,4.31,6.5755,1.9634,6.5755,1.9634a5.8246,5.8246,0,0,0,2.5659-5.6731,3.9532,3.9532,0,0,0-.3332-1.3079,7.6974,7.6974,0,0,0-5.41-4.7587,6.4607,6.4607,0,0,0-7.1889,3.8446,11.6134,11.6134,0,0,0-.5913,1.6671,4.9354,4.9354,0,0,0-.1586.9214,9.557,9.557,0,0,0,4.0008,8.6531c7.2447,4.4384,11.7463-2.4617,11.7463-2.4617a9.2057,9.2057,0,0,0,.8758-8.6C27.179,39.86,18.26,35.5849,18.26,35.5849"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.3468,43.0114c.3429-.1894,6.3062-3.93,6.3062-3.93"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.34,35.5849c.1579-9.66-7.0056-12.9869-7.0056-12.9869"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.577,31.61A11.3593,11.3593,0,0,0,53.1562,20.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.6436,40.8149a12.54,12.54,0,0,0-5.1888-14.2023L29.868,33.8018s9.4553,5.7543,6.8227,15.3448Z"
    })));
  }
};

export default RolledUpNewspaper;