import React from 'react';

const PatientFile = ({
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
      x: "15.5",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "#EA5A47"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25.107",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.7139",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "#B1CC33"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "#D0CFCE"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M16.4008,21.903h5.4885c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0H15.5l0,0v-2.9932 C15.5,22.3063,15.9033,21.903,16.4008,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M26.0077,21.903h5.4885c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932 C25.107,22.3063,25.5102,21.9031,26.0077,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M35.6147,21.903h5.4885c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932 C34.714,22.3063,35.1172,21.9031,35.6147,21.903z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D22F27",
      points: "30.656,39.2727 34.424,39.2727 34.424,43.0407 37.076,43.0407 37.076,39.2727 40.844,39.2727 40.844,36.6207 37.076,36.6207 37.076,32.8537 34.424,32.8537 34.424,36.6207 30.656,36.6207"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25.107",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.7139",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.4008,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0H15.5l0,0v-2.9932C15.5,22.3063,15.9033,21.903,16.4008,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0077,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932C25.107,22.3063,25.5102,21.9031,26.0077,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.6147,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932C34.714,22.3063,35.1172,21.9031,35.6147,21.903z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.0761,32.8534v3.7674h3.7674v2.6523h-3.7674v3.7675h-2.6522v-3.7675h-3.7674v-2.6523h3.7674v-3.7674H37.0761 M37.0761,30.8534h-2.6522c-1.1046,0-2,0.8954-2,2v1.7674h-1.7674c-1.1046,0-2,0.8954-2,2v2.6523c0,1.1046,0.8954,2,2,2h1.7674 v1.7675c0,1.1046,0.8954,2,2,2h2.6522c1.1046,0,2-0.8954,2-2v-1.7675h1.7674c1.1046,0,2-0.8954,2-2v-2.6523c0-1.1046-0.8954-2-2-2 h-1.7674v-1.7674C39.0761,31.7488,38.1807,30.8534,37.0761,30.8534z"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "25.107",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "34.7139",
      y: "21.903",
      width: "7.29",
      height: "3.894",
      fill: "none"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.4008,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0H15.5l0,0v-2.9932C15.5,22.3063,15.9033,21.903,16.4008,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0077,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932C25.107,22.3063,25.5102,21.9031,26.0077,21.903z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.6147,21.903h5.4885 c0.4975,0,0.9008,0.4033,0.9008,0.9008v2.9932l0,0h-7.29l0,0v-2.9932C34.714,22.3063,35.1172,21.9031,35.6147,21.903z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "15.5",
      y: "25.797",
      width: "40.5",
      height: "24.3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M37.0761,32.8534v3.7674h3.7674v2.6523h-3.7674v3.7675h-2.6522v-3.7675h-3.7674v-2.6523h3.7674v-3.7674H37.0761 M37.0761,30.8534h-2.6522c-1.1046,0-2,0.8954-2,2v1.7674h-1.7674c-1.1046,0-2,0.8954-2,2v2.6523c0,1.1046,0.8954,2,2,2h1.7674 v1.7675c0,1.1046,0.8954,2,2,2h2.6522c1.1046,0,2-0.8954,2-2v-1.7675h1.7674c1.1046,0,2-0.8954,2-2v-2.6523c0-1.1046-0.8954-2-2-2 h-1.7674v-1.7674C39.0761,31.7488,38.1807,30.8534,37.0761,30.8534z"
    })));
  }
};

export default PatientFile;