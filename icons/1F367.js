import React from 'react';

const ShavedIce = ({
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
      fill: "#FCEA2B",
      d: "M52.0703,24.8882c3.9063,3.9043,3.9063,10.2358,0.001,14.1421C48.166,42.9346,39.9053,45.0713,36,41.167 c-3.9053-3.9063-1.9766-12.3745,1.9287-16.2798S48.166,20.9819,52.0703,24.8882z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M52.0703,24.896c-2.5937-2.5938-6.2578-3.4551-9.5713-2.6016c1.6748,0.4317,3.2608,1.291,4.5713,2.6016 c3.9063,3.9062,3.9063,10.2378,0.001,14.1421c-1.3106,1.3105-2.8975,2.1719-4.5713,2.6015 c3.3135,0.8536,6.9766-0.0078,9.5713-2.6015C55.9766,35.1338,55.9766,28.8022,52.0703,24.896z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "26.9993",
      cy: "32.0427",
      rx: "9.9997",
      ry: "10.0004",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -14.7497 28.4765)",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      d: "M34.0703,24.979c-2.5937-2.5937-6.2578-3.4551-9.5713-2.6016c1.6748,0.4317,3.2608,1.2911,4.5713,2.6016 c3.9063,3.9063,3.9063,10.2378,0.001,14.1421c-1.3106,1.3105-2.8975,2.1719-4.5713,2.6016 c3.3135,0.8535,6.9766-0.0079,9.5713-2.6016C37.9766,35.2168,37.9766,28.8853,34.0703,24.979z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M31,27c1.6436,0,3.0889-0.8037,4-2.0273V30c0,1.6563,1.3428,3,3,3s3-1.3437,3-3v2c0,1.6563,1.3428,3,3,3 s3-1.3437,3-3v-2.1836C47.3145,29.9277,47.6475,30,48,30c1.6572,0,3-1.3437,3-3v-2.9956c-1.4219-1.0684-3.1357-1.769-5.0029-1.9541 C45.9971,22.0332,46,22.0171,46,22c0-5.5229-4.4775-10-10-10s-10,4.4771-10,10C26,24.7612,28.2393,27,31,27z"
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
      d: "M45.9972,22.0491C51.0516,22.5496,55,26.8137,55,32c0,2.4632-0.8905,4.7183-2.367,6.4609"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.9674,32.8136c-0.1814,2.2526-1.1093,4.2945-2.5361,5.878"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.5982,38.7242C17.9839,36.9483,17,34.589,17,32c0-5.1777,3.935-9.4363,8.9776-9.9484"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,27c1.6436,0,3.0889-0.8037,4-2.0273V30c0,1.6563,1.3428,3,3,3s3-1.3437,3-3v2c0,1.6563,1.3428,3,3,3s3-1.3437,3-3v-2.1836 C47.3145,29.9277,47.6475,30,48,30c1.6572,0,3-1.3437,3-3v-2.9956c-1.4219-1.0684-3.1357-1.769-5.0029-1.9541 C45.9971,22.0332,46,22.0171,46,22c0-5.5229-4.4775-10-10-10s-10,4.4771-10,10C26,24.7612,28.2393,27,31,27z"
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
      d: "M45.9972,22.0491C51.0516,22.5496,55,26.8137,55,32c0,2.4632-0.8905,4.7183-2.367,6.4609"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.9674,32.8136c-0.1814,2.2526-1.1093,4.2945-2.5361,5.878"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.5982,38.7242C17.9839,36.9483,17,34.589,17,32c0-5.1777,3.935-9.4363,8.9776-9.9484"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,27c1.6436,0,3.0889-0.8037,4-2.0273V30c0,1.6563,1.3428,3,3,3s3-1.3437,3-3v2c0,1.6563,1.3428,3,3,3s3-1.3437,3-3v-2.1836 C47.3145,29.9277,47.6475,30,48,30c1.6572,0,3-1.3437,3-3v-2.9956c-1.4219-1.0684-3.1357-1.769-5.0029-1.9541 C45.9971,22.0332,46,22.0171,46,22c0-5.5229-4.4775-10-10-10s-10,4.4771-10,10C26,24.7612,28.2393,27,31,27z"
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

export default ShavedIce;