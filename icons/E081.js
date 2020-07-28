import React from 'react';

const AssemblyGroup = ({
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
      fill: "#92d3f5",
      d: "M44.0447,53.3653l-.0145-.0488a6.5744,6.5744,0,0,1-1.0932.1014A2.6071,2.6071,0,0,1,40.1247,50.86c0-1.54.82-2.2057,2.3243-2.8673l-.0408-.1372c-.6542-1.8872-2.2846-2.78-5.0452-2.78H31.9885a4.2285,4.2285,0,0,0-3.1144,1.34l-.0006.0028c.1175.06.2341.1173.3466.1663,1.5335.6681,2.3676,1.3319,2.3676,2.8874A2.6368,2.6368,0,0,1,28.7754,52.03a8.3916,8.3916,0,0,1-1.19-.1108L26.544,58.2671H45.0076Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M42.4608,47.9876c-1.5334.6681-2.336,1.3164-2.336,2.872a2.607,2.607,0,0,0,2.8122,2.5583c5.1552,0,11.4429-6.4679,11.4429-15.14,0-8.2189-5.3448-11.0192-8.0955-11.0192H39.9438l-3.0148.5934a5.1928,5.1928,0,0,0-4.4872-2.6548H25.428c-2.7506,0-8.0955,2.8887-8.0955,11.6923,0,8.6725,6.2877,15.14,11.4429,15.14a2.6368,2.6368,0,0,0,2.8123-2.5583c-.0361-1.24-.3708-2.0844-2.7136-3.0566.1275-.4386,1.4472-1.34,3.451-1.34,0,0,4.78-.013,5.3781,0C42.0348,45.17,42.4608,47.9876,42.4608,47.9876Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.5155",
      cy: "18.1951",
      r: "3.5434",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.7382",
      cy: "20.0538",
      r: "3.5434",
      fill: "#fcea2b"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.0447,53.3654l.9629,4.2419"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.5069,52.3557l-.9629,5.2516"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.0447,53.3654l.9629,4.2419"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.5069,52.3557l-.9629,5.2516"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.4083,47.855h0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.9885,45.0752H37.363c2.7606,0,4.3909.8926,5.0453,2.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.9418,35.9037v1.7a9.5391,9.5391,0,0,0,5.2783,8.98c1.5335.6681,2.3676,1.3319,2.3676,2.8875A2.6368,2.6368,0,0,1,28.7754,52.03c-5.1552,0-11.4429-6.4679-11.4429-15.14,0-8.8036,5.3449-11.6923,8.0955-11.6923h7.0138a5.1725,5.1725,0,0,1,5.1472,4.9914v1.423"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.7707,38.3017v.69a9.539,9.539,0,0,1-5.2784,8.98c-1.5335.6681-2.3675,1.3319-2.3675,2.8875a2.607,2.607,0,0,0,2.8122,2.5583c5.1552,0,11.4429-6.4679,11.4429-15.14,0-8.2189-5.3448-11.0192-8.0955-11.0192H40.28"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.5155",
      cy: "18.1951",
      r: "3.5434",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.2544",
      cy: "38.6475",
      r: "3.5434",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.7382",
      cy: "20.0538",
      r: "3.5434",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.0447,53.3654l.9629,4.2419"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.5069,52.3557l-.9629,5.2516"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.0447,53.3654l.9629,4.2419"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.5069,52.3557l-.9629,5.2516"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.4083,47.855h0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.9885,45.0752H37.363c2.7606,0,4.3909.8926,5.0453,2.78"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.9418,35.9037v1.7a9.5391,9.5391,0,0,0,5.2783,8.98c1.5335.6681,2.3676,1.3319,2.3676,2.8875A2.6368,2.6368,0,0,1,28.7754,52.03c-5.1552,0-11.4429-6.4679-11.4429-15.14,0-8.8036,5.3449-11.6923,8.0955-11.6923h7.0138a5.1725,5.1725,0,0,1,5.1472,4.9914v1.423"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.7707,38.3017v.69a9.539,9.539,0,0,1-5.2784,8.98c-1.5335.6681-2.3675,1.3319-2.3675,2.8875a2.607,2.607,0,0,0,2.8122,2.5583c5.1552,0,11.4429-6.4679,11.4429-15.14,0-8.2189-5.3448-11.0192-8.0955-11.0192H40.28"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.5155",
      cy: "18.1951",
      r: "3.5434",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.2544",
      cy: "38.6475",
      r: "3.5434",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.7382",
      cy: "20.0538",
      r: "3.5434",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default AssemblyGroup;