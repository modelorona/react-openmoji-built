import React from 'react';

const Chats = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M15.042,14.9756c-2.2091,0-4,1.7909-4,4v11.7841l-0.0019,4.5314c-0.0002,0.2808,0.328,0.4336,0.5428,0.2527 l5.0257-4.389c0.1804-0.1518,0.4086-0.2351,0.6443-0.2351h30.9557c2.2091,0,4-1.7909,4-4v-7.9441c0-2.2091-1.7909-4-4-4H15.042z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M60.5096,60.5444c0.2147,0.1808,0.5427,0.0281,0.5426-0.2526l-0.0018-4.2707h0.0007V44.077 c0-2.2091-1.7909-4-4-4H24.103c-2.2091,0-4,1.7909-4,4v7.9441c0,2.2091,1.7909,4,4,4h30.8579c0.2357,0,0.4639,0.0833,0.6441,0.2351 L60.5096,60.5444z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.042,14.9756c-2.2091,0-4,1.7909-4,4v11.7841 l-0.0019,4.5314c-0.0002,0.2808,0.328,0.4336,0.5428,0.2527l5.0257-4.389c0.1804-0.1518,0.4086-0.2351,0.6443-0.2351h30.9557 c2.2091,0,4-1.7909,4-4v-7.9441c0-2.2091-1.7909-4-4-4H15.042z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.5096,60.5444 c0.2147,0.1808,0.5427,0.0281,0.5426-0.2526l-0.0018-4.2707h0.0007V44.077c0-2.2091-1.7909-4-4-4H24.103c-2.2091,0-4,1.7909-4,4 v7.9441c0,2.2091,1.7909,4,4,4h30.8579c0.2357,0,0.4639,0.0833,0.6441,0.2351L60.5096,60.5444z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.9965",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.0081",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.0198",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.042,14.9756c-2.2091,0-4,1.7909-4,4v11.7841 l-0.0019,4.5314c-0.0002,0.2808,0.328,0.4336,0.5428,0.2527l5.0257-4.389c0.1804-0.1518,0.4086-0.2351,0.6443-0.2351h30.9557 c2.2091,0,4-1.7909,4-4v-7.9441c0-2.2091-1.7909-4-4-4H15.042z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.5096,60.5444 c0.2147,0.1808,0.5427,0.0281,0.5426-0.2526l-0.0018-4.2707h0.0007V44.077c0-2.2091-1.7909-4-4-4H24.103c-2.2091,0-4,1.7909-4,4 v7.9441c0,2.2091,1.7909,4,4,4h30.8579c0.2357,0,0.4639,0.0833,0.6441,0.2351L60.5096,60.5444z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.9965",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.0081",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.0198",
      cy: "48.0593",
      r: "2",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default Chats;