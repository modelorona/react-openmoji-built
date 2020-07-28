import React from 'react';

const Placard = ({
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
      fill: "#fff",
      d: "M55.0372,42.06H16.9628a1.19,1.19,0,0,1-1.19-1.19V16.119a1.19,1.19,0,0,1,1.19-1.19H55.0372a1.19,1.19,0,0,1,1.19,1.1905v24.75A1.19,1.19,0,0,1,55.0372,42.06Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "44.5182",
      y: "16.119",
      width: "10.5189",
      height: "24.75",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M40.1509,40.8687V59.7671a1,1,0,0,1-1,1H32.8491a1,1,0,0,1-1-1V40.8687Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M31.8491,16.1187v-3.97a1,1,0,0,1,1-1h6.3018a1,1,0,0,1,1,1v3.97Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "16.9632",
      y: "16.119",
      width: "38.0739",
      height: "24.75",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "39.151 44.202 39.151 59.768 32.85 59.768 32.85 44.202"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.85 16.119 32.85 12.149 39.151 12.149 39.151 16.119"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5862,35.1753a10.0216,10.0216,0,0,1,1.85-3.6652c.1528-.1911.36-.3952.6011-.3555a.6826.6826,0,0,1,.38.2738c.93,1.1124,1.41,2.5781,2.4781,3.5583a1.0167,1.0167,0,0,0,.4386.2689c.4569.1057.8339-.34,1.1121-.7171a12.0069,12.0069,0,0,1,2.4219-2.4517,2.0944,2.0944,0,0,1,.9546-.4729A2.012,2.012,0,0,1,35.56,32.689a4.4635,4.4635,0,0,0,1.3923,1.6084.6244.6244,0,0,0,.4891.0766.7134.7134,0,0,0,.291-.2457c1.0448-1.2986,1.7306-3.1732,3.3578-3.534a18.9793,18.9793,0,0,0,1.0763,3.0115c.1085.2379.3.5156.5559.4623a.5971.5971,0,0,0,.282-.1916l3.1854-3.2242,2.2245,3.8963"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5561,27.1047a14.5927,14.5927,0,0,1,3.5364-5.0428,38.6124,38.6124,0,0,0,3.0545,3.12,2.194,2.194,0,0,0,1.8763.7965,2.3016,2.3016,0,0,0,1.0807-.8641A33.7344,33.7344,0,0,1,35.72,22.3323a2.0613,2.0613,0,0,1,.9065-.589A1.8094,1.8094,0,0,1,38.3719,22.77a5.379,5.379,0,0,0,1.262,1.7335.723.723,0,0,0,.567.1521.93.93,0,0,0,.4094-.2963,13.7677,13.7677,0,0,1,2.6606-2.1535,1.7758,1.7758,0,0,1,1.4349-.36,1.8846,1.8846,0,0,1,.8813.86l2.0915,3.2414"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "16.9632",
      y: "16.119",
      width: "38.0739",
      height: "24.75",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "39.151 44.202 39.151 59.768 32.85 59.768 32.85 44.202"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "32.85 16.119 32.85 12.149 39.151 12.149 39.151 16.119"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5862,35.1753a10.0216,10.0216,0,0,1,1.85-3.6652c.1528-.1911.36-.3952.6011-.3555a.6826.6826,0,0,1,.38.2738c.93,1.1124,1.41,2.5781,2.4781,3.5583a1.0167,1.0167,0,0,0,.4386.2689c.4569.1057.8339-.34,1.1121-.7171a12.0069,12.0069,0,0,1,2.4219-2.4517,2.0944,2.0944,0,0,1,.9546-.4729A2.012,2.012,0,0,1,35.56,32.689a4.4635,4.4635,0,0,0,1.3923,1.6084.6244.6244,0,0,0,.4891.0766.7134.7134,0,0,0,.291-.2457c1.0448-1.2986,1.7306-3.1732,3.3578-3.534a18.9793,18.9793,0,0,0,1.0763,3.0115c.1085.2379.3.5156.5559.4623a.5971.5971,0,0,0,.282-.1916l3.1854-3.2242,2.2245,3.8963"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5561,27.1047a14.5927,14.5927,0,0,1,3.5364-5.0428,38.6124,38.6124,0,0,0,3.0545,3.12,2.194,2.194,0,0,0,1.8763.7965,2.3016,2.3016,0,0,0,1.0807-.8641A33.7344,33.7344,0,0,1,35.72,22.3323a2.0613,2.0613,0,0,1,.9065-.589A1.8094,1.8094,0,0,1,38.3719,22.77a5.379,5.379,0,0,0,1.262,1.7335.723.723,0,0,0,.567.1521.93.93,0,0,0,.4094-.2963,13.7677,13.7677,0,0,1,2.6606-2.1535,1.7758,1.7758,0,0,1,1.4349-.36,1.8846,1.8846,0,0,1,.8813.86l2.0915,3.2414"
    })));
  }
};

export default Placard;