import React from 'react';

const Sponge = ({
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
      fill: "#61b2e4",
      d: "M38.5633,46.7536a4.5586,4.5586,0,0,1-4.56,4.56,4.2818,4.2818,0,0,1-1.71-.342,4.5462,4.5462,0,0,1,0-8.4358,4.28,4.28,0,0,1,1.71-.342A4.5586,4.5586,0,0,1,38.5633,46.7536Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33.4334",
      cy: "46.7536",
      rx: "2.8499",
      ry: "4.2179",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M58.8535,37.7725a8.8632,8.8632,0,0,1-9.4352,7.45c-2.7163-.2206-5.425-.5738-8.145-.7025-4.3592-.4814-7.84-4.505-11.2786.0525-1.8735.2056-5.614.5481-7.4948.6679a8.96,8.96,0,0,1-9.332-8.57q-.0988-3.7179,0-7.44a8.9847,8.9847,0,0,1,9.8628-8.56,112.1762,112.1762,0,0,0,16.93.79c2.6381-.1114,5.2733-.39,7.898-.6945a9.9786,9.9786,0,0,1,7.132,1.3608,8.7733,8.7733,0,0,1,4.0135,7.2948C59.0422,30.61,59.0684,36.206,58.8535,37.7725Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "14.5061",
      cy: "39.0086",
      rx: "3.6906",
      ry: "5.13",
      transform: "translate(-5.9767 2.7794) rotate(-9.0838)",
      fill: "#92d3f5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M27.3491,42.6051a5.702,5.702,0,0,1-4.0867,6.9481,6.0834,6.0834,0,0,1-1.7182.1865A5.716,5.716,0,0,1,18.8086,39.19a6.0835,6.0835,0,0,1,1.5923-.672A5.7021,5.7021,0,0,1,27.3491,42.6051Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "19.5282",
      cy: "44.7407",
      rx: "4.0423",
      ry: "5.6446",
      transform: "translate(-21.7278 18.6443) rotate(-34.1047)",
      fill: "#92d3f5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "34.0034",
      cy: "46.7536",
      r: "4.5599",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.4722,44.9147c.5586-.057,1.1058-.114,1.6643-.171.6156-.0684,1.2312-.1254,1.8582-.171M13.123,34.6435c-.0228-1.8012,0-3.6023.0456-5.4149a8.9939,8.9939,0,0,1,9.8608-8.5612,112.12,112.12,0,0,0,16.9287.798c2.6448-.114,5.2781-.399,7.9-.6954a9.9728,9.9728,0,0,1,7.1362,1.3565,8.79,8.79,0,0,1,4.0128,7.2959c.0342,1.1856.057,6.7829-.1482,8.3446A8.8782,8.8782,0,0,1,49.42,45.2225c-2.7131-.2166-5.4263-.57-8.1508-.7068-1.1172-.057-2.2344-.0912-3.3515-.114"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.1242",
      cy: "33.2596",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.6059",
      cy: "34.37",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.4795",
      cy: "27.6923",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.523",
      cy: "39.3041",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.3871",
      cy: "28.94",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.5865",
      cy: "27.6923",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.4253",
      cy: "37.4517",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.4032,38.6779a5.6221,5.6221,0,0,0-.6279.2322,4.5039,4.5039,0,0,0-.0337-.5787,4.56,4.56,0,1,0-3.7829,5.2226c.08-.0127.1506-.0439.2285-.0605a5.6937,5.6937,0,1,0,4.216-4.8156Z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "34.0034",
      cy: "46.7536",
      r: "4.5599",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.4722,44.9147c.5586-.057,1.1058-.114,1.6643-.171.6156-.0684,1.2312-.1254,1.8582-.171M13.123,34.6435c-.0228-1.8012,0-3.6023.0456-5.4149a8.9939,8.9939,0,0,1,9.8608-8.5612,112.12,112.12,0,0,0,16.9287.798c2.6448-.114,5.2781-.399,7.9-.6954a9.9728,9.9728,0,0,1,7.1362,1.3565,8.79,8.79,0,0,1,4.0128,7.2959c.0342,1.1856.057,6.7829-.1482,8.3446A8.8782,8.8782,0,0,1,49.42,45.2225c-2.7131-.2166-5.4263-.57-8.1508-.7068-1.1172-.057-2.2344-.0912-3.3515-.114"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.1242",
      cy: "33.2596",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.6059",
      cy: "34.37",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.4795",
      cy: "27.6923",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "46.523",
      cy: "39.3041",
      r: "1.4316"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.3871",
      cy: "28.94",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21.5865",
      cy: "27.6923",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.4253",
      cy: "37.4517",
      r: "1.9458",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.4032,38.6779a5.6221,5.6221,0,0,0-.6279.2322,4.5039,4.5039,0,0,0-.0337-.5787,4.56,4.56,0,1,0-3.7829,5.2226c.08-.0127.1506-.0439.2285-.0605a5.6937,5.6937,0,1,0,4.216-4.8156Z"
    })));
  }
};

export default Sponge;