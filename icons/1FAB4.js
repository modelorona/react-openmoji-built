import React from 'react';

const PottedPlant = ({
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
      d: "M42.2688,60.9583H28.6752a.83.83,0,0,1-.8187-.6964l-2.4489-15.05a.8291.8291,0,0,1,.686-.9515c.4526-.0737,18.3067-.0745,18.7569,0a.8291.8291,0,0,1,.6859.9515L43.0876,60.2619A.83.83,0,0,1,42.2688,60.9583Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M47.7634,45.9079H23.1806a.8288.8288,0,0,1-.8292-.8293V39.9314a.8288.8288,0,0,1,.8292-.8292H47.7634a.8288.8288,0,0,1,.8293.8292v5.1472A.8288.8288,0,0,1,47.7634,45.9079Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M35.2717,32.3523a1,1,0,0,1-.9444-.6738c-1.2588-3.6514-13.1757-11.21-17.6611-13.8144a1,1,0,0,1-.0039-1.7276,12.09,12.09,0,0,1,10.4219-.7051l.0175.0088c8.8291,4.1338,9.1612,15.4131,9.1709,15.8916a1,1,0,0,1-.8242,1.0049A.9841.9841,0,0,1,35.2717,32.3523Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M50.0949,12.8416a1.0014,1.0014,0,0,0-.0488-1.6943,9.852,9.852,0,0,0-12.2529,2.4668c-4.8512,5.46-3.7389,14.053-3.4178,15.9636C32.05,27.86,27.3221,25.2581,21.98,27.4031c-.0127.0049-.0254.01-.0371.0156-.1719.0762-4.2041,1.9356-4.2608,6.3428a.9994.9994,0,0,0,1,1.0127,1.0156,1.0156,0,0,0,.2637-.0351c.1082-.0293,10.8372-2.9316,16.073-2.1958l.0163.0019.0123.0015a.9772.9772,0,0,0,.1762-.0023.9468.9468,0,0,0,.1226-.0007l.01-.0012.01-.0011c4.8706-.7582,13.4261,1.5561,13.5129,1.5795a1.0156,1.0156,0,0,0,.2637.0351.9993.9993,0,0,0,.9736-1.2265,7.5539,7.5539,0,0,0-6.2432-5.4736h-.0009a10.91,10.91,0,0,0-7.44,1.9071C36.6063,21.9418,49.9576,12.9328,50.0949,12.8416Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M35.1935,31.323a1,1,0,0,1-.9462-1.3212c.123-.3614,3.082-8.8575,10.2128-11.3184h0c7.4122-2.5606,11.0938,3.1465,11.1309,3.2041a1.0006,1.0006,0,0,1-.7559,1.5273c-4.3261.4-16.1289,2.5069-18.7607,7.3828A1,1,0,0,1,35.1935,31.323Zm9.5928-11.6943h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M31.19,39.1022v-1.32a4.0049,4.0049,0,0,1,1.2969-2.9345,2.96,2.96,0,0,1-.2969-1.2911,3,3,0,0,1,6,0,2.96,2.96,0,0,1-.2968,1.2911A4.0032,4.0032,0,0,1,39.19,37.782v1.32Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "23.1806",
      y: "39.9315",
      width: "24.583",
      height: "5.147",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.678 47.853 28.675 60.129 42.269 60.129 44.266 47.853"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.1376,37.2208A3.0039,3.0039,0,0,0,36.4721,35.08a2,2,0,1,0-2.5631,0,3.004,3.004,0,0,0-1.6674,2.1509"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.8864,31.7085A61.9157,61.9157,0,0,1,49.1648,33.16a6.5952,6.5952,0,0,0-5.4268-4.7128c-4.4986-.7141-8.5255,3.1133-8.5255,3.1133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.2585,31.3474s-.2277-11.089-8.5947-15.0072a11.15,11.15,0,0,0-9.51.653,132.2347,132.2347,0,0,1,11.6173,7.6777"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1953,31.5564s-5.9594-5.9847-12.8388-3.2258c0,0-3.6211,1.6242-3.67,5.4432a84.0357,84.0357,0,0,1,10.71-2.1093"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.2122,30.3226c3.4659-6.4211,19.5492-7.9037,19.5492-7.9037s-3.2069-5.12-9.9567-2.7906"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.4193,29.7723C35.1153,21.6311,49.5322,12.01,49.5322,12.01A8.7847,8.7847,0,0,0,38.534,14.2782a12.9636,12.9636,0,0,0-2.6366,4.8407"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "23.1806",
      y: "39.9315",
      width: "24.583",
      height: "5.147",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.678 47.853 28.675 60.129 42.269 60.129 44.266 47.853"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.1376,37.2208A3.0039,3.0039,0,0,0,36.4721,35.08a2,2,0,1,0-2.5631,0,3.004,3.004,0,0,0-1.6674,2.1509"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.8864,31.7085A61.9157,61.9157,0,0,1,49.1648,33.16a6.5952,6.5952,0,0,0-5.4268-4.7128c-4.4986-.7141-8.5255,3.1133-8.5255,3.1133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.2585,31.3474s-.2277-11.089-8.5947-15.0072a11.15,11.15,0,0,0-9.51.653,132.2347,132.2347,0,0,1,11.6173,7.6777"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1953,31.5564s-5.9594-5.9847-12.8388-3.2258c0,0-3.6211,1.6242-3.67,5.4432a84.0357,84.0357,0,0,1,10.71-2.1093"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.2122,30.3226c3.4659-6.4211,19.5492-7.9037,19.5492-7.9037s-3.2069-5.12-9.9567-2.7906"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.4193,29.7723C35.1153,21.6311,49.5322,12.01,49.5322,12.01A8.7847,8.7847,0,0,0,38.534,14.2782a12.9636,12.9636,0,0,0-2.6366,4.8407"
    })));
  }
};

export default PottedPlant;