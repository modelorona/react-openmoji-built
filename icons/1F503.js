import React from 'react';

const ClockwiseVerticalArrows = ({
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
      fill: "#92d3f5",
      d: "M26.6754,17,34.89,26.4517H28.866l.2365,25.0865s-.7468,6.7212,7.468,2.24l1.4936,2.9872c-13.4424,7.468-13.4424-5.9743-13.4424-5.9743l-.1369-24.34H18.4606L26.6754,17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "M44.7852,59.0246l-8.2147-9.4517h6.0241l-.2365-25.0866s.7468-6.7212-7.4679-2.24l-1.4936-2.9872c13.4423-7.4679,13.4423,5.9744,13.4423,5.9744l.1369,24.34H53l-8.2148,9.4517"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.6754,17,34.89,26.4517H28.866l.2365,25.0865s-.7468,6.7212,7.468,2.24l1.4936,2.9872c-13.4424,7.468-13.4424-5.9743-13.4424-5.9743l-.1369-24.34H18.4606L26.6754,17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7852,59.0246l-8.2147-9.4517h6.0241l-.2365-25.0866s.7468-6.7212-7.4679-2.24l-1.4936-2.9872c13.4423-7.4679,13.4423,5.9744,13.4423,5.9744l.1369,24.34H53l-8.2148,9.4517"
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
      d: "M26.6754,17,34.89,26.4517H28.866l.2365,25.0865s-.7468,6.7212,7.468,2.24l1.4936,2.9872c-13.4424,7.468-13.4424-5.9743-13.4424-5.9743l-.1369-24.34H18.4606L26.6754,17"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M44.7852,59.0246l-8.2147-9.4517h6.0241l-.2365-25.0866s.7468-6.7212-7.4679-2.24l-1.4936-2.9872c13.4423-7.4679,13.4423,5.9744,13.4423,5.9744l.1369,24.34H53l-8.2148,9.4517"
    })));
  }
};

export default ClockwiseVerticalArrows;