import React from 'react';

const Locked = ({
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
      stroke: "#D0CFCE",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.3751,31.1747c-0.3501-8.7708,6.4491-18.5395,14.387-18.7794c8.0047-0.2419,16.5412,10.9698,14.333,19.052h-4.0394 c0,0,1.5619-7.922-2.2164-11.2535c-1.8494-1.6307-5.2556-4.771-8.6396-4.2922c-2.2829,0.323-6.8677,3.4518-7.9271,5.4209 c-2.0643,3.8367-1.7248,9.8169-1.7248,9.8169L21.3751,31.1747z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      stroke: "none",
      points: "53,32.2969 54.875,32.2969 54.875,59.1719 16.875,59.1719 16.875,32.2969 18.75,32.2969"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F1B31C",
      stroke: "none",
      points: "54.4302,32.493 35.66,58.9944 54.9675,58.9944"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "53,32.25 54.875,32.25 54.875,59.125 16.875,59.125 16.875,32.25 18.75,32.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.3751,28.9146c0-8.3786,6.4151-16.2744,14.3184-16.523c7.9697-0.2507,15.4098,7.2847,14.7416,16.523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.5478,28.9146c0-6.3352,4.5755-12.3054,10.2123-12.4934c5.6843-0.1896,10.9908,5.5081,10.5142,12.4934"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.3042,29.9146"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "53,32.25 54.875,32.25 54.875,59.125 16.875,59.125 16.875,32.25 18.75,32.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.3751,28.9146c0-8.3786,6.4151-16.2744,14.3184-16.523c7.9697-0.2507,15.4098,7.2847,14.7416,16.523"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.5478,28.9146c0-6.3352,4.5755-12.3054,10.2123-12.4934c5.6843-0.1896,10.9908,5.5081,10.5142,12.4934"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.3042,29.9146"
    })));
  }
};

export default Locked;