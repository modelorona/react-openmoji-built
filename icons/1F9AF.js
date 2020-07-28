import React from 'react';

const WhiteCane = ({
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
      fill: "#3f3f3f",
      d: "M54.26,17.4722l6.5031-6.5031a1.2343,1.2343,0,0,0,0-1.7455l-.7191-.7192a1.2259,1.2259,0,0,0-1.7335,0l-6.5091,6.5091Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14.59",
      y: "30.4268",
      width: "45.0355",
      height: "3.477",
      transform: "translate(-11.8757 35.6601) rotate(-45)",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "9.842 56.973 19.956 46.858 22.415 49.317 12.506 59.226 9.842 56.973"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M9.6356,57.0559l.206-.0831,2.664,2.2532-.0426.1656c-.1756,1.1215-2.8462,1.9481-3.3242,1.47l-.7233-.7232C7.9352,59.658,8.4063,57.6706,9.6356,57.0559Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.26,17.4722,12.5056,59.226l-.0426.1656c-.1756,1.1215-2.8462,1.9481-3.3242,1.47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.26,17.4722l6.5031-6.5031a1.2343,1.2343,0,0,0,0-1.7455l-.7191-.7192"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M61.6354,8.867s1.2293-2.4586,4.9172-2.4586,4.9172,7.3758,3.6879,8.6051-3.6879-2.4586-4.9172-3.6879A17.684,17.684,0,0,0,61.6354,8.867Z"
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
      d: "M54.26,17.4722,12.5056,59.226l-.0426.1656c-.1756,1.1215-2.8462,1.9481-3.3242,1.47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.26,17.4722l6.5031-6.5031a1.2343,1.2343,0,0,0,0-1.7455l-.7191-.7192"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M61.6354,8.867s1.2293-2.4586,4.9172-2.4586,4.9172,7.3758,3.6879,8.6051-3.6879-2.4586-4.9172-3.6879A17.684,17.684,0,0,0,61.6354,8.867Z"
    })));
  }
};

export default WhiteCane;