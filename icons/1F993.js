import React from 'react';

const Zebra = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M10.2544,20.6688l1.75,1.4167c0,0-7.6667,8-5.3333,13.5l4.1667-0.1667c0,0,1.8333-3.75,6.3333-4.75 l1,3.3333c0,0,4.1667,3.6667,4.3333,3.9167c0.1667,0.25,2.6667,4.1667,2.6667,4.1667l3.4167,1.6667l0.75,7.25l-1.1667,10l2.5,0.75 l1.25-0.6667l2.0833-16.5l3.75,0.3333l9.25-1.75l2.5833-3.4167l3.4167,4.75l1.9167,4.6667l-0.3333,6.25l-1.25,3.25l-0.8333,2 l1.5,0.75l1.6667-0.25l1.6667-3.5833l2.1667-9.25l-2.0833-4.3333l2.6667-4c0,0,2.3333-7.5-1.5833-11.6667s-8-3.5-8-3.5 l-7.8333,1.75c0,0-6.5833-0.0833-6.8333-0.0833s-4.9167-0.9167-4.9167-0.9167s0.5833-2.3333-1.75-4.0833 s-13.3333-4.9167-13.3333-4.9167S11.671,17.1688,10.2544,20.6688z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M49.5877,39.7521l-2.5833,3.4167l1.25,6.25l-4.5,10.6667c0,0,2.75,1.0833,3.0833,1.0833 s5.25-8.1667,5.25-8.1667s2.4167-4.8333,0.9167-8.5C51.5044,40.8355,49.5877,39.7521,49.5877,39.7521z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M13.2752,22.5855c0,0,3.4375-4.4375,17.0625,4.1667l0.5833-1.1667l-1.75-4.0833l-12.5-4.8333 c0,0-7.1149,0.8377-5.75,4.25C10.9627,21.023,13.2752,22.5855,13.2752,22.5855z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.1544,25.4082c0,0,1.3961,4.9702-2.513,6.0871s-4.8585,3.7416-4.8585,3.7416s-3.9092,1.8987-4.691-1.8987 s3.6858-8.3768,3.6858-8.3768l2.5689-2.5689l-1.9546-1.6754c0,0,2.8768-5.4202,8.2748-3.2422s10.6667,4.3604,10.6667,4.3604 s2.0563,1.7299,1.6654,4.1871c0,0,8.068,2.0936,17.8564-0.7505c1.3381-0.3888,2.7579-0.3941,4.1104-0.0589 c2.3706,0.5875,5.6294,2.1206,7.0727,6.1147c2.4013,6.6456-3.0156,12.6768-3.0156,12.6768l1.9546,4.6351l-1.5078,8.9911 l-1.8002,3.0923c-0.1983,0.3657-0.581,0.5935-0.997,0.5935h-1.0495c-0.8724,0-1.4182-0.9437-0.9831-1.6999l1.3675-2.3768 c1.2584-2.9501,1.3444-6.2662,0.2583-9.2841c-1.5204-4.2249-4.335-8.5601-4.335-8.5601s-3.0715,7.2894-12.7125,4.4197"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.0934,33.6473c0,0,0.8495,1.464,2.0882,2.5242c1.1976,1.025,2.1398,2.3157,2.8434,3.7263 c0.8153,1.6348,2.2451,3.4701,4.6282,3.8275l0.6143,7.204c0,0-0.0317,6.342-0.943,9.2166 c-0.1843,0.5813,0.237,1.1707,0.8468,1.1706l1.9491,0c0.4895,0,0.8879-0.3939,0.8935-0.8834l0.4368-9.2245l0.7312-6.6456 c0,0-0.3909-4.4118,0.7818-6.0871"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.1071,42.9513c0,0-0.9404,1.4675,1.153,6.7496c-0.8139,3.3558-1.8987,6.9806-4.4676,9.9404 c-0.3367,0.5956,0.2093,1.3403,0.8935,1.3403h1.3615c0.7774,0,1.4913-0.4289,1.8564-1.1152l0.8029-1.5095l2.4297-5.4235"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.4291,27.2511c0,0,4.9702-1.452,3.1832,14.5756"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.5017,26.6978c0,0,5.665,4.3043,1.9983,14.3043"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.0914,43.8319c0,0,2.5452-6.7005,0.4651-12.6171"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.4134,25.6578c0,0,3.6699,5.5943,1.0033,10.511"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.9876,40.8241c0,0,2.8881-8.4483,0-13.9483"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.1544,25.4082c0,0,1.3961,4.9702-2.513,6.0871s-4.8585,3.7416-4.8585,3.7416s-3.9092,1.8987-4.691-1.8987 s3.6858-8.3768,3.6858-8.3768l2.5689-2.5689l-1.9546-1.6754c0,0,2.8768-5.4202,8.2748-3.2422s10.6667,4.3604,10.6667,4.3604 s2.0563,1.7299,1.6654,4.1871c0,0,8.068,2.0936,17.8564-0.7505c1.3381-0.3888,2.7579-0.3941,4.1104-0.0589 c2.3706,0.5875,5.6294,2.1206,7.0727,6.1147c2.4013,6.6456-3.0156,12.6768-3.0156,12.6768l1.9546,4.6351l-1.5078,8.9911 l-1.8002,3.0923c-0.1983,0.3657-0.581,0.5935-0.997,0.5935h-1.0495c-0.8724,0-1.4182-0.9437-0.9831-1.6999l1.3675-2.3768 c1.2584-2.9501,1.3444-6.2662,0.2583-9.2841c-1.5204-4.2249-4.335-8.5601-4.335-8.5601s-3.0715,7.2894-12.7125,4.4197"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.0934,33.6473c0,0,0.8495,1.464,2.0882,2.5242c1.1976,1.025,2.1398,2.3157,2.8434,3.7263 c0.8153,1.6348,2.2451,3.4701,4.6282,3.8275l0.6143,7.204c0,0-0.0317,6.342-0.943,9.2166 c-0.1843,0.5813,0.237,1.1707,0.8468,1.1706l1.9491,0c0.4895,0,0.8879-0.3939,0.8935-0.8834l0.4368-9.2245l0.7312-6.6456 c0,0-0.3909-4.4118,0.7818-6.0871"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.1071,42.9513c0,0-0.9404,1.4675,1.153,6.7496c-0.8139,3.3558-1.8987,6.9806-4.4676,9.9404 c-0.3367,0.5956,0.2093,1.3403,0.8935,1.3403h1.3615c0.7774,0,1.4913-0.4289,1.8564-1.1152l0.8029-1.5095l2.4297-5.4235"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.4291,27.2511c0,0,4.9702-1.452,3.1832,14.5756"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.5017,26.6978c0,0,5.665,4.3043,1.9983,14.3043"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.0914,43.8319c0,0,2.5452-6.7005,0.4651-12.6171"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.4134,25.6578c0,0,3.6699,5.5943,1.0033,10.511"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.9876,40.8241c0,0,2.8881-8.4483,0-13.9483"
    })));
  }
};

export default Zebra;