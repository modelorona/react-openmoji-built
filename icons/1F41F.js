import React from 'react';

const Fish = ({
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
      fill: "#92D3F5",
      stroke: "none",
      d: "M16.1101,37.4612c0,0-5.1101-4.8074-4.0659-11.0726s13.5746,1.0442,14.6188,6.2652 c0,0,3.1326-5.221,8.3536-6.2652c0,0-1.0442-5.221,0-8.3536c0,0,11.4862-4.1768,15.663,6.2652c0,0,11.4862,2.0884,12.5304,11.4862 l-3.1326,2.0884l2.741,2.3495c0,0-0.126,6.9813-11.8755,10.1474c0,0-2.3517,7.3429-10.7053,5.2545l1.0442-5.221 c0,0-6.2652,1.0442-14.6188-8.3536c0,0-3.1326,9.3978-15.663,7.3094C11.0001,49.361,10.7782,41.2244,16.1101,37.4612z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "none",
      d: "M41.7805,30.9182c0,0-7.8664,4.3435-0.8652,11.0476"
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
      d: "M16.1101,37.4612c0,0-5.1101-4.8074-4.0659-11.0726s13.5746,1.0442,14.6188,6.2652c0,0,3.1326-5.221,8.3536-6.2652 c0,0-1.0442-5.221,0-8.3536c0,0,11.4862-4.1768,15.663,6.2652c0,0,11.4862,2.0884,12.5304,11.4862l-3.1326,2.0884l2.741,2.3495 c0,0-0.126,6.9813-11.8755,10.1474c0,0-2.3517,7.3429-10.7053,5.2545l1.0442-5.221c0,0-6.2652,1.0442-14.6188-8.3536 c0,0-3.1326,9.3978-15.663,7.3094C11.0001,49.361,10.7782,41.2244,16.1101,37.4612z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,31c0,0-6,4-1,11"
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
      d: "M16.1101,37.4612c0,0-5.1101-4.8074-4.0659-11.0726s13.5746,1.0442,14.6188,6.2652c0,0,3.1326-5.221,8.3536-6.2652 c0,0-1.0442-5.221,0-8.3536c0,0,11.4862-4.1768,15.663,6.2652c0,0,11.4862,2.0884,12.5304,11.4862l-3.1326,2.0884l2.741,2.3495 c0,0-0.126,6.9813-11.8755,10.1474c0,0-2.3517,7.3429-10.7053,5.2545l1.0442-5.221c0,0-6.2652,1.0442-14.6188-8.3536 c0,0-3.1326,9.3978-15.663,7.3094C11.0001,49.361,10.7782,41.2244,16.1101,37.4612z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,31c0,0-6,4-1,11"
    })));
  }
};

export default Fish;