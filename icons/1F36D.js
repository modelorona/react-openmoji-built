import React from 'react';

const Lollipop = ({
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
      cx: "8.627",
      cy: "51.48",
      r: "18",
      transform: "rotate(-45)",
      fill: "#ea5a47",
      strokeWidth: "1.2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "8.675",
      cy: "51.41",
      r: "18.22",
      transform: "rotate(-45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "25.79",
      y1: "60.7",
      y2: "46.91",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.864",
      d: "m42.69 30.99c0.1901-0.7095 1.05-0.09377 1.179 0.316 0.3497 1.11-0.8196 1.996-1.811 2.042-1.774 0.0823-2.992-1.659-2.906-3.306 0.1275-2.417 2.507-4.008 4.801-3.769 3.058 0.3191 5.032 3.357 4.632 6.297-0.5031 3.699-4.208 6.059-7.792 5.495-4.341-0.6831-7.089-5.059-6.359-9.287 0.8609-4.982 5.911-8.12 10.78-7.222 5.624 1.037 9.152 6.763 8.085 12.28-1.213 6.266-7.615 10.18-13.77 8.948-6.907-1.387-11.22-8.467-9.811-15.27 1.562-7.549 9.32-12.25 16.76-10.67"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color-foreground"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.864",
      d: "m42.69 30.99c0.1901-0.7095 1.05-0.09377 1.179 0.316 0.3497 1.11-0.8196 1.996-1.811 2.042-1.774 0.0823-2.992-1.659-2.906-3.306 0.1275-2.417 2.507-4.008 4.801-3.769 3.058 0.3191 5.032 3.357 4.632 6.297-0.5031 3.699-4.208 6.059-7.792 5.495-4.341-0.6831-7.089-5.059-6.359-9.287 0.8609-4.982 5.911-8.12 10.78-7.222 5.624 1.037 9.152 6.763 8.085 12.28-1.213 6.266-7.615 10.18-13.77 8.948-6.907-1.387-11.22-8.467-9.811-15.27 1.562-7.549 9.32-12.25 16.76-10.67"
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
      cx: "8.675",
      cy: "51.41",
      r: "18.22",
      transform: "rotate(-45)",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "25.79",
      y1: "60.7",
      y2: "46.91",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.864",
      d: "m42.69 30.99c0.1901-0.7095 1.05-0.09377 1.179 0.316 0.3497 1.11-0.8196 1.996-1.811 2.042-1.774 0.0823-2.992-1.659-2.906-3.306 0.1275-2.417 2.507-4.008 4.801-3.769 3.058 0.3191 5.032 3.357 4.632 6.297-0.5031 3.699-4.208 6.059-7.792 5.495-4.341-0.6831-7.089-5.059-6.359-9.287 0.8609-4.982 5.911-8.12 10.78-7.222 5.624 1.037 9.152 6.763 8.085 12.28-1.213 6.266-7.615 10.18-13.77 8.948-6.907-1.387-11.22-8.467-9.811-15.27 1.562-7.549 9.32-12.25 16.76-10.67"
    })));
  }
};

export default Lollipop;