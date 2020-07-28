import React from 'react';

const ToggleButton = ({
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.0984,45.9794H21.0578c-5.5116,0-9.9797-4.4681-9.9797-9.9797v0c0-5.5116,4.4681-9.9797,9.9797-9.9797h30.0406 c5.5116,0,9.9797,4.4681,9.9797,9.9797v0C61.0781,41.5114,56.6101,45.9794,51.0984,45.9794z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.9228",
      cy: "36",
      r: "10.0009",
      fill: "#ea5a47",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.5214,28.4459c4.0892,3.7129,4.3944,10.0377,0.6815,14.127s-10.0377,4.3943-14.127,0.6815"
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
      d: "M51.0984,45.9794H21.0578c-5.5116,0-9.9797-4.4681-9.9797-9.9797v0c0-5.5116,4.4681-9.9797,9.9797-9.9797h30.0406 c5.5116,0,9.9797,4.4681,9.9797,9.9797v0C61.0781,41.5114,56.6101,45.9794,51.0984,45.9794z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.9228",
      cy: "36",
      r: "10.0009",
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
      d: "M27.5214,28.4459c4.0892,3.7129,4.3944,10.0377,0.6815,14.127s-10.0377,4.3943-14.127,0.6815"
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
      d: "M51.0984,45.9794H21.0578c-5.5116,0-9.9797-4.4681-9.9797-9.9797v0c0-5.5116,4.4681-9.9797,9.9797-9.9797h30.0406 c5.5116,0,9.9797,4.4681,9.9797,9.9797v0C61.0781,41.5114,56.6101,45.9794,51.0984,45.9794z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.9228",
      cy: "36",
      r: "10.0009",
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
      d: "M27.5214,28.4459c4.0892,3.7129,4.3944,10.0377,0.6815,14.127s-10.0377,4.3943-14.127,0.6815"
    })));
  }
};

export default ToggleButton;