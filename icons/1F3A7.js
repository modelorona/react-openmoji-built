import React from 'react';

const Headphone = ({
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
      fill: "#9B9B9A",
      stroke: "none",
      d: "M27.4471,62.5368l-0.4016-22.9127c-1.7207,1.0537-6.1319,5.5625-6.5918,11.8193 C19.9742,57.96,25.5067,61.6442,27.4471,62.5368z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M44.716,39.5293l-0.1605,22.9123c1.0101-0.4595,2.9881-0.8169,4.6035-2.8555 c1.5019-1.8954,2.6903-5.3707,2.496-8.4901c-0.1696-2.7185-0.8216-5.4282-2.0577-7.2953 C48.0013,41.39,45.6763,40.139,44.716,39.5293z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M44.5555,61.5743l0.1605-21.4981c0.002-0.3135-0.3784-1.4622-0.2605-1.4945v-0.0348l-3.8116,1.0772 c-0.0024,0.0068,0.0051,0.0252,0.0049,0.0345c0.4023-0.0864-0.4505,1.4292-0.9212,1.7182 c-0.5996,0.3672-0.3068,1.094-0.3146,1.7913l-0.1726,15.5037c-0.0066,0.6065,1.6991,3.7628,1.6406,3.7524 c-0.001,0.0027-0.0067,0.0174-0.0067,0.0174l3.5812,1.0182v-0.0356C44.2632,63.4045,44.5535,61.877,44.5555,61.5743z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M31.5306,60.6572c0.7295-0.3183,1.0848-2.1352,1.0848-2.9291l-0.1199-14.8657 c0-0.1897-0.1742-1.0742-0.2243-1.251c-0.0912-0.3215-1.3269-2.0305-0.894-1.9341c0.0027-0.0162,0.0131-0.0397,0.0131-0.0532 l-3.5841-0.9857l-0.0005,0.038c0.1202,0.0333-0.6041,1.7546-0.6051,2.068l0.0551,20.605c-0.001,0.3028,0.674,2.0549,0.5995,2.0886 l3.4455-0.9012c0,0,0.0022-0.0124,0.0045-0.0259C31.205,62.543,31.0248,60.8789,31.5306,60.6572z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M60.8332,48.2998c1.427-3.1789,2.2094-15.1077,2.2094-15.1173c0-9.1932-7.4424-17.6248-7.4424-17.6248 s-2.0547-2.9007-5.8415-4.765c-5.0229-2.473-12.1318-4.0838-12.1337-4.0838c-8.9344,0.0125-19.0996,4.8769-24.3477,12.485 c-1.5825,2.294-3.0395,8.7727-3.8933,10.837C8.3448,32.5432,9.4003,41.0812,9.4104,41.146 c0.0702,0.4535,0.7761,4.1464,0.8683,4.4515c0.122,0.4037,3.15,7.3311,3.4766,7.8459c0.2473,0.3901,1.2495,0.7031,0.9524,1.0283 l0.0087,0.0372c0,0,1.5427-1.9693,0.0337-4.4451c-1.509-2.4757-3.1651-8.9466-3.1651-14.4447 c0-14.7353,10.5029-25.8535,24.4296-25.8623c13.9288,0.0088,24.4307,11.127,24.4307,25.8623 c0,5.4991-2.0251,13.0307-3.2579,15.0924c-1.2327,2.0618-0.0249,3.607-0.0249,3.607l0.0158-0.0487 C57.0162,53.9628,59.4061,51.4788,60.8332,48.2998z"
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
      d: "M31.1611,40.6344c0.9756,0.5038,1.643,1.5194,1.643,2.6874l-0.0002,15.5047c0,1.2299-0.74,2.2845-1.8007,2.7478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.5419,39.6241c0,0-6.354,1.7853-7.0674,11.4887s6.9726,11.424,6.9726,11.424L27.5419,39.6241z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.8586,40.6258c-0.8573,0.5269-1.4336,1.4669-1.4456,2.5423l-0.1726,15.5037c-0.0139,1.2475,0.7356,2.3231,1.8156,2.7878"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.716,39.5293c0,0,6.3337,1.8559,6.939,11.5667c0.6052,9.7107-7.0995,11.3456-7.0995,11.3456L44.716,39.5293z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.0474,53.8081c3.209-5.0583,5.0887-11.1701,5.0887-18.1887c0-15.7593-11.3519-28.5359-27.1053-28.5525V7.0662 c-0.0053,0-0.0102,0.0002-0.0154,0.0002c-0.0051,0-0.0102-0.0002-0.0153-0.0002v0.0007 C20.2467,7.0835,8.8948,19.8601,8.8948,35.6194c0,7.0186,1.8794,13.1304,5.0884,18.1887"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.2136,20.1939c-3.1322-4.4436-8.1665-7.3121-14.1882-7.3184V12.875c-0.0034,0-0.0066,0.0001-0.01,0.0001 c-0.0033,0-0.0066-0.0001-0.0099-0.0001v0.0005c-5.9961,0.0063-11.0132,2.8504-14.1482,7.2618"
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
      d: "M31.1611,40.6344c0.9756,0.5038,1.643,1.5194,1.643,2.6874l-0.0002,15.5047c0,1.2299-0.74,2.2845-1.8007,2.7478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.5419,39.6241c0,0-6.354,1.7853-7.0674,11.4887s6.9726,11.424,6.9726,11.424L27.5419,39.6241z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.8586,40.6258c-0.8573,0.5269-1.4336,1.4669-1.4456,2.5423l-0.1726,15.5037c-0.0139,1.2475,0.7356,2.3231,1.8156,2.7878"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.716,39.5293c0,0,6.3337,1.8559,6.939,11.5667c0.6052,9.7107-7.0995,11.3456-7.0995,11.3456L44.716,39.5293z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.0474,53.8081c3.209-5.0583,5.0887-11.1701,5.0887-18.1887c0-15.7593-11.3519-28.5359-27.1053-28.5525V7.0662 c-0.0053,0-0.0102,0.0002-0.0154,0.0002c-0.0051,0-0.0102-0.0002-0.0153-0.0002v0.0007 C20.2467,7.0835,8.8948,19.8601,8.8948,35.6194c0,7.0186,1.8794,13.1304,5.0884,18.1887"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.2136,20.1939c-3.1322-4.4436-8.1665-7.3121-14.1882-7.3184V12.875c-0.0034,0-0.0066,0.0001-0.01,0.0001 c-0.0033,0-0.0066-0.0001-0.0099-0.0001v0.0005c-5.9961,0.0063-11.0132,2.8504-14.1482,7.2618"
    })));
  }
};

export default Headphone;