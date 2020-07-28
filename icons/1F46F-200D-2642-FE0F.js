import React from 'react';

const MenWithBunnyEars = ({
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
      fill: "#9b9b9a",
      points: "44.193 13.086 41.193 5.086 43.193 5.086 47.193 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "50.193 13.086 52.193 10.086 54.193 12.086 50.193 8.086 47.193 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "23.143 13.085 20.143 5.085 22.143 5.085 26.143 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "29.143 13.085 31.143 10.085 33.143 12.085 29.143 8.085 26.143 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "33.143 12.085 32.143 8.085 29.143 8.085"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M51.2773,27.0864l-.4606,6.248,1.4606,4.752,2,12,2.7,11h-3.3l-3.4-11-3-11h-1l-1.4,22h-3.3l-.3-23,1.3356-5.5752-.3356-5.4248s0-2-1,0l1,2v3l-3-3L38.11,26.7837l1.1677-2.6973,3-2,1-1h7l2,1,1.693,2.0459,1.0525,3.3408-2.7455,3.6133h-1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.1621",
      cy: "14.1802",
      r: "3",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "54.193 12.086 53.193 8.086 50.193 8.086"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M30.2275,27.0849l-.4606,6.2481,1.4606,4.7519,2,12,2.7,11h-3.3l-3.4-11-3-11h-1l-1.4,22h-3.3l-.3-23L21.5631,32.51l-.3356-5.4249s0-2-1,0l1,2v3l-3-3L17.06,26.7823l1.1677-2.6974,3-2,1-1h7l2,1,1.693,2.046,1.0525,3.3408-2.7455,3.6132h-1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.1123",
      cy: "14.1787",
      r: "3",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "47.2855",
      cy: "14.1802",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "44.317 13.086 41.317 5.086 43.317 5.086 47.317 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "50.317 13.086 52.317 10.086 54.317 12.086 50.317 8.086 47.317 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "54.317 12.086 53.317 8.086 50.317 8.086"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.7688,26.7837l-.1269,4.95a16.9817,16.9817,0,0,0,.0674,3.3141l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9336l1.3418,8.0546c.1807,1.085.5439,2.8467.8057,3.9151L56.54,59.144c.2618,1.0684-.2656,1.9424-1.1728,1.9424a2.6671,2.6671,0,0,1-2.2412-1.9111l-2.2188-7.1778c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9961L45.0433,59.09a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8859,1.8859,0,0,1-1.6758-2l-.247-19a27.0409,27.0409,0,0,1,.3027-3.9727l.1281-2.0785a35.1212,35.1212,0,0,0-.0308-4.36l-.0023-2.5889"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.3551,32.8374l-3.1406-4.1133a2.7371,2.7371,0,0,1,.0629-3.2334l2.309-2.8086a5.1176,5.1176,0,0,1,3.49-1.5957h6.532A3.9232,3.9232,0,0,1,53.76,22.8755l1.3184,2.4218a3.7088,3.7088,0,0,1-.1713,3.49l-2.8928,4.2988"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.2357",
      cy: "14.1787",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "23.267 13.085 20.267 5.085 22.267 5.085 26.267 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "29.267 13.085 31.267 10.085 33.267 12.085 29.267 8.085 26.267 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "33.267 12.085 32.267 8.085 29.267 8.085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.719,26.7823l-.1269,4.95a16.98,16.98,0,0,0,.0674,3.314l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9337l1.3418,8.0546c.1807,1.085.5439,2.8466.8057,3.9151l1.747,7.1152c.2618,1.0683-.2656,1.9423-1.1728,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L29.8577,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9962L23.9935,59.0888a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.247-19a27.042,27.042,0,0,1,.3027-3.9727l.1281-2.0785a35.1212,35.1212,0,0,0-.0308-4.36l-.0023-2.5889"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.3053,32.8359l-3.1406-4.1133a2.7371,2.7371,0,0,1,.0628-3.2334l2.3091-2.8086a5.1176,5.1176,0,0,1,3.49-1.5957h6.532A3.9233,3.9233,0,0,1,32.71,22.874l1.3184,2.4219a3.7088,3.7088,0,0,1-.1713,3.49l-2.8928,4.2987"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "47.2855",
      cy: "14.1802",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "44.317 13.086 41.317 5.086 43.317 5.086 47.317 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "50.317 13.086 52.317 10.086 54.317 12.086 50.317 8.086 47.317 11.086"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "54.317 12.086 53.317 8.086 50.317 8.086"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.7688,26.7837l-.1269,4.95a16.9817,16.9817,0,0,0,.0674,3.3141l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9336l1.3418,8.0546c.1807,1.085.5439,2.8467.8057,3.9151L56.54,59.144c.2618,1.0684-.2656,1.9424-1.1728,1.9424a2.6671,2.6671,0,0,1-2.2412-1.9111l-2.2188-7.1778c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9961L45.0433,59.09a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8859,1.8859,0,0,1-1.6758-2l-.247-19a27.0409,27.0409,0,0,1,.3027-3.9727l.1281-2.0785a35.1212,35.1212,0,0,0-.0308-4.36l-.0023-2.5889"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.3551,32.8374l-3.1406-4.1133a2.7371,2.7371,0,0,1,.0629-3.2334l2.309-2.8086a5.1176,5.1176,0,0,1,3.49-1.5957h6.532A3.9232,3.9232,0,0,1,53.76,22.8755l1.3184,2.4218a3.7088,3.7088,0,0,1-.1713,3.49l-2.8928,4.2988"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.2357",
      cy: "14.1787",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "23.267 13.085 20.267 5.085 22.267 5.085 26.267 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "29.267 13.085 31.267 10.085 33.267 12.085 29.267 8.085 26.267 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "33.267 12.085 32.267 8.085 29.267 8.085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.719,26.7823l-.1269,4.95a16.98,16.98,0,0,0,.0674,3.314l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9337l1.3418,8.0546c.1807,1.085.5439,2.8466.8057,3.9151l1.747,7.1152c.2618,1.0683-.2656,1.9423-1.1728,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L29.8577,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9962L23.9935,59.0888a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.247-19a27.042,27.042,0,0,1,.3027-3.9727l.1281-2.0785a35.1212,35.1212,0,0,0-.0308-4.36l-.0023-2.5889"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.3053,32.8359l-3.1406-4.1133a2.7371,2.7371,0,0,1,.0628-3.2334l2.3091-2.8086a5.1176,5.1176,0,0,1,3.49-1.5957h6.532A3.9233,3.9233,0,0,1,32.71,22.874l1.3184,2.4219a3.7088,3.7088,0,0,1-.1713,3.49l-2.8928,4.2987"
    })));
  }
};

export default MenWithBunnyEars;