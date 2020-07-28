import React from 'react';

const IceCream = ({
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.9995",
      cy: "21.0014",
      rx: "9.9997",
      ry: "10.0004",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -4.3062 31.6067)",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M43.0703,13.9375c-2.5937-2.5937-6.2578-3.4551-9.5713-2.6016c1.6748,0.4317,3.2608,1.2911,4.5713,2.6016 c3.9063,3.9063,3.9063,10.2378,0.001,14.1421c-1.3106,1.311-2.8975,2.1724-4.5713,2.602c3.3135,0.8536,6.9766-0.0078,9.5713-2.602 C46.9766,24.1753,46.9766,17.8438,43.0703,13.9375z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M52.0703,23.9297c3.9063,3.9043,3.9063,10.2363,0.001,14.1426C48.166,41.9766,39.9053,44.9043,36,41 c-3.9053-3.9062-1.9766-13.166,1.9287-17.0713S48.166,20.0234,52.0703,23.9297z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M52.0703,23.9375c-2.5937-2.5937-6.2578-3.4551-9.5713-2.6016c1.6748,0.4317,3.2608,1.2911,4.5713,2.6016 c3.9063,3.9063,3.9063,10.2383,0.001,14.1426c-1.3106,1.3105-2.8975,2.1719-4.5713,2.6015 c3.3135,0.8536,6.9766-0.0078,9.5713-2.6015C55.9766,34.1758,55.9766,27.8438,52.0703,23.9375z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "26.9992",
      cy: "31.0022",
      rx: "9.9999",
      ry: "10.0006",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -14.014 28.1716)",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M34.0703,23.9375c-2.5937-2.5937-6.2578-3.4551-9.5713-2.6016c1.6748,0.4317,3.2608,1.2911,4.5713,2.6016 c3.9063,3.9063,3.9063,10.2383,0.001,14.1426c-1.3106,1.3105-2.8975,2.1719-4.5713,2.6015 c3.3135,0.8536,6.9766-0.0078,9.5713-2.6015C37.9766,34.1758,37.9766,27.8438,34.0703,23.9375z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M33,60v-6c0-2.7617-2.2393-5-5-5h-4h-3c-2.7607,0-5-2.2383-5-5v-3c0-1.1045,0.8955-2,2-2h36 c1.1045,0,2,0.8955,2,2v3c0,2.7617-2.2393,5-5,5h-3h-4c-2.7607,0-5,2.2383-5,5v6"
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
      d: "M26,21c0-5.5228,4.4772-10,10-10s10,4.4772,10,10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0657,26.5031C37.7119,23.2387,41.0947,21,45,21c5.5225,0,10,4.4766,10,10c0,3.1787-1.4829,6.0107-3.7946,7.8423"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6391,38.7165C18.4166,36.8823,17,34.1066,17,31c0-5.5228,4.4772-10,10-10s10,4.4772,10,10 c0,3.1784-1.4828,6.0105-3.7945,7.8421"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9467",
      d: "M33,60v-6c0-2.7617-2.2393-5-5-5h-4h-3c-2.7607,0-5-2.2383-5-5v-3c0-1.1045,0.8955-2,2-2h36c1.1045,0,2,0.8955,2,2v3 c0,2.7617-2.2393,5-5,5h-3h-4c-2.7607,0-5,2.2383-5,5v6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29",
      x2: "43",
      y1: "60",
      y2: "60",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9467"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26,21c0-5.5228,4.4772-10,10-10s10,4.4772,10,10"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0657,26.5031C37.7119,23.2387,41.0947,21,45,21c5.5225,0,10,4.4766,10,10c0,3.1787-1.4829,6.0107-3.7946,7.8423"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6391,38.7165C18.4166,36.8823,17,34.1066,17,31c0-5.5228,4.4772-10,10-10s10,4.4772,10,10 c0,3.1784-1.4828,6.0105-3.7945,7.8421"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9467",
      d: "M33,60v-6c0-2.7617-2.2393-5-5-5h-4h-3c-2.7607,0-5-2.2383-5-5v-3c0-1.1045,0.8955-2,2-2h36c1.1045,0,2,0.8955,2,2v3 c0,2.7617-2.2393,5-5,5h-3h-4c-2.7607,0-5,2.2383-5,5v6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29",
      x2: "43",
      y1: "60",
      y2: "60",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9467"
    })));
  }
};

export default IceCream;