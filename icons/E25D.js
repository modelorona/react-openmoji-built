import React from 'react';

const Edit = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12.854",
      y: "16.5774",
      width: "42.4977",
      height: "42.246",
      fill: "#FFFFFF",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F4AA41",
      stroke: "none",
      points: "32.775,39.4058 37.4938,37.6238 34.5571,34.687"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44.8202",
      y: "9.0123",
      width: "5.3523",
      height: "31.1323",
      transform: "matrix(0.7071 0.7071 -0.7071 0.7071 31.291 -26.3861)",
      fill: "#A57939",
      stroke: "none"
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
      d: "M54.5567,28.084v30.6836c0,0.55-0.45,1-1,1H13.1685c-0.55,0-1-0.45-1-1V18.3794c0-0.5523,0.4477-1,1-1h31.0229"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0526,37.7487l21.4611-21.4611c0.3905-0.3905,0.3905-1.0237,0-1.4142l-2.3359-2.3359c-0.3905-0.3905-1.0237-0.3905-1.4142,0 L34.3025,33.9986l-2.6258,6.3865L38.0526,37.7487l-3.7501-3.7501"
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
      d: "M54.5567,28.084v30.6836c0,0.55-0.45,1-1,1H13.1685c-0.55,0-1-0.45-1-1V18.3794c0-0.5523,0.4477-1,1-1h31.0229"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.0526,37.7487l21.4611-21.4611c0.3905-0.3905,0.3905-1.0237,0-1.4142l-2.3359-2.3359c-0.3905-0.3905-1.0237-0.3905-1.4142,0 L34.3025,33.9986l-2.6258,6.3865L38.0526,37.7487l-3.7501-3.7501"
    })));
  }
};

export default Edit;