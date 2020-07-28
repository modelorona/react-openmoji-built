import React from 'react';

const ComputerMouse = ({
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
      fill: "#d0cfce",
      d: "m38.41 11.95h-4.821c-7.25 0-13.18 4.932-13.18 12.18v23.74c0 7.25 5.932 12.18 13.18 12.18h4.821c7.25 0 13.18-4.932 13.18-12.18v-23.74c-1.24e-4 -7.25-5.932-12.18-13.18-12.18z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "m36.15 17.93h-0.3082c-1.407 0-2.558 1.151-2.558 2.558v7.94c0 1.407 1.151 2.558 2.558 2.558h0.3082c1.407 0 2.558-1.151 2.558-2.558v-7.94c0-1.407-1.151-2.558-2.558-2.558z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m34.79 12.79c3.959 1.699 7.723 4.137 8.161 10.3 0.5077 7.135-2.133 20.5-2.982 27.28-0.5935 4.745-2.94 6.942-6.056 9.432-1.571 1.256 6.889 1.102 10.37-0.9338 2.989-1.747 5.885-4.747 5.921-3.798l0.4224-33.75s-1.225-9.075-11.2-9.078c0 0-10.01-0.5155-4.635 0.5512z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m36.26 31.12h-0.5181c-1.37 0-2.49-1.115-2.49-2.478v-8.126c0-1.363 1.121-2.478 2.49-2.478h0.5181c1.37 0 2.49 1.115 2.49 2.478v8.126c0 1.363-1.121 2.478-2.49 2.478z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m39.61 60.05h-7.215c-6.475 0-11.77-5.263-11.77-11.7v-24.71c0-6.432 5.298-11.7 11.77-11.7h7.215c6.475 0 11.77 5.263 11.77 11.7v24.71c0 6.432-5.298 11.7-11.77 11.7z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m36.26 31.12h-0.5181c-1.37 0-2.49-1.115-2.49-2.478v-8.126c0-1.363 1.121-2.478 2.49-2.478h0.5181c1.37 0 2.49 1.115 2.49 2.478v8.126c0 1.363-1.121 2.478-2.49 2.478z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m39.61 60.05h-7.215c-6.475 0-11.77-5.263-11.77-11.7v-24.71c0-6.432 5.298-11.7 11.77-11.7h7.215c6.475 0 11.77 5.263 11.77 11.7v24.71c0 6.432-5.298 11.7-11.77 11.7z"
    })));
  }
};

export default ComputerMouse;