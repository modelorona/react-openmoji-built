import React from 'react';

const UpDownArrow = ({
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
      id: "_x2195__xFE0F_",
      fill: "#3F3F3F",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.7651,50.2627 47.7305,46.5533 39.062,55.7613 39.062,16.2377 47.7305,25.4453 51.7651,21.7363 36.0015,4.9995 20.2349,21.7363 24.2681,25.4453 32.9331,16.2445 32.9331,55.7546 24.2681,46.5533 20.2349,50.2627 36.0015,66.9995"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2195__xFE0F_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.7651,50.2627 47.7305,46.5533 39.062,55.7613 39.062,16.2377 47.7305,25.4453 51.7651,21.7363 36.0015,4.9995 20.2349,21.7363 24.2681,25.4453 32.9331,16.2445 32.9331,55.7546 24.2681,46.5533 20.2349,50.2627 36.0015,66.9995"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      id: "_x2195__xFE0F_",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "51.7651,50.2627 47.7305,46.5533 39.062,55.7613 39.062,16.2377 47.7305,25.4453 51.7651,21.7363 36.0015,4.9995 20.2349,21.7363 24.2681,25.4453 32.9331,16.2445 32.9331,55.7546 24.2681,46.5533 20.2349,50.2627 36.0015,66.9995"
    })));
  }
};

export default UpDownArrow;