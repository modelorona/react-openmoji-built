import React from 'react';

const ClosedBook = ({
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "#FFFFFF",
      stroke: "none",
      points: "12,58 59.8467,57.85 59.8467,12.15 15.6686,12.15 12,16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,61h-43.003C11.447,61,11,60.553,11,60.0015v-43.003C11,16.447,11.447,16,11.9985,16h43.003 C55.553,16,56,16.447,56,16.9985v43.003C56,60.553,55.553,61,55.0015,61z"
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
      d: "M11,17l4.9985-5h43.003C59.553,12,60,12.447,60,12.9985v43.003C60,56.553,59.553,57,59.0015,57"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,61h-43.003C11.447,61,11,60.553,11,60.0015v-43.003C11,16.447,11.447,16,11.9985,16h43.003 C55.553,16,56,16.447,56,16.9985v43.003C56,60.553,55.553,61,55.0015,61z"
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
      d: "M11,17l4.9985-5h43.003C59.553,12,60,12.447,60,12.9985v43.003C60,56.553,59.553,57,59.0015,57"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0015,61h-43.003C11.447,61,11,60.553,11,60.0015v-43.003C11,16.447,11.447,16,11.9985,16h43.003 C55.553,16,56,16.447,56,16.9985v43.003C56,60.553,55.553,61,55.0015,61z"
    })));
  }
};

export default ClosedBook;