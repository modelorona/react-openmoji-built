import React from 'react';

const FourLeafClover = ({
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
      stroke: "none",
      d: "M48.8683,32.5567l-3.6904-3.0993l4.6308,1.3342c2.4301,0.4831,4.6846,0.3218,5.7975-1.7671 c1.113-2.089,0.3218-4.6848-1.7671-5.7977l-1.8912-1.0076l0.3358-0.6302l0.6718-1.2609c1.113-2.089,0.3217-4.6845-1.7672-5.7975 c-2.089-1.113-4.0135-0.0094-5.7975,1.7671l-3.0993,3.6905l1.3342-4.6309c0.4889-2.365,0.3217-4.6845-1.7672-5.7975 s-4.6846-0.3218-5.7975,1.7671l-1.0076,1.8912l-0.6304-0.3359l-1.2608-0.6717c-2.089-1.113-4.6847-0.3216-5.7976,1.7674 s-0.1912,4.1826,1.7672,5.7975l4.5599,3.5592l0.0131,0.0103l-4.5529-1.4901c-0.8837-0.2891-1.7981-0.4974-2.7272-0.5326 c-1.6529-0.0626-3.0631,0.3703-3.9169,1.7848c-1.2833,2.126-0.3442,4.934,1.8474,6.1016l1.6972,0.9042l-0.3359,0.6305 l-0.5832,1.0946c-1.1477,2.1542-0.3756,4.9596,1.816,6.034c2.0382,0.9996,3.9666,0.0256,5.6601-1.8373l3.0993-3.6905 l-1.3342,4.6309c-0.5042,2.0202-0.3217,4.6845,1.7672,5.7975c2.089,1.113,4.6846,0.3218,5.7975-1.7671l1.0077-1.8914l0.6304,0.3359 l1.2608,0.6717c2.089,1.113,4.6846,0.3218,5.7975-1.7671C51.7485,36.2653,50.8871,34.2885,48.8683,32.5567z"
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
      strokeWidth: "2",
      d: "M30.3663,41.0292 c-3.438,3.548-7.676,10.246-5.829,20.735"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.1016,29.3352l4.5993,1.439c2.4184,0.5383,4.6761,0.4281,5.8362-1.635s0.4281-4.6761-1.635-5.8362l-1.8678-1.0503 l0.3501-0.6226l0.7002-1.2452c1.1601-2.0631,0.4281-4.6761-1.635-5.8362s-4.0122-0.1006-5.8362,1.635l-3.1823,3.619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.5692,32.0058l-1.439,4.5993c-0.5499,2.0082-0.4281,4.6761,1.635,5.8362s4.6761,0.4281,5.8362-1.635l1.0503-1.8678 l0.6226,0.3501l1.2452,0.7002c2.0631,1.1601,4.6761,0.4281,5.8362-1.635s0.3439-4.059-1.635-5.8362l-3.619-3.1823"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.7703,22.9634l-4.518-1.5931c-0.8768-0.3092-1.7863-0.5383-2.7143-0.5946c-1.651-0.1002-3.0707,0.3006-3.9564,1.6953 c-1.3313,2.0963-0.4564,4.925,1.7081,6.1422l1.6762,0.9426l-0.3501,0.6226l-0.6079,1.0811 c-1.1963,2.1275-0.4881,4.9496,1.6785,6.0737c2.015,1.0455,3.965,0.1156,5.7005-1.7084l3.1823-3.619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.4311,19.8028l1.439-4.5993c0.5425-2.3533,0.4281-4.6761-1.635-5.8362s-4.6761-0.4281-5.8362,1.635L35.3486,12.87 l-0.6226-0.3501l-1.2452-0.7002c-2.0631-1.1601-4.6761-0.4281-5.8362,1.635c-1.1601,2.0631-0.2862,4.1772,1.635,5.8362 l4.4907,3.6725"
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
      d: "M30.3663,41.0292 c-3.438,3.548-7.676,10.246-5.829,20.735"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.1016,29.3352l4.5993,1.439c2.4184,0.5383,4.6761,0.4281,5.8362-1.635s0.4281-4.6761-1.635-5.8362l-1.8678-1.0503 l0.3501-0.6226l0.7002-1.2452c1.1601-2.0631,0.4281-4.6761-1.635-5.8362s-4.0122-0.1006-5.8362,1.635l-3.1823,3.619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.5692,32.0058l-1.439,4.5993c-0.5499,2.0082-0.4281,4.6761,1.635,5.8362s4.6761,0.4281,5.8362-1.635l1.0503-1.8678 l0.6226,0.3501l1.2452,0.7002c2.0631,1.1601,4.6761,0.4281,5.8362-1.635s0.3439-4.059-1.635-5.8362l-3.619-3.1823"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.7703,22.9634l-4.518-1.5931c-0.8768-0.3092-1.7863-0.5383-2.7143-0.5946c-1.651-0.1002-3.0707,0.3006-3.9564,1.6953 c-1.3313,2.0963-0.4564,4.925,1.7081,6.1422l1.6762,0.9426l-0.3501,0.6226l-0.6079,1.0811 c-1.1963,2.1275-0.4881,4.9496,1.6785,6.0737c2.015,1.0455,3.965,0.1156,5.7005-1.7084l3.1823-3.619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.4311,19.8028l1.439-4.5993c0.5425-2.3533,0.4281-4.6761-1.635-5.8362s-4.6761-0.4281-5.8362,1.635L35.3486,12.87 l-0.6226-0.3501l-1.2452-0.7002c-2.0631-1.1601-4.6761-0.4281-5.8362,1.635c-1.1601,2.0631-0.2862,4.1772,1.635,5.8362 l4.4907,3.6725"
    })));
  }
};

export default FourLeafClover;