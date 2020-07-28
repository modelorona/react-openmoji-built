import React from 'react';

const HorseRiding = ({
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
      fill: "#A57939",
      stroke: "none",
      d: "M54,49c-1-2,4-5,4-8c0-1.6006-1-6-5-7c-1.7246-0.4316-3.9814-1.4424-6.166-1.3135 C37.3125,33.25,31.625,35.625,28,34.6875c-0.9687-0.25-8.8125-8-9.375-8.6875l-3.5-3.4062l-0.4609,3.6977 C11.4971,28.4165,11,30,6,34c-0.5527,0.4424,1.3145,2.1719,2,2c4-1,8-1,8-1s1.8975,6.1826,2,8c0.1133,1.9971,0,6,1,7 c1.5811,1.5811,3,2,3,2s-2,4-3,6c-0.6328,1.2646-0.3535,2.6465,0,3c2,2,8,4,8,4l1-3c0,0-5-2-5-3c0-1.1289,4-4,5-6 c0,0,6.5596-0.4023,9-1c1.6895-0.4141,7.0381-2.7969,10.6133-4.4316c1.7812,2.58,4.1777,5.7099,4.1777,6.4316l-4,5l2,1c0,0,5-4,6-5 c0.3535-0.3535,0.1914-1.5381,0-2C55.25,51.6934,54.6328,50.2646,54,49z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M48,49c0,0-2.1426,6.7891-3,9c-0.8906,2.2959-2,8-2,8l4.167-1.167l2.417-4.917l-1.25-0.166v-2.584 l2.916-3.041"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M56,35c0,0-1,0,2,0s7,3,6,7c-0.7275,2.9102-4.126,5.583,0.874,10.583c0,0,0.709,2.834-2.041,2.042 c0,0-2.3789-0.9268-3.375-4.083c-1.75-5.542,1.6514-8.1826,1-10.209c-0.375-1.166-2.334-1.125-2.334-1.125"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M21.2813,52.125l-1.0938,2.9375c-0.625,0.2188-4.4219,1.5352-4.2812,2.7188C16.125,59.625,15,65,15,65l-2,1 c0,0-2-8-2-9c0-0.79,0-2,1-3s6-4,6-4"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M46,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M48,48"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28.3857",
      cy: "13.0625",
      r: "2.9687",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M34,28l1,3l-6.7949,8l-0.0967,2.3262l4.4771,7.9387l3.1313-1.6485l-2.1381-7.9379L42,35l2-4l-8.5267-12.3163l-4.7572,0.8079l0.6382,5.9204L24,28.2188c0,0,0.8125,1.7187,1.9375,1.5312s6-0.9687,7.25-2.25L34,28z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "28.3857",
      cy: "13.0625",
      r: "2.9687",
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
      d: "M25,28l5.0771-1.4507c1.0577-0.3022,1.6758-1.4145,1.3731-2.4722l-0.9004-3.1542c-0.3027-1.0577,0.333-2.0992,1.4111-2.315 l1.0782-0.2158c1.0781-0.2158,2.4736,0.3476,3.0996,1.2524l6.7226,9.711c0.626,0.9043,0.7364,2.4492,0.2442,3.4336l-0.211,0.4218 c-0.4922,0.9844-1.6816,2.2266-2.6425,2.7608l-5.504,3.0566c-0.9609,0.5342-1.3945,1.7998-0.9628,2.8106l1.8466,4.3222 c0.4317,1.0108,0.0166,2.2891-0.9228,2.8389c-0.9404,0.5498-2.1514,0.2158-2.6914-0.7422l-2.9268-5.1894 c-0.54-0.958-0.9609-2.2657-0.9345-2.9053c0.0273-0.6397,0.6318-1.8486,1.3437-2.6875l4.2051-4.9512 C34.417,31.6855,34.7754,30.3252,34.5,29.5C34.2246,28.6748,34,28,34,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,48"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,35c-1-1-3.4512-4.4502-6-7c-1-1-3-2-3-2l-2-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,40c0,0-1,3,0,5c1.1885,2.377,5.791,8,5.791,9L49,57c0,0-1.1377,0.748-1.124,1.376C47.917,60.293,49.791,60,49.791,60 s6.3779-5.5635,6.209-6c-0.5107-1.3193-1.3672-3.7354-2-5c-1-2,4-5,4-8c0-1.6006-1-6-5-7 c-1.7246-0.4316-3.7734-0.4912-5.958-0.3486"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24,64c-1.7998-0.7598-3.957-1.957-5-3c-0.3535-0.3535-0.6328-1.7354,0-3c1-2,3-6,3-6s-1.4189-0.4189-3-2c-1-1-0.8867-5.0029-1-7 c-0.1025-1.8174-2-8-2-8s-4,0-8,1c-0.6855,0.1719-2.5527-1.5576-2-2c5-4,5-4,8-6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,61c0,0,0.5527,0.5254,1.2295,1.166c0.6758,0.6416,0.6943,1.7197,0.042,2.3965c-0.6543,0.6758-1.6563,0.8252-2.2295,0.333 C24.4688,64.4033,24,64,24,64"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,48c0,0-7.3848,3.3594-10,4c-2.4404,0.5977-9,1-9,1c-4,4-5,6-5,6s1.6289,1.3418,3,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,49c0,0-2.1426,6.7891-3,9c-0.4707,1.2129-0.6182,1.9219-1.542,3.958c-0.8242,1.8164-0.9101,2.1182-0.9101,2.1182 C42.2461,65.1348,42.6748,66.2246,43.5,66.5c0.8252,0.2754,1.9004-0.3066,2.3887-1.292l1.0488-2.1142"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15,62v2c0,1.0996-0.6748,2-1.5,2c-0.8252,0-1.5-0.7002-1.5-1.5566c0,0,0,0,0-2.4014"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,50c0,0-5,3-6,4s-1,2.21-1,3c0,0.5176,0.4834,2.8535,1,5.042"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,35c0,0-1,0,2,0s7,3,6,7c-0.7275,2.9102-5,6,0,11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      x2: "15",
      y1: "58",
      y2: "62",
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "28.3857",
      cy: "13.0625",
      r: "2.9687",
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
      d: "M25,28l5.0771-1.4507c1.0577-0.3022,1.6758-1.4145,1.3731-2.4722l-0.9004-3.1542c-0.3027-1.0577,0.333-2.0992,1.4111-2.315 l1.0782-0.2158c1.0781-0.2158,2.4736,0.3476,3.0996,1.2524l6.7226,9.711c0.626,0.9043,0.7364,2.4492,0.2442,3.4336l-0.211,0.4218 c-0.4922,0.9844-1.6816,2.2266-2.6425,2.7608l-5.504,3.0566c-0.9609,0.5342-1.3945,1.7998-0.9628,2.8106l1.8466,4.3222 c0.4317,1.0108,0.0166,2.2891-0.9228,2.8389c-0.9404,0.5498-2.1514,0.2158-2.6914-0.7422l-2.9268-5.1894 c-0.54-0.958-0.9609-2.2657-0.9345-2.9053c0.0273-0.6397,0.6318-1.8486,1.3437-2.6875l4.2051-4.9512 C34.417,31.6855,34.7754,30.3252,34.5,29.5C34.2246,28.6748,34,28,34,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,44"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,48"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,35c-1-1-3.4512-4.4502-6-7c-1-1-3-2-3-2l-2-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,40c0,0-1,3,0,5c1.1885,2.377,5.791,8,5.791,9L49,57c0,0-1.1377,0.748-1.124,1.376C47.917,60.293,49.791,60,49.791,60 s6.3779-5.5635,6.209-6c-0.5107-1.3193-1.3672-3.7354-2-5c-1-2,4-5,4-8c0-1.6006-1-6-5-7 c-1.7246-0.4316-3.7734-0.4912-5.958-0.3486"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24,64c-1.7998-0.7598-3.957-1.957-5-3c-0.3535-0.3535-0.6328-1.7354,0-3c1-2,3-6,3-6s-1.4189-0.4189-3-2c-1-1-0.8867-5.0029-1-7 c-0.1025-1.8174-2-8-2-8s-4,0-8,1c-0.6855,0.1719-2.5527-1.5576-2-2c5-4,5-4,8-6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,61c0,0,0.5527,0.5254,1.2295,1.166c0.6758,0.6416,0.6943,1.7197,0.042,2.3965c-0.6543,0.6758-1.6563,0.8252-2.2295,0.333 C24.4688,64.4033,24,64,24,64"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47,48c0,0-7.3848,3.3594-10,4c-2.4404,0.5977-9,1-9,1c-4,4-5,6-5,6s1.6289,1.3418,3,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,49c0,0-2.1426,6.7891-3,9c-0.4707,1.2129-0.6182,1.9219-1.542,3.958c-0.8242,1.8164-0.9101,2.1182-0.9101,2.1182 C42.2461,65.1348,42.6748,66.2246,43.5,66.5c0.8252,0.2754,1.9004-0.3066,2.3887-1.292l1.0488-2.1142"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15,62v2c0,1.0996-0.6748,2-1.5,2c-0.8252,0-1.5-0.7002-1.5-1.5566c0,0,0,0,0-2.4014"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,50c0,0-5,3-6,4s-1,2.21-1,3c0,0.5176,0.4834,2.8535,1,5.042"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56,35c0,0-1,0,2,0s7,3,6,7c-0.7275,2.9102-5,6,0,11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      x2: "15",
      y1: "58",
      y2: "62",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default HorseRiding;