import React from 'react';

const Cactus = ({
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
      fill: "#B1CC33",
      stroke: "none",
      d: "M41.5164,64.8245V14.9953c0-4.0273-2.9398-7.2921-6.5664-7.2921c-3.6266,0-6.5664,3.2648-6.5664,7.2921 v49.8293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M45.1603,54.0707h8.3573c2.6374,0,4.7756-2.1381,4.7756-4.7756V31.592 c0-2.4942-1.8236-4.7216-4.3065-4.9584c-2.8483-0.2716-5.2447,1.9609-5.2447,4.7531v6.3643c0,3.7382,0.1565,4.7691-3.5817,4.7691 h-3.3913l0.0793,11.5507H45.1603"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M25.4062,45.7384l-7.0128-0.0689c-2.7949,0-7.1743-4.9427-7.1743-7.5801l0.2054-11.2839 c0-2.4942,2.5453-3.8131,5.1765-4.0499C19.6194,22.484,20,23.3739,20,26.1661l1.6106,3.2526c0,3.7382-0.1659,4.7691,3.7956,4.7691 H29l-0.084,11.5507H25.4062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#b1cc33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.9333,15.7596"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5164,63.7969V14.8472c0-3.9562-2.9398-7.1634-6.5664-7.1634s-6.5664,3.2072-6.5664,7.1634v48.9497"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.5244,44.6946h-6.3643c-3.7382,0-6.7685-3.0303-6.7685-6.7686V26.7862c0-2.7923,2.3964-5.0247,5.2447-4.7531 c2.4829,0.2367,4.3065,2.4642,4.3065,4.9584v4.7678c0,1.869,1.5152,3.3842,3.3842,3.3842h0.1975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.2885,53.0519h8.3573c2.6374,0,4.7756-2.1381,4.7756-4.7756V30.5731c0-2.4942-1.8236-4.7216-4.3065-4.9584 c-2.8483-0.2716-5.2447,1.9609-5.2447,4.7531v6.3643c0,3.7382,0.1565,6.7685-3.5817,6.7685"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3378",
      cy: "20.2197",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "26.9065",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "54.8584",
      cy: "39.3221",
      r: "1",
      fill: "#000000",
      stroke: "none"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5164,63.7969V14.8472c0-3.9562-2.9398-7.1634-6.5664-7.1634s-6.5664,3.2072-6.5664,7.1634v48.9497"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.5244,44.6946h-6.3643c-3.7382,0-6.7685-3.0303-6.7685-6.7686V26.7862c0-2.7923,2.3964-5.0247,5.2447-4.7531 c2.4829,0.2367,4.3065,2.4642,4.3065,4.9584v4.7678c0,1.869,1.5152,3.3842,3.3842,3.3842h0.1975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.2885,53.0519h8.3573c2.6374,0,4.7756-2.1381,4.7756-4.7756V30.5731c0-2.4942-1.8236-4.7216-4.3065-4.9584 c-2.8483-0.2716-5.2447,1.9609-5.2447,4.7531v6.3643c0,3.7382,0.1565,6.7685-3.5817,6.7685"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.3378",
      cy: "20.2197",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15",
      cy: "26.9065",
      r: "1",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "54.8584",
      cy: "39.3221",
      r: "1",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default Cactus;