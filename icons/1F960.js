import React from 'react';

const FortuneCookie = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "17.3962",
      y: "28.2404",
      width: "8.5369",
      height: "17.1843",
      transform: "matrix(0.5359, -0.8443, 0.8443, 0.5359, -21.0425, 35.3858)",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M38.0889,37.0473a25.4023,25.4023,0,0,0-5.68,1.2274,29.259,29.259,0,0,0-10.8,7.09l-.005.0055c-.0782.0857-.236.26-.242.269a14.5063,14.5063,0,0,0,2.3722,2.8561A19.3988,19.3988,0,1,0,25.5228,23.95a20.1316,20.1316,0,0,0-4.1612,4.5053c.006.0091.1638.1832.242.269l.005.0055A43.3575,43.3575,0,0,0,33,37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M49.8957,20.9907a19.2835,19.2835,0,0,0-12.2606-2.9385,19.1877,19.1877,0,0,1,8.5782,2.9385,19.3518,19.3518,0,0,1-8.668,35.6183,19.3707,19.3707,0,0,0,12.35-35.6183Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.0889,37.0473a25.4023,25.4023,0,0,0-5.68,1.2274,29.259,29.259,0,0,0-10.8,7.09l-.005.0055c-.0782.0857-.236.26-.242.269a14.5063,14.5063,0,0,0,2.3722,2.8561A19.3988,19.3988,0,1,0,25.5228,23.95a20.1316,20.1316,0,0,0-4.1612,4.5053c.006.0091.1638.1832.242.269l.005.0055C26.1318,33.6782,34,37,34,37"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.847 38.124 12.73 34.876 16.116 29.541 24.294 34.732"
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
      d: "M38.0889,37.0473a25.4023,25.4023,0,0,0-5.68,1.2274,29.259,29.259,0,0,0-10.8,7.09l-.005.0055c-.0782.0857-.236.26-.242.269a14.5063,14.5063,0,0,0,2.3722,2.8561A19.3988,19.3988,0,1,0,25.5228,23.95a20.1316,20.1316,0,0,0-4.1612,4.5053c.006.0091.1638.1832.242.269l.005.0055C26.1318,33.6782,34,37,34,37"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "17.847 38.124 12.73 34.876 16.116 29.541 24.294 34.732"
    })));
  }
};

export default FortuneCookie;