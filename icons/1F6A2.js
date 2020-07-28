import React from 'react';

const Ship = ({
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
      fill: "#EA5A47",
      d: "M68,26.0871H32.9622c-0.5314,0-0.9622,0.391-0.9622,0.8733v2.4004h36V26.0871z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M68,25.0871H46.7416l6.1518-13.0284c0.1277-0.31,0.4055-0.5086,0.7113-0.5086H68"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M32,29.3608c0,0,13.4044,6.7981,15.6724,22.2469c0.0637,0.4344,0.4686,0.7673,0.9515,0.7673H68V29.3608"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M63.146,11.5501V5.8734C63.146,5.391,63.4699,5,63.8695,5h2.261c0.3996,0,0.7235,0.391,0.7235,0.8734 v5.6767H63.146z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M32,29.3608c0,0,10.4044,6.7981,12.6724,22.2469c0.0637,0.4344,0.4686,0.7673,0.9515,0.7673H67"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M67,25.625H32.9622C32.4308,25.625,32,26.016,32,26.4984v2.4004h35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M67,26.0871H45.7416l7.1518-14.0284c0.1277-0.31,0.4055-0.5086,0.7113-0.5086H68"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      x2: "4",
      y1: "68",
      y2: "48.2353",
      fill: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "69",
      x2: "68",
      y1: "48.2353",
      y2: "68",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M68,47v21H4V47h1c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3H68z"
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
      d: "M63.146,11.5501V5.8734C63.146,5.391,63.4699,5,63.8695,5h2.261c0.3996,0,0.7235,0.391,0.7235,0.8734v5.6767H63.146z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M32,29.3608c0,0,8.8829,5.804,12.0224,18.8735"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M67,25.625H32.9622C32.4308,25.625,32,26.016,32,26.4984v2.4004h35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M66,25.625H45.7416l7.1518-13.5663c0.1277-0.31,0.4055-0.5086,0.7113-0.5086H67"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M5,47c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
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
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M63.146,11.5501V5.8734C63.146,5.391,63.4699,5,63.8695,5h2.261c0.3996,0,0.7235,0.391,0.7235,0.8734v5.6767H63.146z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M32,29.3608c0,0,8.8829,5.804,12.0224,18.8735"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M67,25.625H32.9622C32.4308,25.625,32,26.016,32,26.4984v2.4004h35"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M66,25.625H45.7416l7.1518-13.5663c0.1277-0.31,0.4055-0.5086,0.7113-0.5086H67"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "53.7229",
      x2: "64.3773",
      y1: "16.3536",
      y2: "16.3536",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "51.5349",
      x2: "64.3773",
      y1: "20.4474",
      y2: "20.4474",
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
      d: "M5,47c3,0,9,3,15,3s10-3,16-3s11,3,16,3s7-3,15-3"
    })));
  }
};

export default Ship;