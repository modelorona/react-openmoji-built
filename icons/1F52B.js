import React from 'react';

const Pistol = ({
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
      fill: "#A57939",
      stroke: "none",
      d: "M50.9266,31.8935c0.3893,0.0047,0.5734,0.5143,0.5734,0.9036v2.294c0,1.6823,1.2468,2.2059,3,3.0462 c0,0,0.5946,0.28,0.8992,0.478C57.6588,40.0837,60.5,48.0256,60.5,50.8295c0,2.8039-2.2386,5.0769-5,5.0769h-3.0361 c-2.7614,0-5-2.2386-5-5l0.0361-3.5c0.0517-1.6036-0.0871-3.5828-1.2586-4.7544c-0.6903-0.6903-1.628-1.0169-2.5215-0.929 c-1.1133,0.1095-2.1593-0.5902-2.2896-1.7013c-0.0026-0.0223-0.0052-0.0448-0.0077-0.0673 c-0.1849-1.668,0.2687-3.3442,1.2016-4.7392c0.8667-1.2961,2.2772-2.7841,4.3758-3.3088 C47,31.9064,49.8532,31.8805,50.9266,31.8935z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M35.3606,23.1192c-5.3-0.0464-10.5876,0.5232-15.7925,1.5242L13,25.9065v6h11.0392 c0.6381,0,1.2739,0.0782,1.8929,0.233c1.9108,0.4777,3.4451,1.8984,4.0679,3.7668v0.0001c1,4,4,4,6,4h2 c0-6.7261,4.4351-12.0458,13.4351-12.0458v-1.9542v-0.0001C46.2164,23.8079,40.9153,23.1678,35.3606,23.1192z M36,36.9065h-1 c-1,0-2.5,0-3-5h5C36,33.9065,36,35.1145,36,36.9065z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M50.6496,25.0054l1.0337-3.2631c0.2189-0.691,0.2181-2.1318,0.8587-2.4665l1.142-0.5894 c0.7174-0.3748,1.211-0.9366,0.4416-1.1803l-2.0097-0.6366c-0.4696-0.1488-0.971-0.1664-1.4506-0.051l-4.4105,1.0612 l-1.7418,5.1819"
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
      d: "M31,39.6916"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38,39.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38,40.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.4918,22.1986l0.7023-2.2172c0.1487-0.4695,0.4779-0.8607,0.915-1.0875l1.0989-0.5702c0.4895-0.254,0.4276-0.973-0.0982-1.1395 l-1.6256-0.5149c-0.3208-0.1016-0.6633-0.1142-0.9907-0.0362l-3.0108,0.7166l-1.1838,3.5208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30,35.9064c1,4,4,4,6,4h2c0-6.7261,4.4351-12.0457,13.4351-12.0457v-1.9543l0,0c-5.2187-2.0984-10.5197-2.7386-16.0745-2.7872 c-5.3001-0.0464-10.5876,0.5232-15.7925,1.5241L13,25.9064v6l0,0h11.0392c0.6381,0,1.2739,0.0783,1.893,0.233h0 C27.8429,32.6172,29.3772,34.0379,30,35.9064L30,35.9064z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37,31.9064c-1,2-1,3.208-1,5h-1c-1,0-2.5,0-3-5H37z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9266,31.8935c0.3893,0.0047,0.5734,0.5143,0.5734,0.9036v2.294c0,1.6823,1.2468,2.2059,3,3.0462c0,0,0.5946,0.28,0.8992,0.478 C57.6588,40.0837,60.5,48.0256,60.5,50.8295c0,2.8039-2.2386,5.0769-5,5.0769h-3.0361c-2.7614,0-5-2.2386-5-5l0.0361-3.5 c0.0517-1.6036-0.0871-3.5828-1.2586-4.7544c-0.6903-0.6903-1.628-1.0169-2.5215-0.929c-1.1133,0.1095-2.1593-0.5902-2.2896-1.7013 c-0.0026-0.0223-0.0052-0.0448-0.0077-0.0673c-0.1849-1.668,0.2687-3.3442,1.2016-4.7392 c0.8667-1.2961,2.2772-2.7841,4.3758-3.3088C47,31.9064,49.8532,31.8805,50.9266,31.8935z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,25.9064"
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
      d: "M31,39.6916"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38,39.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38,40.9064"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.4918,22.1986l0.7023-2.2172c0.1487-0.4695,0.4779-0.8607,0.915-1.0875l1.0989-0.5702c0.4895-0.254,0.4276-0.973-0.0982-1.1395 l-1.6256-0.5149c-0.3208-0.1016-0.6633-0.1142-0.9907-0.0362l-3.0108,0.7166l-1.1838,3.5208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30,35.9064c1,4,4,4,6,4h2c0-6.7261,4.4351-12.0457,13.4351-12.0457v-1.9543l0,0c-5.2187-2.0984-10.5197-2.7386-16.0745-2.7872 c-5.3001-0.0464-10.5876,0.5232-15.7925,1.5241L13,25.9064v6l0,0h11.0392c0.6381,0,1.2739,0.0783,1.893,0.233h0 C27.8429,32.6172,29.3772,34.0379,30,35.9064L30,35.9064z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37,31.9064c-1,2-1,3.208-1,5h-1c-1,0-2.5,0-3-5H37z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9266,31.8935c0.3893,0.0047,0.5734,0.5143,0.5734,0.9036v2.294c0,1.6823,1.2468,2.2059,3,3.0462c0,0,0.5946,0.28,0.8992,0.478 C57.6588,40.0837,60.5,48.0256,60.5,50.8295c0,2.8039-2.2386,5.0769-5,5.0769h-3.0361c-2.7614,0-5-2.2386-5-5l0.0361-3.5 c0.0517-1.6036-0.0871-3.5828-1.2586-4.7544c-0.6903-0.6903-1.628-1.0169-2.5215-0.929c-1.1133,0.1095-2.1593-0.5902-2.2896-1.7013 c-0.0026-0.0223-0.0052-0.0448-0.0077-0.0673c-0.1849-1.668,0.2687-3.3442,1.2016-4.7392 c0.8667-1.2961,2.2772-2.7841,4.3758-3.3088C47,31.9064,49.8532,31.8805,50.9266,31.8935z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,25.9064"
    })));
  }
};

export default Pistol;