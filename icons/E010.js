import React from 'react';

const Macaw = ({
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "m31.7 20.78c-1.9-1.365-3.032-3.556-3.046-5.896 0.07614-4.174 3.52-7.497 7.695-7.424 4.023 0.01017 7.367 3.104 7.689 7.114 0.1765 3.132-0.7592 6.319-0.6687 9.455l0.04922 1.705c1.5 1.79 4.644 5.406 6.544 15.99 0.4 2.226 4.176 19.17 4.482 22.96-0.7893 0.3807-1.495 1.904-2.284 2.284-1.615-3.704-5-14.09-7.808-15.65-2.744-1.455-5.133-3.324-8.991-5.195-4.576 0-7.83-8.397-7.83-15.02 0-5.159 1.011-8.631 4.169-10.32z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m27.82 16.86-3e-3 -0.0145 1.737 2.219a3.469 3.469 0 0 1-5.339-0.749z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "m31.91 31c-0.0114-3.585-0.4921-5.533 3.071-6.999 1.763-0.7317 3.744-0.7332 5.507-0.0042 2.973 1.276 4.603 4.463 5.713 7.502 1.097 3.059 1.97 6.194 2.61 9.38 0.2643 1.276 0.4358 2.577 0.6448 3.863 0.16 0.9815 1.122 3.675 0.7448 4.594-0.55 1.342-3.679-2.059-4.855-2.525-2.511-1.024-4.842-2.441-6.906-4.2-2.392-1.88-4.31-4.295-5.599-7.051-0.6108-1.443-0.9273-2.994-0.9308-4.561z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m28.72 10.92c-1.132 1.764-1.451 3.93-0.8762 5.945l-4.768 1.915c-0.05075-0.3438 0.08842-1.022 0.0859-1.37-0.1227-3.405 2.184-6.02 5.559-6.49z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m31 10c-0.1248-0.0181-0.2732-0.02-0.4079-0.0312-2.981 3.195-2.461 8.286 1.105 10.81-0.0874 0.0469-0.1714 0.1034-0.2575 0.1544 2.172-0.193 4.176-1.251 5.56-2.935 0.4447-0.6049 1.369-3.276 1.587-3.994-0.3762-0.7827-3.251-3.376-7.587-4.006z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92d3f5",
      d: "m31 10c2.574 1.207 5.972 2.061 6.516 4.138l15.57 44.42 0.6404-5.275-5.674-17.59c-4.849-7.338-4.754-14.03-4.995-22.48-2.645-5.391-6.649-8.372-12.06-3.217z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m34.98 24.01c1.763-0.7317 3.744-0.7332 5.507-0.0042 5.245 2.136 10.97 20.55 9.796 26.09-3.318-0.2344-8.878-4.857-11.38-6.965-2.392-1.88-4.31-4.295-5.599-7.051-1.473-4.584-1.456-10.68 1.68-12.07z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m27.85 16.86-4.768 1.915a7.48 7.48 0 0 1-0.08-1.038 6.646 6.646 0 0 1 5.725-6.822"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m52.77 53.42c0.435 1.401 1.492 9.806 1.673 11.26 0.05333 1.684-0.7742 3.102-2.284 2.284-1.291-3.902-3.765-14.54-7.046-16.26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m29.56 19.07a3.469 3.469 0 0 1-5.339-0.749"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m34.82 45.62-0.1244 6.378"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.09",
      x2: "61",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      x2: "42.99",
      y1: "52.17",
      y2: "52.17",
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
      d: "m34.82 45.62c-4.047-3.036-6.24-5.806-7.062-11.87-0.6936-5.112 0.7023-11.28 3.749-12.97-5.671-4.292-2.626-13.33 4.486-13.32 3.949 0.07524 7.178 3.171 7.418 7.114 0.12 2.217 0.0732 4.46 0.0353 6.694-0.0156 0.9227-0.03 1.844-0.03 2.761v1.705"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m31.7 20.78c-0.0874 0.0469-0.1714 0.1034-0.2575 0.1544 4.347-0.8279 5.867-2.954 7.147-6.93-0.3762-0.7827-3.251-3.376-7.587-4.006-0.1248-0.0181-0.2732-0.02-0.4079-0.0312"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7",
      x2: "40.7",
      y1: "48",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m34.98 24.01c1.763-0.7317 3.744-0.7332 5.507-0.0042 5.245 2.136 10.97 20.55 9.796 26.09-3.318-0.2344-8.878-4.857-11.38-6.965-2.392-1.88-4.31-4.295-5.599-7.051-1.473-4.584-1.456-10.68 1.68-12.07z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m27.85 16.86-4.768 1.915a7.48 7.48 0 0 1-0.08-1.038 6.646 6.646 0 0 1 5.725-6.822"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m52.77 53.42c0.435 1.401 1.492 9.806 1.673 11.26 0.05333 1.684-0.7742 3.102-2.284 2.284-1.291-3.902-3.765-14.54-7.046-16.26"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m29.56 19.07a3.469 3.469 0 0 1-5.339-0.749"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m34.82 45.62-0.1244 6.378"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.09",
      x2: "61",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      x2: "42.99",
      y1: "52.17",
      y2: "52.17",
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
      d: "m34.82 45.62c-4.047-3.036-6.24-5.806-7.062-11.87-0.6936-5.112 0.7023-11.28 3.749-12.97-5.671-4.292-2.626-13.33 4.486-13.32 3.949 0.07524 7.178 3.171 7.418 7.114 0.12 2.217 0.0732 4.46 0.0353 6.694-0.0156 0.9227-0.03 1.844-0.03 2.761v1.705"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m31.7 20.78c-0.0874 0.0469-0.1714 0.1034-0.2575 0.1544 4.347-0.8279 5.867-2.954 7.147-6.93-0.3762-0.7827-3.251-3.376-7.587-4.006-0.1248-0.0181-0.2732-0.02-0.4079-0.0312"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.7",
      x2: "40.7",
      y1: "48",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Macaw;