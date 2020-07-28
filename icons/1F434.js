import React from 'react';

const HorseFace = ({
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
      d: "M22.7544,11.0855l1.6667,7.1667l-5.3333,5.3333l-8.3333,14.3333l1,4.6667l2.1667,1.3333l4-0.1667 l3.5-3.3333l6.8333-1.8333c0,0,1.3333,1.5,2.1667,3s3.6667,4.1667,3.6667,4.1667l0.5,6l-1.8333,6.1667l-2,2.8333 c0,0,22,9.5,33.1667-7l-0.5-6l-1.8333-5l-3.3333-5.1667l-1-1.5l-0.1667-5.1667l-2.8333-5.3333l-5-3l-2.6667-4.5l-5.1667-4.1667 l-6.5-1.5l-5.6667,1l-4.1667-2.1667L22.7544,11.0855z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M64.7106,62.7214c-0.9631-2.3846-0.5769-5.6313-0.1453-7.3825c0.2628-1.0662,0.3215-2.1766,0.1378-3.2592 c-1.4791-8.7127-6.9983-15.1193-6.9983-15.1193l-0.4205,1.8071c1.0747-6.5267-2.1549-11.3071-2.1549-11.3071l-5.2085-4.095 L49.8034,23.97c-2.2811-6.5568-10.049-9.9924-10.049-9.9924l-10.7678-0.1362l2.4602,4.0656l5.792,2.0801l3.5322,2.8413 l2.2761,4.3124l0.2832,4.8929l-1.4169,5.6426l-0.3258,6.0341l1.5833,4.7642c2.321,7.1157,7.7722,7.2844,9.4165,7.1639 l0.0364,0.7856c0.0051,0.1072,0.0179,0.2164,0.0417,0.321c1.0129,4.4402,6.5474,7.319,10.2568,8.0876 C64.1485,65.0869,65.1795,63.8825,64.7106,62.7214z M52.2424,49.4561c0.067-0.1094,0.1366-0.2226,0.2172-0.3541 C52.3833,49.2263,52.311,49.3442,52.2424,49.4561z M52.089,54.1901l0.4487,0.3732l0.0138,0.2971 C52.3948,54.6373,52.2339,54.4149,52.089,54.1901z M51.719,50.3093C51.6613,50.4033,51.6568,50.4108,51.719,50.3093L51.719,50.3093 z M51.7395,50.2759c0.063-0.1028,0.178-0.2902,0.3435-0.56C51.928,49.9686,51.8086,50.1633,51.7395,50.2759z M56.2373,43.0212 l-2.1681,4.0145c0.2203-0.5795,0.4586-1.1631,0.7343-1.7551c0.9119-1.4865,1.5479-2.9395,1.9739-4.3344l-0.3918,1.6837 C56.3538,42.7663,56.304,42.8979,56.2373,43.0212z M52.6698,48.759c0.0782-0.1277,0.1625-0.2649,0.2516-0.41 C52.8355,48.4889,52.7519,48.6253,52.6698,48.759z M53.4678,47.4581c0.1384-0.2257,0.2872-0.4683,0.4448-0.7251 C53.771,46.9638,53.6214,47.2077,53.4678,47.4581z M54.3279,46.0559c0.0613-0.0999,0.1266-0.2064,0.1904-0.3103 C54.462,45.8375,54.397,45.9433,54.3279,46.0559z M54.7171,45.4214c0.0051-0.0084,0.0095-0.0156,0.0146-0.024 C54.7271,45.4052,54.7222,45.413,54.7171,45.4214z"
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
      d: "M57.2049,36.8681c1.768,2.3617,6.5451,6.6821,6.0451,16.2382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.25,40.9708c0,0,8.4783,6.7823,0,18.7647"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.9462,29.955c0.5489,8.3555-9.3225,9.703-11.954,10.3347c-0.3325,0.0798-0.6318,0.25-0.8736,0.4919l-2.2227,2.2227 c-0.3494,0.3494-0.8234,0.5458-1.3176,0.5458h-3.5121c-1.203,0-2.2711-0.7698-2.6515-1.9111l-0.531-1.5931 c-0.258-0.774-0.1649-1.6222,0.2549-2.3218l8.7862-14.6436l4.7238-4.7238l-2.1151-6.9054c0,0,7.8026-0.6987,8.4135,5.3308 c0,0,16.9281,2.4418,10.5531,19.383c0,0-1.625,5.9489,2.375,11.1846"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6667,13.1063c0,0,22.2444-4.0208,19.9583,19.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6687,22.2404c0,0,14.7665,6.5865,5.4563,22.22c0,0-5.375,6.5625,0.625,13.6042"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.1667",
      cy: "28.0159",
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.2049,36.8681c1.768,2.3617,6.5451,6.6821,6.0451,16.2382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.25,40.9708c0,0,8.4783,6.7823,0,18.7647"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.9462,29.955c0.5489,8.3555-9.3225,9.703-11.954,10.3347c-0.3325,0.0798-0.6318,0.25-0.8736,0.4919l-2.2227,2.2227 c-0.3494,0.3494-0.8234,0.5458-1.3176,0.5458h-3.5121c-1.203,0-2.2711-0.7698-2.6515-1.9111l-0.531-1.5931 c-0.258-0.774-0.1649-1.6222,0.2549-2.3218l8.7862-14.6436l4.7238-4.7238l-2.1151-6.9054c0,0,7.8026-0.6987,8.4135,5.3308 c0,0,16.9281,2.4418,10.5531,19.383c0,0-1.625,5.9489,2.375,11.1846"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6667,13.1063c0,0,22.2444-4.0208,19.9583,19.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6687,22.2404c0,0,14.7665,6.5865,5.4563,22.22c0,0-5.375,6.5625,0.625,13.6042"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.1667",
      cy: "28.0159",
      r: "2",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default HorseFace;