import React from 'react';

const Chains = ({
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
      stroke: "none",
      d: "M42.6346,12.4476C42.1772,8.8038,39.0678,5.985,35.3,5.985c-4.0828,0-7.3925,3.3097-7.3925,7.3925v3.8019 c0,4.0828,3.3098,7.3925,7.3925,7.3925s7.3925-3.3097,7.3925-7.3925v-3.8019C42.6925,13.0625,42.6728,12.7522,42.6346,12.4476z M39.5468,16.3704c0,2.3455-1.9014,4.2468-4.2468,4.2468s-4.2468-1.9014-4.2468-4.2468v-2.184 c0-2.3455,1.9014-4.2467,4.2468-4.2467c2.1645,0,3.9507,1.6191,4.2135,3.7124c0.022,0.175,0.0333,0.3533,0.0333,0.5343V16.3704z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M42.6346,33.2616c-0.4574-3.6438-3.5668-6.4625-7.3346-6.4625c-4.0828,0-7.3925,3.3097-7.3925,7.3925 v3.8019c0,4.0828,3.3098,7.3925,7.3925,7.3925s7.3925-3.3097,7.3925-7.3925v-3.8019 C42.6925,33.8766,42.6728,33.5663,42.6346,33.2616z M39.5468,37.1844c0,2.3455-1.9014,4.2468-4.2468,4.2468 s-4.2468-1.9014-4.2468-4.2468v-2.184c0-2.3455,1.9014-4.2467,4.2468-4.2467c2.1645,0,3.9507,1.6191,4.2135,3.7124 c0.022,0.175,0.0333,0.3533,0.0333,0.5343V37.1844z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M42.6346,54.0756c-0.4574-3.6438-3.5668-6.4625-7.3346-6.4625c-4.0828,0-7.3925,3.3097-7.3925,7.3925 v3.8019c0,4.0828,3.3098,7.3925,7.3925,7.3925s7.3925-3.3097,7.3925-7.3925v-3.8019 C42.6925,54.6906,42.6728,54.3803,42.6346,54.0756z M39.5468,57.9984c0,2.3455-1.9014,4.2468-4.2468,4.2468 s-4.2468-1.9014-4.2468-4.2468v-2.184c0-2.3455,1.9014-4.2467,4.2468-4.2467c2.1645,0,3.9507,1.6191,4.2135,3.7124 c0.022,0.175,0.0333,0.3533,0.0333,0.5343V57.9984z"
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
      d: "M39.5468,57.9985c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V57.9985z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,58.8074c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V58.8074z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.5468,37.1845c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V37.1845z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,37.9934c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V37.9934z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.5468,16.3705c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V16.3705z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,17.1794c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V17.1794z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5",
      x2: "35.5",
      y1: "38.8919",
      y2: "54",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5",
      x2: "35.5",
      y1: "17.9307",
      y2: "33.0389",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.5468,57.9985c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V57.9985z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,58.8074c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V58.8074z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.5468,37.1845c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V37.1845z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,37.9934c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V37.9934z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.5468,16.3705c0,2.3454-1.9013,4.2468-4.2468,4.2468s-4.2468-1.9013-4.2468-4.2468v-2.184 c0-2.3454,1.9013-4.2468,4.2468-4.2468c2.1645,0,3.9507,1.6193,4.2135,3.7125c0.022,0.175,0.0333,0.3533,0.0333,0.5342V16.3705z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.6925,17.1794c0,4.0828-3.3097,7.3925-7.3925,7.3925s-7.3925-3.3097-7.3925-7.3925v-3.8019 c0-4.0828,3.3097-7.3925,7.3925-7.3925c3.7678,0,6.8772,2.8188,7.3346,6.4625c0.0382,0.3046,0.0579,0.615,0.0579,0.93V17.1794z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5",
      x2: "35.5",
      y1: "38.8919",
      y2: "54",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35.5",
      x2: "35.5",
      y1: "17.9307",
      y2: "33.0389",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Chains;