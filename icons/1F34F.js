import React from 'react';

const GreenApple = ({
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
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.9805,22.748c3.2532-1.7664,6.7524-2.0682,9.8603-0.5143c6.7971,3.4098,9.1671,14.3768,5.3102,24.4942 c-3.8569,10.1286-12.4875,15.573-19.2735,12.1633c-0.4877-0.2459-0.953-0.5297-1.3942-0.849 c-1.2846-0.9296-3.0462-0.93-4.3311-0.0009c-0.4421,0.3197-0.9078,0.6038-1.396,0.8499 c-6.7971,3.4097-15.4276-2.0347-19.2846-12.1633c-3.8569-10.1174-1.4756-21.0845,5.3102-24.4942 c3.1079-1.5539,6.5959-1.2633,9.838,0.4919c0,0,0.0559,0.0336,0.1677,0.0895c0.7379,0.3913,3.9128,1.9564,7.0878,1.9564 c3.1637,0,7.043-1.5652,7.9598-1.9564C43.9022,22.7816,43.9469,22.7592,43.9805,22.748"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M49.407,21.2342c-0.0849-0.0094-0.1605,0-0.2454,0.0094l0.0377-0.2266 C49.2749,21.0926,49.341,21.1587,49.407,21.2342z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.2186,57.324 l-0.223,0.0652c-0.6184,0.0559-1.2366,0.2328-1.7738,0.5493c-0.071,0.0373-0.1521,0.0838-0.223,0.1304 c-0.4764,0.3166-0.9731,0.5959-1.5001,0.838c-1.5103,0.6983-3.1118,1.0148-4.7336,1.0055c-0.0405,0-0.081,0-0.1216-0.0093 C27.9374,59.5399,29.9443,57.324,36.2186,57.324z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.1497,46.7238 c-3.3608,8.8364-11.2484,16.1269-21.3971,10.8559c8.2802,1.7898,28.8929-18.7766,11.6544-36.3455 c1.52-0.0283,3.021,0.2927,4.4371,1.0007C60.6414,25.643,63.011,36.6129,59.1497,46.7238z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.4527,17.2241c3.9562,1.3292,6.8444,5.8193,6.8444,5.8193s-5.0134,1.8354-8.9696,0.5062 c-3.9508-1.3274-6.8444-5.8193-6.8444-5.8193S44.5019,15.8967,48.4527,17.2241z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.4541,20.5625 35.4541,15.1018 31.1106,10.7583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.8538,24.1763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.124,24.557"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.7417,25.5951c3.6482,4.9493,4.3968,13.296,1.4093,21.1329c-3.8569,10.1286-12.4875,15.573-19.2735,12.1633 c-0.4877-0.2459-0.953-0.5297-1.3942-0.849c-1.2846-0.9296-3.0462-0.93-4.3311-0.0009c-0.4421,0.3197-0.9078,0.6038-1.396,0.8499 c-6.7971,3.4097-15.4276-2.0347-19.2846-12.1633c-3.8569-10.1174-1.4756-21.0845,5.3102-24.4942 c3.1079-1.5539,6.5959-1.2633,9.838,0.4919c0,0,0.0559,0.0336,0.1677,0.0895c0.7379,0.3913,3.9128,1.9564,7.0878,1.9564 c0.7267,0,1.4911-0.0826,2.2487-0.2145c0,0,1.1885-0.182,2.126-0.4632"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.4527,17.2241c3.9562,1.3292,6.8444,5.8193,6.8444,5.8193s-5.0134,1.8354-8.9696,0.5062 c-3.9508-1.3274-6.8444-5.8193-6.8444-5.8193S44.5019,15.8967,48.4527,17.2241z"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "35.4541,20.5625 35.4541,15.1018 31.1106,10.7583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.8538,24.1763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.124,24.557"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.7417,25.5951c3.6482,4.9493,4.3968,13.296,1.4093,21.1329c-3.8569,10.1286-12.4875,15.573-19.2735,12.1633 c-0.4877-0.2459-0.953-0.5297-1.3942-0.849c-1.2846-0.9296-3.0462-0.93-4.3311-0.0009c-0.4421,0.3197-0.9078,0.6038-1.396,0.8499 c-6.7971,3.4097-15.4276-2.0347-19.2846-12.1633c-3.8569-10.1174-1.4756-21.0845,5.3102-24.4942 c3.1079-1.5539,6.5959-1.2633,9.838,0.4919c0,0,0.0559,0.0336,0.1677,0.0895c0.7379,0.3913,3.9128,1.9564,7.0878,1.9564 c0.7267,0,1.4911-0.0826,2.2487-0.2145c0,0,1.1885-0.182,2.126-0.4632"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.4527,17.2241c3.9562,1.3292,6.8444,5.8193,6.8444,5.8193s-5.0134,1.8354-8.9696,0.5062 c-3.9508-1.3274-6.8444-5.8193-6.8444-5.8193S44.5019,15.8967,48.4527,17.2241z"
    })));
  }
};

export default GreenApple;