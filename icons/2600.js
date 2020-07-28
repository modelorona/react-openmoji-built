import React from 'react';

const Sun = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      stroke: "none",
      points: "66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35.95",
      r: "19.8276",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "35.95",
      r: "19.8276",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"
    })));
  }
};

export default Sun;