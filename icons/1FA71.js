import React from 'react';

const OnePieceSwimsuit = ({
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
      fill: "#b399c8",
      d: "M23.1141,22.5l3.5,16.5-6.5,14.5c7.4469,3.4679,11.7477,8.9461,13.175,15.5h4.65c.5613-6.3319,5.6639-11.2823,13.175-15.5l-6.5-14.5,4.05-16.5C47.1141,28.5,26.1141,29.5,23.1141,22.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#8967aa",
      d: "M44.8859,4.5s6.6123,18.22,2,21c-3.9956,2.4081-16.822,2.8488-22,0-5.8774-3.2336,2-21,2-21-.2888.29-2.0408,4.0444,2,12,6.1492,6.2577,8.1287,6.8691,13,0C47.0908,7.395,45.0772,4.6421,44.8859,4.5Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.1141,22.5l3.5,16.5-6.5,14.5c7.4469,3.4679,11.7477,8.9461,13.175,15.5h4.65c.5613-6.3319,5.6639-11.2823,13.175-15.5l-6.5-14.5,4.05-16.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.1218,4.5s6.6123,18.22,2,21c-3.9956,2.4081-16.822,2.8488-22,0-5.8774-3.2336,2-21,2-21s-3.4311,4.2216,2,12c4.1942,6.0068,9.225,6.4472,13,0C47.0982,8.0009,45.1218,4.5,45.1218,4.5Z"
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
      d: "M23.1141,22.5l3.5,16.5-6.5,14.5c7.4469,3.4679,11.7477,8.9461,13.175,15.5h4.65c.5613-6.3319,5.6639-11.2823,13.175-15.5l-6.5-14.5,4.05-16.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.1218,4.5s6.6123,18.22,2,21c-3.9956,2.4081-16.822,2.8488-22,0-5.8774-3.2336,2-21,2-21s-3.4311,4.2216,2,12c4.1942,6.0068,9.225,6.4472,13,0C47.0982,8.0009,45.1218,4.5,45.1218,4.5Z"
    })));
  }
};

export default OnePieceSwimsuit;