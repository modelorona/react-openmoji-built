import React from 'react';

const SleepyFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "24",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M53.0243,55.0045c-1.3489-0.0915-2.5814-0.7028-3.4702-1.7214c-2.9266-3.3525-2.5576-9.3267-2.5405-9.5792 c0.0356-0.5252,0.4899-0.9214,1.0148-0.8858c0.2529,0.0172,6.2222,0.4585,9.1501,3.811h0.0005 c1.833,2.1017,1.6153,5.3044-0.486,7.1383C55.6765,54.6568,54.3732,55.096,53.0243,55.0045z"
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
      d: "M46.8344,56.2934C43.606,58.0206,39.9174,59,36,59c-12.7025,0-23-10.2975-23-23s10.2975-23,23-23s23,10.2975,23,23 c0,2.0737-0.2744,4.0832-0.7889,5.9944"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.5,32.7253c0.4132-0.344,2.2456-1.7915,4.9091-1.6364c2.1608,0.1259,3.61,1.2333,4.0909,1.6364"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5,32.7253c0.4132-0.344,2.2456-1.7915,4.9091-1.6364c2.1608,0.1259,3.61,1.2333,4.0909,1.6364"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.0243,55.0045 c-1.3489-0.0915-2.5814-0.7028-3.4702-1.7214c-2.9266-3.3525-2.5576-9.3267-2.5405-9.5792 c0.0356-0.5252,0.4899-0.9214,1.0148-0.8858c0.2529,0.0172,6.2222,0.4585,9.1501,3.811h0.0005 c1.833,2.1017,1.6153,5.3044-0.486,7.1383C55.6765,54.6568,54.3732,55.096,53.0243,55.0045z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5,45.5c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981c2.6235,0.03,4.9897,0.4146,6.1579,0.9981"
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
      d: "M46.8344,56.2934C43.606,58.0206,39.9174,59,36,59c-12.7025,0-23-10.2975-23-23s10.2975-23,23-23s23,10.2975,23,23 c0,2.0737-0.2744,4.0832-0.7889,5.9944"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.5,32.7253c0.4132-0.344,2.2456-1.7915,4.9091-1.6364c2.1608,0.1259,3.61,1.2333,4.0909,1.6364"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5,32.7253c0.4132-0.344,2.2456-1.7915,4.9091-1.6364c2.1608,0.1259,3.61,1.2333,4.0909,1.6364"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.0243,55.0045 c-1.3489-0.0915-2.5814-0.7028-3.4702-1.7214c-2.9266-3.3525-2.5576-9.3267-2.5405-9.5792 c0.0356-0.5252,0.4899-0.9214,1.0148-0.8858c0.2529,0.0172,6.2222,0.4585,9.1501,3.811h0.0005 c1.833,2.1017,1.6153,5.3044-0.486,7.1383C55.6765,54.6568,54.3732,55.096,53.0243,55.0045z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5,45.5c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981c2.6235,0.03,4.9897,0.4146,6.1579,0.9981"
    })));
  }
};

export default SleepyFace;