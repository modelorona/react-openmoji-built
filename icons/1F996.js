import React from 'react';

const TRex = ({
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
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M38,55c0,0,9,4,12-8S38,55,38,55z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M39,48c0,0,6.125-2.6797,6.6514,0.8374c0.1505,1.0055-0.2436,2.0175-0.9153,2.7807l-4.736,5.3818L40,57 c0.0019,0.0006,6.4303,1.91,5.1667,3.4167C43.0002,62.9998,34.0014,61.0003,34,61l0-0.0001l1-4.9998L34.9999,56 C19.003,59.9992,15.0015,45.0056,15,45h0c0.005,0.0041,14.1677,11.6649,20.0833,1.8333C41,37,38.1667,17.1667,50.5833,17.5833 c8.358,0.2805,9.844,4.7143,9.9224,7.583c0.0381,1.393-0.2557,2.417-0.2557,2.417c-0.0778,0.5793-0.1852,1.086-0.3188,1.53 c-1.1539,3.8354-4.2597,2.9991-7.0978,3.97c-3.1663,1.0832-2.0836,4.4158-2.0833,4.4167l0.0001,0C56.5,36.0001,56,43,54,41 c-2-2-3.1666,1.3332-3.1666,1.3332l-0.0001,0.0002C50.8333,42.3336,51,49,49,51"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M51,43c2,0,4,3,4,3 c1,4-4.4167,8.3333-4.4167,8.3333S62,57,52.6667,57.3333C43.3333,57.6667,46,55,46,55l0,0c0,0,3-2,5-9"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,41c0,0,2-3.8333,4.5-1.4167C50,42,47,43,46,42s-2,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,48c0,0,6.125-2.6797,6.6514,0.8374c0.1505,1.0055-0.2436,2.0174-0.9153,2.7807L40,57c0,0,6.4305,1.9098,5.1667,3.4167 C43,63,34,61,34,61l1-5c-16,4-20-11-20-11s14.1667,11.6667,20.0833,1.8333s3.0833-29.6667,15.5-29.25 c8.358,0.2805,9.844,4.7143,9.9224,7.583c0.0381,1.393-0.2557,2.417-0.2557,2.417c-0.0778,0.5793-0.1852,1.086-0.3188,1.53 c-1.1539,3.8354-4.2597,2.9991-7.0978,3.97C49.6667,34.1667,50.75,37.5,50.75,37.5C56.5,36,56,43,54,41 s-3.1667,1.3333-3.1667,1.3333S51,49,49,51"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5,44.8333c3.5,2.8333-3.9167,9.5-3.9167,9.5S62,57,52.6667,57.3333C43.3333,57.6667,46,55,46,55"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,41c0,0,2-3.8333,4.5-1.4167C50,42,47,43,46,42s-2,2-2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,48c0,0,6.125-2.6797,6.6514,0.8374c0.1505,1.0055-0.2436,2.0174-0.9153,2.7807L40,57c0,0,6.4305,1.9098,5.1667,3.4167 C43,63,34,61,34,61l1-5c-16,4-20-11-20-11s14.1667,11.6667,20.0833,1.8333s3.0833-29.6667,15.5-29.25 c8.358,0.2805,9.844,4.7143,9.9224,7.583c0.0381,1.393-0.2557,2.417-0.2557,2.417c-0.0778,0.5793-0.1852,1.086-0.3188,1.53 c-1.1539,3.8354-4.2597,2.9991-7.0978,3.97C49.6667,34.1667,50.75,37.5,50.75,37.5C56.5,36,56,43,54,41 s-3.1667,1.3333-3.1667,1.3333S51,49,49,51"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5,44.8333c3.5,2.8333-3.9167,9.5-3.9167,9.5S62,57,52.6667,57.3333C43.3333,57.6667,46,55,46,55"
    })));
  }
};

export default TRex;