import React from 'react';

const Zombie = ({
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
      cx: "36.9435",
      cy: "28.0392",
      r: "10",
      fill: "#e67a94"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M35.1773,17.1567c-5.8765.5287-10.5159,6.6407-10.5159,14.1212,0,7.8277,5.0764,14.1733,11.3386,14.1733s11.3387-6.3456,11.3387-14.1733a17.2594,17.2594,0,0,0-.7674-5.0941,9.9175,9.9175,0,0,1-11.394-9.0271Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "M54.9375,60.9094s2-12.6032-10-12.6032c-3.1918,2.128-5.9264,3.5985-9,3.5922h.125c-3.0736.0063-5.8081-1.4642-9-3.5922-12,0-10,12.6032-10,12.6032"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M46.354,48.2762l-.9075.8851a15.6367,15.6367,0,0,1-5.3451,5.81l-2.0029,5.7447-2-4.5853c-3.337.02-6.674-2.2824-9.3481-6.9693L26.2,48.25C15.27,48.9272,17.1609,60.937,17.1609,60.937l3.1531-.007,2.0839-4.7825,1.5287,4.8108,31.18-.05"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M32,38.2987s8-3.11,8,0C40,44.5411,32,38.2987,32,38.2987Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M42.5077,52.7252c6.4062,1.661,6.5337,5.0343,7.1339,8.1842h5.1128s1.8925-11.904-9.0495-12.5747q-.46-.0282-.9505-.0285"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M30,29.9325v2.041a2.1088,2.1088,0,0,0,1.7064,2.1339A2.0016,2.0016,0,0,0,34,32.1283V29.9325a.0571.0571,0,0,0-.0571-.0571H30.0573A.057.057,0,0,0,30,29.9325Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M38,29.8754v2.2529a2,2,0,0,0,4,0V29.8754Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M42,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M34,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1773,17.1567c-5.8765.5287-10.5159,6.6407-10.5159,14.1212,0,7.8277,5.0764,14.1733,11.3386,14.1733s11.3387-6.3456,11.3387-14.1733a17.2594,17.2594,0,0,0-.7674-5.0941,9.9175,9.9175,0,0,1-11.394-9.0271Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.3836,25.2642a2,2,0,0,0-1.3286-2.18,1.9753,1.9753,0,0,0,.3775-.8915,1.9931,1.9931,0,0,0-2.79-2.1141,1.9923,1.9923,0,0,0-3.3909-1.3058,1.9922,1.9922,0,0,0-2.7713-.4814"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1773,17.1567q.0408.48.1262.9464a9.9978,9.9978,0,0,0,9.4213,8.1874q.2037.0082.4093.0082a10.0162,10.0162,0,0,0,1.4372-.1149"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,38.2987s8-3.11,8,0C40,44.5411,32,38.2987,32,38.2987Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.4332",
      x2: "35.134",
      y1: "40.0153",
      y2: "40.0153",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.9435",
      x2: "36.9435",
      y1: "40.0153",
      y2: "37.0896",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.6519,48.9249c2.6741,4.6869,6.0111,6.99,9.3481,6.9693l2,4.0183,2.0029-5.1777a15.6376,15.6376,0,0,0,5.3451-5.81"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.5496",
      x2: "42.7939",
      y1: "57.2401",
      y2: "59.9029",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "20.216 59.871 22.3 56.308 23.828 59.871"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M55,60.9171a1,1,0,0,1-1-1v-3c0-4.4517-4.4961-7.81-8.6518-7.9922-6.2051,5.0117-12.4912,5.0117-18.6963,0C22.4961,49.1066,18,52.4654,18,56.9171v3a1,1,0,1,1-2,0v-3c0-5.3247,5.14-9.9976,11-10h0a.9994.9994,0,0,1,.64.2319c5.625,4.6875,11.0947,4.6875,16.72,0a.9994.9994,0,0,1,.64-.2319h.0005C50.86,46.92,56,51.5924,56,56.9171v3A1,1,0,0,1,55,60.9171Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      d: "M42,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      d: "M34,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
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
      d: "M35.1773,17.1567c-5.8765.5287-10.5159,6.6407-10.5159,14.1212,0,7.8277,5.0764,14.1733,11.3386,14.1733s11.3387-6.3456,11.3387-14.1733a17.2594,17.2594,0,0,0-.7674-5.0941,9.9175,9.9175,0,0,1-11.394-9.0271Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.3836,25.2642a2,2,0,0,0-1.3286-2.18,1.9753,1.9753,0,0,0,.3775-.8915,1.9931,1.9931,0,0,0-2.79-2.1141,1.9923,1.9923,0,0,0-3.3909-1.3058,1.9922,1.9922,0,0,0-2.7713-.4814"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1773,17.1567q.0408.48.1262.9464a9.9978,9.9978,0,0,0,9.4213,8.1874q.2037.0082.4093.0082a10.0162,10.0162,0,0,0,1.4372-.1149"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32,38.2987s8-3.11,8,0C40,44.5411,32,38.2987,32,38.2987Z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.4332",
      x2: "35.134",
      y1: "40.0153",
      y2: "40.0153",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.9435",
      x2: "36.9435",
      y1: "40.0153",
      y2: "37.0896",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.6519,48.9249c2.6741,4.6869,6.0111,6.99,9.3481,6.9693l2,4.0183,2.0029-5.1777a15.6376,15.6376,0,0,0,5.3451-5.81"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "43.5496",
      x2: "42.7939",
      y1: "57.2401",
      y2: "59.9029",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "20.216 59.871 22.3 56.308 23.828 59.871"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M55,60.9171a1,1,0,0,1-1-1v-3c0-4.4517-4.4961-7.81-8.6518-7.9922-6.2051,5.0117-12.4912,5.0117-18.6963,0C22.4961,49.1066,18,52.4654,18,56.9171v3a1,1,0,1,1-2,0v-3c0-5.3247,5.14-9.9976,11-10h0a.9994.9994,0,0,1,.64.2319c5.625,4.6875,11.0947,4.6875,16.72,0a.9994.9994,0,0,1,.64-.2319h.0005C50.86,46.92,56,51.5924,56,56.9171v3A1,1,0,0,1,55,60.9171Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      d: "M42,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      d: "M34,29.9171a2,2,0,1,1-2-2,2.0007,2.0007,0,0,1,2,2"
    })));
  }
};

export default Zombie;