import React from 'react';

const Koala = ({
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
      fill: "#9b9b9a",
      stroke: "none",
      d: "M33.671,13.1667l-9.5676,2.0199l-3.2691-1.2877l-3.777,2.3309v3.2295l2.0674,3.5065l3.3492,1.2264 l1.4421,3.1644l2.5118,2.0122l-0.6532,2.4645l-1.2611,6.6238l1.2611,6.3762l0.4796,1.7016c0,0,0.6484,0.965,2.2409,1.715 l0.4258,3.3333l-0.4258,3.75l2.2591,5.2151l3.3333,0.3655l2.5724-0.1501c0,0,3.9395,0.2497,4.4752-0.2154 s6.1066-2.9344,6.1066-2.9344s4.6112-4.4254,5.1625-8.3512c0.5513-3.9258,0.7095-8.8683-0.9862-12.2225 c-1.6957-3.3541-4.5391-7.1481-4.5391-7.1481l-2.1037-3.4937l-2.7711-2.4818c0,0-2.25-0.6667-2.75,0 c-0.5,0.6667-0.4811-2.4202-0.4811-2.4202l3.1478-0.8246c0,0,1.544-3.5904,1.1667-4.5885s-0.3743-3.25-0.3743-3.25 s-3.2635-2.1329-5.2263-1.2294C35.5243,12.5074,33.671,13.1667,33.671,13.1667z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#3F3F3F",
      stroke: "none",
      points: "30.046,19.5417 28.2127,21.1667 28.2127,23.5833 29.718,25.417 31.6294,25.417 32.3377,23.9583 32.171,21.0417"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M33.2985,29.1427c0,0,3.2267,1.1698,0.6642,3.3573c-2.5625,2.1875-3.3125,4.8125-3.3125,4.8125l0.5,4.9375 l-1.4322,4.7531l-0.4428,1.5594c0,0-3.1875-1.375-4.0625-4.1875s-0.6868-6.6751-0.6868-6.6751l2.2492-7.8281L33.2985,29.1427z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "30.321",
      cy: "22.5728",
      rx: "2.1681",
      ry: "3.1246",
      transform: "matrix(0.984 -0.1779 0.1779 0.984 -3.5329 5.7559)",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.718,29.8718c3.0586-0.2054,7.1509-1.8162,8.3837-3.5592c1.2328-1.743,0.6715-4.8163,0.6715-4.8163 c4.1661-0.085,3.8936-3.1148,3.9398-6.6981c0.0466-3.6123-4.2196-3.3423-4.2196-3.3423c-1.8815-0.085-4.8601,2.3639-4.8601,2.3639 c-5.3989-0.6802-9.1055,1.5278-9.1905,1.6554c0,0-2.0885-2.0015-4.2053-1.5048c0,0-5.2238,1.059-2.935,6.0958 c2.5587,5.631,5.0901,3.718,5.0901,3.718S23.3231,30.3013,29.718,29.8718z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.1316,32.1828c-0.085,0.2551-4.1642,2.4082-1.8115,10.179l-2.113,6.1217c-0.5557,1.6099-0.7898,3.3132-0.6889,5.0133 l0.0818,1.3795c0.116,1.9558,0.952,3.8854,2.5426,5.0294c4.1465,2.9821,6.2598-1.6811,6.7751-2.7554 c0.6364-1.327-0.4461-3.0488-2.177-2.6161"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.3193,33.2218l0.7242,3.5918c0.2186,1.0842,0.0441,2.2108-0.4923,3.1781l-2.0778,3.7471"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.8791,50.0563c0,0-9.0974-5.739-12.4558-0.2551c-0.7194,1.1747-1.0896,2.2557-1.2273,3.2293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.0359,29.8718c0,0-5.5566,8.1245-0.1749,15.6562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0383,60.9139c-1.3177,0.143-2.7591,0.0637-4.2978-0.3655"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,24.8333c2.4884,0.7826,3.621,2.0388,4.8791,5.0588c7.7875,8.5881,7.9542,20.1068,1.3604,26.7534 c0,0-3.2138,3.7271-8.2012,4.2684"
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "30.321",
      cy: "22.5728",
      rx: "2.1681",
      ry: "3.1246",
      transform: "matrix(0.984 -0.1779 0.1779 0.984 -3.5329 5.7559)",
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.718,29.8718c3.0586-0.2054,7.1509-1.8162,8.3837-3.5592c1.2328-1.743,0.6715-4.8163,0.6715-4.8163 c4.1661-0.085,3.8936-3.1148,3.9398-6.6981c0.0466-3.6123-4.2196-3.3423-4.2196-3.3423c-1.8815-0.085-4.8601,2.3639-4.8601,2.3639 c-5.3989-0.6802-9.1055,1.5278-9.1905,1.6554c0,0-2.0885-2.0015-4.2053-1.5048c0,0-5.2238,1.059-2.935,6.0958 c2.5587,5.631,5.0901,3.718,5.0901,3.718S23.3231,30.3013,29.718,29.8718z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.1316,32.1828c-0.085,0.2551-4.1642,2.4082-1.8115,10.179l-2.113,6.1217c-0.5557,1.6099-0.7898,3.3132-0.6889,5.0133 l0.0818,1.3795c0.116,1.9558,0.952,3.8854,2.5426,5.0294c4.1465,2.9821,6.2598-1.6811,6.7751-2.7554 c0.6364-1.327-0.4461-3.0488-2.177-2.6161"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.3193,33.2218l0.7242,3.5918c0.2186,1.0842,0.0441,2.2108-0.4923,3.1781l-2.0778,3.7471"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.8791,50.0563c0,0-9.0974-5.739-12.4558-0.2551c-0.7194,1.1747-1.0896,2.2557-1.2273,3.2293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.0359,29.8718c0,0-5.5566,8.1245-0.1749,15.6562"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0383,60.9139c-1.3177,0.143-2.7591,0.0637-4.2978-0.3655"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42,24.8333c2.4884,0.7826,3.621,2.0388,4.8791,5.0588c7.7875,8.5881,7.9542,20.1068,1.3604,26.7534 c0,0-3.2138,3.7271-8.2012,4.2684"
    })));
  }
};

export default Koala;