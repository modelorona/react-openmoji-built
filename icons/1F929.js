import React from 'react';

const StarStruck = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36.0001",
      cy: "36",
      r: "24",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F1B31C",
      points: "25.0424,21.2371 33.0285,20.0364 29.1238,27.1056 32.7335,34.3298 24.8037,32.8007 19.0485,38.4662 18.0524,30.452 10.8857,26.7292 18.1999,23.3052 19.5258,15.3389"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#F1B31C",
      points: "46.8821,21.2371 38.896,20.0364 42.8007,27.1056 39.191,34.3298 47.1208,32.8007 52.876,38.4662 53.8721,30.452 61.0388,26.7292 53.7246,23.3052 52.3987,15.3389"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M49.7371,46.356c-1.79,4.27-6.35,7.23-13.7,7.23c-7.41,0-12.03-3.03-13.8-7.36 C24.2671,46.686,37.2171,49.3959,49.7371,46.356z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M50.6071,41.866c0,1.6-0.29,3.11-0.87,4.49c-12.52,3.04-25.47,0.33-27.5-0.13 c-0.55-1.35-0.83-2.82-0.83-4.36h0.11c0,0,14.81,3.59,28.89,0.07L50.6071,41.866z"
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
      d: "M50.0533,44.0367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.9977,44.0367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.6071,41.866c0,1.6-0.29,3.11-0.87,4.49c-12.52,3.04-25.47,0.33-27.5-0.13c-0.55-1.35-0.83-2.82-0.83-4.36h0.11 c0,0,14.81,3.59,28.89,0.07L50.6071,41.866z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7371,46.356 c-1.79,4.27-6.35,7.23-13.7,7.23c-7.41,0-12.03-3.03-13.8-7.36C24.2671,46.686,37.2171,49.3959,49.7371,46.356z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.2271,46.236 c-0.16,0.04-0.33,0.08-0.49,0.12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2371,46.226 c-0.19-0.05-0.28-0.07-0.28-0.07"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.5542,15.5591C43.3932,13.9237,39.8045,13,36,13c-3.9546,0-7.676,0.9979-10.9261,2.7556 c-0.0502,0.0271-0.1002,0.0544-0.1501,0.0819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.1945,32.9954c-0.1283,0.9833-0.1944,1.9862-0.1944,3.0046c0,12.7022,10.2969,23,23,23c12.7022,0,23-10.2978,23-23 c0-1.0073-0.0648-1.9995-0.1903-2.9726"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "25.1179,21.2371 33.104,20.0364 29.1993,27.1056 32.809,34.3298 24.8792,32.8007 19.124,38.4662 18.1279,30.452 10.9612,26.7292 18.2754,23.3052 19.6013,15.3389"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46.8821,21.2371 38.896,20.0364 42.8007,27.1056 39.191,34.3298 47.1208,32.8007 52.876,38.4662 53.8721,30.452 61.0388,26.7292 53.7246,23.3052 52.3987,15.3389"
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
      d: "M50.0533,44.0367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.9977,44.0367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.6071,41.866c0,1.6-0.29,3.11-0.87,4.49c-12.52,3.04-25.47,0.33-27.5-0.13c-0.55-1.35-0.83-2.82-0.83-4.36h0.11 c0,0,14.81,3.59,28.89,0.07L50.6071,41.866z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.7371,46.356 c-1.79,4.27-6.35,7.23-13.7,7.23c-7.41,0-12.03-3.03-13.8-7.36C24.2671,46.686,37.2171,49.3959,49.7371,46.356z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.2271,46.236 c-0.16,0.04-0.33,0.08-0.49,0.12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2371,46.226 c-0.19-0.05-0.28-0.07-0.28-0.07"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.5542,15.5591C43.3932,13.9237,39.8045,13,36,13c-3.9546,0-7.676,0.9979-10.9261,2.7556 c-0.0502,0.0271-0.1002,0.0544-0.1501,0.0819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.1945,32.9954c-0.1283,0.9833-0.1944,1.9862-0.1944,3.0046c0,12.7022,10.2969,23,23,23c12.7022,0,23-10.2978,23-23 c0-1.0073-0.0648-1.9995-0.1903-2.9726"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "25.1179,21.2371 33.104,20.0364 29.1993,27.1056 32.809,34.3298 24.8792,32.8007 19.124,38.4662 18.1279,30.452 10.9612,26.7292 18.2754,23.3052 19.6013,15.3389"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46.8821,21.2371 38.896,20.0364 42.8007,27.1056 39.191,34.3298 47.1208,32.8007 52.876,38.4662 53.8721,30.452 61.0388,26.7292 53.7246,23.3052 52.3987,15.3389"
    })));
  }
};

export default StarStruck;