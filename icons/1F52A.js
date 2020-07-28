import React from 'react';

const KitchenKnife = ({
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
      fill: "#3F3F3F",
      stroke: "#3F3F3F",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2722,30.1081 c-3.5449-0.2675-13.7369-0.8052-18.6563,0c0,0-1.3857,0.7557,0,4.6293c0,0,1.2566,0.5474,3,0.5474 c1.491,0,12.8699,1.5386,15.6563,1.1077"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.4825,30.1081c-3.5449-0.2675-10.9472-0.8052-15.8666,0c0,0-1.3857,1.7557,0,5.6293c0,0,2.2566-0.4526,4-0.4526 c1.491,0,9.4455,1.1901,12.2319,0.7592"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2722,39.8493h9.3437c32,0,31.9499-9.7411,31.9499-9.7411H33.6159h-9.3437V39.8493"
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
      d: "M20.4825,30.1081c-3.5449-0.2675-10.9472-0.8052-15.8666,0c0,0-1.3857,1.7557,0,5.6293c0,0,2.2566-0.4526,4-0.4526 c1.491,0,9.4455,1.1901,12.2319,0.7592"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2722,39.8493h9.3437c32,0,31.9499-9.7411,31.9499-9.7411H33.6159h-9.3437V39.8493"
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
      d: "M20.4825,30.1081c-3.5449-0.2675-10.9472-0.8052-15.8666,0c0,0-1.3857,1.7557,0,5.6293c0,0,2.2566-0.4526,4-0.4526 c1.491,0,9.4455,1.1901,12.2319,0.7592"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2722,39.8493h9.3437c32,0,31.9499-9.7411,31.9499-9.7411H33.6159h-9.3437V39.8493"
    })));
  }
};

export default KitchenKnife;