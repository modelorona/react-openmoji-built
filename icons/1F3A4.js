import React from 'react';

const Microphone = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M39.4008,29.5206c-2.6372-2.2167-2.5537-3.5214-2.5514-3.5238c-0.1082-0.127-1.757-1.6761-1.776-2.1562 c-0.0031-0.029-0.0066-0.0621-0.0089-0.0814l-2.5567,3.2828c0.3242-0.4463-6.3214,10.4061-6.3214,10.4061L14.393,53.6859 l3.3726,3.3726c0,0,24.4145-21.2772,24.0619-20.8977l3.4038-3.3554C45.1242,32.8086,42.0381,31.7374,39.4008,29.5206z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M54.6201,30.1797c-0.1982,0.2256-0.4746,0.3408-0.7519,0.3408c-0.2344,0-0.4698-0.082-0.6592-0.248 L36.5898,15.6924c-0.4113-0.361-0.4536-0.9837-0.0998-1.3993c-0.0028,0.0032-0.0068,0.0044-0.0095,0.0077l-0.6543,0.7866 c-0.3467,0.417-0.2989,1.0337,0.1093,1.3911l16.6192,14.5811c0.1826,0.1601,0.417,0.248,0.6592,0.248 c0.0263,0,0.0527-0.001,0.0781-0.0029c0.2695-0.0215,0.5185-0.1504,0.6904-0.3574l0.6543-0.7871 c0.0397-0.0477,0.0553-0.1048,0.0847-0.157C54.688,30.0624,54.6668,30.1265,54.6201,30.1797z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M55.2582,25.541c-1.1619,3.3997-5.2831,5.5623-5.2831,5.5623c-1.9265,1.0963-4.0318,1.6194-6.0378,1.5188 c0,0-0.3476-0.0805-0.9137-0.2716c-1.8272-0.6337-5.8491-2.4844-7.2494-6.8799c-0.3774-2.0016-0.1589-4.1843,0.6455-6.2764 c1.0228-4.2647,4.9951-6.2563,4.9951-6.2563c1.4102-0.9556,2.9395-1.5892,4.4787-1.8709c2.8203-0.5331,5.6605,0.0805,7.7757,1.9715 C56.9961,15.9856,57.5125,21.1254,55.2582,25.541z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M51.4746,25.541c-1.1718,3.3997-5.2831,5.5623-5.2831,5.5623c-1.0228,0.5733-2.0854,0.9958-3.1679,1.2472 c-1.8272-0.6337-5.8491-2.4844-7.2494-6.8799c-0.3774-2.0016-0.1589-4.1843,0.6455-6.2764 c1.0228-4.2647,4.9951-6.2563,4.9951-6.2563c1.4102-0.9556,2.9395-1.5892,4.4787-1.8709c1.4598,0.2917,2.8303,0.9455,3.9921,1.9715 C53.2026,15.9856,53.719,21.1254,51.4746,25.541z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "30.7498",
      x2: "34.7704",
      y1: "38.9407",
      y2: "34.3225",
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
      d: "M49.514,30.4299c-1.8043,1.0136-3.7741,1.4947-5.6491,1.4045"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5036,13.6508c3.7376-2.4981,8.4052-2.5922,11.4654,0.0926c3.1081,2.7269,3.5898,7.4706,1.4886,11.5445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.235,25.2234c-0.3538-1.8443-0.1517-3.8622,0.602-5.7893"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.3173,27.63 14.393,53.6859 17.7656,57.0585 41.1053,35.4865"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.4968",
      x2: "12.4507",
      y1: "56.0006",
      y2: "59.0746",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.8679",
      x2: "37.249",
      y1: "29.5206",
      y2: "14.9404",
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "30.7498",
      x2: "34.7704",
      y1: "38.9407",
      y2: "34.3225",
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
      d: "M49.514,30.4299c-1.8043,1.0136-3.7741,1.4947-5.6491,1.4045"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5036,13.6508c3.7376-2.4981,8.4052-2.5922,11.4654,0.0926c3.1081,2.7269,3.5898,7.4706,1.4886,11.5445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.235,25.2234c-0.3538-1.8443-0.1517-3.8622,0.602-5.7893"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "33.3173,27.63 14.393,53.6859 17.7656,57.0585 41.1053,35.4865"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.4968",
      x2: "12.4507",
      y1: "56.0006",
      y2: "59.0746",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.8679",
      x2: "37.249",
      y1: "29.5206",
      y2: "14.9404",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Microphone;