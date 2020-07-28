import React from 'react';

const Sauropod = ({
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
      fill: "#A57939",
      stroke: "none",
      d: "M5,52c0,0,15-3,17-10s14.6667-11.1667,20.8333-8.5833c0,0,6.3333,0.5833,8.25-7.4167C53,18,55,9,62,10 s6.1667,6.3333,4.0833,7.1667C64,18,61,18,60,19.5s-2.1667,16.1667-6.5833,19.8333c0,0-4.9167,6.5-4.6667,9.5833 C49,52,50.5833,61.25,47,61c-3.6293-0.2532-3-7-3-8s-8-3-11-1s-2.1667,8-4.5833,8.5S23.5,60.8333,22.75,59.9167 C22,59,23.3494,53.229,22.25,51.25"
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
      d: "M5,52c0,0,15-3,17-10 s14.6667-11.1667,20.8333-8.5833c0,0,6.3333,0.5833,8.25-7.4167C53,18,55,9,62,10s6.1667,6.3333,4.0833,7.1667C64,18,61,18,60,19.5 s-2.1667,16.1667-6.5833,19.8333c0,0-4.9167,6.5-4.6667,9.5833C49,52,50.5833,61.25,47,61c-3.6293-0.2532-3-7-3-8s-8-3-11-1 s-2.1667,8-4.5833,8.5S23.5,60.8333,22.75,59.9167C22,59,23.3494,53.229,22.25,51.25"
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
      d: "M5,52c0,0,15-3,17-10 s14.6667-11.1667,20.8333-8.5833c0,0,6.3333,0.5833,8.25-7.4167C53,18,55,9,62,10s6.1667,6.3333,4.0833,7.1667C64,18,61,18,60,19.5 s-2.1667,16.1667-6.5833,19.8333c0,0-4.9167,6.5-4.6667,9.5833C49,52,50.5833,61.25,47,61c-3.6293-0.2532-3-7-3-8s-8-3-11-1 s-2.1667,8-4.5833,8.5S23.5,60.8333,22.75,59.9167C22,59,23.3494,53.229,22.25,51.25"
    })));
  }
};

export default Sauropod;