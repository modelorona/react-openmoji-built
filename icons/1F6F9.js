import React from 'react';

const Skateboard = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "51",
      cy: "47.9995",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21",
      cy: "47.9995",
      r: "3"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "M56.4082,43H15.5918c-2.8975,0-5.4512-3.4863-5.47-3.5215A.9948.9948,0,0,1,10,39.001v-2a1,1,0,0,1,1.7861-.6182C12.3213,37.0615,14.1689,39,15.5918,39H56.4082c1.4326,0,3.2725-1.9375,3.8037-2.6152A1,1,0,0,1,62,37v2a.9979.9979,0,0,1-.2109.6143C61.5186,39.9609,59.0732,43,56.4082,43ZM15.5918,41h0ZM60.999,39.001h0ZM11,39.001h0Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "51",
      cy: "47.9995",
      r: "3",
      fill: "#d22f27"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21",
      cy: "47.9995",
      r: "3",
      fill: "#d22f27"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M56.4082,43H15.5918c-2.8594,0-5.4453-3.4775-5.4658-3.5127a1,1,0,0,1,1.6963-1.0547C12.3477,39.1289,14.1855,41,15.5918,41H56.4082c1.4326,0,3.2725-1.9375,3.8037-2.6152a1,1,0,0,1,1.5772,1.23C61.5186,39.9609,59.0732,43,56.4082,43Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52,46.2674a2,2,0,1,1-2,3.4641"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,46.2674a2,2,0,1,1-2,3.4641"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
      cx: "51",
      cy: "47.9995",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "21",
      cy: "47.9995",
      r: "3"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M56.4082,43H15.5918c-2.8594,0-5.4453-3.4775-5.4658-3.5127a1,1,0,0,1,1.6963-1.0547C12.3477,39.1289,14.1855,41,15.5918,41H56.4082c1.4326,0,3.2725-1.9375,3.8037-2.6152a1,1,0,0,1,1.5772,1.23C61.5186,39.9609,59.0732,43,56.4082,43Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52,46.2674a2,2,0,1,1-2,3.4641"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22,46.2674a2,2,0,1,1-2,3.4641"
    })));
  }
};

export default Skateboard;