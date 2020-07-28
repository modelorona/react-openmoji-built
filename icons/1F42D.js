import React from 'react';

const MouseFace = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      points: "24.5044,18 15.3377,10.3027 11.5836,11.2079 6.906,17.3619 8.1401,26.0456 12.4059,32.3314 16.1846,34.7518 14.8993,42.5027 16.3705,50.1714 19.923,54.4308 31.5367,59.7587 35.7544,61.8333 38.5715,61.6734 42.0616,59.9329 52.4704,55.4193 57.2544,51.6432 59.1003,43.4119 57.9653,35.2319 61.1775,32.6917 66.0682,25.5117 67.3109,18.4167 65.5044,13.0833 60.5473,9.8333 56.4224,12.4946 49.5603,18.8354 43.0587,15.993 33.6357,15.3973 26.7818,17.5842"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFA7C0",
      stroke: "none",
      d: "M62.9163,11.3865l-3.1454,2.4885l-5.0591,8.25v9.625c0,0,1.5061,3.2138,3.2535,3.4819l5.6892-5.1203 l2.8083-5.4866l0.8483-7.2631l-1.2199-2.6339L62.9163,11.3865z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFA7C0",
      stroke: "none",
      d: "M11.0837,11.7749l3.1454,2.4885l5.0591,8.25v9.625c0,0-1.5061,3.2138-3.2535,3.4819L10.3456,30.5 l-2.8083-5.4866l-0.8483-7.2631l1.2199-2.6339L11.0837,11.7749z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "26.7818",
      cy: "38.6203",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37",
      x2: "37",
      y1: "54.469",
      y2: "57.491",
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
      d: "M42.0616,59.9329l10.4088-4.5136c10.5713-5.4638,5.345-20.6675,5.345-20.6675c4.3948-1.7817,6.8394-6.0914,6.8394-6.0914 c6.3409-12.3194-0.2162-16.7439-3.6864-18.1503c-1.0579-0.4287-2.2666-0.1795-3.0757,0.6257l-8.3325,7.6996 c-8.3737-4.9392-16.7472-4.9392-25.1207,0l-8.3325-7.6996c-0.809-0.8052-2.0178-1.0544-3.0757-0.6257 C9.5613,11.9165,3.0043,16.341,9.3451,28.6604c0,0,2.4446,4.3097,6.8394,6.0914c0,0-5.2263,15.2037,5.345,20.6675l10.4088,4.5136 C34.6794,62.4669,39.3207,62.4668,42.0616,59.9329z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.4527,14.728c0,0,8.077,3.8724,5.2263,16.5211"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.2182",
      cy: "38.6203",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.5473,14.728c0,0-8.077,3.8724-5.2263,16.5211"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M34.449,50.265c1.4173-0.2612,3.1422-0.4049,4.971-0.1656c1.8102,0.2369,2.6036,1.9215,1.4716,3.0418l-1.9003,1.8806 c-0.9386,0.9289-2.7309,0.9772-3.7505,0.1011l-2.0222-1.7375C31.9765,52.3183,32.645,50.5974,34.449,50.265z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "26.7818",
      cy: "38.6203",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "37",
      x2: "37",
      y1: "54.469",
      y2: "57.491",
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
      d: "M42.0616,59.9329l10.4088-4.5136c10.5713-5.4638,5.345-20.6675,5.345-20.6675c4.3948-1.7817,6.8394-6.0914,6.8394-6.0914 c6.3409-12.3194-0.2162-16.7439-3.6864-18.1503c-1.0579-0.4287-2.2666-0.1795-3.0757,0.6257l-8.3325,7.6996 c-8.3737-4.9392-16.7472-4.9392-25.1207,0l-8.3325-7.6996c-0.809-0.8052-2.0178-1.0544-3.0757-0.6257 C9.5613,11.9165,3.0043,16.341,9.3451,28.6604c0,0,2.4446,4.3097,6.8394,6.0914c0,0-5.2263,15.2037,5.345,20.6675l10.4088,4.5136 C34.6794,62.4669,39.3207,62.4668,42.0616,59.9329z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.4527,14.728c0,0,8.077,3.8724,5.2263,16.5211"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.2182",
      cy: "38.6203",
      r: "3",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M60.5473,14.728c0,0-8.077,3.8724-5.2263,16.5211"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M34.449,50.265c1.4173-0.2612,3.1422-0.4049,4.971-0.1656c1.8102,0.2369,2.6036,1.9215,1.4716,3.0418l-1.9003,1.8806 c-0.9386,0.9289-2.7309,0.9772-3.7505,0.1011l-2.0222-1.7375C31.9765,52.3183,32.645,50.5974,34.449,50.265z"
    })));
  }
};

export default MouseFace;