import React from 'react';

const Boar = ({
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
      fill: "#6A462F",
      stroke: "none",
      d: "M18.2562,20.392l-1.4733,2.7164l-6.8836,4.1102c0,0-4.0991,3.4124-3.7536,4.6981 c0.3455,1.2857,0.9175,2.8327,0.9175,2.8327s0.1912,2.6601,1.1912,3.497s3.9363,0,3.9363,0l2.9057-0.6172l4.158-0.1292 c0,0,2.223,2.0833,2.9865,2.25c0.7635,0.1667,4.4302,2.0874,4.4302,2.0874s-0.4167,2.7282,0,3.737 c0.4167,1.0089,1.2734,5.1857,1.2734,5.1857l-0.8227,4.0732l1.6454,2.0833c0,0,3.18-0.0069,3.3155-1.5989l1.0051,2.0195 l2.4235-0.3976l0.7191-1.5272l0.399-7.183l1.9584-4.7014c0,0,1.5,0.7085,2.25,1.0069c0.75,0.2984,5.6889,0,5.6889,0l4.1667-1.9749 l3.655,3.6086l-0.1854,4.8619l-0.3369,3.5493l0.5224,1.3659l1.3309,0.6716l2.2822-0.6716l1.1272-10.8603l-0.8331-3.2397 c0,0,4.3089-9.7208,3.2373-12.7833s-9.4657-7.32-9.4657-7.32l-9.0264-3.0706c0,0-8.9962-2.4218-12.6629-2.6718 S18.2562,20.392,18.2562,20.392z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M22.0044,38.2464c0,0,8.7917,6.2119,16.8333,4.1286l-2.2406,6.4345l-0.3844,7.8079l-3.125,0.7198 l-1.2705-1.3914c0,0-1.3082,1.2625-3.0501,0.9709c-1.7419-0.2917-2.1169-3.0417-2.1169-3.0417l1.375-4.3125l-1.1875-4.25 C26.8377,45.3125,22.5453,39.6532,22.0044,38.2464z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M59.0877,38.875c0,0-6.7083-0.125-7.7083,2.5833c-1,2.7083,2.9689,4.7104,2.9689,4.7104l-0.5522,4.5914 l-0.1667,4.4482l1.375,1.4091l3.0833-0.4091l1-3.9583l0.5417-7.6667l-0.6667-4.7083L59.0877,38.875z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M23.3377,21.6875c0,0-5.5,5.5,1.5625,8.6875l3.0442-2.1875c0,0,1.0808-3.6875,1.0808-3.9375 s-0.2581-3.3907-0.2581-3.3907L27.6502,20.5L23.3377,21.6875z"
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
      d: "M8.9874,37.6522c0,0,2.0168,1.435,4.2662-0.1551l3.1083,0.2228c1.2161,0.0872,2.411-0.3521,3.2811-1.2061l3.2672-3.2067"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.5926,33.272c-0.862-0.6593-1.3426-2.5845-0.4667-4.2095"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.2316,32.2225c-2.6899,2.3456-8.1684,2.5269-8.1684,2.5269L6.1457,32.268c1.2128-4.971,8.4793-7.7055,8.4793-7.7055 l2.158-1.4542l0.8422-2.227c4.6223-3.7209,9.9561-5.1271,16.0675-4.0947c0,0,22.6884,2.9476,27.5312,12.1651 c0,0,1.5911,2.3191-2.9684,12.8941l0.8349,3.2467l-0.6967,9.7954c-0.0693,0.9744-0.88,1.7295-1.8569,1.7295h-0.8575 c-1.0976,0-1.957-0.9448-1.8533-2.0375l0.7712-8.1238l-3.6699-4.2393c0,0-2.0681,3.983-9.5452,1.5783"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.8161,22.5654l3.7744-1.6828c0.4668-0.1173,0.9199,0.2224,0.9441,0.7031c0.1034,2.0556,0.2325,7.379-3.8398,7.7668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2409,38.6608c1.9649,1.5919,5.4102,4.0457,8.5566,4.1126l1.6928,7.755l-0.4077,4.7893 c-0.0925,1.0865,0.7645,2.0195,1.8549,2.0195h0.4326c1.0539,0,1.903-0.8717,1.8602-1.9248 c-0.1416-3.4875,0.0316-10.8589,3.5901-14.8514"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.6225,45.5745c0.4154,1.9173,0.6969,4.7358-0.4188,8.2036c-0.344,1.0692,0.4357,2.1677,1.5588,2.1677h0.0046"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.5713,31.0769c0.5566,1.0204,1.515,6.2151-0.4484,7.4211c-1.9634,1.2059,0.5892,3.3395,0.5892,3.3395"
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
      d: "M8.9874,37.6522c0,0,2.0168,1.435,4.2662-0.1551l3.1083,0.2228c1.2161,0.0872,2.411-0.3521,3.2811-1.2061l3.2672-3.2067"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.5926,33.272c-0.862-0.6593-1.3426-2.5845-0.4667-4.2095"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.2316,32.2225c-2.6899,2.3456-8.1684,2.5269-8.1684,2.5269L6.1457,32.268c1.2128-4.971,8.4793-7.7055,8.4793-7.7055 l2.158-1.4542l0.8422-2.227c4.6223-3.7209,9.9561-5.1271,16.0675-4.0947c0,0,22.6884,2.9476,27.5312,12.1651 c0,0,1.5911,2.3191-2.9684,12.8941l0.8349,3.2467l-0.6967,9.7954c-0.0693,0.9744-0.88,1.7295-1.8569,1.7295h-0.8575 c-1.0976,0-1.957-0.9448-1.8533-2.0375l0.7712-8.1238l-3.6699-4.2393c0,0-2.0681,3.983-9.5452,1.5783"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.8161,22.5654l3.7744-1.6828c0.4668-0.1173,0.9199,0.2224,0.9441,0.7031c0.1034,2.0556,0.2325,7.379-3.8398,7.7668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2409,38.6608c1.9649,1.5919,5.4102,4.0457,8.5566,4.1126l1.6928,7.755l-0.4077,4.7893 c-0.0925,1.0865,0.7645,2.0195,1.8549,2.0195h0.4326c1.0539,0,1.903-0.8717,1.8602-1.9248 c-0.1416-3.4875,0.0316-10.8589,3.5901-14.8514"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.6225,45.5745c0.4154,1.9173,0.6969,4.7358-0.4188,8.2036c-0.344,1.0692,0.4357,2.1677,1.5588,2.1677h0.0046"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.5713,31.0769c0.5566,1.0204,1.515,6.2151-0.4484,7.4211c-1.9634,1.2059,0.5892,3.3395,0.5892,3.3395"
    })));
  }
};

export default Boar;