import React from 'react';

const Monkey = ({
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
      d: "M57.6434,22.3333c-1.2621-2.4047-3.4786-3.8513-5.0019-4.6098c-0.8214-0.4091-1.701-0.6661-2.5976-0.8618 c-3.0012-0.655-5.0846-1.976-6.1805-2.8259c-0.6987-0.5418-1.2036-1.3355-1.2808-2.2162c-0.1577-1.7996,1.3487-2.4576,4.1013-2.153 c2.379,0.2634,3.9377,2.1088,4.6551,3.1845c0.5031,0.7545,1.0912,1.5623,1.9154,1.9405c2.1921,1.006,2.375-2.0833,2.375-2.0833 l-1.625-1.25l-3.6667-3.625l-4-1.375L42.629,7.5326L40.6987,9.146l-0.7524,3.0917l3.0477,4.2744l4.586,2.0536l4.9687,1.8706 l2.714,2.5617l0.811,2.7936l-1.6911,1.7195l-2.6852,0.0135l-4.7662-1.8686l-5.156-1.0936l-3.04,1.3686L36.7752,26l0.5322-2.75 l-0.9697-1.1875h-2.5l-1.5625,1.3125l-2.053-2.125l-3.1345-1.0625l-4.5625,3.5l-1.375,4.2081l0.3593,3.0419l1.3547,3.6714 l2.1203,3.313l-0.8774,2.3787l-4.8032,5.4636L13,49l-5.1623,1.9591l-1.75,2.1034l1.0836,1.1518l6.5112-1.2146l6.8129-1.7512 l6.1772-1.4377L30.8377,44l1.5873-3.4379l2.8501,2.2726l2.0322,2.6019l-1.6731,4.8966l-1.4263,2.4495l-4.5071,1.0568l-2.4257,1.723 l1.0708,1.6953l4.1168,1.0547l3.5934-0.5919l5.0732,1.0085l5.2557-1.5553l1.8901-6.7363l0.2184-5.3079l5.413-3.3096l3.7368-6.0701 l0.5276-3.0092c0,0-0.7058-1.5485-1.8505-3.1884C59.9845,26.879,57.6434,22.3333,57.6434,22.3333z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M54.6573,41.1492l-0.3613,2.6424l2.2525,3.7501l6.6225,2.0833l0.5765,3.7083v5.3958l-2.1599,0.8542 l-2.5659-1.25l-0.3924-3.625c0,0-1.2916-0.7738-1.4696-0.8036c-0.178-0.0299-7.0721-3.738-7.0721-3.738 s-1.7917-2.125-1.4167-5.4583L54.6573,41.1492"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F4AA41",
      stroke: "none",
      points: "24.8377,28.375 29.0877,28.6852 30.2222,31.4375 28.9609,33.9488 28.5705,36.1286 23.7364,36.2071 22.7938,33.5812 21.4625,30.5404 22.6502,28.6852"
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
      d: "M54.6151,13.002c-6.1534-10.1026-13.9396-5.7207-14.5736-2.4868c-0.5544,2.8279,0.462,6.2089,9.3384,8.579 c3.3116,0.8842,5.2159,2.6898,6.3066,4.5673c1.3045,2.2457-0.9063,4.9046-3.3693,4.081c-4.7351-1.5833-9.3588-5.0341-15.023-0.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.042,32.7357C39,33,36.8383,23.0629,36.8383,23.0629c-0.505-0.7712-2.3383-1.8129-4.63,1.2288 c-1.0431-3.4879-5.0604-3.6762-5.0604-3.6762c-1.6104,0.8333-6.505,3.0095-5.505,9.0095"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.7938,33.5812c0,0-3.0389-3.7986,0.7597-4.5583s5.3181,0,5.3181,0s3.0389,0.7597,0,4.5583c0,0,1.1396,3.4188-2.659,3.4188 S22.7938,33.5812,22.7938,33.5812z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9796,43.7804l-3.307,6.0303c0,0-7.8859,1.8198-10.3123,2.4264c-1.8292,0.4573-5.3819,1.604-7.0202,2.1409 c-0.7166,0.2348-1.5108,0.2047-2.1688-0.1638C6.0479,53.5852,5.3163,51.4264,13,49c6.8465-2.162,11.75-7.5625,12.125-12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.8949,34.9489c0,0,7.8859,7.8859,5.4595,11.5256c-1.7762,2.6643-4.5276,7.6041-5.8747,10.0602 C36.982,57.442,36.0326,58,34.9978,58h-5.0451c-2.6204,0-2.8634-3.9459-0.2518-4.1604c0.1675-0.0138,0.3409-0.0215,0.5201-0.0225 c1.1106-0.0067,4.1307-0.6062,4.5829-1.6207l3.091-6.9351c0,0-2.8949-4.2612-6.0661-4.8529"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.3063,33.1291c0,0,3.033,6.6727-9.0991,12.1322c0,0,0.1025,5.7474-1.303,11.0313c-0.2602,0.9781-1.2349,1.5893-2.2336,1.425 l-3.3373,0.0266"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,50c1,3,6.0327,4.2186,8,4l0.0675,2.7876c0.0321,1.3274,1.1556,2.3653,2.4814,2.2923l0.0125-0.0007 c0.9822-0.0541,2.0359-0.6738,2.1255-1.6535C64,54,63,50,63,50c-9.7057-1.8198-9.3333-7.1652-9.3333-7.1652"
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
      d: "M54.6151,13.002c-6.1534-10.1026-13.9396-5.7207-14.5736-2.4868c-0.5544,2.8279,0.462,6.2089,9.3384,8.579 c3.3116,0.8842,5.2159,2.6898,6.3066,4.5673c1.3045,2.2457-0.9063,4.9046-3.3693,4.081c-4.7351-1.5833-9.3588-5.0341-15.023-0.9092"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.042,32.7357C39,33,36.8383,23.0629,36.8383,23.0629c-0.505-0.7712-2.3383-1.8129-4.63,1.2288 c-1.0431-3.4879-5.0604-3.6762-5.0604-3.6762c-1.6104,0.8333-6.505,3.0095-5.505,9.0095"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.7938,33.5812c0,0-3.0389-3.7986,0.7597-4.5583s5.3181,0,5.3181,0s3.0389,0.7597,0,4.5583c0,0,1.1396,3.4188-2.659,3.4188 S22.7938,33.5812,22.7938,33.5812z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9796,43.7804l-3.307,6.0303c0,0-7.8859,1.8198-10.3123,2.4264c-1.8292,0.4573-5.3819,1.604-7.0202,2.1409 c-0.7166,0.2348-1.5108,0.2047-2.1688-0.1638C6.0479,53.5852,5.3163,51.4264,13,49c6.8465-2.162,11.75-7.5625,12.125-12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.8949,34.9489c0,0,7.8859,7.8859,5.4595,11.5256c-1.7762,2.6643-4.5276,7.6041-5.8747,10.0602 C36.982,57.442,36.0326,58,34.9978,58h-5.0451c-2.6204,0-2.8634-3.9459-0.2518-4.1604c0.1675-0.0138,0.3409-0.0215,0.5201-0.0225 c1.1106-0.0067,4.1307-0.6062,4.5829-1.6207l3.091-6.9351c0,0-2.8949-4.2612-6.0661-4.8529"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.3063,33.1291c0,0,3.033,6.6727-9.0991,12.1322c0,0,0.1025,5.7474-1.303,11.0313c-0.2602,0.9781-1.2349,1.5893-2.2336,1.425 l-3.3373,0.0266"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51,50c1,3,6.0327,4.2186,8,4l0.0675,2.7876c0.0321,1.3274,1.1556,2.3653,2.4814,2.2923l0.0125-0.0007 c0.9822-0.0541,2.0359-0.6738,2.1255-1.6535C64,54,63,50,63,50c-9.7057-1.8198-9.3333-7.1652-9.3333-7.1652"
    })));
  }
};

export default Monkey;