import React from 'react';

const Pizza = ({
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
      fill: "#f4aa41",
      stroke: "none",
      d: "M52.2637,19.7373c0.4765,0.4775,0.916,0.9775,1.3418,1.4854l2.9004-5.7286 c-11.3252-11.3252-29.6875-11.3252-41.0118,0l2.9004,5.7286c0.4258-0.5079,0.8653-1.0079,1.3418-1.4854 C28.7197,10.7539,43.2803,10.7539,52.2637,19.7373z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M53.6055,21.2227c-0.4258-0.5079-0.8653-1.0079-1.3418-1.4854c-8.9834-8.9834-23.544-8.9834-32.5274,0 c-0.4765,0.4775-0.916,0.9775-1.3418,1.4854L36,56L53.6055,21.2227z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31",
      cy: "24",
      r: "5",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "24",
      r: "3",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37",
      cy: "36",
      r: "3",
      fill: "#ea5a47",
      stroke: "none"
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
      d: "M52.2637,19.7373c0.4765,0.4775,0.916,0.9775,1.3418,1.4854l2.9004-5.7286c-11.3252-11.3252-29.6875-11.3252-41.0118,0 l2.9004,5.7286c0.4258-0.5079,0.8653-1.0079,1.3418-1.4854C28.7197,10.7539,43.2803,10.7539,52.2637,19.7373z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.6055,21.2227c-0.4258-0.5079-0.8653-1.0079-1.3418-1.4854c-8.9834-8.9834-23.544-8.9834-32.5274,0 c-0.4765,0.4775-0.916,0.9775-1.3418,1.4854L36,56L53.6055,21.2227z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31",
      cy: "24",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "24",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37",
      cy: "36",
      r: "3",
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
      d: "M52.2637,19.7373c0.4765,0.4775,0.916,0.9775,1.3418,1.4854l2.9004-5.7286c-11.3252-11.3252-29.6875-11.3252-41.0118,0 l2.9004,5.7286c0.4258-0.5079,0.8653-1.0079,1.3418-1.4854C28.7197,10.7539,43.2803,10.7539,52.2637,19.7373z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.6055,21.2227c-0.4258-0.5079-0.8653-1.0079-1.3418-1.4854c-8.9834-8.9834-23.544-8.9834-32.5274,0 c-0.4765,0.4775-0.916,0.9775-1.3418,1.4854L36,56L53.6055,21.2227z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31",
      cy: "24",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44",
      cy: "24",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37",
      cy: "36",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Pizza;