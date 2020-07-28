import React from 'react';

const Foggy = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27 31 30 30 32 32 35 30 37 31 39 30 41 32 42 31"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m21.38 27.63c1.636 0.3771 3.012 0.9482 4.016 1.579-2.246 0.6314-3.65 13.32-10.57 17.69-4.659-2.517-7.075-9.495-4.782-13.8 2.43-8.036 10.83-5.355 11.33-5.47z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m58.01 33.3c0.6023 0.1205 3.002-0.2426 4.54 0.4514 3.639 1.302 4.828 4.206 4.63 8.066 0.01683 2.845-3.155 3.479-5.039 5.611-4.23-0.4461-3.926-3.52-4.733-3.069-5.214 2.913-14.63-7.577-13.72-12.99 4.296-10.07 15.93-1.788 14.32 1.933z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#3f3f3f",
      points: "16.76 45.06 19.66 34.43 21.59 39.26 27.39 23.8 29.88 26.8 35.31 12.45 38.02 18.01 40.92 27.67 42.85 23.8 45.75 36.36 48.64 29.6 51.54 45.06"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#fff",
      points: "44.05 29 40.92 30.57 38.02 29.6 36.08 28.63 32.22 30.57 30.29 28.63 27.39 29.6 26.15 27.12 27.39 23.8 29.88 26.8 35.31 12.45 38.02 18.01 40.92 27.67 42.85 23.8"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m38.56 40.49 3.219-1.266s3.964-0.9326 6.863 0.03347c3.639 1.302 5.994 4.835 5.797 8.695 0.01683 2.845-0.5285 6.481-2.412 8.613-2.843 2.528-5.311 2.812-8.038 2.936-1.547 0.1219-3.918-0.1353-4.749-1.446l-1.522-2.154c-1.403 1.932-4.082 3.492-6.465 3.644-2.281-1.6e-5 -4.895-0.4741-6.263-2.299l-2.016-2.255c-0.7258 1.109-1.992 1.741-3.314 1.655-1.932 0-5.797-0.9661-5.797-5.797-0.1959-3.445 2.529-7.396 5.963-7.729l3.057 0.1666c-0.6255-2.6 2.355-6.929 7.403-6.929 2.325 4e-4 6.707 0.8947 8.274 4.131z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m61.2 34.43a6.428 6.428 0 0 1 5.797 6.763c0 4.83-3.864 5.797-5.797 5.797a3.539 3.539 0 0 1-3.864-3.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.59 28.63s-3.864-0.9661-6.763 0-4.83 2.898-4.83 7.729a11.57 11.57 0 0 0 2.898 7.729"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "16.76 45.06 19.66 34.43 21.59 39.26 27.39 23.8 29.88 26.8 35.31 12.45 38.02 18.01 40.92 27.67 42.85 23.8 45.75 36.36 48.64 29.6 51 40"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m19.66 44.09a6.428 6.428 0 0 0-5.797 6.763c0 4.83 3.864 5.797 5.797 5.797a3.539 3.539 0 0 0 3.864-3.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m25.46 56.65a7.246 7.246 0 0 0 5.797 2.898c3.864 0 6.763-3.864 6.763-4.83"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m39.95 57.62a4.186 4.186 0 0 0 3.864 1.932 5.175 5.175 0 0 0 4.83-4.83"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m23.53 45.06c-1.932-1.932 0.9661-8.695 6.763-8.695 2.898 0 8.695 0.9661 8.695 6.763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m41.88 40.23s3.864-1.932 6.763-0.9661a8.76 8.76 0 0 1 5.797 8.695 11.57 11.57 0 0 1-2.898 7.729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m57.34 35.4c1.932-1.932-0.9661-8.695-6.763-8.695a10.77 10.77 0 0 0-6.6 1.993"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "27 31 30 30 32 32 35 30 37 31 39 30 41 32 42 31"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m61.2 34.43a6.428 6.428 0 0 1 5.797 6.763c0 4.83-3.864 5.797-5.797 5.797a3.539 3.539 0 0 1-3.864-3.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m21.59 28.63s-3.864-0.9661-6.763 0-4.83 2.898-4.83 7.729a11.57 11.57 0 0 0 2.898 7.729"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "16.76 45.06 19.66 34.43 21.59 39.26 27.39 23.8 29.88 26.8 35.31 12.45 38.02 18.01 40.92 27.67 42.85 23.8 45.75 36.36 48.64 29.6 51 40"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m19.66 44.09a6.428 6.428 0 0 0-5.797 6.763c0 4.83 3.864 5.797 5.797 5.797a3.539 3.539 0 0 0 3.864-3.864"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m25.46 56.65a7.246 7.246 0 0 0 5.797 2.898c3.864 0 6.763-3.864 6.763-4.83"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m39.95 57.62a4.186 4.186 0 0 0 3.864 1.932 5.175 5.175 0 0 0 4.83-4.83"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m23.53 45.06c-1.932-1.932 0.9661-8.695 6.763-8.695 2.898 0 8.695 0.9661 8.695 6.763"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m41.88 40.23s3.864-1.932 6.763-0.9661a8.76 8.76 0 0 1 5.797 8.695 11.57 11.57 0 0 1-2.898 7.729"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m57.34 35.4c1.932-1.932-0.9661-8.695-6.763-8.695a10.77 10.77 0 0 0-6.6 1.993"
    })));
  }
};

export default Foggy;