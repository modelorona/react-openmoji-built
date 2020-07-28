import React from 'react';

const GameDie = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      points: "58.0936,22.6076 35.6729,27.8442 13.9289,22.2732 35.6729,17.4173"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#9B9B9A",
      points: "58.2211,48.3473 36.0428,54.1045 35.6729,27.0042 58.1657,21.846"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D0CFCE",
      points: "13.9856,47.957 35.7027,54.1045 35.6729,27.8442 22.6497,24.6986 13.9832,22.2957"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.069",
      points: "35.6352,54.0172 57.4698,48.7313 57.4698,21.7647 35.6167,26.5155 13.7667,21.7647 13.7667,48.7313 35.6013,54.0172 35.6013,30.3713"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.069",
      points: "13.7667,21.7647 35.8082,16.4545 57.4698,21.7647"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.2735",
      cy: "32.9339",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.2446",
      cy: "44.3761",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.767",
      cy: "45.2211",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.8274",
      cy: "38.0668",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.8878",
      cy: "30.9124",
      r: "3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.8312",
      cy: "21.1219",
      rx: "4",
      ry: "1.6191"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.069",
      points: "35.6352,54.0172 57.4698,48.7313 57.4698,21.7647 35.6167,26.5155 13.7667,21.7647 13.7667,48.7313 35.6013,54.0172 35.6013,30.3713"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.069",
      points: "13.7667,21.7647 35.8082,16.4545 57.4698,21.7647"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.2735",
      cy: "32.9339",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.2446",
      cy: "44.3761",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.767",
      cy: "45.2211",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.8274",
      cy: "38.0668",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.8878",
      cy: "30.9124",
      r: "3"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.8312",
      cy: "21.1219",
      rx: "4",
      ry: "1.6191"
    })));
  }
};

export default GameDie;