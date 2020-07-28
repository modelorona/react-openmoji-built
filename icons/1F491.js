import React from 'react';

const CoupleWithHeart = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M38,61v-3.3c0-3.7,3.7-6.7,7.4-6.7c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V61"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M6,61v-3.3C6,54,9.7,51,13.4,51c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V61"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M36,11.7c1.1-2.4,4-3.4,6.3-2.2s3.3,4,2.2,6.4c-0.1,0.3-0.3,0.5-0.4,0.7L36,27l-8.1-10.4 c-0.2-0.2-0.3-0.5-0.4-0.7c-1.1-2.4-0.1-5.2,2.2-6.4S34.9,9.3,36,11.7L36,11.7z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("g", {
      id: "hair-b"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M41.5,52.1c1.2-0.7,2.5-1.1,3.9-1.1c4.4,3.7,8.8,3.7,13.3,0c1.4,0,2.8,0.4,4,1.2c0.9-0.6,1.7-1.3,2.3-2.2 c1.5-2,2-6.7,0.7-9.8c-1.8-4.2-2.3-4.2-2.6-9.6c-0.1-3.1-2.5-5.7-5.6-6c0,0-1.9-2.3-6-2.3c-4.8,0-9.2,2.6-10.3,6.7 c-1.2,4.2,0.2,5.9-1,9.1c-1.4,3.6-3.6,8.4-1.4,11.9C39.2,50.6,40.1,51.4,41.5,52.1z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair-a"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M9.1,31.4c0.6-8.7,7.2-8.8,10.5-8.3c0.3,0.1,1.2,0,1.5,0c6-0.8,9,6,9,9c0,1.1,0,3.8-1.5,5.3 c0,0-3.4-4.2-3.6-6.6c0,0-11.4,4.3-12.2,0.6c0,0-0.8,3-1.5,3.8c0,0,0,2.3,0,3C11.3,38.2,8.8,35.2,9.1,31.4z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("g", {
      id: "skin-b"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M43.7,37.3c0,6,3.8,10.5,8.3,10.5s8.3-4.5,8.3-10.5c0-3.8-1.5-6-4.5-9c-3,3-12,6.8-12,8.3L43.7,37.3 L43.7,37.3z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin-a"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M25,30.8c0,0-11.4,4.3-12.2,0.6c0,0-0.8,3-1.5,3.8c0,0,0,2.3,0,3l0,0c0.6,5.5,4.2,9.8,8.6,9.8 c4.6,0,8.4-4.7,8.7-10.6C28.3,37,25.2,33.1,25,30.8z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.6,36.1c0,0.2,0,0.4,0,0.7 c0,6.2-3.9,11.3-8.7,11.3s-8.7-5.1-8.7-11.3c0-0.2,0-0.4,0-0.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9.1,31.4 c0.6-8.7,7.2-8.8,10.5-8.3c0.3,0.1,1.2,0,1.5,0c6-0.8,9,6,9,9c0,1.1,0,3.8-1.5,5.3c0,0-3.4-4.2-3.6-6.6c0,0-11.4,4.3-12.2,0.6 c0,0-0.8,3-1.5,3.8c0,0,0,2.3,0,3C11.3,38.2,8.8,35.2,9.1,31.4z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,11.7 c1.1-2.4,4-3.4,6.3-2.2s3.3,4,2.2,6.4c-0.1,0.3-0.3,0.5-0.4,0.7L36,27l-8.1-10.4c-0.2-0.2-0.3-0.5-0.4-0.7 c-1.1-2.4-0.1-5.2,2.2-6.4S34.9,9.3,36,11.7L36,11.7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.9,24.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.4,49.4 c-3-4.5-0.6-7.7,0.8-11.3c1.2-3.2-0.2-4.9,1-9.1c1.1-4.1,5.5-6.7,10.3-6.7c4.1,0,6,2.3,6,2.3c3.1,0.3,5.5,2.9,5.6,6 c0.3,5.4,0.8,5.4,2.6,9.6c1.3,3.1,0.8,6.6-1.4,9.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7,37.5 c0,6,3.8,10.5,8.3,10.5s8.3-4.5,8.3-10.5c0-3.8-1.5-6-4.5-9c-3,3-12,6.8-12,8.3L43.7,37.5L43.7,37.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38,60v-2.3 c0-3.7,3.7-6.7,7.4-6.7c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V60"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6,60v-2.3 C6,54,9.7,51,13.4,51c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V60"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M56.2,37.2c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4C55.6,35.8,56.2,36.4,56.2,37.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.6,37.2c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S50.6,36.4,50.6,37.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.9,42.9 c1.3,0.7,2.9,0.7,4.2,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.2,37.4c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S24.2,36.7,24.2,37.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.6,37.4c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S18.6,36.7,18.6,37.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.9,43.2 c1.3,0.7,2.9,0.7,4.2,0"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.6,36.1c0,0.2,0,0.4,0,0.7 c0,6.2-3.9,11.3-8.7,11.3s-8.7-5.1-8.7-11.3c0-0.2,0-0.4,0-0.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9.1,31.4 c0.6-8.7,7.2-8.8,10.5-8.3c0.3,0.1,1.2,0,1.5,0c6-0.8,9,6,9,9c0,1.1,0,3.8-1.5,5.3c0,0-3.4-4.2-3.6-6.6c0,0-11.4,4.3-12.2,0.6 c0,0-0.8,3-1.5,3.8c0,0,0,2.3,0,3C11.3,38.2,8.8,35.2,9.1,31.4z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36,11.7 c1.1-2.4,4-3.4,6.3-2.2s3.3,4,2.2,6.4c-0.1,0.3-0.3,0.5-0.4,0.7L36,27l-8.1-10.4c-0.2-0.2-0.3-0.5-0.4-0.7 c-1.1-2.4-0.1-5.2,2.2-6.4S34.9,9.3,36,11.7L36,11.7z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.9,24.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.4,49.4 c-3-4.5-0.6-7.7,0.8-11.3c1.2-3.2-0.2-4.9,1-9.1c1.1-4.1,5.5-6.7,10.3-6.7c4.1,0,6,2.3,6,2.3c3.1,0.3,5.5,2.9,5.6,6 c0.3,5.4,0.8,5.4,2.6,9.6c1.3,3.1,0.8,6.6-1.4,9.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7,37.5 c0,6,3.8,10.5,8.3,10.5s8.3-4.5,8.3-10.5c0-3.8-1.5-6-4.5-9c-3,3-12,6.8-12,8.3L43.7,37.5L43.7,37.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38,60v-2.3 c0-3.7,3.7-6.7,7.4-6.7c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V60"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M6,60v-2.3 C6,54,9.7,51,13.4,51c4.4,3.7,8.8,3.7,13.3,0c3.7,0,7.4,3,7.4,6.7V60"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M56.2,37.2c0,0.8-0.6,1.4-1.4,1.4c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4C55.6,35.8,56.2,36.4,56.2,37.2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50.6,37.2c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S50.6,36.4,50.6,37.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.9,42.9 c1.3,0.7,2.9,0.7,4.2,0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M24.2,37.4c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S24.2,36.7,24.2,37.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18.6,37.4c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4S18.6,36.7,18.6,37.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M17.9,43.2 c1.3,0.7,2.9,0.7,4.2,0"
    })));
  }
};

export default CoupleWithHeart;