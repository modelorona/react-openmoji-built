import React from 'react';

const Teapot = ({
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
      d: "M60.5014,50.0752,57.9633,27.2744a.9993.9993,0,0,0-.4043-.6973.976.976,0,0,0-.1716-.0771c-.8992-2.1829-4.3681-3.677-13.1133-3.85,6.8457.1808,7.6386,1.3118,7.6386,3.0425,0,1.8531-6.112,2.4058-13.6514,2.4058S25.5866,27.2833,25.5866,25.43c0-1.7306.3384-2.6466,7.1841-2.8274-10.44.2063-13.6567,2.5638-13.6567,5.4614,0,3.0334,8.0166,5.2576,19.1473,5.2576,1.9263,0,3.7587-.0778,5.4851-.2148L46.2329,55.45v.0039l.001.0068a1.0008,1.0008,0,0,0,.9931.89.9994.9994,0,0,0,.251-.0313c6.0791-.7285,9.4131-1.9179,11.1406-2.791A3.4611,3.4611,0,0,0,60.5014,50.0752Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.9116,31.3341a56.8265,56.8265,0,0,0,11.38,1.0548c2.1613,0,4.2361-.1,6.1646-.2836l2.2987,19.2876"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.2867,22.65c-7.2853.6737-12.5228,2.5392-12.5228,4.7351L17.2185,50.3636a2.4265,2.4265,0,0,0,1.1065,2.3191c2.1481,1.368,7.5709,3.5753,19.9734,3.2515,11.9421-.3118,17.4131-2.1334,19.72-3.2983a2.4422,2.4422,0,0,0,1.3389-2.4507l-2.5379-22.8c0-2.1548-5.0434-3.9915-12.1163-4.696"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7163,22.7405c4.0012.5136,6.723,1.5254,6.723,2.69,0,1.6838-5.6927,3.0487-12.715,3.0487S26.0094,27.1139,26.0094,25.43c0-1.1229,2.532-2.104,6.3017-2.633"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.6165,25.1236V23.648a3.6143,3.6143,0,0,1,3.6143-3.6142h4.9871a3.6143,3.6143,0,0,1,3.6143,3.6142V25.43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.8631,44.5445,11.4,32.9526a14.7662,14.7662,0,0,0-1.0619-1.7869L7.1976,28.4788a.1893.1893,0,0,1,.0475-.3287l4.1916-.5607L19.114,33.252"
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
      d: "M26.9116,31.3341a56.8265,56.8265,0,0,0,11.38,1.0548c2.1613,0,4.2361-.1,6.1646-.2836l2.2987,19.2876"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.2867,22.65c-7.2853.6737-12.5228,2.5392-12.5228,4.7351L17.2185,50.3636a2.4265,2.4265,0,0,0,1.1065,2.3191c2.1481,1.368,7.5709,3.5753,19.9734,3.2515,11.9421-.3118,17.4131-2.1334,19.72-3.2983a2.4422,2.4422,0,0,0,1.3389-2.4507l-2.5379-22.8c0-2.1548-5.0434-3.9915-12.1163-4.696"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7163,22.7405c4.0012.5136,6.723,1.5254,6.723,2.69,0,1.6838-5.6927,3.0487-12.715,3.0487S26.0094,27.1139,26.0094,25.43c0-1.1229,2.532-2.104,6.3017-2.633"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.6165,25.1236V23.648a3.6143,3.6143,0,0,1,3.6143-3.6142h4.9871a3.6143,3.6143,0,0,1,3.6143,3.6142V25.43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.8631,44.5445,11.4,32.9526a14.7662,14.7662,0,0,0-1.0619-1.7869L7.1976,28.4788a.1893.1893,0,0,1,.0475-.3287l4.1916-.5607L19.114,33.252"
    })));
  }
};

export default Teapot;