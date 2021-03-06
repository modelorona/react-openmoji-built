import React from 'react';

const ATMSign = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "15.0733",
      y: "14.2252",
      width: "41.2726",
      height: "12.5162",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("g", {
      id: "color-2"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "24.4706",
      y: "22.4058",
      width: "22.5475",
      height: "37.5366",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23.877",
      y: "28.5892",
      width: "2.3756",
      height: "25.1592",
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "45.2102",
      y: "26.5611",
      width: "2.3756",
      height: "25.1592",
      fill: "#5c9e31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M48.8841,58.5726h-.4933V56.0979a.8094.8094,0,0,0,.744-.8008V29.4907a.8093.8093,0,0,0-.744-.8006v-7.19H47.857v-.469H23.0938v7.65a.8111.8111,0,0,0-.8087.8087V55.2972a.8111.8111,0,0,0,.8087.8087v4.8524h25.79Zm-20.3637,0c.0081-.1052.0081-.2265.0081-.3478A3.2677,3.2677,0,0,0,25.4472,54.95V27.008a3.2515,3.2515,0,0,0,3.0813-3.2754c0-.1132,0-.2183-.0081-.3154H43.0047c-.0081.0971-.0081.2022-.0081.3154a3.2451,3.2451,0,0,0,3.0408,3.2754V54.95a3.2671,3.2671,0,0,0-3.0408,3.2753c0,.1213,0,.2426.0081.3478Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.9886",
      cy: "40.7644",
      rx: "8.0944",
      ry: "13.078",
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M47.5516,47.79H23.8676a.7911.7911,0,0,1-.24-.04.809.809,0,0,1-.5344-.7683V34.5757a.8089.8089,0,0,1,.5344-.7683.7875.7875,0,0,1,.24-.04h23.684a.788.788,0,0,1,.24.04.8087.8087,0,0,1,.5344.7683V46.9816a.8088.8088,0,0,1-.5344.7683A.787.787,0,0,1,47.5516,47.79Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M41.7229,49.9946c-1.4656,2.3769-3.4936,3.8478-5.7343,3.8478-2.26,0-4.3034-1.4963-5.7718-3.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M30.9146,30.5744a6.5228,6.5228,0,0,1,5.074-2.8879c2.0788,0,3.9745,1.266,5.408,3.347"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "20.3107",
      y: "18.4706",
      width: "30.8104",
      height: "3.881",
      fill: "#fff"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.939 26.741 56.346 26.741 56.346 14.225 15.073 14.225 15.073 26.741 22.64 26.741"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20.3107",
      y: "18.4706",
      width: "30.8104",
      height: "3.881",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.0374,51.0251V54.95a3.2671,3.2671,0,0,0-3.0408,3.2753c0,.1213,0,.2426.0081.3478H28.52c.0081-.1052.0081-.2265.0081-.3478A3.2677,3.2677,0,0,0,25.4472,54.95V51.0251m0-20.1534V27.008a3.2515,3.2515,0,0,0,3.0813-3.2754c0-.1132,0-.2183-.0081-.3154H43.0047c-.0081.0971-.0081.2022-.0081.3154a3.2451,3.2451,0,0,0,3.0408,3.2754v3.5462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.5516,47.79H23.8676a.7911.7911,0,0,1-.24-.04.809.809,0,0,1-.5344-.7683V34.5757a.8089.8089,0,0,1,.5344-.7683.7875.7875,0,0,1,.24-.04h23.684a.788.788,0,0,1,.24.04.8087.8087,0,0,1,.5344.7683V46.9816a.8088.8088,0,0,1-.5344.7683A.787.787,0,0,1,47.5516,47.79Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.0932,30.8716V21.84a.8086.8086,0,0,1,.8087-.8087H47.5174a.8087.8087,0,0,1,.8087.8087v8.7646"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.3261,50.8184V60.15a.8087.8087,0,0,1-.8087.8087H23.9019a.8087.8087,0,0,1-.8087-.8087V50.8188"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.7229,49.9946c-1.4656,2.3769-3.4936,3.8478-5.7343,3.8478-2.26,0-4.3034-1.4963-5.7718-3.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9146,30.5744a6.5228,6.5228,0,0,1,5.074-2.8879c2.0788,0,3.9745,1.266,5.408,3.347"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9741,42.6429a1.8446,1.8446,0,0,0,1.2065-1.8592h0A1.7378,1.7378,0,0,0,37.67,38.8859a1.7378,1.7378,0,0,0-1.5111,1.8977l-.0056-.0385a1.7379,1.7379,0,0,1-1.5111,1.8978,1.7379,1.7379,0,0,1-1.5111-1.8978h0a1.8445,1.8445,0,0,1,1.2065-1.8592"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.1806",
      x2: "40.6213",
      y1: "40.7644",
      y2: "40.7644",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6899",
      x2: "33.1306",
      y1: "40.7644",
      y2: "40.7644",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "20.3107",
      y: "18.4706",
      width: "30.8104",
      height: "3.881",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "48.939 26.741 56.346 26.741 56.346 14.225 15.073 14.225 15.073 26.741 22.64 26.741"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20.3107",
      y: "18.4706",
      width: "30.8104",
      height: "3.881",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.0374,51.0251V54.95a3.2671,3.2671,0,0,0-3.0408,3.2753c0,.1213,0,.2426.0081.3478H28.52c.0081-.1052.0081-.2265.0081-.3478A3.2677,3.2677,0,0,0,25.4472,54.95V51.0251m0-20.1534V27.008a3.2515,3.2515,0,0,0,3.0813-3.2754c0-.1132,0-.2183-.0081-.3154H43.0047c-.0081.0971-.0081.2022-.0081.3154a3.2451,3.2451,0,0,0,3.0408,3.2754v3.5462"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.5516,47.79H23.8676a.7911.7911,0,0,1-.24-.04.809.809,0,0,1-.5344-.7683V34.5757a.8089.8089,0,0,1,.5344-.7683.7875.7875,0,0,1,.24-.04h23.684a.788.788,0,0,1,.24.04.8087.8087,0,0,1,.5344.7683V46.9816a.8088.8088,0,0,1-.5344.7683A.787.787,0,0,1,47.5516,47.79Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.0932,30.8716V21.84a.8086.8086,0,0,1,.8087-.8087H47.5174a.8087.8087,0,0,1,.8087.8087v8.7646"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.3261,50.8184V60.15a.8087.8087,0,0,1-.8087.8087H23.9019a.8087.8087,0,0,1-.8087-.8087V50.8188"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.7229,49.9946c-1.4656,2.3769-3.4936,3.8478-5.7343,3.8478-2.26,0-4.3034-1.4963-5.7718-3.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9146,30.5744a6.5228,6.5228,0,0,1,5.074-2.8879c2.0788,0,3.9745,1.266,5.408,3.347"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M37.9741,42.6429a1.8446,1.8446,0,0,0,1.2065-1.8592h0A1.7378,1.7378,0,0,0,37.67,38.8859a1.7378,1.7378,0,0,0-1.5111,1.8977l-.0056-.0385a1.7379,1.7379,0,0,1-1.5111,1.8978,1.7379,1.7379,0,0,1-1.5111-1.8978h0a1.8445,1.8445,0,0,1,1.2065-1.8592"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.1806",
      x2: "40.6213",
      y1: "40.7644",
      y2: "40.7644",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6899",
      x2: "33.1306",
      y1: "40.7644",
      y2: "40.7644",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("rect", {
      x: "20.3107",
      y: "18.4706",
      width: "30.8104",
      height: "3.881",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default ATMSign;