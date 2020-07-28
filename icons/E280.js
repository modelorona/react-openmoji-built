import React from 'react';

const ExhaustedFace = ({
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
      d: "M22.8547,31c0-2.4622,2.0004-4.4626,4.4626-4.4626S31.7799,28.5378,31.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.8547,31c0-2.4622,2.0004-4.4626,4.4626-4.4626S49.7799,28.5378,49.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29,43c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981C38.4656,42.0319,40.8318,42.4165,42,43"
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
      d: "M22.8547,31c0-2.4622,2.0004-4.4626,4.4626-4.4626S31.7799,28.5378,31.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.8547,31c0-2.4622,2.0004-4.4626,4.4626-4.4626S49.7799,28.5378,49.7799,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29,43c1.2841-0.6376,3.9847-1.0308,6.8421-0.9981C38.4656,42.0319,40.8318,42.4165,42,43"
    })));
  }
};

export default ExhaustedFace;