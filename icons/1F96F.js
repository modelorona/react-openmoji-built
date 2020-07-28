import React from 'react';

const Bagel = ({
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
      fill: "#6a462f",
      strokeWidth: "1.447",
      d: "m62.08 27.87q-0.05948-0.2026-0.1342-0.4107c-2.15-6.021-7.764-9.784-13.55-11.87a40.48 40.48 0 0 0-13.68-2.282c-0.9065 0-1.818 0.03198-2.731 0.08683a39.63 39.63 0 0 1 11.45 2.195c5.787 2.083 11.4 5.847 13.55 11.87q0.07453 0.2085 0.134 0.4107a4.409 4.409 0 0 1-1.557 5.012 17.33 17.33 0 0 1-5.465 2.953 56.24 56.24 0 0 1-17.84 2.983q1.228 0.03198 2.451 0.03198a59.52 59.52 0 0 0 20.35-3.015 17.33 17.33 0 0 0 5.465-2.953 4.409 4.409 0 0 0 1.557-5.012z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      strokeWidth: "1.447",
      d: "m9.008 41.9q0.05962 0.2334 0.1344 0.4739c2.156 6.947 7.784 11.29 13.59 13.69a35.81 35.81 0 0 0 13.72 2.633 33.34 33.34 0 0 0 19.5-5.818 20.2 20.2 0 0 0 7.601-9.872 8.818 8.818 0 0 0 0.4687-3.731 5.495 5.495 0 0 0-2.076-3.524 19.45 19.45 0 0 0-6.427-3.57 55.16 55.16 0 0 0-19.07-2.954 52.51 52.51 0 0 0-20.4 3.479 21.82 21.82 0 0 0-3.415 1.756 12.6 12.6 0 0 0-2.063 1.651 5.549 5.549 0 0 0-1.562 5.783z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      strokeWidth: "1.447",
      d: "m8.14 31.26a4.311 4.311 0 0 0 0.8959 4.128 3.72 3.72 0 0 0 3.249 1.255 7.3 7.3 0 0 0 2.872 7.592 6.265 6.265 0 0 0 8.082-0.9586 4.261 4.261 0 0 0 2.646 3.207 4.29 4.29 0 0 0 3.451-0.5726 6.589 6.589 0 0 0 6.004 5.031 6.495 6.495 0 0 0 6.527-5.112 3.539 3.539 0 0 0 3.775 1.275 4.157 4.157 0 0 0 2.726-2.294 6.221 6.221 0 0 0 7.605 1.14 7.42 7.42 0 0 0 3.339-7.917c1.3 0.4735 2.204-0.4847 3.301-1.572 0.9599-0.9511-1.364-4.515-1.447-5.789"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      strokeWidth: "1.447",
      d: "m63.74 27.87q-0.05977-0.2026-0.1342-0.4109c-2.15-6.021-7.764-9.784-13.55-11.87a40.48 40.48 0 0 0-13.68-2.282 36.95 36.95 0 0 0-19.45 5.042 18.17 18.17 0 0 0-7.772 9.044 4.659 4.659 0 0 0 1.793 5.8 20.39 20.39 0 0 0 6.411 3.094 62.67 62.67 0 0 0 19.02 2.561 59.52 59.52 0 0 0 20.35-3.015 17.34 17.34 0 0 0 5.465-2.953 4.409 4.409 0 0 0 1.557-5.012z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.37",
      cy: "20.08",
      rx: "11.17",
      ry: "2.234",
      fill: "#6a462f",
      strokeWidth: "1.447"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m10.6 37.96q-0.2063 0.162-0.4043 0.334a4.407 4.407 0 0 0-1.557 5.01q0.05945 0.2025 0.1339 0.4107c2.149 6.018 7.761 9.779 13.55 11.86a40.47 40.47 0 0 0 13.68 2.281 36.93 36.93 0 0 0 19.44-5.039 18.16 18.16 0 0 0 7.769-9.039 4.465 4.465 0 0 0-0.8647-4.949"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.99",
      cy: "20.91",
      rx: "11.17",
      ry: "2.233",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "7",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m63.35 28.7q-0.05974-0.2025-0.1341-0.4107c-2.149-6.018-7.761-9.779-13.55-11.86a40.47 40.47 0 0 0-13.68-2.281 36.93 36.93 0 0 0-19.44 5.039 18.16 18.16 0 0 0-7.769 9.039 4.657 4.657 0 0 0 1.793 5.798 20.38 20.38 0 0 0 6.408 3.092 62.64 62.64 0 0 0 19.01 2.559 59.49 59.49 0 0 0 20.34-3.014 17.33 17.33 0 0 0 5.462-2.952 4.407 4.407 0 0 0 1.556-5.01z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.18",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.45",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.87",
      cy: "23.37",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.79",
      cy: "33.29",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.91",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.71",
      cy: "31.63",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.71",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.67",
      cy: "34.94",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.98",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.28",
      cy: "29.98",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.94",
      cy: "21.71",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "56.24",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m16.01 44.42a6.232 6.232 0 0 0 7.656-0.8294 3.874 3.874 0 0 0 2.515 2.846 4.296 4.296 0 0 0 3.269-0.4988 6.19 6.19 0 0 0 5.702 4.47 6.052 6.052 0 0 0 6.173-4.511 3.501 3.501 0 0 0 3.581 1.138 3.855 3.855 0 0 0 2.578-2.025 6.211 6.211 0 0 0 7.209 1.028"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.56",
      cy: "33.29",
      r: "0.8265",
      strokeWidth: "1.446"
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
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m10.6 37.96q-0.2063 0.162-0.4043 0.334a4.407 4.407 0 0 0-1.557 5.01q0.05945 0.2025 0.1339 0.4107c2.149 6.018 7.761 9.779 13.55 11.86a40.47 40.47 0 0 0 13.68 2.281 36.93 36.93 0 0 0 19.44-5.039 18.16 18.16 0 0 0 7.769-9.039 4.465 4.465 0 0 0-0.8647-4.949"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "35.99",
      cy: "20.91",
      rx: "11.17",
      ry: "2.233",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "7",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m63.35 28.7q-0.05974-0.2025-0.1341-0.4107c-2.149-6.018-7.761-9.779-13.55-11.86a40.47 40.47 0 0 0-13.68-2.281 36.93 36.93 0 0 0-19.44 5.039 18.16 18.16 0 0 0-7.769 9.039 4.657 4.657 0 0 0 1.793 5.798 20.38 20.38 0 0 0 6.408 3.092 62.64 62.64 0 0 0 19.01 2.559 59.49 59.49 0 0 0 20.34-3.014 17.33 17.33 0 0 0 5.462-2.952 4.407 4.407 0 0 0 1.556-5.01z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "23.18",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "31.45",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19.87",
      cy: "23.37",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.79",
      cy: "33.29",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "14.91",
      cy: "28.33",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.71",
      cy: "31.63",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.71",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "44.67",
      cy: "34.94",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "47.98",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "51.28",
      cy: "29.98",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "52.94",
      cy: "21.71",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "56.24",
      cy: "26.67",
      r: "0.8265",
      strokeWidth: "1.446"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "7",
      strokeWidth: "2",
      d: "m16.01 44.42a6.232 6.232 0 0 0 7.656-0.8294 3.874 3.874 0 0 0 2.515 2.846 4.296 4.296 0 0 0 3.269-0.4988 6.19 6.19 0 0 0 5.702 4.47 6.052 6.052 0 0 0 6.173-4.511 3.501 3.501 0 0 0 3.581 1.138 3.855 3.855 0 0 0 2.578-2.025 6.211 6.211 0 0 0 7.209 1.028"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22.56",
      cy: "33.29",
      r: "0.8265",
      strokeWidth: "1.446"
    })));
  }
};

export default Bagel;