import React from 'react';

const Sparkle = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1062,18.8152s-.7537,16.3242-16.1286,16.37a.6482.6482,0,1,0,0,1.2963h.0046s16.3242,1.0989,16.37,16.4738l-.0005.1462a.6482.6482,0,0,0,1.2963,0c.0457-15.375,16.37-16.62,16.37-16.62h.0046a.6482.6482,0,1,0,0-1.2963c-15.3749-.0457-16.62-16.37-16.62-16.37a.6482.6482,0,0,0-1.2963,0Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      d: "M60,61H12a.9448.9448,0,0,1-1-1V12a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1V60A.9448.9448,0,0,1,60,61Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1062,18.8569s-.7537,16.3242-16.1286,16.37a.6482.6482,0,1,0,0,1.2963h.0046s16.3242,1.0989,16.37,16.4738l-.0005.1462a.6482.6482,0,0,0,1.2963,0c.0457-15.375,16.37-16.62,16.37-16.62h.0046a.6482.6482,0,1,0,0-1.2963c-15.3749-.0457-16.62-16.37-16.62-16.37a.6482.6482,0,0,0-1.2963,0Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60,60.9583H12a.9448.9448,0,0,1-1-1v-48a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1v48A.9448.9448,0,0,1,60,60.9583Z"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.1062,18.8152s-.7537,16.3242-16.1286,16.37a.6482.6482,0,1,0,0,1.2963h.0046s16.3242,1.0989,16.37,16.4738l-.0005.1462a.6482.6482,0,0,0,1.2963,0c.0457-15.375,16.37-16.62,16.37-16.62h.0046a.6482.6482,0,1,0,0-1.2963c-15.3749-.0457-16.62-16.37-16.62-16.37a.6482.6482,0,0,0-1.2963,0Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60,60.9583H12a.9448.9448,0,0,1-1-1v-48a.9448.9448,0,0,1,1-1H60a.9448.9448,0,0,1,1,1v48A.9448.9448,0,0,1,60,60.9583Z"
    })));
  }
};

export default Sparkle;