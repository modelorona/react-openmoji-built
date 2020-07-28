import React from 'react';

const Iceberg = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "23.8445",
      width: "50",
      height: "44.1555",
      fill: "#61B2E4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M26.5617,23.482l-4.3533,4.7736l0.0855,3.9396l-4.7557,1.1207l4.9233,3.8301l-1.2307,3.83 c0,0,4.923,0.7018,6.3015,3.45c0.094,0.1827,0.1667,0.3756,0.2166,0.5749c0.9256,3.2259,0.8665,11.1492,0.8665,11.1492l3.2,5.1067 l5.3717,2.261l4.8387-11.8214l1.4179,2.0757c0,0,0.9846,0.6627,2.1563-6.3347c0.7199,0.4804,1.7114,1.1294,2.1231,1.8907 c0.9846,1.5203,0.2794-7.1338,0.2794-7.1338l-1.1717-3.1771l5.576-0.7436l-1.9231-6.0785 c-1.5926-3.1579-3.5919-6.0936-5.9471-8.7322L26.5617,23.482z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FFFFFF",
      points: "31.8154,14.5261 39.7181,19.1686 44.5366,23.4629 26.5617,23.482"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "61",
      y1: "23.8445",
      y2: "23.8445",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.4615,37.146 l-1.2307,3.83c0,0,4.923,0.7018,6.3015,3.45c0.094,0.1827,0.1667,0.3756,0.2166,0.5749 c0.9256,3.2259,0.8665,11.1492,0.8665,11.1492l3.2,5.1067l5.3717,2.261l4.8387-11.8214l1.4179,2.0757 c0,0,0.9846,0.6627,2.1563-6.3347c0.7199,0.4804,1.7114,1.1294,2.1231,1.8907c0.9846,1.5203,0.2794-7.1338,0.2794-7.1338 l-1.1717-3.1771l5.576-0.7436l-1.9231-6.0785c-1.5926-3.1579-3.5919-6.0936-5.9471-8.7322 c-3.7812-4.7068-12.7212-8.9368-12.7212-8.9368l-5.6537,9.9559l-3.9533,3.7736l0.0855,3.9396l-4.7557,1.1207L22.4615,37.146z"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "11",
      x2: "61",
      y1: "23.8445",
      y2: "23.8445",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.4615,37.146 l-1.2307,3.83c0,0,4.923,0.7018,6.3015,3.45c0.094,0.1827,0.1667,0.3756,0.2166,0.5749 c0.9256,3.2259,0.8665,11.1492,0.8665,11.1492l3.2,5.1067l5.3717,2.261l4.8387-11.8214l1.4179,2.0757 c0,0,0.9846,0.6627,2.1563-6.3347c0.7199,0.4804,1.7114,1.1294,2.1231,1.8907c0.9846,1.5203,0.2794-7.1338,0.2794-7.1338 l-1.1717-3.1771l5.576-0.7436l-1.9231-6.0785c-1.5926-3.1579-3.5919-6.0936-5.9471-8.7322 c-3.7812-4.7068-12.7212-8.9368-12.7212-8.9368l-5.6537,9.9559l-3.9533,3.7736l0.0855,3.9396l-4.7557,1.1207L22.4615,37.146z"
    })));
  }
};

export default Iceberg;