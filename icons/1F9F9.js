import React from 'react';

const Broom = ({
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
      fill: "#f1b31c",
      d: "M20.6736,59.9844c1.2983-1.388,3.5826-3.6053,4.8424-4.9521-1.4537.886-4.2076,3.37-5.6142,4.2624A46.0024,46.0024,0,0,1,14.41,54.5235a23.6424,23.6424,0,0,0,9.05-4.15,29.78,29.78,0,0,1-10.084,2.9036,47.9434,47.9434,0,0,1-3.4267-5.45c7.1521,1.9446,14.9291-.92,19.73-5.92,1.2414.7174,2.835,1.59,4.1359,2.2474a3.2052,3.2052,0,0,1,1.6174,1.9094c1.7464,4.6657.728,8.7784-2.4318,12.475-1.3221,1.5467-3.2938,3.9123-5.0353,4.9607A33.9572,33.9572,0,0,1,20.6736,59.9844Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M36.41,39.1206l-2.5918-1.5c.684-1.1936,1.3464-2.3568,2.0156-3.516Q43.0888,21.5374,50.3463,8.9716c.0989-.1713.1948-.3449.3033-.51A1.4973,1.4973,0,0,1,53.234,9.9742c-.81,1.4511-1.6532,2.8832-2.484,4.3224Q44.3857,25.322,38.02,36.347C37.4975,37.2525,36.9705,38.1556,36.41,39.1206Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M35.17,44.2183,30.05,41.2608c.5348-.9183,1.0216-1.82,1.5756-2.6789a.9318.9318,0,0,1,1.31-.3181q1.7127.9444,3.3875,1.9568a.9384.9384,0,0,1,.377,1.2973C36.2334,42.4269,35.696,43.3,35.17,44.2183Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.6736,59.9844c1.2983-1.388,3.5826-3.6053,4.8424-4.9521-1.4537.886-4.2076,3.37-5.6142,4.2624A46.0024,46.0024,0,0,1,14.41,54.5235a23.6424,23.6424,0,0,0,9.05-4.15,29.78,29.78,0,0,1-10.084,2.9036,47.9434,47.9434,0,0,1-3.4267-5.45c7.1521,1.9446,14.9291-.92,19.73-5.92,1.2414.7174,2.835,1.59,4.1359,2.2474a3.2052,3.2052,0,0,1,1.6174,1.9094c1.7464,4.6657.728,8.7784-2.4318,12.475-1.3221,1.5467-3.2938,3.9123-5.0353,4.9607A33.9572,33.9572,0,0,1,20.6736,59.9844Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.41,39.1206l-2.5918-1.5c.684-1.1936,1.3464-2.3568,2.0156-3.516Q43.0888,21.5374,50.3463,8.9716c.0989-.1713.1948-.3449.3033-.51A1.4973,1.4973,0,0,1,53.234,9.9742c-.81,1.4511-1.6532,2.8832-2.484,4.3224Q44.3857,25.322,38.02,36.347C37.4975,37.2525,36.9705,38.1556,36.41,39.1206Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.17,44.2183,30.05,41.2608c.5348-.9183,1.0216-1.82,1.5756-2.6789a.9318.9318,0,0,1,1.31-.3181q1.7127.9444,3.3875,1.9568a.9384.9384,0,0,1,.377,1.2973C36.2334,42.4269,35.696,43.3,35.17,44.2183Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.0575",
      cy: "63.3582",
      r: "1.4081"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.2993",
      cy: "59.2947",
      r: "1.1846"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.2993",
      cy: "62.2939",
      r: "0.9413"
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
      d: "M20.6736,59.9844c1.2983-1.388,3.5826-3.6053,4.8424-4.9521-1.4537.886-4.2076,3.37-5.6142,4.2624A46.0024,46.0024,0,0,1,14.41,54.5235a23.6424,23.6424,0,0,0,9.05-4.15,29.78,29.78,0,0,1-10.084,2.9036,47.9434,47.9434,0,0,1-3.4267-5.45c7.1521,1.9446,14.9291-.92,19.73-5.92,1.2414.7174,2.835,1.59,4.1359,2.2474a3.2052,3.2052,0,0,1,1.6174,1.9094c1.7464,4.6657.728,8.7784-2.4318,12.475-1.3221,1.5467-3.2938,3.9123-5.0353,4.9607A33.9572,33.9572,0,0,1,20.6736,59.9844Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.41,39.1206l-2.5918-1.5c.684-1.1936,1.3464-2.3568,2.0156-3.516Q43.0888,21.5374,50.3463,8.9716c.0989-.1713.1948-.3449.3033-.51A1.4973,1.4973,0,0,1,53.234,9.9742c-.81,1.4511-1.6532,2.8832-2.484,4.3224Q44.3857,25.322,38.02,36.347C37.4975,37.2525,36.9705,38.1556,36.41,39.1206Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.17,44.2183,30.05,41.2608c.5348-.9183,1.0216-1.82,1.5756-2.6789a.9318.9318,0,0,1,1.31-.3181q1.7127.9444,3.3875,1.9568a.9384.9384,0,0,1,.377,1.2973C36.2334,42.4269,35.696,43.3,35.17,44.2183Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.0575",
      cy: "63.3582",
      r: "1.4081"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.2993",
      cy: "59.2947",
      r: "1.1846"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.2993",
      cy: "62.2939",
      r: "0.9413"
    })));
  }
};

export default Broom;