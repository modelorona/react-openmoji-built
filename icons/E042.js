import React from 'react';

const Facebook = ({
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
      fill: "#61B2E4",
      stroke: "none",
      d: "M57,12H15c-2.2091,0-4,1.7909-4,4v42c0,2.2091,1.7909,4,4,4h42c2.2091,0,4-1.7909,4-4V16 C61,13.7909,59.2091,12,57,12z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M48.5,26.8438c0.7812,0,4.6875,0,4.6875,0v-7.0312c-3.125,0-15.625-3.125-15.625,10.1562v4.6875h-6.25 v7.8125h6.25V63h7.8125V42.4688h7.0312l0.7812-7.8125H45.375v-4.6875C45.375,26.8438,47.7188,26.8438,48.5,26.8438z"
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
      d: "M45.6188,62h12.1554 C59.5558,62,61,60.5558,61,58.7742V15.2258C61,13.4442,59.5558,12,57.7742,12H14.2258C12.4442,12,11,13.4442,11,15.2258v43.5484 C11,60.5558,12.4442,62,14.2258,62h23.4761"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6183,62V42.208h7.1251l0.7917-7.9168h-7.9168v-4.7501c0-3.1667,2.375-3.1667,3.1667-3.1667s4.7501,0,4.7501,0v-7.1251 c-3.1997-0.3243-15.8336-3.1667-15.8336,10.2918v4.7501h-6.3334v7.9168h6.3334V62"
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
      d: "M45.6188,62h12.1554 C59.5558,62,61,60.5558,61,58.7742V15.2258C61,13.4442,59.5558,12,57.7742,12H14.2258C12.4442,12,11,13.4442,11,15.2258v43.5484 C11,60.5558,12.4442,62,14.2258,62h23.4761"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6183,62V42.208h7.1251l0.7917-7.9168h-7.9168v-4.7501c0-3.1667,2.375-3.1667,3.1667-3.1667s4.7501,0,4.7501,0v-7.1251 c-3.1997-0.3243-15.8336-3.1667-15.8336,10.2918v4.7501h-6.3334v7.9168h6.3334V62"
    })));
  }
};

export default Facebook;