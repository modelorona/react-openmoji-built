import React from 'react';

const CaliforniaFlag = ({
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
      fill: "#fff",
      d: "M67 17H5.31909V54.8044H67V17Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      "fill-rule": "evenodd",
      d: "M50.9767 40H21.0233C25.4306 39.3639 30.5453 39 36 39C41.4547 39 46.5694 39.3639 50.9767 40Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M50.9767 40V41C51.5012 41 51.9366 40.5948 51.9741 40.0716C52.0117 39.5484 51.6387 39.0852 51.1195 39.0103L50.9767 40ZM21.0233 40L20.8805 39.0103C20.3614 39.0852 19.9883 39.5484 20.0259 40.0716C20.0634 40.5948 20.4988 41 21.0233 41V40ZM50.9767 39H21.0233V41H50.9767V39ZM36 38C30.5029 38 25.3401 38.3666 20.8805 39.0103L21.1662 40.9897C25.5212 40.3612 30.5878 40 36 40V38ZM51.1195 39.0103C46.6599 38.3666 41.4972 38 36 38V40C41.4122 40 46.4788 40.3612 50.8339 40.9897L51.1195 39.0103Z"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "48",
      width: "62",
      height: "7",
      fill: "#EA5A47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "#EA5A47",
      strokeLinejoin: "round",
      d: "M16.5 23L17.0613 24.7275H18.8776L17.4082 25.7951L17.9695 27.5225L16.5 26.4549L15.0305 27.5225L15.5918 25.7951L14.1224 24.7275H15.9387L16.5 23Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "#A57939",
      strokeLinejoin: "round",
      d: "M25.5 32.5L23.5 34L24 34.5L24.8271 34.4503V35.4503C28.4074 35.4503 27.7699 32.8316 30.5 34C30.5 34 29.4151 38.1054 26.9733 38.4315L26.9789 39.0621C28.1505 39.0621 27.3074 39.0403 28.479 39.0403C30.5344 37.752 32.1332 36.5621 33.5 35C34.1926 37.12 36.8577 37.12 35 38.5H36.7574C36.7574 38.5 36.9414 38.3277 37.2588 37.89C37.5762 37.4523 35.962 34.9708 35.962 34.9708C35.962 34.9708 38.5 35.5 39.5 35C38.7039 36.9627 41.4817 38.222 38.5 38.6L39 39H40.5C40.5 39 42.3158 36.7973 42.6319 35.4503C43.1828 38.3454 47.7828 36.6894 45 39H46L47.5 38C45.5794 36 45.9673 28.5227 40.4686 28.5227C37.9686 28.5227 37.5 29 36.5 29C35.5 29 33 28 32 28C31 28 27.8489 29.8594 27.5 30C27.1511 30.1406 26.3271 30.541 26.3271 30.541C25.8271 30.541 24.8271 32.041 24.8271 32.041L25.5 32.5Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#A57939",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "M40.5 44.5H53M19 44.5H35.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
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
      d: "M67 17H5V55H67V17Z"
    })));
  }
};

export default CaliforniaFlag;