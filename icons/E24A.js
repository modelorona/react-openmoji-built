import React from 'react';

const Interview = ({
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
      cx: "20",
      cy: "26.0208",
      rx: "13.8",
      ry: "13.8205",
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M18.3981,39.9096C15.2441,44.248,11,46,5,46c2.874-1.916,5.748-5.6676,6.8636-8.617L18.3981,39.9096z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "41.28",
      r: "13.8",
      fill: "#FCEA2B",
      stroke: "#FCEA2B",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      stroke: "none",
      d: "M53.6019,55.1896C56.7559,59.528,61,61.28,67,61.28c-2.874-1.916-5.748-5.6676-6.8636-8.617 L53.6019,55.1896z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.8636,37.383C10.748,40.3324,7.874,44.084,5,46c6,0,10.2441-1.752,13.3981-6.0904"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2749,39.8161 C28.9249,38.7295,34,32.9574,34,26c0-7.732-6.268-14-14-14S6,18.268,6,26c0,3.3337,1.1652,6.3952,3.1105,8.7995"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.1364,52.663C61.252,55.6124,64.126,59.364,67,61.28c-6,0-10.2441-1.752-13.3981-6.0904"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7251,55.0961 C43.0751,54.0095,38,48.2374,38,41.28c0-7.732,6.268-14,14-14s14,6.268,14,14c0,3.3337-1.1652,6.3952-3.1105,8.7995"
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
      cx: "13",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27",
      cy: "26",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.8636,37.383C10.748,40.3324,7.874,44.084,5,46c6,0,10.2441-1.752,13.3981-6.0904"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2749,39.8161 C28.9249,38.7295,34,32.9574,34,26c0-7.732-6.268-14-14-14S6,18.268,6,26c0,3.3337,1.1652,6.3952,3.1105,8.7995"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "59",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45",
      cy: "41.28",
      r: "2",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.1364,52.663C61.252,55.6124,64.126,59.364,67,61.28c-6,0-10.2441-1.752-13.3981-6.0904"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7251,55.0961 C43.0751,54.0095,38,48.2374,38,41.28c0-7.732,6.268-14,14-14s14,6.268,14,14c0,3.3337-1.1652,6.3952-3.1105,8.7995"
    })));
  }
};

export default Interview;