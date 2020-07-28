import React from 'react';

const Fly = ({
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
      fill: "#3f3f3f",
      d: "M40.2451,32.9176H31.7123c3.2564,11.704-1.0771,20.0171-1.0771,20.0171L31.82,54.9362c.5108.8526,2.3242,3.6358,4.18,3.6358,1.8457,0,3.7158-2.7725,4.2451-3.6211l1.1885-1.8978S37.5413,45.4682,40.2451,32.9176Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M29.9766,22.8725a5.0792,5.0792,0,1,1,5.1463-5.0787A5.1185,5.1185,0,0,1,29.9766,22.8725Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M35.8391,17.775a5.161,5.161,0,1,1,5.16,5.0665A5.1194,5.1194,0,0,1,35.8391,17.775Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M17.6953,60.0554a7.809,7.809,0,0,1-3.9014-.9209,5.7966,5.7966,0,0,1-2.8457-3.9756c-.3447-1.2315-1.4648-9.1963,17.61-30.9307a1.018,1.018,0,0,1,.9238-.3262,1,1,0,0,1,.7588.62,63.5309,63.5309,0,0,1,3.4727,13.9316c.855,7.0692-.1541,12.4784-2.93,15.968a11.2475,11.2475,0,0,1-4.22,3.27A22.3942,22.3942,0,0,1,17.6953,60.0554Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M54.2939,60.0554a22.3764,22.3764,0,0,1-8.8671-2.3633c-5.878-2.6631-8.3516-9.3154-7.1514-19.2383A63.5591,63.5591,0,0,1,41.748,24.5222a1,1,0,0,1,.7579-.62,1.0123,1.0123,0,0,1,.9248.3262c19.0752,21.7344,17.955,29.6992,17.61,30.9307a5.7962,5.7962,0,0,1-2.8457,3.9756A7.8087,7.8087,0,0,1,54.2939,60.0554Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.5107,34.5954H35.51c-.0254,0-.0889-.002-.1153-.0039-4.2832-.2041-6.8183-4.4844-7.5039-12.7227a4.4428,4.4428,0,0,1,1.01-3.2841c1.916-2.2891,5.8418-2.4053,6.6094-2.4053h.97c.7676,0,4.6943.1162,6.6094,2.4053A4.4424,4.4424,0,0,1,44.1,21.8679c-.6885,8.2392-3.2236,12.52-7.5342,12.7255Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.3963,54.4212S37.4338,57.5718,36,57.5718s-3.322-3.1506-3.322-3.1506"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.2176,30.9159c2.1195,8.0259,4.1409,21.6941-5.0676,25.865-13.3088,6.0279-14.2239-1.844-14.2239-1.844S9.4045,47.5813,29.2717,24.9316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.8129,30.7616c-2.134,8.004-4.2411,21.8216,5.0267,26.0193,13.3087,6.0279,14.2239-1.844,14.2239-1.844S62.585,47.5812,42.7174,24.931"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0142,19.098a4.1674,4.1674,0,1,1,8.1116-1.7954"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.9808,19.098a4.1674,4.1674,0,1,0-8.1116-1.7954"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.469 54.421 29.977 57.479 25.875 63.807"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "42.674 54.586 42.194 57.479 46.295 63.807"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0092,33.3341a3.9639,3.9639,0,0,1-1.59-1.0147c-1.91-1.7455-3.0941-5.2687-3.5324-10.534a3.4564,3.4564,0,0,1,.7809-2.559c1.6648-1.99,5.4193-2.0472,5.8419-2.0472h.97c.4225,0,4.1771.0571,5.8419,2.0472a3.4569,3.4569,0,0,1,.7809,2.559c-.4388,5.257-1.62,8.7774-3.5245,10.5258A5.8964,5.8964,0,0,1,37.98,33.3341"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "15.545 15.444 19.758 23.888 26.446 28.229"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.327 15.444 52.113 23.888 45.503 28.179"
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
      d: "M39.3963,54.4212S37.4338,57.5718,36,57.5718s-3.322-3.1506-3.322-3.1506"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.2176,30.9159c2.1195,8.0259,4.1409,21.6941-5.0676,25.865-13.3088,6.0279-14.2239-1.844-14.2239-1.844S9.4045,47.5813,29.2717,24.9316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.8129,30.7616c-2.134,8.004-4.2411,21.8216,5.0267,26.0193,13.3087,6.0279,14.2239-1.844,14.2239-1.844S62.585,47.5812,42.7174,24.931"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.0142,19.098a4.1674,4.1674,0,1,1,8.1116-1.7954"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.9808,19.098a4.1674,4.1674,0,1,0-8.1116-1.7954"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "29.469 54.421 29.977 57.479 25.875 63.807"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "42.674 54.586 42.194 57.479 46.295 63.807"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0092,33.3341a3.9639,3.9639,0,0,1-1.59-1.0147c-1.91-1.7455-3.0941-5.2687-3.5324-10.534a3.4564,3.4564,0,0,1,.7809-2.559c1.6648-1.99,5.4193-2.0472,5.8419-2.0472h.97c.4225,0,4.1771.0571,5.8419,2.0472a3.4569,3.4569,0,0,1,.7809,2.559c-.4388,5.257-1.62,8.7774-3.5245,10.5258A5.8964,5.8964,0,0,1,37.98,33.3341"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "15.545 15.444 19.758 23.888 26.446 28.229"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "56.327 15.444 52.113 23.888 45.503 28.179"
    })));
  }
};

export default Fly;