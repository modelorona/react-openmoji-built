import React from 'react';

const LentilsWithSpaetzle = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M55.256,34.5474a10,10,0,0,0-6.0391-9.1812,9.0264,9.0264,0,1,0-14.1812,6.5013,30.6026,30.6026,0,0,0-1.78,10.68c0,9.3889,3.5817,17,8,17,4.2314,0,7.6866-6.9862,7.972-15.8241A9.9992,9.9992,0,0,0,55.256,34.5474Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M21.499,34a1,1,0,0,1-.8086-1.5869,3.5713,3.5713,0,0,0,.8125-2.3369,3.5066,3.5066,0,0,0-.64-1.5918A4.6468,4.6468,0,0,1,20,26.0156a5.222,5.222,0,0,1,1.792-3.7217,1,1,0,1,1,1.416,1.4122A3.3647,3.3647,0,0,0,22,25.9844a2.8386,2.8386,0,0,0,.5732,1.4629,5.3541,5.3541,0,0,1,.9239,2.4756,5.49,5.49,0,0,1-1.1875,3.664A1.0007,1.0007,0,0,1,21.499,34Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M20.1953,41.95c-.0332,0-.0664-.002-.1-.0049a1,1,0,0,1-.8965-1.0937,3.5679,3.5679,0,0,0-.4775-2.4268,3.4942,3.4942,0,0,0-1.3565-1.0518,4.6623,4.6623,0,0,1-1.99-1.6962,5.2276,5.2276,0,0,1-.3311-4.1172,1,1,0,0,1,1.9356.5039,3.37,3.37,0,0,0,.1064,2.5781,2.8354,2.8354,0,0,0,1.2325.9727,5.3514,5.3514,0,0,1,2.0478,1.6718,5.4873,5.4873,0,0,1,.8233,3.7627A1,1,0,0,1,20.1953,41.95Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M22.2383,40.7686a1,1,0,0,1-.4248-1.9053,3.5627,3.5627,0,0,0,1.84-1.6514,3.4773,3.4773,0,0,0,.211-1.7041,4.6574,4.6574,0,0,1,.4394-2.5781,5.2334,5.2334,0,0,1,3.3692-2.39,1,1,0,0,1,.5566,1.9219,3.3673,3.3673,0,0,0-2.1611,1.4092,2.8441,2.8441,0,0,0-.2051,1.5566,5.3406,5.3406,0,0,1-.3906,2.6153,5.477,5.477,0,0,1-2.8116,2.6308A.99.99,0,0,1,22.2383,40.7686Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M27.499,51a1,1,0,0,1-.8086-1.5869,3.5713,3.5713,0,0,0,.8125-2.3369,3.5066,3.5066,0,0,0-.64-1.5918A4.6468,4.6468,0,0,1,26,43.0156a5.222,5.222,0,0,1,1.792-3.7217,1,1,0,0,1,1.416,1.4122A3.3647,3.3647,0,0,0,28,42.9844a2.8386,2.8386,0,0,0,.5732,1.4629,5.3541,5.3541,0,0,1,.9239,2.4756,5.49,5.49,0,0,1-1.1875,3.664A1.0007,1.0007,0,0,1,27.499,51Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M23.1729,55.1377a1.0165,1.0165,0,0,1-.2969-.0449,1,1,0,0,1-.6582-1.252,3.5632,3.5632,0,0,0,.0185-2.4726,3.4884,3.4884,0,0,0-1.1172-1.3008,4.653,4.653,0,0,1-1.6113-2.0615,5.2277,5.2277,0,0,1,.501-4.1,1,1,0,1,1,1.7949.8809,3.3718,3.3718,0,0,0-.4121,2.5459,2.8365,2.8365,0,0,0,1.0137,1.2022,5.3448,5.3448,0,0,1,1.67,2.0468,5.4843,5.4843,0,0,1,.0527,3.8526A1,1,0,0,1,23.1729,55.1377Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M29.2266,57.4648a1,1,0,0,1-.1143-1.9931,3.5587,3.5587,0,0,0,2.2676-.9854,3.4935,3.4935,0,0,0,.7363-1.5488A4.6393,4.6393,0,0,1,33.3477,50.63a5.2308,5.2308,0,0,1,3.95-1.2041,1,1,0,0,1-.0381,1.999c-.0137,0-.0274,0-.04-.001a3.3437,3.3437,0,0,0-2.4941.6553,2.83,2.83,0,0,0-.6875,1.4131A5.3635,5.3635,0,0,1,32.8438,55.85a5.4822,5.4822,0,0,1-3.501,1.6084A.9364.9364,0,0,1,29.2266,57.4648Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M27.25,24.9336c-.0293,0-.06-.001-.0889-.0039a1,1,0,0,1-.9082-1.084,3.5539,3.5539,0,0,0-.5049-2.4209,3.4961,3.4961,0,0,0-1.3671-1.0361,4.6525,4.6525,0,0,1-2.01-1.6748,5.2269,5.2269,0,0,1-.377-4.1123,1,1,0,1,1,1.9414.4824,3.3665,3.3665,0,0,0,.1348,2.5752,2.8354,2.8354,0,0,0,1.2442.96A5.357,5.357,0,0,1,27.38,20.2676a5.48,5.48,0,0,1,.8652,3.7539A1,1,0,0,1,27.25,24.9336Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M45.6771,41.5083a2.4652,2.4652,0,0,1-3.06-2.731A21.96,21.96,0,0,0,40.159,24.8217a24.8832,24.8832,0,0,0-9.4063-9.3508,2.4422,2.4422,0,0,1-.8916-3.3558,2.485,2.485,0,0,1,3.38-.8978A29.7714,29.7714,0,0,1,44.4946,22.4454a26.7994,26.7994,0,0,1,3.0129,17.037A2.4752,2.4752,0,0,1,45.6771,41.5083Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.0881,53.3746c1.4673,3.77,3.6856,6.1728,6.1679,6.1728,4.2314,0,7.6866-6.9862,7.972-15.8241a9.9982,9.9982,0,0,0-.0111-18.3571A8.9976,8.9976,0,0,0,39.7881,15.56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.892,18.1835a8.9489,8.9489,0,0,0,1.1437,13.684,30.6026,30.6026,0,0,0-1.78,10.68,35.54,35.54,0,0,0,.2245,4.0161A15.3825,15.3825,0,0,0,34,49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.5,23A4.1587,4.1587,0,0,0,23,26c.0244,1.592,1.3677,2.2788,1.5,4a4.6062,4.6062,0,0,1-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.7382,30.8027A4.1584,4.1584,0,0,0,17.957,34.15c.8244,1.3622,2.3307,1.2773,3.3134,2.6966a4.6047,4.6047,0,0,1,.65,3.0946"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7012,32.4688a4.1589,4.1589,0,0,0-2.7644,1.8995c-.7489,1.405.0943,2.6561-.6228,4.2264a4.6058,4.6058,0,0,1-2.3268,2.1415"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.5,40A4.1587,4.1587,0,0,0,29,43c.0244,1.592,1.3677,2.2788,1.5,4a4.6062,4.6062,0,0,1-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.8,43.7044a4.1588,4.1588,0,0,0-.4564,3.3229c.5347,1.5,2.0275,1.7185,2.7058,3.3059a4.6053,4.6053,0,0,1,.0171,3.1622"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.6141,51.8952a4.1584,4.1584,0,0,0-3.2226.93c-1.1542,1.0968-.749,2.55-1.9252,3.8137a4.6059,4.6059,0,0,1-2.8838,1.2975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.6805,13.8143a4.159,4.159,0,0,0,.2559,3.3443c.84,1.3529,2.3449,1.2513,3.3433,2.66a4.6056,4.6056,0,0,1,.6848,3.0872"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6771,41.5083a2.4652,2.4652,0,0,1-3.06-2.731A21.96,21.96,0,0,0,40.159,24.8217a24.8832,24.8832,0,0,0-9.4063-9.3508,2.4422,2.4422,0,0,1-.8916-3.3558,2.485,2.485,0,0,1,3.38-.8978A29.7714,29.7714,0,0,1,44.4946,22.4454a26.7994,26.7994,0,0,1,3.0129,17.037A2.4752,2.4752,0,0,1,45.6771,41.5083Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "37.0001",
      cy: "39.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.0001",
      cy: "42.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.0001",
      cy: "37.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0001",
      cy: "35.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.0001",
      cy: "39.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.0001",
      cy: "44.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.147",
      cy: "43.4785",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.147",
      cy: "34.4785",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.0001",
      cy: "32.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.0001",
      cy: "29.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.0001",
      cy: "33.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0001",
      cy: "30.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.0001",
      cy: "28.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0001",
      cy: "25.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.0001",
      cy: "27.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "34.0001",
      cy: "23.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.0001",
      cy: "54.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.0001",
      cy: "50.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.0001",
      cy: "57.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0001",
      cy: "48.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.5218",
      cy: "51.147",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.0001",
      cy: "55.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.0001",
      cy: "48.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.0001",
      cy: "47.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36.0001",
      cy: "43.0001",
      r: "1",
      fill: "#6a462f"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.0001",
      cy: "45.0001",
      r: "1",
      fill: "#6a462f"
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
      d: "M35.0881,53.3746c1.4673,3.77,3.6856,6.1728,6.1679,6.1728,4.2314,0,7.6866-6.9862,7.972-15.8241a9.9982,9.9982,0,0,0-.0111-18.3571A8.9976,8.9976,0,0,0,39.7881,15.56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.892,18.1835a8.9489,8.9489,0,0,0,1.1437,13.684,30.6026,30.6026,0,0,0-1.78,10.68,35.54,35.54,0,0,0,.2245,4.0161A15.3825,15.3825,0,0,0,34,49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.5,23A4.1587,4.1587,0,0,0,23,26c.0244,1.592,1.3677,2.2788,1.5,4a4.6062,4.6062,0,0,1-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.7382,30.8027A4.1584,4.1584,0,0,0,17.957,34.15c.8244,1.3622,2.3307,1.2773,3.3134,2.6966a4.6047,4.6047,0,0,1,.65,3.0946"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7012,32.4688a4.1589,4.1589,0,0,0-2.7644,1.8995c-.7489,1.405.0943,2.6561-.6228,4.2264a4.6058,4.6058,0,0,1-2.3268,2.1415"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.5,40A4.1587,4.1587,0,0,0,29,43c.0244,1.592,1.3677,2.2788,1.5,4a4.6062,4.6062,0,0,1-1,3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.8,43.7044a4.1588,4.1588,0,0,0-.4564,3.3229c.5347,1.5,2.0275,1.7185,2.7058,3.3059a4.6053,4.6053,0,0,1,.0171,3.1622"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.6141,51.8952a4.1584,4.1584,0,0,0-3.2226.93c-1.1542,1.0968-.749,2.55-1.9252,3.8137a4.6059,4.6059,0,0,1-2.8838,1.2975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.6805,13.8143a4.159,4.159,0,0,0,.2559,3.3443c.84,1.3529,2.3449,1.2513,3.3433,2.66a4.6056,4.6056,0,0,1,.6848,3.0872"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6771,41.5083a2.4652,2.4652,0,0,1-3.06-2.731A21.96,21.96,0,0,0,40.159,24.8217a24.8832,24.8832,0,0,0-9.4063-9.3508,2.4422,2.4422,0,0,1-.8916-3.3558,2.485,2.485,0,0,1,3.38-.8978A29.7714,29.7714,0,0,1,44.4946,22.4454a26.7994,26.7994,0,0,1,3.0129,17.037A2.4752,2.4752,0,0,1,45.6771,41.5083Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default LentilsWithSpaetzle;