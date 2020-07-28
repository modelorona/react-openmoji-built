import React from 'react';

const WomanSupervillain = ({
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
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      d: "M18.0392,47.4084c1.1226,1.0189,2.3391,1.9294,3.6331,2.7193c1.5566-1.1839,3.4138-1.908,5.361-2.09 c6.209,5.0127,12.4951,5.0127,18.7,0c1.5145,0.1121,2.9697,0.6354,4.2087,1.5136c1.0534-0.6931,2.0475-1.4724,2.972-2.33 c1.1884-0.7148,3.125-8.2822,0.3916-13.0254c-0.4386-0.8534-0.8251-1.7326-1.1573-2.6328 c-1.4726-3.27-2.0234-4.4927-2.3486-10.5239c0.0273-3.6929-3.794-6.7842-7.4746-7.0928c-0.266-0.0182-0.5139-0.1418-0.6885-0.3433 c-0.0928-0.1-2.4082-2.6547-7.2432-2.6547c-6.2,0-11.4413,3.3818-12.743,8.226c-0.534,2.0122-0.7248,4.1001-0.5645,6.1758 c0.2039,2.019-0.0563,4.0578-0.7607,5.9609c-0.2481,0.7561-0.6269,1.4627-1.1192,2.0879 C15.4337,37.8186,18.2315,47.7014,18.0392,47.4084z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M25.1846,29.878v0.9912C25.1846,38.7924,29.9144,45,35.9532,45S46.722,38.7921,46.722,30.8693 c0-4.8198-1.8249-7.784-5.4224-11.5327c-2.9045,2.2482-5.9896,4.248-9.2235,5.9785C29.3603,26.8835,25.6575,29.0121,25.1846,29.878 z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M35.9935,45c-2.7523,0-5.2888-1.2704-7.2341-3.4094L13.3912,41.583 c1.694,2.6777,4.6436,8.9425,5.1442,10.7899h34.9291c0.4994-1.8426,3.4345-8.0783,5.1306-10.7675l-15.3727-0.0076 C41.2778,43.7329,38.7431,45,35.9935,45z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      d: "M36,32.706c-0.4906,0.9134-2.9358,2.556-5.8905,2.566c-2.4937,0.0084-5.3503-1.146-7.7007-4.8833 c-0.8499-1.3361-2.4223-5.0381-2.4223-8.0675c1.9916,6.7499,6.304,3.5056,10.6368,3.5306c1.848,0.0107,3.6998,0.6161,5.3767,2.8456 c1.6769-2.2294,3.5286-2.8349,5.3767-2.8456c4.3328-0.025,8.6452,3.2193,10.6368-3.5306c0,3.0294-1.5724,6.7314-2.4223,8.0675 c-2.3504,3.7372-5.207,4.8917-7.7007,4.8833C38.9358,35.262,36.4906,33.6194,36,32.706z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      d: "M17,61v-4c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M47.392,61c-0.2717-1.0124-0.6203-3.1588-1.0429-4.118c-1.0368-2.3375-2.4915-4.4662-4.2926-6.2814H29.9435 c-1.8011,1.8152-3.2558,3.9439-4.2926,6.2814c-0.4226,0.9592-0.7712,3.1056-1.0429,4.118"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.7803,40.7757 c0.2364-2.0235-0.0649-4.0736-0.8736-5.9435c-2.4043-5.67-3.042-5.6425-3.4287-12.8222c-0.0322-4.1856-3.2362-7.6631-7.4052-8.0371 c0,0-2.6-3-8-3c-6.4317,0-12.23,3.4658-13.709,8.9658c-1.5,5.583,0.3447,7.834-1.291,12.0342 c-1.2173,3.1275-3.0181,6.0642-2.928,9.4371"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.1846,33.6654 C26.1526,40.2963,30.6811,45,35.9935,45c5.3363,0,9.8817-4.7461,10.8219-11.4242"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.2879,26.1914 c-0.9234-2.519-2.6619-4.665-5.2154-7.2185c-2.117,2.117-7.282,4.8159-10.9157,6.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39,38.9729 c-1.875-1-4.125-1-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.9729c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2S42,28.8683,42,29.9729"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.9729c0,1.1046-0.8954,2-2,2c-1.1046,0-2-0.8954-2-2s0.8954-2,2-2C33.1046,27.9729,34,28.8683,34,29.9729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.773,41.6054 L13.3913,41.583c1.694,2.6777,4.6436,8.9425,5.1442,10.7899"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5496,53.6671 c1.0817-1.4077,2.4649-2.5554,4.048-3.3589c1.0422-0.5249,2.1568-0.8916,3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.2085,49.7066 c-3.4125,1.1596-5.9768,4.0098-6.7705,7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9435,50.6006 c-1.8011,1.8152-3.2558,3.9439-4.2926,6.2814c-0.4226,0.9592-0.7712,2.1056-1.0429,3.118"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,32.706 c-0.4906,0.9134-2.9358,2.556-5.8905,2.566c-2.4937,0.0084-5.3503-1.146-7.7007-4.8833c-0.8499-1.3361-2.4223-5.0381-2.4223-8.0675 c1.9916,6.7499,6.304,3.5056,10.6368,3.5306c1.848,0.0107,3.6998,0.6161,5.3767,2.8456c1.6769-2.2294,3.5286-2.8349,5.3767-2.8456 c4.3328-0.025,8.6452,3.2193,10.6368-3.5306c0,3.0294-1.5724,6.7314-2.4223,8.0675c-2.3504,3.7372-5.207,4.8917-7.7007,4.8833 C38.9358,35.262,36.4906,33.6194,36,32.706z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.4646,52.3729 c0.5006-1.8474,3.4502-8.1122,5.1442-10.7899L43.227,41.6054"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.0953,49.2202 c1.1503,0.1964,2.2649,0.5631,3.3071,1.088c1.5831,0.8035,2.9663,1.9512,4.048,3.3589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.562,57.2321 c-0.7937-3.5157-3.358-6.3659-6.7705-7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.392,60 c-0.2717-1.0124-0.6203-2.1588-1.0429-3.118c-1.0368-2.3375-2.4915-4.4662-4.2926-6.2814"
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
      strokeWidth: "2",
      d: "M54.7803,40.7757 c0.2364-2.0235-0.0649-4.0736-0.8736-5.9435c-2.4043-5.67-3.042-5.6425-3.4287-12.8222c-0.0322-4.1856-3.2362-7.6631-7.4052-8.0371 c0,0-2.6-3-8-3c-6.4317,0-12.23,3.4658-13.709,8.9658c-1.5,5.583,0.3447,7.834-1.291,12.0342 c-1.2173,3.1275-3.0181,6.0642-2.928,9.4371"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.1846,33.6654 C26.1526,40.2963,30.6811,45,35.9935,45c5.3363,0,9.8817-4.7461,10.8219-11.4242"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.2879,26.1914 c-0.9234-2.519-2.6619-4.665-5.2154-7.2185c-2.117,2.117-7.282,4.8159-10.9157,6.9"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39,38.9729 c-1.875-1-4.125-1-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42,29.9729c0,1.1046-0.8954,2-2,2s-2-0.8954-2-2s0.8954-2,2-2S42,28.8683,42,29.9729"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34,29.9729c0,1.1046-0.8954,2-2,2c-1.1046,0-2-0.8954-2-2s0.8954-2,2-2C33.1046,27.9729,34,28.8683,34,29.9729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.773,41.6054 L13.3913,41.583c1.694,2.6777,4.6436,8.9425,5.1442,10.7899"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5496,53.6671 c1.0817-1.4077,2.4649-2.5554,4.048-3.3589c1.0422-0.5249,2.1568-0.8916,3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.2085,49.7066 c-3.4125,1.1596-5.9768,4.0098-6.7705,7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9435,50.6006 c-1.8011,1.8152-3.2558,3.9439-4.2926,6.2814c-0.4226,0.9592-0.7712,2.1056-1.0429,3.118"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,32.706 c-0.4906,0.9134-2.9358,2.556-5.8905,2.566c-2.4937,0.0084-5.3503-1.146-7.7007-4.8833c-0.8499-1.3361-2.4223-5.0381-2.4223-8.0675 c1.9916,6.7499,6.304,3.5056,10.6368,3.5306c1.848,0.0107,3.6998,0.6161,5.3767,2.8456c1.6769-2.2294,3.5286-2.8349,5.3767-2.8456 c4.3328-0.025,8.6452,3.2193,10.6368-3.5306c0,3.0294-1.5724,6.7314-2.4223,8.0675c-2.3504,3.7372-5.207,4.8917-7.7007,4.8833 C38.9358,35.262,36.4906,33.6194,36,32.706z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17,60v-3 c0-4.9941,5.0078-9,10-9c6,5,12,5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.4646,52.3729 c0.5006-1.8474,3.4502-8.1122,5.1442-10.7899L43.227,41.6054"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.0953,49.2202 c1.1503,0.1964,2.2649,0.5631,3.3071,1.088c1.5831,0.8035,2.9663,1.9512,4.048,3.3589"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.562,57.2321 c-0.7937-3.5157-3.358-6.3659-6.7705-7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.392,60 c-0.2717-1.0124-0.6203-2.1588-1.0429-3.118c-1.0368-2.3375-2.4915-4.4662-4.2926-6.2814"
    })));
  }
};

export default WomanSupervillain;