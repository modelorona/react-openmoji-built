import React from 'react';

const Tractor = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "26.682",
      y: "28.3643",
      width: "3.1666",
      height: "4.4166",
      fill: "#3F3F3F"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      d: "M51.0954,20.2843c0,0-9.8301-1.17-16.1602,0.58l-0.5,10.5799c0,0-18.8398,1.5901-22.5898,5.5901l1.25,13.5 h40.25c0,0,1.1543-10.4774,0.4938-19.4245C53.5066,26.6037,52.06,22.7428,51.0954,20.2843z M39.8333,37.5649l-2.6789,0.0313 l0.1406-12.6345c5.3893-1.8888,11.6402,0.0726,11.6402,0.0726l0.0701,4.9C41.1553,32.0043,39.8333,37.5649,39.8333,37.5649z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M11.4801,42.5186c0,0,16.6362-2.6442,30.9971-3.035c0,0,4.0063-4.2064,6.0381-4.911 c1.9375-0.6719,4.8815-1.2129,5.2787-0.875c0.4009,0.341,0.2324,2.6722,0.331,5.9151L53.4037,51.567l-41.0612-0.2137 L11.4801,42.5186z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.98",
      cy: "46.5898",
      r: "5",
      fill: "#EA5A47"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "15.02",
      cy: "51.5898",
      r: "3",
      fill: "#EA5A47"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M14.07,41.1351h1.7578c0.9668,0,1.7578-0.45,1.7578-1v-2.12c-0.1406,0.2258,0.3418-1-0.625-1 l-1.4721,0.3355c-0.4164,0.0949-0.7386,0.425-0.8233,0.8437L14.07,41.1351z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M52.9805,35.59c-6.0654,0-11,4.9346-11,11s4.9346,11,11,11s11-4.9346,11-11S59.0459,35.59,52.9805,35.59z M56.9805,46.59 c0,2.2061-1.7939,4-4,4s-4-1.7939-4-4s1.7939-4,4-4S56.9805,44.3839,56.9805,46.59z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.02,45.59c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6s6-2.6914,6-6S18.3286,45.59,15.02,45.59z M15.02,53.59 c-1.103,0-2-0.8975-2-2s0.897-2,2-2s2,0.8975,2,2S16.123,53.59,15.02,53.59z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "26.682,32.2999 26.682,28.3643 29.8486,28.3643 29.8486,31.8513"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5,52.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.682,32.2999c-5.1431,0.7998-11.7743,2.1973-14.4066,4.3368c-0.2664,0.2165-0.4129,0.5443-0.3812,0.8861l0.6871,6.5445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8486,31.8513C28.9085,31.972,27.8325,32.121,26.682,32.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.8185,30.467c-0.3456-3.6951-0.8852-8.0548-1.7199-10.1861c0,0-10.8333-1.1666-17.1666,0.5834l-0.5,10.5833 c0,0-1.4378,0.1282-3.5834,0.4037"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.5153",
      x2: "40.3521",
      y1: "50.5309",
      y2: "50.5309",
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
      d: "M40.3521,43.4723c1.537-6.9462,8.414-11.3309,15.36-9.7939c2.792,0.6178,5.1703,2.0984,6.9165,4.0996"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.9672,23.6688c0,0-5.919-0.8771-11.669,0.2895l-0.2845,13.4635h2.5016c0,0,2.875-4.6409,9.5223-6.8492L48.9672,23.6688z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.1193,28.3643c0,0,0.3381-3.5834-1.2846-3.5834"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.0168,37.2787h2.6602c0,0,2.7485-4.8599,9.3606-6.7061"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.044,38.0151v2.12c0,0.55-0.4501,1-1,1h-1"
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
      d: "M52.9805,35.59c-6.0654,0-11,4.9346-11,11s4.9346,11,11,11s11-4.9346,11-11S59.0459,35.59,52.9805,35.59z M56.9805,46.59 c0,2.2061-1.7939,4-4,4s-4-1.7939-4-4s1.7939-4,4-4S56.9805,44.3839,56.9805,46.59z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15.02,45.59c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6s6-2.6914,6-6S18.3286,45.59,15.02,45.59z M15.02,53.59 c-1.103,0-2-0.8975-2-2s0.897-2,2-2s2,0.8975,2,2S16.123,53.59,15.02,53.59z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "26.682,32.2999 26.682,28.3643 29.8486,28.3643 29.8486,31.8513"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.5,52.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.682,32.2999c-5.1431,0.7998-11.7743,2.1973-14.4066,4.3368c-0.2664,0.2165-0.4129,0.5443-0.3812,0.8861l0.6871,6.5445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8486,31.8513C28.9085,31.972,27.8325,32.121,26.682,32.3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.8185,30.467c-0.3456-3.6951-0.8852-8.0548-1.7199-10.1861c0,0-10.8333-1.1666-17.1666,0.5834l-0.5,10.5833 c0,0-1.4378,0.1282-3.5834,0.4037"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "22.5153",
      x2: "40.3521",
      y1: "50.5309",
      y2: "50.5309",
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
      d: "M40.3521,43.4723c1.537-6.9462,8.414-11.3309,15.36-9.7939c2.792,0.6178,5.1703,2.0984,6.9165,4.0996"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.9672,23.6688c0,0-5.919-0.8771-11.669,0.2895l-0.2845,13.4635h2.5016c0,0,2.875-4.6409,9.5223-6.8492L48.9672,23.6688z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.1193,28.3643c0,0,0.3381-3.5834-1.2846-3.5834"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.0168,37.2787h2.6602c0,0,2.7485-4.8599,9.3606-6.7061"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.044,38.0151v2.12c0,0.55-0.4501,1-1,1h-1"
    })));
  }
};

export default Tractor;