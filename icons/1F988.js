import React from 'react';

const Shark = ({
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
      fill: "#9B9B9A",
      stroke: "none",
      d: "M18.25,40.9655c0,0-3.25,5.8621-7.25,8.9655c0,0,2-4.1379,1-8.2759s-8-9.3103-8-9.3103s10,0,14,5.1724 c0,0,17,1.0345,21-6.2069c0,0,1-5.1724-3-9.3103c0,0,5,0,10,4.1379c4.8462,4.0107,3.1164,4.134,9.3791,7.9055 c0.4091,0.2464,0.8493,0.443,1.3017,0.5871C59.7607,35.6108,69,38.5517,69,38.5517s0,4.1379-14,6.2069c0,0-1,5.1724-5,7.2414 c0,0,2-6.2069-1-6.2069c0,0-2,0-9-1.0345"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M37.5053,42.3136c0,0-3.1325,1.9058-3.679,4.4556c0,0-2.8661-3.0198-4.9723-2.5598l4.7588-3.4697"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M44.5556,37c0,0,4.25,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M46.5556,37c0,0,4.25,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M48.5556,37c0,0,4.25,2,0,5"
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
      d: "M40,44c7,1,9,1,9,1c3,0,1,6,1,6c4-2,5-7,5-7c14-2,14-6,14-6s-9.2393-2.8429-12.3191-3.7905 c-0.4525-0.1392-0.8926-0.3293-1.3017-0.5675C49.1164,29.9962,50.8462,29.877,46,26c-5-4-10-4-10-4c4,4,3,9,3,9c-4,7-21,6-21,6 c-4-5-14-5-14-5s7,5,8,9s-1,8-1,8c4-3,7.25-8.6667,7.25-8.6667L27,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37,43c0,0-2.9279,1.6684-3.4781,3.8358c0,0-2.594-2.5042-4.548-2.0775l4.4581-3.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M45,37c0,0,2,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M47,37c0,0,2,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M49,37c0,0,2,2,0,5"
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
      d: "M40,44c7,1,9,1,9,1c3,0,1,6,1,6c4-2,5-7,5-7c14-2,14-6,14-6s-9.2393-2.8429-12.3191-3.7905 c-0.4525-0.1392-0.8926-0.3293-1.3017-0.5675C49.1164,29.9962,50.8462,29.877,46,26c-5-4-10-4-10-4c4,4,3,9,3,9c-4,7-21,6-21,6 c-4-5-14-5-14-5s7,5,8,9s-1,8-1,8c4-3,7.25-8.6667,7.25-8.6667L27,42"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37,43c0,0-2.9279,1.6684-3.4781,3.8358c0,0-2.594-2.5042-4.548-2.0775l4.4581-3.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M45,37c0,0,2,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M47,37c0,0,2,2,0,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      d: "M49,37c0,0,2,2,0,5"
    })));
  }
};

export default Shark;