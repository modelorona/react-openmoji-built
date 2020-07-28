import React from 'react';

const Flag_Antarctica = ({
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
      x: "5",
      y: "17.08",
      width: "62",
      height: "38",
      fill: "#61b2e4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m23.59 33.2c0.1669-0.868-0.04314-1.763-0.5644-1.353-1.067-0.4851-2.39-2.864-2.527-3.269 4.986 3.782 9.793 4.234 10.72-1.684 0.9256-5.918 4.905-4.075 7.306-3.63 2.983 0.4838 6.239 1.854 8.872 3.304 1.459 0.7628 1.705 3.005 1.34 4.707-0.7856 1.686 0.6629 2.657 1.791 3.562 1.517 1.584 0.955 3.955 0.4262 5.831-0.4979 1.562-2.163 3.021-1.797 4.634 0.1987 0.8754-0.9009 1.524-1.493 2.192-2.176 2.243-5.569 2.092-8.394 1.502-1.493 0.02412 0.5204-0.8074 0.1759-1.801 0.6309-1.816-1.043-2.689-2.849-2.888-2.538-0.3144-3.007-0.02543-5.544-0.5997-1.324 0.8931-5.073-0.8008-5.456-2.743-0.3229-1.639-1.799-2.888-2.049-4.516 1.44 0.2821-0.2505-1.575 1.289-2.164-0.07913-0.7664-0.7052-1.763-1.246-1.084z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
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
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "5",
      y: "17",
      width: "62",
      height: "38",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Flag_Antarctica;