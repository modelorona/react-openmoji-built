import React from 'react';

const PerformingArts = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.6,29.0397c-0.28-2.33-1.42-9.24-1.42-9.24c-0.29-2.37-3.84-4.66-6.16-4.03c0,0-6.15,1.97-7.9,2.44 c-1.76,0.47-8.08,1.84-8.08,1.84c-2.31,0.62-4.25,4.37-3.31,6.57c0,0,2.47,6.55,3.39,8.71c0.69,1.63,3.13,4.58,4.05,6.18 c1.95,3.4,6.01,7.46,9.8,6.45l3.95-1.06c3.79-1.02,5.28-6.56,5.26-10.48C33.18,34.5698,33.81,30.7997,33.6,29.0397z M16.26,31.3898 c-1.07,0.28-2.11-0.13-2.32-0.93c-0.22-0.8,0.47-1.68,1.54-1.97c1.07-0.29,2.11,0.13,2.32,0.93 C18.02,30.2198,17.32,31.0998,16.26,31.3898z M26.11,28.7498c-1.06,0.28-2.1-0.13-2.32-0.93c-0.21-0.8,0.48-1.69,1.55-1.97 c1.06-0.29,2.1,0.1299,2.3199,0.93C27.87,27.5798,27.18,28.4598,26.11,28.7498z M23.54,38.4398c-2.4,0.65-3.24,5.31-3.88,2.91 c-0.65-2.4,0.78-4.8701,3.1801-5.51c2.4-0.65,4.87,0.78,5.5099,3.18C28.99,41.4197,25.94,37.7997,23.54,38.4398z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M21.6693,23.4356c2.1356-0.765,4.0226-1.1808,5.0998-0.9136c1.2528,0.3108,2.2244,1.0304,3.1249,2.106 L21.6693,23.4356z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M17.4538,24.5652c-2.232,0.4053-4.0741,0.9887-4.8733,1.7587c-0.9295,0.8956-1.4112,2.0046-1.6533,3.3863 L17.4538,24.5652z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M61.96,28.0497c0,0-6.32-1.37-8.07-1.84c-1.76-0.47-7.91-2.45-7.91-2.45c-2.32-0.62-5.87,1.67-6.16,4.04 c0,0-1.14,6.91-1.42,9.24c-0.21,1.76,0.42,5.53,0.42,7.38c-0.02,3.92,1.47,9.46,5.26,10.48l3.95,1.06c3.79,1.01,7.85-3.05,9.8-6.45 c0.92-1.6,3.36-4.55,4.05-6.18c0.92-2.16,3.39-8.71,3.39-8.71C66.21,32.4197,64.27,28.6697,61.96,28.0497z M44.14,34.7297 c0.22-0.8,1.26-1.22,2.32-0.93c1.07,0.28,1.7599,1.16,1.55,1.96c-0.22,0.8-1.26,1.22-2.32,0.93 C44.62,36.4098,43.93,35.5298,44.14,34.7297z M53.31,45.7498c-0.65,2.4-3.11,3.83-5.51,3.18c-2.4-0.64-3.83-3.11-3.19-5.51 c0.65-2.4,1.48,2.26,3.88,2.9C50.9,46.9698,53.95,43.3498,53.31,45.7498z M57.86,38.3998c-0.21,0.8-1.25,1.22-2.32,0.94 c-1.06-0.29-1.7599-1.17-1.54-1.97c0.21-0.8,1.25-1.22,2.32-0.93C57.39,36.7198,58.08,37.5998,57.86,38.3998z"
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
      d: "M27.9197,46.898l-3.9508,1.0585c-3.7855,1.0144-7.852-3.0433-9.7979-6.4451c-0.9177-1.6042-3.3572-4.5516-4.0536-6.1821 c-0.9213-2.1567-3.3831-8.7075-3.3831-8.7075c-0.9413-2.2036,0.9945-5.9547,3.3091-6.5749c0,0,6.3153-1.3686,8.0716-1.8392 c1.7562-0.4705,7.9098-2.4429,7.9098-2.4429c2.3145-0.6202,5.8665,1.6604,6.1531,4.0394c0,0,1.1435,6.9053,1.4241,9.234 c0.212,1.7598-0.427,5.5314-0.4197,7.3792C33.198,40.3363,31.7052,45.8836,27.9197,46.898z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.3499,39.0182c0.6432,2.4006-2.412-1.2173-4.8126-0.574c-2.4006,0.6432-3.2375,5.3039-3.8808,2.9033 c-0.6432-2.4006,0.7814-4.8681,3.182-5.5113C25.2391,35.1929,27.7066,36.6175,28.3499,39.0182z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "25.7256",
      cy: "27.2976",
      rx: "1.9999",
      ry: "1.5",
      transform: "matrix(0.9659 -0.2588 0.2588 0.9659 -6.1883 7.5881)",
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
      d: "M21.6693,23.4356c2.1356-0.765,4.0226-1.1808,5.0998-0.9136c1.2528,0.3108,2.2244,1.0304,3.1249,2.106"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "15.8699",
      cy: "29.9379",
      rx: "1.9999",
      ry: "1.5",
      transform: "matrix(0.9659 -0.2588 0.2588 0.9659 -7.2074 5.1273)",
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
      d: "M17.4538,24.5652c-2.232,0.4053-4.0741,0.9887-4.8733,1.7587c-0.9295,0.8956-1.4112,2.0046-1.6533,3.3863"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.031,55.9565l-3.9507-1.0587c-3.7855-1.0143-5.2784-6.5616-5.2627-10.4806c0.0073-1.8481-0.6316-5.6204-0.4195-7.3807 c0.2805-2.3284,1.4239-9.2325,1.4239-9.2325c0.2866-2.379,3.8386-4.6597,6.1532-4.0395c0,0,6.1535,1.9724,7.9099,2.443 c1.7561,0.4706,8.0715,1.8393,8.0715,1.8393c2.3145,0.6201,4.2503,4.3712,3.309,6.5748c0,0-2.4623,6.5519-3.3837,8.7089 c-0.6963,1.63-3.1355,4.5768-4.0531,6.1807C55.8829,52.9132,51.8165,56.9708,48.031,55.9565z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "55.9304",
      cy: "37.8867",
      rx: "1.5",
      ry: "1.9999",
      transform: "matrix(0.2588 -0.9659 0.9659 0.2588 4.8593 82.1061)",
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
      d: "M54.3491,32.5124c2.232,0.4053,4.0741,0.9887,4.8733,1.7587c0.9295,0.8956,1.4112,2.0046,1.6533,3.3863"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "46.074",
      cy: "35.245",
      rx: "1.5",
      ry: "1.9999",
      transform: "matrix(0.2588 -0.9659 0.9659 0.2588 0.1055 70.6275)",
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
      d: "M50.1336,31.3828c-2.1356-0.765-4.0226-1.1808-5.0998-0.9136c-1.2528,0.3108-2.2244,1.0304-3.1249,2.106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.6141,43.4203c0.6432-2.4006,1.4802,2.2601,3.8808,2.9033c2.4006,0.6433,5.4558-2.9746,4.8125-0.574 c-0.6432,2.4006-3.1107,3.8253-5.5113,3.182C45.3955,48.2884,43.9709,45.8209,44.6141,43.4203z"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
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
      d: "M27.9197,46.898l-3.9508,1.0585c-3.7855,1.0144-7.852-3.0433-9.7979-6.4451c-0.9177-1.6042-3.3572-4.5516-4.0536-6.1821 c-0.9213-2.1567-3.3831-8.7075-3.3831-8.7075c-0.9413-2.2036,0.9945-5.9547,3.3091-6.5749c0,0,6.3153-1.3686,8.0716-1.8392 c1.7562-0.4705,7.9098-2.4429,7.9098-2.4429c2.3145-0.6202,5.8665,1.6604,6.1531,4.0394c0,0,1.1435,6.9053,1.4241,9.234 c0.212,1.7598-0.427,5.5314-0.4197,7.3792C33.198,40.3363,31.7052,45.8836,27.9197,46.898z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.3499,39.0182c0.6432,2.4006-2.412-1.2173-4.8126-0.574c-2.4006,0.6432-3.2375,5.3039-3.8808,2.9033 c-0.6432-2.4006,0.7814-4.8681,3.182-5.5113C25.2391,35.1929,27.7066,36.6175,28.3499,39.0182z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "25.7256",
      cy: "27.2976",
      rx: "1.9999",
      ry: "1.5",
      transform: "matrix(0.9659 -0.2588 0.2588 0.9659 -6.1883 7.5881)",
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
      d: "M21.6693,23.4356c2.1356-0.765,4.0226-1.1808,5.0998-0.9136c1.2528,0.3108,2.2244,1.0304,3.1249,2.106"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "15.8699",
      cy: "29.9379",
      rx: "1.9999",
      ry: "1.5",
      transform: "matrix(0.9659 -0.2588 0.2588 0.9659 -7.2074 5.1273)",
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
      d: "M17.4538,24.5652c-2.232,0.4053-4.0741,0.9887-4.8733,1.7587c-0.9295,0.8956-1.4112,2.0046-1.6533,3.3863"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.031,55.9565l-3.9507-1.0587c-3.7855-1.0143-5.2784-6.5616-5.2627-10.4806c0.0073-1.8481-0.6316-5.6204-0.4195-7.3807 c0.2805-2.3284,1.4239-9.2325,1.4239-9.2325c0.2866-2.379,3.8386-4.6597,6.1532-4.0395c0,0,6.1535,1.9724,7.9099,2.443 c1.7561,0.4706,8.0715,1.8393,8.0715,1.8393c2.3145,0.6201,4.2503,4.3712,3.309,6.5748c0,0-2.4623,6.5519-3.3837,8.7089 c-0.6963,1.63-3.1355,4.5768-4.0531,6.1807C55.8829,52.9132,51.8165,56.9708,48.031,55.9565z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "55.9304",
      cy: "37.8867",
      rx: "1.5",
      ry: "1.9999",
      transform: "matrix(0.2588 -0.9659 0.9659 0.2588 4.8593 82.1061)",
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
      d: "M54.3491,32.5124c2.232,0.4053,4.0741,0.9887,4.8733,1.7587c0.9295,0.8956,1.4112,2.0046,1.6533,3.3863"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "46.074",
      cy: "35.245",
      rx: "1.5",
      ry: "1.9999",
      transform: "matrix(0.2588 -0.9659 0.9659 0.2588 0.1055 70.6275)",
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
      d: "M50.1336,31.3828c-2.1356-0.765-4.0226-1.1808-5.0998-0.9136c-1.2528,0.3108-2.2244,1.0304-3.1249,2.106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.6141,43.4203c0.6432-2.4006,1.4802,2.2601,3.8808,2.9033c2.4006,0.6433,5.4558-2.9746,4.8125-0.574 c-0.6432,2.4006-3.1107,3.8253-5.5113,3.182C45.3955,48.2884,43.9709,45.8209,44.6141,43.4203z"
    })));
  }
};

export default PerformingArts;