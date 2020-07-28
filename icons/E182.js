import React from 'react';

const PersonWithDog = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M14.375,47.125c0,0,0.2295,0.0762,0.4395,0.248c1.5,1.2295,1.333,2.9405,1.333,2.9405l1.3281,1.4678 L22,52.375l4.75,0.1875l6.375-0.4375l3.5625,1.125l2.75-1.375c0,0,0.0625-5.8437,0.7188-5.8437c0.75,0,1.7812,1.1044,1.7812,3.9687 c0,3.125-1.7939,6.2754-7.9375,6c-0.457-0.0205,0.25,1.8125,0.25,1.8125l-0.9375,2.75l-2,2.625L31,66.25l-0.3125,0.375 c0,0-0.2637,0.4063-0.8437,0.4063c-2.7813,0-3.2188-1.4688-1.5938-2.0938c0.1309-0.0508,0.375-1.75,0.375-1.75l-2-2.0205 l-3.917,0.708l-4.125,0.208L19,63.417l-1.708,3.166c0,0,1.124,0.459-0.459,0.459c-0.374,0-2.04-0.334-2.207-2.459l0.624-3.209 l-1.208-2.041l-0.833-2l-1.917-0.5l-4.124,0.624l-1.375-1l1.75-1.75L9.2188,52.5l3.2412-2.168L14.375,47.125z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M13.583,59.71l1.667,1.664c-0.125,1-2.0713,0.8213-2.1455,1.6465c-0.1045,1.166,0.5225,0.835,0.4844,1.6904 c-0.0821,1.8418-2.4346,1.7686-3.0293,1.1866c-0.3848-0.376-0.3096-0.792,0.1484-2.1465c0.8428-2.4932,2.3545-4.25,2.3545-4.25 L13.583,59.71z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "54.9688",
      cy: "8.0938",
      r: "3",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M61.2666,51.6416l-2.1318-13.501l-0.0814-0.0046L60,37l-0.6112-7.3345L60,30l-1.4307-10.9917 C58.2852,16.8267,56.252,15,54.0518,15H54c-2.2002,0-4.2002,1.8306-4.4463,4.0171L49,23.979l0.0469,0.0257L49,24l-0.6505,6.8286 l-5.4735,2.5358l-0.709,1.0127c0,0,0.9072,2.2705,3.3769,1.581l2.4663-1.5679l-0.061,0.6402L46.0137,66l2.1602,1l5.9759-21.0105 l3.3737,8.656L65.167,65l3-2L61.2666,51.6416z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "54.9688",
      cy: "8.0938",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49,35l-3.0479,30.0098C45.8408,66.1045,46.5205,67,47.4619,67s1.9492-0.8682,2.2383-1.9297l5.4863-20.1152 c0.2891-1.0615,1.043-2.667,1.6739-3.5674l2.1992-3.1397c0.6308-0.9003,1.1035-2.5371,1.0508-3.6357l-0.4922-10.1191"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.1348,38.1406l1.8203,11.5254c0.1709,1.0869,0.7793,2.7451,1.3496,3.6846l4.8242,7.9404 c0.5703,0.9395,0.3633,2.1592-0.4619,2.709c-0.8252,0.5498-2.0342,0.2764-2.6875-0.6094l-5.2686-7.1357 c-0.6533-0.8858-1.5146-2.4483-1.914-3.4727l-2.2031-5.6533"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.9248,29.5811L59.292,19.0347C59.1602,16.8389,57.252,15,55.0518,15H55c-2.2002,0-4.2002,1.8306-4.4463,4.0171L50.084,23.23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.167,20l-3.0684,6.4443c-0.4726,0.9932-1.6269,2.2754-2.5654,2.8487l-7.5957,4.6445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13,57l5-5c0,0,17-6,23.9375-18.0625"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40,47c2,5-4,8-7,6c-0.7715-0.5137-3.8535-1.3145-7-1l-8.3281,0.3281L16,51.3125"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,58c0,2,1.25,4.501,1.25,4.501S28.6328,63.7354,28,65c-1,2,2,3,3,1s0.832-3.6641,1-4c0.4033-0.8066,1.999-1.917,2-4c0-1,0-1,0-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,60c-2.041,2.001-4.625,2-8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,59c-1.0156,0.9287-2,1-3,2s-1,3,0,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,48l-1,2c0,0-2.2441,0.2998-3,1c-0.5801,0.5371-1,3-1,3s-2.8779,1.5928-3,2c-0.0937,0.3125,1.293,2,2,2c1,0,4-1,4-1c2,0,2,3,3,4 c0.4102,0.4102,0,3-0.334,3.959C13.9863,66.9131,17,68,17.834,65.834C18.1387,65.04,19,63,19,61"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "54.9688",
      cy: "8.0938",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49,35l-3.0479,30.0098C45.8408,66.1045,46.5205,67,47.4619,67s1.9492-0.8682,2.2383-1.9297l5.4863-20.1152 c0.2891-1.0615,1.043-2.667,1.6739-3.5674l2.1992-3.1397c0.6308-0.9003,1.1035-2.5371,1.0508-3.6357l-0.4922-10.1191"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.1348,38.1406l1.8203,11.5254c0.1709,1.0869,0.7793,2.7451,1.3496,3.6846l4.8242,7.9404 c0.5703,0.9395,0.3633,2.1592-0.4619,2.709c-0.8252,0.5498-2.0342,0.2764-2.6875-0.6094l-5.2686-7.1357 c-0.6533-0.8858-1.5146-2.4483-1.914-3.4727l-2.2031-5.6533"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.9248,29.5811L59.292,19.0347C59.1602,16.8389,57.252,15,55.0518,15H55c-2.2002,0-4.2002,1.8306-4.4463,4.0171L50.084,23.23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.167,20l-3.0684,6.4443c-0.4726,0.9932-1.6269,2.2754-2.5654,2.8487l-7.5957,4.6445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13,57l5-5c0,0,17-6,23.9375-18.0625"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40,47c2,5-4,8-7,6c-0.7715-0.5137-3.8535-1.3145-7-1l-8.3281,0.3281L16,51.3125"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,58c0,2,1.25,4.501,1.25,4.501S28.6328,63.7354,28,65c-1,2,2,3,3,1s0.832-3.6641,1-4c0.4033-0.8066,1.999-1.917,2-4c0-1,0-1,0-1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27,60c-2.041,2.001-4.625,2-8,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,59c-1.0156,0.9287-2,1-3,2s-1,3,0,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,48l-1,2c0,0-2.2441,0.2998-3,1c-0.5801,0.5371-1,3-1,3s-2.8779,1.5928-3,2c-0.0937,0.3125,1.293,2,2,2c1,0,4-1,4-1c2,0,2,3,3,4 c0.4102,0.4102,0,3-0.334,3.959C13.9863,66.9131,17,68,17.834,65.834C18.1387,65.04,19,63,19,61"
    })));
  }
};

export default PersonWithDog;