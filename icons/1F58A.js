import React from 'react';

const Pen = ({
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
      fill: "#9b9b9a",
      stroke: "none",
      points: "18.407,49.7727 24.8174,56.738 17.9312,58.7066 15.515,56.3233"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "#d0cfce",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.033,59.0699 c7.3107-1.7183,14.4552-7.1937,18.0334-10.0996c5.2841-4.2911,15.6814-15.0196,22.0242-21.6934 c2.9813-3.137,3.1752-7.8102,0.4421-10.5434l-0.0001-0.0001l-0.4873-0.4872l-0.0001-0.0001 c-2.7332-2.7332-7.4063-2.5394-10.5434,0.442c-6.6738,6.3428-17.4023,16.7401-21.6934,22.0243 c-2.7631,3.4024-7.8498,10.0295-9.8201,16.9581c-0.1883,0.662,0.0198,1.3745,0.5065,1.8612L18.033,59.0699"
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
      strokeWidth: "2.0888",
      d: "M20.6719,43.5396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M24.0344,41.5056"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M23.9844,41.5773"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M23.7374,41.3302"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9613",
      d: "M17.9898,51.2794"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.8875",
      x2: "14.465",
      y1: "57.9244",
      y2: "60.347",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M33.4083,50.8796"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M33.3882,50.981"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.9151",
      x2: "57.5658",
      y1: "17.1526",
      y2: "26.8034",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.7513,14.022L44.7513,14.022c-1.1564-1.1563-3.1433-1.0441-4.4381,0.2507L27.8096,26.7763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.033,59.0699c7.3107-1.7183,14.4552-7.1937,18.0334-10.0996c5.2841-4.2911,15.6814-15.0196,22.0242-21.6934 c2.9813-3.137,3.1752-7.8102,0.4421-10.5434l-0.0001-0.0001l-0.4873-0.4872l-0.0001-0.0001 c-2.7332-2.7332-7.4063-2.5394-10.5434,0.442c-6.6738,6.3428-17.4023,16.7401-21.6934,22.0243 c-2.9058,3.5781-8.3813,10.7225-10.0996,18.0333L18.033,59.0699"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.7862",
      x2: "18.7879",
      y1: "56.0595",
      y2: "50.061",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9613"
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
      strokeWidth: "2.0888",
      d: "M20.6719,43.5396"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M24.0344,41.5056"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M23.9844,41.5773"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M23.7374,41.3302"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9613",
      d: "M17.9898,51.2794"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.8875",
      x2: "14.465",
      y1: "57.9244",
      y2: "60.347",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M33.4083,50.8796"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0888",
      d: "M33.3882,50.981"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.9151",
      x2: "57.5658",
      y1: "17.1526",
      y2: "26.8034",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.7513,14.022L44.7513,14.022c-1.1564-1.1563-3.1433-1.0441-4.4381,0.2507L27.8096,26.7763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.033,59.0699c7.3107-1.7183,14.4552-7.1937,18.0334-10.0996c5.2841-4.2911,15.6814-15.0196,22.0242-21.6934 c2.9813-3.137,3.1752-7.8102,0.4421-10.5434l-0.0001-0.0001l-0.4873-0.4872l-0.0001-0.0001 c-2.7332-2.7332-7.4063-2.5394-10.5434,0.442c-6.6738,6.3428-17.4023,16.7401-21.6934,22.0243 c-2.9058,3.5781-8.3813,10.7225-10.0996,18.0333L18.033,59.0699"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "24.7862",
      x2: "18.7879",
      y1: "56.0595",
      y2: "50.061",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9613"
    })));
  }
};

export default Pen;