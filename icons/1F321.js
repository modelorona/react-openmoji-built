import React from 'react';

const Thermometer = ({
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
      d: "M35.9709,3.4517L35.9709,3.4517c-3.0012,0-5.4341,2.4329-5.4341,5.4341v23.106h10.8682V8.8858 C41.4051,5.8846,38.9721,3.4517,35.9709,3.4517z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M41.5274,28.931"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M41.0656,47.4983C44.5916,49.3267,47,53.0041,47,57.2428c0,6.0613-4.9249,10.9749-11,10.9749 s-11-4.9136-11-10.9749c0-4.2539,2.4258-7.9426,5.9724-9.7641V28.5788c0,0,8.8728,1.5603,10.0745-1.0199L41.0656,47.4983z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M37.0415,29.403c1.6925-0.1501,2.2824-0.3294,4.4859-1.2412l0.0236,18.8285 c0.0007,0.5571,0.182,1.1036,0.5349,1.5383c2.1678,2.6707,4.2519,5.2117,4.2519,9.0919c0,5.9935-4.9899,10.0365-10.4309,10.0365 c0,0,10.1031-7.6096,1.692-16.5858c-0.3555-0.3793-0.551-1.2297-0.551-1.7749L37.0415,29.403z"
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
      d: "M38.3874,35.9133c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,43.6108c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,28.2158c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,20.5183c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6634,49.4624c1.2934-0.9629,1.2755-2.2365,1.2755-2.2365V8.6385c0-2.807,2.2755-5.0825,5.0825-5.0825 c2.807,0,5.0825,2.2755,5.0825,5.0825v38.5874c0,0,0.0052,1.2859,1.2986,2.2488c2.3101,1.8633,3.7879,4.7172,3.7879,7.9162 c0,5.614-4.5511,10.1651-10.1651,10.1651s-10.1651-4.5511-10.1651-10.1651c0-1.5355,0.3405-2.9915,0.95-4.2966"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,12.8208c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
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
      d: "M38.3874,35.9133c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,43.6108c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,28.2158c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,20.5183c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6634,49.4624c1.2934-0.9629,1.2755-2.2365,1.2755-2.2365V8.6385c0-2.807,2.2755-5.0825,5.0825-5.0825 c2.807,0,5.0825,2.2755,5.0825,5.0825v38.5874c0,0,0.0052,1.2859,1.2986,2.2488c2.3101,1.8633,3.7879,4.7172,3.7879,7.9162 c0,5.614-4.5511,10.1651-10.1651,10.1651s-10.1651-4.5511-10.1651-10.1651c0-1.5355,0.3405-2.9915,0.95-4.2966"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.3874,12.8208c-0.7217,0.1599-1.9748,0.2657-3.3999,0.2657c-2.2364,0-4.0494-0.2606-4.0494-0.582"
    })));
  }
};

export default Thermometer;