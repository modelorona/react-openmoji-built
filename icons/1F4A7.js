import React from 'react';

const Droplet = ({
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
      d: "M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204 c0,0-0.2191-14.3086,16.6559-40.1878c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "none",
      d: "M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265 C36,68.0009,58,49.8744,36,3.9991"
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
      d: "M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204c0,0-0.2191-14.3086,16.6559-40.1878 c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"
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
      d: "M56.0001,46.7065c0,11.7749-8.9543,21.2965-20,21.2965s-20-9.5455-20-21.3204c0,0-0.2191-14.3086,16.6559-40.1878 c0,0,3.1666-5.3703,6.3541-0.3523C55.8851,32.0216,56.0001,46.7065,56.0001,46.7065"
    })));
  }
};

export default Droplet;