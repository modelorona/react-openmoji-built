import React from 'react';

const SneezingFace = ({
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
      cx: "39",
      cy: "36",
      r: "24",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M8.9985,46.9816c0,0,16.1561,1.2359,24.9516-9.8598c0.6645-0.8383,1.9857-2.2668,3.8806-0.9725 c0,0,9.3223,7.9456-10.9712,28.6664c0,0,0.0158-4.8296-2.3762-4.3161c-4.3887,0.9421-12.0961,4.156-17.8809,1.6287 C6.6024,62.1283,20.7291,55.7915,8.9985,46.9816z"
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
      d: "M52.7699,43.9754"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.9288,43.9754"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "28.4877,27.4126 35.0747,31.4266 28.4877,35.1645"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.1521,27.4126 43.5651,31.4266 50.1521,35.1645"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0831,58.9821C38.3872,58.994,38.6929,59,39,59c12.7022,0,23-10.2978,23-23c0-12.7031-10.2978-23-23-23 c-12.7031,0-23,10.2969-23,23c0,1.914,0.2338,3.7733,0.6744,5.5511"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9293,50.0033 41.1293,51.0933 44.0793,46.2733 47.7093,49.1233 49.7693,46.7633"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M8.9985,46.9816c0,0,16.1561,1.2359,24.9516-9.8598c0.6645-0.8383,1.9857-2.2668,3.8806-0.9725c0,0,9.3223,7.9456-10.9712,28.6664 c0,0,0.0158-4.8296-2.3762-4.3161c-4.3887,0.9421-12.0961,4.156-17.8809,1.6287C6.6024,62.1283,20.7291,55.7915,8.9985,46.9816z"
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
      d: "M52.7699,43.9754"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.9288,43.9754"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "28.4877,27.4126 35.0747,31.4266 28.4877,35.1645"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.1521,27.4126 43.5651,31.4266 50.1521,35.1645"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0831,58.9821C38.3872,58.994,38.6929,59,39,59c12.7022,0,23-10.2978,23-23c0-12.7031-10.2978-23-23-23 c-12.7031,0-23,10.2969-23,23c0,1.914,0.2338,3.7733,0.6744,5.5511"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9293,50.0033 41.1293,51.0933 44.0793,46.2733 47.7093,49.1233 49.7693,46.7633"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M8.9985,46.9816c0,0,16.1561,1.2359,24.9516-9.8598c0.6645-0.8383,1.9857-2.2668,3.8806-0.9725c0,0,9.3223,7.9456-10.9712,28.6664 c0,0,0.0158-4.8296-2.3762-4.3161c-4.3887,0.9421-12.0961,4.156-17.8809,1.6287C6.6024,62.1283,20.7291,55.7915,8.9985,46.9816z"
    })));
  }
};

export default SneezingFace;