import React from 'react';

const PeopleWithBunnyEars = ({
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
      points: "22.727 13.085 19.727 5.085 21.727 5.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "28.727 13.085 30.727 10.085 32.727 12.085 28.727 8.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "43.643 13.085 40.643 5.085 42.643 5.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      points: "49.643 13.085 51.643 10.085 53.643 12.085 49.643 8.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "32.727 12.085 31.727 8.085 28.727 8.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "53.643 12.085 52.643 8.085 49.643 8.085"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "25.6962",
      cy: "14.1787",
      r: "3",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M29.7274,27.0849l-.6185,6,1.6185,5,2,12,2.7,11h-3.3l-3.4-11-3-11h-1l-1.4,22h-3.3l-.3-23,1.5006-5.8774-.5006-5.1226s0-2-1,0l1,2v3l-3-3v-5l3-2,1-1h7l2,1,1,2,1,3-2,4h-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M50.7274,27.0849l-.6026,6,1.6026,5,2,12,2.7,11h-3.3l-3.4-11-3-11h-1l-1.4,22h-3.3l-.3-23,1.66-5.9493-.66-5.0507s0-2-1,0l1,2v3l-3-3v-5l3-2,1-1h7l2,1,1,2,1,3-2,4h-1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.6122",
      cy: "14.1787",
      r: "3",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "25.6962",
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
      points: "22.727 13.085 19.727 5.085 21.727 5.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "28.727 13.085 30.727 10.085 32.727 12.085 28.727 8.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "32.727 12.085 31.727 8.085 28.727 8.085"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.6122",
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
      points: "43.643 13.085 40.643 5.085 42.643 5.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "49.643 13.085 51.643 10.085 53.643 12.085 49.643 8.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "53.643 12.085 52.643 8.085 49.643 8.085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7274,27.0849v4a24.3894,24.3894,0,0,0,.3926,3.9609l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9337l1.3418,8.0546c.1807,1.085.5439,2.8466.8057,3.9151l1.747,7.1152c.2618,1.0683-.2656,1.9423-1.1728,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L29.3182,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9962L23.454,59.0888a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.247-19a27.042,27.042,0,0,1,.3027-3.9727l.3418-2.0546a29.2506,29.2506,0,0,0,.3291-3.9727v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7274,27.0849v4a26.59,26.59,0,0,0,.36,3.9668l.1953,1.0664c.1982,1.0811.5088,2.8545.6894,3.94l1.3418,8.0546c.1807,1.085.544,2.8467.8057,3.9151l1.748,7.1153c.2617,1.0683-.2656,1.9423-1.1738,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L50.2342,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408L47.17,41.0146c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.6269,1.9962L44.37,59.0888a2.0027,2.0027,0,0,1-1.7764,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.248-19a25.1141,25.1141,0,0,1,.3291-3.9678l.373-2.0644a27.0137,27.0137,0,0,0,.3555-3.9678v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.2274,32.8359l-2.8848-4.1133A2.9346,2.9346,0,0,1,17.4,25.4892l2.121-2.8086a4.5462,4.5462,0,0,1,3.2061-1.5957h6a3.5548,3.5548,0,0,1,2.8945,1.7891l1.211,2.4219a3.9983,3.9983,0,0,1-.1573,3.49l-2.6572,4.2987"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.31,33.0849l-3.0537-4.3613a2.94,2.94,0,0,1,.06-3.2344l2.1211-2.8086a4.5458,4.5458,0,0,1,3.206-1.5957h6a3.5547,3.5547,0,0,1,2.8945,1.7891l1.211,2.4219a4.0814,4.0814,0,0,1-.1309,3.5058L51.06,33.0849"
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
      cx: "25.6962",
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
      points: "22.727 13.085 19.727 5.085 21.727 5.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "28.727 13.085 30.727 10.085 32.727 12.085 28.727 8.085 25.727 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "32.727 12.085 31.727 8.085 28.727 8.085"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.6122",
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
      points: "43.643 13.085 40.643 5.085 42.643 5.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "49.643 13.085 51.643 10.085 53.643 12.085 49.643 8.085 46.643 11.085"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6",
      points: "53.643 12.085 52.643 8.085 49.643 8.085"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7274,27.0849v4a24.3894,24.3894,0,0,0,.3926,3.9609l.2148,1.0782c.2158,1.0781.541,2.8486.7217,3.9337l1.3418,8.0546c.1807,1.085.5439,2.8466.8057,3.9151l1.747,7.1152c.2618,1.0683-.2656,1.9423-1.1728,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L29.3182,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408l-1.9472-7.1406c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.627,1.9962L23.454,59.0888a2.0027,2.0027,0,0,1-1.7774,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.247-19a27.042,27.042,0,0,1,.3027-3.9727l.3418-2.0546a29.2506,29.2506,0,0,0,.3291-3.9727v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.7274,27.0849v4a26.59,26.59,0,0,0,.36,3.9668l.1953,1.0664c.1982,1.0811.5088,2.8545.6894,3.94l1.3418,8.0546c.1807,1.085.544,2.8467.8057,3.9151l1.748,7.1153c.2617,1.0683-.2656,1.9423-1.1738,1.9423a2.6669,2.6669,0,0,1-2.2412-1.9111L50.2342,51.996c-.3252-1.0517-.8271-2.7793-1.1172-3.8408L47.17,41.0146c-.29-1.0615-.751-1.93-1.0264-1.93s-.5576.8984-.6269,1.9962L44.37,59.0888a2.0027,2.0027,0,0,1-1.7764,1.9961,1.8858,1.8858,0,0,1-1.6758-2l-.248-19a25.1141,25.1141,0,0,1,.3291-3.9678l.373-2.0644a27.0137,27.0137,0,0,0,.3555-3.9678v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.2274,32.8359l-2.8848-4.1133A2.9346,2.9346,0,0,1,17.4,25.4892l2.121-2.8086a4.5462,4.5462,0,0,1,3.2061-1.5957h6a3.5548,3.5548,0,0,1,2.8945,1.7891l1.211,2.4219a3.9983,3.9983,0,0,1-.1573,3.49l-2.6572,4.2987"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.31,33.0849l-3.0537-4.3613a2.94,2.94,0,0,1,.06-3.2344l2.1211-2.8086a4.5458,4.5458,0,0,1,3.206-1.5957h6a3.5547,3.5547,0,0,1,2.8945,1.7891l1.211,2.4219a4.0814,4.0814,0,0,1-.1309,3.5058L51.06,33.0849"
    })));
  }
};

export default PeopleWithBunnyEars;