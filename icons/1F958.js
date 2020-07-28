import React from 'react';

const ShallowPanOfFood = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "37",
      r: "23",
      fill: "#3f3f3f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "20",
      fill: "#e27022"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "#f4aa41",
      strokeMiterlimit: "10",
      strokeWidth: "1.6",
      d: "M49.2846,30.5994a1.6533,1.6533,0,0,0-2.9758-.73,7.5663,7.5663,0,0,0-2.436,8.4811L43.5,39.8683a.9212.9212,0,0,0,.6874,1.1346l1.8219.4472a.9212.9212,0,0,0,1.1346-.6873l.3727-1.5183A7.5664,7.5664,0,0,0,49.2846,30.5994Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeMiterlimit: "10",
      strokeWidth: "1.6",
      d: "M43.398,45.3032a.9349.9349,0,0,0,.8561-.2084.9347.9347,0,0,0,.6622.5811.938.938,0,1,0,.4472-1.8219l.4473-1.822-1.5183-.3727-.4472,1.822a.938.938,0,1,0-.4473,1.8219Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38",
      cy: "24",
      r: "3",
      fill: "#f4aa41",
      stroke: "#f4aa41",
      strokeMiterlimit: "10",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25",
      cy: "40",
      r: "2",
      fill: "#f4aa41",
      stroke: "#f4aa41",
      strokeMiterlimit: "10",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.5",
      cy: "35.5",
      r: "2",
      fill: "#f4aa41",
      stroke: "#f4aa41",
      strokeMiterlimit: "10",
      strokeWidth: "1.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M38.59,48.1584a4.6627,4.6627,0,0,1-8.3986-2.86,4.6637,4.6637,0,1,0,8.732,2.338A4.6953,4.6953,0,0,1,38.59,48.1584Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M24.985,30.3813a3.6683,3.6683,0,0,1,5.0457,4.8232,3.6692,3.6692,0,1,0-5.4566-4.5612A3.6908,3.6908,0,0,1,24.985,30.3813Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60,33c1.6569,0,3,1.7909,3,4s-1.3431,4-3,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12,33c-1.6569,0-3,1.7909-3,4s1.3431,4,3,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M30.1909,45.2984a4.6637,4.6637,0,1,0,8.732,2.338,4.6953,4.6953,0,0,1-.3334.522"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M30.0307,35.2045a3.6692,3.6692,0,1,0-5.4566-4.5612,3.6908,3.6908,0,0,1,.4109-.262"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M46.0094,41.45a.9212.9212,0,0,0,1.1346-.6873l.3727-1.5183a7.5664,7.5664,0,0,0,1.7679-8.6451,1.6806,1.6806,0,0,0-1.242-1.3673"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M45.5815,45.6005a.9316.9316,0,0,0,.4694-.612.9212.9212,0,0,0-.6874-1.1345l.4473-1.822"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M38,21a3,3,0,0,1,0,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M38.5,37.5a2,2,0,0,1,0-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M25,42a2,2,0,0,1,0-4"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60,33c1.6569,0,3,1.7909,3,4s-1.3431,4-3,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12,33c-1.6569,0-3,1.7909-3,4s1.3431,4,3,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M30.1909,45.2984a4.6637,4.6637,0,1,0,8.732,2.338,4.6953,4.6953,0,0,1-.3334.522"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M30.0307,35.2045a3.6692,3.6692,0,1,0-5.4566-4.5612,3.6908,3.6908,0,0,1,.4109-.262"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M46.0094,41.45a.9212.9212,0,0,0,1.1346-.6873l.3727-1.5183a7.5664,7.5664,0,0,0,1.7679-8.6451,1.6806,1.6806,0,0,0-1.242-1.3673"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M45.5815,45.6005a.9316.9316,0,0,0,.4694-.612.9212.9212,0,0,0-.6874-1.1345l.4473-1.822"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M38,21a3,3,0,0,1,0,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M38.5,37.5a2,2,0,0,1,0-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      d: "M25,42a2,2,0,0,1,0-4"
    })));
  }
};

export default ShallowPanOfFood;