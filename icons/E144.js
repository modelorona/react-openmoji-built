import React from 'react';

const Outlet = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M57.0411,61.0669H14.8659c-2.1608,0-3.9124-1.7516-3.9124-3.9124V14.9793 c0-2.1608,1.7516-3.9124,3.9124-3.9124h42.1752c2.1608,0,3.9124,1.7516,3.9124,3.9124v42.1752 C60.9535,59.3153,59.2019,61.0669,57.0411,61.0669z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M12.1023,59.9056C12.7806,60.5819,13.7165,61,14.75,61h42.5c2.0711,0,3.75-1.6789,3.75-3.75v-42.5 c0-1.0365-0.4206-1.9749-1.1003-2.6536L12.1023,59.9056z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      d: "M25.4014,46.6146C22.6822,43.8995,21,40.1462,21,36v0c0-8.2843,6.7157-15,15-15h0 c4.1411,0,7.8903,1.6781,10.6046,4.3914L25.4014,46.6146z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.6046,25.3914C49.3203,28.106,51,31.8568,51,36v0c0,8.2843-6.7157,15-15,15h0c-4.1381,0-7.8848-1.6757-10.5986-4.3854"
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
      d: "M58,61H14c-1.6569,0-3-1.3431-3-3V14c0-1.6569,1.3431-3,3-3h44c1.6569,0,3,1.3431,3,3v44C61,59.6569,59.6569,61,58,61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.6046,25.3914C49.3203,28.106,51,31.8568,51,36v0c0,8.2843-6.7157,15-15,15h0c-4.1381,0-7.8848-1.6757-10.5986-4.3854"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.75",
      cy: "36",
      r: "3.75",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.25",
      cy: "36",
      r: "3.75",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "15",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58,61H14c-1.6569,0-3-1.3431-3-3V14c0-1.6569,1.3431-3,3-3h44c1.6569,0,3,1.3431,3,3v44C61,59.6569,59.6569,61,58,61z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.6046,25.3914C49.3203,28.106,51,31.8568,51,36v0c0,8.2843-6.7157,15-15,15h0c-4.1381,0-7.8848-1.6757-10.5986-4.3854"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.75",
      cy: "36",
      r: "3.75",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "42.25",
      cy: "36",
      r: "3.75",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "15",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Outlet;