import React from 'react';

const Cigarette = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M66.9875,42.1803H5.0124C4.4556,42.1803,4,41.7247,4,41.1678v-7.6418c0-0.5568,0.4556-1.0124,1.0124-1.0124h61.9751 c0.5568,0,1.0125,0.4556,1.0125,1.0124v7.6418C68,41.7247,67.5444,42.1803,66.9875,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M67,42.1803H50.125c-0.55,0-1-0.45-1-1v-7.6667c0-0.55,0.45-1,1-1H67c0.55,0,1,0.45,1,1v7.6667 C68,41.7303,67.55,42.1803,67,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.0068,42.1803H4.9932C4.4469,42.1803,4,41.7333,4,41.1871v-7.6803c0-0.5463,0.4469-0.9932,0.9932-0.9932h5.0136 c0.5463,0,0.9932,0.4469,0.9932,0.9932v7.6803C11,41.7333,10.5531,42.1803,10.0068,42.1803z"
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
      d: "M66.9875,42.1803H5.0124C4.4556,42.1803,4,41.7247,4,41.1678v-7.6418c0-0.5568,0.4556-1.0124,1.0124-1.0124h61.9751 c0.5568,0,1.0125,0.4556,1.0125,1.0124v7.6418C68,41.7247,67.5444,42.1803,66.9875,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M67,42.1803H50.125c-0.55,0-1-0.45-1-1v-7.6667c0-0.55,0.45-1,1-1H67c0.55,0,1,0.45,1,1v7.6667 C68,41.7303,67.55,42.1803,67,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.0068,42.1803H4.9932C4.4469,42.1803,4,41.7333,4,41.1871v-7.6803c0-0.5463,0.4469-0.9932,0.9932-0.9932h5.0136 c0.5463,0,0.9932,0.4469,0.9932,0.9932v7.6803C11,41.7333,10.5531,42.1803,10.0068,42.1803z"
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
      d: "M66.9875,42.1803H5.0124C4.4556,42.1803,4,41.7247,4,41.1678v-7.6418c0-0.5568,0.4556-1.0124,1.0124-1.0124h61.9751 c0.5568,0,1.0125,0.4556,1.0125,1.0124v7.6418C68,41.7247,67.5444,42.1803,66.9875,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M67,42.1803H50.125c-0.55,0-1-0.45-1-1v-7.6667c0-0.55,0.45-1,1-1H67c0.55,0,1,0.45,1,1v7.6667 C68,41.7303,67.55,42.1803,67,42.1803z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M10.0068,42.1803H4.9932C4.4469,42.1803,4,41.7333,4,41.1871v-7.6803c0-0.5463,0.4469-0.9932,0.9932-0.9932h5.0136 c0.5463,0,0.9932,0.4469,0.9932,0.9932v7.6803C11,41.7333,10.5531,42.1803,10.0068,42.1803z"
    })));
  }
};

export default Cigarette;