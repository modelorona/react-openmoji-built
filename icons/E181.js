import React from 'react';

const DrunkPerson = ({
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
      d: "M19.0928,39.1045c0,0,0.625,1,1,2v3l4.125,6l2.875-2L24.292,42.25c0,0-0.9258-1.0312-1.459-1.2705 c-1.209-0.542-2.001-0.501-2.042-0.542c-0.7441-0.7441-0.8232-0.8955-1.0732-1.2705s-0.2813-1.125-0.9688-0.4688"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M33.1875,25.1875L28.2998,67h3.2998l6.3008-27h2.1992l-0.3144,12.7998L37.4004,67h3.2998l4.3154-14 l1.2598-13.125L45.75,27.0625c0,0,3.4375,15.1875,4.6875,16.375s2.875,0.4688,2.875,0.4688L48,21.4375l-2.5625-5.25l-3.875-1.4375 L30.875,17.0625l-7,11.8125l-6.5625,7.6875c0,0,0.1592,0.8359,2.5625,0.75c1.75-0.0625,4.792-4.1406,5.375-4.8955 c1.5938-2.0625,6.4063-11.2295,8.0625-11.292C33.6006,21.1143,33.3125,24.625,33.1875,25.1875z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.9688",
      cy: "8.0938",
      r: "3",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.9688",
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
      d: "M44,21l2.0361,16.8896c0.1319,1.0918,0.1534,2.8809,0.0479,3.9766l-0.877,9.1426c-0.1054,1.0957-0.456,2.8516-0.7802,3.9023 l-3.1377,10.1778C40.9648,66.1396,39.958,67,39.0508,67c-0.9082,0-1.499-0.8877-1.3145-1.9717l1.7129-10.0566 c0.1846-1.084,0.3584-2.8711,0.3858-3.9707l0.2148-8.6016c0.0273-1.0996-0.4453-1.999-1.0498-1.999s-1.3066,0.876-1.5605,1.9463 l-5.379,22.707C31.8066,66.124,30.8574,67,29.9492,67c-0.9072,0-1.5459-0.8945-1.4199-1.9863L33.5,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,36c0,0,0.6748-0.4502,1.5-1s2.6406-2.9395,4.0352-5.3096l4.9296-8.3808C29.8594,18.9395,32.7998,16.5498,35,16s5.7998-1,8-1 s4.3184,2.2275,4.707,4.9497l0.586,4.1006c0.3886,2.7222,1.3252,7.1128,2.081,9.7573L53,43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19,39c0,0,0.625,1,1,2v3l4.125,6L27,48l-3.333-4.999"
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
      cx: "36.9688",
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
      d: "M44,21l2.0361,16.8896c0.1319,1.0918,0.1534,2.8809,0.0479,3.9766l-0.877,9.1426c-0.1054,1.0957-0.456,2.8516-0.7802,3.9023 l-3.1377,10.1778C40.9648,66.1396,39.958,67,39.0508,67c-0.9082,0-1.499-0.8877-1.3145-1.9717l1.7129-10.0566 c0.1846-1.084,0.3584-2.8711,0.3858-3.9707l0.2148-8.6016c0.0273-1.0996-0.4453-1.999-1.0498-1.999s-1.3066,0.876-1.5605,1.9463 l-5.379,22.707C31.8066,66.124,30.8574,67,29.9492,67c-0.9072,0-1.5459-0.8945-1.4199-1.9863L33.5,22"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,36c0,0,0.6748-0.4502,1.5-1s2.6406-2.9395,4.0352-5.3096l4.9296-8.3808C29.8594,18.9395,32.7998,16.5498,35,16s5.7998-1,8-1 s4.3184,2.2275,4.707,4.9497l0.586,4.1006c0.3886,2.7222,1.3252,7.1128,2.081,9.7573L53,43"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19,39c0,0,0.625,1,1,2v3l4.125,6L27,48l-3.333-4.999"
    })));
  }
};

export default DrunkPerson;