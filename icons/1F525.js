import React from 'react';

const Fire = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      d: "M51.3344,58.3018c7.563-9.7894,4.0318-21.8721,2.4461-25.5688c-0.1799-0.4193-0.9302-0.5566-0.982-0.1006 c-0.1225,1.0797-0.4061,2.3611-2.0041,1.9736c-0.8203-0.1989-1.3479-0.556-1.3479-1.8802 c0.511-15.0494-10.5109-25.2968-14.3463-28.5356c-0.5103-0.4309-1.2668,0.0293-1.1587,0.7039 c2.456,15.3348-1.6079,14.2846-3.0986,13.8192c-0.2593-0.081-0.5408,0.0546-0.6603,0.3074 c-4.5882,9.7014-3.4112,14.2653-3.519,17.4455c0,0.2569,0,0.687,0,0.9581c0,1.746-1.4154,2.5822-2.5607,2.0714 c-2.0545-0.9163-2.4047-6.3729-2.4134-7.8235c-0.0041-0.6828-0.8094-0.8791-1.202-0.332 c-8.8048,12.267-2.3251,23.1974-0.0822,26.3171c0.6459,0.8984,0.9025,2.0748,0.5354,3.1298 c-0.0412,0.1183-0.0896,0.2352-0.1465,0.349c-0.3988,0.7981,0.6707,1.4,0.6707,1.4c1.3155,1.2339,5.4651,5.1806,14.2817,5.1805 c7.1344-0.0001,11.9478-3.0595,13.8297-4.7247c0.8829-0.7812,1.2761-0.8594,1.2732-1.6827 C50.8459,60.3243,50.8238,58.8066,51.3344,58.3018"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F1B31C",
      stroke: "none",
      d: "M36.2938,32.5579c-0.2946,1.4609-1.3196,4.0019-4.2072,8.3499c-0.0592,0.1064-0.1172,0.2104-0.1764,0.3168 c-0.3088,0.6893-1.3555,3.3414-1.0617,7.0514c0,0.0001,0,0,0,0.0001c-0.0002,0.0018-0.573,4.337-2.977,3.9757 c-0.5095-0.0766-0.9214-0.2506-1.2541-0.4772c-0.6105-0.4159-1.4234,0.1082-1.3489,0.8525 c0.3195,3.1924,1.6034,8.0822,6.1526,11.6721c0,0,1.2832,1.0598,1.4415,1.9748c0.0052,0.0303,0.029,0.0506,0.0591,0.0506l5.2741,0 c0.1832,0,0.2083-0.024,0.2135-0.0594c0.0356-0.2402,0.3643-1.2504,3.2024-3.7732c1.9966-1.7748,3.1652-3.898,3.7424-5.3482 c0.2048-0.5145-0.101-1.1173-0.6389-1.2068c-0.3438-0.0572-0.7127-0.3603-1.0133-1.1841c-0.0003-0.001-0.0003-0.0009-0.0007-0.0019 c-0.0063-0.0235-0.2167-0.8383,0.6013-2.5595c0.3805-0.8006,0.4242-1.6645,0.36-2.3655c-0.0579-0.6322-0.7233-0.998-1.2816-0.7156 c-0.7839,0.3965-1.8694,0.5304-2.5993-1.0753c0,0-0.6584-1.5662-0.0859-5.4515c0.437-2.9656-1.0106-7.8615-2.8279-10.3747 C37.4192,31.5887,36.4459,31.8032,36.2938,32.5579z"
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
      d: "M21.6298,61.5562c3.479,3.6108,8.6702,5.4754,13.9925,5.4754c5.0546,0,10.7077-1.9624,14.2409-5.4677"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5108,57.4557c0,0-10.5321-11.2011-0.4546-25.9791c0,0,0.1969,4.0589,1.2551,6.5816c0.4834,1.0362,1.2122,1.9569,2.3487,1.9569 c1.3355,0,2.4181-0.8972,2.4181-2.5708c0-0.2599,0-0.6721,0-0.9184c0.105-3.0996-0.5251-7.6659,3.5708-17.19 c0,0,7.0365,3.7835,3.9909-14.6122c0,0,14.8798,10.4421,14.2762,28.217c0,1.2693,0.9678,2.2983,2.1617,2.2983 s2.1617-1.029,2.1617-2.2983c0.075,0.1341,6.3219,13.078-2.514,24.515"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8203,22.9729c0.198-1.0358,0.7082-2.2802,1.9228-3.3185c0,0,1.9021-1.6355,1.5953-3.8305"
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
      d: "M21.6298,61.5562c3.479,3.6108,8.6702,5.4754,13.9925,5.4754c5.0546,0,10.7077-1.9624,14.2409-5.4677"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5108,57.4557c0,0-10.5321-11.2011-0.4546-25.9791c0,0,0.1969,4.0589,1.2551,6.5816c0.4834,1.0362,1.2122,1.9569,2.3487,1.9569 c1.3355,0,2.4181-0.8972,2.4181-2.5708c0-0.2599,0-0.6721,0-0.9184c0.105-3.0996-0.5251-7.6659,3.5708-17.19 c0,0,7.0365,3.7835,3.9909-14.6122c0,0,14.8798,10.4421,14.2762,28.217c0,1.2693,0.9678,2.2983,2.1617,2.2983 s2.1617-1.029,2.1617-2.2983c0.075,0.1341,6.3219,13.078-2.514,24.515"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8203,22.9729c0.198-1.0358,0.7082-2.2802,1.9228-3.3185c0,0,1.9021-1.6355,1.5953-3.8305"
    })));
  }
};

export default Fire;