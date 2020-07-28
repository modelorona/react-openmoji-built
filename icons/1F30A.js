import React from 'react';

const WaterWave = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M4,28.1891C4,14.817,14.2855,3.9774,27.8365,3.9774l0,0C15,19.3437,26.25,43.7216,56.4,41.5631 c4.2563-0.3047,8.9466-1.7777,12.5933-3.7244v30.0865c0,0.5583-0.4525,1.0108-1.0108,1.0109L4,68.9578V28.1891"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M21.7843,10.0119c-3.8217,7.178-5.9507,21.1275,6.5553,33.3435c0,0,10.2391,12.649,40.6537,4.8847V37.3494 c0,0-11.1064,7.5922-27.5251,2.3384c-15.3849-4.923-19.4254-16.5267-18.9093-20.7668c0.1825-1.4994,0.7878-6.0417,0.7878-6.0417 s0.8388-3.0147,0.5454-3.801C23.5525,8.1679,22.058,9.4979,21.7843,10.0119z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M44.857,9.7223c1.6744,1.9066,1.5785,4.7217-0.2101,6.2925s-4.5959,1.2984-6.2703-0.6082 c0,0-2.0702-2.2858-3.0178-8.8759c0,0-0.2509-1.3199,0.9788-0.9606C42.7502,7.3608,44.857,9.7223,44.857,9.7223"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      d: "M35.4101,6.0551c4.3534-0.5992,9.1662,3.3883,9.1662,3.3883c2.1331,2.429,1.859,5.0003,0.0704,6.571 C44.6466,16.0144,43.6489,10.5723,35.4101,6.0551"
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
      d: "M4,27.8333 M4,67.9583 M68,47.8958v20.0625H4v-40.125C4,13.1478,13.579,4,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M68,37.5064C64.3533,39.4229,60.6563,40.7,56.4,41C26.25,43.125,15,19.125,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M68,47.8958c-4.8333,2.6875-11.25,3.3715-19.0158,2.9878C13.9911,47.6254,11.3813,14.3841,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M44.857,9.7223c1.6744,1.9066,1.5785,4.7217-0.2101,6.2925s-4.5959,1.2984-6.2703-0.6082c0,0-2.0702-2.2858-3.0178-8.8759 c0,0-0.2509-1.3199,0.9788-0.9606C42.7502,7.3608,44.857,9.7223,44.857,9.7223"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.875,63.2775c-3.4238,0-3.4238-2.055-6.8475-2.055c-3.4219,0-3.4219,2.055-6.8438,2.055c-3.4249,0-3.4249-2.055-6.8498-2.055 c-3.4272,0-3.4272,2.055-6.8545,2.055s-3.4272-2.055-6.8545-2.055"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
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
      d: "M4,27.8333 M4,67.9583 M68,47.8958v20.0625H4v-40.125C4,13.1478,13.579,4,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M68,37.5064C64.3533,39.4229,60.6563,40.7,56.4,41C26.25,43.125,15,19.125,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M68,47.8958c-4.8333,2.6875-11.25,3.3715-19.0158,2.9878C13.9911,47.6254,11.3813,14.3841,27.8364,3.9969"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.9",
      d: "M44.857,9.7223c1.6744,1.9066,1.5785,4.7217-0.2101,6.2925s-4.5959,1.2984-6.2703-0.6082c0,0-2.0702-2.2858-3.0178-8.8759 c0,0-0.2509-1.3199,0.9788-0.9606C42.7502,7.3608,44.857,9.7223,44.857,9.7223"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.875,63.2775c-3.4238,0-3.4238-2.055-6.8475-2.055c-3.4219,0-3.4219,2.055-6.8438,2.055c-3.4249,0-3.4249-2.055-6.8498-2.055 c-3.4272,0-3.4272,2.055-6.8545,2.055s-3.4272-2.055-6.8545-2.055"
    })));
  }
};

export default WaterWave;