import React from 'react';

const OpenMailboxWithRaisedFlag = ({
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
      fill: "#61b2e4",
      d: "M58.7,27.6c0-5.4-2.9627-10.4219-7.3-11.6-3.4284-.9312-15.4-.6-15.4-.6l-11.8036-.0976c-.7,0,3.5036,6.2976,3.5036,12.2976V39.3a2.338,2.338,0,0,1-2.1226,2.3964L58.7,41.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M34.6,27.6V39.4a2.1631,2.1631,0,0,1-2.1,2.3H15.3a2.15,2.15,0,0,1-2-2.3V26.6a12.27,12.27,0,0,1,4.6-9.1A9.5025,9.5025,0,0,1,24,15.3a13.5523,13.5523,0,0,1,2,.2h0C30.9,16.6,34.6,21.6,34.6,27.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M41.2,33h.9a1.12,1.12,0,0,0,1.2-1V22h2.1a1.12,1.12,0,0,0,1.2-1V13.6a1.1256,1.1256,0,0,0-1.2-1H41.2a1.12,1.12,0,0,0-1.2,1V32A1.1256,1.1256,0,0,0,41.2,33Z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "23.0266",
      y: "25.4621",
      rx: "1.5627",
      width: "11.2568",
      height: "14.2977",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M39.3,59.4V41.6533l-6.813.0082L32.5,46.4v13"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40,15.3463c-7.5-.1255-15.804-.0439-15.804-.0439"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.5774,41.6964,58.7,41.6v-14c0-5.4-2.9627-10.4219-7.3-11.6a30.0066,30.0066,0,0,0-4.8008-.4629"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2,33h.9a1.12,1.12,0,0,0,1.2-1V22h2.1a1.12,1.12,0,0,0,1.2-1V13.6a1.1256,1.1256,0,0,0-1.2-1H41.2a1.12,1.12,0,0,0-1.2,1V32A1.1256,1.1256,0,0,0,41.2,33Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.6,27.6V39.4a2.1631,2.1631,0,0,1-2.1,2.3H15.3a2.15,2.15,0,0,1-2-2.3V26.6a12.27,12.27,0,0,1,4.6-9.1A9.5025,9.5025,0,0,1,24,15.3a13.5523,13.5523,0,0,1,2,.2h0C30.9,16.6,34.6,21.6,34.6,27.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.3,59.4V41.6533l-6.813.0082L32.5,46.4v13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.2866,34.46l-4.9684,4.72a2.44,2.44,0,0,1-.2662-1.054V25.9823"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2526,39.73h-10.18a1.0489,1.0489,0,0,1-.7985-.55l5.3677-5.0866"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.1711,25.4324H23.8061a.9014.9014,0,0,0-.71.4582c0,.0458-.0444.0458-.0444.0917l7.0091,6.7363,1.9963,1.8788c.0887.0916.2218.1833.31.2749a2.8492,2.8492,0,0,0,1.8032.6117"
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
      d: "M40,15.3463c-7.5-.1255-15.804-.0439-15.804-.0439"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.5774,41.6964,58.7,41.6v-14c0-5.4-2.9627-10.4219-7.3-11.6a30.0066,30.0066,0,0,0-4.8008-.4629"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.2,33h.9a1.12,1.12,0,0,0,1.2-1V22h2.1a1.12,1.12,0,0,0,1.2-1V13.6a1.1256,1.1256,0,0,0-1.2-1H41.2a1.12,1.12,0,0,0-1.2,1V32A1.1256,1.1256,0,0,0,41.2,33Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.6,27.6V39.4a2.1631,2.1631,0,0,1-2.1,2.3H15.3a2.15,2.15,0,0,1-2-2.3V26.6a12.27,12.27,0,0,1,4.6-9.1A9.5025,9.5025,0,0,1,24,15.3a13.5523,13.5523,0,0,1,2,.2h0C30.9,16.6,34.6,21.6,34.6,27.6Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.3,59.4V41.6533l-6.813.0082L32.5,46.4v13"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M28.2866,34.46l-4.9684,4.72a2.44,2.44,0,0,1-.2662-1.054V25.9823"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2526,39.73h-10.18a1.0489,1.0489,0,0,1-.7985-.55l5.3677-5.0866"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.1711,25.4324H23.8061a.9014.9014,0,0,0-.71.4582c0,.0458-.0444.0458-.0444.0917l7.0091,6.7363,1.9963,1.8788c.0887.0916.2218.1833.31.2749a2.8492,2.8492,0,0,0,1.8032.6117"
    })));
  }
};

export default OpenMailboxWithRaisedFlag;