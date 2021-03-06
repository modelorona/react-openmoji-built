import React from 'react';

const Books = ({
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
      d: "M61.7754,24.6733H14.1634c-6.1765,3.0412-0.9202,8.7233-0.9202,8.7233s-4.9227,4.5487-0.2522,8.6632 c-1.6977,3.0229-2.6689,5.0042-1.112,7.5619l25.8,6.909l24.0963-5.8538V24.6733z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#D22F27",
      stroke: "none",
      points: "14.0703,24.4681 37.6357,18.221 60.9068,24.5451 60.9195,24.5914 37.6357,30.9156"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "60.9068",
      y1: "18.221",
      y2: "24.5451",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "14.0703",
      y1: "18.221",
      y2: "24.4681",
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "15.9466",
      x2: "37.6357",
      y1: "24.8179",
      y2: "30.9156",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "12.7413",
      y1: "39.1118",
      y2: "32.5173",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "60.9068",
      y1: "18.221",
      y2: "24.5451",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "24.5914",
      y2: "30.9156",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "14.0703",
      y1: "18.221",
      y2: "24.4681",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "32.7877",
      y2: "39.1118",
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
      d: "M13.3847,32.6831c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "12.7413",
      y1: "47.8205",
      y2: "41.226",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "41.4964",
      y2: "47.8205",
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
      d: "M13.3847,41.3918c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.679",
      x2: "12.7846",
      y1: "56.5306",
      y2: "49.9361",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9628",
      x2: "37.679",
      y1: "50.2065",
      y2: "56.5306",
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
      d: "M13.4281,50.1019c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
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
    }, /*#__PURE__*/React.createElement("line", {
      x1: "15.9466",
      x2: "37.6357",
      y1: "24.8179",
      y2: "30.9156",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "12.7413",
      y1: "39.1118",
      y2: "32.5173",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "60.9068",
      y1: "18.221",
      y2: "24.5451",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "24.5914",
      y2: "30.9156",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "14.0703",
      y1: "18.221",
      y2: "24.4681",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "32.7877",
      y2: "39.1118",
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
      d: "M13.3847,32.6831c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.6357",
      x2: "12.7413",
      y1: "47.8205",
      y2: "41.226",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9195",
      x2: "37.6357",
      y1: "41.4964",
      y2: "47.8205",
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
      d: "M13.3847,41.3918c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37.679",
      x2: "12.7846",
      y1: "56.5306",
      y2: "49.9361",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60.9628",
      x2: "37.679",
      y1: "50.2065",
      y2: "56.5306",
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
      d: "M13.4281,50.1019c-1.8468-0.5568-2.8025-2.8039-2.1346-5.0192c0.6679-2.2153,2.7064-3.5598,4.5532-3.003"
    })));
  }
};

export default Books;