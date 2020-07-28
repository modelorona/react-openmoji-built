import React from 'react';

const Goat = ({
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
      d: "M14.9052,16.5687c0,0-4.0263-2.1683-5.1407-0.4195l1.6065,2.5221l-4.0225,3.9723L6.612,24.9252 l0.9757,1.7853l2.8661-0.1759l1.1085,1.2019l-0.5683,4.6614c0,0,4.5938,0.25,2.7188-6.6493h2.2324l0.1963,2.1493l0.6417,3.4545 c0,0,0.8915,3.8863,1.5478,3.7955c0.6563-0.0908,3.1319,2.4,3.1319,2.4l0.684,3.9778l3.161,3.4406 c0,0,3.4359,11.6563,2.4673,14.5658c-0.9687,2.9096-0.7567,3.3723-0.7567,3.3723l2.5692,0.681l2.1608-4.4433l-0.8899-14.8962 c0,0,6.9504,5.9571,15.246,1.3046c0,0,0.5321,5.4073,2.4139,6.3462l-1.1489,6.8721l-1.9903,3.5042l1.396,0.9868l1.8119-0.3503 l3.0314-6.0352l1.1038-10.9629l1.178-2.5774l5.3749-7.1527c0,0,0.2703-2.5759-1.3092-4.0424 c-1.5795-1.4665-6.5838-3.8558-6.5838-3.8558l-12.6695-0.635l-11.375,1.5l-6.375-10.25l-2.6317-2.125 C18.3309,16.773,15.5352,16.177,14.9052,16.5687z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M59.2752,36.1811c0,0-1.7636,7.4875-2.3125,10.3392c-0.3333,1.7317-0.6959,3.819-0.6959,3.819l1.1475,1.996 l-4.25,11.6875c0,0-3.8266,0.5271-4.3891-0.7632l3.1059-4.6743l0.4566-5.5625l0.4375-7.6875l1.1251-2.0016L59.2752,36.1811z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M14.5877,17.9605l3.3466-3.9634l5.2479-0.5321l4.2805,3.7455c0,0-6.75-4.375-9.1317,1.4375L14.5877,17.9605 z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#6A462F",
      stroke: "none",
      points: "26.4002,48.5855 31.0252,49.273 31.8377,57.7105 29.8416,63.0633 26.4002,63.0633 28.1502,58.3355"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#6A462F",
      stroke: "none",
      points: "52.3377,53.023 48.4002,53.523 46.9159,59.5674 45.3792,62.273 45.7934,63.0633 48.1502,63.5855 50.8997,59.059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M64.9627,26.5021c0,0,1.9578,10.3429-5.8128,10.2131c0,0-0.0556-3.1065-1.1839-4.5765l2.4679-2.5651 c0,0,1.7521-2.2515,1.8614-2.3229S64.9627,26.5021,64.9627,26.5021z"
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
      d: "M10.9522,31.3524c2.1772-4.1292-0.8258-4.955-0.8258-4.955c-1.7268,0.8258-2.7778-0.3003-2.7778-0.3003 c-1.8018-1.7267,0-3.4535,0-3.4535c4.0541-2.8529,4.0225-3.9723,4.0225-3.9723l-1.7276-2.7122c0,0,2.4349-2.3246,4.9124,1.0538 c0,0,5.931-8.4085,12.4626-0.6006"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.9559,25.7358c0,0,3.9033,0.4364,3.9784-3.7678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.3309,17.7091c0,0,2.2921,0.3123,3.875,3.875c0.7891,1.7761,4.4163,7.4998,4.8126,7.7292c0,0,25.5259-5.6186,30.556,2.7899 c0,0,1.7267,0.5255,2.7778-2.3274c1.0511-2.8529,3.6037-3.2283,3.6037-3.2283"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4012,45.3935c-8.9341,4.8799-15.5538-1.3532-15.5538-1.3532l0.4836,8.8965l0.5,6.0223l-1.672,3.7114 c-0.1616,0.3586-0.5184,0.5892-0.9117,0.5892H27.783c-0.7366,0-1.2204-0.7694-0.9013-1.4333l1.1632-2.9869 c0,0-0.0504-1.736-0.5009-5.4147s-2.3274-8.7088-2.3274-8.7088c-4.5046-2.5526-3.7538-7.168-3.7538-7.168 C15.7571,33.3966,16.147,25.232,16.147,25.232"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.678,39.1979c0,0-5.0582,6.4486-0.1595,12.6987c0,0,0.1019,5.4161-1.8125,8.0625l-1.1586,1.7482 c-0.4405,0.6647,0.0361,1.5524,0.8336,1.5524h1.4454c0.2941,0,0.5696-0.1269,0.7608-0.3503 c0.9164-1.0706,3.4939-4.5506,3.4939-9.8253c0-5.2399,1.0453-9.0438,1.0453-9.0438c5.0676-4.4483,5.2568-7.8591,5.2568-7.8591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.0393,46.5204c0,0-1.065,3.2324,1.375,5.3345l-4.25,11.2083"
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
      d: "M10.9522,31.3524c2.1772-4.1292-0.8258-4.955-0.8258-4.955c-1.7268,0.8258-2.7778-0.3003-2.7778-0.3003 c-1.8018-1.7267,0-3.4535,0-3.4535c4.0541-2.8529,4.0225-3.9723,4.0225-3.9723l-1.7276-2.7122c0,0,2.4349-2.3246,4.9124,1.0538 c0,0,5.931-8.4085,12.4626-0.6006"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.9559,25.7358c0,0,3.9033,0.4364,3.9784-3.7678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.3309,17.7091c0,0,2.2921,0.3123,3.875,3.875c0.7891,1.7761,4.4163,7.4998,4.8126,7.7292c0,0,25.5259-5.6186,30.556,2.7899 c0,0,1.7267,0.5255,2.7778-2.3274c1.0511-2.8529,3.6037-3.2283,3.6037-3.2283"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4012,45.3935c-8.9341,4.8799-15.5538-1.3532-15.5538-1.3532l0.4836,8.8965l0.5,6.0223l-1.672,3.7114 c-0.1616,0.3586-0.5184,0.5892-0.9117,0.5892H27.783c-0.7366,0-1.2204-0.7694-0.9013-1.4333l1.1632-2.9869 c0,0-0.0504-1.736-0.5009-5.4147s-2.3274-8.7088-2.3274-8.7088c-4.5046-2.5526-3.7538-7.168-3.7538-7.168 C15.7571,33.3966,16.147,25.232,16.147,25.232"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.678,39.1979c0,0-5.0582,6.4486-0.1595,12.6987c0,0,0.1019,5.4161-1.8125,8.0625l-1.1586,1.7482 c-0.4405,0.6647,0.0361,1.5524,0.8336,1.5524h1.4454c0.2941,0,0.5696-0.1269,0.7608-0.3503 c0.9164-1.0706,3.4939-4.5506,3.4939-9.8253c0-5.2399,1.0453-9.0438,1.0453-9.0438c5.0676-4.4483,5.2568-7.8591,5.2568-7.8591"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.0393,46.5204c0,0-1.065,3.2324,1.375,5.3345l-4.25,11.2083"
    })));
  }
};

export default Goat;