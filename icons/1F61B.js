import React from 'react';

const FaceWithTongue = ({
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
      fill: "#FCEA2B",
      d: "M36,13c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.3177,48.6822,13,36,13z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M41.6682,46.5925c2.018-1.0892,3.6277-2.7511,4.4969-4.7746c-1.9847,0.9853-6.1585,1.5931-10.5745,1.5426 c-4.0546-0.0464-7.7116-0.6408-9.5171-1.5426H25.835c0.939,2.1647,2.7178,3.8986,4.9168,4.9729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M41.5772,42.818c0,6.0751-2.5324,11-5.6562,11c-3.1239,0-5.6563-4.9249-5.6563-11"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.7517,46.7908c-2.199-1.0742-3.9778-2.8081-4.9168-4.9729 M46.165,41.818c-0.8692,2.0234-2.4789,3.6854-4.4969,4.7746 M26.0734,41.818c1.8055,0.9018,5.4625,1.4962,9.5171,1.5426c4.4161,0.0505,8.5899-0.5572,10.5745-1.5426"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.6597,42.818c0,6.0751-2.5324,11-5.6562,11 s-5.6563-4.9249-5.6563-11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
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
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.7517,46.7908c-2.199-1.0742-3.9778-2.8081-4.9168-4.9729 M46.165,41.818c-0.8692,2.0234-2.4789,3.6854-4.4969,4.7746 M26.0734,41.818c1.8055,0.9018,5.4625,1.4962,9.5171,1.5426c4.4161,0.0505,8.5899-0.5572,10.5745-1.5426"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.6597,42.818c0,6.0751-2.5324,11-5.6562,11 s-5.6563-4.9249-5.6563-11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
    })));
  }
};

export default FaceWithTongue;