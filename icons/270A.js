import React from 'react';

const RaisedFist = ({
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
    }), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M21.2413,36.1672c-2.0638-0.1527-3.6226-1.9342-3.5-4v-7c-0.2578-1.933,1.1001-3.709,3.0331-3.9669 c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337v7C24.864,34.233,23.3051,36.0145,21.2413,36.1672z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M41.7566,38.9362c-2.0638-0.1527-3.6226-1.9342-3.5-4v-15c-0.2578-1.933,1.1001-3.709,3.0331-3.9669 c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337v15 C45.3792,37.002,43.8204,38.7835,41.7566,38.9362z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M35.2055,38.9362c-2.0638-0.1527-3.6226-1.9342-3.5-4v-15c-0.2578-1.933,1.1001-3.709,3.0331-3.9669 c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337v15 C38.8281,37.002,37.2693,38.7835,35.2055,38.9362z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M27.5528,40.1672c-2.0638-0.1527-3.6226-1.9342-3.5-4v-15c-0.2578-1.933,1.1001-3.709,3.0331-3.9669 c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337v15 C31.1754,38.233,29.6166,40.0145,27.5528,40.1672z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M20.0368,41.1694c-2.0638-0.1527-3.6226-1.9342-3.5-4v-15c-0.2578-1.933,1.1001-3.709,3.0331-3.9669 c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337v15 C23.6594,39.2352,22.1006,41.0167,20.0368,41.1694z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M31.9818,16.3328c-0.2578-1.933,2.7585-0.1838,6.218,0.4567c2.3329,0.4319,4.5808-3.02,4.8386-1.087 c-0.2372,0.8694,3.7325-2.5368,3.1508,7.8034"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.2119",
      x2: "44.1776",
      y1: "20.053",
      y2: "20.6948",
      fill: "#fcea2b",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M15.7504,36.1672c1.1419,8.8555,10.7801,19.5839,19.4548,19.4524c9.667,0,19.3573-8.7184,19.3573-19.0617 l0,0l-0.9282-10.5345c0-5.1523-14.0999-4.1388-16.301-4.0927L16,29.4275"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M43.7413,34.9892v-2.333 c0-1.1-1.789-2.2-3.976-2.441l-1.049-0.117c-2.187-0.242-3.976-1.851-3.976-3.774s1.8-3.334,4-3.334h10 c2.2011-0.0448,4.0567,1.6316,4.235,3.826l0.657,11.213"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9633,38.0552 c1.6302-1.4796,3.6236-2.5003,5.777-2.958"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.7761,39.479 c1.1988,9.0291,8.9653,15.7322,18.0727,15.5981c10.1492,0,18.7855-7.1738,18.7855-17.7199"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.7761",
      x2: "16.7761",
      y1: "39.479",
      y2: "35.9583",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.3076,32.9647 c-2.0638-0.1527-3.6226-1.9342-3.5-4v-7c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331 c0.0413,0.3099,0.0413,0.6239,0,0.9337v7C23.9302,31.0305,22.3714,32.812,20.3076,32.9647z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.7444,31.8273 c-3.322,1.2271-4.997-1.9342-4.8744-4v-7c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331 c0.0413,0.3099,0.0413,0.6239,0,0.9337"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.9324,24.4656V19.148 c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9948,19.148 c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337"
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
      d: "M43.7413,34.9892v-2.333 c0-1.1-1.789-2.2-3.976-2.441l-1.049-0.117c-2.187-0.242-3.976-1.851-3.976-3.774s1.8-3.334,4-3.334h10 c2.2011-0.0448,4.0567,1.6316,4.235,3.826l0.657,11.213"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9633,38.0552 c1.6302-1.4796,3.6236-2.5003,5.777-2.958"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.7761,39.479 c1.1988,9.0291,8.9653,15.7322,18.0727,15.5981c10.1492,0,18.7855-7.1738,18.7855-17.7199"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16.7761",
      x2: "16.7761",
      y1: "39.479",
      y2: "35.9583",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.3076,32.9647 c-2.0638-0.1527-3.6226-1.9342-3.5-4v-7c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331 c0.0413,0.3099,0.0413,0.6239,0,0.9337v7C23.9302,31.0305,22.3714,32.812,20.3076,32.9647z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.7444,31.8273 c-3.322,1.2271-4.997-1.9342-4.8744-4v-7c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331 c0.0413,0.3099,0.0413,0.6239,0,0.9337"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.9324,24.4656V19.148 c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9948,19.148 c-0.2578-1.933,1.1001-3.709,3.0331-3.9669c1.933-0.2578,3.709,1.1001,3.9669,3.0331c0.0413,0.3099,0.0413,0.6239,0,0.9337"
    })));
  }
};

export default RaisedFist;