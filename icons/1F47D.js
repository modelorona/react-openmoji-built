import React from 'react';

const Alien = ({
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
      fill: "#D0CFCE",
      d: "M56.7269,32.3778c0,5.4783-1.6721,11.0506-4.2,15.9134c-0.6345,1.2206-1.8548,1.5903-2.5843,2.7088 c-0.608,0.9322-0.7125,2.6309-1.37,3.476C44.5793,59.6092,39.811,63,35.9426,63c-3.8271,0-8.5351-3.3188-12.5019-8.3603 C22.759,53.7734,23.5723,51.96,22.9426,51c-0.5315-0.8103-2.5147-0.755-2.9983-1.6214c-2.8522-5.1095-4.786-11.1095-4.786-17.0008 C15.1583,17.417,25.5504,10,35.9426,10S56.7269,17.417,56.7269,32.3778z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M36.9426,63c6-5,11.9267-48.0536,12-49c2.2165,3.118,7.0271,9.8719,7.6517,13.9785 c1.1644,7.6568-1.9952,13.8117-5.001,20.4819C45.9426,61,36.9426,63,36.9426,63"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M22.5696,42.348c1.9926,3.7,5.3442,5.7121,7.4861,4.4943c2.1418-1.2178,2.2628-5.2045,0.2702-8.9045 s-5.3442-5.7121-7.4861-4.4943S20.577,38.6481,22.5696,42.348z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M49.0317,42.348c-1.9926,3.7-5.3442,5.7121-7.4861,4.4943c-2.1418-1.2178-2.2628-5.2045-0.2702-8.9045 s5.3442-5.7121,7.4861-4.4943C50.9033,34.6614,51.0243,38.6481,49.0317,42.348z"
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
      d: "M30.7465,53.6689c0.4295,0.4051,2.3337,2.11,5.1016,1.9273c2.2456-0.1483,3.7515-1.4526,4.2513-1.9273"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5696,42.348 c1.9926,3.7,5.3442,5.7121,7.4861,4.4943c2.1418-1.2178,2.2628-5.2045,0.2702-8.9045s-5.3442-5.7121-7.4861-4.4943 S20.577,38.6481,22.5696,42.348z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9426,63c-10,0-13.5098-11.7778-13.5098-11.7778s-7.2745-5.8889-7.2745-18.8444C15.1583,17.417,25.5504,10,35.9426,10 s20.7843,7.417,20.7843,22.3778c0,12.9556-7.0698,18.3804-7.2745,18.8444C45.2955,60.6444,40.3213,63,35.9426,63z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.0317,42.348 c-1.9926,3.7-5.3442,5.7121-7.4861,4.4943c-2.1418-1.2178-2.2628-5.2045-0.2702-8.9045s5.3442-5.7121,7.4861-4.4943 C50.9033,34.6614,51.0243,38.6481,49.0317,42.348z"
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
      d: "M30.7465,53.6689c0.4295,0.4051,2.3337,2.11,5.1016,1.9273c2.2456-0.1483,3.7515-1.4526,4.2513-1.9273"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.5696,42.348 c1.9926,3.7,5.3442,5.7121,7.4861,4.4943c2.1418-1.2178,2.2628-5.2045,0.2702-8.9045s-5.3442-5.7121-7.4861-4.4943 S20.577,38.6481,22.5696,42.348z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9426,63c-10,0-13.5098-11.7778-13.5098-11.7778s-7.2745-5.8889-7.2745-18.8444C15.1583,17.417,25.5504,10,35.9426,10 s20.7843,7.417,20.7843,22.3778c0,12.9556-7.0698,18.3804-7.2745,18.8444C45.2955,60.6444,40.3213,63,35.9426,63z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.0317,42.348 c-1.9926,3.7-5.3442,5.7121-7.4861,4.4943c-2.1418-1.2178-2.2628-5.2045-0.2702-8.9045s5.3442-5.7121,7.4861-4.4943 C50.9033,34.6614,51.0243,38.6481,49.0317,42.348z"
    })));
  }
};

export default Alien;