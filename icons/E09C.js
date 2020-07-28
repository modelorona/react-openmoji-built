import React from 'react';

const Earthquake = ({
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
      fill: "#9b9b9a",
      points: "36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 22.978 36.303 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899 33.33 11.134 40.153 14.303 36.641 23.012"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3f3f3f",
      points: "36.641 23.012 40.117 26.752 37.922 30.756 37.936 36.303 47.788 36.303 47.633 32.761 46.005 28.481 46.823 24.602 46.104 16.936 40.153 14.303 36.641 23.012"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M19.2578,58.568c0-9.1562,6.9838-16.4253,16.6672-16.5788,9.112-.1445,16.6422,6.2323,16.6671,16.5788Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "32.584 30.153 27.436 30.153 26.919 24.245 32.067 24.245 32.584 30.153"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.7387,57.9618a6.1863,6.1863,0,0,1,12.3726,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.5875,43.7779c3.219,3.0927,5.3153,8.6178,5.3153,13.6429"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11.9472,57.4208a21.1963,21.1963,0,0,1,5.64-13.6346"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "46.104 16.936 46.823 24.602 46.005 28.481 47.633 32.761 47.788 36.303"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "22.9 35.531 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "18.743 22.984 33.33 11.134 49.646 18.544"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.7178",
      x2: "25.0792",
      y1: "17.1835",
      y2: "12.3992",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.919 24.245 32.067 24.245 32.584 30.153"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "38.164 19.237 36.641 23.012 40.117 26.724 37.93 30.758 37.937 36.214"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.3198",
      x2: "32.675",
      y1: "36.3028",
      y2: "36.3028",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.8398",
      x2: "59.6802",
      y1: "36.3028",
      y2: "36.3028",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.9783,42.615A15.8563,15.8563,0,0,1,52.5921,57.9081"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.2578,57.9081c0-7.3088,5.61-14.2373,13.7462-15.6474"
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
      d: "M29.7387,57.9618a6.1863,6.1863,0,0,1,12.3726,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M54.5875,43.7779c3.219,3.0927,5.3153,8.6178,5.3153,13.6429"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11.9472,57.4208a21.1963,21.1963,0,0,1,5.64-13.6346"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "46.104 16.936 46.823 24.602 46.005 28.481 47.633 32.761 47.788 36.303"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "22.9 35.531 22.592 32.459 21.554 30.277 22.063 27.49 21.298 20.899"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "18.743 22.984 33.33 11.134 49.646 18.544"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "25.7178",
      x2: "25.0792",
      y1: "17.1835",
      y2: "12.3992",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "26.919 24.245 32.067 24.245 32.584 30.153"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "38.164 19.237 36.641 23.012 40.117 26.724 37.93 30.758 37.937 36.214"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12.3198",
      x2: "32.675",
      y1: "36.3028",
      y2: "36.3028",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "42.8398",
      x2: "59.6802",
      y1: "36.3028",
      y2: "36.3028",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.9783,42.615A15.8563,15.8563,0,0,1,52.5921,57.9081"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M19.2578,57.9081c0-7.3088,5.61-14.2373,13.7462-15.6474"
    })));
  }
};

export default Earthquake;