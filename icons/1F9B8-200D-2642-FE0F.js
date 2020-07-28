import React from 'react';

const ManSuperhero = ({
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
      id: "hair"
    }, /*#__PURE__*/React.createElement("g", {
      id: "hair-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M26.2964,38.0959c-3,0-4-7-4-14,0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("g", {
      id: "skin-2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M25.2329,31.0959c-.1015,7.999,4.0635,14,11,14,7.0635,0,11.0635-6,11.0635-14,0-5-3-10-3-10-8,0-10,3-16,1A17.0768,17.0768,0,0,0,25.2329,31.0959Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M17.0293,60.8926V57.06c0-4.9941,5.0078-9,10-9q9,7.5,18,0c4.9941,0,10,4.0059,10,9v3.8331Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M47.078,60.8926c-1.1319-3.474-2.9781-7.8938-5.4473-9.6662H30.7576c-2.4777,1.7567-4.33,6.1827-5.4667,9.6662Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M41.2586,60.9583q.7149-1.393,1.43-2.786a2.8829,2.8829,0,0,1-1.5426-.7185,2.2708,2.2708,0,0,1-.7046-1.3286h-4.46q-.0018,1.47-.0035,2.94-.0018-1.47-.0036-2.94h-4.46a2.2435,2.2435,0,0,1-.1818.6085,2.3262,2.3262,0,0,1-.5228.72,2.8089,2.8089,0,0,1-1.497.7118q.7586,1.3963,1.5172,2.7927Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M25.2955,29.3308a6.47,6.47,0,0,0,3.8171-1.1031c1.4077-1.1888,3.11-2.1743,5.5654-.3989a3.1567,3.1567,0,0,0,1.5278.6005,3.1567,3.1567,0,0,0,1.5277-.6005c2.4553-1.7754,4.1577-.79,5.5654.3989a6.47,6.47,0,0,0,3.8171,1.1031l-.0727,1.53a6.47,6.47,0,0,0-3.8171,1.1031c-1.4078,1.1888-3.11,2.1743-5.5655.3989a3.1562,3.1562,0,0,0-1.5277-.6005,3.1572,3.1572,0,0,0-1.5278.6005c-2.4553,1.7754-4.1577.79-5.5654-.3989a6.47,6.47,0,0,0-3.8171-1.1031Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M42.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.1694,38.3459a8.2737,8.2737,0,0,0,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.2964,38.0959c-3,0-4-7-4-14,0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.2329,31.0959c-.1015,7.999,4.9365,14,11,14,5.9365,0,11.0635-6,11.0635-14,0-5-3-11-3-11-8,0-10,3-16,1C28.2964,21.0959,25.2964,26.0959,25.2329,31.0959Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.1694,38.3459a8.2737,8.2737,0,0,0,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5873,53.6014a11.8957,11.8957,0,0,1,4.048-3.3589,11.7524,11.7524,0,0,1,3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.2463,49.6409a10.3571,10.3571,0,0,0-6.7707,7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6769,53.8446a11.8957,11.8957,0,0,0-4.048-3.3589,11.7524,11.7524,0,0,0-3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.0179,49.8841A10.3575,10.3575,0,0,1,49.7887,57.41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9791,50.5829a21.0149,21.0149,0,0,0-4.2927,6.2814,20.5707,20.5707,0,0,0-1.0428,2.9617"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.9707,59.9365v-3c0-4.9941,5.0078-9,10-9q9,7.5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3918,50.5829a26.4349,26.4349,0,0,1,4.19,6.3125,26.1039,26.1039,0,0,1,1.1949,2.9984"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.1426,59.4463l-1.0271-1.8947a2.36,2.36,0,0,0,1.9771-2.0472h7.8545a2.36,2.36,0,0,0,1.9771,2.0472c-.0276.0508-.9674,1.7846-.9949,1.8353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.2955,29.3308a6.47,6.47,0,0,0,3.8171-1.1031c1.4077-1.1888,3.11-2.1743,5.5654-.3989a3.1567,3.1567,0,0,0,1.5278.6005,3.1567,3.1567,0,0,0,1.5277-.6005c2.4553-1.7754,4.1577-.79,5.5654.3989a6.47,6.47,0,0,0,3.8171,1.1031l-.0727,1.53a6.47,6.47,0,0,0-3.8171,1.1031c-1.4078,1.1888-3.11,2.1743-5.5655.3989a3.1562,3.1562,0,0,0-1.5277-.6005,3.1572,3.1572,0,0,0-1.5278.6005c-2.4553,1.7754-4.1577.79-5.5654-.3989a6.47,6.47,0,0,0-3.8171-1.1031Z"
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
      d: "M42.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.1694,38.3459a8.2737,8.2737,0,0,0,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.2964,38.0959c-3,0-4-7-4-14,0-6,5-12,14-12s14,6,14,12c0,7-1,14-4,14"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.2329,31.0959c-.1015,7.999,4.9365,14,11,14,5.9365,0,11.0635-6,11.0635-14,0-5-3-11-3-11-8,0-10,3-16,1C28.2964,21.0959,25.2964,26.0959,25.2329,31.0959Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.1694,38.3459a8.2737,8.2737,0,0,0,6,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M42.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M34.1694,30.0959a2,2,0,1,1-2-2,2,2,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.5873,53.6014a11.8957,11.8957,0,0,1,4.048-3.3589,11.7524,11.7524,0,0,1,3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.2463,49.6409a10.3571,10.3571,0,0,0-6.7707,7.5255"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.6769,53.8446a11.8957,11.8957,0,0,0-4.048-3.3589,11.7524,11.7524,0,0,0-3.3071-1.088"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.0179,49.8841A10.3575,10.3575,0,0,1,49.7887,57.41"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.9791,50.5829a21.0149,21.0149,0,0,0-4.2927,6.2814,20.5707,20.5707,0,0,0-1.0428,2.9617"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M16.9707,59.9365v-3c0-4.9941,5.0078-9,10-9q9,7.5,18,0c4.9941,0,10,4.0059,10,9v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.3918,50.5829a26.4349,26.4349,0,0,1,4.19,6.3125,26.1039,26.1039,0,0,1,1.1949,2.9984"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.1426,59.4463l-1.0271-1.8947a2.36,2.36,0,0,0,1.9771-2.0472h7.8545a2.36,2.36,0,0,0,1.9771,2.0472c-.0276.0508-.9674,1.7846-.9949,1.8353"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.2955,29.3308a6.47,6.47,0,0,0,3.8171-1.1031c1.4077-1.1888,3.11-2.1743,5.5654-.3989a3.1567,3.1567,0,0,0,1.5278.6005,3.1567,3.1567,0,0,0,1.5277-.6005c2.4553-1.7754,4.1577-.79,5.5654.3989a6.47,6.47,0,0,0,3.8171,1.1031l-.0727,1.53a6.47,6.47,0,0,0-3.8171,1.1031c-1.4078,1.1888-3.11,2.1743-5.5655.3989a3.1562,3.1562,0,0,0-1.5277-.6005,3.1572,3.1572,0,0,0-1.5278.6005c-2.4553,1.7754-4.1577.79-5.5654-.3989a6.47,6.47,0,0,0-3.8171-1.1031Z"
    })));
  }
};

export default ManSuperhero;