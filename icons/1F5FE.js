import React from 'react';

const MapOfJapan = ({
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
      fill: "#92d3f5",
      d: "M11.0112,11H61a0,0,0,0,1,0,0V60.7672A.2328.2328,0,0,1,60.7672,61H11.2328A.2328.2328,0,0,1,11,60.7672V11.0112A.0112.0112,0,0,1,11.0112,11Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "54.462 47.429 54.462 52.703 56.529 52.703 54.462 47.429"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "54.462 57.485 54.462 52.703 56.529 52.703 54.462 57.485"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#ea5a47",
      points: "52.394 52.703 54.462 47.429 54.462 52.703"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#fff",
      points: "52.394 52.703 54.462 57.485 54.462 52.703"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M25.06,50.7014c.2378.4745.6741.4215.85.85.1685.41-.0872.8106,0,.85.1671.0754.7026-1.5731,1.7-1.7.34-.0433.4736.1237.85,0a1.3842,1.3842,0,0,0,.85-.85c.054-.1549.2046-.5869,0-.85-.3079-.3959-1.2364-.1734-1.7,0-.8912.3334-1.0041.8366-1.7.85-.4182.0081-.6735-.168-.85,0C24.8793,50.0233,24.92,50.4231,25.06,50.7014Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M22.51,48.1514c-.0742.2542-.1926.66,0,.85.2955.2915,1.0947-.1489,2.55-.85a20.1665,20.1665,0,0,1,4.25-1.7c.0962-.0222,2.3236-.5251,2.55,0,.15.3478-.7579.7277-.85,1.7a1.7056,1.7056,0,0,0,.85,1.7,1.4454,1.4454,0,0,0,.85,0,4.0475,4.0475,0,0,0,1.7-.85c.5846-.4108.8764-.6208.85-.85-.0372-.3234-.6014-.3173-.85-.85a.9048.9048,0,0,1,0-.85c.2854-.4,1.1491-.3473,1.7,0,.527.3323.4446.7307.85.85.664.1955,1.5334-.6819,1.7-.85.4853-.49.5823-.8665.85-.85.39.024.48.84.85.85.3156.0085.341-.5822.85-.85.6114-.3217,1.1219.2427,1.7,0,.3436-.1442.4888-.48.85-1.7a18.23,18.23,0,0,0,.85-3.4c.0643-1.4517-.3334-1.6634,0-2.55.2777-.7383.6585-.8711.85-1.7.1762-.7627-.0978-.86,0-1.7.16-1.3764.948-1.5718.85-2.55-.0527-.5254-.2754-.4231-.85-1.7-.518-1.1509-.5077-1.6132-.85-1.7-.5666-.1437-1.0627,1.0043-1.7.85-.48-.1161-.4969-.8388-.85-.85-.3916-.0125-.8927.86-.85,1.7.04.7889.5367,1.1119.85,1.7,1.1071,2.0785-1.2306,5.3028-1.7,5.95-1.35,1.862-2.8381,2.5466-3.4,2.55-.6136.0038-.85,0-.85,0-.7148-.0115-.7365-.0406-.85,0-.4111.147-.4509.6459-.85,1.7a4.9162,4.9162,0,0,1-.85,1.7,3.2542,3.2542,0,0,1-1.7.85c-1.803.4419-2.3758-.25-4.25,0a7.4207,7.4207,0,0,0-2.55.85A4.69,4.69,0,0,0,22.51,48.1514Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M44.61,26.0508c-.3615.2868-1.6219,1.2866-2.55.85-.83-.39-.9886-1.7377-.85-2.55a3.993,3.993,0,0,1,.85-1.7c.3369-.4627.514-.706.85-.85.7488-.3211,1.3011.2735,1.7,0,.3139-.2152.2389-.766,0-2.55-.2412-1.802-.3545-2.717,0-3.4.142-.2735.4316-.8315.85-.85.9168-.0407.9017,2.5766,2.55,3.4,1.6418.82,3.6354-.7878,4.25,0,.5091.6524-.5033,2.21,0,2.55.2686.1814.6871-.175.85,0,.207.2224-.1359,1.1561-.85,1.7-.97.7385-1.8176.1452-2.55.85-.6625.6374-.3136,1.4543-.85,1.7-.7227.3311-1.5085-1.0816-2.55-.85C45.6126,24.5059,45.6776,25.2042,44.61,26.0508Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M16.9847,51.1265a1.41,1.41,0,0,0,.85,1.7c.3625.1093.5133-.1133.85,0a1.6877,1.6877,0,0,1,.85,1.7c-.12,1.1373-1.4024,1.4564-1.2751,2.125.0978.5133.9686.9271,1.7.85,1.6614-.175,2.4016-2.8612,2.55-3.4.2509-.91.5153-1.87,0-2.55-.4292-.5667-1.1944-.6689-2.55-.85a6.7983,6.7983,0,0,0-1.7,0C17.5388,50.7906,17.1536,50.8383,16.9847,51.1265Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10.5",
      y: "10.5",
      width: "51",
      height: "51",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M25.06,50.7014c.2378.4745.6741.4215.85.85.1685.41-.0872.8106,0,.85.1671.0754.7026-1.5731,1.7-1.7.34-.0433.4736.1237.85,0a1.3842,1.3842,0,0,0,.85-.85c.054-.1549.2046-.5869,0-.85-.3079-.3959-1.2364-.1734-1.7,0-.8912.3334-1.0041.8366-1.7.85-.4182.0081-.6735-.168-.85,0C24.8793,50.0233,24.92,50.4231,25.06,50.7014Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M22.51,48.1514c-.0742.2542-.1926.66,0,.85.2955.2915,1.0947-.1489,2.55-.85a20.1665,20.1665,0,0,1,4.25-1.7c.0962-.0222,2.3236-.5251,2.55,0,.15.3478-.7579.7277-.85,1.7a1.7056,1.7056,0,0,0,.85,1.7,1.4454,1.4454,0,0,0,.85,0,4.0475,4.0475,0,0,0,1.7-.85c.5846-.4108.8764-.6208.85-.85-.0372-.3234-.6014-.3173-.85-.85a.9048.9048,0,0,1,0-.85c.2854-.4,1.1491-.3473,1.7,0,.527.3323.4446.7307.85.85.664.1955,1.5334-.6819,1.7-.85.4853-.49.5823-.8665.85-.85.39.024.48.84.85.85.3156.0085.341-.5822.85-.85.6114-.3217,1.1219.2427,1.7,0,.3436-.1442.4888-.48.85-1.7a18.23,18.23,0,0,0,.85-3.4c.0643-1.4517-.3334-1.6634,0-2.55.2777-.7383.6585-.8711.85-1.7.1762-.7627-.0978-.86,0-1.7.16-1.3764.948-1.5718.85-2.55-.0527-.5254-.2754-.4231-.85-1.7-.518-1.1509-.5077-1.6132-.85-1.7-.5666-.1437-1.0627,1.0043-1.7.85-.48-.1161-.4969-.8388-.85-.85-.3916-.0125-.8927.86-.85,1.7.04.7889.5367,1.1119.85,1.7,1.1071,2.0785-1.2306,5.3028-1.7,5.95-1.35,1.862-2.8381,2.5466-3.4,2.55-.6136.0038-.85,0-.85,0-.7148-.0115-.7365-.0406-.85,0-.4111.147-.4509.6459-.85,1.7a4.9162,4.9162,0,0,1-.85,1.7,3.2542,3.2542,0,0,1-1.7.85c-1.803.4419-2.3758-.25-4.25,0a7.4207,7.4207,0,0,0-2.55.85A4.69,4.69,0,0,0,22.51,48.1514Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M44.61,26.0508c-.3615.2868-1.6219,1.2866-2.55.85-.83-.39-.9886-1.7377-.85-2.55a3.993,3.993,0,0,1,.85-1.7c.3369-.4627.514-.706.85-.85.7488-.3211,1.3011.2735,1.7,0,.3139-.2152.2389-.766,0-2.55-.2412-1.802-.3545-2.717,0-3.4.142-.2735.4316-.8315.85-.85.9168-.0407.9017,2.5766,2.55,3.4,1.6418.82,3.6354-.7878,4.25,0,.5091.6524-.5033,2.21,0,2.55.2686.1814.6871-.175.85,0,.207.2224-.1359,1.1561-.85,1.7-.97.7385-1.8176.1452-2.55.85-.6625.6374-.3136,1.4543-.85,1.7-.7227.3311-1.5085-1.0816-2.55-.85C45.6126,24.5059,45.6776,25.2042,44.61,26.0508Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M16.9847,51.1265a1.41,1.41,0,0,0,.85,1.7c.3625.1093.5133-.1133.85,0a1.6877,1.6877,0,0,1,.85,1.7c-.12,1.1373-1.4024,1.4564-1.2751,2.125.0978.5133.9686.9271,1.7.85,1.6614-.175,2.4016-2.8612,2.55-3.4.2509-.91.5153-1.87,0-2.55-.4292-.5667-1.1944-.6689-2.55-.85a6.7983,6.7983,0,0,0-1.7,0C17.5388,50.7906,17.1536,50.8383,16.9847,51.1265Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "0.7934",
      points: "52.014 52.744 54.5 47.429 56.91 52.744 54.5 57.5 52.014 52.744"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "10.5",
      y: "10.5",
      width: "51",
      height: "51",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M25.06,50.7014c.2378.4745.6741.4215.85.85.1685.41-.0872.8106,0,.85.1671.0754.7026-1.5731,1.7-1.7.34-.0433.4736.1237.85,0a1.3842,1.3842,0,0,0,.85-.85c.054-.1549.2046-.5869,0-.85-.3079-.3959-1.2364-.1734-1.7,0-.8912.3334-1.0041.8366-1.7.85-.4182.0081-.6735-.168-.85,0C24.8793,50.0233,24.92,50.4231,25.06,50.7014Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M22.51,48.1514c-.0742.2542-.1926.66,0,.85.2955.2915,1.0947-.1489,2.55-.85a20.1665,20.1665,0,0,1,4.25-1.7c.0962-.0222,2.3236-.5251,2.55,0,.15.3478-.7579.7277-.85,1.7a1.7056,1.7056,0,0,0,.85,1.7,1.4454,1.4454,0,0,0,.85,0,4.0475,4.0475,0,0,0,1.7-.85c.5846-.4108.8764-.6208.85-.85-.0372-.3234-.6014-.3173-.85-.85a.9048.9048,0,0,1,0-.85c.2854-.4,1.1491-.3473,1.7,0,.527.3323.4446.7307.85.85.664.1955,1.5334-.6819,1.7-.85.4853-.49.5823-.8665.85-.85.39.024.48.84.85.85.3156.0085.341-.5822.85-.85.6114-.3217,1.1219.2427,1.7,0,.3436-.1442.4888-.48.85-1.7a18.23,18.23,0,0,0,.85-3.4c.0643-1.4517-.3334-1.6634,0-2.55.2777-.7383.6585-.8711.85-1.7.1762-.7627-.0978-.86,0-1.7.16-1.3764.948-1.5718.85-2.55-.0527-.5254-.2754-.4231-.85-1.7-.518-1.1509-.5077-1.6132-.85-1.7-.5666-.1437-1.0627,1.0043-1.7.85-.48-.1161-.4969-.8388-.85-.85-.3916-.0125-.8927.86-.85,1.7.04.7889.5367,1.1119.85,1.7,1.1071,2.0785-1.2306,5.3028-1.7,5.95-1.35,1.862-2.8381,2.5466-3.4,2.55-.6136.0038-.85,0-.85,0-.7148-.0115-.7365-.0406-.85,0-.4111.147-.4509.6459-.85,1.7a4.9162,4.9162,0,0,1-.85,1.7,3.2542,3.2542,0,0,1-1.7.85c-1.803.4419-2.3758-.25-4.25,0a7.4207,7.4207,0,0,0-2.55.85A4.69,4.69,0,0,0,22.51,48.1514Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M44.61,26.0508c-.3615.2868-1.6219,1.2866-2.55.85-.83-.39-.9886-1.7377-.85-2.55a3.993,3.993,0,0,1,.85-1.7c.3369-.4627.514-.706.85-.85.7488-.3211,1.3011.2735,1.7,0,.3139-.2152.2389-.766,0-2.55-.2412-1.802-.3545-2.717,0-3.4.142-.2735.4316-.8315.85-.85.9168-.0407.9017,2.5766,2.55,3.4,1.6418.82,3.6354-.7878,4.25,0,.5091.6524-.5033,2.21,0,2.55.2686.1814.6871-.175.85,0,.207.2224-.1359,1.1561-.85,1.7-.97.7385-1.8176.1452-2.55.85-.6625.6374-.3136,1.4543-.85,1.7-.7227.3311-1.5085-1.0816-2.55-.85C45.6126,24.5059,45.6776,25.2042,44.61,26.0508Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      d: "M16.9847,51.1265a1.41,1.41,0,0,0,.85,1.7c.3625.1093.5133-.1133.85,0a1.6877,1.6877,0,0,1,.85,1.7c-.12,1.1373-1.4024,1.4564-1.2751,2.125.0978.5133.9686.9271,1.7.85,1.6614-.175,2.4016-2.8612,2.55-3.4.2509-.91.5153-1.87,0-2.55-.4292-.5667-1.1944-.6689-2.55-.85a6.7983,6.7983,0,0,0-1.7,0C17.5388,50.7906,17.1536,50.8383,16.9847,51.1265Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "0.7934",
      points: "52.014 52.744 54.5 47.429 56.91 52.744 54.5 57.5 52.014 52.744"
    })));
  }
};

export default MapOfJapan;