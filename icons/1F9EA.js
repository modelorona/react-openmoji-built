import React from 'react';

const TestTube = ({
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
      fill: "#5c9e31",
      d: "M42.06,29.84V52.92a6.506,6.506,0,0,1-6.51,6.51,6.3082,6.3082,0,0,1-1.7754-.2486A6.5,6.5,0,0,1,29.04,52.92V29.84h.7811l-.5444,1.0534A14.0534,14.0534,0,0,0,35.55,32.2075a15.9069,15.9069,0,0,0,2.9589-.26c.071-.0119.1539-.0236.2249-.0355a11.5513,11.5513,0,0,0,3.0891-1.0178"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M28.2936,30.8938a14.0534,14.0534,0,0,0,6.2729,1.3137,15.9069,15.9069,0,0,0,2.9589-.26V52.92a6.5,6.5,0,0,1-4.7343,6.261,6.5,6.5,0,0,1-4.7342-6.261V29.84"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.06,16.9372v35.43A6.7993,6.7993,0,0,1,35.55,59.43a6.7992,6.7992,0,0,1-6.51-7.0628V17.2855"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.5433",
      cy: "15.2238",
      rx: "7.3933",
      ry: "3.137",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.06,29.84V52.92a6.506,6.506,0,0,1-6.51,6.51,6.3082,6.3082,0,0,1-1.7754-.2486A6.5,6.5,0,0,1,29.04,52.92V29.84"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.277,30.8938A14.0534,14.0534,0,0,0,35.55,32.2075a15.9069,15.9069,0,0,0,2.9589-.26c.071-.0119.1539-.0236.2249-.0355a11.5513,11.5513,0,0,0,3.0891-1.0178"
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
      d: "M42.06,16.9372v35.43A6.7993,6.7993,0,0,1,35.55,59.43a6.7992,6.7992,0,0,1-6.51-7.0628V17.2855"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.5433",
      cy: "15.2238",
      rx: "7.3933",
      ry: "3.137",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.06,29.84V52.92a6.506,6.506,0,0,1-6.51,6.51,6.3082,6.3082,0,0,1-1.7754-.2486A6.5,6.5,0,0,1,29.04,52.92V29.84"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.277,30.8938A14.0534,14.0534,0,0,0,35.55,32.2075a15.9069,15.9069,0,0,0,2.9589-.26c.071-.0119.1539-.0236.2249-.0355a11.5513,11.5513,0,0,0,3.0891-1.0178"
    })));
  }
};

export default TestTube;