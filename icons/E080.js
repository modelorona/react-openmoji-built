import React from 'react';

const AssemblyPoint = ({
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
      fill: "#d22f27",
      d: "M46.289,21.3899c0-6.0159-4.6073-10.9096-10.271-10.9096S25.747,15.374,25.747,21.3926 c0.0018,0.3005,0.1445,7.4974,8.3708,20.1793c0.53,0.8288,1.1424,1.2493,1.8196,1.2493c1.1879,0,1.9983-1.3088,2.0771-1.442 C46.2934,28.6902,46.2934,21.6764,46.289,21.3899z M36.0181,25.784c-2.5222,0-4.5742-2.052-4.5742-4.5742 s2.052-4.5742,4.5742-4.5742s4.5742,2.052,4.5742,4.5742S38.5403,25.784,36.0181,25.784z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M46.289,21.3899c0-6.0159-4.6073-10.9096-10.271-10.9096c-0.8622,0-1.6952,0.1258-2.4958,0.3393 c5.4217,0.2902,9.7514,5.0521,9.7514,10.8817c0.0044,0.2865,0.0044,7.3003-8.2745,19.9892 c-0.0296,0.0499-0.1621,0.2652-0.3788,0.5149c0.4037,0.406,0.8442,0.6157,1.3171,0.6157c1.1879,0,1.9983-1.3088,2.0771-1.442 C46.2934,28.6902,46.2934,21.6764,46.289,21.3899z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M11.3402,60.6539v-2.285c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225 c1.934,0.0002,4.1979-0.8073,6.1107-2.4225c3.23,0,5.1402,2.22,5.1402,5.45v2.285H11.3402z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M38.142,60.6539v-2.285c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225 c1.934,0.0002,4.1979-0.8073,6.1107-2.4225c3.23,0,5.1402,2.22,5.1402,5.45v2.285H38.142z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "22.5904",
      cy: "45.397",
      r: "5",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.3921",
      cy: "45.397",
      r: "5",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11.3402,60.3239v-1.955 c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225c1.934,0.0002,4.1979-0.8073,6.1107-2.4225 c3.23,0,5.1402,2.22,5.1402,5.45v1.955"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.142,60.3239v-1.955 c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225c1.934,0.0002,4.1979-0.8073,6.1107-2.4225 c3.23,0,5.1402,2.22,5.1402,5.45v1.955"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9374,42.8211 c-0.6772,0-1.2896-0.4205-1.8196-1.2493c-8.2263-12.6819-8.3691-19.8788-8.3708-20.1793c0-6.0186,4.6072-10.9123,10.271-10.9123 s10.271,4.8937,10.271,10.9096c0.0044,0.2865,0.0044,7.3003-8.2744,19.9892C37.9357,41.5123,37.1253,42.8211,35.9374,42.8211z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0181,25.784 c-2.5222,0-4.5742-2.052-4.5742-4.5742s2.052-4.5742,4.5742-4.5742s4.5742,2.052,4.5742,4.5742S38.5403,25.784,36.0181,25.784z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.5904",
      cy: "45.397",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.3921",
      cy: "45.397",
      r: "5",
      fill: "none",
      stroke: "#000000",
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11.3402,60.3239v-1.955 c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225c1.934,0.0002,4.1979-0.8073,6.1107-2.4225 c3.23,0,5.1402,2.22,5.1402,5.45v1.955"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.142,60.3239v-1.955 c0-3.23,1.9102-5.45,5.1402-5.45c1.9123,1.6148,4.1757,2.4223,6.1092,2.4225c1.934,0.0002,4.1979-0.8073,6.1107-2.4225 c3.23,0,5.1402,2.22,5.1402,5.45v1.955"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9374,42.8211 c-0.6772,0-1.2896-0.4205-1.8196-1.2493c-8.2263-12.6819-8.3691-19.8788-8.3708-20.1793c0-6.0186,4.6072-10.9123,10.271-10.9123 s10.271,4.8937,10.271,10.9096c0.0044,0.2865,0.0044,7.3003-8.2744,19.9892C37.9357,41.5123,37.1253,42.8211,35.9374,42.8211z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0181,25.784 c-2.5222,0-4.5742-2.052-4.5742-4.5742s2.052-4.5742,4.5742-4.5742s4.5742,2.052,4.5742,4.5742S38.5403,25.784,36.0181,25.784z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.5904",
      cy: "45.397",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "49.3921",
      cy: "45.397",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default AssemblyPoint;