import React from 'react';

const Plunger = ({
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
      fill: "#a57939",
      d: "M38.3053,42.0308a.9969.9969,0,0,1-.707-.293L15.9049,20.0444a2.9565,2.9565,0,0,1,4.1817-4.1806L41.78,37.5571a1,1,0,0,1,0,1.4141c-.3906.3906-2.3769,2.376-2.7675,2.7666A.9971.9971,0,0,1,38.3053,42.0308Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M61.0807,41.7407a3.224,3.224,0,0,0-3.28-.7073,11.778,11.778,0,0,0-12.737-1.9821l-2.39-2.3887a1,1,0,0,0-1.4141,0l-4.5566,4.5557a.9995.9995,0,0,0,0,1.414l2.39,2.39A11.7809,11.7809,0,0,0,41.0582,57.74a3.1428,3.1428,0,0,0,5.1749,3.2982L61.0807,46.1919A3.15,3.15,0,0,0,61.0807,41.7407Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M61.0807,41.7407a3.23,3.23,0,0,0-4.4512,0L41.7819,56.5874a3.1475,3.1475,0,0,0,4.4512,4.4512L61.0807,46.1919A3.15,3.15,0,0,0,61.0807,41.7407Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56,43.7834l1.3361-1.336a2.1541,2.1541,0,0,1,3.0374,0h0a2.1541,2.1541,0,0,1,0,3.0374l-14.847,14.847a2.1541,2.1541,0,0,1-3.0374,0h0a2.1541,2.1541,0,0,1,0-3.0374L43.7834,56Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,38.7255,16.6124,19.3379a1.9626,1.9626,0,0,1,0-2.7672h0a1.9626,1.9626,0,0,1,2.7672,0L38.7672,35.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.4327,40.5239a10.8744,10.8744,0,0,0-10.5719-.2612l-2.8933-2.8933L37.411,41.9258l2.8934,2.8933a10.8747,10.8747,0,0,0,.239,10.5343"
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
      d: "M56,43.7834l1.3361-1.336a2.1541,2.1541,0,0,1,3.0374,0h0a2.1541,2.1541,0,0,1,0,3.0374l-14.847,14.847a2.1541,2.1541,0,0,1-3.0374,0h0a2.1541,2.1541,0,0,1,0-3.0374L43.7834,56Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,38.7255,16.6124,19.3379a1.9626,1.9626,0,0,1,0-2.7672h0a1.9626,1.9626,0,0,1,2.7672,0L38.7672,35.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.4327,40.5239a10.8744,10.8744,0,0,0-10.5719-.2612l-2.8933-2.8933L37.411,41.9258l2.8934,2.8933a10.8747,10.8747,0,0,0,.239,10.5343"
    })));
  }
};

export default Plunger;