import React from 'react';

const ManPilot = ({
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
      fill: "#3F3F3F",
      d: "M50.1739,16.1588c0.6,1.14,0.42,2.53-0.4,3.52l-2.24,2.72l-0.09,0.06c-1.02-1.56-2.34-2.5-2.34-2.5 l-0.04-0.05c0.49-0.35,0.93-0.76,1.31-1.21h-21.07c0.33,0.33,0.7,0.64,1.1,0.93l-0.02,0.03c0,0-1.2,0.91-2.17,2.4l-0.24-0.15 l-1.85-2.23c-0.82-0.99-1-2.38-0.4-3.52c1.37-2.58,4.98-6.72,14.23-7.28C45.2039,9.4388,48.8139,13.5788,50.1739,16.1588z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.8539,22.2588c-2.82-0.33-5.51-1.23-7.45-2.63c-0.4-0.29-0.77-0.6-1.1-0.93h21.07 c-0.38,0.45-0.82,0.86-1.31,1.21c-1.08,0.82-2.38,1.43-3.82,1.83C38.9639,22.3888,36.3639,22.5488,33.8539,22.2588z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M33.0232,18.1161c0-1.6553,1.3448-3,3-3c1.6553,0,3,1.3447,3,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M16.6742,58.8838c0,0-0.9644-3.8571-0.1756-7.6612c0.7007-3.3792,4.6186-7.2388,10.2087-7.2388 c3.1918,2.1279,5.5264,4.5985,8.6,4.5922h-0.125c3.0736,0.0063,6.308-1.5642,9.4999-3.6922c11.5647-0.0346,10.009,13.9,10.24,14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M44.5757,49.8784c4.2663,2.3224,4.3828,6.254,4.9068,9.004c4.2378,0,5.1128,0,5.1128,0 s1.6601-4.6027,0.1076-8.7835c-1.1542-3.1082-4.4418-6.1174-9.6076-6.1165"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      points: "35.7209,50.2064 39.4956,58.8832 35.7209,58.8832 31.7463,58.8832"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M33.3503,48.7604c0,0-1.2063,5.0369,2.3073,5.0369s2.3073-5.0369,2.3073-5.0369"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M33.8539,22.2588c-7.05,1.08-9.38,7.7-9.38,7.7c-2.46-3.11-1.54-5.98-0.26-7.9c0.97-1.49,2.17-2.4,2.17-2.4 l0.02-0.03C28.3439,21.0288,31.0339,21.9288,33.8539,22.2588z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M47.4439,22.4588c1.18,1.83,1.94,4.51-0.43,7.5c0,0-2.69-7.96-5.77-8.22c1.44-0.4,2.74-1.01,3.82-1.83 l0.04,0.05C45.1039,19.9588,46.4239,20.8988,47.4439,22.4588z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M36.3226,22.4588c0,0,7.7547-2.8806,10.9168,6.2998c0,7.8277-5.0765,14.1733-11.3386,14.1733 s-11.3386-6.3456-11.3386-14.1733C30.7437,20.5482,36.3226,22.4588,36.3226,22.4588z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16.7351",
      y: "44.3824",
      width: "6.9637",
      height: "3.8501",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "47.6851",
      y: "44.3824",
      width: "6.9637",
      height: "3.8501",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M42.0234,26.8773c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S42.0234,25.7738,42.0234,26.8773"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0234,26.8773c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S34.0234,25.7738,34.0234,26.8773"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0232,36.8798c-1.1518,0-2.3037-0.2862-3.4472-0.858c-0.4942-0.247-0.6944-0.8476-0.4473-1.3418 c0.2466-0.4936,0.8462-0.6943,1.3418-0.4472c1.7178,0.8594,3.3877,0.8594,5.1055,0c0.4946-0.2471,1.0947-0.0464,1.3418,0.4472 c0.247,0.4942,0.0468,1.0948-0.4473,1.3418C38.3269,36.5936,37.1751,36.8798,36.0232,36.8798z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.6016,23.5176c-0.2237,0-0.4493-0.0752-0.6358-0.229c-0.4258-0.3521-0.4863-0.9824-0.1338-1.4082l2.2481-2.7198 c0.5771-0.6987,0.6885-1.6464,0.2832-2.414c-1.2051-2.2847-4.5391-6.1944-13.3399-6.7505 c-8.7998,0.5561-12.1357,4.4658-13.3408,6.7505c-0.4053,0.7671-0.2939,1.7148,0.2842,2.414l1.8457,2.2344 c0.3525,0.4253,0.292,1.0557-0.1338,1.4077c-0.4267,0.3521-1.0566,0.2925-1.4072-0.1342l-1.8457-2.2339 c-1.0947-1.3238-1.2949-3.1377-0.5127-4.6216c1.4053-2.6611,5.2275-7.2153,15.0488-7.8169c0.041-0.0029,0.082-0.0029,0.1231,0 c9.8232,0.6016,13.6445,5.1558,15.0478,7.8174c0.7832,1.4839,0.582,3.2978-0.5117,4.6216l-2.2481,2.7197 C48.1758,23.394,47.8896,23.5176,47.6016,23.5176z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3068,17.1369"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6831,17.1369"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4489,16.3228"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.9395,43.4111c-6.417,0-11.6993-5.916-12.2862-13.7607l1.9942-0.1484c0.5,6.6777,5.0205,11.9091,10.292,11.9091 c5.2578,0,9.6728-5.0136,10.2705-11.6631c0.0449-0.4892,0.0673-0.997,0.0673-1.5097h2c0,0.5732-0.0253,1.1416-0.0752,1.6904 C47.5107,37.6143,42.2393,43.4111,35.9395,43.4111z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.5498,31.0781c-0.3027,0-0.5928-0.1377-0.7842-0.3799c-1.4687-1.8569-2.0664-3.7729-1.7773-5.6948 c0.4814-3.2016,3.2871-5.167,3.4062-5.2495c0.458-0.3125,1.0782-0.1968,1.3907,0.2564c0.3134,0.4541,0.1992,1.0751-0.2539,1.3891 l0,0c-0.0215,0.0156-2.2227,1.5762-2.5674,3.9151c-0.1299,0.8847,0.0234,1.789,0.458,2.7026 c1.248-2.2017,4.0664-5.7915,9.4287-6.5454c0.5596-0.085,1.0527,0.3042,1.1299,0.8511c0.0771,0.5468-0.3037,1.0527-0.8506,1.1293 c-6.4873,0.9122-8.6133,6.8907-8.6348,6.9512c-0.1181,0.3457-0.417,0.5987-0.7773,0.6602 C24.6621,31.0732,24.6055,31.0781,24.5498,31.0781z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.0908,31.0781c-0.0566,0-0.1133-0.0049-0.1699-0.0146c-0.3613-0.0625-0.6592-0.3174-0.7773-0.6641 c-1.004-2.9599-3.2598-7.4038-4.9131-7.5415c-0.5508-0.0459-0.959-0.5293-0.9131-1.0796c0.0449-0.5498,0.5205-0.9668,1.0791-0.9136 c2.6748,0.2227,4.8086,4.3306,5.9082,6.9629c0.3682-0.8491,0.4932-1.6894,0.3721-2.5131 c-0.3448-2.3389-2.5459-3.8995-2.5674-3.9151c-0.4522-0.3154-0.5655-0.938-0.251-1.3906c0.3145-0.4536,0.9355-0.5659,1.3877-0.2549 c0.1191,0.0825,2.9248,2.0479,3.4062,5.2495c0.2891,1.9219-0.3085,3.8379-1.7773,5.6948 C47.6836,30.9404,47.3936,31.0781,47.0908,31.0781z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.0234,19.1162c-0.5527,0-1-0.4477-1-1c0-1.103-0.8974-2-2-2c-1.1025,0-2,0.897-2,2c0,0.5523-0.4472,1-1,1 c-0.5527,0-1-0.4477-1-1c0-2.2056,1.794-4,4-4c2.2061,0,4,1.7944,4,4C40.0234,18.6685,39.5762,19.1162,39.0234,19.1162z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.6572,54.7969c-1.4111,0-2.2158-0.6455-2.6426-1.1865c-1.3828-1.753-0.7167-4.7471-0.6367-5.0831 c0.1289-0.5351,0.6612-0.8671,1.2041-0.7382c0.5362,0.1269,0.8682,0.666,0.7412,1.2031c-0.1435,0.6094-0.4043,2.5391,0.2627,3.3818 c0.1436,0.1817,0.4112,0.4229,1.0713,0.4229c0.6612,0,0.9287-0.2422,1.0733-0.4248c0.6201-0.7871,0.4443-2.6162,0.2617-3.3789 c-0.1289-0.5371,0.2031-1.0762,0.7402-1.2051c0.5362-0.127,1.0762,0.2031,1.2051,0.7402c0.0801,0.335,0.7451,3.3291-0.6367,5.0821 C37.873,54.1514,37.0684,54.7969,35.6572,54.7969z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.7373,58.9355c-0.0508,0-0.1016-0.0029-0.1523-0.0107c-0.5459-0.083-0.9209-0.5937-0.8379-1.1387 c0.0049-0.0371,0.5361-3.6923-0.7725-6.9131c-0.208-0.5117,0.0391-1.0947,0.5508-1.3027c0.5078-0.206,1.0937,0.0381,1.3027,0.5508 c1.5205,3.7432,0.9219,7.7969,0.8955,7.9678C55.6475,58.583,55.2217,58.9355,54.7373,58.9355z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.082,54.7314c-0.0283,0-0.0576-0.0009-0.0869-0.0039c-0.3662-0.0322-0.6855-0.2627-0.831-0.5996l-3.7745-8.748 c-0.1279-0.2959-0.1054-0.6338,0.0596-0.9102c0.166-0.2763,0.4531-0.456,0.7735-0.4824l0.5527-0.0469 c0.2285-0.0224,0.4512,0.0391,0.6396,0.1641c3.1534,2.1025,5.6602,3.4111,8.3829,3.4238c2.7207-0.0127,5.2275-1.3213,8.3828-3.4238 c0.1845-0.1221,0.3994-0.1768,0.624-0.166l0.6777,0.0469c0.3281,0.0234,0.625,0.206,0.792,0.4902 c0.167,0.2832,0.1846,0.6318,0.0449,0.9297l-4.0752,8.748c-0.1562,0.336-0.4853,0.5576-0.8554,0.5772 c-0.3682,0.0234-0.7198-0.17-0.9092-0.4864l-2.9072-4.8691c-0.5469,0.0928-1.1006,0.1445-1.668,0.1523 c-0.0147,0.001-0.0293,0.004-0.0439,0.001h-0.003c-0.0117,0-0.0263-0.001-0.0381,0h-0.0429c-0.0127-0.001-0.0274,0-0.0381,0 h-0.0029c-0.0166,0.003-0.0293,0-0.044-0.001c-0.5293-0.0068-1.0478-0.0527-1.5596-0.1337l-3.2138,4.8877 C30.7314,54.5635,30.417,54.7314,30.082,54.7314z M28.2773,47.0234l1.9883,4.6094l1.8155-2.7607 C30.8389,48.4424,29.5947,47.8135,28.2773,47.0234z M39.5859,48.8467l1.6426,2.751l2.1475-4.6084 C42.0615,47.7803,40.8223,48.4111,39.5859,48.8467z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.8584,58.9355c-0.4844,0-0.9102-0.3525-0.9863-0.8466c-0.0264-0.169-0.6172-4.1651,0.8613-7.8858 c0.2051-0.5136,0.7861-0.7627,1.2988-0.5605c0.5137,0.2041,0.7637,0.7861,0.5606,1.2988c-1.2735,3.2031-0.749,6.8086-0.7442,6.8447 c0.083,0.545-0.292,1.0547-0.8379,1.1387C16.96,58.9326,16.9092,58.9355,16.8584,58.9355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.9321,56.3945"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0847,56.3945"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.3472,54.0899"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.8779,58.8936c-0.1767,0-0.3554-0.0469-0.5175-0.1456c-0.4727-0.2861-0.6231-0.9013-0.336-1.373l2.2393-3.6895 c0.2861-0.4736,0.9004-0.624,1.373-0.3359c0.4727,0.2861,0.6231,0.9014,0.336,1.3731l-2.2393,3.6894 C32.5459,58.7227,32.2158,58.8936,31.8779,58.8936z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.4375,58.8936c-0.3379,0-0.668-0.1709-0.8555-0.4815l-2.2392-3.6894c-0.2871-0.4717-0.1367-1.087,0.3359-1.3731 c0.4736-0.2871,1.0879-0.1367,1.3731,0.3359l2.2392,3.6895c0.2871,0.4717,0.1367,1.0869-0.3359,1.373 C39.793,58.8467,39.6143,58.8936,39.4375,58.8936z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.6992,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1c0.5528,0,1,0.4473,1,1v1.9522 C24.6992,47.8242,24.252,48.2715,23.6992,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.3037,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C21.3037,47.8242,20.8564,48.2715,20.3037,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.9072,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1c0.5528,0,1,0.4473,1,1v1.9522 C17.9072,47.8242,17.46,48.2715,16.9072,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.7715,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C48.7715,47.8242,48.3242,48.2715,47.7715,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M51.167,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C52.167,47.8242,51.7197,48.2715,51.167,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.5625,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C55.5625,47.8242,55.1152,48.2715,54.5625,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.3428,23.5176c-4.6983,0-9.208-1.5288-11.6699-3.9951c-0.2852-0.2862-0.3702-0.7163-0.2159-1.0899 c0.1553-0.373,0.5196-0.6167,0.9239-0.6167h21.0683c0.3897,0,0.7442,0.2266,0.9072,0.5801c0.1641,0.3535,0.1075,0.77-0.1455,1.0674 c-2.0312,2.3921-5.6777,3.8633-10.0048,4.0371C36.918,23.5122,36.6299,23.5176,36.3428,23.5176z M28.5176,19.8159 c2.333,1.1797,5.4336,1.8174,8.6084,1.6861c2.5635-0.1031,4.8261-0.6978,6.5381-1.6861H28.5176z"
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
      d: "M42.0234,26.8773c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S42.0234,25.7738,42.0234,26.8773"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.0234,26.8773c0,1.1045-0.8965,2-2,2s-2-0.8955-2-2c0-1.1035,0.8965-2,2-2S34.0234,25.7738,34.0234,26.8773"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.0232,36.8798c-1.1518,0-2.3037-0.2862-3.4472-0.858c-0.4942-0.247-0.6944-0.8476-0.4473-1.3418 c0.2466-0.4936,0.8462-0.6943,1.3418-0.4472c1.7178,0.8594,3.3877,0.8594,5.1055,0c0.4946-0.2471,1.0947-0.0464,1.3418,0.4472 c0.247,0.4942,0.0468,1.0948-0.4473,1.3418C38.3269,36.5936,37.1751,36.8798,36.0232,36.8798z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.6016,23.5176c-0.2237,0-0.4493-0.0752-0.6358-0.229c-0.4258-0.3521-0.4863-0.9824-0.1338-1.4082l2.2481-2.7198 c0.5771-0.6987,0.6885-1.6464,0.2832-2.414c-1.2051-2.2847-4.5391-6.1944-13.3399-6.7505 c-8.7998,0.5561-12.1357,4.4658-13.3408,6.7505c-0.4053,0.7671-0.2939,1.7148,0.2842,2.414l1.8457,2.2344 c0.3525,0.4253,0.292,1.0557-0.1338,1.4077c-0.4267,0.3521-1.0566,0.2925-1.4072-0.1342l-1.8457-2.2339 c-1.0947-1.3238-1.2949-3.1377-0.5127-4.6216c1.4053-2.6611,5.2275-7.2153,15.0488-7.8169c0.041-0.0029,0.082-0.0029,0.1231,0 c9.8232,0.6016,13.6445,5.1558,15.0478,7.8174c0.7832,1.4839,0.582,3.2978-0.5117,4.6216l-2.2481,2.7197 C48.1758,23.394,47.8896,23.5176,47.6016,23.5176z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3068,17.1369"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6831,17.1369"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.4489,16.3228"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.9395,43.4111c-6.417,0-11.6993-5.916-12.2862-13.7607l1.9942-0.1484c0.5,6.6777,5.0205,11.9091,10.292,11.9091 c5.2578,0,9.6728-5.0136,10.2705-11.6631c0.0449-0.4892,0.0673-0.997,0.0673-1.5097h2c0,0.5732-0.0253,1.1416-0.0752,1.6904 C47.5107,37.6143,42.2393,43.4111,35.9395,43.4111z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.5498,31.0781c-0.3027,0-0.5928-0.1377-0.7842-0.3799c-1.4687-1.8569-2.0664-3.7729-1.7773-5.6948 c0.4814-3.2016,3.2871-5.167,3.4062-5.2495c0.458-0.3125,1.0782-0.1968,1.3907,0.2564c0.3134,0.4541,0.1992,1.0751-0.2539,1.3891 l0,0c-0.0215,0.0156-2.2227,1.5762-2.5674,3.9151c-0.1299,0.8847,0.0234,1.789,0.458,2.7026 c1.248-2.2017,4.0664-5.7915,9.4287-6.5454c0.5596-0.085,1.0527,0.3042,1.1299,0.8511c0.0771,0.5468-0.3037,1.0527-0.8506,1.1293 c-6.4873,0.9122-8.6133,6.8907-8.6348,6.9512c-0.1181,0.3457-0.417,0.5987-0.7773,0.6602 C24.6621,31.0732,24.6055,31.0781,24.5498,31.0781z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.0908,31.0781c-0.0566,0-0.1133-0.0049-0.1699-0.0146c-0.3613-0.0625-0.6592-0.3174-0.7773-0.6641 c-1.004-2.9599-3.2598-7.4038-4.9131-7.5415c-0.5508-0.0459-0.959-0.5293-0.9131-1.0796c0.0449-0.5498,0.5205-0.9668,1.0791-0.9136 c2.6748,0.2227,4.8086,4.3306,5.9082,6.9629c0.3682-0.8491,0.4932-1.6894,0.3721-2.5131 c-0.3448-2.3389-2.5459-3.8995-2.5674-3.9151c-0.4522-0.3154-0.5655-0.938-0.251-1.3906c0.3145-0.4536,0.9355-0.5659,1.3877-0.2549 c0.1191,0.0825,2.9248,2.0479,3.4062,5.2495c0.2891,1.9219-0.3085,3.8379-1.7773,5.6948 C47.6836,30.9404,47.3936,31.0781,47.0908,31.0781z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.0234,19.1162c-0.5527,0-1-0.4477-1-1c0-1.103-0.8974-2-2-2c-1.1025,0-2,0.897-2,2c0,0.5523-0.4472,1-1,1 c-0.5527,0-1-0.4477-1-1c0-2.2056,1.794-4,4-4c2.2061,0,4,1.7944,4,4C40.0234,18.6685,39.5762,19.1162,39.0234,19.1162z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.6572,54.7969c-1.4111,0-2.2158-0.6455-2.6426-1.1865c-1.3828-1.753-0.7167-4.7471-0.6367-5.0831 c0.1289-0.5351,0.6612-0.8671,1.2041-0.7382c0.5362,0.1269,0.8682,0.666,0.7412,1.2031c-0.1435,0.6094-0.4043,2.5391,0.2627,3.3818 c0.1436,0.1817,0.4112,0.4229,1.0713,0.4229c0.6612,0,0.9287-0.2422,1.0733-0.4248c0.6201-0.7871,0.4443-2.6162,0.2617-3.3789 c-0.1289-0.5371,0.2031-1.0762,0.7402-1.2051c0.5362-0.127,1.0762,0.2031,1.2051,0.7402c0.0801,0.335,0.7451,3.3291-0.6367,5.0821 C37.873,54.1514,37.0684,54.7969,35.6572,54.7969z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.7373,58.9355c-0.0508,0-0.1016-0.0029-0.1523-0.0107c-0.5459-0.083-0.9209-0.5937-0.8379-1.1387 c0.0049-0.0371,0.5361-3.6923-0.7725-6.9131c-0.208-0.5117,0.0391-1.0947,0.5508-1.3027c0.5078-0.206,1.0937,0.0381,1.3027,0.5508 c1.5205,3.7432,0.9219,7.7969,0.8955,7.9678C55.6475,58.583,55.2217,58.9355,54.7373,58.9355z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M30.082,54.7314c-0.0283,0-0.0576-0.0009-0.0869-0.0039c-0.3662-0.0322-0.6855-0.2627-0.831-0.5996l-3.7745-8.748 c-0.1279-0.2959-0.1054-0.6338,0.0596-0.9102c0.166-0.2763,0.4531-0.456,0.7735-0.4824l0.5527-0.0469 c0.2285-0.0224,0.4512,0.0391,0.6396,0.1641c3.1534,2.1025,5.6602,3.4111,8.3829,3.4238c2.7207-0.0127,5.2275-1.3213,8.3828-3.4238 c0.1845-0.1221,0.3994-0.1768,0.624-0.166l0.6777,0.0469c0.3281,0.0234,0.625,0.206,0.792,0.4902 c0.167,0.2832,0.1846,0.6318,0.0449,0.9297l-4.0752,8.748c-0.1562,0.336-0.4853,0.5576-0.8554,0.5772 c-0.3682,0.0234-0.7198-0.17-0.9092-0.4864l-2.9072-4.8691c-0.5469,0.0928-1.1006,0.1445-1.668,0.1523 c-0.0147,0.001-0.0293,0.004-0.0439,0.001h-0.003c-0.0117,0-0.0263-0.001-0.0381,0h-0.0429c-0.0127-0.001-0.0274,0-0.0381,0 h-0.0029c-0.0166,0.003-0.0293,0-0.044-0.001c-0.5293-0.0068-1.0478-0.0527-1.5596-0.1337l-3.2138,4.8877 C30.7314,54.5635,30.417,54.7314,30.082,54.7314z M28.2773,47.0234l1.9883,4.6094l1.8155-2.7607 C30.8389,48.4424,29.5947,47.8135,28.2773,47.0234z M39.5859,48.8467l1.6426,2.751l2.1475-4.6084 C42.0615,47.7803,40.8223,48.4111,39.5859,48.8467z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.8584,58.9355c-0.4844,0-0.9102-0.3525-0.9863-0.8466c-0.0264-0.169-0.6172-4.1651,0.8613-7.8858 c0.2051-0.5136,0.7861-0.7627,1.2988-0.5605c0.5137,0.2041,0.7637,0.7861,0.5606,1.2988c-1.2735,3.2031-0.749,6.8086-0.7442,6.8447 c0.083,0.545-0.292,1.0547-0.8379,1.1387C16.96,58.9326,16.9092,58.9355,16.8584,58.9355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.9321,56.3945"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0847,56.3945"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.3472,54.0899"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M31.8779,58.8936c-0.1767,0-0.3554-0.0469-0.5175-0.1456c-0.4727-0.2861-0.6231-0.9013-0.336-1.373l2.2393-3.6895 c0.2861-0.4736,0.9004-0.624,1.373-0.3359c0.4727,0.2861,0.6231,0.9014,0.336,1.3731l-2.2393,3.6894 C32.5459,58.7227,32.2158,58.8936,31.8779,58.8936z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M39.4375,58.8936c-0.3379,0-0.668-0.1709-0.8555-0.4815l-2.2392-3.6894c-0.2871-0.4717-0.1367-1.087,0.3359-1.3731 c0.4736-0.2871,1.0879-0.1367,1.3731,0.3359l2.2392,3.6895c0.2871,0.4717,0.1367,1.0869-0.3359,1.373 C39.793,58.8467,39.6143,58.8936,39.4375,58.8936z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23.6992,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1c0.5528,0,1,0.4473,1,1v1.9522 C24.6992,47.8242,24.252,48.2715,23.6992,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20.3037,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C21.3037,47.8242,20.8564,48.2715,20.3037,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.9072,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1c0.5528,0,1,0.4473,1,1v1.9522 C17.9072,47.8242,17.46,48.2715,16.9072,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M47.7715,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C48.7715,47.8242,48.3242,48.2715,47.7715,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M51.167,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C52.167,47.8242,51.7197,48.2715,51.167,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M54.5625,48.2715c-0.5527,0-1-0.4473-1-1v-1.9522c0-0.5527,0.4473-1,1-1s1,0.4473,1,1v1.9522 C55.5625,47.8242,55.1152,48.2715,54.5625,48.2715z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36.3428,23.5176c-4.6983,0-9.208-1.5288-11.6699-3.9951c-0.2852-0.2862-0.3702-0.7163-0.2159-1.0899 c0.1553-0.373,0.5196-0.6167,0.9239-0.6167h21.0683c0.3897,0,0.7442,0.2266,0.9072,0.5801c0.1641,0.3535,0.1075,0.77-0.1455,1.0674 c-2.0312,2.3921-5.6777,3.8633-10.0048,4.0371C36.918,23.5122,36.6299,23.5176,36.3428,23.5176z M28.5176,19.8159 c2.333,1.1797,5.4336,1.8174,8.6084,1.6861c2.5635-0.1031,4.8261-0.6978,6.5381-1.6861H28.5176z"
    })));
  }
};

export default ManPilot;