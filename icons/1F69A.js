import React from 'react';

const DeliveryTruck = ({
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
      d: "M61.3365,52.9588c0.5526-0.0137,0.851-1.0213,0.851-1.0213s2,0.125,2.3125-1.1875 c0.0414-0.1738,0.2878-13.7904-1.529-17.571c-0.148-0.3081-0.4411-0.5118-0.7806-0.552 c-3.0415-0.3603-19.4332-1.1578-32.2529,0.3105c0,0-4.6406,1.2031-12.75,6.875c0,0-5.5,2.25-7.875,3.875S7,48.4375,7,48.4375 s0.25,3,0.75,3.9375c0.0763,0.1431,0.3975,1.2323,2.5817,1.2808"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      stroke: "none",
      d: "M64.5334,48.9168h-9.3181v0.8025c0,1.7924,1.453,3.2454,3.2454,3.2454h3.1061 c0.985,0,1.9167-0.4473,2.5326-1.2159L65,50.625L64.5334,48.9168z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3f3f3f",
      stroke: "none",
      points: "17.4486,49.7001 8.1305,49.7001 8.1305,52.2384 10.0938,53.6558 16.0403,53.6558 17.9153,51.4851"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.1319",
      cy: "52.7022",
      r: "3",
      fill: "#9b9b9a",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55.2153",
      cy: "52.7022",
      r: "3",
      fill: "#9b9b9a",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      stroke: "none",
      d: "M33.9167,35.0833V41.75L19.75,42.1458C19.75,42.1458,26.6667,34.25,33.9167,35.0833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M14.4147,45.7213c0,0,0.0855-1.0781-1.2895-1.2031s-3.898,1.2031-4.0386,1.5625 c-0.1406,0.3594-0.3489,1.4328,0.2812,1.625C9.998,47.8979,14.4147,45.7213,14.4147,45.7213z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.4649,45.6334c0,0-1.9647,1.6588-3.5765,1.9176"
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
      d: "M22.8341,52.6719c8.2686-0.0728,17.415-0.2643,25.3341-0.4335"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.1319",
      cy: "52.7022",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55.2153",
      cy: "52.7022",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.9167,36.0833 33.9167,41.75 20.5,42.6667"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.0833",
      x2: "49.0833",
      y1: "49.0833",
      y2: "48.0833",
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
      d: "M13.4649,45.6334c0,0-1.9647,1.6588-3.5765,1.9176"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.3365,51.9588c0.5526-0.0137,0.851-0.0213,0.851-0.0213s2,0.125,2.3125-1.1875c0.0414-0.1738,0.2878-13.7904-1.529-17.571 c-0.148-0.3081-0.4411-0.5118-0.7806-0.552c-3.0415-0.3603-19.4332-1.1578-32.2529,0.3105c0,0-4.6406,1.2031-12.75,6.875 c0,0-5.5,2.25-7.875,3.875S7,48.4375,7,48.4375s0.25,3,0.75,3.9375c0.0763,0.1431,0.3975,0.2323,2.5817,0.2808"
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
      d: "M22.8341,52.6719c8.2686-0.0728,17.415-0.2643,25.3341-0.4335"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17.1319",
      cy: "52.7022",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "55.2153",
      cy: "52.7022",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.9167,36.0833 33.9167,41.75 20.5,42.6667"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.0833",
      x2: "49.0833",
      y1: "49.0833",
      y2: "48.0833",
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
      d: "M13.4649,45.6334c0,0-1.9647,1.6588-3.5765,1.9176"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.3365,51.9588c0.5526-0.0137,0.851-0.0213,0.851-0.0213s2,0.125,2.3125-1.1875c0.0414-0.1738,0.2878-13.7904-1.529-17.571 c-0.148-0.3081-0.4411-0.5118-0.7806-0.552c-3.0415-0.3603-19.4332-1.1578-32.2529,0.3105c0,0-4.6406,1.2031-12.75,6.875 c0,0-5.5,2.25-7.875,3.875S7,48.4375,7,48.4375s0.25,3,0.75,3.9375c0.0763,0.1431,0.3975,0.2323,2.5817,0.2808"
    })));
  }
};

export default DeliveryTruck;