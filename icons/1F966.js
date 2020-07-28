import React from 'react';

const Broccoli = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.5798,37.6939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M46.98,45.39 C44.15,45.42,43.2,48.27,43.2,48.27s-0.97,1.92-0.97,4.81v5.73c0,1.09-0.87,1.96-1.96,1.96h-7.61c-1.09,0-1.96-0.87-1.96-1.96 v-5.73c0-2.89-0.97-4.81-0.97-4.81S28.81,45.51,26.08,45.39c0,0,1.43-0.11,1.1-0.11c1.81-0.24,5.05-1.05,6.4-3.74 c0,0,0-2.31,2.31-2.31s2.5,2.31,2.5,2.31c1.55,3.1,5.58,3.7,7.1,3.82c-0.09,0.01-0.19,0.01-0.29,0.03H46.98z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "none",
      d: "M58.3875,34.3862c0,6.0769-5.1058,11-11.4038,11c-0.0481,0-0.0866,0-0.1346-0.0096 c-0.2308,0.0096-0.4711,0-0.6923-0.0192c-0.2116-0.0096-0.4135-0.0192-0.625,0h-0.0384c-1.2404-0.0961-4.1731-0.5192-6.0481-2.3653 c0,0,9.6511-16.1095,9.8048-15.642s-32.0452,4.0746-13.2663-1.0311c7.7692-2.1154,9.9135-4.7404,9.4808-7.2308l-9.3942-8.3173 c0.2404,0,0.4711,0.0096,0.7019,0.0192c7.5481,0.2596,13.8077,5.4423,15.4327,12.3269c0.2308,1.0192,0.8558,1.9039,1.7211,2.5385 C56.6471,27.665,58.3875,30.8285,58.3875,34.3862z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M39.4452,42.992c0,0-0.7788-0.8847-1.0577-1.4519c0,0-0.1923-2.3077-2.5-2.3077 c-2.3077,0-2.3077,2.3077-2.3077,2.3077c-1.3462,2.6923-4.5866,3.5-6.4038,3.7404c-0.2116,0-0.4231,0.0096-0.6443,0.0288 c-0.4038,0.0481-0.8173,0.0769-1.2307,0.0769c-0.1443,0-0.2884-0.0096-0.4231-0.0096 c-6.1635-0.1634-11.1058-5.0385-11.1058-11.0289c0-3.6538,1.8461-6.8942,4.6827-8.9038c0.9038-0.6443,1.4807-1.6154,1.7596-2.6731 c1.5096-5.8173,6.3558-10.3654,12.4519-11.6346c0.452-0.0962,0.9135-0.1827,1.375-0.2308c0.2308-0.0289,0.4616-0.0577,0.702-0.0769 c0.4326-0.0385-4.8365-0.0577,1.3269-0.0577c8.3025,0,17.1798,13.3792-0.0866,15.5481C55.65,17.75,62.85,45.75,39.4452,42.992z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      d: "M30.8106,46.7419c0.5192,0.5673,1.1346,1.0577,1.8173,1.4616c-0.7019-0.3943-1.3462-0.8942-1.8846-1.4616 c-0.6827-0.7212-1.5961-1.173-2.5673-1.3557h0.1443C29.2625,45.5689,30.1471,46.0208,30.8106,46.7419z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      d: "M45.2049,45.3862c-1.0289,0.125-1.9808,0.5673-2.6924,1.3173c-1.3846,1.4904-3.375,2.4423-5.5865,2.5192 c2.0961-0.1154,3.9712-1.0577,5.2981-2.5192c0.6923-0.75,1.6154-1.1923,2.6058-1.3173H45.2049z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M46.9837,45.3862 c-2.8365,0.0384-3.7885,2.8846-3.7885,2.8846s-0.9615,1.9231-0.9615,4.8077v5.7307c0,1.0865-0.875,1.9616-1.9615,1.9616l0,0 c0-9.25,1.7903-16.2083,1.7903-16.2083C42.6875,46.5938,46.9837,45.3862,46.9837,45.3862z"
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
      d: "M33.5798,37.6939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-0.2019,0-0.5481-0.0288c-0.0096,0-0.0288,0-0.0385,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.176,45.2804c-0.7692,0.1058-1.2885,0.1058-1.2885,0.1058"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8875,45.3862c0,0,5.7692,0,7.6923-3.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1952,48.2708 c0,0-0.9615,1.9231-0.9615,4.8077v2.0979v3.6313c0,1.0842-0.8789,1.9631-1.9631,1.9631h-1.883h-3.8462h-1.883 c-1.0842,0-1.9631-0.8789-1.9631-1.9631v-3.6313v-2.0979c0-2.8846-0.9615-4.8077-0.9615-4.8077"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-5.7692,0-7.6923-3.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-0.2019,0-0.5481-0.0288c-0.0096,0-0.0288,0-0.0385,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.176,45.2804c-0.7692,0.1058-1.2885,0.1058-1.2885,0.1058"
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
      d: "M33.5798,37.6939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-0.2019,0-0.5481-0.0288c-0.0096,0-0.0288,0-0.0385,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.176,45.2804c-0.7692,0.1058-1.2885,0.1058-1.2885,0.1058"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.8875,45.3862c0,0,5.7692,0,7.6923-3.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1952,48.2708 c0,0-0.9615,1.9231-0.9615,4.8077v2.0979v3.6313c0,1.0842-0.8789,1.9631-1.9631,1.9631h-1.883h-3.8462h-1.883 c-1.0842,0-1.9631-0.8789-1.9631-1.9631v-3.6313v-2.0979c0-2.8846-0.9615-4.8077-0.9615-4.8077"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-5.7692,0-7.6923-3.8462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.7232,45.3139 c-0.4196,0.0478-0.8461,0.0723-1.278,0.0723c-6.125,0-11.0961-4.9423-11.0961-11.0385c0-3.6552,1.7871-6.8941,4.5366-8.9045 c0.8801-0.6435,1.4456-1.6121,1.7114-2.6694c1.7341-6.898,8.0083-12.003,15.4732-12.003c7.5784,0,13.9358,5.2744,15.5442,12.3414 c0.2335,1.0259,0.8381,1.9071,1.6744,2.5454c2.634,2.0103,4.3295,5.1681,4.3295,8.7285c0,6.0769-4.9519,11-11.0577,11 c-0.161,0-0.3212-0.0034-0.4805-0.0101"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.0798,45.3862c0,0-0.2019,0-0.5481-0.0288c-0.0096,0-0.0288,0-0.0385,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.176,45.2804c-0.7692,0.1058-1.2885,0.1058-1.2885,0.1058"
    })));
  }
};

export default Broccoli;