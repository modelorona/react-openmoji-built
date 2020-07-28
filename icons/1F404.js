import React from 'react';

const Cow = ({
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
      d: "M18.171,25.1667l-0.2068-0.1171l-2.6682-1.5114l-3.2982,0.9914c0,0-3.2623,4.3446-3.3309,4.4526 c-0.0686,0.1079-2.4959,4.2768-2.4959,4.2768l0.767,2.685c0,0,4.733,1.7356,9.8163,0c0,0,4.5631,3.0063,4.1982,7.2812 c0,0,5.4684-0.9435,5.4684,3.2749c0,0.2083-0.3377,7.4825-0.3377,7.4825l0.6294,2.9181h2.875l2.5417-12.0872L35.7475,45.5 l12.5068-0.6866l3.5417-1.4801l1.5,3.1667l-1.7945,7.8149l2.2529,2.2267l3.0417-2.9583c0,0-0.8399,3.5834,2.3077,3.1527 c2.7083-0.3705,2.8056-1.6944,2.8056-1.6944L62.2127,48.5l-0.3034-2.6771l-2.8216-3.0312l1.5-9.5328c0,0-1-8.3493-2.875-9.7208 L32.581,22.9373l-8.7017,1.0211L18.171,25.1667z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M23.2816,22.9373l-6.0445,2.06c0,0-5.4553,1.8146-5.4652,6.8653s3.5658,4.9708,3.5658,4.9708l2.8962,0.0001 c0,0,2.2519,2.4633,2.5528,5.6066c0.3009,3.1433,4.0287,3.3829,4.0287,3.3829l1.6805,1.7614l-0.2432,5.548l-0.5084,2.5512 l1.5934,0.8582l2.4922-0.7044l2.7511-11.4557l0.59-4.6421c0,0-1.1667-7.5652-1.25-8.194c-0.0833-0.6288-0.8402-6.192-1.9201-8.3271 L23.2816,22.9373z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M40.0877,22.9373c0,0,5,4.1461,4.9167,12.4794c-0.0833,8.3333,6.9142,8.1912,6.9142,8.1912l0.9635,3.8442 l-1.3407,5.7585l1.1037,2.4729l2.3928-0.4537l3.5095-9.4069c0,0,1.983-6.2935,1.5564-6.5125 c-0.4267-0.219,0.484-6.3937,0.484-6.3937s0.0053-7.1371-3.414-9.3602L40.0877,22.9373z"
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
      d: "M59.8526,33.2589c0.5483,2.1777,0.198,5.6858-1.0426,8.387l-0.8143,5.1605l-2.5058,7.6663 c-0.2665,0.8154-1.0078,1.3645-1.842,1.3645h-0.2583c-1.3215,0-2.2578-1.3307-1.8481-2.6267l1.6269-6.9876 c0,0-4.1332-7.6611-2.9994-11.2117"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.0503,31.8625l1.5307,8.1589L30.0448,55.148c-0.1241,0.9835-0.9267,1.7256-1.888,1.7458l-0.3071,0.0065 c-1.3326,0.028-2.2977-1.2976-1.8918-2.6071c0.826-2.6646,0.9821-6.9715-0.2413-9.9115c-1.3972-3.3576-0.753-4.9584-0.753-4.9584"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.7475,44.5012c0,0,12.0966,1.3113,15.3787-1.4411"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M65.1997,44.3816c0,0-2.1681-3.6663-1.239-9.2472c1.7192-10.3271-6.4472-11.4468-6.4472-11.4468l-0.3398-0.1311L32.581,22.9373 l-9.2994,1.0134"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.7561,41.9871l3.1531,3.8358l-0.0649,8.3475c0,0.9206-0.7235,1.6669-1.616,1.6669h-1.681"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.79,22.2691c1.9909,2.5381,3.9819,2.5381,3.9819,2.5381"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.9754,20.6949c1.4174,2.8432-1.7383,4.3023-1.7383,4.3023s-2.717-3.7782-5.4652-0.19l-2.0612,2.4996 c0,0-2.1109,3.471-3.5898,5.4622c-0.4114,0.554,0.3304,2.4246,0.6856,3.0185c0.6608,1.105,5.3525,1.7864,9.723,0.2124 c0,0,3.6456,0.3266,4.3312,7.0608c0.1304,1.2807,2.7376,3.0159,4.8836,2.731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.654,31.5053c4.7561,1.5524,4.9952-2.4579,4.9952-2.4579v-0.2588c-2.3138-2.7598-4.4562-0.7762-4.4562-0.7762"
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
      d: "M59.8526,33.2589c0.5483,2.1777,0.198,5.6858-1.0426,8.387l-0.8143,5.1605l-2.5058,7.6663 c-0.2665,0.8154-1.0078,1.3645-1.842,1.3645h-0.2583c-1.3215,0-2.2578-1.3307-1.8481-2.6267l1.6269-6.9876 c0,0-4.1332-7.6611-2.9994-11.2117"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.0503,31.8625l1.5307,8.1589L30.0448,55.148c-0.1241,0.9835-0.9267,1.7256-1.888,1.7458l-0.3071,0.0065 c-1.3326,0.028-2.2977-1.2976-1.8918-2.6071c0.826-2.6646,0.9821-6.9715-0.2413-9.9115c-1.3972-3.3576-0.753-4.9584-0.753-4.9584"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.7475,44.5012c0,0,12.0966,1.3113,15.3787-1.4411"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M65.1997,44.3816c0,0-2.1681-3.6663-1.239-9.2472c1.7192-10.3271-6.4472-11.4468-6.4472-11.4468l-0.3398-0.1311L32.581,22.9373 l-9.2994,1.0134"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.7561,41.9871l3.1531,3.8358l-0.0649,8.3475c0,0.9206-0.7235,1.6669-1.616,1.6669h-1.681"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M7.79,22.2691c1.9909,2.5381,3.9819,2.5381,3.9819,2.5381"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.9754,20.6949c1.4174,2.8432-1.7383,4.3023-1.7383,4.3023s-2.717-3.7782-5.4652-0.19l-2.0612,2.4996 c0,0-2.1109,3.471-3.5898,5.4622c-0.4114,0.554,0.3304,2.4246,0.6856,3.0185c0.6608,1.105,5.3525,1.7864,9.723,0.2124 c0,0,3.6456,0.3266,4.3312,7.0608c0.1304,1.2807,2.7376,3.0159,4.8836,2.731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.654,31.5053c4.7561,1.5524,4.9952-2.4579,4.9952-2.4579v-0.2588c-2.3138-2.7598-4.4562-0.7762-4.4562-0.7762"
    })));
  }
};

export default Cow;