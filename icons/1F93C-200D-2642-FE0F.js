import React from 'react';

const MenWrestling = ({
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
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "37.2383",
      cy: "13.5093",
      r: "3",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.5654",
      cy: "15.4607",
      r: "3.8131",
      fill: "#fcea2b"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M46.6308,21.18,55.21,30.7131v3.8131l-5.72,4.7663-4.7664,6.6729L42.0551,57.4047H38.814l1.1439-14.2991,5.72-10.486-7.9564-7.4957a5.4219,5.4219,0,0,0-2.53-1.9416c-1.7866-.61-3.1994.3813-4.7664.3813A17.6181,17.6181,0,0,1,22.99,20.8944s-1.5252-1.6206-.0953-2.9551h0s1.9065,1.1439,3.3364,1.8112a14.6531,14.6531,0,0,0,9.2468.6673s6.1962-2.1926,7.9121-1.3346A20.2785,20.2785,0,0,1,46.6308,21.18Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M55.21,33.5729l.9533,10.486,4.0037,11.4392h-2.86l-5.91-10.4859-.9533-5.72"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M24.0383,27.0907,19.0813,32.62l3.8131,11.4393-.7626,13.3458H18.986l-.7626-12.3925-2.9552-5.72L9.4533,34.5262V30.7131L18.128,21.18A13.3425,13.3425,0,0,1,20.54,18.1949c1.4035-.5458,2.0481-1.0561,3.4443-.8366.7626.286,3.2,3.3454,3.2,5.6333a4.2756,4.2756,0,0,1-.4766,1.8112c0,.0953,2.86,2.0972,4.099,1.1439,1.7159-1.3345,3.4318-5.3383,4.5757-5.3383,1.3346,0-.9532,5.72-2.86,7.2449-3.05,2.3831-7.2448-.7626-7.7215-.1907"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M10.4065,35.4794v9.5328L8.5,55.4981h2.86l2.86-9.5327.9533-5.72"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6654,17.6794a2.7923,2.7923,0,0,0,.9-2.2,3,3,0,0,0-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.0514,24.04l6.3869,7.15a3.1057,3.1057,0,0,1,.3813,3.1458L40.9112,41.39a12.4122,12.4122,0,0,0-1.0486,3.5271l-.8579,10.486a1.6146,1.6146,0,0,0,1.43,1.9065,2.5371,2.5371,0,0,0,2.0972-1.8112l1.8112-7.7215a13.9406,13.9406,0,0,1,1.5252-3.4317l2.5739-3.5271a17.6954,17.6954,0,0,1,2.5738-2.7645L53.78,35.7654A4.831,4.831,0,0,0,55.21,32.62a5.9587,5.9587,0,0,0-1.2393-3.3364l-7.34-8.1028"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.21,33.5729l.7626,8.5794a25.7345,25.7345,0,0,0,.7626,3.7178L59.5,53.6869c.3813.9533,0,1.8112-.7626,1.8112a3.5213,3.5213,0,0,1-2.3832-1.62l-4.0037-7.2449a15.5126,15.5126,0,0,1-1.2393-3.5271l-.6673-3.8131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.6308,21.18c-1.9065-1.9066-4.099-2.4785-5.72-1.9066A41.9524,41.9524,0,0,1,31.3785,21.18a15.2137,15.2137,0,0,1-7.6262-2.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.0383,27.0907,20.3206,31.285a3.8666,3.8666,0,0,0-.6673,3.2412l2.5738,7.8168a12.0668,12.0668,0,0,1,.4766,3.7177l-.4766,9.5328A1.9587,1.9587,0,0,1,20.5112,57.5a1.8844,1.8844,0,0,1-1.7159-1.9065l-.5719-8.5795a11.977,11.977,0,0,0-.9533-3.6224l-1.1439-2.3832a11.68,11.68,0,0,0-2.2879-2.9551l-2.7645-2.2879a4.831,4.831,0,0,1-1.43-3.1458,5.9587,5.9587,0,0,1,1.2393-3.3364l7.34-8.1028"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.4065,35.4794v7.6262a25.832,25.832,0,0,1-.3813,3.8131L8.786,53.5916c-.1907,1.0486.286,1.9065,1.0486,1.9065a2.5458,2.5458,0,0,0,2.0018-1.8112l1.8113-5.91c.2859-1.0486.6673-2.6691.8579-3.7177l.6673-3.8131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.9879,19.0832A7.7543,7.7543,0,0,0,18.2234,21.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8944,22.1336s4.671,3.8131,6.5776,3.8131c.9532,0,2.86,0,3.813-4.7663"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0981",
      cy: "13.6495",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.6654,17.6794a2.7923,2.7923,0,0,0,.9-2.2,3,3,0,0,0-6,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.0514,24.04l6.3869,7.15a3.1057,3.1057,0,0,1,.3813,3.1458L40.9112,41.39a12.4122,12.4122,0,0,0-1.0486,3.5271l-.8579,10.486a1.6146,1.6146,0,0,0,1.43,1.9065,2.5371,2.5371,0,0,0,2.0972-1.8112l1.8112-7.7215a13.9406,13.9406,0,0,1,1.5252-3.4317l2.5739-3.5271a17.6954,17.6954,0,0,1,2.5738-2.7645L53.78,35.7654A4.831,4.831,0,0,0,55.21,32.62a5.9587,5.9587,0,0,0-1.2393-3.3364l-7.34-8.1028"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.21,33.5729l.7626,8.5794a25.7345,25.7345,0,0,0,.7626,3.7178L59.5,53.6869c.3813.9533,0,1.8112-.7626,1.8112a3.5213,3.5213,0,0,1-2.3832-1.62l-4.0037-7.2449a15.5126,15.5126,0,0,1-1.2393-3.5271l-.6673-3.8131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.6308,21.18c-1.9065-1.9066-4.099-2.4785-5.72-1.9066A41.9524,41.9524,0,0,1,31.3785,21.18a15.2137,15.2137,0,0,1-7.6262-2.86"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24.0383,27.0907,20.3206,31.285a3.8666,3.8666,0,0,0-.6673,3.2412l2.5738,7.8168a12.0668,12.0668,0,0,1,.4766,3.7177l-.4766,9.5328A1.9587,1.9587,0,0,1,20.5112,57.5a1.8844,1.8844,0,0,1-1.7159-1.9065l-.5719-8.5795a11.977,11.977,0,0,0-.9533-3.6224l-1.1439-2.3832a11.68,11.68,0,0,0-2.2879-2.9551l-2.7645-2.2879a4.831,4.831,0,0,1-1.43-3.1458,5.9587,5.9587,0,0,1,1.2393-3.3364l7.34-8.1028"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M10.4065,35.4794v7.6262a25.832,25.832,0,0,1-.3813,3.8131L8.786,53.5916c-.1907,1.0486.286,1.9065,1.0486,1.9065a2.5458,2.5458,0,0,0,2.0018-1.8112l1.8113-5.91c.2859-1.0486.6673-2.6691.8579-3.7177l.6673-3.8131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.9879,19.0832A7.7543,7.7543,0,0,0,18.2234,21.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.8944,22.1336s4.671,3.8131,6.5776,3.8131c.9532,0,2.86,0,3.813-4.7663"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.0981",
      cy: "13.6495",
      r: "3",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default MenWrestling;