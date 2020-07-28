import React from 'react';

const Poppy = ({
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
      fill: "#ea5a47",
      stroke: "#ea5a47",
      strokeWidth: "2",
      d: "m21.42 31.02c-0.2666 5.057-3.616 18.77 14.35 18.61 10.36-4.145 11.6-1.538 15.68-9.703 0.4394-10.15-4.093-14.12-10.66-14.56l-5.197-2.198c-6.765-1.758-11.17 1.914-14.17 7.847z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "m42.96 24.05c2.172-2.347 2.995-3.441 2.136-5.973 3.185 1.3 4.454-1.296 4.415-3.267 2.214 0.4955 4.496-0.6996 6.159-1.887-0.8152 1.831-0.9737 4.673-0.3308 6.426-1.036-0.1184-3.591 1.275-2.438 4.51-2.239-0.3493-3.918-0.2057-5.902 1.992z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "17.99",
      cy: "47.92",
      rx: "3.383",
      ry: "3.384",
      transform: "rotate(-24.119)"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36 53.88v10.11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "m44.48 22.27c1.163-1.679 0.6926-2.78 0.6155-4.199 3.167 0.3627 4.262-1.02 4.415-3.267 2.437 0.3827 6.159-1.887 6.159-1.887s-0.8357 4.279-0.3308 6.426c-2.669 0.5262-2.788 2.225-2.438 4.51-1.756-0.01939-2.938 0.0073-4.015 0.5131",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m35.11 23.08c-8.409-3.817-18.04 6.391-15.28 17.42 2.729 10.89 11.99 10.59 15.47 9.446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.84 25.43c6.852-3.328 15.7 4.769 13.45 14.38-2.224 9.497-9.767 9.231-12.61 8.241"
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "17.99",
      cy: "47.92",
      rx: "3.383",
      ry: "3.384",
      transform: "rotate(-24.119)"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36 53.88v10.11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "m44.48 22.27c1.163-1.679 0.6926-2.78 0.6155-4.199 3.167 0.3627 4.262-1.02 4.415-3.267 2.437 0.3827 6.159-1.887 6.159-1.887s-0.8357 4.279-0.3308 6.426c-2.669 0.5262-2.788 2.225-2.438 4.51-1.756-0.01939-2.938 0.0073-4.015 0.5131",
      "paint-order": "normal"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m35.11 23.08c-8.409-3.817-18.04 6.391-15.28 17.42 2.729 10.89 11.99 10.59 15.47 9.446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.84 25.43c6.852-3.328 15.7 4.769 13.45 14.38-2.224 9.497-9.767 9.231-12.61 8.241"
    })));
  }
};

export default Poppy;