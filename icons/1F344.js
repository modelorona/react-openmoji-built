import React from 'react';

const Mushroom = ({
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
      fill: "#D0CFCE",
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.1244,42.9616v11.2545c0,0-0.1171,1.9012,2.5264,1.9012s11.7694,0,11.7694,0s2.2545,0.5562,2.2545-2.4086 c0-1.6448,0-6.6322,0-10.7472"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.1244,46.7322v8.0389c0,0-0.1171,1.358,2.5264,1.358s11.7694,0,11.7694,0s2.2545,0.3973,2.2545-1.7204 c0-1.1748,0-4.7373,0-7.6766"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584 z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      stroke: "none",
      d: "M60.996,33.9591c0,8.8374-11.194,9.0023-25.0039,9.0023c33.1736-7.5962,0-32.0031,0-32.0031 C49.802,10.9583,60.996,25.1217,60.996,33.9591z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.7421,15.3869c0,0,4.6919,14.1211-10.9254,14.0122C11.8167,29.399,14.8217,20.3354,22.7421,15.3869z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.996",
      cy: "30.1489",
      rx: "8.0208",
      ry: "6.1759",
      transform: "matrix(0.9993 -0.0382 0.0382 0.9993 -1.1252 1.3968)",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.1551,15.3869c0,0-4.6919,14.1211,10.9254,14.0122C60.0804,29.399,57.0754,20.3354,49.1551,15.3869z"
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
      d: "M27.1244,46.7322v8.0389c0,0-0.1171,1.358,2.5264,1.358s11.7694,0,11.7694,0s2.2545,0.3973,2.2545-1.7204 c0-1.1748,0-4.7373,0-7.6766"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.7421,15.3869c0,0,4.6919,14.1211-10.9254,14.0122C11.8167,29.399,14.8217,20.3354,22.7421,15.3869z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.996",
      cy: "30.1489",
      rx: "8.0208",
      ry: "6.1759",
      transform: "matrix(0.9993 -0.0382 0.0382 0.9993 -1.1252 1.3968)",
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
      d: "M49.1551,15.3869c0,0-4.6919,14.1211,10.9254,14.0122C60.0804,29.399,57.0754,20.3354,49.1551,15.3869z"
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
      d: "M27.1244,46.7322v8.0389c0,0-0.1171,1.358,2.5264,1.358s11.7694,0,11.7694,0s2.2545,0.3973,2.2545-1.7204 c0-1.1748,0-4.7373,0-7.6766"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.996,33.9584c0,8.8366-11.1929,9-25,9s-25-0.1634-25-9s11.1929-23,25-23S60.996,25.1218,60.996,33.9584z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.7421,15.3869c0,0,4.6919,14.1211-10.9254,14.0122C11.8167,29.399,14.8217,20.3354,22.7421,15.3869z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.996",
      cy: "30.1489",
      rx: "8.0208",
      ry: "6.1759",
      transform: "matrix(0.9993 -0.0382 0.0382 0.9993 -1.1252 1.3968)",
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
      d: "M49.1551,15.3869c0,0-4.6919,14.1211,10.9254,14.0122C60.0804,29.399,57.0754,20.3354,49.1551,15.3869z"
    })));
  }
};

export default Mushroom;