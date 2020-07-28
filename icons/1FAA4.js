import React from 'react';

const MouseTrap = ({
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
      d: "M31.591,39.3414,31.6,39.33c-.0129-.0246-.0339-.0434-.0486-.0668a1.081,1.081,0,0,0-.0868-.1193,1.1028,1.1028,0,0,0-.1277-.13,1.0309,1.0309,0,0,0-.1049-.0818,1.09,1.09,0,0,0-.2061-.1076c-.0175-.0069-.0313-.02-.0493-.0258-.0083-.0028-.0169-.0017-.0252-.0043a.9609.9609,0,0,0-.2545-.0424c-.0285-.0018-.056-.0069-.0843-.0065-.0115.0006-.0228-.0037-.0342-.0027l-8.6729.381a1.0992,1.0992,0,0,0-1.0506,1.0978V42.623a1.1058,1.1058,0,0,0,.01.1471,4.6005,4.6005,0,0,0,1.7878,3.1732,7.1609,7.1609,0,0,0,4.2388,1.2147,8.0249,8.0249,0,0,0,1.0377-.06l0-.0245a1.08,1.08,0,0,0,.7249-.4l2.8492-3.7667a1.103,1.103,0,0,0,.2221-.6631V39.84A1.0834,1.0834,0,0,0,31.591,39.3414Zm-7.6,1.2911c-.4664,0-.8446-.2268-.8446-.5064s.3782-.5064.8446-.5064.8445.2267.8445.5064S24.4573,40.6325,23.9909,40.6325Zm3.3872,1.1953c-1.0616,0-1.9222-.516-1.9222-1.1525s.8606-1.1524,1.9222-1.1524S29.3,40.0388,29.3,40.6753,28.44,41.8278,27.3781,41.8278Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      d: "M30.9046,57.9627a1.0919,1.0919,0,0,1-.4546-.0992L9.4828,48.3175a1.09,1.09,0,0,1-.6407-.9926V42.9485a1.09,1.09,0,0,1,.5562-.95L43.85,22.5611a1.0957,1.0957,0,0,1,.9755-.0512L65.198,31.33a1.09,1.09,0,0,1,.1155,1.9436L32,52.6534v4.2175a1.0945,1.0945,0,0,1-1.0953,1.0918Z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#6a462f",
      points: "64.813 32.263 64.813 37.053 30.848 56.964 30.848 51.663 64.813 32.263"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M27.7773,47.1087A1.098,1.098,0,0,1,26.6784,46.01V43.6082a1.1034,1.1034,0,0,1,.2222-.6632L29.75,39.1773a1.0991,1.0991,0,0,1,1.9756.6631v2.4028a1.103,1.103,0,0,1-.2221.6631L28.654,46.673A1.099,1.099,0,0,1,27.7773,47.1087Zm2.8491-4.8655h0Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M27.9857,44.1714l-.0571,2.9265a8.0249,8.0249,0,0,1-1.0377.06,7.1609,7.1609,0,0,1-4.2388-1.2147A4.6005,4.6005,0,0,1,20.8643,42.77a1.1058,1.1058,0,0,1-.01-.1471V40.2214a1.0992,1.0992,0,0,1,1.0506-1.0978l8.6729-.381A1.0885,1.0885,0,0,1,31.6,39.33Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "27.3781",
      cy: "40.6754",
      rx: "1.9222",
      ry: "1.1525",
      fill: "#f1b31c"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "23.9909",
      cy: "40.1261",
      rx: "0.8445",
      ry: "0.5064",
      fill: "#f1b31c"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "29.311 31.934 9.849 42.95 9.849 47.356 30.884 56.964 64.849 37.053 64.849 32.263 58.275 36.006"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.8635,30.1233l10.2022-8.5952a3.6558,3.6558,0,0,1,4.1018-.5243l13.3418,5.769a2.6207,2.6207,0,0,1,.2877,4.3617l-11.8813,9.678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.449,39.8462,49.5009,26.4434s-1.31-2.673,1.0547-3.0178"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "38.822 47.109 30.848 51.663 23.991 48.818"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.38,37.0435s1.3494-3.129,3.8656-1.4244"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.1092,35.5656s1.3493-3.129,3.8656-1.4245"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.5841,41.2459s1.3494-3.129,3.8656-1.4244"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.3133,39.768s1.3494-3.129,3.8656-1.4245"
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
      d: "M31.591,39.3414,31.6,39.33c-.0129-.0246-.0339-.0434-.0486-.0668a1.081,1.081,0,0,0-.0868-.1193,1.1028,1.1028,0,0,0-.1277-.13,1.0309,1.0309,0,0,0-.1049-.0818,1.09,1.09,0,0,0-.2061-.1076c-.0175-.0069-.0313-.02-.0493-.0258-.0083-.0028-.0169-.0017-.0252-.0043a.9609.9609,0,0,0-.2545-.0424c-.0285-.0018-.056-.0069-.0843-.0065-.0115.0006-.0228-.0037-.0342-.0027l-8.6729.381a1.0992,1.0992,0,0,0-1.0506,1.0978V42.623a1.1058,1.1058,0,0,0,.01.1471,4.6005,4.6005,0,0,0,1.7878,3.1732,7.1609,7.1609,0,0,0,4.2388,1.2147,8.0249,8.0249,0,0,0,1.0377-.06l0-.0245a1.08,1.08,0,0,0,.7249-.4l2.8492-3.7667a1.103,1.103,0,0,0,.2221-.6631V39.84A1.0834,1.0834,0,0,0,31.591,39.3414Zm-7.6,1.2911c-.4664,0-.8446-.2268-.8446-.5064s.3782-.5064.8446-.5064.8445.2267.8445.5064S24.4573,40.6325,23.9909,40.6325Zm3.3872,1.1953c-1.0616,0-1.9222-.516-1.9222-1.1525s.8606-1.1524,1.9222-1.1524S29.3,40.0388,29.3,40.6753,28.44,41.8278,27.3781,41.8278Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "29.311 31.934 9.849 42.95 9.849 47.356 30.884 56.964 64.849 37.053 64.849 32.263 58.275 36.006"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.8635,30.1233l10.2022-8.5952a3.6558,3.6558,0,0,1,4.1018-.5243l13.3418,5.769a2.6207,2.6207,0,0,1,.2877,4.3617l-11.8813,9.678"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M33.449,39.8462,49.5009,26.4434s-1.31-2.673,1.0547-3.0178"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "38.822 47.109 30.848 51.663 23.991 48.818"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.38,37.0435s1.3494-3.129,3.8656-1.4244"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.1092,35.5656s1.3493-3.129,3.8656-1.4245"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41.5841,41.2459s1.3494-3.129,3.8656-1.4244"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M38.3133,39.768s1.3494-3.129,3.8656-1.4245"
    })));
  }
};

export default MouseTrap;