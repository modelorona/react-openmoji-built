import React from 'react';

const OfficeWorker = ({
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
      fill: "#9B9B9A",
      d: "M17.298,58.8535c0,0-2-13.8,10-13.8c3.1918,2.1279,5.9264,3.5984,9,3.5921h-0.125 c3.0736,0.0063,5.3081-2.6642,8.5-4.7921c13.3136,0,10.9,15,10.9,15"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#D0CFCE",
      points: "36.6129,54.2067 39.0281,58.7515 45.4,44.1365 51.8574,53.9202 40.6996,58.0515"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M38.507,57.7426c-0.5976,1.0349-4.8914,1.0349-5.489,0l-1.842-2.4101l-3.3864-8.7387l7.9729,2.7l7.573-2.7 l-3.2865,8.7387L38.507,57.7426z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M65.729,58.4861H50.2443V38.6837h15.2709c0.1181,0,0.2138,0.0957,0.2138,0.2138V58.4861z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M62.6179,60.9619H48.0103V42.0102h10.753c2.1288,0,3.8546,1.7257,3.8546,3.8545 C62.6179,45.8647,62.6179,60.9619,62.6179,60.9619z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.4552,48.5348c0,0-1.2063,6.0215,2.3073,6.0215s2.3073-6.0215,2.3073-6.0215"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M35.0163,54.8799c0.3249-0.5627,1.137-0.5627,1.4619,0l1.1645,2.0171l1.8956,1.9831h-3.7911h-3.791 l1.8955-1.9831L35.0163,54.8799z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#D0CFCE",
      points: "34.9121,54.5563 32.4969,57.8011 26.825,44.8861 22.8676,53.3698 32.3254,57.8011"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M26,36.5808c-4,0-4-6-4-13s4-14,14-14s14,7,14,14s0,13-4,13"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M24.9365,28.5808c0,9,4.9365,14,11,14c5.9365,0,11.0635-5,11.0635-14c0.0245-1.7187-0.3164-3.4229-1-5 c-3-3-7-8-7-8c-4,3-7,6-13,7.0005C26,22.5808,24.9365,23.58,24.9365,28.5808z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "62.6179,60.9619 48.0103,60.9619 48.0103,42.3261 59.8355,42.3261 59.8355,44.4385 62.6179,44.4385"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.2144,38.8631 66.0398,38.8631 66.0398,57.499"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "59.8355",
      x2: "62.6179",
      y1: "42.3261",
      y2: "44.4385",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "48.5348",
      y2: "48.5348",
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
      d: "M59.3875,50.583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9548,50.583"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "52.6312",
      y2: "52.6312",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "56.2155",
      y2: "56.2155",
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
      d: "M33.4552,48.5348c0,0-1.2063,6.0215,2.3073,6.0215s2.3073-6.0215,2.3073-6.0215"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.5649,57.8011"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.9601,57.8011"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.7",
      x2: "38.9601",
      y1: "55.6292",
      y2: "57.8075",
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
      d: "M16.825,57.8861c0,0-2-13,10-13c3.1919,2.1279,5.9264,3.5984,9,3.5921H35.7c3.0736,0.0063,5.8081-1.4642,9-3.5921"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "34.9121,54.5563 32.4969,57.8011 26.825,44.8861 22.8676,53.3698 32.3254,57.8011"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "44.7,44.8861 39.0281,57.8011 36.6129,54.5563"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.4414,25.171"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.9529,27.0468c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2C41.0573,25.0472,41.9525,25.9424,41.9529,27.0468"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9529,27.0468c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2C33.0573,25.0472,33.9525,25.9424,33.9529,27.0468"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.9527,37.0492c-1.2005-0.0116-2.3813-0.3055-3.4472-0.8579c-0.494-0.247-0.6943-0.8477-0.4473-1.3418 c0.247-0.4941,0.8477-0.6943,1.3418-0.4473c1.5934,0.8593,3.5121,0.8593,5.1055,0c0.494-0.247,1.0947-0.0468,1.3418,0.4473 s0.0468,1.0947-0.4473,1.3418C38.3341,36.7437,37.1532,37.0376,35.9527,37.0492z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,36.5808c-4,0-4-6-4-13 s4-14,14-14s14,7,14,14s0,13-4,13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.9365,28.5808c0,9,4.9365,14,11,14 c5.9365,0,11.0635-5,11.0635-14c0.0245-1.7187-0.3164-3.4229-1-5c-3-3-7-8-7-8c-4,3-7,6-13,7.0005 C26,22.5808,24.9365,23.58,24.9365,28.5808z"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "62.6179,60.9619 48.0103,60.9619 48.0103,42.3261 59.8355,42.3261 59.8355,44.4385 62.6179,44.4385"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.2144,38.8631 66.0398,38.8631 66.0398,57.499"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "59.8355",
      x2: "62.6179",
      y1: "42.3261",
      y2: "44.4385",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "48.5348",
      y2: "48.5348",
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
      d: "M59.3875,50.583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9548,50.583"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "52.6312",
      y2: "52.6312",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "50.9548",
      x2: "59.3875",
      y1: "56.2155",
      y2: "56.2155",
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
      d: "M33.4552,48.5348c0,0-1.2063,6.0215,2.3073,6.0215s2.3073-6.0215,2.3073-6.0215"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.5649,57.8011"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.9601,57.8011"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.7",
      x2: "38.9601",
      y1: "55.6292",
      y2: "57.8075",
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
      d: "M16.825,57.8861c0,0-2-13,10-13c3.1919,2.1279,5.9264,3.5984,9,3.5921H35.7c3.0736,0.0063,5.8081-1.4642,9-3.5921"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "34.9121,54.5563 32.4969,57.8011 26.825,44.8861 22.8676,53.3698 32.3254,57.8011"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "44.7,44.8861 39.0281,57.8011 36.6129,54.5563"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.4414,25.171"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.9529,27.0468c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2C41.0573,25.0472,41.9525,25.9424,41.9529,27.0468"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9529,27.0468c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2C33.0573,25.0472,33.9525,25.9424,33.9529,27.0468"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.9527,37.0492c-1.2005-0.0116-2.3813-0.3055-3.4472-0.8579c-0.494-0.247-0.6943-0.8477-0.4473-1.3418 c0.247-0.4941,0.8477-0.6943,1.3418-0.4473c1.5934,0.8593,3.5121,0.8593,5.1055,0c0.494-0.247,1.0947-0.0468,1.3418,0.4473 s0.0468,1.0947-0.4473,1.3418C38.3341,36.7437,37.1532,37.0376,35.9527,37.0492z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26,36.5808c-4,0-4-6-4-13 s4-14,14-14s14,7,14,14s0,13-4,13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.9365,28.5808c0,9,4.9365,14,11,14 c5.9365,0,11.0635-5,11.0635-14c0.0245-1.7187-0.3164-3.4229-1-5c-3-3-7-8-7-8c-4,3-7,6-13,7.0005 C26,22.5808,24.9365,23.58,24.9365,28.5808z"
    })));
  }
};

export default OfficeWorker;