import React from 'react';

const Warning = ({
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
      fill: "#fcea2b",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.5222,13.005c0.6977-1.2046,1.9862-2.0244,3.4778-2.0244c1.4916,0,2.7801,0.8198,3.4778,2.0244l20.9678,41.9351 C60.7889,55.5339,61,56.2136,61,56.9483c0,2.2272-1.8051,4.0323-4.0323,4.0323l-41.9354,0.0173 C12.8051,60.9979,11,59.192,11,56.9657c0-0.7356,0.211-1.4145,0.5544-2.0083L32.5222,13.005"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.6129,47.2709c0,0.8907-0.7222,1.6129-1.6129,1.6129c-0.8907,0-1.6129-0.7222-1.6129-1.6129V23.8925 c0-0.8907,0.7222-1.6129,1.6129-1.6129c0.8907,0,1.6129,0.7222,1.6129,1.6129V47.2709z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "54.529",
      r: "1.6129",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M32.5222,13.005c0.6977-1.2046,1.9862-2.0244,3.4778-2.0244c1.4916,0,2.7801,0.8198,3.4778,2.0244l20.9678,41.9351 C60.7889,55.5339,61,56.2136,61,56.9483c0,2.2272-1.8051,4.0323-4.0323,4.0323l-41.9354,0.0173 C12.8051,60.9979,11,59.192,11,56.9657c0-0.7356,0.211-1.4145,0.5544-2.0083L32.5222,13.005"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.6129,47.2709c0,0.8907-0.7222,1.6129-1.6129,1.6129c-0.8907,0-1.6129-0.7222-1.6129-1.6129V23.8925 c0-0.8907,0.7222-1.6129,1.6129-1.6129c0.8907,0,1.6129,0.7222,1.6129,1.6129V47.2709z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "54.529",
      r: "1.6129",
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
      d: "M32.5222,13.005c0.6977-1.2046,1.9862-2.0244,3.4778-2.0244c1.4916,0,2.7801,0.8198,3.4778,2.0244l20.9678,41.9351 C60.7889,55.5339,61,56.2136,61,56.9483c0,2.2272-1.8051,4.0323-4.0323,4.0323l-41.9354,0.0173 C12.8051,60.9979,11,59.192,11,56.9657c0-0.7356,0.211-1.4145,0.5544-2.0083L32.5222,13.005"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.6129,47.2709c0,0.8907-0.7222,1.6129-1.6129,1.6129c-0.8907,0-1.6129-0.7222-1.6129-1.6129V23.8925 c0-0.8907,0.7222-1.6129,1.6129-1.6129c0.8907,0,1.6129,0.7222,1.6129,1.6129V47.2709z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "54.529",
      r: "1.6129",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Warning;