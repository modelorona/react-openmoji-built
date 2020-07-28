import React from 'react';

const Piñata = ({
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "24.8004",
      y: "56",
      rx: "2.0196",
      width: "8.2319",
      height: "4.9583",
      fill: "#8967aa"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "40.4664",
      y: "56",
      rx: "2.0196",
      width: "8.2319",
      height: "4.9583",
      fill: "#8967aa"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      points: "25.309 58.031 32.737 58.031 33.333 49.922 24.475 49.922 25.309 58.031"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      points: "48.058 58.031 41.354 58.031 39.638 50.104 48.794 50.104 48.058 58.031"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#b1cc33",
      points: "24.52 53.271 33.113 53.271 33.952 50.104 39.638 50.104 40.478 53.271 48.621 53.271 49.681 43.232 23.781 43.232 24.52 53.271"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#e67a94",
      points: "49.344 46.692 41.244 46.692 39.38 43.656 37.817 45.688 35.398 45.688 33.891 43.656 32.11 45.688 30.195 45.688 28.45 43.656 26.886 46.692 24.266 46.692 22.702 37.805 50.128 37.805 49.344 46.692"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      points: "49.713 37.805 49.863 40.803 46.017 40.834 44.272 37.805 42.708 39.836 40.346 39.836 38.601 37.805 37.038 39.836 34.62 39.836 33.112 37.805 31.304 40.862 23.576 40.862 22.234 37.406 14.153 35.76 12.48 32.958 12.48 30.141 33.523 30.141 33.523 32.231 36.056 33.984 46.609 34.234 49.713 37.805"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#61b2e4",
      points: "33.523 31.045 34.336 34.449 30.026 34.449 28.193 31.385 26.63 33.416 24.211 33.416 22.704 31.385 20.923 33.416 19.008 33.416 17.263 31.385 15.535 34.449 13.141 34.449 12.816 28.297 18.101 24.4 31.893 24.826 33.523 31.045"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "32.661 27.269 33.144 28.274 25.491 28.274 23.875 25.237 22.105 28.274 13.141 28.274 23.257 21.048 23.51 17.402 30.069 17.402 30.469 21.61 32.661 27.269"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#f1b31c",
      points: "30.469 21.121 29.335 21.121 27.827 19.09 26.046 22.124 21.751 22.124 23.599 20.502 23.859 12.388 29.175 12.388 30.469 21.121"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fcea2b",
      points: "29.735 14.974 23.575 14.974 24.489 10.121 26.321 8.248 28.389 10.261 29.735 14.974"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.0447,28.718a50.9486,50.9486,0,0,0-2.6571-7.7831.7613.7613,0,0,1-.065-.2757c-.058-1.3759-.6253-12.2818-4.0433-12.1226-3.23.15-2.8123,9.65-2.6741,11.8245a.758.758,0,0,1-.3477.6864l-9.3459,6.0771A2.9579,2.9579,0,0,0,12.48,29.6584V32.652a3.7251,3.7251,0,0,0,3.217,3.69l5.7258.7884c2.1713.21,2.3663,3.5306,2.3676,6.1408,0,.0184.0007.0363.0022.0546l1.255,15.78A1.8525,1.8525,0,0,0,26.9,60.9583h4.0044a1.8524,1.8524,0,0,0,1.8524-1.8525l.4347-8.3377a.7672.7672,0,0,1,.76-.6641h5.6861a.7672.7672,0,0,1,.7584.6513l.6069,8.3505a1.8525,1.8525,0,0,0,1.8525,1.8525h3.2322A1.8525,1.8525,0,0,0,47.94,59.1058l2.1836-19.9222a4.97,4.97,0,0,0-4.9117-5.1686l-9.63-.1064A1.9555,1.9555,0,0,1,33.68,32.1519a28.4052,28.4052,0,0,0-.6348-3.4339"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30.469 21.121 29.335 21.121 27.827 19.09 26.046 21.121"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.8 27.269 25.382 27.269 23.875 25.237 22.094 27.269 20.179 27.269"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "15.7 33.416 17.263 31.385 19.008 33.416 20.923 33.416 22.704 31.385 24.211 33.416 26.63 33.416 28.193 31.385 29.938 33.416"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "31.331 39.836 33.112 37.805 34.62 39.836 37.038 39.836 38.601 37.805 40.346 39.836 42.708 39.836 44.272 37.805 46.017 39.836"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.886 45.688 28.45 43.656 30.195 45.688 32.11 45.688 33.891 43.656 35.398 45.688 37.817 45.688 39.38 43.656 41.125 45.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.5244,44.5659a10.0043,10.0043,0,0,1-6.75-9.46"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.5245,50.4176a10.0171,10.0171,0,0,1-6.5469-7.4447"
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
      d: "M33.0447,28.718a50.9486,50.9486,0,0,0-2.6571-7.7831.7613.7613,0,0,1-.065-.2757c-.058-1.3759-.6253-12.2818-4.0433-12.1226-3.23.15-2.8123,9.65-2.6741,11.8245a.758.758,0,0,1-.3477.6864l-9.3459,6.0771A2.9579,2.9579,0,0,0,12.48,29.6584V32.652a3.7251,3.7251,0,0,0,3.217,3.69l5.7258.7884c2.1713.21,2.3663,3.5306,2.3676,6.1408,0,.0184.0007.0363.0022.0546l1.255,15.78A1.8525,1.8525,0,0,0,26.9,60.9583h4.0044a1.8524,1.8524,0,0,0,1.8524-1.8525l.4347-8.3377a.7672.7672,0,0,1,.76-.6641h5.6861a.7672.7672,0,0,1,.7584.6513l.6069,8.3505a1.8525,1.8525,0,0,0,1.8525,1.8525h3.2322A1.8525,1.8525,0,0,0,47.94,59.1058l2.1836-19.9222a4.97,4.97,0,0,0-4.9117-5.1686l-9.63-.1064A1.9555,1.9555,0,0,1,33.68,32.1519a28.4052,28.4052,0,0,0-.6348-3.4339"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "30.469 21.121 29.335 21.121 27.827 19.09 26.046 21.121"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27.8 27.269 25.382 27.269 23.875 25.237 22.094 27.269 20.179 27.269"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "15.7 33.416 17.263 31.385 19.008 33.416 20.923 33.416 22.704 31.385 24.211 33.416 26.63 33.416 28.193 31.385 29.938 33.416"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "31.331 39.836 33.112 37.805 34.62 39.836 37.038 39.836 38.601 37.805 40.346 39.836 42.708 39.836 44.272 37.805 46.017 39.836"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.886 45.688 28.45 43.656 30.195 45.688 32.11 45.688 33.891 43.656 35.398 45.688 37.817 45.688 39.38 43.656 41.125 45.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.5244,44.5659a10.0043,10.0043,0,0,1-6.75-9.46"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M59.5245,50.4176a10.0171,10.0171,0,0,1-6.5469-7.4447"
    })));
  }
};

export default Piñata;