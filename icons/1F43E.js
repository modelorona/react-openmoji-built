import React from 'react';

const PawPrints = ({
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
      fill: "#3F3F3F",
      stroke: "none",
      d: "M11.2544,18.6688c0,0-0.4167,2.75-0.1667,3.1667c0.25,0.4167,2.3333,2.8333,2.6667,2.8333 s2.5,0.25,2.5,0.25l1.4167-2.8333l-1.6667-2.8333l-3.0833-1.25L11.2544,18.6688z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      stroke: "none",
      points: "16.2544,10.5855 16.0877,13.3355 18.171,15.7521 20.421,15.7521 21.5877,14.0855 21.0877,11.0855 18.7544,8.5855"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M26.5044,7.3355l-1.9167,2.5l1.0833,2.1667l1.0833,1.3333l2.5833,0.0833l0.75-2.1667l-0.25-2.75 c0,0-0.75-1.1667-1.0833-1.1667C28.421,7.3355,26.5044,7.3355,26.5044,7.3355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M34.671,10.9188l-1,3.0833c0,0,0.1667,3.25,0.4167,3.5s2.6667,1.25,2.6667,1.25l1.5833-2.3333 l0.3333-3.5833l-1.75-1.8333L34.671,10.9188z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M22.0044,20.8355c-0.0833,0.25-1.6667,3.5833-1.6667,3.5833l0.3333,3.5833l-1.1667,3.3333l0.6667,3.3333 l2.8333,2.0833l3.5833-0.5l2.1667-2.5833l5.25,1.4167c0,0,3.5-2,3.4167-2.25c-0.0833-0.25,0.5833-4.3333,0.5833-4.3333 s-2.8333-3.5833-3.5833-3.4167c0,0-1.1667-4.5-4.3333-5.4167c-3.1667-0.9167-6-0.5-6-0.5L22.0044,20.8355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M34.7544,40.5855c0,0-1.25,3.1667-1.0833,3.4167c0.1667,0.25,1.4167,3.25,1.4167,3.25 s2.5833,0.4167,2.6667,0.1667c0.0833-0.25,1.0833-2.9167,1.0833-2.9167l-0.0833-3.1667L34.7544,40.5855z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      stroke: "none",
      points: "44.171,35.0855 42.421,38.2521 43.671,41.8355 47.3377,40.2521 47.8377,37.7521 46.921,35.3355"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M53.2544,37.3355c-0.0833,0.25-2.4167,3.4167-2.4167,3.4167l0.9167,3.1667l2.8333-0.0833l2-3.0833 l-0.5833-3L53.2544,37.3355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M58.671,45.3355l-2.5,3.0833l-0.5,2.75l1.4167,1l3.75-1c0,0,1-2.1667,1-2.4167 s-0.4167-2.8333-0.4167-2.8333L58.671,45.3355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M41.0044,48.7521c-0.1975,0.9874-2.1667,4.5-2.1667,4.5s-2.9167,1.9167-3.0833,2.25 c-0.1667,0.3333-0.75,3.5833-0.75,3.5833l1.5,2.8333l2.4167,1.25l4.75-1.4167l3.25,3.5c0,0,3.25,0.5,4.5833-0.9167 c1.3333-1.4167,1.9167-4.3333,1.9167-4.3333l-1.5-3l0.5833-4c0,0-1.0833-5.3333-3.75-5.8333 C46.0877,46.6688,41.2544,47.5021,41.0044,48.7521z"
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
      d: "M34.2042,25.0412c-0.0364-0.2205-0.0784-0.4413-0.134-0.6623c-1.0117-4.0167-4.871-6.5074-8.6199-5.5631 c-3.7489,0.9443-5.9678,4.9659-4.9561,8.9826c0.0557,0.221,0.1233,0.4353,0.1957,0.6468 c-1.1533,1.1787-1.6914,2.9682-1.2371,4.7717c0.6745,2.6778,3.2473,4.3382,5.7466,3.7087 c1.6833-0.424,3.7084-3.5122,3.9147-3.5641c0.2063-0.052,3.4527,1.7084,5.136,1.2844c2.4993-0.6295,3.9785-3.3106,3.3041-5.9884 C37.0998,26.854,35.7783,25.5329,34.2042,25.0412z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "19.0129",
      cy: "12.4327",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9327 -0.3607 0.3607 0.9327 -3.2047 7.6957)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "14.1245",
      cy: "21.5497",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.8286 -0.5598 0.5598 0.8286 -9.6426 11.5991)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.1324",
      cy: "14.8271",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.0748 -0.9972 0.9972 0.0748 18.6429 49.7486)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.7026",
      cy: "10.244",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9893 -0.1458 0.1458 0.9893 -1.1975 4.1481)",
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
      d: "M52.0157,56.9056c0.0775-0.2096,0.1503-0.4223,0.2113-0.6418c1.1089-3.991-1.0118-8.0652-4.7367-9.1002 c-3.7249-1.035-7.6434,1.3613-8.7523,5.3523c-0.061,0.2196-0.1083,0.4393-0.1501,0.6589c-1.5855,0.4534-2.9387,1.742-3.4366,3.534 c-0.7393,2.6606,0.6745,5.3768,3.1578,6.0668c1.6725,0.4647,4.9607-1.2164,5.1656-1.1594s2.1545,3.1934,3.8271,3.6581 c2.4832,0.69,5.0956-0.9076,5.8349-3.5682C53.6345,59.9139,53.14,58.1119,52.0157,56.9056z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "45.0559",
      cy: "38.431",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.1482 -0.989 0.989 0.1482 0.3735 77.2956)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.2959",
      cy: "43.9335",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9971 -0.0763 0.0763 0.9971 -3.2453 2.8964)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58.7464",
      cy: "48.9846",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.5586 -0.8295 0.8295 0.5586 -14.6983 70.3506)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "53.6899",
      cy: "40.8299",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.363 -0.9318 0.9318 0.363 -3.8434 76.038)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M34.2042,25.0412c-0.0364-0.2205-0.0784-0.4413-0.134-0.6623c-1.0117-4.0167-4.871-6.5074-8.6199-5.5631 c-3.7489,0.9443-5.9678,4.9659-4.9561,8.9826c0.0557,0.221,0.1233,0.4353,0.1957,0.6468 c-1.1533,1.1787-1.6914,2.9682-1.2371,4.7717c0.6745,2.6778,3.2473,4.3382,5.7466,3.7087 c1.6833-0.424,3.7084-3.5122,3.9147-3.5641c0.2063-0.052,3.4527,1.7084,5.136,1.2844c2.4993-0.6295,3.9785-3.3106,3.3041-5.9884 C37.0998,26.854,35.7783,25.5329,34.2042,25.0412z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "19.0129",
      cy: "12.4327",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9327 -0.3607 0.3607 0.9327 -3.2047 7.6957)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "14.1245",
      cy: "21.5497",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.8286 -0.5598 0.5598 0.8286 -9.6426 11.5991)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.1324",
      cy: "14.8271",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.0748 -0.9972 0.9972 0.0748 18.6429 49.7486)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.7026",
      cy: "10.244",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9893 -0.1458 0.1458 0.9893 -1.1975 4.1481)",
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
      d: "M52.0157,56.9056c0.0775-0.2096,0.1503-0.4223,0.2113-0.6418c1.1089-3.991-1.0118-8.0652-4.7367-9.1002 c-3.7249-1.035-7.6434,1.3613-8.7523,5.3523c-0.061,0.2196-0.1083,0.4393-0.1501,0.6589c-1.5855,0.4534-2.9387,1.742-3.4366,3.534 c-0.7393,2.6606,0.6745,5.3768,3.1578,6.0668c1.6725,0.4647,4.9607-1.2164,5.1656-1.1594s2.1545,3.1934,3.8271,3.6581 c2.4832,0.69,5.0956-0.9076,5.8349-3.5682C53.6345,59.9139,53.14,58.1119,52.0157,56.9056z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "45.0559",
      cy: "38.431",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.1482 -0.989 0.989 0.1482 0.3735 77.2956)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.2959",
      cy: "43.9335",
      rx: "2.6883",
      ry: "3.7634",
      transform: "matrix(0.9971 -0.0763 0.0763 0.9971 -3.2453 2.8964)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "58.7464",
      cy: "48.9846",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.5586 -0.8295 0.8295 0.5586 -14.6983 70.3506)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "53.6899",
      cy: "40.8299",
      rx: "3.7634",
      ry: "2.6883",
      transform: "matrix(0.363 -0.9318 0.9318 0.363 -3.8434 76.038)",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default PawPrints;