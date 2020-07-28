import React from 'react';

const MoonCake = ({
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
      fill: "#a57939",
      d: "M57.7532,31.0717V31.67a5.1841,5.1841,0,0,0-2.521-1.5216c.002-.06.0178-.1165.0178-.1773A5.1714,5.1714,0,0,0,50.0786,24.8a5.1167,5.1167,0,0,0-1.4079.2185,5.1394,5.1394,0,0,0-8.3856-2.8527,5.1325,5.1325,0,0,0-8.8559,0,5.1394,5.1394,0,0,0-8.3857,2.8527A5.116,5.116,0,0,0,21.6357,24.8a5.1714,5.1714,0,0,0-5.1714,5.1714c0,.0608.0158.1171.0178.1773a5.1869,5.1869,0,0,0-2.0809,1.09v-.1675H10s0,9.6827.0245,9.6827q.0246.2412.0679.4767c.016.0892.035.1761.0556.2636a5.0226,5.0226,0,0,0,.2039.6568c.0464.1215.0971.2388.1521.3556a5.0994,5.0994,0,0,0,.28.516c.0881.1424.1847.2761.2857.4088.0482.0624.0991.1218.15.1818a5.16,5.16,0,0,0,1.4344,1.192A4.9523,4.9523,0,0,0,16.4821,50.48c-.002.06-.0178.1166-.0178.1773a5.1714,5.1714,0,0,0,5.1714,5.1715,5.116,5.116,0,0,0,1.4078-.2185,5.1395,5.1395,0,0,0,8.3857,2.8526,5.1324,5.1324,0,0,0,8.8559,0A5.1394,5.1394,0,0,0,48.6707,55.61a5.1167,5.1167,0,0,0,1.4079.2185A5.1714,5.1714,0,0,0,55.25,50.6571c0-.0607-.0158-.1171-.0178-.1773a5.16,5.16,0,0,0,3.8964-4.9941,5.2318,5.2318,0,0,0-.0679-.68,5.1574,5.1574,0,0,0,1.4338-1.1916c.0509-.06.1018-.1194.15-.1818.1011-.1327.1977-.2664.2859-.4088a5.0834,5.0834,0,0,0,.784-2.5828V31.0717Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M60.0592,34.8474c.05-.06.1009-.1185.1486-.18.1-.1316.196-.2642.2834-.4053a5.0805,5.0805,0,0,0,.2776-.5115c.0545-.1158.1048-.2321.1508-.3525a4.9924,4.9924,0,0,0,.2022-.6512c.02-.0868.0393-.1729.0551-.2613a4.5556,4.5556,0,0,0,0-1.8179c-.0158-.0884-.0348-.1745-.0551-.2613a4.9924,4.9924,0,0,0-.2022-.6512c-.046-.12-.0963-.2367-.1508-.3525a5.0914,5.0914,0,0,0-.2776-.5115c-.0874-.1411-.1832-.2737-.2834-.4053-.0477-.0618-.0981-.1207-.1486-.18a5.1113,5.1113,0,0,0-1.4214-1.1812l-.0007,0a5.0646,5.0646,0,0,0,.0679-.6742,5.1157,5.1157,0,0,0-3.8628-4.9511c.0021-.06.0177-.1155.0177-.1757a5.1268,5.1268,0,0,0-5.1268-5.1269,5.0754,5.0754,0,0,0-1.3957.2166,5.0951,5.0951,0,0,0-8.3134-2.828,5.0881,5.0881,0,0,0-8.78,0,5.0951,5.0951,0,0,0-8.3134,2.828,5.0754,5.0754,0,0,0-1.3957-.2166,5.1268,5.1268,0,0,0-5.1268,5.1269c0,.06.0156.1161.0176.1757a4.91,4.91,0,0,0-3.7949,5.6253l-.0006,0a5.1113,5.1113,0,0,0-1.4214,1.1812c-.0505.06-.1009.1185-.1487.18-.1.1316-.1959.2642-.2833.4053a5.0714,5.0714,0,0,0-.2776.5115c-.0546.1158-.1049.2321-.1509.3525a5.0074,5.0074,0,0,0-.2021.6512c-.02.0868-.0393.1729-.0551.2613a4.5556,4.5556,0,0,0,0,1.8179c.0158.0884.0347.1745.0551.2613a5.0074,5.0074,0,0,0,.2021.6512c.046.12.0963.2367.1509.3525a5.0606,5.0606,0,0,0,.2776.5115c.0874.1411.1831.2737.2833.4053.0478.0618.0982.1207.1487.18a5.1113,5.1113,0,0,0,1.4214,1.1812l.0006,0a4.91,4.91,0,0,0,3.7949,5.6253c-.002.06-.0176.1155-.0176.1757a5.1268,5.1268,0,0,0,5.1268,5.1269,5.0754,5.0754,0,0,0,1.3957-.2166,5.0952,5.0952,0,0,0,8.3134,2.8281,5.0882,5.0882,0,0,0,8.78,0A5.0952,5.0952,0,0,0,48.3374,46.74a5.0754,5.0754,0,0,0,1.3957.2166A5.1268,5.1268,0,0,0,54.86,41.83c0-.06-.0156-.116-.0177-.1757a5.1157,5.1157,0,0,0,3.8628-4.9511,5.0646,5.0646,0,0,0-.0679-.6742l.0007,0A5.1113,5.1113,0,0,0,60.0592,34.8474Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.0592,34.8474c.05-.06.1009-.1185.1486-.18.1-.1316.196-.2642.2834-.4053a5.0805,5.0805,0,0,0,.2776-.5115c.0545-.1158.1048-.2321.1508-.3525a4.9924,4.9924,0,0,0,.2022-.6512c.02-.0868.0393-.1729.0551-.2613a4.5556,4.5556,0,0,0,0-1.8179c-.0158-.0884-.0348-.1745-.0551-.2613a4.9924,4.9924,0,0,0-.2022-.6512c-.046-.12-.0963-.2367-.1508-.3525a5.0914,5.0914,0,0,0-.2776-.5115c-.0874-.1411-.1832-.2737-.2834-.4053-.0477-.0618-.0981-.1207-.1486-.18a5.1113,5.1113,0,0,0-1.4214-1.1812l-.0007,0a5.0646,5.0646,0,0,0,.0679-.6742,5.1157,5.1157,0,0,0-3.8628-4.9511c.0021-.06.0177-.1155.0177-.1757a5.1268,5.1268,0,0,0-5.1268-5.1269,5.0754,5.0754,0,0,0-1.3957.2166,5.0951,5.0951,0,0,0-8.3134-2.828,5.0881,5.0881,0,0,0-8.78,0,5.0951,5.0951,0,0,0-8.3134,2.828,5.0754,5.0754,0,0,0-1.3957-.2166,5.1268,5.1268,0,0,0-5.1268,5.1269c0,.06.0156.1161.0176.1757a4.91,4.91,0,0,0-3.7949,5.6253l-.0006,0a5.1113,5.1113,0,0,0-1.4214,1.1812c-.0505.06-.1009.1185-.1487.18-.1.1316-.1959.2642-.2833.4053a5.0714,5.0714,0,0,0-.2776.5115c-.0546.1158-.1049.2321-.1509.3525a5.0074,5.0074,0,0,0-.2021.6512c-.02.0868-.0393.1729-.0551.2613a4.5556,4.5556,0,0,0,0,1.8179c.0158.0884.0347.1745.0551.2613a5.0074,5.0074,0,0,0,.2021.6512c.046.12.0963.2367.1509.3525a5.0606,5.0606,0,0,0,.2776.5115c.0874.1411.1831.2737.2833.4053.0478.0618.0982.1207.1487.18a5.1113,5.1113,0,0,0,1.4214,1.1812l.0006,0a4.91,4.91,0,0,0,3.7949,5.6253c-.002.06-.0176.1155-.0176.1757a5.1268,5.1268,0,0,0,5.1268,5.1269,5.0754,5.0754,0,0,0,1.3957-.2166,5.0952,5.0952,0,0,0,8.3134,2.8281,5.0882,5.0882,0,0,0,8.78,0A5.0952,5.0952,0,0,0,48.3374,46.74a5.0754,5.0754,0,0,0,1.3957.2166A5.1268,5.1268,0,0,0,54.86,41.83c0-.06-.0156-.116-.0177-.1757a5.1157,5.1157,0,0,0,3.8628-4.9511,5.0646,5.0646,0,0,0-.0679-.6742l.0007,0A5.1113,5.1113,0,0,0,60.0592,34.8474Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.8814,40.9339c.0023.263.0049.4135.0079.4135q.0239.2342.0659.4627c.0155.0866.034.1709.0539.2559a4.89,4.89,0,0,0,.198.6376c.045.1179.0942.2318.1477.3451a4.9518,4.9518,0,0,0,.2718.5009c.0856.1382.1793.268.2774.3969.0467.06.0962.1182.1456.1765A5.0073,5.0073,0,0,0,13.442,45.28a4.9544,4.9544,0,0,0-.0665.66,5.0089,5.0089,0,0,0,3.7823,4.8478c-.002.0585-.0173.1132-.0173.1722a5.02,5.02,0,0,0,5.02,5.02,4.9639,4.9639,0,0,0,1.3666-.2121,4.989,4.989,0,0,0,8.14,2.7692,4.9821,4.9821,0,0,0,8.5965,0,4.9889,4.9889,0,0,0,8.14-2.7692A4.965,4.965,0,0,0,49.77,55.98a5.02,5.02,0,0,0,5.02-5.02c0-.059-.0153-.1137-.0173-.1722A5.009,5.009,0,0,0,58.5552,45.94a5.0864,5.0864,0,0,0-.0659-.66,5.0051,5.0051,0,0,0,1.3918-1.1566c.0494-.0583.0988-.116.1455-.1765.0981-.1289.1919-.2587.2775-.3969a4.9347,4.9347,0,0,0,.7611-2.5072q0-.3159,0-.6319"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.8,20.8768c-3.9767.6577-6.635,2.4619-7.1729,5.35h3.98l.0593-1.7833"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2943,24.4433l.0594,1.7833h3.98c-.5378-2.8879-3.1961-4.6921-7.1729-5.35l-.1384,7.6854H53.69C52.5076,22.2153,44.7848,17.31,35.4113,17.31S18.315,22.2153,17.133,28.5622H32.8V20.8768"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.8001",
      x2: "38.0225",
      y1: "23.5517",
      y2: "23.5517",
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.8,41.0449c-3.9767-.6577-6.635-2.4618-7.1729-5.35h3.98l.0593,1.7832"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2943,37.4784l.0594-1.7832h3.98c-.5378,2.8879-3.1961,4.692-7.1729,5.35L38.0225,33.36H53.69c-1.1821,6.3469-8.9049,11.2518-18.2784,11.2518S18.315,39.7065,17.133,33.36H32.8v7.6853"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.8001",
      x2: "38.0225",
      y1: "38.37",
      y2: "38.37",
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.2449",
      x2: "43.2449",
      y1: "33.3596",
      y2: "28.9015",
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "27.5778",
      x2: "27.5778",
      y1: "33.3596",
      y2: "28.9015",
      fill: "none",
      stroke: "#fcea2b",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
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
      d: "M60.0592,34.8474c.05-.06.1009-.1185.1486-.18.1-.1316.196-.2642.2834-.4053a5.0805,5.0805,0,0,0,.2776-.5115c.0545-.1158.1048-.2321.1508-.3525a4.9924,4.9924,0,0,0,.2022-.6512c.02-.0868.0393-.1729.0551-.2613a4.5556,4.5556,0,0,0,0-1.8179c-.0158-.0884-.0348-.1745-.0551-.2613a4.9924,4.9924,0,0,0-.2022-.6512c-.046-.12-.0963-.2367-.1508-.3525a5.0914,5.0914,0,0,0-.2776-.5115c-.0874-.1411-.1832-.2737-.2834-.4053-.0477-.0618-.0981-.1207-.1486-.18a5.1113,5.1113,0,0,0-1.4214-1.1812l-.0007,0a5.0646,5.0646,0,0,0,.0679-.6742,5.1157,5.1157,0,0,0-3.8628-4.9511c.0021-.06.0177-.1155.0177-.1757a5.1268,5.1268,0,0,0-5.1268-5.1269,5.0754,5.0754,0,0,0-1.3957.2166,5.0951,5.0951,0,0,0-8.3134-2.828,5.0881,5.0881,0,0,0-8.78,0,5.0951,5.0951,0,0,0-8.3134,2.828,5.0754,5.0754,0,0,0-1.3957-.2166,5.1268,5.1268,0,0,0-5.1268,5.1269c0,.06.0156.1161.0176.1757a4.91,4.91,0,0,0-3.7949,5.6253l-.0006,0a5.1113,5.1113,0,0,0-1.4214,1.1812c-.0505.06-.1009.1185-.1487.18-.1.1316-.1959.2642-.2833.4053a5.0714,5.0714,0,0,0-.2776.5115c-.0546.1158-.1049.2321-.1509.3525a5.0074,5.0074,0,0,0-.2021.6512c-.02.0868-.0393.1729-.0551.2613a4.5556,4.5556,0,0,0,0,1.8179c.0158.0884.0347.1745.0551.2613a5.0074,5.0074,0,0,0,.2021.6512c.046.12.0963.2367.1509.3525a5.0606,5.0606,0,0,0,.2776.5115c.0874.1411.1831.2737.2833.4053.0478.0618.0982.1207.1487.18a5.1113,5.1113,0,0,0,1.4214,1.1812l.0006,0a4.91,4.91,0,0,0,3.7949,5.6253c-.002.06-.0176.1155-.0176.1757a5.1268,5.1268,0,0,0,5.1268,5.1269,5.0754,5.0754,0,0,0,1.3957-.2166,5.0952,5.0952,0,0,0,8.3134,2.8281,5.0882,5.0882,0,0,0,8.78,0A5.0952,5.0952,0,0,0,48.3374,46.74a5.0754,5.0754,0,0,0,1.3957.2166A5.1268,5.1268,0,0,0,54.86,41.83c0-.06-.0156-.116-.0177-.1757a5.1157,5.1157,0,0,0,3.8628-4.9511,5.0646,5.0646,0,0,0-.0679-.6742l.0007,0A5.1113,5.1113,0,0,0,60.0592,34.8474Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.8814,40.9339c.0023.263.0049.4135.0079.4135q.0239.2342.0659.4627c.0155.0866.034.1709.0539.2559a4.89,4.89,0,0,0,.198.6376c.045.1179.0942.2318.1477.3451a4.9518,4.9518,0,0,0,.2718.5009c.0856.1382.1793.268.2774.3969.0467.06.0962.1182.1456.1765A5.0073,5.0073,0,0,0,13.442,45.28a4.9544,4.9544,0,0,0-.0665.66,5.0089,5.0089,0,0,0,3.7823,4.8478c-.002.0585-.0173.1132-.0173.1722a5.02,5.02,0,0,0,5.02,5.02,4.9639,4.9639,0,0,0,1.3666-.2121,4.989,4.989,0,0,0,8.14,2.7692,4.9821,4.9821,0,0,0,8.5965,0,4.9889,4.9889,0,0,0,8.14-2.7692A4.965,4.965,0,0,0,49.77,55.98a5.02,5.02,0,0,0,5.02-5.02c0-.059-.0153-.1137-.0173-.1722A5.009,5.009,0,0,0,58.5552,45.94a5.0864,5.0864,0,0,0-.0659-.66,5.0051,5.0051,0,0,0,1.3918-1.1566c.0494-.0583.0988-.116.1455-.1765.0981-.1289.1919-.2587.2775-.3969a4.9347,4.9347,0,0,0,.7611-2.5072q0-.3159,0-.6319"
    })));
  }
};

export default MoonCake;