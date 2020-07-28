import React from 'react';

const Pigeon = ({
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
      id: "color",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      strokeWidth: "2",
      d: "m19.16 40.04 0.4275-2.06c-1.417-1.417-1.523-2.998-1.462-3.717 0.04535-0.5339-0.206-4.356 6.538-10.89 0.6766-0.6558 1.265-1.384 1.735-2.201 0.9457-1.645 2.712-4.998 5.3-11.03 3.851-8.978 8.116 12.15 7.396 18.19-0.09423 0.7913-0.9772 5.316-1.11 6.102l-2.88 10.79"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      strokeWidth: "2",
      d: "m37.99 46.28c28.77-0.928 18.56-38.05 17.63-33.41-0.928 4.64-27.84 31.55-30.62 27.84-2.784-3.712-6.496-4.64-8.352-1.856s-2.784 3.712-2.784 3.712 5.568-0.928 6.496 0.928 3.871 7.946 9.28 8.352c0 0 1.847 0.6304 5.568 8.352 4.339 9.004 22.27 0 16.7-4.64-5.568-4.64-9.28-2.784-12.06-4.64-2.784-1.856-1.856-4.64-1.856-4.64z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      strokeWidth: "2",
      d: "m36.85 60.94c0.03734 0.3547 9.492 1.853 15.31-5.424 0.1631-0.2042 0.8717 0.177 1.083 0.2394 1.388 4.093-7.656 9.271-11.99 8.019-3.685-1.276-4.394-2.835-4.394-2.835z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      strokeWidth: "2",
      d: "m37.69 45.48c0.08512-1.762 21.08-2.961 18.18-31.95-0.1461-1.46 2.328 6.428 2.414 7.844 1.692 14.66-8.256 26.27-20.59 24.11z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      strokeWidth: "2",
      d: "m32.52 37.72c3.818-5.379 4.203-19.26 0.9526-29.22-0.4548-1.395 3.475 4.933 3.964 6.265 2.39 6.636 2.672 12.93 0.5642 18.39z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      strokeWidth: "2",
      d: "m23.88 47.87c2.378 0.01091 3.846-3.287 3.168-5.632-3.239-5.856-9.319-7.524-12.55 0.231 5.872-1.98 6.828 1.455 9.382 5.401z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m12.46 27.72"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.29 46.13c28.36-0.9149 18.3-37.51 17.38-32.93s-27.44 31.1-30.19 27.44c-2.744-3.659-6.404-4.574-8.233-1.83-1.83 2.744-2.744 3.659-2.744 3.659s5.489-0.9149 6.404 0.9149c0.9149 1.83 3.816 7.833 9.148 8.233 0 0 1.821 0.6215 5.489 8.233 4.277 8.876 21.96 0 16.47-4.574-5.489-4.574-9.148-2.744-11.89-4.574-2.744-1.83-1.83-4.574-1.83-4.574z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.37 26.51c0.3138-7.019-3.262-24.11-6.481-16.06-3.659 9.148-5.489 11.89-5.489 11.89-4.348 4.13-5.957 7.228-6.529 9.162"
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
      d: "m12.46 27.72"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.29 46.13c28.36-0.9149 18.3-37.51 17.38-32.93s-27.44 31.1-30.19 27.44c-2.744-3.659-6.404-4.574-8.233-1.83-1.83 2.744-2.744 3.659-2.744 3.659s5.489-0.9149 6.404 0.9149c0.9149 1.83 3.816 7.833 9.148 8.233 0 0 1.821 0.6215 5.489 8.233 4.277 8.876 21.96 0 16.47-4.574-5.489-4.574-9.148-2.744-11.89-4.574-2.744-1.83-1.83-4.574-1.83-4.574z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m38.37 26.51c0.3138-7.019-3.262-24.11-6.481-16.06-3.659 9.148-5.489 11.89-5.489 11.89-4.348 4.13-5.957 7.228-6.529 9.162"
    })));
  }
};

export default Pigeon;