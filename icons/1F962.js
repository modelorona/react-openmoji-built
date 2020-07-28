import React from 'react';

const Chopsticks = ({
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
      fill: "#D22F27",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.7603,58.9583L18.829,20.2998c-0.781-0.781-2.0474-0.781-2.8284,0c-0.781,0.781-0.781,2.0474,0,2.8284L53.7603,58.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.5852,57.4276L30.512,12.3181c-0.6004-0.9271-1.8388-1.192-2.7659-0.5916s-1.192,1.8388-0.5916,2.7659L56.5852,57.4276"
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
      d: "M53.7603,58.9583L18.829,20.2998c-0.781-0.781-2.0474-0.781-2.8284,0c-0.781,0.781-0.781,2.0474,0,2.8284L53.7603,58.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.5852,57.4276L30.512,12.3181c-0.6004-0.9271-1.8388-1.192-2.7659-0.5916s-1.192,1.8388-0.5916,2.7659L56.5852,57.4276"
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
      d: "M53.7603,58.9583L18.829,20.2998c-0.781-0.781-2.0474-0.781-2.8284,0c-0.781,0.781-0.781,2.0474,0,2.8284L53.7603,58.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.5852,57.4276L30.512,12.3181c-0.6004-0.9271-1.8388-1.192-2.7659-0.5916s-1.192,1.8388-0.5916,2.7659L56.5852,57.4276"
    })));
  }
};

export default Chopsticks;