import React from 'react';

const CatWithTearsOfJoy = ({
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
      d: "M58.6505,48.8749C55.0598,57.974,46.0437,64,35.4885,64C26.389,64,16.27,58.1638,12.6794,49.0646 l-0.1259-0.3121C11.4142,45.8985,10.6,42.4051,10.6,39.139l4.6597-32.3062l10.2062,10.0583c2.9169-1.2453,6.125-1.935,9.4918-1.935 h1.0614c3.3668,0,6.5749,0.6897,9.4918,1.935L56.7173,5.8328l3.715,33.8098c0,3.2661-0.6271,6.3845-1.7673,9.2386"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "M35.4885,63.6979c10.4781,0.3382,20.1034-5.93,23.6567-14.9346l0.1095-0.2282 c1.1274-2.8244,1.9338-6.8115,1.9338-10.0437L56.4967,6.135"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M14.2466,42.8494c-1.8488,0.1561-5.5872,0.7259-7.6631,2.8018c-0.6507,0.6487-1.0076,1.5123-1.0076,2.4286 c0,0.9184,0.3569,1.782,1.0076,2.4328c1.2995,1.2994,3.564,1.2994,4.8614,0l0,0C13.5209,48.4367,14.0906,44.6984,14.2466,42.8494z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M57.7564,42.8494c0.1561,1.8489,0.7257,5.5873,2.8017,7.6632c1.2995,1.2994,3.564,1.2975,4.8615,0 c1.34-1.3401,1.34-3.5214,0.0021-4.8614l0,0C63.3457,43.5753,59.6073,43.0055,57.7564,42.8494z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M25.0988,49.036c0,0,7.7848,4.1519,10.3797-3.1139c2.5949,7.2658,10.784,3.0641,10.784,3.0641 s-2.6883,4.3726-3.4807,5.2235c-4.0095,4.3055-9.3823,4.0459-13.645,0.1165C28.2034,53.4658,25.0988,49.036,25.0988,49.036z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "61.9498",
      x2: "52.6081",
      y1: "54.1773",
      y2: "48.9874",
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
      d: "M52.6081,46.9115"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.9498,52.1013"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.7979",
      x2: "48.4562",
      y1: "59.3671",
      y2: "54.1773",
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
      d: "M46.3802,55.2152"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.722,60.4051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.7403,37.9376l3.5008-31.5071l10.9585,10.694c2.8525-1.2043,5.9896-1.8713,9.282-1.8713h1.038 c3.2923,0,6.4295,0.667,9.282,1.8713L56.76,6.4305l3.5219,31.6975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8515,59.3894C26.5159,61.6782,30.8441,63,35.4816,63h1.038c4.6375,0,8.9677-1.3218,12.6301-3.6106"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.0132",
      x2: "18.355",
      y1: "54.1773",
      y2: "48.9874",
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
      d: "M19.393,46.9115"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.2031",
      x2: "23.5448",
      y1: "59.3671",
      y2: "54.1773",
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
      d: "M25.6208,55.2152"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.279,60.4051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.203,37.9382c-3.1139-4.1519-9.3418-4.1519-11.4177,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.798,37.9382c3.1139-4.1519,9.3418-4.1519,11.4177,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.0142,53.5476c-1.4718,0-2.8564-0.5738-3.8985-1.6158C4.0737,50.8897,3.5,49.5051,3.5,48.0313 c0-1.4718,0.5737-2.8564,1.6157-3.8964c3.4302-3.4302,9.952-3.4687,10.2278-3.4687c0.5737,0,1.038,0.4643,1.038,1.038 c0,0.2757-0.0385,6.7975-3.4687,10.2277l0,0C11.8727,52.9738,10.488,53.5476,9.0142,53.5476z M14.2466,42.8008 c-1.8488,0.1561-5.5872,0.7259-7.6631,2.8018c-0.6507,0.6487-1.0076,1.5123-1.0076,2.4286c0,0.9184,0.3569,1.782,1.0076,2.4328 c1.2995,1.2994,3.564,1.2994,4.8614,0l0,0C13.5209,48.3881,14.0906,44.6498,14.2466,42.8008z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62.9909,53.5476c-1.4739,0-2.8585-0.5738-3.9006-1.6158c-3.4301-3.4302-3.4686-9.952-3.4686-10.2277 c0-0.5737,0.4642-1.038,1.038-1.038c0.2757,0,6.7994,0.0385,10.2296,3.4687l0,0c2.1489,2.1489,2.1469,5.648-0.002,7.7969 C65.8473,52.9738,64.4626,53.5476,62.9909,53.5476z M57.7564,42.8008c0.1561,1.8489,0.7257,5.5873,2.8017,7.6632 c1.2995,1.2994,3.564,1.2975,4.8615,0c1.34-1.3401,1.34-3.5214,0.0021-4.8614l0,0C63.3457,43.5267,59.6073,42.9569,57.7564,42.8008 z"
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
      x1: "61.9498",
      x2: "52.6081",
      y1: "54.1773",
      y2: "48.9874",
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
      d: "M52.6081,46.9115"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M61.9498,52.1013"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.7979",
      x2: "48.4562",
      y1: "59.3671",
      y2: "54.1773",
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
      d: "M46.3802,55.2152"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.722,60.4051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.7403,37.9376l3.5008-31.5071l10.9585,10.694c2.8525-1.2043,5.9896-1.8713,9.282-1.8713h1.038 c3.2923,0,6.4295,0.667,9.282,1.8713L56.76,6.4305l3.5219,31.6975"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8515,59.3894C26.5159,61.6782,30.8441,63,35.4816,63h1.038c4.6375,0,8.9677-1.3218,12.6301-3.6106"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9.0132",
      x2: "18.355",
      y1: "54.1773",
      y2: "48.9874",
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
      d: "M19.393,46.9115"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "14.2031",
      x2: "23.5448",
      y1: "59.3671",
      y2: "54.1773",
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
      d: "M25.6208,55.2152"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.279,60.4051"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.203,37.9382c-3.1139-4.1519-9.3418-4.1519-11.4177,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.798,37.9382c3.1139-4.1519,9.3418-4.1519,11.4177,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.0142,53.5476c-1.4718,0-2.8564-0.5738-3.8985-1.6158C4.0737,50.8897,3.5,49.5051,3.5,48.0313 c0-1.4718,0.5737-2.8564,1.6157-3.8964c3.4302-3.4302,9.952-3.4687,10.2278-3.4687c0.5737,0,1.038,0.4643,1.038,1.038 c0,0.2757-0.0385,6.7975-3.4687,10.2277l0,0C11.8727,52.9738,10.488,53.5476,9.0142,53.5476z M14.2466,42.8008 c-1.8488,0.1561-5.5872,0.7259-7.6631,2.8018c-0.6507,0.6487-1.0076,1.5123-1.0076,2.4286c0,0.9184,0.3569,1.782,1.0076,2.4328 c1.2995,1.2994,3.564,1.2994,4.8614,0l0,0C13.5209,48.3881,14.0906,44.6498,14.2466,42.8008z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M62.9909,53.5476c-1.4739,0-2.8585-0.5738-3.9006-1.6158c-3.4301-3.4302-3.4686-9.952-3.4686-10.2277 c0-0.5737,0.4642-1.038,1.038-1.038c0.2757,0,6.7994,0.0385,10.2296,3.4687l0,0c2.1489,2.1489,2.1469,5.648-0.002,7.7969 C65.8473,52.9738,64.4626,53.5476,62.9909,53.5476z M57.7564,42.8008c0.1561,1.8489,0.7257,5.5873,2.8017,7.6632 c1.2995,1.2994,3.564,1.2975,4.8615,0c1.34-1.3401,1.34-3.5214,0.0021-4.8614l0,0C63.3457,43.5267,59.6073,42.9569,57.7564,42.8008 z"
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

export default CatWithTearsOfJoy;