import React from 'react';

const WarningVolcano = ({
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M32.4064,14.4782a3.8921,3.8921,0,0,1,6.7064,0L59.5617,54.62a4.4616,4.4616,0,0,1,.5748,1.9161,3.9267,3.9267,0,0,1-3.8321,3.928H15.3106a3.8434,3.8434,0,0,1-3.8321-3.8322,3.4546,3.4546,0,0,1,.5748-1.9161l20.3531-40.238"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M40.15,37.6778h.3229a3.686,3.686,0,0,0,3.7121-3.6316,3.901,3.901,0,0,0-1.614-3.0665,2.5847,2.5847,0,0,0-2.5824-2.5017,2.2532,2.2532,0,0,0-1.7755.7263A3.4054,3.4054,0,0,0,35.55,27.9129a3.516,3.516,0,0,0-2.34.8877,2.5779,2.5779,0,0,0-1.9369-.8877,2.6231,2.6231,0,1,0,0,5.2456,1.8544,1.8544,0,0,0,1.13-.3226A3.4757,3.4757,0,0,0,35.55,34.8532a1.3729,1.3729,0,0,0,.5651-.0808A2.5246,2.5246,0,0,0,35.0658,36.79a2.6352,2.6352,0,0,0,2.6632,2.6631A2.518,2.518,0,0,0,40.15,37.6778Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#9b9b9a",
      points: "34.542 60.455 18.412 60.455 25.752 52.668 28.023 47.873 31.835 45.138 34.039 48.113 32.987 52.408 34.542 60.455"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d0cfce",
      points: "34.542 60.455 53.361 60.455 47.003 48.564 42.06 46.423 39.403 43.042 37.104 43.568 34.756 43.042 31.835 45.138 34.039 48.113 32.987 52.408 34.542 60.455"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.4064,14.4782a3.8921,3.8921,0,0,1,6.7064,0L59.5617,54.62a4.4616,4.4616,0,0,1,.5748,1.9161,3.9267,3.9267,0,0,1-3.8321,3.928H15.3106a3.8434,3.8434,0,0,1-3.8321-3.8322,3.4546,3.4546,0,0,1,.5748-1.9161l20.3531-40.238"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.412 60.455 25.752 52.668 28.023 47.873 34.756 43.042 37.104 43.568 39.403 43.042 42.06 46.423 47.003 48.564 53.361 60.455"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "31.835 45.138 34.039 48.113 32.983 52.382 33.754 56.379"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.4027,32.8359A3.4757,3.4757,0,0,0,35.55,34.8532a1.3729,1.3729,0,0,0,.5651-.0808A2.5246,2.5246,0,0,0,35.0658,36.79a2.6352,2.6352,0,0,0,2.6632,2.6631A2.518,2.518,0,0,0,40.15,37.6778"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.5709,30.98a2.5847,2.5847,0,0,0-2.5824-2.5017,2.2532,2.2532,0,0,0-1.7755.7263A3.4054,3.4054,0,0,0,35.55,27.9129a3.516,3.516,0,0,0-2.34.8877,2.5779,2.5779,0,0,0-1.9369-.8877A2.6866,2.6866,0,0,0,28.61,30.576"
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
      d: "M32.4064,14.4782a3.8921,3.8921,0,0,1,6.7064,0L59.5617,54.62a4.4616,4.4616,0,0,1,.5748,1.9161,3.9267,3.9267,0,0,1-3.8321,3.928H15.3106a3.8434,3.8434,0,0,1-3.8321-3.8322,3.4546,3.4546,0,0,1,.5748-1.9161l20.3531-40.238"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.412 60.455 25.752 52.668 28.023 47.873 34.756 43.042 37.104 43.568 39.403 43.042 42.06 46.423 47.003 48.564 53.361 60.455"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "31.835 45.138 34.039 48.113 32.983 52.382 33.754 56.379"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.4027,32.8359A3.4757,3.4757,0,0,0,35.55,34.8532a1.3729,1.3729,0,0,0,.5651-.0808A2.5246,2.5246,0,0,0,35.0658,36.79a2.6352,2.6352,0,0,0,2.6632,2.6631A2.518,2.518,0,0,0,40.15,37.6778"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M42.5709,30.98a2.5847,2.5847,0,0,0-2.5824-2.5017,2.2532,2.2532,0,0,0-1.7755.7263A3.4054,3.4054,0,0,0,35.55,27.9129a3.516,3.516,0,0,0-2.34.8877,2.5779,2.5779,0,0,0-1.9369-.8877A2.6866,2.6866,0,0,0,28.61,30.576"
    })));
  }
};

export default WarningVolcano;