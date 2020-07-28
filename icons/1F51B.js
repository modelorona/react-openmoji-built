import React from 'react';

const ONArrow = ({
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
      d: "M44.2461,24.531c-4.438.1766-8.875.2289-13.3145.0737.1881.0066-4.8325-.0267-4.52.2605-.2189-.2008.7571-5.4961.7193-5.3949a1.5137,1.5137,0,0,0-2.2035-1.694,30.8578,30.8578,0,0,0-4.996,4.78c-1.339,1.4519-3.3092,2.3781-4.4444,3.9864a1.4971,1.4971,0,0,0,0,1.5142c1.7612,3.3448,6.8322,4.8648,8.5793,8.2275a1.5108,1.5108,0,0,0,2.7952-.7571c-.1659-2.2155-.7722-4.3335,1.9216-5.5531,1.1515-.5213,4.3349-.2567,5.59-.2873a109.1227,109.1227,0,0,1,11.1851.3562l-1.5-1.5a34.1176,34.1176,0,0,1-.3838,6.7046,1.5132,1.5132,0,0,0,2.5071,1.4594q4.3041-4.296,8.8361-8.3365a1.5125,1.5125,0,0,0-.3036-2.3558,29.3257,29.3257,0,0,1-8.8174-7.718,1.5074,1.5074,0,0,0-2.5071.6619c-.5025,2.5414-.9116,5.3286,1.1794,7.2821.7379.6894,2.3153.9058,2.6392,1.8029.381,1.0555-.6294,1.3555-1.35,2.4079L48.6,30.81a23.368,23.368,0,0,1-.8306-6.819l-2.9465.3988a24.2429,24.2429,0,0,0,2.39,5.3618,1.5011,1.5011,0,0,0,2.59-1.5142,21.2167,21.2167,0,0,1-2.0874-4.6452,1.5071,1.5071,0,0,0-2.9464.3988,25.6527,25.6527,0,0,0,.9377,7.6165,1.5194,1.5194,0,0,0,2.7417.3583c1.0819-1.5791,3.28-1.9512,3.0009-4.2675-.5529-4.59-6.573-.83-5.1667-7.942l-2.5071.6619a31.56,31.56,0,0,0,9.4246,8.1871L52.8969,26.25q-4.5388,4.047-8.836,8.3365l2.5071,1.4594a39.316,39.316,0,0,0,.4909-7.5021,1.54,1.54,0,0,0-1.5-1.5c-5.7246-.448-13.4548-1.5391-19.0328.1494C22.9708,28.269,23.63,32.435,23.862,35.5276l2.7953-.757C25.058,31.6925,21.2,30.452,19.4861,27.47c-.69-1.2-1.639.6695.7552-.9738,2.42-1.6612,3.7358-4.403,6.2008-6.1293l-2.2035-1.694c-.804,2.1514-2.16,7.097.3023,8.5268,1.6682.9689,6.4628.4177,8.2925.46,3.8064.0875,7.6088.023,11.4127-.1283,1.924-.0765,1.9339-3.0769,0-3Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M24.0644,28.5407l.7282.3676.1512,1.1559c.1812-.8626,1.3087-1.237,1.5389-2.1181a1.9764,1.9764,0,0,0-.8078-1.99c-1.0931-.8711-1.9289-2.65-3.608-1.8866-1.133.5154-3.3277,2.3529-3.3277,3.7312,0,1.842,2.3059,2.0688,3.6575,2.1107L20.95,28.0127a6.3441,6.3441,0,0,0-.3232,1.2245l2.9464.3988a9.8244,9.8244,0,0,1,.848-4.4353A3.3991,3.3991,0,0,0,24.7126,22.2a1.499,1.499,0,0,0-1.2952-.7429l-.158-.0086a1.4529,1.4529,0,0,0-1.2953.7429l-.0526.1232c-.7508,1.7556,1.8327,3.2858,2.59,1.5141l.0527-.1232-1.2952.743.158.0086-1.2952-.7429q-.2557-.8039-.3927.1943-.2652.4422-.4869.9078a5.842,5.842,0,0,0-.393,1.3609,21.2349,21.2349,0,0,0-.2761,3.4587c-.016,1.64,2.6662,2.1065,2.9465.3987a6.3438,6.3438,0,0,1,.3231-1.2245,1.513,1.513,0,0,0-1.4464-1.8988c-.2757-.0085-1.065-.2666-.8623.1322v1.5142A5.8124,5.8124,0,0,1,23.581,26.66l-1.1558.1512q-.5289-.3615-.0376.2a5.6955,5.6955,0,0,0,.5067.6093,8.4,8.4,0,0,0,1.2665.9263l-.6894-.8964.1184.296L23.741,26.79c-.7129.9754-1.906,1.675-1.7169,3.0746a1.9186,1.9186,0,0,0,2.04,1.6759c1.9014-.1965,1.9216-3.1986,0-3Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "14.5 27.5 27.156 39 27.156 30.567 43.5 30.567"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.156 24.433 27.156 16 14.5 27.5"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43.5 30.567 43.5 39 56.156 27.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "56.156 27.5 43.5 16 43.5 24.433 27.156 24.433"
    }))), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "33.392 54.383 33.392 44.383 40.534 54.383 40.534 44.383"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.9631,54.3449h0a3.5715,3.5715,0,0,1-3.5715-3.5714V47.9163a3.5715,3.5715,0,0,1,3.5715-3.5714h0a3.5714,3.5714,0,0,1,3.5714,3.5714v2.8572A3.5714,3.5714,0,0,1,26.9631,54.3449Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "46.3287",
      x2: "46.3287",
      y1: "44",
      y2: "49.9291",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.3287",
      cy: "53.5987",
      r: "1.3712"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "14.5 27.5 27.156 39 27.156 30.567 43.5 30.567"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.156 24.433 27.156 16 14.5 27.5"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "43.5 30.567 43.5 39 56.156 27.5"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "56.156 27.5 43.5 16 43.5 24.433 27.156 24.433"
    }))), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "33.392 54.383 33.392 44.383 40.534 54.383 40.534 44.383"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.9631,54.3449h0a3.5715,3.5715,0,0,1-3.5715-3.5714V47.9163a3.5715,3.5715,0,0,1,3.5715-3.5714h0a3.5714,3.5714,0,0,1,3.5714,3.5714v2.8572A3.5714,3.5714,0,0,1,26.9631,54.3449Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "46.3287",
      x2: "46.3287",
      y1: "44",
      y2: "49.9291",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.3287",
      cy: "53.5987",
      r: "1.3712"
    }))));
  }
};

export default ONArrow;