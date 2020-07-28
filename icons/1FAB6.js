import React from 'react';

const Feather = ({
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
      fill: "#b399c8",
      d: "M42.3339,49.147a29.9446,29.9446,0,0,1-19.3378-8.1514h0c-8.0137-7.3643-8.378-18.0752-8.5332-22.6484l-.0215-.627a2.9039,2.9039,0,0,1,3.457-2.9512c17.0049,3.3555,21.6943,16.3243,22.0557,17.4a49.5426,49.5426,0,0,1,3.5742,15.9219,1,1,0,0,1-.9668,1.0518C42.5322,49.144,42.455,49.147,42.3339,49.147Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M44.4355,55.3159c-11.6455,0-17.3757-6.9734-17.6521-7.3542a1,1,0,0,1,.2617-1.4239,11.1031,11.1031,0,0,1,12.7742-1.5734c-1.4648-9.0782,1.877-13.5684,2.0312-13.77a.9982.9982,0,0,1,.75-.39.9705.9705,0,0,1,.78.3242c8.9434,9.7715,8.793,16.5322,7.9072,19.6914-.0341.1406-1.0615,4.0918-4.7714,4.4063C45.8046,55.2876,45.1113,55.3159,44.4355,55.3159Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.1837,57.69S34.96,45.877,23.0974,24.2062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.2281,54.3024C33.2973,54.7629,27.6,47.4216,27.6,47.4216"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.528,42.4827c-.5595-7.1945,2.1157-10.6784,2.1157-10.6784,8.8346,9.6533,8.4063,16.1616,7.6813,18.7468"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.0138,47.4216A30.15,30.15,0,0,1,23.673,40.26c-8.0725-7.4186-8.0674-18.2414-8.2321-22.5774a1.9032,1.9032,0,0,1,2.2642-1.9314C34.6938,19.1027,39.02,32.5284,39.02,32.5284"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.1837,57.69S34.96,45.877,23.0974,24.2062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.2281,54.3024C33.2973,54.7629,27.6,47.4216,27.6,47.4216"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.528,42.4827c-.5595-7.1945,2.1157-10.6784,2.1157-10.6784,8.8346,9.6533,8.4063,16.1616,7.6813,18.7468"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.0138,47.4216A30.15,30.15,0,0,1,23.673,40.26c-8.0725-7.4186-8.0674-18.2414-8.2321-22.5774a1.9032,1.9032,0,0,1,2.2642-1.9314C34.6938,19.1027,39.02,32.5284,39.02,32.5284"
    })));
  }
};

export default Feather;