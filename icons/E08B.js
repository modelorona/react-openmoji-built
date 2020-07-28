import React from 'react';

const EvacuateFire = ({
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
      fill: "#fcea2b",
      d: "M15.5638,42.8687A33.5828,33.5828,0,0,1,19.463,27.778c.4651,7.3054,3.9114,10.2468,5.622,10.2468,1.2777,0,2.4529-1.3022,2.4529-3.4259.0884-2.7421.5065-7.4372,4.1742-14.2246a2.097,2.097,0,0,0,1.027.2866c1.4368,0,3.75-1.5545,1.8514-13.2012,0,0,14.1092,9.5092,13.5784,25.2544a1.9325,1.9325,0,0,0,2.08,2.0345,5.14,5.14,0,0,0,3.9807-2.6742A20.7194,20.7194,0,0,1,56.391,41.77c0,12.055-7.4817,21.4867-20.2561,21.4867-11.3771,0-20.5711-9.5848-20.5711-20.0575"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M36.2876,27.9077c-.3833,1.4743-1.661,3.9314-5.3664,8.1576-.1277.0983-.1277.1966-.2555.2949-.3833.688-2.0654,1.951-2.0654,4.7383a5.0912,5.0912,0,0,0,.66,2.24,4.85,4.85,0,0,1-3.0416,1.493c-.7461,0-2.3087-.7109-2.4294-1.8209a4.7314,4.7314,0,0,0-1.7013,3.6709c0,4.3877,2.0615,8.9425,7.939,12.4808,0,0,1.661,1.0811,1.7887,1.9657,0,0,0,.0983.1278.0983h6.7718c.2555,0,.2555,0,.2555-.0983,0-.1966.5111-1.2777,4.0887-3.7348a14.106,14.106,0,0,0,4.7275-5.2091.8621.8621,0,0,0-.7666-1.1794,2.0152,2.0152,0,0,1-1.2777-1.1794h0s-.2556-.7863.7666-2.5554a4.7181,4.7181,0,0,0,.841-2.3589,1.2064,1.2064,0,0,0-1.661-.688,2.8632,2.8632,0,0,1-3.652-1.0811s-.8944-1.5725-.1277-5.4056c.511-2.9486-1.2777-7.7645-3.5776-10.2216C37.693,26.9248,36.4154,27.1214,36.2876,27.9077Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M31.19,49.6266l-4.26,5.78L23.2557,57.79l2.5223,1.9991,1.9577-.8524a7.5481,7.5481,0,0,0,2.4818-1.7235l4.2116-4.578Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M36.9081,45.9182v1.814l3.66,4.3682a4.3451,4.3451,0,0,1,.6671,2.3875l.3967,8.66c.0482,1.811-.9915,2.4007-1.7972,2.4007-.7887,0-1.44-.5994-1.704-2.1969l-.7487-8.1046-6.0179-5.4492a2.9548,2.9548,0,0,1-.9225-2.1743,3.9653,3.9653,0,0,1,.615-2.1923l2.9071-5.2487c1.0421-1.9473,2.0338-2.6235,3.4055-2.6235a3.1026,3.1026,0,0,1,2.65,2.667Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.2983",
      cy: "34.7487",
      r: "3.135",
      fill: "#3f3f3f"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M32.2017,50.5662l-1.0114-.94-4.26,5.78L23.2557,57.79,24,59l4.2157-2.407Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M31.3643,49.7979a2.9548,2.9548,0,0,1-.9225-2.1743,3.9653,3.9653,0,0,1,.615-2.1923l2.9071-5.2487c1.0421-1.9473,2.0338-2.6235,3.4055-2.6235a2.1333,2.1333,0,0,1,1.0616.3218Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M40,66c-.7887,0-1.6052-1.0508-1.8691-2.6483l-.7487-8.1046-.599-.5425L39,55Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M40.016,36.898a3.135,3.135,0,0,1,4.2472-4.5922A9.2174,9.2174,0,0,0,40.016,36.898Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "46.09 45.355 40.687 45.355 36.877 41.11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9738,37.5759s-5.3819.91-6.532,1.7338c-1.4689,1.052-4.1343,6.2446-4.1343,6.2446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.778,59.7893l1.9577-.8524a7.5481,7.5481,0,0,0,2.4818-1.7235l4.2116-4.578"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.5724,51.8217,26.93,55.4064,24.8589,56.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9081,45.5882v2.144l3.66,4.3682a4.3451,4.3451,0,0,1,.6671,2.3875l.3967,8.66c.0482,1.811-.9915,2.4007-1.7972,2.4007-.7887,0-1.44-.5994-1.704-2.1969l-.7487-8.1046-6.0179-5.4492a2.9548,2.9548,0,0,1-.9225-2.1743,3.9653,3.9653,0,0,1,.615-2.1923l2.9071-5.2487c1.0421-1.9473,2.0338-2.6235,3.4055-2.6235a2.454,2.454,0,0,1,2.32,2.3371"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.8678,63.1288a20.6511,20.6511,0,0,1-18.304-20.26A33.5828,33.5828,0,0,1,19.463,27.778c.4651,7.3054,3.9114,10.2468,5.622,10.2468,1.2777,0,2.4529-1.3022,2.4529-3.4259.0884-2.7421.5065-7.4372,4.1742-14.2246"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.5905,7.46S48.7,16.9689,48.1689,32.7141a1.9325,1.9325,0,0,0,2.08,2.0345,5.14,5.14,0,0,0,3.9807-2.6742A20.7194,20.7194,0,0,1,56.391,41.77c0,8.7137-3.9091,16.0568-10.9005,19.4579"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.1633,34.7487a3.135,3.135,0,1,1,3.135,3.135"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "46.09 45.355 40.687 45.355 36.877 41.11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9738,37.5759s-5.3819.91-6.532,1.7338c-1.4689,1.052-4.1343,6.2446-4.1343,6.2446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.778,59.7893l1.9577-.8524a7.5481,7.5481,0,0,0,2.4818-1.7235l4.2116-4.578"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.5724,51.8217,26.93,55.4064,24.8589,56.75"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.9081,45.5882v2.144l3.66,4.3682a4.3451,4.3451,0,0,1,.6671,2.3875l.3967,8.66c.0482,1.811-.9915,2.4007-1.7972,2.4007-.7887,0-1.44-.5994-1.704-2.1969l-.7487-8.1046-6.0179-5.4492a2.9548,2.9548,0,0,1-.9225-2.1743,3.9653,3.9653,0,0,1,.615-2.1923l2.9071-5.2487c1.0421-1.9473,2.0338-2.6235,3.4055-2.6235a2.454,2.454,0,0,1,2.32,2.3371"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.8678,63.1288a20.6511,20.6511,0,0,1-18.304-20.26A33.5828,33.5828,0,0,1,19.463,27.778c.4651,7.3054,3.9114,10.2468,5.622,10.2468,1.2777,0,2.4529-1.3022,2.4529-3.4259.0884-2.7421.5065-7.4372,4.1742-14.2246"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.5905,7.46S48.7,16.9689,48.1689,32.7141a1.9325,1.9325,0,0,0,2.08,2.0345,5.14,5.14,0,0,0,3.9807-2.6742A20.7194,20.7194,0,0,1,56.391,41.77c0,8.7137-3.9091,16.0568-10.9005,19.4579"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.1633,34.7487a3.135,3.135,0,1,1,3.135,3.135"
    })));
  }
};

export default EvacuateFire;