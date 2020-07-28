import React from 'react';

const CurlyHair = ({
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
      fill: "#f4aa41",
      stroke: "#f4aa41",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.43,51.36H54.1c0-.51,1.9-1,1.82-1.61a8.34,8.34,0,0,0-3.26-5.39A8.17,8.17,0,0,0,54,35.89a7.78,7.78,0,0,0-4.68-4.11,7.12,7.12,0,0,0-2.91-6.59,6.69,6.69,0,0,0-8.08.51,7.32,7.32,0,0,0-5.88-4.8A7.58,7.58,0,0,0,26,23.69a10,10,0,0,0-9.55-2Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "#fcea2b",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.37,51.36H43.3a13.15,13.15,0,0,0-.37-6.3,12.8809,12.8809,0,0,0-2.4-4.41,16.26,16.26,0,0,1-7.13,3.1c-4.53.6-6-2.41-9.52-1.29-1.27.4-1.54.94-3.17,1.26s-3.32-1.81-4.34-2.08C16.35,44.25,16.39,48.75,16.37,51.36Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56,51.36a7.3679,7.3679,0,0,0-.06-1.61,8.34,8.34,0,0,0-3.26-5.39A8.17,8.17,0,0,0,54,35.89a7.78,7.78,0,0,0-4.68-4.11,7.12,7.12,0,0,0-2.91-6.59,6.69,6.69,0,0,0-8.08.51,7.32,7.32,0,0,0-5.88-4.8A7.58,7.58,0,0,0,26,23.69s-4.13-4.62-9.92-2.49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.93,51.36a49.76,49.76,0,0,0-4.59-12.45,8.7,8.7,0,0,1-5.29,4.2,8.65,8.65,0,0,1-8.53-2.8A6.59,6.59,0,0,1,21.34,43a6.53,6.53,0,0,1-5-2.49h0"
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
      d: "M56,51.36a7.3679,7.3679,0,0,0-.06-1.61,8.34,8.34,0,0,0-3.26-5.39A8.17,8.17,0,0,0,54,35.89a7.78,7.78,0,0,0-4.68-4.11,7.12,7.12,0,0,0-2.91-6.59,6.69,6.69,0,0,0-8.08.51,7.32,7.32,0,0,0-5.88-4.8A7.58,7.58,0,0,0,26,23.69s-4.13-4.62-9.92-2.49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.93,51.36a49.76,49.76,0,0,0-4.59-12.45,8.7,8.7,0,0,1-5.29,4.2,8.65,8.65,0,0,1-8.53-2.8A6.59,6.59,0,0,1,21.34,43a6.53,6.53,0,0,1-5-2.49h0"
    })));
  }
};

export default CurlyHair;