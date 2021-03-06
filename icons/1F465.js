import React from 'react';

const BustsInSilhouette = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M63,61c0,0,0-4,0-8c0-7-4-10-8-10c-5,0-5,0-12,0c-2.7842,0-5.5645,0.5059-7,3.75 c-1.125-3.3125-4.2158-4.7031-7-4.7031C24,42.0469,24,43,17,43c-4,0-8,3-8,10c0,1,0,8,0,8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M15,26c0,4,0.876,6.3145,2,8c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8 c0-2.1484-1.0771-9-8-9S15,22.4189,15,26z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M41,26c0,4,0.876,6.3145,2,8c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8 c0-2.1484-1.0771-9-8-9C42.0771,17,41,22.4189,41,26z"
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
      strokeWidth: "2",
      d: "M35,60v-7c0-7,4-10,8-10 c7,0,7,0,12,0c4,0,8,3,8,10c0,4,0,7,0,7 M34,45.0977 M9,60c0,0,0-6,0-7c0-7,4-10,8-10c7,0,7,0,12,0 c1.5313,0,3.0605,0.5313,4.3672,1.5488"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M15,26c0,4,0.876,6.3145,2,8 c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8c0-2.1484-1.0771-9-8-9S15,22.4189,15,26z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41,26c0,4,0.876,6.3145,2,8 c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8c0-2.1484-1.0771-9-8-9C42.0771,17,41,22.4189,41,26z"
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
      strokeWidth: "2",
      d: "M35,60v-7c0-7,4-10,8-10 c7,0,7,0,12,0c4,0,8,3,8,10c0,4,0,7,0,7 M34,45.0977 M9,60c0,0,0-6,0-7c0-7,4-10,8-10c7,0,7,0,12,0 c1.5313,0,3.0605,0.5313,4.3672,1.5488"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M15,26c0,4,0.876,6.3145,2,8 c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8c0-2.1484-1.0771-9-8-9S15,22.4189,15,26z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41,26c0,4,0.876,6.3145,2,8 c1.4316,2.1484,3.7061,3,6,3c2.3809,0,4.5664-0.8516,6-3c1.123-1.6855,2-4,2-8c0-2.1484-1.0771-9-8-9C42.0771,17,41,22.4189,41,26z"
    })));
  }
};

export default BustsInSilhouette;