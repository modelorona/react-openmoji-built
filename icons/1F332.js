import React from 'react';

const EvergreenTree = ({
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
      fill: "#5C9E31",
      stroke: "none",
      d: "M56.0354,54.0052l-8.1237-15.2094l3.3463,0.5399c0.5439,0.0891,1.0571-0.2796,1.1462-0.8235 c0.0381-0.2326-0.0073-0.4712-0.1283-0.6735l-7.3722-12.434l3.0778,0.2186c0.5498,0.0384,1.0267-0.3762,1.0651-0.9261 c0.0158-0.2267-0.0462-0.4521-0.1759-0.6388L36.825,6.7243c-0.192-0.2698-0.5032-0.4295-0.8343-0.4281 c-0.3321,0.0049-0.64,0.1748-0.8213,0.4531l-3.7175,5.7005l-7.8213,12.0069c-0.3011,0.4617-0.1709,1.08,0.2908,1.3811 c0.2089,0.1362,0.4612,0.1893,0.7072,0.1488l2.3014-0.3732l-7.5518,12.2114c-0.2901,0.4687-0.1453,1.0838,0.3234,1.3738 c0.2013,0.1246,0.4405,0.1736,0.6746,0.1381l3.7265-0.5629L15.968,54.0052c-0.2597,0.4861-0.0762,1.0908,0.4099,1.3505 c0.1647,0.088,0.3508,0.128,0.5372,0.1155l12.447-0.8363l1.0359-0.0699l10.961-0.1247l13.7184,1.0309h0.0749 c0.5512-0.0001,0.9979-0.447,0.9978-0.9981c0-0.1639-0.0404-0.3253-0.1176-0.4699L56.0354,54.0052z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "41.4476,53.4897 55.1936,54.5227 46.1036,37.5027 51.4476,38.3647 43.0886,24.2657 48.0726,24.6147 36.0036,7.2457 24.4476,24.9897 28.9176,24.2657 20.1976,38.3647 25.9026,37.5027 16.8127,54.5227 30.3226,53.6147"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0036",
      x2: "36.0036",
      y1: "55.9637",
      y2: "65.2727",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "41.4476,53.4897 55.1936,54.5227 46.1036,37.5027 51.4476,38.3647 43.0886,24.2657 48.0726,24.6147 36.0036,7.2457 24.4476,24.9897 28.9176,24.2657 20.1976,38.3647 25.9026,37.5027 16.8127,54.5227 30.3226,53.6147"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0036",
      x2: "36.0036",
      y1: "55.9637",
      y2: "65.2727",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default EvergreenTree;