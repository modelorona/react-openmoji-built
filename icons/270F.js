import React from 'react';

const Pencil = ({
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
      fill: "#3F3F3F",
      stroke: "none",
      points: "14.5943,53.154 18.2544,56.814 12.6242,59.0928"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#f4aa41",
      stroke: "none",
      points: "18.0381,41.8761 36.8684,23.0457 48.1813,34.3586 29.5108,53.0291"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#a57939",
      stroke: "none",
      points: "14.4132,52.5663 17.9281,43.3946 27.8278,53.2939 18.6558,56.809"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#EA5A47",
      stroke: "none",
      points: "42.9209,16.9933 50.4228,9.4913 61.7357,20.8042 54.2975,28.2424"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#9b9b9a",
      stroke: "none",
      points: "35.6498,24.2643 43.3318,16.5823 54.6447,27.8952 47.0278,35.512"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.6304,56.8203 27.8278,53.2939 53.8207,27.301 43.9212,17.4015 17.9281,43.3946 14.3904,52.6032"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.3354,13.9873 50.8388,10.4839 60.7383,20.3834 57.2645,23.8572"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18.5562",
      x2: "28.4557",
      y1: "42.7665",
      y2: "52.6659",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "14.3979,52.5817 11.9073,59.3148 18.6558,56.809"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.9099",
      x2: "46.4225",
      y1: "25.0073",
      y2: "34.5199",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "18.6304,56.8203 27.8278,53.2939 53.8207,27.301 43.9212,17.4015 17.9281,43.3946 14.3904,52.6032"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "47.3354,13.9873 50.8388,10.4839 60.7383,20.3834 57.2645,23.8572"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "18.5562",
      x2: "28.4557",
      y1: "42.7665",
      y2: "52.6659",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "14.3979,52.5817 11.9073,59.3148 18.6558,56.809"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "36.9099",
      x2: "46.4225",
      y1: "25.0073",
      y2: "34.5199",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Pencil;