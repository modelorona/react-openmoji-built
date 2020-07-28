import React from 'react';

const Ewe = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M10.7127,17.125l-3.1478,2.7497l-2.747,3.9321v2.5057l2.6453,1.0866l4.8374-0.7267l1.9397,3.1378 l0.6091,2.8132c0,0,1.0894,2.1144,3.5389,3.4955c0,0-1.6761,2.0945,1.3867,4.0503l0.6461,3.6836l4.1076,0.7031L23.0574,59 l2.4692,2.794l4.118-0.7253h1.7352l0.9624-1.6004l-0.3379-13.9138l3.9579,0.571l5.2088,0.2623l3.9121-0.8334l3.153,0.1126 l6.4305-1.2506l3.0833,5l0.0134,10.0995l1.2663,2.1509l2.6031-1.5836l1.301-10.2965l-1.26-3.399l-0.9145-5.6454l1.7764-4.0802 l-0.4634-3.4689l0.8615-4.234l-2.3462-2.0844L58.83,24.0861l-3.1634-0.5027l-3.329-1.75l-4.625,1.0417l-2.9583-1.0417 L41.1716,22.29c0,0-3.6047-0.71-5.6568,0c0,0-3.8854-1.915-5.5938-0.54c0,0-6.0477,0.3598-6.8636,1.1791 c0,0-1.1343-1.5616-3.3426-1.0498l0.7062-3.7543c0,0-2.0328-3.625-5.7935-1.7833C12.1508,17.5546,10.7127,17.125,10.7127,17.125z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M9.7922,18.1866c0,0,4.3788,0.4801,6.1288,3.5634l2.5891,0.54l1.9109-2.0517l-0.9167-4.1634h-3.75 L11.944,16.977L9.7922,18.1866z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M19.0044,22.29c0,0,1.3297,6.8052-4.3768,8.716L15.1066,34.5l2.6988,1.0851l-0.3844,2.7482l2.3539,1.8359 v2.7475c0,0,7.0206,1.1253,7.5029,4.6269c0,0,3.4766-3.6843,4.7266-1.9889l3,0.8334l3.0429-0.8334l3.1238,0.8334h3.5l5.5-0.8334 c0,0,4.0182,0.7201,4.4956-1.1379c0,0,3.6773-3.7112,6.3408-0.5639l-0.2482-3.1102l1.7764-4.0802l-0.4634-3.4689l0.8866-2.7768 l-2.6686-3.0317L58.83,24.0861l-3.1634-0.5027l-3.329-1.75l-4.0833,0.8333l-3.5-0.8333l-2.4131,0.777l-2.8369-0.777L35.5148,22.29 l-2.5938-1.1902l-3,0.6502l-3.6667-1.0833L22.5877,22.29C22.5877,22.29,21.8377,20.4132,19.0044,22.29z"
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
      d: "M23.0574,22.9291c0,0,3.6604-3.4572,6.1926-0.8662c0,0,4.3429-1.8549,6.5,0.4371c0,0,3.8325-1.7757,6.0833,0.4167 c0,0,3.5093-2.5403,6.4167,0.25c0,0,4.25-2.5,7.4167,0.4167c0,0,4.5833-1,4.6237,3.8016c0,0,3.7514,2.1213,1.7819,5.8085 c0,0,1.761,3.9732-1.313,7.5491c0,0-0.0759,4.7775,1.6838,7.043c0.4358,0.5611,0.5798,1.2965,0.4908,2.0014l-1.301,10.2965 c-0.1235,0.9776-0.955,1.7106-1.9403,1.7106h0c-1.2088,0-2.1281-1.0856-1.9291-2.2779L57.75,49.4167c0,0-1.489-3.3059-3.0833-5 c0,0-1.7853-0.5603-3.3797-2.5534"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5833,40.1194c0.9911,1.8333,0.7589,6.2567,0.7589,6.2567v13.0923c0,1.0092-0.8181,1.8274-1.8274,1.8274h0 c-0.9342,0-1.7179-0.7046-1.817-1.6334l-0.8573-8.033l-0.5627-4.0858c-1.5944-3.3882-4.5955-3.5875-4.5955-3.5875 c-3.4701-0.1993-2.9074-3.7868-2.9074-3.7868c-2.9074-0.7972-1.9695-4.5841-1.9695-4.5841C14,34.9167,14.6667,30.5,14.6667,30.5 l-2.3661-3.8276c-0.967-0.1323-1.955-0.0498-2.8468,0.3467c-0.4923,0.2189-1.1527,0.3952-1.9906,0.38 C6.1865,27.376,5.4102,26.96,4.9383,26.4601c-0.678-0.7181-0.686-1.8437-0.1204-2.6533l2.747-3.9321l2.5328-1.9197 c1.13-0.8565,2.5091-1.32,3.927-1.32h0.5971c0,0,5.6119-2.26,5.5628,2.2991c-0.051,4.742-3.562,3.2397-3.562,3.2397"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.3333,45.5546c0,0,0.9167,0.8215,2.9492-0.0979c0.2007,0.0096,4.6708,2.1931,6.3774-0.1599c0,0,2.2509,1.7544,4.6893-0.3384"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2766,45.5546c-0.0857,0.8158,0.5325,5.0353-0.7205,12.9143c-0.1937,1.2178,0.7374,2.3286,1.9705,2.3286"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.7288,27.3849c0.3751,0.3276,3.939-2.1638,1.313,17.468"
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
      d: "M23.0574,22.9291c0,0,3.6604-3.4572,6.1926-0.8662c0,0,4.3429-1.8549,6.5,0.4371c0,0,3.8325-1.7757,6.0833,0.4167 c0,0,3.5093-2.5403,6.4167,0.25c0,0,4.25-2.5,7.4167,0.4167c0,0,4.5833-1,4.6237,3.8016c0,0,3.7514,2.1213,1.7819,5.8085 c0,0,1.761,3.9732-1.313,7.5491c0,0-0.0759,4.7775,1.6838,7.043c0.4358,0.5611,0.5798,1.2965,0.4908,2.0014l-1.301,10.2965 c-0.1235,0.9776-0.955,1.7106-1.9403,1.7106h0c-1.2088,0-2.1281-1.0856-1.9291-2.2779L57.75,49.4167c0,0-1.489-3.3059-3.0833-5 c0,0-1.7853-0.5603-3.3797-2.5534"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.5833,40.1194c0.9911,1.8333,0.7589,6.2567,0.7589,6.2567v13.0923c0,1.0092-0.8181,1.8274-1.8274,1.8274h0 c-0.9342,0-1.7179-0.7046-1.817-1.6334l-0.8573-8.033l-0.5627-4.0858c-1.5944-3.3882-4.5955-3.5875-4.5955-3.5875 c-3.4701-0.1993-2.9074-3.7868-2.9074-3.7868c-2.9074-0.7972-1.9695-4.5841-1.9695-4.5841C14,34.9167,14.6667,30.5,14.6667,30.5 l-2.3661-3.8276c-0.967-0.1323-1.955-0.0498-2.8468,0.3467c-0.4923,0.2189-1.1527,0.3952-1.9906,0.38 C6.1865,27.376,5.4102,26.96,4.9383,26.4601c-0.678-0.7181-0.686-1.8437-0.1204-2.6533l2.747-3.9321l2.5328-1.9197 c1.13-0.8565,2.5091-1.32,3.927-1.32h0.5971c0,0,5.6119-2.26,5.5628,2.2991c-0.051,4.742-3.562,3.2397-3.562,3.2397"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.3333,45.5546c0,0,0.9167,0.8215,2.9492-0.0979c0.2007,0.0096,4.6708,2.1931,6.3774-0.1599c0,0,2.2509,1.7544,4.6893-0.3384"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.2766,45.5546c-0.0857,0.8158,0.5325,5.0353-0.7205,12.9143c-0.1937,1.2178,0.7374,2.3286,1.9705,2.3286"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M64.7288,27.3849c0.3751,0.3276,3.939-2.1638,1.313,17.468"
    })));
  }
};

export default Ewe;