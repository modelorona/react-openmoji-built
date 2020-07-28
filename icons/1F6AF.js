import React from 'react';

const NoLittering = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "26",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m44.37 51.95a20.26 20.26 0 0 1-0.3614-3.468c0.012-1.251 0.2252-2.51-0.4312-3.632a1.501 1.501 0 0 0-2.59 1.514c0.2483 0.4244 0.03 1.397 0.024 1.871-0.0074 0.5543-0.0152 1.11 6e-4 1.664a22.69 22.69 0 0 0 0.4655 2.847c0.2932 1.902 3.184 1.094 2.893-0.7975z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m37.21 52.29c-0.0548-3.709 1.254-7.461 0.7625-11.19-0.2487-1.887-3.252-1.911-3 0 0.4912 3.725-0.8174 7.467-0.7625 11.19a1.501 1.501 0 0 0 3 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m33.7 36.99c0.2941-0.9753 0.1408-1.363-0.7802-1.307-0.9233 0.08491-1.901 0.915-2.22 1.885l-0.4297 1.034c-0.2941 0.9753 0.857 1.741 1.778 1.685 1.526-0.5964 1.387-1.846 1.652-3.297z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      strokeMiterlimit: "10",
      d: "m36 7c-16.02 0-29 12.98-29 29s12.98 29 29 29 29-12.98 29-29-12.98-29-29-29zm-25.21 29.27c0-5.075 3.417-12.69 6.202-16.49l35.2 35.27c-3.805 2.784-10.93 5.904-16.01 5.904-12.7 0-25.39-11.98-25.39-24.68zm44.87 15.18-35.06-35.13c3.805-2.784 10.77-5.441 15.84-5.441 12.7 0 24.68 12.25 24.68 24.95 0 5.075-2.686 11.81-5.47 15.62z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m42.26 38.41c0.9522 0.9074 3.635-0.05086 3.667-1.366-0.101-2.951-1.172-7.742-1.25-10.69-0.0609-2.306-0.8246-3.727-3.114-4.646-1.622-0.651-4.874-1.277-6.385-0.2623-2.127 1.429-1.65 6.398-1.883 8.601 4.596 0.8426 7.325 6.671 8.964 8.368z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m38.88 17.81a1.501 1.501 0 0 0 0-3 1.501 1.501 0 0 0 0 3z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "30",
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
      d: "m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.75",
      cy: "40.25",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25.25",
      cy: "45.5",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.5",
      cy: "52.25",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.75",
      cy: "51.5",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.75",
      cy: "46.25",
      r: "0.75",
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
      d: "m35.04 37.83-0.7718 14.38s0 1.789 0.5964 1.789 1.193 0 1.789-1.193c0.4051-0.8102 1.085-7.394 1.48-11.54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40.26 43.24c0.3452 4.234 1.164 9.57 1.164 9.57 0 1.59 2.386 1.59 2.386 0l-0.2833-6.092"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.11",
      x2: "31",
      y1: "35.57",
      y2: "39",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.04",
      cy: "16.54",
      r: "1.789",
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
      d: "m45 37.09s0-8.946-0.5964-12.52-2.982-3.578-2.982-3.578h-4.772c-1.661-0.03537-3.017 1.321-2.982 2.982 0 0-0.2956 2.3-0.4356 4.642"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m42.39 37.64-0.8574-12.54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.15 31.74 0.307-6.63"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "30",
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
      d: "m55.66 51.44a24.99 24.99 0 0 0-35.06-35.13z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m16.99 19.77a24.99 24.99 0 0 0 35.2 35.27z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.75",
      cy: "40.25",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "25.25",
      cy: "45.5",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "27.5",
      cy: "52.25",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.75",
      cy: "51.5",
      r: "0.75",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "20.75",
      cy: "46.25",
      r: "0.75",
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
      d: "m35.04 37.83-0.7718 14.38s0 1.789 0.5964 1.789 1.193 0 1.789-1.193c0.4051-0.8102 1.085-7.394 1.48-11.54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m40.26 43.24c0.3452 4.234 1.164 9.57 1.164 9.57 0 1.59 2.386 1.59 2.386 0l-0.2833-6.092"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "32.11",
      x2: "31",
      y1: "35.57",
      y2: "39",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.04",
      cy: "16.54",
      r: "1.789",
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
      d: "m45 37.09s0-8.946-0.5964-12.52-2.982-3.578-2.982-3.578h-4.772c-1.661-0.03537-3.017 1.321-2.982 2.982 0 0-0.2956 2.3-0.4356 4.642"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m42.39 37.64-0.8574-12.54"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.15 31.74 0.307-6.63"
    })));
  }
};

export default NoLittering;