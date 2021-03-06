import React from 'react';

const Stethoscope = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "51.5",
      r: "3",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "51.5",
      r: "1.5",
      fill: "#9b9b9a"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#9b9b9a",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1,13c-.5762.49-2.0521.6519-1.4611,5.4565C29.1438,22.56,33,38.5,36.5,38.5s7.1635-16.9587,7.86-20.0574c.58-2.5826.13-3.095-1.36-4.9426"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      d: "M41.2027,9.9048c1.1555.6671,1.883,1.0871,1.279,2.1332s-1.3314.6261-2.4869-.041-2.0923-1.208-1.4883-2.2541S40.0472,9.2376,41.2027,9.9048Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5,11.5c-2,1-5,2-3.8611,6.9565C28.5971,22.6263,31.1823,39.5,36.5,39.5c5.2511,0,8-18,8.86-21.0574C46.2141,15.4047,43.5,12.5,41.5,11.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.5,49.5c-5-6-5,8-10,12-11.713,9.37-21-9-7-11,5.94-.8485,6-11,6-11"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "51.5",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      d: "M32.3312,9.967c1.11-.4041,1.8091-.6585,2.1749.3466s-.3331,1.26-1.4433,1.6635-2.01.7317-2.376-.2734S31.221,10.371,32.3312,9.967Z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      d: "M41.2027,9.9048c1.1555.6671,1.883,1.0871,1.279,2.1332s-1.3314.6261-2.4869-.041-2.0923-1.208-1.4883-2.2541S40.0472,9.2376,41.2027,9.9048Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5,11.5c-2,1-5,2-3.8611,6.9565C28.5971,22.6263,31.1823,39.5,36.5,39.5c5.2511,0,8-18,8.86-21.0574C46.2141,15.4047,43.5,12.5,41.5,11.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.5,49.5c-5-6-5,8-10,12-11.713,9.37-21-9-7-11,5.94-.8485,6-11,6-11"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.5",
      cy: "51.5",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      d: "M32.3312,9.967c1.11-.4041,1.8091-.6585,2.1749.3466s-.3331,1.26-1.4433,1.6635-2.01.7317-2.376-.2734S31.221,10.371,32.3312,9.967Z"
    })));
  }
};

export default Stethoscope;