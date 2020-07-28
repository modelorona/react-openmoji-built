import React from 'react';

const Memo = ({
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
      x: "16.4055",
      y: "11.3783",
      width: "39.5645",
      height: "49.0659",
      fill: "#FFFFFF",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#f4aa41",
      stroke: "none",
      points: "39.9312,40.2224 51.2252,28.9284 58.6008,36.304 47.4027,47.5021"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#a57939",
      stroke: "none",
      points: "37.9415,46.8185 39.902,41.17 46.3562,47.624 40.7075,49.5846"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#EA5A47",
      stroke: "none",
      points: "54.6088,25.0518 58.5874,21.0732 66.4459,28.9316 62.5011,32.8765"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#d0cfce",
      stroke: "none",
      points: "50.4943,29.6593 55.1018,25.0519 62.4773,32.4274 57.9089,36.9958"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#000000",
      stroke: "none",
      points: "38.0702,47.191 40.4564,49.5772 36.9921,50.8566"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "49.3215",
      y1: "19.875",
      y2: "19.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "47.9215",
      y1: "27.875",
      y2: "27.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "39.4312",
      y1: "35.875",
      y2: "35.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "34.5284",
      y1: "43.875",
      y2: "43.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "32.4675",
      y1: "51.875",
      y2: "51.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#000000",
      stroke: "none",
      points: "38.0702,47.191 40.4564,49.5772 36.9921,50.8566"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "40.6919,49.591 46.3562,47.624 61.9461,32.034 55.492,25.5799 39.902,41.17 37.9282,46.841"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "58.0856,22.9863 59.6411,21.4309 66.0952,27.885 64.4634,29.5168"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.2788",
      x2: "46.7329",
      y1: "40.7932",
      y2: "47.2473",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9323,46.8277 36.5493,50.9768 40.7075,49.5846"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.3023",
      x2: "57.5042",
      y1: "30.1572",
      y2: "36.3591",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0206",
      points: "55.3215,44.228 55.3215,59.875 16.3215,59.875 16.3215,11.875 55.3215,11.875 55.3215,20.3309"
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
      fill: "#000000",
      stroke: "none",
      points: "38.0702,47.191 40.4564,49.5772 36.9921,50.8566"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "49.3215",
      y1: "19.875",
      y2: "19.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "47.9215",
      y1: "27.875",
      y2: "27.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "39.4312",
      y1: "35.875",
      y2: "35.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "34.5284",
      y1: "43.875",
      y2: "43.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.3215",
      x2: "32.4675",
      y1: "51.875",
      y2: "51.875",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#000000",
      stroke: "none",
      points: "38.0702,47.191 40.4564,49.5772 36.9921,50.8566"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "40.6919,49.591 46.3562,47.624 61.9461,32.034 55.492,25.5799 39.902,41.17 37.9282,46.841"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "58.0856,22.9863 59.6411,21.4309 66.0952,27.885 64.4634,29.5168"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.2788",
      x2: "46.7329",
      y1: "40.7932",
      y2: "47.2473",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9323,46.8277 36.5493,50.9768 40.7075,49.5846"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.3023",
      x2: "57.5042",
      y1: "30.1572",
      y2: "36.3591",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2.0206",
      points: "55.3215,44.228 55.3215,59.875 16.3215,59.875 16.3215,11.875 55.3215,11.875 55.3215,20.3309"
    })));
  }
};

export default Memo;