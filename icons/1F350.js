import React from 'react';

const Pear = ({
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
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M56.599,32.8694 c6.3433,6.3433,6.3359,16.6243,0,22.9601c-6.3433,6.3433-16.6169,6.3433-22.9601,0c-0.1776-0.1776-0.3405-0.3553-0.5107-0.5403 c-1.5396-1.6728-2.6573-3.6046-3.3604-5.6401c-0.6588-1.5469-1.2509-3.1901-1.8431-4.8481 c-1.5987-4.4558-3.1901-8.9931-6.2396-12.0426c-3.2716-3.2716-3.2716-8.5711,0-11.8427c3.2641-3.2641,8.5712-3.2716,11.8427,0 c3.0495,3.0495,7.5868,4.6409,12.0426,6.2396c1.658,0.5922,3.3012,1.1843,4.8482,1.843c2.1169,0.9178,4.0709,1.9689,5.6401,3.3604 C56.2438,32.529,56.4214,32.6918,56.599,32.8694z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M56.5987,55.8297c-4.7458,4.7574-11.3865,4.6603-11.3865,4.6603 C67.4175,47.2917,50.42,28.9939,50.42,28.9939s4.0668,1.9735,5.6346,3.366c0.1937,0.166,0.3689,0.332,0.5441,0.5072 C62.9434,39.2118,62.9265,49.4865,56.5987,55.8297z"
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
      d: "M21.7378,21.5926c0,0-5.271-5.1624-10.4878,0.0543"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.8805,18.9186c2.9293-1.0048,6.3086-0.3418,8.6475,1.9971c3.0495,3.0495,7.5868,4.6409,12.0426,6.2396 c1.658,0.5922,3.3012,1.1843,4.8482,1.843c2.1169,0.9178,4.0709,1.9689,5.6401,3.3604c0.185,0.1702,0.3627,0.333,0.5403,0.5107 c6.3433,6.3433,6.3359,16.6243,0,22.9601c-6.3433,6.3433-16.6169,6.3433-22.9601,0c-0.1776-0.1776-0.3405-0.3553-0.5107-0.5403 c-1.5396-1.6728-2.6573-3.6046-3.3604-5.6401c-0.6588-1.5469-1.2509-3.1901-1.8431-4.8481 c-1.5987-4.4558-3.1901-8.9931-6.2396-12.0426c-2.1564-2.1564-2.8915-5.1939-2.2052-7.9509"
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
      d: "M21.7378,21.5926c0,0-5.271-5.1624-10.4878,0.0543"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.8805,18.9186c2.9293-1.0048,6.3086-0.3418,8.6475,1.9971c3.0495,3.0495,7.5868,4.6409,12.0426,6.2396 c1.658,0.5922,3.3012,1.1843,4.8482,1.843c2.1169,0.9178,4.0709,1.9689,5.6401,3.3604c0.185,0.1702,0.3627,0.333,0.5403,0.5107 c6.3433,6.3433,6.3359,16.6243,0,22.9601c-6.3433,6.3433-16.6169,6.3433-22.9601,0c-0.1776-0.1776-0.3405-0.3553-0.5107-0.5403 c-1.5396-1.6728-2.6573-3.6046-3.3604-5.6401c-0.6588-1.5469-1.2509-3.1901-1.8431-4.8481 c-1.5987-4.4558-3.1901-8.9931-6.2396-12.0426c-2.1564-2.1564-2.8915-5.1939-2.2052-7.9509"
    })));
  }
};

export default Pear;