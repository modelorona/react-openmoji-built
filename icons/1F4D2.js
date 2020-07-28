import React from 'react';

const Ledger = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      d: "M60.1001,57.0799c0.5632,0,1.0198-0.4576,1.0198-1.0222V12.0344c0-0.5645-0.4566-1.0222-1.0198-1.0222 h-43.922c-0.5632,0-1.0198,0.4576-1.0198,1.0222V39.163l36.0608,17.917H60.1001z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M60.1214,56.0122c0.5514,0,0.9985-0.447,0.9985-0.9985v-43.003c0-0.5514-0.447-0.9985-0.9985-0.9985 h-43.003c-0.5514,0-0.9985,0.447-0.9985,0.9985v44.0015H60.1214z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.1199,12.0107c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003 c0,0.5514-0.447,0.9985-0.9985,0.9985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1336,61h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-5.8828V25.6668v-3.2316v-5.4367c0-0.5514,0.447-0.9985,0.9985-0.9985 h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56.1321,60.553,55.685,61,55.1336,61z"
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
      d: "M16.1199,12.0107c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003 c0,0.5514-0.447,0.9985-0.9985,0.9985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1336,61h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-5.8828V25.6668v-3.2316v-5.4367c0-0.5514,0.447-0.9985,0.9985-0.9985 h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56.1321,60.553,55.685,61,55.1336,61z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "23.4114",
      y2: "23.4114",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "29.4469",
      y2: "29.4469",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "35.4823",
      y2: "35.4823",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.7116",
      x2: "7",
      y1: "41.5177",
      y2: "41.5177",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "47.5532",
      y2: "47.5532",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "53.5886",
      y2: "53.5886",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M16.1199,12.0107c0-0.5514,0.447-0.9985,0.9985-0.9985h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003 c0,0.5514-0.447,0.9985-0.9985,0.9985"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.1336,61h-43.003c-0.5514,0-0.9985-0.447-0.9985-0.9985v-5.8828V25.6668v-3.2316v-5.4367c0-0.5514,0.447-0.9985,0.9985-0.9985 h43.003c0.5514,0,0.9985,0.447,0.9985,0.9985v43.003C56.1321,60.553,55.685,61,55.1336,61z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "23.4114",
      y2: "23.4114",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "29.4469",
      y2: "29.4469",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "35.4823",
      y2: "35.4823",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.7116",
      x2: "7",
      y1: "41.5177",
      y2: "41.5177",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "47.5532",
      y2: "47.5532",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "7",
      x2: "15.7116",
      y1: "53.5886",
      y2: "53.5886",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Ledger;