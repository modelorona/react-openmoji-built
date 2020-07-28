import React from 'react';

const Joker = ({
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
      x: "16.5",
      y: "4.8",
      width: "39",
      height: "62.4",
      fill: "#d0cfce"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#ea5a47",
      points: "35.806 48.602 26.843 51.115 27.93 46.615 21.283 46.466 24.239 44.005 28.268 42.502 45.313 42.78 50.338 46.309 44.057 46.615 45.501 51.115 35.806 48.602"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M41.9248,50.1883c.6289.8354,3.5763.9269,3.5763.9269l-1.4445-4.5,6.2818-.3059L45.3127,42.78,42.3879,42.69C41.7716,43.053,41.2959,49.3528,41.9248,50.1883Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      d: "M21.0209,23.286c-.6734.15,3.9411-6.4248,11.4258-2.5271,0,0,4.5-10.7789,14.4109-6.7508,0,0-8.1695,6.2635-6.0268,5.9931,8.2578-1.042,9.3575,4.3845,9.3575,4.3845C40.1169,21.5471,45.81,29.9874,45.81,29.9874c-6.8537-6.8408-14.4739-5.7178-19.9542-.7242C25.856,29.2632,28.82,21.5471,21.0209,23.286Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M40.8308,20.0012c8.2578-1.042,9.3575,4.3845,9.3575,4.3845C40.1169,21.5471,45.81,29.9874,45.81,29.9874c-2.0246-2.0207-6.0321-2.3908-6.1648-4.0666C39.386,22.6467,39.321,20.1917,40.8308,20.0012Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M44.8886,28.89c-.2972-2.0864-11.3522-6.9564-18.0832-.6564,0,0-.2566,4.3777-.2566,5.312,0,6.3731,4.1333,11.54,9.2319,11.54s9.2316-5.1665,9.2316-11.54A26.4689,26.4689,0,0,0,44.8886,28.89Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "16.5",
      y: "4.8",
      width: "39",
      height: "62.4",
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
      d: "M21.0209,23.286c-.6734.15,3.9411-6.4248,11.4258-2.5271,0,0,4.5-10.7789,14.4109-6.7508,0,0-8.1695,6.2635-6.0268,5.9931,8.2578-1.042,9.3575,4.3845,9.3575,4.3845C40.1169,21.5471,45.81,29.9874,45.81,29.9874c-6.8537-6.8408-14.4739-5.7178-19.9542-.7242C25.856,29.2632,28.82,21.5471,21.0209,23.286Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.9961,42.78c-1.211.0039-6.32,3.4383-6.32,5.0027,0,0,6.5691-1.77,8.2538-1.1678,0,0-1.939,3.8151-1.8187,5.8608,0,0,6.3717-3.1424,9.8822-3.1424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.99,42.78c1.211.0039,6.32,3.4383,6.32,5.0027,0,0-6.5692-1.77-8.2539-1.1678,0,0,1.9391,3.8151,1.8187,5.8608,0,0-6.3717-3.1424-9.8822-3.1424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.37,7.35v4.5a2.5,2.5,0,0,1-2.5,2.5h0a2.4908,2.4908,0,0,1-1.6728-.642"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.63,64.2165v-4.5a2.5,2.5,0,0,1,2.5-2.5h0a2.4908,2.4908,0,0,1,1.6728.642"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.782",
      cy: "27.4753",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.8332",
      cy: "16.4818",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.6797",
      cy: "26.4668",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.7716,31.0968a1.9489,1.9489,0,1,1-1.9488-1.9489,1.95,1.95,0,0,1,1.9488,1.9489"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9763,31.0968a1.9489,1.9489,0,1,1-1.9489-1.9489,1.95,1.95,0,0,1,1.9489,1.9489"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.925,40.8433a7.4566,7.4566,0,0,1-3.3591-.836.9745.9745,0,1,1,.8717-1.7432,5.24,5.24,0,0,0,4.9748,0,.9745.9745,0,1,1,.8717,1.7432A7.4566,7.4566,0,0,1,35.925,40.8433Z"
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
    }, /*#__PURE__*/React.createElement("rect", {
      x: "16.5",
      y: "4.8",
      width: "39",
      height: "62.4",
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
      d: "M21.0209,23.286c-.6734.15,3.9411-6.4248,11.4258-2.5271,0,0,4.5-10.7789,14.4109-6.7508,0,0-8.1695,6.2635-6.0268,5.9931,8.2578-1.042,9.3575,4.3845,9.3575,4.3845C40.1169,21.5471,45.81,29.9874,45.81,29.9874c-6.8537-6.8408-14.4739-5.7178-19.9542-.7242C25.856,29.2632,28.82,21.5471,21.0209,23.286Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25.9961,42.78c-1.211.0039-6.32,3.4383-6.32,5.0027,0,0,6.5691-1.77,8.2538-1.1678,0,0-1.939,3.8151-1.8187,5.8608,0,0,6.3717-3.1424,9.8822-3.1424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M45.99,42.78c1.211.0039,6.32,3.4383,6.32,5.0027,0,0-6.5692-1.77-8.2539-1.1678,0,0,1.9391,3.8151,1.8187,5.8608,0,0-6.3717-3.1424-9.8822-3.1424"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.37,7.35v4.5a2.5,2.5,0,0,1-2.5,2.5h0a2.4908,2.4908,0,0,1-1.6728-.642"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.63,64.2165v-4.5a2.5,2.5,0,0,1,2.5-2.5h0a2.4908,2.4908,0,0,1,1.6728.642"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50.782",
      cy: "27.4753",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "48.8332",
      cy: "16.4818",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.6797",
      cy: "26.4668",
      r: "1.9488"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M41.7716,31.0968a1.9489,1.9489,0,1,1-1.9488-1.9489,1.95,1.95,0,0,1,1.9488,1.9489"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M33.9763,31.0968a1.9489,1.9489,0,1,1-1.9489-1.9489,1.95,1.95,0,0,1,1.9489,1.9489"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M35.925,40.8433a7.4566,7.4566,0,0,1-3.3591-.836.9745.9745,0,1,1,.8717-1.7432,5.24,5.24,0,0,0,4.9748,0,.9745.9745,0,1,1,.8717,1.7432A7.4566,7.4566,0,0,1,35.925,40.8433Z"
    })));
  }
};

export default Joker;