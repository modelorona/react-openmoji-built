import React from 'react';

const Burrito = ({
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
      fill: "#b1cc33",
      stroke: "none",
      d: "M23,23.5244v-7.6181l0.8633-0.002c0.5-0.5049,1.1777-0.832,1.9326-0.8838 C25.3066,14.4863,25,13.7813,25,13c0-1.6562,1.3438-3,3-3c0-1.6562,1.3438-3,3-3c0.8691,0,1.6465,0.376,2.1934,0.9668 C33.6162,6.8213,34.708,6,36,6s2.3838,0.8213,2.8066,1.9668C39.3535,7.376,40.1309,7,41,7c1.6563,0,3,1.3438,3,3 c1.6563,0,3,1.3438,3,3c0,0.7813-0.3066,1.4863-0.7959,2.0205c0.7559,0.0518,1.4355,0.3799,1.9355,0.8858H49v8L36,34.5244 L23,23.5244z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M39,15c-0.3232,0-0.6377,0.0366-0.9443,0.0952C37.1484,13.8311,35.6748,13,34,13 c-2.1582,0-3.998,1.3672-4.6973,3.2827c-0.0136,0.0381-0.6435-1.0088-0.6572-0.9702c-0.1699,0.5029-0.4141,1.3784-0.458,1.9375 c-0.25,3.1563,3.0508,15.751,5.8125,15.751c0.3232,0,0.6377-0.0362,0.9443-0.0947C35.8516,34.1709,37.3252,35.001,39,35.001 c2.7617,0,4.4063-12.1773,4.4063-14.9385c0-1.3428,0.375-3.1875-0.7344-4.7812c-0.0117-0.0171-0.0918,1.2285-0.1065,1.2138 C41.6592,15.5723,40.3965,15,39,15z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M43,61c-10.666-11.5977-10.666-30.4023,0-42h2c1.6563,0,3,1.3438,3,3v39c0,2.7617-2.2383,5-5,5H29 c-2.7617,0-5-2.2383-5-5V22c0-1.6562,1.3438-3,3-3h2c3.4346,3.7344,5.7637,8.2168,6.9863,12.9648"
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
      d: "M48.1396,15.9063c-0.5-0.5059-1.1796-0.834-1.9355-0.8858C46.6934,14.4863,47,13.7813,47,13c0-1.6562-1.3437-3-3-3 c0-1.6562-1.3437-3-3-3c-0.8691,0-1.6465,0.376-2.1934,0.9668C38.3838,6.8213,37.292,6,36,6s-2.3838,0.8213-2.8066,1.9668 C32.6465,7.376,31.8691,7,31,7c-1.6562,0-3,1.3438-3,3c-1.6562,0-3,1.3438-3,3c0,0.7813,0.3066,1.4863,0.7959,2.0205 c-0.7549,0.0518-1.4326,0.3789-1.9326,0.8838"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9805,48.0537C34.7578,52.7949,32.4297,57.2695,29,61"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,61c-10.666-11.5977-10.666-30.4023,0-42h2c1.6563,0,3,1.3438,3,3v39c0,2.7617-2.2383,5-5,5H29c-2.7617,0-5-2.2383-5-5V22 c0-1.6562,1.3438-3,3-3h2c3.4346,3.7344,5.7637,8.2168,6.9863,12.9648"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9873,15.9941C41.1543,15.3706,40.1211,15,39,15c-0.3232,0-0.6377,0.0366-0.9443,0.0952C37.1484,13.8311,35.6748,13,34,13 c-1.9131,0-3.5605,1.0811-4.3975,2.6611"
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
      d: "M48.1396,15.9063c-0.5-0.5059-1.1796-0.834-1.9355-0.8858C46.6934,14.4863,47,13.7813,47,13c0-1.6562-1.3437-3-3-3 c0-1.6562-1.3437-3-3-3c-0.8691,0-1.6465,0.376-2.1934,0.9668C38.3838,6.8213,37.292,6,36,6s-2.3838,0.8213-2.8066,1.9668 C32.6465,7.376,31.8691,7,31,7c-1.6562,0-3,1.3438-3,3c-1.6562,0-3,1.3438-3,3c0,0.7813,0.3066,1.4863,0.7959,2.0205 c-0.7549,0.0518-1.4326,0.3789-1.9326,0.8838"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9805,48.0537C34.7578,52.7949,32.4297,57.2695,29,61"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43,61c-10.666-11.5977-10.666-30.4023,0-42h2c1.6563,0,3,1.3438,3,3v39c0,2.7617-2.2383,5-5,5H29c-2.7617,0-5-2.2383-5-5V22 c0-1.6562,1.3438-3,3-3h2c3.4346,3.7344,5.7637,8.2168,6.9863,12.9648"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.9873,15.9941C41.1543,15.3706,40.1211,15,39,15c-0.3232,0-0.6377,0.0366-0.9443,0.0952C37.1484,13.8311,35.6748,13,34,13 c-1.9131,0-3.5605,1.0811-4.3975,2.6611"
    })));
  }
};

export default Burrito;