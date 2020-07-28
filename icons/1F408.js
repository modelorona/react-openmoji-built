import React from 'react';

const Cat = ({
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
      fill: "#e27022",
      d: "m47.25 44.38 2.658 2.696 5.591 1.245-1.291 4.058 0.75 3.218 2.208-0.7136 2.625-4.979 1.699-5.4c-3.714-2.637-4.903-6.142-6.384-9.809z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      d: "m30.95 43.79-1.819 2.842-1.583 7.534-1.602 1.754-2.94-1.088-0.3333-5.25s0.5-4.511 1-6.547c0.5-2.036 5.333-2.366 5.333-2.366l1.944 3.121z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      d: "m50.8 29.28c-0.0178-0.0229-0.0324-0.0417-0.0436-0.0563 0.0125 0.0162 0.0251 0.0325 0.0436 0.0563z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      d: "m51.75 30.51c-0.1079-0.1391-0.1959-0.2526-0.2845-0.3668 0.1603 0.2067 0.2845 0.3668 0.2845 0.3668z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      d: "m51.47 30.14c-0.2275-0.2932-0.5278-0.6804-0.6703-0.8642 0.0998 0.1286 0.3097 0.3994 0.6703 0.8642z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "m67.14 16.53-2.516-0.3133-4.29 1.557c-0.4949 3.096-1.209 8.033-1.209 8.033l-4.066 3.823-6.591 0.9037-5.66-2.434-15.53-1.146-6.442 1.238-6.324-2.754-4.26-2.829-3.623 0.739 1.75 3.417-3.318 5.1 0.9412 4.237s4.63 0.0092 6.91 0.5499l3.396-1.197c-0.5476 2.351 0.6858 4.811 1.548 6.939-2.867 1.41-4.38 2.611-5.217 4.64-0.3842 0.9322-0.6255 3.266-0.7894 4.648l2.798 2.062s3.938-0.3125 2.344-4.577l2.799-2.733c1.502-0.7944 4.45-2.175 4.45-2.175l14.5 0.7273 2.743 3.189-1.329 7.442 2.556-0.2704 4.885-6.5v-3.489s4.941-5.533 6.021-8.887l0.0119 0.0164s5.806-3.004 8.03-7.525c3.597-5.054-0.6774-9.975 4.438-8.312 1.289 0.4189 2.883-2.184 1.32-3.809-0.2826-0.3119-0.1871-0.2065-0.2826-0.3119z"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m12.46 35.74c-2.333 1-4.917 0.8333-4.917 0.8333-1.677 0.1458-3.115-4.01-2.485-4.733l3.318-5.1-1.75-3.417s5.008-1.415 7.883 2.09c0.3444 0.42 0.7943 0.7429 1.279 0.9871 0.0298 0.015 0.0602 0.0302 0.0912 0.0456 2.593 1.289 5.546 1.571 8.385 0.9981 7.222-1.458 14.07-1.37 21.7 2.212 7.625 3.583 14.53-2.25 13.64-7.5-0.793-4.647 3.562-7.583 6.75-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m16.05 48.82c0.6006-2.206 8.491-3.648 8.491-3.648s3.228-1.201 1.426-4.504"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m18.3 33.24c-1.543 1.834-3.893 4.803-0.44 9.158 0 0-6.756 2.853-6.006 8.033 0 0 0.3624 2.476 2.402 2.402"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.5 50.03c-1.156 7.254 2.386 6.055 3.017 5.661 1.148-0.7173 1.848-9.854 3.952-11.31 1.592-1.104 8.167-0.3021 8.167-0.3021"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.44 41.33c0.0911 1.742 0.7529 3.402 1.734 4.845 0.6616 0.9727 1.803 2.32 1.453 2.985-4.479 8.5 0.6224 7.022 1.083 6.167 3.188-5.917 6.125-4.104 4.647-10.52 0 0 5.27-1.81 5.52-7.977"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.15 45.59s2.367 3.204 7.758 2.693c0 0-3.326 6.762 0 7.62 1.917 0.4941 4.722-11.16 4.722-11.16s-1.839-0.7937-3.951-4.182"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m12.46 35.74c-2.333 1-4.917 0.8333-4.917 0.8333-1.677 0.1458-3.115-4.01-2.485-4.733l3.318-5.1-1.75-3.417s5.008-1.415 7.883 2.09c0.3444 0.42 0.7943 0.7429 1.279 0.9871 0.0298 0.015 0.0602 0.0302 0.0912 0.0456 2.593 1.289 5.546 1.571 8.385 0.9981 7.222-1.458 14.07-1.37 21.7 2.212 7.625 3.583 14.53-2.25 13.64-7.5-0.793-4.647 3.562-7.583 6.75-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m16.05 48.82c0.6006-2.206 8.491-3.648 8.491-3.648s3.228-1.201 1.426-4.504"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m18.3 33.24c-1.543 1.834-3.893 4.803-0.44 9.158 0 0-6.756 2.853-6.006 8.033 0 0 0.3624 2.476 2.402 2.402"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.5 50.03c-1.156 7.254 2.386 6.055 3.017 5.661 1.148-0.7173 1.848-9.854 3.952-11.31 1.592-1.104 8.167-0.3021 8.167-0.3021"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.44 41.33c0.0911 1.742 0.7529 3.402 1.734 4.845 0.6616 0.9727 1.803 2.32 1.453 2.985-4.479 8.5 0.6224 7.022 1.083 6.167 3.188-5.917 6.125-4.104 4.647-10.52 0 0 5.27-1.81 5.52-7.977"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.15 45.59s2.367 3.204 7.758 2.693c0 0-3.326 6.762 0 7.62 1.917 0.4941 4.722-11.16 4.722-11.16s-1.839-0.7937-3.951-4.182"
    })));
  }
};

export default Cat;