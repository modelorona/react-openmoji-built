import React from 'react';

const TopHat = ({
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
      points: "55.5322,51.262 36.5117,52.262 17.4911,51.262 16.5877,32.3764 56,32.3764"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "55.355,32.3764 54.6817,47.2519 55.8358,21.7542 55.9525,19.1777 56.5,7.0833 16.5,7.0833 18.3184,47.2519 17.645,32.3764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5,51.262c0,0-11.2908,1.7703-17.5,1.7703S18.5,51.262,18.5,51.262c-7.3129-1.1586-14-2.0756-14-0.04 c0,3.5608,14.3269,6.4474,32,6.4474s32-2.8866,32-6.4474C68.5,49.1864,61.8129,50.1034,54.5,51.262z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "55.355,32.3764 54.6817,47.2519 55.8358,21.7542 55.9525,19.1777 56.5,7.0833 16.5,7.0833 18.3184,47.2519 17.645,32.3764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5,51.262c0,0-11.2908,1.7703-17.5,1.7703S18.5,51.262,18.5,51.262c-7.3129-1.1586-14-2.0756-14-0.04 c0,3.5608,14.3269,6.4474,32,6.4474s32-2.8866,32-6.4474C68.5,49.1864,61.8129,50.1034,54.5,51.262z"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "55.355,32.3764 54.6817,47.2519 55.8358,21.7542 55.9525,19.1777 56.5,7.0833 16.5,7.0833 18.3184,47.2519 17.645,32.3764"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5,51.262c0,0-11.2908,1.7703-17.5,1.7703S18.5,51.262,18.5,51.262c-7.3129-1.1586-14-2.0756-14-0.04 c0,3.5608,14.3269,6.4474,32,6.4474s32-2.8866,32-6.4474C68.5,49.1864,61.8129,50.1034,54.5,51.262z"
    })));
  }
};

export default TopHat;