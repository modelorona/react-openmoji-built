import React from 'react';

const Link = ({
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
      fill: "#d0cfce",
      stroke: "none",
      d: "M36,8.1661c-3.149,0-4.9948,1.9679-7,4c-1.8633,1.8883-4,3.7366-4,6.5405v17.9189 c0,2.6406,1.3256,4.6911,3,6.5405c2.0169,2.2277,4.6806,4,8,4c6.0751,0,11-4.7192,11-10.5405V18.7066 c0-2.8667-2.0623-5.6404-4-7.5405C41.0027,9.2075,39.0835,8.1661,36,8.1661z M40,35.5365c0,2.5569-1.7909,4.6296-4,4.6296 c-1.1563,0-2.0027-0.3975-3-1c-1.2121-0.7323-1.1074-2.3926-1-3.6296V19.7957c0-1.1549-0.6042-2.8187,0-3.6296 c0.7335-0.9845,2.7886-1,4-1c1.3009,0,3.2695-0.1131,4,1c0.51,0.7772,0,2.5784,0,3.6296V35.5365z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      d: "M32.0061,35.5372c0.1159-2.4366,1.8597-4.3711,3.9939-4.3711c1.2944,0,3.2689,0.8963,4,2 c0.5166,0.7799,0,1.5709,0,2.6296v15.7407c0,1.173,0.6212,2.8138,0,3.6296c-0.733,0.9626-2.8043,1-4,1c-1.3246,0-3.272-0.852-4-2 c-0.4861-0.7666,0-1.6059,0-2.6296v-5.8082c-3-0.4378-7-9.7281-7-9.7281v15.8956c0,5.6721,4.9249,10.2703,11,10.2703 s11-4.5982,11-10.2703V34.4364c0-5.6722-4.9249-10.2703-11-10.2703c-1.6162,0-3.151,0.3254-4.5333,0.9099L32.0061,35.5372z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#e27022",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,30.1661"
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
      d: "M37.2318,41.0132c-0.394,0.0998-0.8067,0.1529-1.2318,0.1529c-2.7614,0-5-2.2386-5-5v-17c0-2.7614,2.2386-5,5-5s5,2.2386,5,5v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.3602,46.0744c-0.4448,0.0605-0.8988,0.0917-1.3602,0.0917c-5.5228,0-10-4.4771-10-10v-17c0-5.5228,4.4772-10,10-10 s10,4.4772,10,10v7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.7604,30.3209c0.3964-0.1011,0.8117-0.1549,1.2396-0.1549c2.7614,0,5,2.2386,5,5v17c0,2.7614-2.2386,5-5,5s-5-2.2386-5-5v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.7494,25.2435c0.4097-0.0511,0.8271-0.0774,1.2506-0.0774c5.5228,0,10,4.4772,10,10v17c0,5.5229-4.4772,10-10,10 s-10-4.4771-10-10v-6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,47.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,38.1661"
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
      d: "M37.2318,41.0132c-0.394,0.0998-0.8067,0.1529-1.2318,0.1529c-2.7614,0-5-2.2386-5-5v-17c0-2.7614,2.2386-5,5-5s5,2.2386,5,5v3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M37.3602,46.0744c-0.4448,0.0605-0.8988,0.0917-1.3602,0.0917c-5.5228,0-10-4.4771-10-10v-17c0-5.5228,4.4772-10,10-10 s10,4.4772,10,10v7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.7604,30.3209c0.3964-0.1011,0.8117-0.1549,1.2396-0.1549c2.7614,0,5,2.2386,5,5v17c0,2.7614-2.2386,5-5,5s-5-2.2386-5-5v-3"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.7494,25.2435c0.4097-0.0511,0.8271-0.0774,1.2506-0.0774c5.5228,0,10,4.4772,10,10v17c0,5.5229-4.4772,10-10,10 s-10-4.4771-10-10v-6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,47.1661"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39,38.1661"
    })));
  }
};

export default Link;