import React from 'react';

const PeopleWrestling = ({
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
      cx: "39.9688",
      cy: "14.0938",
      r: "3",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.9688",
      cy: "16.0156",
      r: "3.9843",
      fill: "#FCEA2B",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M50,22l9,10v4l-6,5l-5,7l-2.8262,12H41.75L43,45l6-11l-9.0312-8.75c0,0-0.7608-1.125-1.9688-1.125 S35.209,24.5,32.9902,24.5c-1.5732,0-5.1328-1.1245-7.7871-2.7866c0,0-1.5986-1.6553-0.0674-3.1011c1.5313-1.4458,0,0,0,0 s1.9883,1.2026,3.4766,1.8877c1.7207,0.792,5.8457,1.792,9.7207,0.7085c0,0,6.5137-2.311,8.292-1.394C48.4033,20.7314,50,22,50,22 z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fcea2b",
      stroke: "none",
      points: "59,35 60,46 64.167,58 61.167,58 55,47 54,41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M26.334,28.1523L21.1357,34l4,12l-0.75,14h-3.4238l-0.8262-13l-3.0673-6L11,36v-4l9.0684-10 c0,0,1.8613-3.0283,2.6474-3.1455c1.5625-0.2334,3.2774-0.4585,4.6944,0.1455c0.8212,0.3496,2.2334,2.5366,2.164,4.8545 c-0.0185,0.6309-0.1816,1.2593-0.4521,1.8779c-0.0381,0.0869,2.998,2.2158,4.2978,1.2197 c1.8203-1.3955,3.5791-5.6308,4.8086-5.6308c1.3682,0-0.959,6.0366-2.999,7.6372c-3.1875,2.5005-7.6309-0.8008-8.1045-0.25"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fcea2b",
      stroke: "none",
      points: "12,37 12,47 9.9688,58 12.9688,58 16,48 17,42"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "39.9688",
      cy: "14.0938",
      r: "3",
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
      d: "M41,25l6.6709,7.5049c0.7314,0.8222,0.8984,2.2851,0.3711,3.251l-4.084,7.4882c-0.5273,0.9659-1.0332,2.6524-1.124,3.7491 l-0.918,11.0136C41.8252,59.1035,42.5205,60,43.4619,60c0.9414,0,1.918-0.876,2.1699-1.9463l1.9102-8.1074 c0.2519-1.0703,0.9814-2.6787,1.6201-3.5742l2.6758-3.7442c0.6387-0.8955,1.8535-2.2041,2.6982-2.9082l2.9278-2.4394 C58.3086,36.5762,59,35.0996,59,34l0,0c0-1.0996-0.6025-2.6689-1.3379-3.4863L50,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59,35l0.8193,9.0078c0.0996,1.0957,0.4756,2.8428,0.837,3.8818l2.8544,8.2208C63.8721,57.1494,63.4922,58,62.667,58 c-0.8252,0-1.9404-0.7852-2.4785-1.7441l-4.21-7.5118c-0.5381-0.9589-1.1269-2.6318-1.3076-3.7168L54,41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,22c-2-2-4.2988-2.5669-6-2c-3,1-8,2-10,2s-5-1-8-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.334,28.1523l-3.8692,4.3526c-0.7314,0.8222-1.0449,2.3486-0.6962,3.3926l2.7343,8.205 c0.3487,1.044,0.585,2.7959,0.5254,3.8946l-0.5351,10.0058C24.4336,59.1016,23.6152,60,22.6738,60 c-0.9414,0-1.7685-0.8984-1.8388-1.9961l-0.5723-9.0078c-0.0703-1.0977-0.5293-2.8008-1.0215-3.7852l-1.2109-2.4218 c-0.4922-0.9844-1.586-2.3653-2.4307-3.0694l-2.9277-2.4394c-0.8448-0.7041-1.5362-2.1807-1.5362-3.2803l0,0 c0-1.0996,0.6026-2.6689,1.3379-3.4863L20.1357,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1357,23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12,37v8c0,1.0996-0.1631,2.8848-0.3633,3.9668l-1.3047,7.0664C10.1318,57.1152,10.6436,58,11.4688,58 c0.8251,0,1.7607-0.8613,2.08-1.9141l1.8711-6.1718c0.3194-1.0528,0.7285-2.8018,0.9092-3.8868L17,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.0674,19.8145c-0.8418,0.3173-1.7901,0.9892-2.9317,2.1855"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1357,23 c0,0,4.8643,4,6.8643,4c1,0,3,0,4-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.0703,18.1875 c0.5674-0.5459,0.9199-1.313,0.9199-2.1616c0-1.6563-1.3437-3-3-3c-1.6543,0-3,1.3437-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.542,25.25"
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
      cx: "39.9688",
      cy: "14.0938",
      r: "3",
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
      d: "M41,25l6.6709,7.5049c0.7314,0.8222,0.8984,2.2851,0.3711,3.251l-4.084,7.4882c-0.5273,0.9659-1.0332,2.6524-1.124,3.7491 l-0.918,11.0136C41.8252,59.1035,42.5205,60,43.4619,60c0.9414,0,1.918-0.876,2.1699-1.9463l1.9102-8.1074 c0.2519-1.0703,0.9814-2.6787,1.6201-3.5742l2.6758-3.7442c0.6387-0.8955,1.8535-2.2041,2.6982-2.9082l2.9278-2.4394 C58.3086,36.5762,59,35.0996,59,34l0,0c0-1.0996-0.6025-2.6689-1.3379-3.4863L50,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45,23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59,35l0.8193,9.0078c0.0996,1.0957,0.4756,2.8428,0.837,3.8818l2.8544,8.2208C63.8721,57.1494,63.4922,58,62.667,58 c-0.8252,0-1.9404-0.7852-2.4785-1.7441l-4.21-7.5118c-0.5381-0.9589-1.1269-2.6318-1.3076-3.7168L54,41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,22c-2-2-4.2988-2.5669-6-2c-3,1-8,2-10,2s-5-1-8-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.334,28.1523l-3.8692,4.3526c-0.7314,0.8222-1.0449,2.3486-0.6962,3.3926l2.7343,8.205 c0.3487,1.044,0.585,2.7959,0.5254,3.8946l-0.5351,10.0058C24.4336,59.1016,23.6152,60,22.6738,60 c-0.9414,0-1.7685-0.8984-1.8388-1.9961l-0.5723-9.0078c-0.0703-1.0977-0.5293-2.8008-1.0215-3.7852l-1.2109-2.4218 c-0.4922-0.9844-1.586-2.3653-2.4307-3.0694l-2.9277-2.4394c-0.8448-0.7041-1.5362-2.1807-1.5362-3.2803l0,0 c0-1.0996,0.6026-2.6689,1.3379-3.4863L20.1357,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1357,23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12,37v8c0,1.0996-0.1631,2.8848-0.3633,3.9668l-1.3047,7.0664C10.1318,57.1152,10.6436,58,11.4688,58 c0.8251,0,1.7607-0.8613,2.08-1.9141l1.8711-6.1718c0.3194-1.0528,0.7285-2.8018,0.9092-3.8868L17,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.0674,19.8145c-0.8418,0.3173-1.7901,0.9892-2.9317,2.1855"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1357,23 c0,0,4.8643,4,6.8643,4c1,0,3,0,4-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.0703,18.1875 c0.5674-0.5459,0.9199-1.313,0.9199-2.1616c0-1.6563-1.3437-3-3-3c-1.6543,0-3,1.3437-3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.542,25.25"
    })));
  }
};

export default PeopleWrestling;