import React from 'react';

const DropOfBlood = ({
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
      fill: "#ea5a47",
      d: "M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M36,3.9991C48.875,14.375,55.875,44.8744,55.875,44.8744c0,15.0006-8.8293,23.1265-19.875,23.1265,0,0,22-18.1265,0-64.0018"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56,46.7065C56,58.4814,47.0458,68.003,36,68.003s-20-9.5455-20-21.32c0,0-.2191-14.3086,16.6559-40.1878,0,0,3.1666-5.37,6.3541-.3523C55.8851,32.0216,56,46.7065,56,46.7065"
    })));
  }
};

export default DropOfBlood;