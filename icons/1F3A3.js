import React from 'react';

const FishingPole = ({
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
      d: "M46.8612,68.5371l-1.6868,0.8404c-0.7318,0.3646-1.579-0.3197-1.2981-1.065 c1.1586-3.0731,5.3156-4.8418,5.3156-4.8418c-6.0185-6.5137-5.6827-14.9594-5.6827-14.9594 C43.165,36.036,51.0838,33,51.0838,33s10.0419,3.2568,9.6976,15.7322c0,0,0.0474,6.7897-7.5845,14.7386 c0,0,4.139,1.7874,5.1468,4.8905c0.2414,0.7433-0.5889,1.3958-1.3077,1.0377l-1.7297-0.8618 C52.6583,67.2177,49.5092,67.2177,46.8612,68.5371z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "none",
      d: "M43.7957,52.5248c-0.5335,0-4.821,0.0934-5.5082,0.1939v-3.9962c0,0,0.8311-3.9527,5.5082-4.8481"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "none",
      d: "M60.1265,43.0304c5.2256,0.144,6.7234,5.113,6.7234,5.113L63.9219,58.875 c-0.5235-0.7915-1.2329-1.0028-1.9989-1.24c0,0-2.2732-0.6794-3.8565-0.5127C58.0665,57.1223,61.6682,49.4262,60.1265,43.0304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "none",
      d: "M60.1265,43.0304c5.2256,0.144,6.7234,5.113,6.7234,5.113L63.9219,58.875 c-0.5235-0.7915-1.2329-1.0028-1.9989-1.24c0,0-2.2732-0.6794-3.8565-0.5127C58.0665,57.1223,61.6682,49.4262,60.1265,43.0304"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "none",
      d: "M50.9054,67.5501c0,0,6.7134,1.7937,7.4071,1.7937c0,0-0.246-3.2812-4.6562-5.8438 c0,0,7.1765-9.1875,7.1338-15.8498C60.7459,40.7733,57,36.004,51.0838,33c3.9425,4.7579,7.5647,6.6357,6.3116,15.3961 C57.3953,48.3961,56.6667,57,50.9054,67.5501z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      stroke: "none",
      d: "M15.1732,49.142l-4.2894,17.4836c-3.5506-0.0794-5.7337-1.4067-5.7337-1.4067l4.2894-17.4836 C9.4395,47.7352,12.054,49.142,15.1732,49.142z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      stroke: "none",
      d: "M12.9185,48.9159c0.6932,0.1379,1.4569,0.2298,2.2547,0.2261l-4.2894,17.4836 c-0.6986-0.0127-1.4899-0.145-2.0738-0.2376L12.9185,48.9159z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "53.9106",
      cy: "41.8563",
      r: "1.7664",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.3565,56.721c0.766,0.2372,1.487,0.6866,2.0105,1.4781l2.4829-10.0557c0,0-1.4978-4.969-6.7234-5.113"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.8612,68.5371l-1.6868,0.8404c-0.7318,0.3646-1.579-0.3197-1.2981-1.065c1.1586-3.0731,5.3156-4.8418,5.3156-4.8418 c-6.0185-6.5137-5.6827-14.9594-5.6827-14.9594C43.165,36.036,51.0838,33,51.0838,33s10.0419,3.2568,9.6976,15.7322 c0,0,0.0474,6.7897-7.5845,14.7386c0,0,4.139,1.7874,5.1468,4.8905c0.2414,0.7433-0.5889,1.3958-1.3077,1.0377l-1.7297-0.8618 C52.6583,67.2177,49.5092,67.2177,46.8612,68.5371z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.1126,51.6063c-0.5328,0.0283-1.138,0.0835-1.8251,0.1733v-3.5718c0,0,0.8311-3.533,5.5082-4.3333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.0838,33l0.1114-25.1456c0,0-3.7092-8.8284-16.5482-3.8128C22.767,8.6826,16.4299,31.88,13.4264,44.5449"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1732,49.142l-4.2894,17.4836c-3.5506-0.0794-5.7337-1.4067-5.7337-1.4067l4.2894-17.4836 C9.4395,47.7352,12.054,49.142,15.1732,49.142z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6.0532,61.5291c0,0,2.6145,1.4067,5.7337,1.4067"
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
      cx: "53.9106",
      cy: "41.8563",
      r: "1.7664",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M62.3565,56.721c0.766,0.2372,1.487,0.6866,2.0105,1.4781l2.4829-10.0557c0,0-1.4978-4.969-6.7234-5.113"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.8612,68.5371l-1.6868,0.8404c-0.7318,0.3646-1.579-0.3197-1.2981-1.065c1.1586-3.0731,5.3156-4.8418,5.3156-4.8418 c-6.0185-6.5137-5.6827-14.9594-5.6827-14.9594C43.165,36.036,51.0838,33,51.0838,33s10.0419,3.2568,9.6976,15.7322 c0,0,0.0474,6.7897-7.5845,14.7386c0,0,4.139,1.7874,5.1468,4.8905c0.2414,0.7433-0.5889,1.3958-1.3077,1.0377l-1.7297-0.8618 C52.6583,67.2177,49.5092,67.2177,46.8612,68.5371z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.1126,51.6063c-0.5328,0.0283-1.138,0.0835-1.8251,0.1733v-3.5718c0,0,0.8311-3.533,5.5082-4.3333"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.0838,33l0.1114-25.1456c0,0-3.7092-8.8284-16.5482-3.8128C22.767,8.6826,16.4299,31.88,13.4264,44.5449"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M15.1732,49.142l-4.2894,17.4836c-3.5506-0.0794-5.7337-1.4067-5.7337-1.4067l4.2894-17.4836 C9.4395,47.7352,12.054,49.142,15.1732,49.142z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M6.0532,61.5291c0,0,2.6145,1.4067,5.7337,1.4067"
    })));
  }
};

export default FishingPole;