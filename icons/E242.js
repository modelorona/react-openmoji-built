import React from 'react';

const LocationIndicator = ({
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
      fill: "#D0CFCE",
      d: "M36,65.0208c0,0-3.091-5.9737-13.8722-26.8922C20,34,17.3106,30.4224,17.3106,25.6045 c0-10.3214,8.3671-18.6885,18.6885-18.6885l0.0001,8.0285c0,0-10.4584,0.5199-10.4584,10.3971s10.4587,10.7561,10.4587,10.7561 L36,65.0208z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M35.9736,65.0172c0,0,2.998-6.0172,13.8722-26.8922c2.0634-3.9611,4.8173-7.7062,4.8173-12.5242 c0-10.3214-8.3671-18.6885-18.6885-18.6885l-0.2836,8.0321c0,0,11.1773,0.2666,11.0085,10.7347S35.6907,36.0975,35.6907,36.0975 L35.9736,65.0172z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M36.8281,7.5469c0,0,9.7494,4.0365,11.8385,15.2865C50.7057,33.8135,39.5,53,36.5,62.6667 S54.6914,28,54.6914,28S55.1562,7.2812,36.8281,7.5469z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.001",
      cy: "25.5211",
      r: "10.5766",
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
      d: "M36,65.0208c0,0-3.091-5.9737-13.8722-26.8922C20,34,17.3106,30.4224,17.3106,25.6045c0-10.3214,8.3671-18.6885,18.6885-18.6885"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.002,65.0172c0,0,2.998-6.0172,13.8722-26.8922c2.0634-3.9611,4.8173-7.7062,4.8173-12.5242 c0-10.3214-8.3671-18.6885-18.6885-18.6885"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.001",
      cy: "25.5211",
      r: "10.5766",
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
      d: "M36,65.0208c0,0-3.091-5.9737-13.8722-26.8922C20,34,17.3106,30.4224,17.3106,25.6045c0-10.3214,8.3671-18.6885,18.6885-18.6885"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.002,65.0172c0,0,2.998-6.0172,13.8722-26.8922c2.0634-3.9611,4.8173-7.7062,4.8173-12.5242 c0-10.3214-8.3671-18.6885-18.6885-18.6885"
    })));
  }
};

export default LocationIndicator;