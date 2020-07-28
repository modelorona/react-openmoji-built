import React from 'react';

const PalmTree = ({
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
      fill: "#5c9e31",
      stroke: "none",
      d: "M36.2208,29.3157L36.2208,29.3157c-2.3045-4.2879-8.34-5.5242-13.4806-2.7614s-6.7397,8.181-4.4352,12.4689 l1.1937-1.279c1.8116-1.9229,2.6256-2.3028,4.8485-3.7454C24.3473,33.9988,30.4415,29.4652,36.2208,29.3157z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      stroke: "none",
      d: "M37.2849,28.2487c-2.3394-0.8811-4.95-0.1607-6.9233,1.6466c-1.0336,0.9466-1.8924,2.1915-2.4457,3.6606 c-1.6096,4.2736-0.0246,8.8265,3.5401,10.1691v0C31.6696,38.1333,33.7566,32.5919,37.2849,28.2487L37.2849,28.2487z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "none",
      d: "M56.6092,19.9581L56.6092,19.9581c-1.7664-4.5362-7.6069-6.4968-13.0451-4.3791 c-3.4455,1.3417-5.903,3.9986-6.792,6.9192c-0.5142,1.6891-0.5038,3.4665,0.1435,5.1286 C36.9156,27.6268,45.5405,19.1688,56.6092,19.9581z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      stroke: "none",
      d: "M61.7027,34.872c1.4992-5.6939-2.8192-11.7667-9.6454-13.564c-1.0578-0.2785-2.1138-0.438-3.1487-0.4875 c-5.6432-0.2699-10.6589,2.7314-11.9257,7.5429h0C45.6143,27.8051,54.4654,30.1356,61.7027,34.872L61.7027,34.872z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "none",
      d: "M12.2789,23.7435c0,0,12.538-0.9481,23.3468,2.6232l0.7806,0.4425c0,0,2.2411-6.8492-3.3024-9.7317 C28.4546,14.6598,16.7099,12.5599,12.2789,23.7435z"
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
      strokeWidth: "2",
      d: "M39.9771,32.4424 c2.4273,6.8664,4.2771,16.8297,2.9406,30.3218"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2208,28.3157 L36.2208,28.3157c-2.3045-4.2879-8.34-5.5242-13.4806-2.7614s-7.4397,8.4785-5.1352,12.7664l0,0 c1.8116-1.9229,3.8637-3.6243,6.0866-5.0669"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.4308,19.0312 L56.4308,19.0312c-2.0648-4.4084-8.0229-5.9754-13.308-3.5c-3.3485,1.5683-5.6233,4.3831-6.3158,7.3565 c-0.4005,1.7196-0.2716,3.4923,0.485,5.1077"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.2849,28.2487 c-2.3394-0.8811-4.95-0.1607-6.9233,1.6466c-1.0336,0.9466-1.8924,2.1915-2.4457,3.6606 c-1.6096,4.2736-0.0246,8.8265,3.5401,10.1691v0C31.6696,38.1333,33.7566,32.5919,37.2849,28.2487L37.2849,28.2487z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M61.7027,34.872 c1.4992-5.6939-2.8192-11.7667-9.6454-13.564c-1.0578-0.2785-2.1138-0.438-3.1487-0.4875 c-5.6432-0.2699-10.6589,2.7314-11.9257,7.5429h0C45.6143,27.8051,54.4654,30.1356,61.7027,34.872L61.7027,34.872z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.1871,19.0106 c-0.088-0.085-0.1776-0.1693-0.2689-0.2527c-1.7757-1.624-4.1607-2.9465-6.8817-3.6185 c-6.8529-1.6926-13.5043,1.9432-14.7576,7.6962h0c2.2915-0.2474,4.6074-0.2905,6.9127-0.137"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "56.4308",
      x2: "55",
      y1: "19.0312",
      y2: "18.9064",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.9771,32.4424 c2.4273,6.8664,4.2771,16.8297,2.9406,30.3218"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2208,28.3157 L36.2208,28.3157c-2.3045-4.2879-8.34-5.5242-13.4806-2.7614s-7.4397,8.4785-5.1352,12.7664l0,0 c1.8116-1.9229,3.8637-3.6243,6.0866-5.0669"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.4308,19.0312 L56.4308,19.0312c-2.0648-4.4084-8.0229-5.9754-13.308-3.5c-3.3485,1.5683-5.6233,4.3831-6.3158,7.3565 c-0.4005,1.7196-0.2716,3.4923,0.485,5.1077"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.2849,28.2487 c-2.3394-0.8811-4.95-0.1607-6.9233,1.6466c-1.0336,0.9466-1.8924,2.1915-2.4457,3.6606 c-1.6096,4.2736-0.0246,8.8265,3.5401,10.1691v0C31.6696,38.1333,33.7566,32.5919,37.2849,28.2487L37.2849,28.2487z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M61.7027,34.872 c1.4992-5.6939-2.8192-11.7667-9.6454-13.564c-1.0578-0.2785-2.1138-0.438-3.1487-0.4875 c-5.6432-0.2699-10.6589,2.7314-11.9257,7.5429h0C45.6143,27.8051,54.4654,30.1356,61.7027,34.872L61.7027,34.872z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.1871,19.0106 c-0.088-0.085-0.1776-0.1693-0.2689-0.2527c-1.7757-1.624-4.1607-2.9465-6.8817-3.6185 c-6.8529-1.6926-13.5043,1.9432-14.7576,7.6962h0c2.2915-0.2474,4.6074-0.2905,6.9127-0.137"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "56.4308",
      x2: "55",
      y1: "19.0312",
      y2: "18.9064",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default PalmTree;