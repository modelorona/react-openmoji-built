import React from 'react';

const Ice = ({
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
      fill: "#92d3f5",
      d: "M36.6352,54.5916,58.47,48.923,58.318,20.5487l-21.7013,4.55-21.85-5.0948V44.91a5.0437,5.0437,0,0,0,3.637,4.9572l18.1976,4.7244V29.2336"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M36.6352,54.5916l20.1764-5.2381A2.2146,2.2146,0,0,0,58.47,47.21V22.7943a2.2148,2.2148,0,0,0-2.7176-2.1569L36.6167,25.0987"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M36.6182,43.7113l-.26,10.4178-5.3535-.7313L15.076,33.0374V20.5487l2.955.2794L36.6182,43.7113"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#92d3f5",
      points: "14.767 20.004 36.808 14.309 57.949 20.579"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#92d3f5",
      points: "57.398 20.254 36.451 25.368 14.745 19.869"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.069",
      d: "M36.6013,29.2336v22.644a2.0994,2.0994,0,0,1-2.627,2.032l-1.1441-.297-.1645-.0427L18.151,49.8016a4.6932,4.6932,0,0,1-3.3843-4.6127v-22.54a2.0993,2.0993,0,0,1,2.5761-2.0445l17.7214,4.1321a6.8379,6.8379,0,0,0,3.105,0l17.7245-4.1322A2.0994,2.0994,0,0,1,58.47,22.649v24.65a2.1,2.1,0,0,1-1.5719,2.032L37.3243,54.4127a2.9706,2.9706,0,0,1-1.3844.0261L33.9743,53.91"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.069",
      d: "M14.7451,24.4107l.0168-3.4268a1.2719,1.2719,0,0,1,.9537-1.2252L34.83,14.82a7.0928,7.0928,0,0,1,3.926.1089l18.5261,5.0135A1.6083,1.6083,0,0,1,58.47,21.4952v2.6654"
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
      strokeWidth: "2.069",
      d: "M36.6013,29.2336v22.644a2.0994,2.0994,0,0,1-2.627,2.032l-1.1441-.297-.1645-.0427L18.151,49.8016a4.6932,4.6932,0,0,1-3.3843-4.6127v-22.54a2.0993,2.0993,0,0,1,2.5761-2.0445l17.7214,4.1321a6.8379,6.8379,0,0,0,3.105,0l17.7245-4.1322A2.0994,2.0994,0,0,1,58.47,22.649v24.65a2.1,2.1,0,0,1-1.5719,2.032L37.3243,54.4127a2.9706,2.9706,0,0,1-1.3844.0261L33.9743,53.91"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.069",
      d: "M14.7451,24.4107l.0168-3.4268a1.2719,1.2719,0,0,1,.9537-1.2252L34.83,14.82a7.0928,7.0928,0,0,1,3.926.1089l18.5261,5.0135A1.6083,1.6083,0,0,1,58.47,21.4952v2.6654"
    })));
  }
};

export default Ice;