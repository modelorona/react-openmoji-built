import React from 'react';

const Purse = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M14.5371,29.8485V24.594c0,0,11.7262-1.1745,21.4627-1.1745s21.4784,1.1745,21.4784,1.1745v5.2545"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#8967AA",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,27.8933H18.2944C18.2944,38.8402,11,41.9357,11,48.999s11.1929,12.2992,25,12.2992s25-5.2359,25-12.2992 s-7.2944-10.1588-7.2944-21.1057H36z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B399C8",
      stroke: "none",
      d: "M44.0272,27.8933c0,0,9.5808,9.9741,5.9505,31.3757C49.6967,60.9256,61,53.4135,61,48.999 c0-7.0633-7.2944-10.1588-7.2944-21.1057H44.0272"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.6921",
      cy: "14.942",
      r: "3.937",
      fill: "#D0CFCE",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.012",
      cy: "13.7019",
      r: "3",
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.5215,12.0002c1.5921,0.4585,2.5111,2.1209,2.0526,3.7131s-2.1209,2.5111-3.7131,2.0526"
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
      d: "M36,27.8933H18.2944C18.2944,38.8402,11,41.9357,11,48.999s11.1929,12.2992,25,12.2992s25-5.2359,25-12.2992 s-7.2944-10.1588-7.2944-21.1057H36z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14.5371,28.8933v-4.4738c0,0,11.7262-1,21.4627-1s21.4784,1,21.4784,1v4.4738"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.6989,20.362 24.9529,20.362 28.355,17.396"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.1012,20.362 43.8472,20.362 42.1461,18.879"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.012",
      cy: "13.7019",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.5215,12.0002c1.5921,0.4585,2.5111,2.1209,2.0526,3.7131s-2.1209,2.5111-3.7131,2.0526"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,27.8933H18.2944C18.2944,38.8402,11,41.9357,11,48.999s11.1929,12.2992,25,12.2992s25-5.2359,25-12.2992 s-7.2944-10.1588-7.2944-21.1057H36z"
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
      d: "M36,27.8933H18.2944C18.2944,38.8402,11,41.9357,11,48.999s11.1929,12.2992,25,12.2992s25-5.2359,25-12.2992 s-7.2944-10.1588-7.2944-21.1057H36z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14.5371,28.8933v-4.4738c0,0,11.7262-1,21.4627-1s21.4784,1,21.4784,1v4.4738"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.6989,20.362 24.9529,20.362 28.355,17.396"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "50.1012,20.362 43.8472,20.362 42.1461,18.879"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.012",
      cy: "13.7019",
      r: "3",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.5215,12.0002c1.5921,0.4585,2.5111,2.1209,2.0526,3.7131s-2.1209,2.5111-3.7131,2.0526"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,27.8933H18.2944C18.2944,38.8402,11,41.9357,11,48.999s11.1929,12.2992,25,12.2992s25-5.2359,25-12.2992 s-7.2944-10.1588-7.2944-21.1057H36z"
    })));
  }
};

export default Purse;