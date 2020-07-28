import React from 'react';

const SmilingCatWithHeartEyes = ({
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
      fill: "#F4AA41",
      d: "M58.6283,48.8437c-3.5949,9.1099-12.6217,15.1431-23.1895,15.1431 c-9.1103,0-19.2413-5.8431-22.8362-14.9531l-0.1261-0.3124c-1.1406-2.8575-0.9558-6.355-0.9558-9.625l3.664-32.3458 l10.2196,10.0714c2.9204-1.2468,6.1323-1.9373,9.5031-1.9373h1.0627c3.3708,0,6.5827,0.6905,9.5031,1.9373L56.6928,5.7504 l3.7194,33.85c0,3.27-0.6278,6.3921-1.7694,9.2495"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M35.4388,63.9868c10.6007,0.3422,20.3386-5.9994,23.9335-15.1093l0.1108-0.2309 c1.1406-2.8575,1.9564-6.8912,1.9564-10.1612l-4.7467-32.735"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M23.8819,31.3036c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551 l5.7331,6.9237l0,0l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M25.3857,48.6386c0,0,7.794,4.1568,10.3921-3.1176c2.598,7.2744,10.7968,3.0677,10.7968,3.0677 s-2.6915,4.3778-3.4848,5.2297c-4.0142,4.3106-9.3934,4.0507-13.6612,0.1167C28.494,53.0736,25.3857,48.6386,25.3857,48.6386z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M48.6044,31.3036c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551 l5.7331,6.9237l0,0l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "62.0185",
      x2: "52.5492",
      y1: "54.0591",
      y2: "49.0783",
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
      d: "M52.6074,46.8922"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.9603,52.0883"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.8035",
      x2: "48.4506",
      y1: "59.3627",
      y2: "54.1667",
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
      d: "M46.3722,55.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.725,60.4019"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2891,48.0431c-1.1163-2.7634-1.7303-5.7826-1.7303-8.9449l3.6372-32.735l10.9705,10.7067 c2.8569-1.2057,5.9978-1.8735,9.294-1.8735h1.0392c3.2962,0,6.4371,0.6678,9.294,1.8735L56.7642,6.3632l3.6372,32.735 c0,3.1623-0.614,6.1815-1.7303,8.9449"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8155,59.3851C26.4832,61.6766,30.8176,63,35.4606,63h1.0392c4.643,0,8.9774-1.3233,12.6451-3.6149"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.3528",
      y1: "54.1667",
      y2: "48.9707",
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
      d: "M19.3528,46.8922"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.1568",
      x2: "23.5097",
      y1: "59.3627",
      y2: "54.1667",
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
      d: "M25.5881,55.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2352,60.4019"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.8819,31.3968c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551l5.7331,6.9237l0,0 l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,52.266"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6044,31.3968c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551l5.7331,6.9237l0,0 l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6375",
      x2: "39.9575",
      y1: "45.4657",
      y2: "45.4657",
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
      d: "M25.3975,48.5857c0,0,7.8,4.16,10.4-3.12c2.6,7.28,10.805,3.0701,10.805,3.0701s-2.6936,4.3812-3.4875,5.2337 c-4.0173,4.3139-9.4006,4.0538-13.6716,0.1167C28.5082,53.0241,25.3975,48.5857,25.3975,48.5857z"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "62.0185",
      x2: "52.5492",
      y1: "54.0591",
      y2: "49.0783",
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
      d: "M52.6074,46.8922"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.9603,52.0883"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.8035",
      x2: "48.4506",
      y1: "59.3627",
      y2: "54.1667",
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
      d: "M46.3722,55.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.725,60.4019"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.2891,48.0431c-1.1163-2.7634-1.7303-5.7826-1.7303-8.9449l3.6372-32.735l10.9705,10.7067 c2.8569-1.2057,5.9978-1.8735,9.294-1.8735h1.0392c3.2962,0,6.4371,0.6678,9.294,1.8735L56.7642,6.3632l3.6372,32.735 c0,3.1623-0.614,6.1815-1.7303,8.9449"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8155,59.3851C26.4832,61.6766,30.8176,63,35.4606,63h1.0392c4.643,0,8.9774-1.3233,12.6451-3.6149"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      x2: "19.3528",
      y1: "54.1667",
      y2: "48.9707",
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
      d: "M19.3528,46.8922"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.1568",
      x2: "23.5097",
      y1: "59.3627",
      y2: "54.1667",
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
      d: "M25.5881,55.2059"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.2352,60.4019"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.8819,31.3968c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551l5.7331,6.9237l0,0 l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63,52.266"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.6044,31.3968c-1.364-3.6159-6.9438-3.8472-6.5942,1.4207c0.0465,0.6991,0.3029,1.3718,0.6915,1.9551l5.7331,6.9237l0,0 l5.6288-6.7552c0.6248-0.7507,0.9944-1.7011,0.9756-2.6793c-0.0931-4.692-5.4452-4.3501-6.6057-0.8663"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6375",
      x2: "39.9575",
      y1: "45.4657",
      y2: "45.4657",
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
      d: "M25.3975,48.5857c0,0,7.8,4.16,10.4-3.12c2.6,7.28,10.805,3.0701,10.805,3.0701s-2.6936,4.3812-3.4875,5.2337 c-4.0173,4.3139-9.4006,4.0538-13.6716,0.1167C28.5082,53.0241,25.3975,48.5857,25.3975,48.5857z"
    })));
  }
};

export default SmilingCatWithHeartEyes;