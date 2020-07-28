import React from 'react';

const Unicorn = ({
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
      d: "M23.7544,12.3618l1.6667,7.1667l-5.3333,5.3333l-8.3333,14.3333l1,4.6667l2.1667,1.3333l4-0.1667 l3.5-3.3333l6.8333-1.8333c0,0,1.3333,1.5,2.1667,3s3.6667,4.1667,3.6667,4.1667l0.5,6l-1.8333,6.1667l-2,2.8333 c0,0,22,9.5,33.1667-7l-0.5-6l-1.8333-5l-3.3333-5.1667l-1-1.5l-0.1667-5.1667l-2.8333-5.3333l-5-3l-2.6667-4.5l-5.1667-4.1667 l-6.5-1.5l-5.6667,1l-4.1667-2.1667L23.7544,12.3618z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M50.671,23.155l5.2083,4.095c0,0,5.5638,8.2181-0.3258,17.8201c-7.0492,11.4924,0,0,0,0 c-1.6183,3.4754-2.3141,6.7423-1.738,9.7216l-5.3111-4.4167V34.2917L50.671,23.155z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#EA5A47",
      stroke: "none",
      points: "25.8985,19.2712 10.7847,12.0212 15.951,18.1399 21.1747,23.995 25.8985,19.2712"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "none",
      d: "M29.7367,13.6311l10.7677,0.1362c0,0,9.2377,4.0661,10.5355,11.8161l0.6874,8.9567 c-2.6337,6.5386-3.0562,14.1267,2.0883,20.8336l0,0c0,0-7.1444,1.3215-9.8944-7.1094L42.3377,43.5l0.3258-6.0341l1.4169-5.6426 l-0.2833-4.8929l-2.2761-4.3124l-3.5322-2.8413l-5.792-2.0801L29.7367,13.6311"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "none",
      d: "M58.4549,36.75c0,0,5.5192,6.4066,6.9982,15.1193c0.1838,1.0826,0.1251,2.193-0.1377,3.2591 c-0.4317,1.7512-0.8179,4.9979,0.1452,7.3825c0.4689,1.1611-0.5621,2.3655-1.7883,2.1115 c-3.7094-0.7686-9.2437-3.6474-10.2567-8.0876c-0.0239-0.1047-0.0368-0.2138-0.0417-0.321l-0.266-5.7459 c-0.0132-0.2857,0.0516-0.5695,0.1875-0.8211l3.692-6.8359c0.0666-0.1233,0.1164-0.2549,0.1482-0.3914L58.4549,36.75"
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
      d: "M58.4549,37.7826C60.2229,40.1443,65,44.4647,64.5,54.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.5,41.8854c0,0,8.4783,6.7823,0,18.7647"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.809,19.1338 10.25,11.75 21.1747,23.995"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.1962,30.8696c0.5489,8.3555-9.3225,9.703-11.954,10.3347c-0.3325,0.0798-0.6318,0.25-0.8736,0.4919l-2.2227,2.2227 c-0.3494,0.3494-0.8234,0.5458-1.3176,0.5458h-3.5121c-1.203,0-2.2711-0.7698-2.6515-1.9111l-0.531-1.5931 c-0.258-0.774-0.1649-1.6222,0.2549-2.3218l8.7862-14.6436l4.7238-4.7238l-2.1151-6.9054c0,0,7.8026-0.6987,8.4135,5.3308 c0,0,16.9281,2.4418,10.5531,19.383c0,0-1.625,5.9489,2.375,11.1846"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9167,14.0208c0,0,22.2444-4.0208,19.9583,19.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.9187,23.155c0,0,14.7665,6.5865,5.4563,22.22c0,0-5.375,6.5625,0.625,13.6042"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24.4167",
      cy: "28.9304",
      r: "2",
      fill: "#000000",
      stroke: "none"
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
      d: "M58.4549,37.7826C60.2229,40.1443,65,44.4647,64.5,54.0208"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.5,41.8854c0,0,8.4783,6.7823,0,18.7647"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "24.809,19.1338 10.25,11.75 21.1747,23.995"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.1962,30.8696c0.5489,8.3555-9.3225,9.703-11.954,10.3347c-0.3325,0.0798-0.6318,0.25-0.8736,0.4919l-2.2227,2.2227 c-0.3494,0.3494-0.8234,0.5458-1.3176,0.5458h-3.5121c-1.203,0-2.2711-0.7698-2.6515-1.9111l-0.531-1.5931 c-0.258-0.774-0.1649-1.6222,0.2549-2.3218l8.7862-14.6436l4.7238-4.7238l-2.1151-6.9054c0,0,7.8026-0.6987,8.4135,5.3308 c0,0,16.9281,2.4418,10.5531,19.383c0,0-1.625,5.9489,2.375,11.1846"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M30.9167,14.0208c0,0,22.2444-4.0208,19.9583,19.9583"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.9187,23.155c0,0,14.7665,6.5865,5.4563,22.22c0,0-5.375,6.5625,0.625,13.6042"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24.4167",
      cy: "28.9304",
      r: "2",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default Unicorn;