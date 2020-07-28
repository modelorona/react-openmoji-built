import React from 'react';

const Hook = ({
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
      fill: "#9b9b9a",
      d: "M28.3493,64.0547a14.1852,14.1852,0,0,1-9.08-25.083,1,1,0,0,1,1.6318.8994c-.7138,5.3779,5.1221,9.1143,5.1817,9.1514a1.0006,1.0006,0,0,1-.5313,1.8476H20.9782a7.438,7.438,0,0,0,14.8086-1V23a8.91,8.91,0,1,1,6.747.2344V49.87A14.2007,14.2007,0,0,1,28.3493,64.0547ZM39.445,12.7188a2.1643,2.1643,0,1,0,2.164,2.164A2.1664,2.1664,0,0,0,39.445,12.7188Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.5511,49.87s-6.4505-4.0285-5.64-10.1295L19.91,39.74A13.1848,13.1848,0,1,0,41.5335,49.87V22.5059a7.9115,7.9115,0,1,0-4.7465-.18V49.87a8.4382,8.4382,0,1,1-16.8763,0h.8339M41.2972,17.4489a3.1645,3.1645,0,1,1,1.3123-2.566"
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
      d: "M25.5511,49.87s-6.4505-4.0285-5.64-10.1295L19.91,39.74A13.1848,13.1848,0,1,0,41.5335,49.87V22.5059a7.9115,7.9115,0,1,0-4.7465-.18V49.87a8.4382,8.4382,0,1,1-16.8763,0h.8339M41.2972,17.4489a3.1645,3.1645,0,1,1,1.3123-2.566"
    })));
  }
};

export default Hook;