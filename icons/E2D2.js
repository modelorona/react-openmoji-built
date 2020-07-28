import React from 'react';

const ReusableBag = ({
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
      x: "19.6927",
      y: "20.9411",
      rx: "6.7831",
      width: "32.6146",
      height: "38.6125",
      fill: "#a57939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M33.4268,38.1266c1.8065-2.92,5.8685-3.6166,5.8685-3.6166s1.1181,3.9957-.6707,6.8386-5.8685,3.6165-5.8685,3.6165S31.62,41.0465,33.4268,38.1266Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.6447,38.0545c1.8065-2.92,5.8685-3.6166,5.8685-3.6166s1.1182,3.9957-.6706,6.8385-5.8685,3.6166-5.8685,3.6166S31.8382,40.9744,33.6447,38.0545Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.1",
      x2: "32.9075",
      y1: "46.4574",
      y2: "44.7991",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.1565,25.6632c0-7.4447,3.4165-13.48,7.6309-13.48s7.6308,6.035,7.6308,13.48"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.6927",
      y: "20.9411",
      rx: "6.7831",
      width: "32.6146",
      height: "38.6125",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.6447,38.0545c1.8065-2.92,5.8685-3.6166,5.8685-3.6166s1.1182,3.9957-.6706,6.8385-5.8685,3.6166-5.8685,3.6166S31.8382,40.9744,33.6447,38.0545Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.1",
      x2: "32.9075",
      y1: "46.4574",
      y2: "44.7991",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.1565,25.6632c0-7.4447,3.4165-13.48,7.6309-13.48s7.6308,6.035,7.6308,13.48"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "19.6927",
      y: "20.9411",
      rx: "6.7831",
      width: "32.6146",
      height: "38.6125",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }))));
  }
};

export default ReusableBag;