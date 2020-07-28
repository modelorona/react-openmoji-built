import React from 'react';

const Shortcake = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M58,17.0567l-17.7512,2.7278l-1.3265,1.2081L7,26c-1.1045,0-2,0.8965-2,2v12h1c2.7617,0,5-2.2383,5-4.999 C11,32.2393,13.2383,30,16,30c2.7617,0,5,2.2393,5,5.001C21,37.7617,23.2383,40,26,40c2.7617,0,5-2.2383,5-4.999 C31,32.2393,33.2383,30,36,30c2.7617,0,5,2.2393,5,5.001C41,37.7617,43.2383,40,46,40c2.7617,0,5-2.2383,5-4.999 C51,32.2393,53.2383,30,56,30c2.7617,0,5,2.2393,5,5.001C61,37.7617,63.2383,40,66,40h1V28c0-4.7112-3.2599-8.6632-7.647-9.7215 c-0.4344-0.1048-0.8799-1.1245-1.3344-1.1705"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "18.0005",
      r: "5",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M67,39v20c0,1.1055-0.8955,2-2,2H7c-1.1045,0-2-0.8945-2-2V39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M67,40h-1c-2.7607,0-5-2.2383-5-5s-2.2393-5-5-5c-2.7607,0-5,2.2383-5,5s-2.2393,5-5,5 c-2.7607,0-5-2.2383-5-5s-2.2393-5-5-5c-2.7607,0-5,2.2383-5,5s-2.2393,5-5,5c-2.7607,0-5-2.2383-5-5s-2.2393-5-5-5 c-2.7607,0-5,2.2383-5,5s-2.2393,5-5,5H5"
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
      d: "M67,28v31c0,1.1055-0.8955,2-2,2H7c-1.1045,0-2-0.8945-2-2V28c0-1.1035,0.8955-2,2-2l33.9961-5.4385"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.0186,18.0513C63.0625,18.5615,67,22.8223,67,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,40h1c2.7617,0,5-2.2383,5-4.999C11,32.2393,13.2383,30,16,30c2.7617,0,5,2.2393,5,5.001C21,37.7617,23.2383,40,26,40 c2.7617,0,5-2.2383,5-4.999C31,32.2393,33.2383,30,36,30c2.7617,0,5,2.2393,5,5.001C41,37.7617,43.2383,40,46,40 c2.7617,0,5-2.2383,5-4.999C51,32.2393,53.2383,30,56,30c2.7617,0,5,2.2393,5,5.001C61,37.7617,63.2383,40,66,40h1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "48",
      y2: "48",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "18.0005",
      r: "5",
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
      d: "M49.5,16c0-5.5229,4.4766-10,10-10"
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
      d: "M67,28v31c0,1.1055-0.8955,2-2,2H7c-1.1045,0-2-0.8945-2-2V28c0-1.1035,0.8955-2,2-2l33.9961-5.4385"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.0186,18.0513C63.0625,18.5615,67,22.8223,67,28"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,40h1c2.7617,0,5-2.2383,5-4.999C11,32.2393,13.2383,30,16,30c2.7617,0,5,2.2393,5,5.001C21,37.7617,23.2383,40,26,40 c2.7617,0,5-2.2383,5-4.999C31,32.2393,33.2383,30,36,30c2.7617,0,5,2.2393,5,5.001C41,37.7617,43.2383,40,46,40 c2.7617,0,5-2.2383,5-4.999C51,32.2393,53.2383,30,56,30c2.7617,0,5,2.2393,5,5.001C61,37.7617,63.2383,40,66,40h1"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "48",
      y2: "48",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      x2: "67",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "18.0005",
      r: "5",
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
      d: "M49.5,16c0-5.5229,4.4766-10,10-10"
    })));
  }
};

export default Shortcake;