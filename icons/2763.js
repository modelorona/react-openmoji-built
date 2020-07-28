import React from 'react';

const HeartExclamation = ({
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
    }, /*#__PURE__*/React.createElement("g", {
      id: "line_2_"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FFA7C0",
      d: "M52,20.65c0-4.7003-3.8103-8.5106-8.5106-8.5106c-3.2363,0-6.0501,1.8067-7.4894,4.4662 c-1.4392-2.6595-4.2531-4.4662-7.4894-4.4662C23.8103,12.1394,20,15.9497,20,20.65c0,2.0221,0.7083,3.8769,1.8862,5.337 l-0.0029,0.0023L36,43.4855l14.1167-17.4962l-0.0029-0.0023C51.2917,24.5268,52,22.672,52,20.65z"
    })), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0216",
      cy: "55.007",
      rx: "5.0001",
      ry: "5.0001",
      fill: "#FFA7C0"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0216",
      cy: "55.007",
      rx: "5.0001",
      ry: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10.0003",
      strokeWidth: "2.0001"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line_1_"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52,20.65 c0-4.7003-3.8103-8.5106-8.5106-8.5106c-3.2363,0-6.0501,1.8067-7.4894,4.4662c-1.4392-2.6595-4.2531-4.4662-7.4894-4.4662 C23.8103,12.1394,20,15.9497,20,20.65c0,2.0221,0.7083,3.8769,1.8862,5.337l-0.0029,0.0023L36,43.4855l14.1167-17.4962 l-0.0029-0.0023C51.2917,24.5268,52,22.672,52,20.65z"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0216",
      cy: "55.007",
      rx: "5.0001",
      ry: "5.0001",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10.0003",
      strokeWidth: "2.0001"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line_1_"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52,20.65 c0-4.7003-3.8103-8.5106-8.5106-8.5106c-3.2363,0-6.0501,1.8067-7.4894,4.4662c-1.4392-2.6595-4.2531-4.4662-7.4894-4.4662 C23.8103,12.1394,20,15.9497,20,20.65c0,2.0221,0.7083,3.8769,1.8862,5.337l-0.0029,0.0023L36,43.4855l14.1167-17.4962 l-0.0029-0.0023C51.2917,24.5268,52,22.672,52,20.65z"
    }))));
  }
};

export default HeartExclamation;