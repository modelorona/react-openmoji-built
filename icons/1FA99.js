import React from 'react';

const Coin = ({
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "34.1528",
      cy: "34.6346",
      rx: "29.0327",
      ry: "22.118",
      transform: "translate(-14.2455 39.4907) rotate(-51.131)",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M52.1386,12.03a18.6978,18.6978,0,0,0-13.3-3.8592A17.98,17.98,0,0,1,48.9161,12.03c9.5107,7.6656,9.0636,24-.9986,36.4842-6.14,7.6178-14.44,12.034-22.14,12.5837,8.5313.6389,18.354-3.8885,25.3623-12.5837C61.2023,36.03,61.6494,19.6954,52.1386,12.03Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M55.3488,13.082c-.4942-.3984-1.0176-.7812-1.5577-1.1377a.9281.9281,0,0,0-.1108-.045,1.03,1.03,0,0,0-.5558-.1024.9231.9231,0,0,0-.5263.2355.9427.9427,0,0,0-.0942.0682c-.0189.0205-.0247.047-.0417.0686s-.0414.0338-.0569.0573a.9449.9449,0,0,0-.0443.1094,1.0267,1.0267,0,0,0-.1021.5619.9782.9782,0,0,0,.0434.183.8341.8341,0,0,0,.1891.3358.9413.9413,0,0,0,.07.0971C60.84,21.15,59.9767,36.25,50.5968,47.8887c-9.7021,12.0351-24.97,15.88-34.0342,8.5732a.9608.9608,0,0,0-.1862-.0967c-.019-.01-.0363-.02-.0557-.0289a.97.97,0,0,0-.3-.0741c-.027-.0026-.0525-.0064-.08-.0068a.9161.9161,0,0,0-.5906.1954.94.94,0,0,0-.0972.058c-.0193.0174-.0268.0415-.0444.06-.0158.0171-.0375.0251-.0523.0435a.9354.9354,0,0,0-.0473.091.9593.9593,0,0,0-.1171.2256.9341.9341,0,0,0-.024.097.9719.9719,0,0,0-.0255.2966c.0017.02.0056.0386.0084.0585a.9646.9646,0,0,0,.0962.312c.0079.0157.0178.0295.0266.0447a.9534.9534,0,0,0,.109.1832,20.0687,20.0687,0,0,0,2.2862,2.1582A21.13,21.13,0,0,0,30.91,64.6338c8.59,0,17.8906-4.48,24.5283-12.7149C65.882,38.9619,65.841,21.539,55.3488,13.082Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M20.6524,44.72c.0722-.2316.6087-2.2138.6809-2.4455,5.9173.1054,6.209-.0917,7.0882-3.008,1.661-5.5087,2.1449-6.4941,3.8058-12.0028.5824-1.9314.4791-2.3538-2.29-2.882L28.25,24.0707c.063-.2034.4414-2.0746.5044-2.278a94.249,94.249,0,0,0,12.214-.7883l-5.4991,19c-.8584,2.9659-.7526,3.2031,4.9288,4.3013-.0656.2347-.5987,2.2183-.6642,2.453Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.2375,12.777q.7611.5013,1.4822,1.0818c10.08,8.1245,10.0527,24.8829-.061,37.4308S28.1748,67.4234,18.0948,59.2988a19.09,19.09,0,0,1-2.172-2.05"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34.1528",
      cy: "34.6346",
      rx: "29.0327",
      ry: "22.118",
      transform: "translate(-14.2455 39.4907) rotate(-51.131)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.3734",
      x2: "54.6587",
      y1: "48.5146",
      y2: "51.2896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.9155",
      x2: "50.8122",
      y1: "52.2602",
      y2: "55.3725",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.2573",
      x2: "46.6351",
      y1: "55.3041",
      y2: "58.6263",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.2427",
      x2: "42.1155",
      y1: "57.9819",
      y2: "61.3263",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "54.0356",
      x2: "57.5245",
      y1: "44.7745",
      y2: "47.1887",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.6524,44.72c.0722-.2316.6087-2.2138.6809-2.4455,5.9173.1054,6.209-.0917,7.0882-3.008,1.661-5.5087,2.1449-6.4941,3.8058-12.0028.5824-1.9314.4791-2.3538-2.29-2.882L28.25,24.0707c.063-.2034.4414-2.0746.5044-2.278a94.249,94.249,0,0,0,12.214-.7883l-5.4991,19c-.8584,2.9659-.7526,3.2031,4.9288,4.3013-.0656.2347-.5987,2.2183-.6642,2.453Z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.2375,12.777q.7611.5013,1.4822,1.0818c10.08,8.1245,10.0527,24.8829-.061,37.4308S28.1748,67.4234,18.0948,59.2988a19.09,19.09,0,0,1-2.172-2.05"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "34.1528",
      cy: "34.6346",
      rx: "29.0327",
      ry: "22.118",
      transform: "translate(-14.2455 39.4907) rotate(-51.131)",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.3734",
      x2: "54.6587",
      y1: "48.5146",
      y2: "51.2896",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "47.9155",
      x2: "50.8122",
      y1: "52.2602",
      y2: "55.3725",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "44.2573",
      x2: "46.6351",
      y1: "55.3041",
      y2: "58.6263",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.2427",
      x2: "42.1155",
      y1: "57.9819",
      y2: "61.3263",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "54.0356",
      x2: "57.5245",
      y1: "44.7745",
      y2: "47.1887",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.6524,44.72c.0722-.2316.6087-2.2138.6809-2.4455,5.9173.1054,6.209-.0917,7.0882-3.008,1.661-5.5087,2.1449-6.4941,3.8058-12.0028.5824-1.9314.4791-2.3538-2.29-2.882L28.25,24.0707c.063-.2034.4414-2.0746.5044-2.278a94.249,94.249,0,0,0,12.214-.7883l-5.4991,19c-.8584,2.9659-.7526,3.2031,4.9288,4.3013-.0656.2347-.5987,2.2183-.6642,2.453Z"
    })));
  }
};

export default Coin;