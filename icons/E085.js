import React from 'react';

const Evacuate = ({
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
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M27.2646,44.9249l-5.2875,4.873a14.2156,14.2156,0,0,1-3.3,2.1l-6.85,2.84a2.2083,2.2083,0,0,1-2.708-1.051,2.3635,2.3635,0,0,1,1.2781-2.8089l7.4659-4.1523L22.33,39.9885Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M38.2887,22.9679a3.9225,3.9225,0,0,0-2.4-3.8c-1.6-.6-4-.4-6,3.6l-5.1,9.2a8.61,8.61,0,0,0-1,3.8h0a5.0677,5.0677,0,0,0,1.5,3.3l8.77,8.3a6.4776,6.4776,0,0,1,1.7,3.4l1.3,10.34c.2,1.1.8036,2,2,2a1.831,1.831,0,0,0,1.7-2l-.2-13.34a9.2539,9.2539,0,0,0-1-3.7l-4.57-7.27a6.9632,6.9632,0,0,1-.8829-4.0428Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M52.4384,36.7979l4.57,7.6a9.2539,9.2539,0,0,1,1,3.7l.2,13.01a1.831,1.831,0,0,1-1.7,2c-1.1535,0-1.8-.9-2-2l-1.3-10.01a6.4776,6.4776,0,0,0-1.7-3.4L43.9991,40.591c-1.4087-1.3672-2.4043-3.342-1.7459-7.0311l2.5078-5.7907c1.3838-2.488,2.9193-5.256,3.4268-6.1983a4.1928,4.1928,0,0,1,4.0986-2.663c2.9,0,4.4127,3.6152,4.4127,8.5632,0,2.6268-.9661,3.4846-2.2935,3.4846a3.7464,3.7464,0,0,1-1.7977-.6345Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.4288",
      cy: "14.6334",
      r: "3.5434",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "58.2085",
      cy: "14.6334",
      r: "3.5434",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M33.4786,55.438l-4.4033,1.9405a2.2448,2.2448,0,0,1-2.96-1.03,2.407,2.407,0,0,1,1.134-2.8112l5.3683-3.1564Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M39.5587,43.738,40.69,40.876l4.7949,4.95-4.8765,4.95A14.71,14.71,0,0,0,39.5587,43.738Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.2471,43.0979l-7.27,6.7a14.2156,14.2156,0,0,1-3.3,2.1l-6.85,2.84a2.2083,2.2083,0,0,1-2.708-1.051,2.3635,2.3635,0,0,1,1.2781-2.8089l7.4659-4.1523L22.0639,40.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.2887,22.9679a3.9225,3.9225,0,0,0-2.4-3.8c-1.6-.6-4-.4-6,3.6l-5.1,9.2a8.61,8.61,0,0,0-1,3.8h0a5.0677,5.0677,0,0,0,1.5,3.3l8.77,8.3a6.4776,6.4776,0,0,1,1.7,3.4l1.3,10.34c.2,1.1.8036,2,2,2a1.831,1.831,0,0,0,1.7-2l-.2-13.34a9.2539,9.2539,0,0,0-1-3.7l-4.57-7.27a6.9632,6.9632,0,0,1-.8829-4.0428"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.2288,31.0877l-5.02-.99a4.763,4.763,0,0,1-3.25-2.0683l-2.63-4.9317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.7888,23.0682,49.73,29.6154c-.5378,1.786.4268,3.4645,2.5609,4.2469,0,0,3.6555,1.2354,4.5027,1.5134,1.2347.4052,2.65,2.963,2.65,2.963"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.761,27.7692c1.3838-2.488,2.9193-5.256,3.4268-6.1983a4.1928,4.1928,0,0,1,4.0986-2.663c2.9,0,4.4127,3.6152,4.4127,8.5632,0,2.6268-.9693,3.4846-2.26,3.4846a3.66,3.66,0,0,1-1.8309-.6317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.4384,36.7979l4.57,7.6a9.2539,9.2539,0,0,1,1,3.7l.2,13.01a1.831,1.831,0,0,1-1.7,2c-1.1535,0-1.8-.9-2-2l-1.3-10.01a6.4776,6.4776,0,0,0-1.7-3.4L43.9991,40.591c-1.4087-1.3672-2.4043-3.342-1.7459-7.0311"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4372,43.8448l-6.8284,6.9316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.69,40.876l-1.1317,2.862"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.4786,55.438l-4.4033,1.9405a2.2448,2.2448,0,0,1-2.96-1.03,2.407,2.407,0,0,1,1.134-2.8112l5.3683-3.1564"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.8854,14.6334a3.5434,3.5434,0,1,1,3.5434,3.5434"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.6651,14.6334a3.5434,3.5434,0,1,1,3.5434,3.5434"
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
      d: "M29.2471,43.0979l-7.27,6.7a14.2156,14.2156,0,0,1-3.3,2.1l-6.85,2.84a2.2083,2.2083,0,0,1-2.708-1.051,2.3635,2.3635,0,0,1,1.2781-2.8089l7.4659-4.1523L22.0639,40.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.2887,22.9679a3.9225,3.9225,0,0,0-2.4-3.8c-1.6-.6-4-.4-6,3.6l-5.1,9.2a8.61,8.61,0,0,0-1,3.8h0a5.0677,5.0677,0,0,0,1.5,3.3l8.77,8.3a6.4776,6.4776,0,0,1,1.7,3.4l1.3,10.34c.2,1.1.8036,2,2,2a1.831,1.831,0,0,0,1.7-2l-.2-13.34a9.2539,9.2539,0,0,0-1-3.7l-4.57-7.27a6.9632,6.9632,0,0,1-.8829-4.0428"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.2288,31.0877l-5.02-.99a4.763,4.763,0,0,1-3.25-2.0683l-2.63-4.9317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M51.7888,23.0682,49.73,29.6154c-.5378,1.786.4268,3.4645,2.5609,4.2469,0,0,3.6555,1.2354,4.5027,1.5134,1.2347.4052,2.65,2.963,2.65,2.963"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.761,27.7692c1.3838-2.488,2.9193-5.256,3.4268-6.1983a4.1928,4.1928,0,0,1,4.0986-2.663c2.9,0,4.4127,3.6152,4.4127,8.5632,0,2.6268-.9693,3.4846-2.26,3.4846a3.66,3.66,0,0,1-1.8309-.6317"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.4384,36.7979l4.57,7.6a9.2539,9.2539,0,0,1,1,3.7l.2,13.01a1.831,1.831,0,0,1-1.7,2c-1.1535,0-1.8-.9-2-2l-1.3-10.01a6.4776,6.4776,0,0,0-1.7-3.4L43.9991,40.591c-1.4087-1.3672-2.4043-3.342-1.7459-7.0311"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4372,43.8448l-6.8284,6.9316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.69,40.876l-1.1317,2.862"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.4786,55.438l-4.4033,1.9405a2.2448,2.2448,0,0,1-2.96-1.03,2.407,2.407,0,0,1,1.134-2.8112l5.3683-3.1564"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.8854,14.6334a3.5434,3.5434,0,1,1,3.5434,3.5434"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.6651,14.6334a3.5434,3.5434,0,1,1,3.5434,3.5434"
    })));
  }
};

export default Evacuate;