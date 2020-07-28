import React from 'react';

const WomanMage = ({
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
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M41.4163,13.561c-0.0928-0.1-2.4082-2.6547-7.2432-2.6547c-6.2,0-11.4413,3.3818-12.743,8.226 c-0.534,2.0122,0.2752,4.1001,0.4355,6.1758c0.2039,2.019-0.0563,4.0578-0.7607,5.9609c-0.2481,0.7561-0.6269,1.4627-1.1192,2.0879 c-3.7725,4.42-0.9237,14.1072-1.1159,13.8144c1.1226,1.0189,1.288,2.125,2.5821,2.9149c1.5566-1.1839,3.4138-1.908,5.361-2.09 c6.209,5.0127,12.4951,5.0127,18.7,0c1.5145,0.1121,2.9697,0.6354,4.2087,1.5136c1.0534-0.6931,2.0475-1.4724,2.972-2.33 c1.1884-0.7148,4.6164-8.3882,1.883-13.1314c-0.4386-0.8534-0.8251-1.7326-1.1573-2.6328 c-0.5702-1.1775-1.0541-2.3948-1.4479-3.6424c-0.6-2.0685-0.1322-2.4675-0.6672-3.7278c-0.5729-1.2495-3.0276-2.1732-4.2363-2.8278"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M25.9065,25.7998C25.3022,27.3152,25,28.9565,25,30.9c0,8,5,14,11,14s11-6,11-14 c0-1.9435-0.3022-3.5848-0.9065-5.1002"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M17,60.949v-4c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M45.6624,60.949v-4.0122c-0.1404-2.631-1.5943-5.2619-3.6479-6.9125 c0.9952-0.5542,1.9904-1.246,2.9855-2.0753c4.9941,0,10,4.0059,10,9v4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M14,25.685h44l-11.851-4.85c-0.2182-4.2512-2.23-11.3493-10.9108-11.5669 c-12.97,0-15.2347,13.47-15.2347,13.47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M20.0701,31.9327c-0.72,1.87-1.66,3.68-2.28,5.55l-1.15-4.23c-0.1404-0.6378-0.0593-1.3045,0.23-1.89 l1.59-5.68h2.29C21.0011,27.7906,20.7685,29.928,20.0701,31.9327z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M53.3683,40.539c-2.5437-1.0747-3.7346-4.008-2.6599-6.5517s4.008-3.7346,6.5517-2.6599 s3.7346,4.008,2.6599,6.5517c-0.4479,1.0601-1.2477,1.9332-2.2646,2.4721"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M55.3145,32.4717c-0.8786,0.137-1.6948,0.5381-2.34,1.15c1.5407-0.3467,3.1393-0.3467,4.68,0 C57.0093,33.0098,56.1931,32.6087,55.3145,32.4717z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#A57939",
      points: "57.314,61 57.314,40.539 53.314,40.539 53.314,61"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.3683,40.59 c-2.5437-1.0747-3.7346-4.008-2.6599-6.5517s4.008-3.7346,6.5517-2.6599s3.7346,4.008,2.6599,6.5517 c-0.4479,1.0601-1.2477,1.9332-2.2646,2.4721"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "57.314,60.051 57.314,40.605 53.314,40.605 53.314,60.051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c3.2121,0,6.4292,1.6572,8.316,4.1687"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.0858,25.8L16.9,31.4 c-0.3115,0.5831-0.3832,1.2648-0.2,1.9l1.425,5.4454"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.9,17.5 c-0.4245,1.0967-0.7263,2.2369-0.9,3.4l0,0l-12,4.9h44l-11.9-4.9c-0.2-4.3-2.2-11.3-10.9-11.6C22.2,9.3,20,22.8,20,22.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7171,25.8 c0.1484,1.2016,0.3347,2.1097,0.587,2.9501"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.6646,46.6 c-3.7-5.9-0.6-10.1,1.2-14.7c0.8867-2.3275,0.7292-4.0715,0.6678-6.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S42,28.8,42,29.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.9c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33.1,27.9,34,28.8,34,29.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.9065,25.7998 C25.3022,27.3152,25,28.9565,25,30.9c0,8,5,14,11,14s11-6,11-14c0-1.9435-0.3022-3.5848-0.9065-5.1002"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33,38.1c1.9,1,4.1,1,6,0"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.3683,40.59 c-2.5437-1.0747-3.7346-4.008-2.6599-6.5517s4.008-3.7346,6.5517-2.6599s3.7346,4.008,2.6599,6.5517 c-0.4479,1.0601-1.2477,1.9332-2.2646,2.4721"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "57.314,60.051 57.314,40.605 53.314,40.605 53.314,60.051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c3.2121,0,6.4292,1.6572,8.316,4.1687"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.0858,25.8L16.9,31.4 c-0.3115,0.5831-0.3832,1.2648-0.2,1.9l1.425,5.4454"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.9,17.5 c-0.4245,1.0967-0.7263,2.2369-0.9,3.4l0,0l-12,4.9h44l-11.9-4.9c-0.2-4.3-2.2-11.3-10.9-11.6C22.2,9.3,20,22.8,20,22.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7171,25.8 c0.1484,1.2016,0.3347,2.1097,0.587,2.9501"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.6646,46.6 c-3.7-5.9-0.6-10.1,1.2-14.7c0.8867-2.3275,0.7292-4.0715,0.6678-6.1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.9c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S42,28.8,42,29.9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.9c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2s0.9-2,2-2C33.1,27.9,34,28.8,34,29.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.9065,25.7998 C25.3022,27.3152,25,28.9565,25,30.9c0,8,5,14,11,14s11-6,11-14c0-1.9435-0.3022-3.5848-0.9065-5.1002"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33,38.1c1.9,1,4.1,1,6,0"
    })));
  }
};

export default WomanMage;