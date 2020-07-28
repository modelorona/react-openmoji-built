import React from 'react';

const KiwiFruit = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.1375",
      cy: "35.7625",
      r: "25.0125",
      fill: "#5C9E31",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.3152,26.3316l2.3679-2.1883c1.156-1.0683,3.0228-0.1693,2.9083,1.4006l-0.2345,3.2157 c-0.0658,0.9029,0.5736,1.7048,1.4686,1.8415l3.1872,0.4869c1.5559,0.2377,2.017,2.2578,0.7183,3.147l-2.6603,1.8216 c-0.747,0.5115-0.9752,1.5114-0.5241,2.2963l1.6065,2.7955c0.7843,1.3647-0.5076,2.9846-2.0126,2.5237l-3.0829-0.9442 c-0.8657-0.2651-1.7897,0.1799-2.1221,1.022l-1.184,2.999c-0.578,1.464-2.65,1.464-3.228,0l-1.184-2.999 c-0.3324-0.8421-1.2565-1.2871-2.1221-1.022l-3.0829,0.9442c-1.505,0.4609-2.7969-1.159-2.0126-2.5237l1.6065-2.7955 c0.4511-0.785,0.2229-1.7848-0.5241-2.2963l-2.6603-1.8216c-1.2987-0.8893-0.8377-2.9093,0.7183-3.147l3.1872-0.4869 c0.895-0.1367,1.5344-0.9386,1.4685-1.8415l-0.2345-3.2157c-0.1145-1.5698,1.7523-2.4688,2.9083-1.4006l2.3679,2.1883 C35.6247,26.9461,36.6503,26.9461,37.3152,26.3316z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.1375",
      cy: "35.7625",
      r: "25.0125",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.3152,26.3316l2.3679-2.1883c1.156-1.0683,3.0228-0.1693,2.9083,1.4006l-0.2345,3.2157 c-0.0658,0.9029,0.5736,1.7048,1.4686,1.8415l3.1872,0.4869c1.5559,0.2377,2.017,2.2578,0.7183,3.147l-2.6603,1.8216 c-0.747,0.5115-0.9752,1.5114-0.5241,2.2963l1.6065,2.7955c0.7843,1.3647-0.5076,2.9846-2.0126,2.5237l-3.0829-0.9442 c-0.8657-0.2651-1.7897,0.1799-2.1221,1.022l-1.184,2.999c-0.578,1.464-2.65,1.464-3.228,0l-1.184-2.999 c-0.3324-0.8421-1.2565-1.2871-2.1221-1.022l-3.0829,0.9442c-1.505,0.4609-2.7969-1.159-2.0126-2.5237l1.6065-2.7955 c0.4511-0.785,0.2229-1.7848-0.5241-2.2963l-2.6603-1.8216c-1.2987-0.8893-0.8377-2.9093,0.7183-3.147l3.1872-0.4869 c0.895-0.1367,1.5344-0.9386,1.4685-1.8415l-0.2345-3.2157c-0.1145-1.5698,1.7523-2.4688,2.9083-1.4006l2.3679,2.1883 C35.6247,26.9461,36.6503,26.9461,37.3152,26.3316z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "24.191",
      cy: "25.1298",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.6637 -0.748 0.748 0.6637 -10.6616 26.5469)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0391",
      cy: "19.0522",
      rx: "0.9136",
      ry: "1.8273",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "48.0686",
      cy: "25.2399",
      rx: "1.8273",
      ry: "0.9136",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -3.7684 41.3823)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50.8083",
      cy: "38.1005",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.1109 -0.9938 0.9938 0.1109 7.3099 84.3716)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "21.4727",
      cy: "37.9896",
      rx: "1.8273",
      ry: "0.9136",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "29.3792",
      cy: "48.7042",
      rx: "1.8273",
      ry: "0.9136",
      transform: "matrix(0.5 -0.866 0.866 0.5 -27.4894 49.7953)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.0534",
      cy: "48.7368",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.882 -0.4712 0.4712 0.882 -17.8857 26.0367)",
      fill: "#000000",
      stroke: "none"
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
      cx: "36.1375",
      cy: "35.7625",
      r: "25.0125",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.3152,26.3316l2.3679-2.1883c1.156-1.0683,3.0228-0.1693,2.9083,1.4006l-0.2345,3.2157 c-0.0658,0.9029,0.5736,1.7048,1.4686,1.8415l3.1872,0.4869c1.5559,0.2377,2.017,2.2578,0.7183,3.147l-2.6603,1.8216 c-0.747,0.5115-0.9752,1.5114-0.5241,2.2963l1.6065,2.7955c0.7843,1.3647-0.5076,2.9846-2.0126,2.5237l-3.0829-0.9442 c-0.8657-0.2651-1.7897,0.1799-2.1221,1.022l-1.184,2.999c-0.578,1.464-2.65,1.464-3.228,0l-1.184-2.999 c-0.3324-0.8421-1.2565-1.2871-2.1221-1.022l-3.0829,0.9442c-1.505,0.4609-2.7969-1.159-2.0126-2.5237l1.6065-2.7955 c0.4511-0.785,0.2229-1.7848-0.5241-2.2963l-2.6603-1.8216c-1.2987-0.8893-0.8377-2.9093,0.7183-3.147l3.1872-0.4869 c0.895-0.1367,1.5344-0.9386,1.4685-1.8415l-0.2345-3.2157c-0.1145-1.5698,1.7523-2.4688,2.9083-1.4006l2.3679,2.1883 C35.6247,26.9461,36.6503,26.9461,37.3152,26.3316z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "24.191",
      cy: "25.1298",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.6637 -0.748 0.748 0.6637 -10.6616 26.5469)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.0391",
      cy: "19.0522",
      rx: "0.9136",
      ry: "1.8273",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "48.0686",
      cy: "25.2399",
      rx: "1.8273",
      ry: "0.9136",
      transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -3.7684 41.3823)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50.8083",
      cy: "38.1005",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.1109 -0.9938 0.9938 0.1109 7.3099 84.3716)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "21.4727",
      cy: "37.9896",
      rx: "1.8273",
      ry: "0.9136",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "29.3792",
      cy: "48.7042",
      rx: "1.8273",
      ry: "0.9136",
      transform: "matrix(0.5 -0.866 0.866 0.5 -27.4894 49.7953)",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.0534",
      cy: "48.7368",
      rx: "0.9136",
      ry: "1.8273",
      transform: "matrix(0.882 -0.4712 0.4712 0.882 -17.8857 26.0367)",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default KiwiFruit;