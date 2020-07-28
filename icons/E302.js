import React from 'react';

const FemaleNurse = ({
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
      d: "M16.6716,60.8806S14.5412,47.1,26.5412,47.1a15.3055,15.3055,0,0,0,9.1305,2.673l.2749.1a16.9557,16.9557,0,0,0,9.5016-3.052c11.5646-.0346,9.1074,13.96,9.3384,14.06"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M45.0221,46.2625a18.2742,18.2742,0,0,1-8.87,3.514c13.1.4,13.1,7.1,13.8,11.1h5.1S57.0221,46.2625,45.0221,46.2625Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M27.1022,21.99V14.02s6.72.26,9.19-2.64c2.47,2.9,9.19,2.64,9.19,2.64v7.94l-9.07-.88Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#d22f27",
      points: "34.312 17.384 35.754 17.384 35.754 18.826 36.769 18.826 36.769 17.384 38.211 17.384 38.211 16.369 36.769 16.369 36.769 14.927 35.754 14.927 35.754 16.369 34.312 16.369 34.312 17.384"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M45.8668,22.844l-9.9942-1.593L25.0811,28.5725a17.718,17.718,0,0,0-.1965,2.641c0,7.8276,5.0765,14.1732,11.3386,14.1732s11.3386-6.3456,11.3386-14.1732A21.8907,21.8907,0,0,0,45.8668,22.844Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M31.77,43.1l-3.17.02h-.33a13.2769,13.2769,0,0,1-2.95-.41c-.33-.08-.66-.17-.98-.28-4.15-1.5-6.52-6.3.21-16.12.52-.76,1.09-1.56,1.73-2.38h1a.8524.8524,0,0,1-.03.23.6789.6789,0,0,1-.07.2c-.02.05-.05.1-.08.16l-.02.02c-.32.6-1.2467,1.1207-1.9167,2.0307-.26.35-.4525,1.1449-.7325,1.5349.5-.19,1.3092-.5456,1.9192-.7656a14.483,14.483,0,0,0-.39,2.28c-.05.53-.08,1.06-.08,1.59C25.88,36.44,28.29,40.97,31.77,43.1Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M44.16,43.02h-.22l-3.18.02c3.43-2.14,5.8-6.64,5.8-11.83a15.9119,15.9119,0,0,0-1.53-6.89,1.0707,1.0707,0,0,1-.1-.39h1.22c.64.83,1.23,1.63,1.75,2.4C56.59,38.98,50.04,43.02,44.16,43.02Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M35.297,21.46c-2.9757-1.1514-8.2325,1.36-8.2325,1.36a12.5967,12.5967,0,0,0-2.1279,6.2442c5.63-1.3521,12.8372-7.1512,12.8372-7.1512C37.42,21.7047,35.6847,21.61,35.297,21.46Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M54.8545,60.9756a.9889.9889,0,0,1-.1524-.0108,1,1,0,0,1-.8378-1.1386c.0087-.0576.8271-5.7412-2.1289-9.1778-1.4825-1.7226-3.711-2.62-6.627-2.67l-.0156.0069c-3.29,2.22-5.9795,3.5908-9.1407,3.5908-.0107,0-.122,0-.1328-.001-3.1338-.1035-5.9423-1.5059-9.1591-3.5947a13.8012,13.8012,0,0,0-3.8125.6972c-2.9668.9043-4.335,4.7686-4.3477,4.8077a15.343,15.343,0,0,0-.56,6.3408,1,1,0,0,1-1.9765.3027,17.1466,17.1466,0,0,1,.6435-7.292c.0713-.2041,1.7276-4.875,5.6572-6.0723a15.4926,15.4926,0,0,1,4.6875-.788.9965.9965,0,0,1,.5489.164c3.13,2.0537,5.624,3.3448,8.3847,3.4365,2.7549-.0009,5.1739-1.2744,8.2061-3.3291a1.05,1.05,0,0,1,.123-.0712,1.1069,1.1069,0,0,1,.6377-.2c3.6563,0,6.4844,1.1357,8.4073,3.3769,3.5537,4.1426,2.622,10.5059,2.581,10.7754A.9991.9991,0,0,1,54.8545,60.9756ZM44.6523,46.0762h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.6523,56.877a1.0029,1.0029,0,0,1-.9238-.6163l-3.7-8.9a1,1,0,1,1,1.8477-.7676L30.99,54.084l4.041-4.2012A1,1,0,0,1,36.4727,51.27l-5.1,5.3008A.9979.9979,0,0,1,30.6523,56.877Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.3525,54.1768a.9969.9969,0,0,1-.707-.293l-2.6006-2.6006a1,1,0,1,1,1.4141-1.4141L39.06,52.47a1,1,0,0,1-.7071,1.7071Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.9521,56.877a.9982.9982,0,0,1-.7207-.3067l-2.6-2.7a1,1,0,0,1,1.4414-1.3867l1.5459,1.6055,3.087-7.3418a1.0228,1.0228,0,0,1,.9462-.7207.9581.9581,0,0,1,1,.95v.1a.9993.9993,0,0,1-.0781.3877l-3.7,8.8007a1.0027,1.0027,0,0,1-.7383.5958A1.0731,1.0731,0,0,1,40.9521,56.877Z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M50.8593,59.3765h-5.8a1,1,0,0,1,0-2h5.8a.9448.9448,0,0,1,1,1A1.0021,1.0021,0,0,1,50.8593,59.3765Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.1345,42.6223a1,1,0,0,1-.3261-1.9453,4.4658,4.4658,0,0,0,3.1045-2.8877c.5957-1.9932.1142-5.9087-5.5577-13.2491a1,1,0,0,1,.18-1.4028.8264.8264,0,0,1,1.2505.1717c4.9707,6.4316,7.104,11.5016,6.0435,15.0524a6.4352,6.4352,0,0,1-4.3682,4.2061A1.0033,1.0033,0,0,1,48.1345,42.6223Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.1808,23.065a.841.841,0,0,1-.0335.2407.6824.6824,0,0,1-.0779.2093c-.0223.0523-.3552-.2571-.3886-.1943-.0111.0105.4065-.08.3953-.07a52.6931,52.6931,0,0,0-3.5134,5.0364c-3.0615,4.7411-3.3064,7.5772-2.8278,9.1994A4.6947,4.6947,0,0,0,24.8966,40.48a1.0281,1.0281,0,0,1,.6346,1.3605,1.1225,1.1225,0,0,1-1.0354.6594,1.1425,1.1425,0,0,1-.4119-.0733,6.7591,6.7591,0,0,1-4.4864-4.3851c-1.091-3.7049,1.1244-8.9693,6.59-15.615a1.1316,1.1316,0,0,1,.8238-.4082h.0111a1.2774,1.2774,0,0,1,.4008.0523.8962.8962,0,0,1,.1782.0733.47.47,0,0,1,.1558.0942.9147.9147,0,0,1,.1781.1779.5569.5569,0,0,1,.1113.1674.5225.5225,0,0,1,.0891.1989A.833.833,0,0,1,28.1808,23.065Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.56,31.21a16.572,16.572,0,0,1-4.62,11.81,10.5423,10.5423,0,0,1-15.34.1,16.5692,16.5692,0,0,1-4.72-11.91c0-.26.01-.52.02-.78a15.1192,15.1192,0,0,1,.13-1.51,16.0793,16.0793,0,0,1,.52-2.61,16.2982,16.2982,0,0,1,1.06-2.86,1,1,0,0,1,.62-.52h.01a.1268.1268,0,0,1,.06-.01.8025.8025,0,0,1,.3.06.2843.2843,0,0,1,.12.04c.01.01.03.02.04.03a.42.42,0,0,1,.14.09.8519.8519,0,0,1,.16.17.5372.5372,0,0,1,.1.16.5167.5167,0,0,1,.08.19.8423.8423,0,0,1,.04.27.8524.8524,0,0,1-.03.23.6789.6789,0,0,1-.07.2c-.02.05-.05.1-.08.16l-.02.02c-.32.6-2.3129,1.0664-2.3091,2.1964.0017.5016.4862,1.0156-.0909,1.2336.5-.19,1.06-.41,1.67-.63a14.483,14.483,0,0,0-.39,2.28c-.05.53-.08,1.06-.08,1.59,0,5.23,2.41,9.76,5.89,11.89a8.368,8.368,0,0,0,8.99-.06c3.43-2.14,5.8-6.64,5.8-11.83a15.9119,15.9119,0,0,0-1.53-6.89,7.9907,7.9907,0,0,1-.3725-1.0342,1.0183,1.0183,0,0,1,.6163-.9069c.5-.24.8391-.7107,1.1162-.0582.3952.93,1.24,3.0093,1.51,4.0093A18.0156,18.0156,0,0,1,48.56,31.21Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.2233,29.8527a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.2233,29.8527a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.2232,39.8551a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.2232,39.8551Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.4834,23.6934a1.01,1.01,0,0,1-.3-.0464,29.9057,29.9057,0,0,0-17.794.0039,1,1,0,1,1-.5722-1.916,31.8625,31.8625,0,0,1,18.9658.0039,1,1,0,0,1-.3,1.9546Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M35.4936,10.7755c.02-.01.03-.03.04-.04a.9078.9078,0,0,1,.47-.31.2663.2663,0,0,1,.12-.03.4954.4954,0,0,1,.17-.02.4678.4678,0,0,1,.17.02.2663.2663,0,0,1,.12.03.8966.8966,0,0,1,.36.19.7518.7518,0,0,1,.15.16c1.65,1.86,5.85,2.25,7.85,2.26.19,0,.36-.01.5-.01a.9781.9781,0,0,1,.73.27.9916.9916,0,0,1,.31.72v8.47a1,1,0,0,1-2,0v-7.47c-.22,0-.48-.01-.76-.03-2.04-.12-5.36-.57-7.43-2.24a4.7017,4.7017,0,0,1-.76-.72A.9943.9943,0,0,1,35.4936,10.7755Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M26.1036,22.4855v-8.47a1.0224,1.0224,0,0,1,.3-.72,1.0616,1.0616,0,0,1,.74-.28c.14.01.31.01.49.01,2.01,0,6.22-.38,7.86-2.25.02-.01.03-.03.04-.04a.9078.9078,0,0,1,.47-.31.2663.2663,0,0,1,.12-.03.4954.4954,0,0,1,.17-.02.4678.4678,0,0,1,.17.02.2663.2663,0,0,1,.12.03.8966.8966,0,0,1,.36.19.7518.7518,0,0,1,.15.16.9943.9943,0,0,1-.04,1.25,4.7017,4.7017,0,0,1-.76.72c-2.07,1.67-5.39,2.12-7.43,2.24-.28.02-.54.03-.76.03v7.47a1,1,0,0,1-2,0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.7693,14.9273v1.4419h1.4419v1.0151H36.7693v1.4419H35.7542V17.3843H34.3123V16.3692h1.4419V14.9273h1.0151m0-1H35.7542a1,1,0,0,0-1,1v.4419h-.4419a1,1,0,0,0-1,1v1.0151a1,1,0,0,0,1,1h.4419v.4419a1,1,0,0,0,1,1h1.0151a1,1,0,0,0,1-1v-.4419h.4419a1,1,0,0,0,1-1V16.3692a1,1,0,0,0-1-1h-.4419v-.4419a1,1,0,0,0-1-1Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.2158,30.3091a.9989.9989,0,0,1-.9746-1.2222c.001-.0493.001-.1128.002-.189a11.5742,11.5742,0,0,1,1.9961-6.642,1.0021,1.0021,0,0,1,.5039-.3824c.2607-.0883,6.4521-2.1626,11.6093-1.51a1,1,0,0,1,.542,1.7378c-.3095.2763-7.6367,6.7856-13.4453,8.18A.9741.9741,0,0,1,25.2158,30.3091Zm0-1h0Zm2.4893-5.6431a9.4243,9.4243,0,0,0-1.419,4.2735,37.8381,37.8381,0,0,0,9.3028-5.691A32.7557,32.7557,0,0,0,27.7051,23.666Z"
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      d: "M54.8545,60.9756a.9889.9889,0,0,1-.1524-.0108,1,1,0,0,1-.8378-1.1386c.0087-.0576.8271-5.7412-2.1289-9.1778-1.4825-1.7226-3.711-2.62-6.627-2.67l-.0156.0069c-3.29,2.22-5.9795,3.5908-9.1407,3.5908-.0107,0-.122,0-.1328-.001-3.1338-.1035-5.9423-1.5059-9.1591-3.5947a13.8012,13.8012,0,0,0-3.8125.6972c-2.9668.9043-4.335,4.7686-4.3477,4.8077a15.343,15.343,0,0,0-.56,6.3408,1,1,0,0,1-1.9765.3027,17.1466,17.1466,0,0,1,.6435-7.292c.0713-.2041,1.7276-4.875,5.6572-6.0723a15.4926,15.4926,0,0,1,4.6875-.788.9965.9965,0,0,1,.5489.164c3.13,2.0537,5.624,3.3448,8.3847,3.4365,2.7549-.0009,5.1739-1.2744,8.2061-3.3291a1.05,1.05,0,0,1,.123-.0712,1.1069,1.1069,0,0,1,.6377-.2c3.6563,0,6.4844,1.1357,8.4073,3.3769,3.5537,4.1426,2.622,10.5059,2.581,10.7754A.9991.9991,0,0,1,54.8545,60.9756ZM44.6523,46.0762h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.6523,56.877a1.0029,1.0029,0,0,1-.9238-.6163l-3.7-8.9a1,1,0,1,1,1.8477-.7676L30.99,54.084l4.041-4.2012A1,1,0,0,1,36.4727,51.27l-5.1,5.3008A.9979.9979,0,0,1,30.6523,56.877Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M38.3525,54.1768a.9969.9969,0,0,1-.707-.293l-2.6006-2.6006a1,1,0,1,1,1.4141-1.4141L39.06,52.47a1,1,0,0,1-.7071,1.7071Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40.9521,56.877a.9982.9982,0,0,1-.7207-.3067l-2.6-2.7a1,1,0,0,1,1.4414-1.3867l1.5459,1.6055,3.087-7.3418a1.0228,1.0228,0,0,1,.9462-.7207.9581.9581,0,0,1,1,.95v.1a.9993.9993,0,0,1-.0781.3877l-3.7,8.8007a1.0027,1.0027,0,0,1-.7383.5958A1.0731,1.0731,0,0,1,40.9521,56.877Z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M50.8593,59.3765h-5.8a1,1,0,0,1,0-2h5.8a.9448.9448,0,0,1,1,1A1.0021,1.0021,0,0,1,50.8593,59.3765Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.1345,42.6223a1,1,0,0,1-.3261-1.9453,4.4658,4.4658,0,0,0,3.1045-2.8877c.5957-1.9932.1142-5.9087-5.5577-13.2491a1,1,0,0,1,.18-1.4028.8264.8264,0,0,1,1.2505.1717c4.9707,6.4316,7.104,11.5016,6.0435,15.0524a6.4352,6.4352,0,0,1-4.3682,4.2061A1.0033,1.0033,0,0,1,48.1345,42.6223Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28.1808,23.065a.841.841,0,0,1-.0335.2407.6824.6824,0,0,1-.0779.2093c-.0223.0523-.3552-.2571-.3886-.1943-.0111.0105.4065-.08.3953-.07a52.6931,52.6931,0,0,0-3.5134,5.0364c-3.0615,4.7411-3.3064,7.5772-2.8278,9.1994A4.6947,4.6947,0,0,0,24.8966,40.48a1.0281,1.0281,0,0,1,.6346,1.3605,1.1225,1.1225,0,0,1-1.0354.6594,1.1425,1.1425,0,0,1-.4119-.0733,6.7591,6.7591,0,0,1-4.4864-4.3851c-1.091-3.7049,1.1244-8.9693,6.59-15.615a1.1316,1.1316,0,0,1,.8238-.4082h.0111a1.2774,1.2774,0,0,1,.4008.0523.8962.8962,0,0,1,.1782.0733.47.47,0,0,1,.1558.0942.9147.9147,0,0,1,.1781.1779.5569.5569,0,0,1,.1113.1674.5225.5225,0,0,1,.0891.1989A.833.833,0,0,1,28.1808,23.065Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M48.56,31.21a16.572,16.572,0,0,1-4.62,11.81,10.5423,10.5423,0,0,1-15.34.1,16.5692,16.5692,0,0,1-4.72-11.91c0-.26.01-.52.02-.78a15.1192,15.1192,0,0,1,.13-1.51,16.0793,16.0793,0,0,1,.52-2.61,16.2982,16.2982,0,0,1,1.06-2.86,1,1,0,0,1,.62-.52h.01a.1268.1268,0,0,1,.06-.01.8025.8025,0,0,1,.3.06.2843.2843,0,0,1,.12.04c.01.01.03.02.04.03a.42.42,0,0,1,.14.09.8519.8519,0,0,1,.16.17.5372.5372,0,0,1,.1.16.5167.5167,0,0,1,.08.19.8423.8423,0,0,1,.04.27.8524.8524,0,0,1-.03.23.6789.6789,0,0,1-.07.2c-.02.05-.05.1-.08.16l-.02.02c-.32.6-2.3129,1.0664-2.3091,2.1964.0017.5016.4862,1.0156-.0909,1.2336.5-.19,1.06-.41,1.67-.63a14.483,14.483,0,0,0-.39,2.28c-.05.53-.08,1.06-.08,1.59,0,5.23,2.41,9.76,5.89,11.89a8.368,8.368,0,0,0,8.99-.06c3.43-2.14,5.8-6.64,5.8-11.83a15.9119,15.9119,0,0,0-1.53-6.89,7.9907,7.9907,0,0,1-.3725-1.0342,1.0183,1.0183,0,0,1,.6163-.9069c.5-.24.8391-.7107,1.1162-.0582.3952.93,1.24,3.0093,1.51,4.0093A18.0156,18.0156,0,0,1,48.56,31.21Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.2233,29.8527a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.2233,29.8527a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.2232,39.8551a7.6528,7.6528,0,0,1-3.4473-.8579,1,1,0,0,1,.8946-1.7891,5.3772,5.3772,0,0,0,5.1054,0,1,1,0,0,1,.8946,1.7891A7.6528,7.6528,0,0,1,36.2232,39.8551Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M45.4834,23.6934a1.01,1.01,0,0,1-.3-.0464,29.9057,29.9057,0,0,0-17.794.0039,1,1,0,1,1-.5722-1.916,31.8625,31.8625,0,0,1,18.9658.0039,1,1,0,0,1-.3,1.9546Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M35.4936,10.7755c.02-.01.03-.03.04-.04a.9078.9078,0,0,1,.47-.31.2663.2663,0,0,1,.12-.03.4954.4954,0,0,1,.17-.02.4678.4678,0,0,1,.17.02.2663.2663,0,0,1,.12.03.8966.8966,0,0,1,.36.19.7518.7518,0,0,1,.15.16c1.65,1.86,5.85,2.25,7.85,2.26.19,0,.36-.01.5-.01a.9781.9781,0,0,1,.73.27.9916.9916,0,0,1,.31.72v8.47a1,1,0,0,1-2,0v-7.47c-.22,0-.48-.01-.76-.03-2.04-.12-5.36-.57-7.43-2.24a4.7017,4.7017,0,0,1-.76-.72A.9943.9943,0,0,1,35.4936,10.7755Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M26.1036,22.4855v-8.47a1.0224,1.0224,0,0,1,.3-.72,1.0616,1.0616,0,0,1,.74-.28c.14.01.31.01.49.01,2.01,0,6.22-.38,7.86-2.25.02-.01.03-.03.04-.04a.9078.9078,0,0,1,.47-.31.2663.2663,0,0,1,.12-.03.4954.4954,0,0,1,.17-.02.4678.4678,0,0,1,.17.02.2663.2663,0,0,1,.12.03.8966.8966,0,0,1,.36.19.7518.7518,0,0,1,.15.16.9943.9943,0,0,1-.04,1.25,4.7017,4.7017,0,0,1-.76.72c-2.07,1.67-5.39,2.12-7.43,2.24-.28.02-.54.03-.76.03v7.47a1,1,0,0,1-2,0Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.7693,14.9273v1.4419h1.4419v1.0151H36.7693v1.4419H35.7542V17.3843H34.3123V16.3692h1.4419V14.9273h1.0151m0-1H35.7542a1,1,0,0,0-1,1v.4419h-.4419a1,1,0,0,0-1,1v1.0151a1,1,0,0,0,1,1h.4419v.4419a1,1,0,0,0,1,1h1.0151a1,1,0,0,0,1-1v-.4419h.4419a1,1,0,0,0,1-1V16.3692a1,1,0,0,0-1-1h-.4419v-.4419a1,1,0,0,0-1-1Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M25.2158,30.3091a.9989.9989,0,0,1-.9746-1.2222c.001-.0493.001-.1128.002-.189a11.5742,11.5742,0,0,1,1.9961-6.642,1.0021,1.0021,0,0,1,.5039-.3824c.2607-.0883,6.4521-2.1626,11.6093-1.51a1,1,0,0,1,.542,1.7378c-.3095.2763-7.6367,6.7856-13.4453,8.18A.9741.9741,0,0,1,25.2158,30.3091Zm0-1h0Zm2.4893-5.6431a9.4243,9.4243,0,0,0-1.419,4.2735,37.8381,37.8381,0,0,0,9.3028-5.691A32.7557,32.7557,0,0,0,27.7051,23.666Z"
    })));
  }
};

export default FemaleNurse;