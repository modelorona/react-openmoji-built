import React from 'react';

const LyingFace = ({
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
      d: "M36,12c-13.2337,0-24,10.7663-24,24s10.7663,24,24,24s24-10.7664,24-24C60.0001,22.7663,49.2337,12,36,12z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M37.4298,44.1622c0,0,8.7363-0.0809,12.075,0.5893c3.3387,0.6701,6.7322,2.0667,9.1412,0.9499 c1.1362-0.5267,1.6476-1.6404,1.7222-2.7085c0.1014-1.0659-0.2206-2.2484-1.255-2.9542c-2.1935-1.4965-5.7742-0.6235-9.1776-0.5096 s-12.0084-1.3976-12.0084-1.3976"
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
      d: "M20.9493,27.2768c0.851-1.3097,2.1554-2.2567,3.6642-2.659c1.4662-0.5614,3.0882-0.5534,4.5496,0.0179"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.5587,26.2722c-1.3537-2.8907-4.4525-4.543-7.6074-4.056"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.9634,34.6991C58.289,22.6013,48.2654,13,35.9998,13C23.2968,13,13,23.2968,13,35.9998 c0,12.7021,10.2968,22.9998,22.9998,22.9998c7.0803,0,13.4135-3.1996,17.6326-8.2316"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.7224,50.6354c0,0-5.7186-1.8346-8.8718,1.5503"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.4298,44.1622c0,0,8.7363-0.0809,12.075,0.5893c3.3387,0.6701,6.7322,2.0667,9.1412,0.9499 c1.1362-0.5267,1.6476-1.6404,1.7222-2.7085c0.1014-1.0659-0.2206-2.2484-1.255-2.9542c-2.1935-1.4965-5.7742-0.6235-9.1776-0.5096 s-12.0084-1.3976-12.0084-1.3976"
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
      d: "M20.9493,27.2768c0.851-1.3097,2.1554-2.2567,3.6642-2.659c1.4662-0.5614,3.0882-0.5534,4.5496,0.0179"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.5587,26.2722c-1.3537-2.8907-4.4525-4.543-7.6074-4.056"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.9634,34.6991C58.289,22.6013,48.2654,13,35.9998,13C23.2968,13,13,23.2968,13,35.9998 c0,12.7021,10.2968,22.9998,22.9998,22.9998c7.0803,0,13.4135-3.1996,17.6326-8.2316"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.7224,50.6354c0,0-5.7186-1.8346-8.8718,1.5503"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.4298,44.1622c0,0,8.7363-0.0809,12.075,0.5893c3.3387,0.6701,6.7322,2.0667,9.1412,0.9499 c1.1362-0.5267,1.6476-1.6404,1.7222-2.7085c0.1014-1.0659-0.2206-2.2484-1.255-2.9542c-2.1935-1.4965-5.7742-0.6235-9.1776-0.5096 s-12.0084-1.3976-12.0084-1.3976"
    })));
  }
};

export default LyingFace;