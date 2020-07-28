import React from 'react';

const BeverageBox = ({
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "#f4aa41",
      points: "19.895 17 19 17 19 21 19 67 53 67 53 21 53 17 52.105 17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M27.7162,49.891a2.1678,2.1678,0,0,1-.4029-2.4062c-1.6843-3.3029-.6629-8.0165,2.7517-11.4312s8.1282-4.436,11.4312-2.7518a2.1747,2.1747,0,0,1,2.8828,2.8828c1.688,3.3068.6629,8.0165-2.7518,11.4312s-8.1244,4.44-11.4312,2.7518a2.1681,2.1681,0,0,1-2.4434-.4394l-.0364-.0372"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M41.3775,47.5468c-3.4152,3.4152-8.1253,4.44-11.4332,2.7529,13.7235,0,14.3781-13.9067,14.3781-13.9067C46.0133,39.6972,44.7889,44.1317,41.3775,47.5468Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M33.4236,51.4942a16.5715,16.5715,0,0,1-4.1366-1.1825l-.9892-.4077h1.6465c5.535,0,9.568-2.27,11.9873-6.7456a17.7932,17.7932,0,0,0,1.9954-6.7838l.07-1.4858.6778,1.3241c1.7663,3.4516.5819,8.0105-3.0175,11.6138h0A11.9469,11.9469,0,0,1,33.4236,51.4942Zm-1.395-.9112a10.6268,10.6268,0,0,0,9.0691-3.3158c2.8038-2.8073,4.0589-6.3314,3.4028-9.2245C43.8559,41.5436,41.3671,49.5427,32.0286,50.583Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M43.9121,33.6536a5.77,5.77,0,0,1,.3828,2.8624l-1.6226-1.6226,1.24-1.24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M27.7707,50.36a5.77,5.77,0,0,0,2.8868-.0817L28.7954,48.937,27.7707,50.36"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "49",
      y1: "17",
      y2: "17",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "53",
      y1: "28",
      y2: "28",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "53",
      y1: "56",
      y2: "56",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "19.895 17 19 17 19 21 19 67 53 67 53 21 53 17 52.105 17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40,14l2.7655-4.9779A7.82,7.82,0,0,1,49.6011,5H60"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.7162,49.891a2.1678,2.1678,0,0,1-.4029-2.4062c-1.6843-3.3029-.6629-8.0165,2.7517-11.4312s8.1282-4.436,11.4312-2.7518a2.1747,2.1747,0,0,1,2.8828,2.8828c1.688,3.3068.6629,8.0165-2.7518,11.4312s-8.1244,4.44-11.4312,2.7518a2.1681,2.1681,0,0,1-2.4434-.4394l-.0364-.0372"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "23",
      x2: "49",
      y1: "17",
      y2: "17",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "53",
      y1: "28",
      y2: "28",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "19",
      x2: "53",
      y1: "56",
      y2: "56",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "19.895 17 19 17 19 21 19 67 53 67 53 21 53 17 52.105 17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40,14l2.7655-4.9779A7.82,7.82,0,0,1,49.6011,5H60"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.7162,49.891a2.1678,2.1678,0,0,1-.4029-2.4062c-1.6843-3.3029-.6629-8.0165,2.7517-11.4312s8.1282-4.436,11.4312-2.7518a2.1747,2.1747,0,0,1,2.8828,2.8828c1.688,3.3068.6629,8.0165-2.7518,11.4312s-8.1244,4.44-11.4312,2.7518a2.1681,2.1681,0,0,1-2.4434-.4394l-.0364-.0372"
    })));
  }
};

export default BeverageBox;