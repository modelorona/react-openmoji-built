import React from 'react';

const CardFileBox = ({
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
      fill: "#d0cfce",
      stroke: "none",
      d: "M11.8799,59.8837h47.6538V42.6789H11.8799V59.8837z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M59.6815,21.8342L11.9367,21.738v18.5113l5.2011-0.2299c1.2388-0.8432,0.42-5.6695,0.4861-5.803 c-0.0022-0.8421-0.0826-4.8571,0.0607-5.1954c0.2868-0.6767,9.9393-0.0789,9.935-0.0607l1.3976,4.132 c0.1213-0.1646,10.0877-1.8389,10.0877-1.8389c0.1342,0,2.8583,5.5594,2.8583,5.5594c0.0507-0.055,12.5417,2.7334,12.5088,2.8326 l1.7071,0.1676l3.4293,0.0551L59.6815,21.8342z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M55.7592,38.8215c-0.0253,0.0764-3.9509-0.8774-6.2834-0.8984 c-9.4883-0.0856-32.1134,0.8027-32.5203,0.6987c-0.4173-0.1066-1.8096,0.2996-1.8837,0.1519 c0.0041,0.5459-0.1171,1.5355-0.0912,2.4913l40.7035,0.0372L55.7592,38.8215z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      stroke: "none",
      d: "M16.3455,38.8196c-0.0255-0.0511-0.04-0.1049-0.0566-0.1605l-4.2857,0.0538l-0.0912,2.9775l4.4966,0.4861 C16.3835,41.249,16.3514,39.3873,16.3455,38.8196z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M16.4982,33.8659c0.0329-0.0362,0.0706-0.0638,0.1084-0.0949c0.0544-0.0457,0.1121-0.0849,0.1754-0.1182 c0.0358-0.0183,0.0694-0.0365,0.1076-0.0505c0.1075-0.0406,0.2206-0.0691,0.3428-0.0691h0.1123h11.1739v-0.2734 c0-0.4477,0.114-0.8656,0.3001-1.2423c0-0.0001,0-0.0002,0-0.0002c0.0117-0.0232,0.0245-0.0456,0.0371-0.0681 c0.0445-0.0842,0.0837-0.1716,0.1361-0.2505c-0.0271,0.042-0.0536,0.0843-0.0837,0.1332 c-0.0051,0.0132-0.0141,0.0261-0.0164,0.0394c-0.0001,0.0005-0.007,0.0009-0.0084,0.0014 c-0.0418,0.0694-2.2119-1.3979-2.2261-1.3609c0,0-4.0156-1.191-8.5344,0.2555c-0.1652,0.0529-1.2189,1.2375-1.361,1.16h-0.0001 c-0.017-0.0093-0.0292-0.021-0.0454-0.0306c-0.1397-0.0865-0.2534-0.2014-0.336-0.3438c-0.0136-0.0231-0.0329-0.0417-0.0445-0.066 v2.6199c0.0001-0.0004,0.0004-0.0006,0.0006-0.001C16.3786,34.0178,16.434,33.9378,16.4982,33.8659z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M16.6149,37.6112c0.0517-0.0429,0.1062-0.0801,0.1659-0.1119c0.0369-0.019,0.0718-0.0374,0.1113-0.0518 c0.1066-0.0403,0.2189-0.0686,0.3403-0.0686h0.2041h23.9307v-0.1523c0-0.1708,0.0197-0.3366,0.0536-0.4977 c0.021-0.1034,0.0577-0.2005,0.091-0.2993c0.0171-0.049,0.0289-0.1,0.049-0.1477c0.0535-0.1308,0.1208-0.2536,0.1946-0.3736 c0.0055-0.0087,0.0099-0.0179,0.0154-0.0266c0.0819-0.1296,0.1753-0.2499,0.2787-0.3642c0.0016-0.0027,0.0083-0.013,0.0083-0.013 l-1.3591-1.9881l-8.3805,0.556l-2.8078,1.4664c0.1137,0,0.2171-0.0288,0.3161-0.0677c-0.0248,0.0081-0.0521,0.0095-0.0778,0.0157 c-0.0758,0.0186-0.1484,0.0464-0.2301,0.0464l0,0H17.3447h-0.1123c-0.1203,0-0.2314-0.0281-0.3369-0.068 c-0.041-0.0148-0.0776-0.0334-0.1158-0.0532c-0.0545-0.0293-0.1043-0.0637-0.1521-0.1025 c-0.1126-0.0878-0.2056-0.1933-0.2721-0.3209c-0.0002-0.0003-0.0005-0.0005-0.0006-0.0007 c0.0089,0.7905-0.0067,2.1071-0.0116,2.9536c0.0411-0.0833,0.0932-0.1601,0.1542-0.2289 C16.5328,37.6737,16.5739,37.6442,16.6149,37.6112z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28.5893",
      y: "47.4491",
      width: "14.2207",
      height: "6.431",
      fill: "#9B9B9A",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M28.8647,28.1003c-0.0117-0.0149-0.0222-0.0299-0.0347-0.0448c-0.0172-0.0206-0.0414-0.0381-0.061-0.0578 c0.0157,0.0144,0.0284,0.0307,0.0428,0.0459C28.8298,28.0625,28.8485,28.0804,28.8647,28.1003z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M28.926,29.303c0.0738-0.1033,0.1195-0.2172,0.1493-0.3332v-0.0225 c-0.0289,0.1242-0.0805,0.2453-0.1593,0.3554c-0.1606,0.2242-0.3967,0.3621-0.649,0.404 C28.523,29.6667,28.7632,29.53,28.926,29.303z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M54.1422,39.3788c-0.4698,0,0.4545-2.0977,0.4545-2.0977c0-0.3555-1.1415-1.7131-1.5907-1.7131 l-8.8721,0.0547c-0.2244,0-1.4766,1.4823-1.4766,1.6584l-0.9439,1.1013c0,0.4518-0.2533,0.5925-0.6643,0.7167l1.5575,0.2707 C42.6066,39.3698,54.1804,39.3788,54.1422,39.3788z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      stroke: "none",
      d: "M42.0212,35.5046l-0.0547-3.1313c-0.0071-0.0147-0.0197-0.0325-0.0276-0.0476 c0.0121,0.0872-1.1648,0.308-1.4079-0.1871c-0.1407-0.2871-0.8955-0.7655-1.2158-0.7655l-7.8576-0.135 c-0.457,0-1.6886,0.7136-1.6886,1.1707l-0.4953,2.1614c0,0.5527-1.1133,0.9682-1.6661,0.9682L42.0212,35.5046z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3f3f3f",
      stroke: "none",
      points: "59.4114,38.6632 54.9403,38.6897 54.9626,41.9304 59.3651,41.8493"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.7418",
      y: "15.1127",
      width: "47.9158",
      height: "6.5216",
      fill: "#d0cfce",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M17.6263,31.979c0.0202-0.0089,0.0346-0.0261,0.0541-0.0364 C17.6608,31.9526,17.6466,31.9703,17.6263,31.979z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M19.0715,29.3801h7.9687c-0.0004,0-0.0007-0.0002-0.0011-0.0002h-7.9776 c-0.1963,0-0.3694,0.0785-0.5116,0.193C18.695,29.4578,18.8726,29.3801,19.0715,29.3801z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M18.4786,29.621c-0.0215,0.0213-0.0326,0.0506-0.0516,0.0741 C18.4462,29.6718,18.4569,29.6421,18.4786,29.621z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M29.0717,31.5764l0.0136-2.6288c-0.0289,0.1241-0.9471-0.3725-1.3982-0.6928 c-0.1407-0.1006-8.566-0.0374-8.566-0.0374c-0.4571,0-2.0761,2.0573-2.0761,2.0573s0.6088,1.7768,0.0561,1.7768 c-0.4336,0,11.6885-0.0069,11.6885-0.0069C28.8323,31.9337,29.0717,31.5764,29.0717,31.5764z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "11.7512,21.6194 11.7631,42.3123 59.7488,42.3123 59.7369,21.6194"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.7263",
      y: "15.0026",
      width: "48.0106",
      height: "6.6168",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.7631",
      y: "42.3123",
      width: "47.9857",
      height: "17.3616",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28.6098",
      y: "47.0607",
      width: "14.4258",
      height: "6.8479",
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
      d: "M28.1027,28.7207c-0.2997-0.2145-0.6669-0.3408-1.0635-0.3408h-7.9776c-1.0102,0-1.829,0.8189-1.829,1.829v0.8521"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9698,32.4574c-0.2972-0.6082-0.9219-1.0271-1.6444-1.0271h-7.9775c-1.0101,0-1.8291,0.8189-1.8291,1.829v1.2736H17.2326"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.0031,38.3785v-1.1524c0-0.914-0.8188-1.655-1.829-1.655h-7.9776c-1.0101,0-1.829,0.741-1.829,1.655v1.1524H17.2326"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "11.7512,21.6194 11.7631,42.3123 59.7488,42.3123 59.7369,21.6194"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.7263",
      y: "15.0026",
      width: "48.0106",
      height: "6.6168",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11.7631",
      y: "42.3123",
      width: "47.9857",
      height: "17.3616",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "28.6098",
      y: "47.0607",
      width: "14.4258",
      height: "6.8479",
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
      d: "M28.1027,28.7207c-0.2997-0.2145-0.6669-0.3408-1.0635-0.3408h-7.9776c-1.0102,0-1.829,0.8189-1.829,1.829v0.8521"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9698,32.4574c-0.2972-0.6082-0.9219-1.0271-1.6444-1.0271h-7.9775c-1.0101,0-1.8291,0.8189-1.8291,1.829v1.2736H17.2326"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.0031,38.3785v-1.1524c0-0.914-0.8188-1.655-1.829-1.655h-7.9776c-1.0101,0-1.829,0.741-1.829,1.655v1.1524H17.2326"
    })));
  }
};

export default CardFileBox;