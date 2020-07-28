import React from 'react';

const SmilingFaceWithSunglasses = ({
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
      cy: "36",
      r: "23",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M45.331,38.5639c3.9628,0,7.1782-2.8618,7.1782-6.3889c0-1.7646,0.4473-3.5291-0.8519-4.6852 s-4.3449-1.7037-6.3264-1.7037c-2.3567,0-5.1428,0.1434-6.4514,1.7037c-0.8933,1.0652-0.7268,3.2534-0.7268,4.6852 C38.1528,35.7021,41.3655,38.5639,45.331,38.5639z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M25.7384,38.5639c3.9628,0,7.1782-2.8618,7.1782-6.3889c0-1.7646,0.4473-3.5291-0.8519-4.6852 s-4.3449-1.7037-6.3264-1.7037c-2.3567,0-5.1428,0.1434-6.4514,1.7037c-0.8933,1.0652-0.7268,3.2534-0.7268,4.6852 C18.5602,35.7021,21.7729,38.5639,25.7384,38.5639z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "#9B9B9A",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.8155,35.6315"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "35.8871",
      cy: "36.0565",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.7019,44.862c-6.574,3.5248-14.0454,3.6576-19.6295,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.8826,30.4638c0,0-0.953,8.5508,6.8608,7.9185c2.6197-0.212,7.8164-0.6507,7.867-8.3427 c0.0046-0.6979-0.0078-1.5989-0.8108-2.6298c-1.0647-1.3669-3.5716-1.9711-9.9446-1.422 C22.8551,25.9879,19.4088,25.8888,18.8826,30.4638z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.9534,29.9307 18.5203,26.5594 22.3532,26.0317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7412,30.4638c0,0,0.953,8.5508-6.8608,7.9185c-2.6197-0.212-7.8164-0.6507-7.867-8.3427 c-0.0046-0.6979,0.0078-1.5989,0.8108-2.6298c1.0647-1.3669,3.5716-1.9711,9.9446-1.422 C48.7688,25.9879,52.2151,25.8888,52.7412,30.4638z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5048,26.4158c0,0,4.1241,2.5339,8.6569,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0135,30.0396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.6104,30.0396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.5361,31.3179c0,0,2.2019-3.7509,4.5362,0"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52.6639,29.9332 53.097,26.5619 49.2641,26.0342"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.9549,30.0271c0,0,1.7954-3.7509,3.6988,0"
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
      cx: "35.8871",
      cy: "36.0565",
      r: "23",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.7019,44.862c-6.574,3.5248-14.0454,3.6576-19.6295,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.8826,30.4638c0,0-0.953,8.5508,6.8608,7.9185c2.6197-0.212,7.8164-0.6507,7.867-8.3427 c0.0046-0.6979-0.0078-1.5989-0.8108-2.6298c-1.0647-1.3669-3.5716-1.9711-9.9446-1.422 C22.8551,25.9879,19.4088,25.8888,18.8826,30.4638z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.9534,29.9307 18.5203,26.5594 22.3532,26.0317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7412,30.4638c0,0,0.953,8.5508-6.8608,7.9185c-2.6197-0.212-7.8164-0.6507-7.867-8.3427 c-0.0046-0.6979,0.0078-1.5989,0.8108-2.6298c1.0647-1.3669,3.5716-1.9711,9.9446-1.422 C48.7688,25.9879,52.2151,25.8888,52.7412,30.4638z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5048,26.4158c0,0,4.1241,2.5339,8.6569,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0135,30.0396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.6104,30.0396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.5361,31.3179c0,0,2.2019-3.7509,4.5362,0"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "52.6639,29.9332 53.097,26.5619 49.2641,26.0342"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.9549,30.0271c0,0,1.7954-3.7509,3.6988,0"
    })));
  }
};

export default SmilingFaceWithSunglasses;