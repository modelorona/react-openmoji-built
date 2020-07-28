import React from 'react';

const Rhinoceros = ({
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
      d: "M24.421,22.0855l-3.5,2.8333l-1.8333-0.8333l-3.6667,4.1667l-2.5,2.1667l-1,3.8333l-2.1667-0.1667 c0,0-1.8333-1.5-0.3333-6.1667l-3,2.1667l-0.3333,7.8333l-1.5,4.5l3.8333,2.5l3.8333,0.1667l5-0.3333l3.6667-4.3333h2.8333 l1.6667,1.8333l4.3333,0.6667l4.1667,6.8333c0,0,0.8333,4.5,1,5c0.1667,0.5-0.5,3.6667-0.5,3.6667s1.5,0.6667,2.1667,0.6667 s3.6667-1.1667,3.6667-1.1667l-1-10.5c0,0,7.229,4.5277,13.0623-2.4723l2.1044-2.6943l2.5,4l-0.1667,3l1,2.8333l-2.3333,3.6667 l0.3333,1.1667l6.3333,0.6667l2.1667-7.1667l-0.6667-5.5l3.6667-6.8333c0,0,3.3333-10.8333-8.3333-18.5 c0,0-6.1667-1.5-6.6667-1.3333s-6.8333,2.1667-6.8333,2.1667l-7.6667,0.1667l-4-1.1667L24.421,22.0855z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      stroke: "none",
      d: "M24.3176,41.273l1.5625,5.875l3,3.5l0.5625,3.625c0,0-1.6875,3.5-1.5,3.6875 c0.1875,0.1875,2.875,1.5,2.875,1.5h4.375l-1.0625-2.75l1.0625-3c0,0-1.25-2.625-1.25-2.8125s-2.3125-4.375-2.3125-4.375 l-2.2708-3.6042C29.3593,42.9188,26.5051,43.523,24.3176,41.273z"
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
      d: "M29.7551,43.0942l4.2252,7.1483l1.057,4.6127l-0.5631,1.9861c-0.2869,1.0119,0.4346,2.0286,1.4396,2.0286h2.8741 c0.9019,0,1.6005-0.8291,1.491-1.7697l-1.1762-10.1038c0,0,8.4451,5.7747,15.7737-5.2106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.9041,31.7483c5.1224-1.908,1.7838-7.7242,1.7838-7.7242c-3.3336-0.3844-4.7764,4.5933-4.7764,4.5933l-3.1805,1.9114 l-0.0941,2.8007c0,0-0.5627,2.5656-2.9388,1.7696"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.0425,36.1389c0,0,1.7684,2.6797-0.5488,6.342c-2.7309,4.3161-7.7917,2.4656-7.7917,2.4656 c-2.6019,0.9823-6.22-1.324-6.22-1.324c-1.992-2.3918,0.8537-5.7232,0.8537-5.7232S4.1403,31.6209,8.531,27.8197"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5105,26.1052c0,0,5.5993-8.1508,13.7485-6.1869l0,0c0.671,0.4595,1.4575,0.7136,2.2704,0.7375 c2.5141,0.0742,8.1558,0.0726,11.4125-1.2355c1.418-0.5695,2.9023-0.9803,4.4303-0.9653c1.4896,0.0146,3.3543,0.2847,5.3462,1.176 c3.7001,1.6555,6.3883,4.9459,7.6749,8.7898c1.2832,3.8339,2.1646,9.523-1.4753,13.963l-1.7481,2.5626 c0,0-6.5046,4.9544-8.2934-3.1606c0,0-0.6911-5.4897,1.3416-11.5859"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.8424,29.6135c2.878,4.6869,3.018,8.9749,0.497,13.4807c-2.0407-2.6033-5.4975-1.2656-5.4975-1.2656l-3.3336,1.3667 c-4.3093,0.1708-5.285-3.246-5.285-3.246l2.8458-12.8131l3.9028-2.3918"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.6438,49.4242l0.1597,2.9965l-1.8365,2.7749c-0.752,1.1363,0.0219,2.692,1.3393,2.692h3.5225 c0.7152,0,1.3469-0.4894,1.5583-1.2072l1.9211-6.5234l-1.1383-5.2106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.1098,46.9288l2.6832,4.0533l-0.2033,3.7023l-1.0413,2.6797c-0.2318,0.5966,0.1859,1.2497,0.7992,1.2497h1.3804"
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
      d: "M29.7551,43.0942l4.2252,7.1483l1.057,4.6127l-0.5631,1.9861c-0.2869,1.0119,0.4346,2.0286,1.4396,2.0286h2.8741 c0.9019,0,1.6005-0.8291,1.491-1.7697l-1.1762-10.1038c0,0,8.4451,5.7747,15.7737-5.2106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.9041,31.7483c5.1224-1.908,1.7838-7.7242,1.7838-7.7242c-3.3336-0.3844-4.7764,4.5933-4.7764,4.5933l-3.1805,1.9114 l-0.0941,2.8007c0,0-0.5627,2.5656-2.9388,1.7696"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.0425,36.1389c0,0,1.7684,2.6797-0.5488,6.342c-2.7309,4.3161-7.7917,2.4656-7.7917,2.4656 c-2.6019,0.9823-6.22-1.324-6.22-1.324c-1.992-2.3918,0.8537-5.7232,0.8537-5.7232S4.1403,31.6209,8.531,27.8197"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5105,26.1052c0,0,5.5993-8.1508,13.7485-6.1869l0,0c0.671,0.4595,1.4575,0.7136,2.2704,0.7375 c2.5141,0.0742,8.1558,0.0726,11.4125-1.2355c1.418-0.5695,2.9023-0.9803,4.4303-0.9653c1.4896,0.0146,3.3543,0.2847,5.3462,1.176 c3.7001,1.6555,6.3883,4.9459,7.6749,8.7898c1.2832,3.8339,2.1646,9.523-1.4753,13.963l-1.7481,2.5626 c0,0-6.5046,4.9544-8.2934-3.1606c0,0-0.6911-5.4897,1.3416-11.5859"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.8424,29.6135c2.878,4.6869,3.018,8.9749,0.497,13.4807c-2.0407-2.6033-5.4975-1.2656-5.4975-1.2656l-3.3336,1.3667 c-4.3093,0.1708-5.285-3.246-5.285-3.246l2.8458-12.8131l3.9028-2.3918"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M57.6438,49.4242l0.1597,2.9965l-1.8365,2.7749c-0.752,1.1363,0.0219,2.692,1.3393,2.692h3.5225 c0.7152,0,1.3469-0.4894,1.5583-1.2072l1.9211-6.5234l-1.1383-5.2106"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.1098,46.9288l2.6832,4.0533l-0.2033,3.7023l-1.0413,2.6797c-0.2318,0.5966,0.1859,1.2497,0.7992,1.2497h1.3804"
    })));
  }
};

export default Rhinoceros;