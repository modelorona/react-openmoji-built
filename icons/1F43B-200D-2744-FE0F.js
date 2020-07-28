import React from 'react';

const PolarBear = ({
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
      fill: "#d0cfce",
      d: "M50.6975,53.9417H43.89s-.3683-3.534,2.5783-3.818S48.54,45.9964,48.54,45.9964h7.327v7.9453Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7.3036,29.26s1.6438.8078.69,1.945a.9862.9862,0,0,1-1.71-.0116S5.1878,30.8193,7.3036,29.26Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M55.8671,50.631s-6.6033.4392-5.0148,4.2254h9.3464s2.4571,0,1.9707-5.8393c0,0,.1715-15.1883-.4973-16.6883l2.8521,1.809A.9674.9674,0,0,0,66,33.2913v-.7731c-.4627-1.7564-9.4146-9.3746-16.8734-9.3746a15.5769,15.5769,0,0,0-4.8841.7724s-.0442.0113-.1105.0341c-.7183.1818-4.5637,1.1926-5.4808,1.2835-1.0166.0909-17.6021-.5973-17.6021-.5973-2.3466-.0378-2.7887-.8026-4.3654-.3568-4.084,1.1546-11.4128,5.399-10.4,6.9135,1.0783,1.6122,2.0719,4.638,10.5546,1.31h.0442c.2984,0,2.1658.2045,6.7737,4.7023a.0359.0359,0,0,0,.011.0228C26.684,40.17,35.7045,52.0878,36.53,52.7437s5.851,2.1127,5.16-3.01c-1.5424-.1533-2.8951-.4089-2.8951-.4089l-.1156-3.3284c5.0669,1.3752,11.9363-1.05,11.9363-1.05"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M23.2417,37.1571c.1326.5338,3.2727,12.0447-.011,12.5056s-3.79,1.1586-3.7018,3.4757h8.7516l4.1659-3.8391S28.7058,39.5091,23.2417,37.1571Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.7948,49.3248s1.3527.2556,2.8951.4089c.6907,5.1227-4.3352,3.666-5.16,3.01S26.684,40.17,23.6673,37.2281a.0359.0359,0,0,1-.011-.0228c-4.6079-4.4978-6.4753-4.7023-6.7737-4.7023h-.0442c-8.4827,3.328-9.4763.3022-10.5546-1.31-1.0129-1.5145,6.3159-5.7589,10.4-6.9135,1.5767-.4458,2.0188.319,4.3654.3568,0,0,16.5855.6882,17.6021.5973.9171-.0909,4.7625-1.1017,5.4808-1.2835.0663-.0228.1105-.0341.1105-.0341a15.5769,15.5769,0,0,1,4.8841-.7724c7.4588,0,16.4107,7.6182,16.8734,9.3746v.7731a.9674.9674,0,0,1-1.4758.8465l-2.8521-1.809"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.6673,37.2281c.1326.5339,3.2727,12.0447-.011,12.5056s-3.79,1.1586-3.7018,3.4757h8.7517L32.872,49.37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.6155,53.9417H43.8079s-.3684-3.534,2.5783-3.818,2.0719-4.1273,2.0719-4.1273a20.0267,20.0267,0,0,1-9.7789,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8671,50.631s-7.2364-6.3521-7.8234-10.9665"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8671,50.631s-6.6033.4392-5.0148,4.2254h9.3464S62.51,54.75,61.5981,49c0,0,3.5266-9.125,1.3985-15.8437"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.1768,26.1842s2.3021-.38,1.3813,3.0754"
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
      d: "M38.7948,49.3248s1.3527.2556,2.8951.4089c.6907,5.1227-4.3352,3.666-5.16,3.01S26.684,40.17,23.6673,37.2281a.0359.0359,0,0,1-.011-.0228c-4.6079-4.4978-6.4753-4.7023-6.7737-4.7023h-.0442c-8.4827,3.328-9.4763.3022-10.5546-1.31-1.0129-1.5145,6.3159-5.7589,10.4-6.9135,1.5767-.4458,2.0188.319,4.3654.3568,0,0,16.5855.6882,17.6021.5973.9171-.0909,4.7625-1.1017,5.4808-1.2835.0663-.0228.1105-.0341.1105-.0341a15.5769,15.5769,0,0,1,4.8841-.7724c7.4588,0,16.4107,7.6182,16.8734,9.3746v.7731a.9674.9674,0,0,1-1.4758.8465l-2.8521-1.809"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.6673,37.2281c.1326.5339,3.2727,12.0447-.011,12.5056s-3.79,1.1586-3.7018,3.4757h8.7517L32.872,49.37"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.6155,53.9417H43.8079s-.3684-3.534,2.5783-3.818,2.0719-4.1273,2.0719-4.1273a20.0267,20.0267,0,0,1-9.7789,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8671,50.631s-7.2364-6.3521-7.8234-10.9665"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8671,50.631s-6.6033.4392-5.0148,4.2254h9.3464S62.51,54.75,61.5981,49c0,0,3.5266-9.125,1.3985-15.8437"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.1768,26.1842s2.3021-.38,1.3813,3.0754"
    })));
  }
};

export default PolarBear;