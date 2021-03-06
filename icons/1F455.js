import React from 'react';

const TShirt = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#61B2E4",
      stroke: "none",
      points: "23.5126,14.3094 20.8226,16.0208 20.8226,56 51.1774,56 51.1774,16.0208 48.3057,14.3892 45.0985,13.5285 45.732,11.1242 36.7395,7.4311 27.4371,9.6393 25.6361,13.4536"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61B2E4",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "61,31.3289 51.1774,28.3289 51.1774,16.0208 64,22.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "none",
      d: "M45.732,11.1242c0,0,2.4511,2.4293-4.7072,11.2827l-3.2087-5.165l4.5054-4.8457l2.3198-2.6622"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "none",
      d: "M27.4371,9.6393l2.0075,2.7494l4.5124,4.8532l-3.2087,5.165c-7.1583-8.8534-4.7072-11.2827-4.7072-11.2827"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61B2E4",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "11,31.3289 20.8226,28.3289 20.8226,16.0208 8,22.0208"
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
      points: "48.3057,15.2396 51.1774,16.0208 51.1774,56 20.8226,56 20.8226,16.0208 23.5126,15.1598"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "61,31.3289 51.1774,28.3289 51.1774,16.0208 64,22.0208"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "11,31.3289 20.8226,28.3289 20.8226,16.0208 8,22.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3216,12.3962l-4.5054,4.8457l3.2087,5.165c7.1583-8.8534,4.7072-11.2827,4.7072-11.2827c-10.4429-8.3615-19.6909,0-19.6909,0 s-2.4511,2.4293,4.7072,11.2827l3.2087-5.165l-4.5124-4.8532"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "21.6749",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "24.9416",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "28.2084",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
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
      points: "48.3057,15.2396 51.1774,16.0208 51.1774,56 20.8226,56 20.8226,16.0208 23.5126,15.1598"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "61,31.3289 51.1774,28.3289 51.1774,16.0208 64,22.0208"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "11,31.3289 20.8226,28.3289 20.8226,16.0208 8,22.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3216,12.3962l-4.5054,4.8457l3.2087,5.165c7.1583-8.8534,4.7072-11.2827,4.7072-11.2827c-10.4429-8.3615-19.6909,0-19.6909,0 s-2.4511,2.4293,4.7072,11.2827l3.2087-5.165l-4.5124-4.8532"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "21.6749",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "24.9416",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.8866",
      cy: "28.2084",
      r: "0.8529",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default TShirt;