import React from 'react';

const FearfulFace = ({
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
      fill: "#FCEA2B",
      d: "M36,13.2002c-12.5719,0-22.7998,10.2279-22.7998,22.7998c0,12.5718,10.2279,22.7998,22.7998,22.7998 c12.5718,0,22.7998-10.228,22.7998-22.7998C58.7998,23.4281,48.5718,13.2002,36,13.2002z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M31.5797,31.3465c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626 c0-2.4622,2.0004-4.4626,4.4626-4.4626S31.5797,28.8843,31.5797,31.3465"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M49.5797,31.3465c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626 c0-2.4622,2.0004-4.4626,4.4626-4.4626S49.5797,28.8843,49.5797,31.3465"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M27.7998,45.8839c0.2704-0.3562,3.3099-4.2177,8.4211-4.0038c4.6054,0.1927,7.2288,3.541,7.5789,4.0038 C38.4665,45.8839,33.1331,45.8839,27.7998,45.8839z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "23",
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
      d: "M22,25c1-1,4-7,10-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,25c-1-1-4-7-10-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7799,31.4626 c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626c0-2.4622,2.0004-4.4626,4.4626-4.4626 S31.7799,29.0004,31.7799,31.4626"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29.3173,31.9252c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2 C28.4208,29.9252,29.3173,30.8217,29.3173,31.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7799,31.4626 c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626c0-2.4622,2.0004-4.4626,4.4626-4.4626 S49.7799,29.0004,49.7799,31.4626"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.3173,31.9252c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2 C46.4208,29.9252,47.3173,30.8217,47.3173,31.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,46c0.2704-0.3562,3.3099-4.2177,8.4211-4.0038C41.0265,42.1889,43.6499,45.5372,44,46C38.6667,46,33.3333,46,28,46z"
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
      cx: "36",
      cy: "36",
      r: "23",
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
      d: "M22,25c1-1,4-7,10-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,25c-1-1-4-7-10-2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.7799,31.4626 c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626c0-2.4622,2.0004-4.4626,4.4626-4.4626 S31.7799,29.0004,31.7799,31.4626"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M29.3173,31.9252c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2 C28.4208,29.9252,29.3173,30.8217,29.3173,31.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7799,31.4626 c0,2.4645-2.0004,4.4626-4.4626,4.4626s-4.4626-1.9981-4.4626-4.4626c0-2.4622,2.0004-4.4626,4.4626-4.4626 S49.7799,29.0004,49.7799,31.4626"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.3173,31.9252c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2 C46.4208,29.9252,47.3173,30.8217,47.3173,31.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28,46c0.2704-0.3562,3.3099-4.2177,8.4211-4.0038C41.0265,42.1889,43.6499,45.5372,44,46C38.6667,46,33.3333,46,28,46z"
    })));
  }
};

export default FearfulFace;