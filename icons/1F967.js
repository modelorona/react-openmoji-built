import React from 'react';

const Pie = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M66.7469,49.0622c0,0-1.8957,3.0508-2.0249,4.0996c-0.2071,1.6855-0.3762,3.0747-2.0747,3.0747H9.3527 c-1.6985,0-2.8676-1.3892-3.0747-3.0747c-0.1292-1.0488-1.1667-4.0996-1.1667-4.0996l-0.1189-6.8581 C7.3516,38.771,15.5828,36.7635,36,36.7635c20.1722,0,31.6119,0.102,30.9228,4.2365L66.7469,49.0622z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M63.7295,36.3262C63.373,34.8027,62.793,33,62.793,33c-2.8409-6.8564-8.2969-12.6299-15.6953-15.6943 C32.623,11.311,16.0771,17.9009,9.624,32.041c0,0-0.7802,1.8653-1.1504,4.2217C6.4639,36.9102,5,38.7744,5,41 c0,2.7617,2.2393,5,5,5c1.8662,0,3.4736-1.0342,4.333-2.5488C15.1924,44.9658,16.8008,46,18.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C23.8584,44.9648,25.4678,46,27.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C32.5264,44.9658,34.1338,46,36,46c1.8662,0,3.4736-1.0342,4.333-2.5488C41.1924,44.9658,42.8008,46,44.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C49.8584,44.9648,51.4678,46,53.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C58.5264,44.9658,60.1338,46,62,46c2.7607,0,5-2.2383,5-5C67,38.8496,65.6338,37.0313,63.7295,36.3262z"
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
      d: "M66,49c0,0-0.874,2.9766-1,4c-0.2021,1.6445-1.3428,3-3,3H10c-1.6572,0-2.7979-1.3555-3-3c-0.126-1.0234-1-4-1-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.7295,36.3262C63.373,34.8027,62.793,33,62.793,33c-2.8409-6.8564-8.2969-12.6299-15.6953-15.6943 C32.623,11.311,16.0771,17.9009,9.624,32.041c0,0-0.7802,1.8653-1.1504,4.2217C6.4639,36.9102,5,38.7744,5,41 c0,2.7617,2.2393,5,5,5c1.8662,0,3.4736-1.0342,4.333-2.5488C15.1924,44.9658,16.8008,46,18.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C23.8584,44.9648,25.4678,46,27.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C32.5264,44.9658,34.1338,46,36,46c1.8662,0,3.4736-1.0342,4.333-2.5488C41.1924,44.9658,42.8008,46,44.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C49.8584,44.9648,51.4678,46,53.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C58.5264,44.9658,60.1338,46,62,46c2.7607,0,5-2.2383,5-5C67,38.8496,65.6338,37.0313,63.7295,36.3262z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "32",
      y2: "26",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.4443",
      x2: "27.2217",
      y1: "29.5566",
      y2: "24.7783",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.5566",
      x2: "44.7783",
      y1: "29.5566",
      y2: "24.7783",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M66,49c0,0-0.874,2.9766-1,4c-0.2021,1.6445-1.3428,3-3,3H10c-1.6572,0-2.7979-1.3555-3-3c-0.126-1.0234-1-4-1-4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.7295,36.3262C63.373,34.8027,62.793,33,62.793,33c-2.8409-6.8564-8.2969-12.6299-15.6953-15.6943 C32.623,11.311,16.0771,17.9009,9.624,32.041c0,0-0.7802,1.8653-1.1504,4.2217C6.4639,36.9102,5,38.7744,5,41 c0,2.7617,2.2393,5,5,5c1.8662,0,3.4736-1.0342,4.333-2.5488C15.1924,44.9658,16.8008,46,18.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C23.8584,44.9648,25.4678,46,27.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C32.5264,44.9658,34.1338,46,36,46c1.8662,0,3.4736-1.0342,4.333-2.5488C41.1924,44.9658,42.8008,46,44.667,46 c1.8652,0,3.4746-1.0352,4.333-2.5498C49.8584,44.9648,51.4678,46,53.333,46c1.8662,0,3.4746-1.0342,4.334-2.5488 C58.5264,44.9658,60.1338,46,62,46c2.7607,0,5-2.2383,5-5C67,38.8496,65.6338,37.0313,63.7295,36.3262z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36",
      x2: "36",
      y1: "32",
      y2: "26",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.4443",
      x2: "27.2217",
      y1: "29.5566",
      y2: "24.7783",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "49.5566",
      x2: "44.7783",
      y1: "29.5566",
      y2: "24.7783",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Pie;