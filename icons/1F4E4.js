import React from 'react';

const OutboxTray = ({
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
      fill: "#92D3F5",
      stroke: "none",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0031,26.1404h-1.5889 c-0.5519,0-0.9994,0.4474-0.9994,0.9994v4.4112c0,0.5519-0.4474,0.9994-0.9994,0.9994h-4.3313 c-0.5519,0-0.9994-0.4474-0.9994-0.9994v-4.4112c0-0.5519-0.4474-0.9994-0.9994-0.9994h-1.5788 c-0.8109,0-1.2842-0.9149-0.8157-1.5768l5.7482-8.1208c0.3983-0.5627,1.2331-0.5627,1.6314,0l5.7482,8.1208 C42.2873,25.2255,41.814,26.1404,41.0031,26.1404z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,42.1886v10.7401c0,1.711-1.3914,3.0922-3.0922,3.0922h-43.908c-1.6569,0-3-1.3431-3-3V42.0964c0-1.6569,1.3431-3,3-3h5.4067 c1.1204,0,2.2273,0.523,2.7865,1.4938c0.5049,0.8765,1.4431,1.4643,2.5154,1.4643l11.2863,0.0103l11.2864-0.0103 c1.0722,0,2.0104-0.5878,2.5154-1.4643c0.5593-0.9708,1.6662-1.4938,2.7865-1.4938h5.3248C59.6086,39.0964,61,40.4776,61,42.1886z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,53.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,44.2333"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0031,26.1404h-1.5889 c-0.5519,0-0.9994,0.4474-0.9994,0.9994v4.4112c0,0.5519-0.4474,0.9994-0.9994,0.9994h-4.3313 c-0.5519,0-0.9994-0.4474-0.9994-0.9994v-4.4112c0-0.5519-0.4474-0.9994-0.9994-0.9994h-1.5788 c-0.8109,0-1.2842-0.9149-0.8157-1.5768l5.7482-8.1208c0.3983-0.5627,1.2331-0.5627,1.6314,0l5.7482,8.1208 C42.2873,25.2255,41.814,26.1404,41.0031,26.1404z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,42.1886v10.7401c0,1.711-1.3914,3.0922-3.0922,3.0922h-43.908c-1.6569,0-3-1.3431-3-3V42.0964c0-1.6569,1.3431-3,3-3h5.4067 c1.1204,0,2.2273,0.523,2.7865,1.4938c0.5049,0.8765,1.4431,1.4643,2.5154,1.4643l11.2863,0.0103l11.2864-0.0103 c1.0722,0,2.0104-0.5878,2.5154-1.4643c0.5593-0.9708,1.6662-1.4938,2.7865-1.4938h5.3248C59.6086,39.0964,61,40.4776,61,42.1886z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,53.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,44.2333"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0031,26.1404h-1.5889 c-0.5519,0-0.9994,0.4474-0.9994,0.9994v4.4112c0,0.5519-0.4474,0.9994-0.9994,0.9994h-4.3313 c-0.5519,0-0.9994-0.4474-0.9994-0.9994v-4.4112c0-0.5519-0.4474-0.9994-0.9994-0.9994h-1.5788 c-0.8109,0-1.2842-0.9149-0.8157-1.5768l5.7482-8.1208c0.3983-0.5627,1.2331-0.5627,1.6314,0l5.7482,8.1208 C42.2873,25.2255,41.814,26.1404,41.0031,26.1404z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61,42.1886v10.7401c0,1.711-1.3914,3.0922-3.0922,3.0922h-43.908c-1.6569,0-3-1.3431-3-3V42.0964c0-1.6569,1.3431-3,3-3h5.4067 c1.1204,0,2.2273,0.523,2.7865,1.4938c0.5049,0.8765,1.4431,1.4643,2.5154,1.4643l11.2863,0.0103l11.2864-0.0103 c1.0722,0,2.0104-0.5878,2.5154-1.4643c0.5593-0.9708,1.6662-1.4938,2.7865-1.4938h5.3248C59.6086,39.0964,61,40.4776,61,42.1886z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,53.4167"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6526,44.2333"
    })));
  }
};

export default OutboxTray;