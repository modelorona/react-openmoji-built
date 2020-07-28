import React from 'react';

const DeciduousTree = ({
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
      fill: "#b1cc33",
      stroke: "none",
      d: "M51.5605,17.7304c-0.5093,0.0029-1.018,0.0333-1.524,0.091l-0.673,0.072l-0.317-0.6 c-2.673-5.047-8.5-8.308-14.854-8.308c-9.026,0-16.369,6.4-16.369,14.268c0.0014,0.5162,0.0348,1.0319,0.1,1.544l0.1,0.824 l-0.792,0.251c-4.015,1.272-6.608,4.186-6.608,7.421c0,4.445,4.851,8.061,10.813,8.061c2.3045,0.0227,4.5747-0.5593,6.584-1.688 l0.591-0.341l0.189,0.151l0.344,0.275c2.714,2.167,7.082,3.462,11.683,3.462c7.762,0,14.32-3.691,14.32-8.061 c-0.0013-0.2702-0.0274-0.5396-0.078-0.805l-0.138-0.751l-0.022-0.117l0.842-0.266c4.022-1.271,6.622-4.185,6.622-7.425 C62.3745,21.3494,57.5225,17.7304,51.5605,17.7304z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "none",
      d: "M39.4685,27.9974c0,0,4.917,7.331,15.443,5.488l0.891,3.572l-4,4.922l-9.214,2.032l-12.13-2.555 l-1.846-2.126C33.8118,37.4698,37.8331,33.2719,39.4685,27.9974z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1255,42.1994"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.7895,63.9434 35.7895,52.7764 28.1585,45.2604"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7895",
      x2: "40.1575",
      y1: "52.7764",
      y2: "48.2304",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.3155,41.4304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.3745,25.7734 c0-5-5.289-9.061-11.813-9.061c-0.5451,0.0044-1.0895,0.0378-1.631,0.1c-2.763-5.216-8.762-8.839-15.738-8.839 c-9.593,0-17.369,6.836-17.369,15.268c0.0017,0.5574,0.0378,1.1141,0.108,1.667c-4.288,1.359-7.306,4.595-7.306,8.374 c0,5,5.289,9.061,11.813,9.061c2.4798,0.021,4.922-0.6072,7.084-1.822c2.791,2.229,7.257,3.681,12.307,3.681 c8.461,0,15.32-4.057,15.32-9.061c-0.0014-0.3308-0.0329-0.6609-0.094-0.986C60.3485,32.7954,63.3745,29.5574,63.3745,25.7734z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1255,42.1994"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "35.7895,63.9434 35.7895,52.7764 28.1585,45.2604"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.7895",
      x2: "40.1575",
      y1: "52.7764",
      y2: "48.2304",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.3155,41.4304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.3745,25.7734 c0-5-5.289-9.061-11.813-9.061c-0.5451,0.0044-1.0895,0.0378-1.631,0.1c-2.763-5.216-8.762-8.839-15.738-8.839 c-9.593,0-17.369,6.836-17.369,15.268c0.0017,0.5574,0.0378,1.1141,0.108,1.667c-4.288,1.359-7.306,4.595-7.306,8.374 c0,5,5.289,9.061,11.813,9.061c2.4798,0.021,4.922-0.6072,7.084-1.822c2.791,2.229,7.257,3.681,12.307,3.681 c8.461,0,15.32-4.057,15.32-9.061c-0.0014-0.3308-0.0329-0.6609-0.094-0.986C60.3485,32.7954,63.3745,29.5574,63.3745,25.7734z"
    })));
  }
};

export default DeciduousTree;