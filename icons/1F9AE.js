import React from 'react';

const GuideDog = ({
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
      fill: "#6a462f",
      d: "M43.8655,56.8472A19.888,19.888,0,0,0,46.697,44.3538l-2.099-3.083L40.49,39.7365c.0547.6407,1.5706,5.5234,2.0129,6.7978a2.4224,2.4224,0,0,1,.131.8982c-.248,5.4982-1.561,6.9861-1.8953,7.2784-.0212.0166-.0421.0331-.0625.05l-.0157.0108.0025.0023a1.7765,1.7765,0,0,0-.622,1.2338,1.9461,1.9461,0,0,0,1.8677,1.996,2.0061,2.0061,0,0,0,1.6182-.6287l.0024.0022.0078-.0123A1.7851,1.7851,0,0,0,43.8655,56.8472Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6a462f",
      d: "M33.3114,55.9593a69.3455,69.3455,0,0,0,.1614-7.3127,10.34,10.34,0,0,0-1.0721-5.2911l-2.1249.3931L29.1744,46.33l.8961,2.64c1.1916,3.3886.69,4.9746.1641,5.6835a2.28,2.28,0,0,0-.605.5242l-.0077.0033.0036.0015a1.8273,1.8273,0,0,0-.3085,1.8852,1.999,1.999,0,0,0,2.6855.8465,2.22,2.22,0,0,0,1.1966-1.2529h0c.0019-.0089.0079-.0189.01-.028A1.8017,1.8017,0,0,0,33.3114,55.9593Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M20.368,26.8513a17.3127,17.3127,0,0,1,2.8439,9.0316.46.46,0,0,0,.0116.0942c.0861.376.7177,2.9384,2.1366,3.9037,0,0,2.4232,2.3935-1.8351,3.6861,0,0-6.8524,2.4151-4.76,6.544,0,0,1.4839,2.58,3.3571.0708a.58.58,0,0,0,.0849-.154,2.46,2.46,0,0,0-.1041-1.7106.5363.5363,0,0,1,.1464-.635,4.4177,4.4177,0,0,1,4.0485-.9147s2.32.98,5.221-3.5682a.4949.4949,0,0,1,.1035-.12c.4942-.4091,4.0807-3.1572,10.555-2.52a.5557.5557,0,0,1,.3345.1524c.866.838,5.6769,5.4328,8.5311,6.8831a.4439.4439,0,0,1,.1231.088,7.5146,7.5146,0,0,1,1.8911,6.69.5577.5577,0,0,1-.1455.28c-.4252.4341-1.8257,2.12.8921,3.1532a.5758.5758,0,0,0,.2209.0383c.5794-.0219,3.1319-.3129,2.0291-3.7774a.4788.4788,0,0,1-.0254-.1465c-.0041-.7223-.088-6.956-1.7424-10.4368a.5357.5357,0,0,0-.1451-.1855c-.3782-.3157-1.8671-2.1484-.7375-10.9222.0058-.0447.1809-.1465.1683-.19-.1975-.6747,1.1232-2.7292,1.743-3.3268h0c.1846-.1662,6.445-6.5168,2.2092-10.8378-.0293-.03.03.03,0,0-.4411-.4445-5.5293-4.0273-8.61-.5261a12.661,12.661,0,0,0-1.8627,3.4988c-.7463,2.6171,1.0645,4.7977,2.0617,2.2655.09-.2279,1.31-2.0434,1.3959-2.3088a.538.538,0,0,1,.14-.2272c.5137-.4753,2.9136-2.4076,4.1177,1.7125,0,0,1.0682,3.6264-4.444,5.4868a.5557.5557,0,0,1-.4053-.016c-.7856-.3523-4.0565-1.5641-9.216-.0783a.3317.3317,0,0,1-.0416.01c-.4561.0772-10.2279,1.6335-11.3375-6.6,0,0-.74-4.5766-3.08-4.64l-5.2076-.7865s-2.2711-.0165-2.6165,1.6937c0,0-.0406,1.4028-2.6234,1.3287-.6628.0024-3.1142-.4216-2.0858,2.3116a.5491.5491,0,0,1,.0159.3618c-.2187.6733-.7872,3.15,2.5768,3.4085C16.3022,24.9154,19.2451,24.766,20.368,26.8513Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9145,41.4186c.2106.6232,1.7517,4.7609,1.8826,5.1157a2.291,2.291,0,0,1,.1394.8982c-.2637,5.4982-1.66,6.9861-2.0154,7.2784-.0225.0166.0218-.0175,0,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1465,57.53C47.02,54.076,46.69,44.3538,46.69,44.3538"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9211,54.7109a2.2219,2.2219,0,0,0-.7423,1.2974,1.875,1.875,0,0,0,1.6811,1.996,1.7151,1.7151,0,0,0,1.4564-.6287l.0022.0022"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.1744,46.33l.8961,2.64c1.1916,3.3886.69,4.9746.1641,5.6835l-.6091.529a1.8273,1.8273,0,0,0-.3085,1.8852,1.999,1.999,0,0,0,2.6855.8465,2.22,2.22,0,0,0,1.1966-1.2529h0c.0019-.0089.0079-.0189.01-.028a1.8017,1.8017,0,0,0,.1025-.6732,69.3455,69.3455,0,0,0,.1614-7.3127,10.1111,10.1111,0,0,0-.112-2.3048,9.876,9.876,0,0,0-.96-2.9863"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.5614,47.6026a3.5056,3.5056,0,0,0,.204,2.5083,1.8926,1.8926,0,0,0,2.4356,1.0839c.8852-.4055.8639-1.798.56-2.8257"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.7158,48.219a4.5851,4.5851,0,0,1,3.7093-1.6119,1.9942,1.9942,0,0,1,.548.0831,3.0274,3.0274,0,0,0,3.67-1.3744"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.5147,32.9083l-.2959,5.6328s-.2094,3.6923.8078,4.5411a7.0926,7.0926,0,0,1,1.2718,4.7533s.5363,5.7575.6973,7.9907"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.5415,23.6767c2.5433-6.4561,5.1809-3.19,5.1809-3.19,3.1773,3.94-.9928,6.3629-2.8305,7.1889a1.7628,1.7628,0,0,1-1.39-.02c-2.5616-1.029-8.8257.179-8.8257.179a16.0761,16.0761,0,0,1-6.3963-.4692q-.1317-.0423-.2566-.0866a7.0346,7.0346,0,0,1-1.7047-.8568,3.5332,3.5332,0,0,1-1.1206-1.1433,48.8236,48.8236,0,0,1-3.0644-7.2278,1.842,1.842,0,0,0-1.0479-1.1626,20.7191,20.7191,0,0,0-5.1529-1.0346c-3.1365-.3594-3.5144,1.6507-3.5144,1.6507-.532,1.369-1.4378,1.3243-1.4378,1.3243l-1.8637.0069c-2.3111.1288-1.3312,2.5027-1.3312,2.5027-.5857,3.0884,3.0884,3.7274,3.0884,3.7274a4.77,4.77,0,0,1,3.195,1.3312,18.1376,18.1376,0,0,1,2.9286,7.8276c.213,3.6741,1.7347,4.9613,1.7347,4.9613,2.8549,2.7709,0,3.8205,0,3.8205-4.2084,1.5247-5.75,3.2313-6.1435,4.606"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.9957,55.8263c.1855,1.6659-.9823,2.0907-2.0845,2.0184a1.8927,1.8927,0,0,1-1.88-1.89,9.1145,9.1145,0,0,1,.3382-1.4583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.9957,55.8263c.0105.1455.02.2771.0266.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.22,55.11c.3731-1.2449,1.0885-4.4928-.6281-7.0155a1.7263,1.7263,0,0,0-.481-.4666c-1.13-.7421-5.4176-3.6535-7.3255-6.34a1.5244,1.5244,0,0,0-1.12-.623c-2.4893-.218-10.3347-.4413-13.209,4.9821"
    })))), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#3f3f3f",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.4455,14.1812l-1.7845-.6677c-.8312-.4187-1.021.0567-1.3429.3191L32.9957,23.6744"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#3f3f3f",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.23,27.1318a22.4539,22.4539,0,0,0,.5648,15.176"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#3f3f3f",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.23,27.1318s-6.0878,6.0749-10.8849,5.27"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#3f3f3f",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.1744,30.3174,48.3755,14.8491a.4742.4742,0,0,0-.18-.8287L45.83,13.4155"
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9145,41.4186c.2106.6232,1.7517,4.7609,1.8826,5.1157a2.291,2.291,0,0,1,.1394.8982c-.2637,5.4982-1.66,6.9861-2.0154,7.2784-.0225.0166.0218-.0175,0,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.1465,57.53C47.02,54.076,46.69,44.3538,46.69,44.3538"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.9211,54.7109a2.2219,2.2219,0,0,0-.7423,1.2974,1.875,1.875,0,0,0,1.6811,1.996,1.7151,1.7151,0,0,0,1.4564-.6287l.0022.0022"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.1744,46.33l.8961,2.64c1.1916,3.3886.69,4.9746.1641,5.6835l-.6091.529a1.8273,1.8273,0,0,0-.3085,1.8852,1.999,1.999,0,0,0,2.6855.8465,2.22,2.22,0,0,0,1.1966-1.2529h0c.0019-.0089.0079-.0189.01-.028a1.8017,1.8017,0,0,0,.1025-.6732,69.3455,69.3455,0,0,0,.1614-7.3127,10.1111,10.1111,0,0,0-.112-2.3048,9.876,9.876,0,0,0-.96-2.9863"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.5614,47.6026a3.5056,3.5056,0,0,0,.204,2.5083,1.8926,1.8926,0,0,0,2.4356,1.0839c.8852-.4055.8639-1.798.56-2.8257"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.7158,48.219a4.5851,4.5851,0,0,1,3.7093-1.6119,1.9942,1.9942,0,0,1,.548.0831,3.0274,3.0274,0,0,0,3.67-1.3744"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.5147,32.9083l-.2959,5.6328s-.2094,3.6923.8078,4.5411a7.0926,7.0926,0,0,1,1.2718,4.7533s.5363,5.7575.6973,7.9907"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.5415,23.6767c2.5433-6.4561,5.1809-3.19,5.1809-3.19,3.1773,3.94-.9928,6.3629-2.8305,7.1889a1.7628,1.7628,0,0,1-1.39-.02c-2.5616-1.029-8.8257.179-8.8257.179a16.0761,16.0761,0,0,1-6.3963-.4692q-.1317-.0423-.2566-.0866a7.0346,7.0346,0,0,1-1.7047-.8568,3.5332,3.5332,0,0,1-1.1206-1.1433,48.8236,48.8236,0,0,1-3.0644-7.2278,1.842,1.842,0,0,0-1.0479-1.1626,20.7191,20.7191,0,0,0-5.1529-1.0346c-3.1365-.3594-3.5144,1.6507-3.5144,1.6507-.532,1.369-1.4378,1.3243-1.4378,1.3243l-1.8637.0069c-2.3111.1288-1.3312,2.5027-1.3312,2.5027-.5857,3.0884,3.0884,3.7274,3.0884,3.7274a4.77,4.77,0,0,1,3.195,1.3312,18.1376,18.1376,0,0,1,2.9286,7.8276c.213,3.6741,1.7347,4.9613,1.7347,4.9613,2.8549,2.7709,0,3.8205,0,3.8205-4.2084,1.5247-5.75,3.2313-6.1435,4.606"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.9957,55.8263c.1855,1.6659-.9823,2.0907-2.0845,2.0184a1.8927,1.8927,0,0,1-1.88-1.89,9.1145,9.1145,0,0,1,.3382-1.4583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.9957,55.8263c.0105.1455.02.2771.0266.39"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.22,55.11c.3731-1.2449,1.0885-4.4928-.6281-7.0155a1.7263,1.7263,0,0,0-.481-.4666c-1.13-.7421-5.4176-3.6535-7.3255-6.34a1.5244,1.5244,0,0,0-1.12-.623c-2.4893-.218-10.3347-.4413-13.209,4.9821"
    })))));
  }
};

export default GuideDog;