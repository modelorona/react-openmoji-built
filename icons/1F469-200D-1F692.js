import React from 'react';

const WomanFirefighter = ({
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
      fill: "#D22F27",
      d: "M51.6005,21.7394c-1.2424-1.0276-3.1754-1.2845-5.0366-1.1561c-1.9375,0.1336-3.8314,0.7473-5.5122,1.7729 c-1.6872,1.0294-3.5154,1.5016-5.2726,1.5234c-1.7569-0.0218-3.585-0.494-5.2722-1.5234 c-1.6809-1.0256-3.5747-1.6393-5.5122-1.7729c-1.8615-0.1284-3.7943,0.1285-5.0366,1.1561c0,0-4.4856,3.444,0.6199,7.412 c10.1343,4.2267,20.2683,4.2268,30.4025,0.0001C56.0861,25.1834,51.6005,21.7394,51.6005,21.7394z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M35.5608,7.6561c0.0691,0,0.1399,0.0053,0.2092,0.0061c0.0694-0.0008,0.1402-0.0061,0.2093-0.0061H35.5608z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M35.77,7.6622c-5.4277,0.0619-11.719,1.9772-11.8034,11.9473l-0.2803,0.8991 c0.5991-0.0556,1.2175-0.0607,1.8293-0.0208c1.8726,0.1225,3.7029,0.6844,5.3274,1.6236c1.6307,0.9428,3.3975,1.3753,5.0955,1.3952 c1.6982-0.0199,3.4651-0.4524,5.0957-1.3952c1.6245-0.9392,3.4548-1.5011,5.3274-1.6236c0.5063-0.0331,1.0171-0.0341,1.5183-0.0034 l-0.3064-0.8749C47.489,9.6394,41.1978,7.7241,35.77,7.6622z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M16.725,58.8812c0,0-2-13.5,10-13.5c3.1919,2.1279,5.9264,3.5984,9,3.5922H35.6 c3.0736,0.0062,5.7081-2.5643,8.9-4.6922c10.0682-0.5859,11.8023,7.479,11.4489,10.8872c-0.1964,1.8934-1.1178,3.683-1.049,3.7128"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      points: "39.7007,52.7035 35.8107,58.5735 31.9807,52.7035"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M63.6613,38.5923l1.43,1.72c-2.29,1.78-6.58,7.24-6.58,7.24l-3.03-3.65 C55.4813,43.9023,61.4113,40.6523,63.6613,38.5923z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "53.7631",
      y: "44.5209",
      width: "3.6501",
      height: "4.7436",
      transform: "matrix(0.7694 -0.6387 0.6387 0.7694 -17.1349 46.3176)",
      fill: "#9B9B9A"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M52.6713,46.2323l3.03,3.65c0,0-6.98,5.92-6.65,9.01h-5.21 C42.8713,52.7623,52.6713,46.2323,52.6713,46.2323z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M31.4701,17.7429v-4.6823l4.1171-5.2226l4.4789,5.3009v4.604 C37.5311,19.6095,33.6896,18.9241,31.4701,17.7429z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M26.7588,19.7649c-1.7821,2.2194-2.0358,4.2075-1.935,5.4848l-0.1722,0.4657 c2.1471-0.3334,5.5091-1.9969,7.624-3.5629"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M40.8741,21.4531c2.6002,2.2005,5.8288,4.4575,7.1545,3.4331c0.2163-2.3798-1.2982-4.7597-1.2982-4.7597"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M24.9788,25.8113c0,0-10.6339,2.5266-7.9128,15.7288c0,0,5.3626,0.1413,7.5363-2.4284 c0,0,2.4867-2.2423,3.5184-8.1865s-3.2501-5.1369-3.2501-5.1369"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M35.7154,23.4165c4.0167-2.5616,11.8176,0.9081,11.184,4.9181c0,7.8276-5.0765,14.1732-11.3386,14.1732 s-11.3386-6.3456-11.3386-14.1732C23.8183,26.3178,30.8377,20.3501,35.7154,23.4165z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M44.6607,45.0435l0.06,0.09l-5.02,7.57h-7.72l-5.06-7.75c3.15,2.1,5.86,3.56,8.88,3.59 c0.01,0,0.02,0,0.03,0h0.09C38.9007,48.5135,41.5707,47.0935,44.6607,45.0435z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M41.884,26.8797c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S41.884,25.7762,41.884,26.8797"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.884,26.8797c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S33.884,25.7762,33.884,26.8797"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8839,36.8821c-1.1519,0-2.3037-0.2861-3.4473-0.8579c-0.4941-0.247-0.6943-0.8476-0.4472-1.3418 c0.2465-0.4936,0.8461-0.6943,1.3417-0.4472c1.7178,0.8594,3.3877,0.8594,5.1055,0c0.4946-0.2471,1.0947-0.0464,1.3418,0.4472 c0.2471,0.4942,0.0469,1.0948-0.4473,1.3418C38.1876,36.596,37.0357,36.8821,35.8839,36.8821z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8838,43.4141c-6.8037,0-12.3389-6.8067-12.3389-15.1734c0-0.9248,0.0684-1.854,0.2031-2.7607l1.9786,0.2939 c-0.1202,0.8101-0.1817,1.6402-0.1817,2.4668c0,7.2642,4.6377,13.1734,10.3389,13.1734s10.3389-5.9092,10.3389-13.1734 c0-1.0727-0.1016-2.1391-0.3028-3.1699l1.9629-0.3828c0.2256,1.1567,0.3399,2.352,0.3399,3.5527 C48.2227,36.6074,42.6875,43.4141,35.8838,43.4141z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.1377,19.9072c-1.8506,0-3.708-0.5205-5.1377-1.2817c-0.3262-0.1738-0.5303-0.5132-0.5303-0.8828v-4.6822 c0-0.2246,0.0752-0.4428,0.2149-0.6191l4.1172-5.2226c0.1855-0.2359,0.4677-0.3755,0.7685-0.3809c0.0049,0,0.0108,0,0.0166,0 c0.294,0,0.5733,0.1294,0.7637,0.3545l4.4795,5.3008c0.1523,0.1806,0.2363,0.4091,0.2363,0.6455v4.604 c0,0.3178-0.1514,0.6167-0.4072,0.8052C39.3457,19.5151,37.7441,19.9072,36.1377,19.9072z M32.4697,17.1167 c1.9942,0.8755,4.7315,1.1475,6.5967,0.085v-3.6973l-3.4521-4.0855l-3.1446,3.9883V17.1167z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.2383,19.9072c-1.8506,0-3.707-0.5205-5.1367-1.2817c-0.3262-0.1738-0.5303-0.5132-0.5303-0.8828v-4.6822 c0-0.2246,0.0752-0.4428,0.2148-0.6191l4.1172-5.2226c0.1856-0.2359,0.4678-0.3755,0.7686-0.3809c0.0049,0,0.0107,0,0.0166,0 c0.2939,0,0.5732,0.1294,0.7636,0.3545l4.4786,5.3008c0.1523,0.1806,0.2363,0.4091,0.2363,0.6455v4.604 c0,0.3178-0.1514,0.6167-0.4072,0.8052C39.4463,19.5151,37.8447,19.9072,36.2383,19.9072z M32.5713,17.1167 c1.9902,0.8755,4.7285,1.1484,6.5957,0.085v-3.6973l-3.4522-4.0855l-3.1435,3.9883 C32.5713,13.4072,32.5713,17.1167,32.5713,17.1167z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.5186,20.6094c-0.5489,0-0.9952-0.4424-1-0.9917C46.457,12.312,42.9229,8.7251,35.7158,8.6572 c-7.208,0.0679-10.7422,3.6548-10.8037,10.9605c-0.0049,0.5493-0.4512,0.9917-1,0.9917c-0.0029,0-0.0058,0-0.0088,0 c-0.5517-0.0049-0.9961-0.4561-0.9912-1.0083c0.0693-8.2896,4.3838-12.7539,12.4834-12.939 c0.0361-0.0039,0.0733-0.0058,0.1104-0.0058h0.4189c0.0371,0,0.0742,0.0019,0.1104,0.0058 c8.0996,0.1851,12.414,4.6494,12.4834,12.939c0.0048,0.5522-0.4395,1.0034-0.9913,1.0083 C47.5244,20.6094,47.5215,20.6094,47.5186,20.6094z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.0146,27.1597c-1.538,0.0005-3.4628-1.6187-5.4746-3.3111c-0.3984-0.334-0.7929-0.6665-1.1767-0.9785 c-0.4287-0.3486-0.4932-0.978-0.1455-1.4067c0.3486-0.4282,0.9785-0.4932,1.4072-0.145c0.3926,0.3188,0.7959,0.6582,1.2021,1 c1.0313,0.8676,2.8096,2.3628,3.75,2.7485c-0.1289-1.5469-0.8476-3.4194-1.1181-3.9082c-0.2686-0.4829-0.0938-1.0918,0.3887-1.3599 c0.4814-0.2671,1.0918-0.0937,1.3593,0.3892c0.419,0.7534,1.5664,3.6611,1.3662,5.8721c-0.0253,0.2768-0.165,0.5307-0.3847,0.7011 C47.8311,27.0376,47.4375,27.1597,47.0146,27.1597z M47.5771,25.9697h0.0098H47.5771z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.5762,29.335c-0.3076,0-0.6104-0.1416-0.8067-0.4078c-0.3271-0.4443-0.2324-1.0703,0.2129-1.3979 c1.2989-0.9565,1.9561-1.9111,1.9531-2.8379c-0.0039-1.3208-1.3359-2.3267-1.3486-2.3364 c-0.8808-0.689-2.3701-0.9912-4.2148-0.8692c-1.7051,0.1114-3.3965,0.6275-4.8926,1.4913 c-1.6904,0.9775-3.6211,1.5063-5.584,1.5297c-1.9863-0.0234-3.917-0.5522-5.6084-1.5297 c-1.4941-0.8643-3.1855-1.3799-4.8916-1.4913c-1.8467-0.1211-3.333,0.1797-4.1846,0.8477 c-0.0976,0.0728-1.8007,1.3613-1.2763,2.999c0.1689,0.5259-0.1211,1.0889-0.6465,1.2573c-0.5283,0.169-1.0899-0.1215-1.2578-0.6469 c-0.9688-3.021,1.8545-5.1172,1.9756-5.2051c1.5586-1.2241,3.8691-1.355,5.5205-1.2481c2.0107,0.1319,4.0029,0.7388,5.7627,1.7559 c1.3935,0.8062,2.9873,1.2422,4.6064,1.2612c1.5957-0.019,3.1895-0.455,4.583-1.2612c1.7608-1.0171,3.7529-1.624,5.7627-1.7559 c1.6543-0.1093,3.9609,0.024,5.5498,1.2696c0.0606,0.0429,2.1377,1.581,2.1445,3.9267c0.004,1.5996-0.9267,3.0982-2.7675,4.4536 C50.9893,29.2715,50.7822,29.335,50.5762,29.335z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.8037,26.6372c-0.5058,0-0.9394-0.3818-0.9932-0.8955c-0.0585-0.5488,0.3399-1.041,0.8897-1.0991 c1.5332-0.1612,3.6572-1.1988,6.1416-2.9995c0.4482-0.3238,1.0732-0.2242,1.3965,0.2226c0.3242,0.4473,0.2246,1.0723-0.2227,1.3965 c-2.8066,2.0352-5.1982,3.1685-7.1064,3.3696C24.874,26.6353,24.8389,26.6372,24.8037,26.6372z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.6357,41.9199c-0.4736,0-0.8837-0.332-0.9794-0.7978c-2.0792-10.0879,4.2392-13.8555,6.7285-14.9258 c-0.2539-1.2749-0.3145-3.5967,1.5048-6.2515c0.3135-0.4551,0.9346-0.5727,1.3907-0.2593 c0.4551,0.3121,0.5713,0.9346,0.2597,1.3902c-2.0302,2.9604-1.0693,5.2236-1.0273,5.3188 c0.1182,0.2671,0.1152,0.5782-0.0107,0.8413c-0.127,0.2637-0.3604,0.4634-0.6426,0.5386 c-0.3321,0.0908-7.9619,2.2949-6.4043,12.0713c1.4043-0.1807,3.6338-0.7129,4.7002-1.9736 c0.3574-0.4209,0.9863-0.4727,1.4101-0.1172c0.4209,0.3574,0.4737,0.9883,0.1172,1.4101 c-2.1767,2.5713-6.8183,2.7481-7.0146,2.7539C17.6572,41.9199,17.6465,41.9199,17.6357,41.9199z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.9209,58.8711c-0.4844,0-0.9102-0.3525-0.9863-0.8467c-0.041-0.2695-0.9727-6.6328,2.581-10.7754 c1.9229-2.2412,4.751-3.3769,8.4073-3.3769c0.1972,0,0.3906,0.0586,0.5546,0.1679c3.1534,2.1016,5.6602,3.4092,8.3829,3.4239 c2.7236-0.0137,5.2304-1.3213,8.3828-3.4239c0.164-0.1093,0.3574-0.1679,0.5547-0.1679c1.2753,0,2.4638,0.1406,3.5332,0.4179 c0.5341,0.1387,0.8554,0.6836,0.7168,1.2188c-0.1387,0.5342-0.6846,0.8584-1.2188,0.7168 c-0.8242-0.2129-1.7422-0.3311-2.7344-0.3506c-3.3086,2.1846-6.0254,3.5449-9.1259,3.5879c-0.0215,0.001-0.043,0.001-0.0645,0.001 c-0.0078,0-0.0137,0-0.0205,0h-0.0459c-0.0156-0.001-0.0274-0.001-0.042,0c-0.0146,0-0.0293,0-0.0439-0.001 c-3.0987-0.043-5.8165-1.4033-9.126-3.5879c-2.8965,0.0566-5.1104,0.9541-6.586,2.6689c-2.956,3.4366-2.1377,9.1202-2.1289,9.1778 c0.083,0.5449-0.292,1.0547-0.8379,1.1387C17.0225,58.8682,16.9717,58.8711,16.9209,58.8711z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.5,45.0698v6.6c-1.57,1.72-2.79,3.76-2.56,5.84c-0.15,0.04-0.3,0.04-0.45,0c-0.45-0.11-0.77-0.51-0.77-0.97v-8.3 l-7.08,10.21c-0.19,0.27-0.5,0.43-0.83,0.43s-0.64-0.16-0.82-0.44l-7.07-10.33v9.81c0,0.55-0.44,1-1,1h-1.78c-0.55,0-1-0.45-1-1 v-12.87c0-0.55,0.45-1,1-1c0.36,0,0.67,0.18,0.85,0.46c0.11-0.28,0.34-0.5,0.64-0.59c0.41-0.13,0.87,0.03,1.12,0.39l8.07,11.81 l8.08-11.64c0.25-0.36,0.7-0.52,1.12-0.39c0.26,0.09,0.48,0.27,0.59,0.51c0.17-0.3101,0.5-0.53,0.89-0.53 C47.05,44.0698,47.5,44.5198,47.5,45.0698z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.7021,53.2217h-7.7187c-0.5527,0-1-0.4473-1-1c0-0.5528,0.4473-1,1-1h7.7187c0.5528,0,1,0.4472,1,1 C40.7021,52.7744,40.2549,53.2217,39.7021,53.2217z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M55.8301,50.8848c-0.2881,0-0.5733-0.1231-0.7705-0.3623l-3.0283-3.6543c-0.17-0.2041-0.251-0.4668-0.2266-0.7315 c0.0254-0.2637,0.1543-0.5068,0.3584-0.6758l1.5996-1.3261l-6.0029-2.8369c-0.4991-0.2364-0.7119-0.8321-0.4766-1.3321 c0.2363-0.498,0.8291-0.7138,1.332-0.4765l6.958,3.289c1.4024-0.7881,5.7569-3.2871,7.5479-4.9219 c0.2021-0.1845,0.4707-0.2744,0.7432-0.2597c0.2724,0.0195,0.5263,0.1494,0.7002,0.3603l1.4218,1.7159 c0.1729,0.208,0.2539,0.4775,0.2246,0.746c-0.0293,0.2686-0.166,0.5147-0.3798,0.6807c-2.1045,1.6387-6.1407,6.7383-6.3936,7.0596 c-0.0381,0.0498-0.082,0.0976-0.1309,0.1416l0,0l-0.0009,0.001c-0.0108,0.0097-0.0215,0.0185-0.0332,0.0283l-2.8057,2.3242 C56.2803,50.8096,56.0547,50.8848,55.8301,50.8848z M54.209,46.3623l1.7519,2.1143l1.2696-1.0518l-1.752-2.1143L54.209,46.3623z M57.1455,44.1875l1.4805,1.7861c1.1758-1.4482,3.4511-4.1728,5.1943-5.7812l-0.1543-0.1865 C61.751,41.502,58.7354,43.2803,57.1455,44.1875z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.29,47.0998c-0.06,0.03-3.34,1.91-5.79,4.5699c-1.57,1.72-2.79,3.76-2.56,5.84c0,0.07,0.01,0.15,0.02,0.22 c0.09,0.55-0.28,1.06-0.83,1.15c-0.05,0.01-0.1,0.01-0.16,0.01c-0.48,0-0.9-0.35-0.98-0.84c-0.24-1.52,0.08-3,0.73-4.36 c0.86-1.83,2.3101-3.47,3.78-4.81c2.28-2.08,4.61-3.41,4.81-3.52c0.48-0.27,1.09-0.1,1.36,0.38 C53.94,46.2198,53.77,46.8298,53.29,47.0998z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M49.1816,58.9189c-0.5048,0-0.9384-0.3808-0.9931-0.8935c-0.374-3.4951,5.8174-8.0742,7.0625-8.9561 c0.4511-0.3203,1.0752-0.2148,1.3935,0.2373c0.3194,0.4502,0.2139,1.0743-0.2373,1.3936c-2.6982,1.915-6.415,5.3867-6.2304,7.1123 c0.0586,0.5498-0.3389,1.042-0.8877,1.1006C49.2529,58.917,49.2168,58.9189,49.1816,58.9189z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5997,47.5003"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.8984,58.8711c-0.0507,0-0.1015-0.0029-0.1523-0.0107c-0.5459-0.084-0.9209-0.5938-0.8379-1.1387 c0-0.0049,0.0723-0.4854,0.1006-1.2393l0.0088-0.2998c0.0068-0.2988,0.0049-0.626-0.0078-0.9775l0.0117-0.6953 c0.0107-0.5528,0.4707-0.9571,1.0195-0.9805c0.5528,0.0107,0.9912,0.4678,0.9805,1.0195l-0.0127,0.6387 c0.0137,0.3379,0.0156,0.7041,0.0088,1.0342l-0.0108,0.3359c-0.0332,0.8789-0.1181,1.4434-0.122,1.4668 C55.8086,58.5186,55.3828,58.8711,54.8984,58.8711z"
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
      d: "M41.884,26.8797c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S41.884,25.7762,41.884,26.8797"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.884,26.8797c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S33.884,25.7762,33.884,26.8797"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8839,36.8821c-1.1519,0-2.3037-0.2861-3.4473-0.8579c-0.4941-0.247-0.6943-0.8476-0.4472-1.3418 c0.2465-0.4936,0.8461-0.6943,1.3417-0.4472c1.7178,0.8594,3.3877,0.8594,5.1055,0c0.4946-0.2471,1.0947-0.0464,1.3418,0.4472 c0.2471,0.4942,0.0469,1.0948-0.4473,1.3418C38.1876,36.596,37.0357,36.8821,35.8839,36.8821z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.8838,43.4141c-6.8037,0-12.3389-6.8067-12.3389-15.1734c0-0.9248,0.0684-1.854,0.2031-2.7607l1.9786,0.2939 c-0.1202,0.8101-0.1817,1.6402-0.1817,2.4668c0,7.2642,4.6377,13.1734,10.3389,13.1734s10.3389-5.9092,10.3389-13.1734 c0-1.0727-0.1016-2.1391-0.3028-3.1699l1.9629-0.3828c0.2256,1.1567,0.3399,2.352,0.3399,3.5527 C48.2227,36.6074,42.6875,43.4141,35.8838,43.4141z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.1377,19.9072c-1.8506,0-3.708-0.5205-5.1377-1.2817c-0.3262-0.1738-0.5303-0.5132-0.5303-0.8828v-4.6822 c0-0.2246,0.0752-0.4428,0.2149-0.6191l4.1172-5.2226c0.1855-0.2359,0.4677-0.3755,0.7685-0.3809c0.0049,0,0.0108,0,0.0166,0 c0.294,0,0.5733,0.1294,0.7637,0.3545l4.4795,5.3008c0.1523,0.1806,0.2363,0.4091,0.2363,0.6455v4.604 c0,0.3178-0.1514,0.6167-0.4072,0.8052C39.3457,19.5151,37.7441,19.9072,36.1377,19.9072z M32.4697,17.1167 c1.9942,0.8755,4.7315,1.1475,6.5967,0.085v-3.6973l-3.4521-4.0855l-3.1446,3.9883V17.1167z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.2383,19.9072c-1.8506,0-3.707-0.5205-5.1367-1.2817c-0.3262-0.1738-0.5303-0.5132-0.5303-0.8828v-4.6822 c0-0.2246,0.0752-0.4428,0.2148-0.6191l4.1172-5.2226c0.1856-0.2359,0.4678-0.3755,0.7686-0.3809c0.0049,0,0.0107,0,0.0166,0 c0.2939,0,0.5732,0.1294,0.7636,0.3545l4.4786,5.3008c0.1523,0.1806,0.2363,0.4091,0.2363,0.6455v4.604 c0,0.3178-0.1514,0.6167-0.4072,0.8052C39.4463,19.5151,37.8447,19.9072,36.2383,19.9072z M32.5713,17.1167 c1.9902,0.8755,4.7285,1.1484,6.5957,0.085v-3.6973l-3.4522-4.0855l-3.1435,3.9883 C32.5713,13.4072,32.5713,17.1167,32.5713,17.1167z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.5186,20.6094c-0.5489,0-0.9952-0.4424-1-0.9917C46.457,12.312,42.9229,8.7251,35.7158,8.6572 c-7.208,0.0679-10.7422,3.6548-10.8037,10.9605c-0.0049,0.5493-0.4512,0.9917-1,0.9917c-0.0029,0-0.0058,0-0.0088,0 c-0.5517-0.0049-0.9961-0.4561-0.9912-1.0083c0.0693-8.2896,4.3838-12.7539,12.4834-12.939 c0.0361-0.0039,0.0733-0.0058,0.1104-0.0058h0.4189c0.0371,0,0.0742,0.0019,0.1104,0.0058 c8.0996,0.1851,12.414,4.6494,12.4834,12.939c0.0048,0.5522-0.4395,1.0034-0.9913,1.0083 C47.5244,20.6094,47.5215,20.6094,47.5186,20.6094z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.0146,27.1597c-1.538,0.0005-3.4628-1.6187-5.4746-3.3111c-0.3984-0.334-0.7929-0.6665-1.1767-0.9785 c-0.4287-0.3486-0.4932-0.978-0.1455-1.4067c0.3486-0.4282,0.9785-0.4932,1.4072-0.145c0.3926,0.3188,0.7959,0.6582,1.2021,1 c1.0313,0.8676,2.8096,2.3628,3.75,2.7485c-0.1289-1.5469-0.8476-3.4194-1.1181-3.9082c-0.2686-0.4829-0.0938-1.0918,0.3887-1.3599 c0.4814-0.2671,1.0918-0.0937,1.3593,0.3892c0.419,0.7534,1.5664,3.6611,1.3662,5.8721c-0.0253,0.2768-0.165,0.5307-0.3847,0.7011 C47.8311,27.0376,47.4375,27.1597,47.0146,27.1597z M47.5771,25.9697h0.0098H47.5771z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.5762,29.335c-0.3076,0-0.6104-0.1416-0.8067-0.4078c-0.3271-0.4443-0.2324-1.0703,0.2129-1.3979 c1.2989-0.9565,1.9561-1.9111,1.9531-2.8379c-0.0039-1.3208-1.3359-2.3267-1.3486-2.3364 c-0.8808-0.689-2.3701-0.9912-4.2148-0.8692c-1.7051,0.1114-3.3965,0.6275-4.8926,1.4913 c-1.6904,0.9775-3.6211,1.5063-5.584,1.5297c-1.9863-0.0234-3.917-0.5522-5.6084-1.5297 c-1.4941-0.8643-3.1855-1.3799-4.8916-1.4913c-1.8467-0.1211-3.333,0.1797-4.1846,0.8477 c-0.0976,0.0728-1.8007,1.3613-1.2763,2.999c0.1689,0.5259-0.1211,1.0889-0.6465,1.2573c-0.5283,0.169-1.0899-0.1215-1.2578-0.6469 c-0.9688-3.021,1.8545-5.1172,1.9756-5.2051c1.5586-1.2241,3.8691-1.355,5.5205-1.2481c2.0107,0.1319,4.0029,0.7388,5.7627,1.7559 c1.3935,0.8062,2.9873,1.2422,4.6064,1.2612c1.5957-0.019,3.1895-0.455,4.583-1.2612c1.7608-1.0171,3.7529-1.624,5.7627-1.7559 c1.6543-0.1093,3.9609,0.024,5.5498,1.2696c0.0606,0.0429,2.1377,1.581,2.1445,3.9267c0.004,1.5996-0.9267,3.0982-2.7675,4.4536 C50.9893,29.2715,50.7822,29.335,50.5762,29.335z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.8037,26.6372c-0.5058,0-0.9394-0.3818-0.9932-0.8955c-0.0585-0.5488,0.3399-1.041,0.8897-1.0991 c1.5332-0.1612,3.6572-1.1988,6.1416-2.9995c0.4482-0.3238,1.0732-0.2242,1.3965,0.2226c0.3242,0.4473,0.2246,1.0723-0.2227,1.3965 c-2.8066,2.0352-5.1982,3.1685-7.1064,3.3696C24.874,26.6353,24.8389,26.6372,24.8037,26.6372z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17.6357,41.9199c-0.4736,0-0.8837-0.332-0.9794-0.7978c-2.0792-10.0879,4.2392-13.8555,6.7285-14.9258 c-0.2539-1.2749-0.3145-3.5967,1.5048-6.2515c0.3135-0.4551,0.9346-0.5727,1.3907-0.2593 c0.4551,0.3121,0.5713,0.9346,0.2597,1.3902c-2.0302,2.9604-1.0693,5.2236-1.0273,5.3188 c0.1182,0.2671,0.1152,0.5782-0.0107,0.8413c-0.127,0.2637-0.3604,0.4634-0.6426,0.5386 c-0.3321,0.0908-7.9619,2.2949-6.4043,12.0713c1.4043-0.1807,3.6338-0.7129,4.7002-1.9736 c0.3574-0.4209,0.9863-0.4727,1.4101-0.1172c0.4209,0.3574,0.4737,0.9883,0.1172,1.4101 c-2.1767,2.5713-6.8183,2.7481-7.0146,2.7539C17.6572,41.9199,17.6465,41.9199,17.6357,41.9199z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.9209,58.8711c-0.4844,0-0.9102-0.3525-0.9863-0.8467c-0.041-0.2695-0.9727-6.6328,2.581-10.7754 c1.9229-2.2412,4.751-3.3769,8.4073-3.3769c0.1972,0,0.3906,0.0586,0.5546,0.1679c3.1534,2.1016,5.6602,3.4092,8.3829,3.4239 c2.7236-0.0137,5.2304-1.3213,8.3828-3.4239c0.164-0.1093,0.3574-0.1679,0.5547-0.1679c1.2753,0,2.4638,0.1406,3.5332,0.4179 c0.5341,0.1387,0.8554,0.6836,0.7168,1.2188c-0.1387,0.5342-0.6846,0.8584-1.2188,0.7168 c-0.8242-0.2129-1.7422-0.3311-2.7344-0.3506c-3.3086,2.1846-6.0254,3.5449-9.1259,3.5879c-0.0215,0.001-0.043,0.001-0.0645,0.001 c-0.0078,0-0.0137,0-0.0205,0h-0.0459c-0.0156-0.001-0.0274-0.001-0.042,0c-0.0146,0-0.0293,0-0.0439-0.001 c-3.0987-0.043-5.8165-1.4033-9.126-3.5879c-2.8965,0.0566-5.1104,0.9541-6.586,2.6689c-2.956,3.4366-2.1377,9.1202-2.1289,9.1778 c0.083,0.5449-0.292,1.0547-0.8379,1.1387C17.0225,58.8682,16.9717,58.8711,16.9209,58.8711z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.5,45.0698v6.6c-1.57,1.72-2.79,3.76-2.56,5.84c-0.15,0.04-0.3,0.04-0.45,0c-0.45-0.11-0.77-0.51-0.77-0.97v-8.3 l-7.08,10.21c-0.19,0.27-0.5,0.43-0.83,0.43s-0.64-0.16-0.82-0.44l-7.07-10.33v9.81c0,0.55-0.44,1-1,1h-1.78c-0.55,0-1-0.45-1-1 v-12.87c0-0.55,0.45-1,1-1c0.36,0,0.67,0.18,0.85,0.46c0.11-0.28,0.34-0.5,0.64-0.59c0.41-0.13,0.87,0.03,1.12,0.39l8.07,11.81 l8.08-11.64c0.25-0.36,0.7-0.52,1.12-0.39c0.26,0.09,0.48,0.27,0.59,0.51c0.17-0.3101,0.5-0.53,0.89-0.53 C47.05,44.0698,47.5,44.5198,47.5,45.0698z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.7021,53.2217h-7.7187c-0.5527,0-1-0.4473-1-1c0-0.5528,0.4473-1,1-1h7.7187c0.5528,0,1,0.4472,1,1 C40.7021,52.7744,40.2549,53.2217,39.7021,53.2217z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M55.8301,50.8848c-0.2881,0-0.5733-0.1231-0.7705-0.3623l-3.0283-3.6543c-0.17-0.2041-0.251-0.4668-0.2266-0.7315 c0.0254-0.2637,0.1543-0.5068,0.3584-0.6758l1.5996-1.3261l-6.0029-2.8369c-0.4991-0.2364-0.7119-0.8321-0.4766-1.3321 c0.2363-0.498,0.8291-0.7138,1.332-0.4765l6.958,3.289c1.4024-0.7881,5.7569-3.2871,7.5479-4.9219 c0.2021-0.1845,0.4707-0.2744,0.7432-0.2597c0.2724,0.0195,0.5263,0.1494,0.7002,0.3603l1.4218,1.7159 c0.1729,0.208,0.2539,0.4775,0.2246,0.746c-0.0293,0.2686-0.166,0.5147-0.3798,0.6807c-2.1045,1.6387-6.1407,6.7383-6.3936,7.0596 c-0.0381,0.0498-0.082,0.0976-0.1309,0.1416l0,0l-0.0009,0.001c-0.0108,0.0097-0.0215,0.0185-0.0332,0.0283l-2.8057,2.3242 C56.2803,50.8096,56.0547,50.8848,55.8301,50.8848z M54.209,46.3623l1.7519,2.1143l1.2696-1.0518l-1.752-2.1143L54.209,46.3623z M57.1455,44.1875l1.4805,1.7861c1.1758-1.4482,3.4511-4.1728,5.1943-5.7812l-0.1543-0.1865 C61.751,41.502,58.7354,43.2803,57.1455,44.1875z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M53.29,47.0998c-0.06,0.03-3.34,1.91-5.79,4.5699c-1.57,1.72-2.79,3.76-2.56,5.84c0,0.07,0.01,0.15,0.02,0.22 c0.09,0.55-0.28,1.06-0.83,1.15c-0.05,0.01-0.1,0.01-0.16,0.01c-0.48,0-0.9-0.35-0.98-0.84c-0.24-1.52,0.08-3,0.73-4.36 c0.86-1.83,2.3101-3.47,3.78-4.81c2.28-2.08,4.61-3.41,4.81-3.52c0.48-0.27,1.09-0.1,1.36,0.38 C53.94,46.2198,53.77,46.8298,53.29,47.0998z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M49.1816,58.9189c-0.5048,0-0.9384-0.3808-0.9931-0.8935c-0.374-3.4951,5.8174-8.0742,7.0625-8.9561 c0.4511-0.3203,1.0752-0.2148,1.3935,0.2373c0.3194,0.4502,0.2139,1.0743-0.2373,1.3936c-2.6982,1.915-6.415,5.3867-6.2304,7.1123 c0.0586,0.5498-0.3389,1.042-0.8877,1.1006C49.2529,58.917,49.2168,58.9189,49.1816,58.9189z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.5997,47.5003"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.8984,58.8711c-0.0507,0-0.1015-0.0029-0.1523-0.0107c-0.5459-0.084-0.9209-0.5938-0.8379-1.1387 c0-0.0049,0.0723-0.4854,0.1006-1.2393l0.0088-0.2998c0.0068-0.2988,0.0049-0.626-0.0078-0.9775l0.0117-0.6953 c0.0107-0.5528,0.4707-0.9571,1.0195-0.9805c0.5528,0.0107,0.9912,0.4678,0.9805,1.0195l-0.0127,0.6387 c0.0137,0.3379,0.0156,0.7041,0.0088,1.0342l-0.0108,0.3359c-0.0332,0.8789-0.1181,1.4434-0.122,1.4668 C55.8086,58.5186,55.3828,58.8711,54.8984,58.8711z"
    })));
  }
};

export default WomanFirefighter;