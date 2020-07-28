import React from 'react';

const Comment = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35",
      r: "20.8",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M23.437,50.3563C22.1049,53.8785,18.4321,58.7119,15,61c7.1652,0,12.2335-2.0922,16-7.2731"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "26.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.437,50.3563C22.1049,53.8785,18.4321,58.7119,15,61c7.1652,0,12.2335-2.0922,16-7.2731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.437,50.3563C22.1049,53.8785,18.4321,58.7119,15,61c7.1652,0,12.2335-2.0922,16-7.2731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.4809,47.6168 C17.6795,44.1751,16,39.7837,16,35c0-11.0457,8.9543-20,20-20s20,8.9543,20,20s-8.9543,20-20,20 c-0.3703,0-0.7383-0.0101-1.1037-0.0299"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "26.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.0001",
      cy: "35.0788",
      r: "2.8571",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.437,50.3563C22.1049,53.8785,18.4321,58.7119,15,61c7.1652,0,12.2335-2.0922,16-7.2731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.437,50.3563C22.1049,53.8785,18.4321,58.7119,15,61c7.1652,0,12.2335-2.0922,16-7.2731"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.4809,47.6168 C17.6795,44.1751,16,39.7837,16,35c0-11.0457,8.9543-20,20-20s20,8.9543,20,20s-8.9543,20-20,20 c-0.3703,0-0.7383-0.0101-1.1037-0.0299"
    })));
  }
};

export default Comment;