import React from 'react';

const PickupTruck = ({
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
      fill: "#d22f27",
      d: "M6.7469,52a.9994.9994,0,0,1-1-1V41.8889A3.2209,3.2209,0,0,1,8.4891,38.69l11.3713-2,6.3535-7.8a7.3957,7.3957,0,0,1,5.7529-2.7334H43.2041a2.173,2.173,0,0,1,2.1709,2.1709v8.5273H65.0229a1,1,0,0,1,1,1L66.0259,52Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M41.2232,38.3284H37.3023a1,1,0,0,1-1-1V30.221a.9994.9994,0,0,1,1-1H40.74a1.5441,1.5441,0,0,1,1.4834,1.5957v6.5117A.9994.9994,0,0,1,41.2232,38.3284Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M34.0948,38.3284H24.65a1,1,0,0,1-.7832-1.6211l3.5859-4.5195c.1944-.2334.3594-.4385.5166-.6319,1.0147-1.2529,1.8916-2.3349,3.5567-2.3349h2.5684a.9994.9994,0,0,1,1,1v7.1074A1,1,0,0,1,34.0948,38.3284Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "51",
      r: "5",
      fill: "#3f3f3f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.9331",
      cy: "51",
      r: "5",
      fill: "#3f3f3f"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M16,54a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,16,54Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M52.9336,54a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,52.9336,54Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M6.0629,41.9918H9.7953a1.679,1.679,0,0,1,1.4453.8012,1.6077,1.6077,0,0,1,.042,1.6236l-1.4317,2.63a1.7614,1.7614,0,0,1-1.5507.91H7.0629a.9891.9891,0,0,1-1-.9791V41.9918Zm2,4.9863h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M64.9892,43.9108v3.0673a.9891.9891,0,0,1-1,.9791H62.7519a1.7614,1.7614,0,0,1-1.5507-.91l-1.4317-2.63a1.6077,1.6077,0,0,1,.042-1.6236,1.679,1.679,0,0,1,1.4453-.8012h3.7324Zm-2.01,3.0673h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M66.36,52H57.9331V47.9572h7.0794c1.1463,0,2.9033-.08,2.9033.6587v2.8252C67.8347,51.7641,66.9928,52,66.36,52Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M10.0717,52H4.3969C3.6248,52,3,51.7,3,51.3283V49.9917c0-2.0506,0-2.0506,4.2629-2.0506h4.2193L11.4686,51.33C11.4672,51.7,10.8424,52,10.0717,52Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.6527,43.9981l1.4315,2.686c.1314.2466.2636.27.6675.2749h2.7719a2.0051,2.0051,0,0,1,2.033,2.3211l-.3039,1.7146H60.831"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6.0521,46.9781V41.8892a2.2373,2.2373,0,0,1,1.8958-2.2111L20.3928,37.62l6.5967-8.098a6.419,6.419,0,0,1,4.9769-2.365H43.2046a1.1708,1.1708,0,0,1,1.1708,1.1708v9.5273H65v9.1233"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.3994,43.9981l-1.4315,2.686c-.1314.2466-.2636.27-.6675.2749H6.0521A2.0522,2.0522,0,0,0,4,49.011V51l4.0629,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2234,30.8165v6.5121H37.3023"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "34.095 30.817 34.095 37.329 24.65 37.329"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "51",
      r: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.9331",
      cy: "51",
      r: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.6505",
      x2: "44.8615",
      y1: "51",
      y2: "51",
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
      d: "M60.6527,43.9981l1.4315,2.686c.1314.2466.2636.27.6675.2749h2.7719a2.0051,2.0051,0,0,1,2.033,2.3211l-.3039,1.7146H60.831"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6.0521,46.9781V41.8892a2.2373,2.2373,0,0,1,1.8958-2.2111L20.3928,37.62l6.5967-8.098a6.419,6.419,0,0,1,4.9769-2.365H43.2046a1.1708,1.1708,0,0,1,1.1708,1.1708v9.5273H65v9.1233"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.3994,43.9981l-1.4315,2.686c-.1314.2466-.2636.27-.6675.2749H6.0521A2.0522,2.0522,0,0,0,4,49.011V51l4.0629,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2234,30.8165v6.5121H37.3023"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "34.095 30.817 34.095 37.329 24.65 37.329"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "51",
      r: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.9331",
      cy: "51",
      r: "5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.6505",
      x2: "44.8615",
      y1: "51",
      y2: "51",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default PickupTruck;