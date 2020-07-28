import React from 'react';

const Paintbrush = ({
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
      fill: "#a57939",
      stroke: "#a57939",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M27.4213,52.1412 c-1.1308,3.0553-2.6697,4.5942-5.6852,6.1955s-11.2248-0.0889-9.5042-1.8095c2.3084-2.3084,3.6596-3.1597,3.2026-6.031 c-0.5824-3.6603,4.2087-6.1331,4.2087-6.1331s2.0935-1.1422,4.1931-0.8545c2.2812,0.3125,4.9498,4.9497,4.9498,4.9497 L27.4213,52.1412z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "none",
      d: "M45.8565,36.851c-7.0488,6.5155-12.4768,10.4313-15.8703,12.6073l-7.6389-7.6751 c2.1789-3.3949,6.0918-8.8147,12.5932-15.8482c4.7694-5.1598,9.7635-9.9137,13.8015-12.4485 c2.9438-1.8479,6.597-1.5717,8.8659,0.6971l0,0c2.2688,2.2688,2.5449,5.9222,0.697,8.8659 C55.7702,27.0875,51.0162,32.0816,45.8565,36.851"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61b2e4",
      stroke: "none",
      points: "26.8108,35.5092 36.0461,44.7445 30.2121,48.8995 22.9382,41.5646"
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
      strokeWidth: "2.0863",
      d: "M21.8926,30.0285"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M20.9453,44.2726"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M33.8974,48.8332"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.3999,39.3357"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.3511,39.4065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M33.8788,48.9342"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.1008,39.1562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.8565,36.851c-7.0488,6.5155-12.4768,10.4313-15.8703,12.6073l-7.6389-7.6751c2.1789-3.3949,6.0918-8.8147,12.5932-15.8482 c4.7694-5.1598,9.7635-9.9137,13.8015-12.4485c2.9438-1.8479,6.597-1.5717,8.8659,0.6971l0,0 c2.2688,2.2688,2.5449,5.9222,0.697,8.8659C55.7702,27.0875,51.0162,32.0816,45.8565,36.851"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6432,44.3631c0,0-4.7911,2.4728-4.2087,6.1331c0.457,2.8713-0.8942,3.7226-3.2026,6.031 c-1.7206,1.7206,6.4887,3.4108,9.5042,1.8095s4.5544-3.1402,5.6852-6.1955"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.4304",
      x2: "36.5691",
      y1: "35.2569",
      y2: "44.3958",
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
      strokeWidth: "2.0863",
      d: "M21.8926,30.0285"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M20.9453,44.2726"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M33.8974,48.8332"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.3999,39.3357"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.3511,39.4065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M33.8788,48.9342"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0863",
      d: "M24.1008,39.1562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.8565,36.851c-7.0488,6.5155-12.4768,10.4313-15.8703,12.6073l-7.6389-7.6751c2.1789-3.3949,6.0918-8.8147,12.5932-15.8482 c4.7694-5.1598,9.7635-9.9137,13.8015-12.4485c2.9438-1.8479,6.597-1.5717,8.8659,0.6971l0,0 c2.2688,2.2688,2.5449,5.9222,0.697,8.8659C55.7702,27.0875,51.0162,32.0816,45.8565,36.851"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.6432,44.3631c0,0-4.7911,2.4728-4.2087,6.1331c0.457,2.8713-0.8942,3.7226-3.2026,6.031 c-1.7206,1.7206,6.4887,3.4108,9.5042,1.8095s4.5544-3.1402,5.6852-6.1955"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.4304",
      x2: "36.5691",
      y1: "35.2569",
      y2: "44.3958",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Paintbrush;