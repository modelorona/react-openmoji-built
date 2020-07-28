import React from 'react';

const Lion = ({
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
      fill: "#A57939",
      stroke: "none",
      d: "M18.921,25.5021c-0.75,0.25-8.5,9.3333-9.25,15.0833s-0.3333,8.0833-0.3333,8.0833 s2.8333,8.75,11.1667,13.0833c0,0,13.0833,13.1667,30.0833,0.25c0,0,8.3333-2.8333,12-14.5833l-0.3333-9.6667l-2.4167-6.1667 c0,0-4.5-4.3333-4.6667-4.75c-0.1667-0.4167-5.4167-4-5.4167-4l-1.9167-0.5833L23.921,22.6688L18.921,25.5021z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      stroke: "none",
      d: "M60.0877,21.2105l0.25-5.75l-1.125-3.875l-5.625-0.75l-5.25,2.5l-3.125,2.625l-3.25-5.375l-5.875-2.75 l-10.125,2l-1.125,0.25c0,0-2.375,1.75-2.25,2.5c0,0-6.75-3-9.625-0.375c0,0-3.75,6.875,0.375,11.375l4,3.5 c0,0-9.5,8.625,1.25,19.5c0,0-2.6198,5.6214,1.1127,11.9173l3.2206,6.666c6,5.3333,19.4167,5.0833,25.4167-0.25l2.3253-4.8129 c0.9155-1.0835,4.6646-5.941,3.6747-11.7704c0,0,8.5-8.125,1.625-20.75l-1.625-1.5l3-1.625L60.0877,21.2105z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M22.3377,12.398c0,0,1-1.9375,3.875-3s5.8125-1.6875,5.8125-1.6875s6.4375,0.9375,6.9375,1 s6,6.3125,6,6.3125l0.4375,2.4375c0,0-1.8125,1.875-6.5625-0.5625s-5.8125-2.375-6-2.25c-0.1875,0.125-5.625,2.3125-5.625,2.3125 l-2.0625-1.6875L22.3377,12.398z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M47.671,42.3355c0.0834-0.2084,1.5-8.6667,1.5-8.6667h-0.1666c0,0-2.6667,4.7917-5.625,5.6667l-0.5,1.5416 l0.0937,1.5181c-0.6256-0.0616-1.2596-0.024-1.6979,0.2527c-1.1875,0.75-2.375,0.5-2.375,0.5l-1.8125,1.6875l-0.5625,0.875 l-1.6875-0.5625c0,0-0.6875-2-0.875-2.0625c-0.1875-0.0625-2.0625-0.75-2.0625-0.75l-1.1875,0.4375 c0,0-0.9572-0.3216-1.9857-0.1018l0.1107-1.7941l-0.5-1.5416c-2.9583-0.875-5.625-5.6667-5.625-5.6667H22.546 c0,0,1.4167,8.4583,1.5,8.6667c0.0643,0.1606,1.7091,1.8027,2.4614,2.5486c-0.7147,2.222,0.2053,4.6389,0.2053,4.6389l2.25,2.8125 l5.25-0.75l1.9375-1.5625l1.8125,0.9375l3.9375,1.5l2.5-1.3125c0,0,1.6875-4.5,1.75-4.6875 c0.0327-0.098-0.2592-1.0667-0.5452-1.9694C46.4254,43.6732,47.6166,42.4716,47.671,42.3355z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M27.046,18.0855c0,0,0.4583,2.875-2.2917,5.7083c0,0-4.3333,0.9167-4.5417,1.0417 c-0.2083,0.125-2.3333,1.3333-2.6667,1.5c-0.3333,0.1667-1.7083-0.2917-2.0417-0.5417s-3.4583-5.5-3.4583-5.5l0.1667-3.625 l1.0417-4.375l4.6667-0.5833l4,1.0417l3.8333,3.0417L27.046,18.0855z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M45.033,17.2521c0,0-0.4583,2.875,2.2917,5.7083c0,0,4.3333,0.9167,4.5417,1.0417 c0.2083,0.125,2.3333,1.3333,2.6667,1.5s1.7083-0.2917,2.0417-0.5417c0.3333-0.25,3.4583-5.5,3.4583-5.5l-0.1667-3.625 l-1.0417-4.375l-4.6667-0.5833l-4,1.0417l-3.8333,3.0417L45.033,17.2521z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M27.671,51.3355l2,4.5l2.5833,1.5833l5.75,0.4167l4.4167-1.5833l2.4167-5.25l-2.9375,1.4583l-4.3958-1.4583 l-1.5-1.3333l-3.0833,1.6667c0,0,0,1.3333-1.75,0.9167C29.421,51.8355,27.671,51.3355,27.671,51.3355z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.7782",
      cy: "31.5656",
      rx: "2",
      ry: "2",
      transform: "matrix(0.5156 -0.8568 0.8568 0.5156 -13.1061 39.9485)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4629",
      cy: "31.5656",
      rx: "2",
      ry: "2",
      transform: "matrix(0.8568 -0.5156 0.5156 0.8568 -10.0526 26.9285)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.3928,43.0656c0,0-1.8705-1.3333-2.9394,2.0833l-1.4252,1.0833l-1.4252-1.0833c-1.0689-3.4167-2.9394-2.0833-2.9394-2.0833"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.9467,39.9822l2.1482,3.519c0.1941,0.3179,0.3227,0.6662,0.3793,1.0272l0.326,2.0779c0.0856,0.5453,0.0042,1.1018-0.235,1.6067 l-1.1399,2.407c-0.4169,0.8804-1.2717,1.5195-2.2925,1.7141l0,0c-0.6475,0.1234-1.3206,0.0597-1.9273-0.1826l-1.3016-0.5197 c-0.3174-0.1267-0.6105-0.2999-0.868-0.5128l-1.3748-1.1369h-1.2661l-1.3748,1.1369c-0.2575,0.2129-0.5505,0.3861-0.868,0.5128 l-1.3016,0.5197c-0.6067,0.2423-1.2798,0.306-1.9273,0.1826h0c-1.0208-0.1946-1.8756-0.8337-2.2925-1.7141l-1.1399-2.407 c-0.2391-0.505-0.3205-1.0614-0.235-1.6067l0.326-2.0779c0.0566-0.361,0.1853-0.7093,0.3793-1.0272l2.1482-3.519"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0282",
      x2: "36.0282",
      y1: "46.2322",
      y2: "48.9822",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.5366,55.5239l0.7708,0.7941c0.8297,0.8549,1.9545,1.3607,3.1446,1.4142l3.0167,0.1356 c1.1576,0.052,2.2933-0.3278,3.1868-1.0657l0.8644-0.714"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.7391,26.8288c-9.9983-4.0396-4.7942-14.1799-4.7942-14.1799c7.5833-4.5833,13.833,4.75,13.833,4.75 s4.8857-4.6468,12.3055-1.3781"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.0282,23.1489c0,0-17.3333,6.0833-13.75,25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.456,45.1873c-2.6014,3.7405-3.5847,9.9899,4.4889,19.4616"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.0282,27.7322c0,0-5.6115,8.4105,2.1526,17.7886"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.3605,10.9187c0,0,12.7053-9.5,19.8616,5.3333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.2221,16.4903c0,0,6.2497-9.3333,13.833-4.75c0,0,5.2041,10.1403-4.7942,14.1799"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9718,22.2403c0,0,17.3333,6.0833,13.75,25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.6231,46.2342c1.6075,3.8321,1.2349,9.5252-5.5679,17.5062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9718,26.8237c0,0,5.6115,8.4105-2.1526,17.7886"
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.7782",
      cy: "31.5656",
      rx: "2",
      ry: "2",
      transform: "matrix(0.5156 -0.8568 0.8568 0.5156 -13.1061 39.9485)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.4629",
      cy: "31.5656",
      rx: "2",
      ry: "2",
      transform: "matrix(0.8568 -0.5156 0.5156 0.8568 -10.0526 26.9285)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.3928,43.0656c0,0-1.8705-1.3333-2.9394,2.0833l-1.4252,1.0833l-1.4252-1.0833c-1.0689-3.4167-2.9394-2.0833-2.9394-2.0833"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.9467,39.9822l2.1482,3.519c0.1941,0.3179,0.3227,0.6662,0.3793,1.0272l0.326,2.0779c0.0856,0.5453,0.0042,1.1018-0.235,1.6067 l-1.1399,2.407c-0.4169,0.8804-1.2717,1.5195-2.2925,1.7141l0,0c-0.6475,0.1234-1.3206,0.0597-1.9273-0.1826l-1.3016-0.5197 c-0.3174-0.1267-0.6105-0.2999-0.868-0.5128l-1.3748-1.1369h-1.2661l-1.3748,1.1369c-0.2575,0.2129-0.5505,0.3861-0.868,0.5128 l-1.3016,0.5197c-0.6067,0.2423-1.2798,0.306-1.9273,0.1826h0c-1.0208-0.1946-1.8756-0.8337-2.2925-1.7141l-1.1399-2.407 c-0.2391-0.505-0.3205-1.0614-0.235-1.6067l0.326-2.0779c0.0566-0.361,0.1853-0.7093,0.3793-1.0272l2.1482-3.519"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.0282",
      x2: "36.0282",
      y1: "46.2322",
      y2: "48.9822",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.5366,55.5239l0.7708,0.7941c0.8297,0.8549,1.9545,1.3607,3.1446,1.4142l3.0167,0.1356 c1.1576,0.052,2.2933-0.3278,3.1868-1.0657l0.8644-0.714"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.7391,26.8288c-9.9983-4.0396-4.7942-14.1799-4.7942-14.1799c7.5833-4.5833,13.833,4.75,13.833,4.75 s4.8857-4.6468,12.3055-1.3781"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.0282,23.1489c0,0-17.3333,6.0833-13.75,25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.456,45.1873c-2.6014,3.7405-3.5847,9.9899,4.4889,19.4616"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.0282,27.7322c0,0-5.6115,8.4105,2.1526,17.7886"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.3605,10.9187c0,0,12.7053-9.5,19.8616,5.3333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.2221,16.4903c0,0,6.2497-9.3333,13.833-4.75c0,0,5.2041,10.1403-4.7942,14.1799"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9718,22.2403c0,0,17.3333,6.0833,13.75,25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M53.6231,46.2342c1.6075,3.8321,1.2349,9.5252-5.5679,17.5062"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.9718,26.8237c0,0,5.6115,8.4105-2.1526,17.7886"
    })));
  }
};

export default Lion;