import React from 'react';

const Barista = ({
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
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M32.6 43C38.6751 43 43.6 36.732 43.6 29C43.6 21.268 38.6751 15 32.6 15C26.5249 15 21.6 21.268 21.6 29C21.6 36.732 26.5249 43 32.6 43Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M33 20C27.4 20 23.6667 22.6667 22.5 24C23.3333 21.1667 26.7 15.5 33.5 15.5C40.3 15.5 42.6667 20.5 43 23C42 22 38.6 20 33 20Z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33",
      cy: "13.5",
      rx: "4",
      ry: "2.5",
      fill: "#6A462F"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3F3F3F",
      d: "M14 59.1V55.1C14 50.1 19 46.1 24 46.1C30 51.1 36 51.1 42 46.1C47 46.1 52 50.1 52 55.1V59.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      "fill-rule": "evenodd",
      d: "M23.0477 46.1477C22.0024 46.2519 20.9711 46.524 20 46.9361V59.1H46V46.9361C45.1742 46.5856 44.3047 46.3364 43.4202 46.2056L42.5 46.6L42 54.1H24L23.5 46.6L23.0477 46.1477Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M41 57.1L61 57.1L59 60.1H43L41 57.1Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M51 58.1C54.3137 58.1 57 53.6228 57 48.1H45C45 53.6228 47.6863 58.1 51 58.1Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M57 48.1H58C58 47.5477 57.5523 47.1 57 47.1V48.1ZM45 48.1V47.1C44.4477 47.1 44 47.5477 44 48.1H45ZM56 48.1C56 50.7113 55.3629 53.027 54.3851 54.6565C53.3955 56.306 52.1676 57.1 51 57.1V59.1C53.1461 59.1 54.9182 57.6554 56.1001 55.6855C57.294 53.6958 58 51.0115 58 48.1H56ZM45 49.1H57V47.1H45V49.1ZM51 57.1C49.8324 57.1 48.6045 56.306 47.6149 54.6565C46.6371 53.027 46 50.7113 46 48.1H44C44 51.0115 44.706 53.6958 45.8999 55.6855C47.0818 57.6554 48.8539 59.1 51 59.1V57.1Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9683 15.3C26.9048 15.3 21.9683 20.3 21.9683 29.3C21.9683 35.9462 25.3647 43.4 32.9683 43.4C40.5242 43.4 44.0318 35.917 44.0318 29.3C44.0318 20.3 38.9048 15.3 32.9683 15.3Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M39 27.9C39 29 38.1 29.9 37 29.9C35.9 29.9 35 29 35 27.9C35 26.8 35.9 25.9 37 25.9C38.1 25.9 39 26.8 39 27.9Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M31 27.9C31 29 30.1 29.9 29 29.9C27.9 29.9 27 29 27 27.9C27 26.8 27.9 25.9 29 25.9C30.1 25.9 31 26.8 31 27.9Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30 36.1C31.9 37.1 34.1 37.1 36 36.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M30.5 15.4517C29.5855 14.9935 29 14.2895 29 13.5C29 12.1193 30.7909 11 33 11C35.2091 11 37 12.1193 37 13.5C37 14.2895 36.4145 14.9935 35.5 15.4517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22 28.5C22 21 29 18 33 20.5C37 18 44 21 44 28.5"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M14 58V55C14 50 19 46 24 46C30 51 36 51 42 46C42.5017 46 43.0034 46.0403 43.5 46.1178"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5 46.6L24 54.1H42L42.5 46.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M20 47.1V58.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.1996 54.1C45.4463 52.4287 45 50.3512 45 48.1H57C57 50.3512 56.5537 52.4287 55.8004 54.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41 57.1L61 57.1L59 60.1H43L41 57.1Z"
    }))));
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
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.9683 15.3C26.9048 15.3 21.9683 20.3 21.9683 29.3C21.9683 35.9462 25.3647 43.4 32.9683 43.4C40.5242 43.4 44.0318 35.917 44.0318 29.3C44.0318 20.3 38.9048 15.3 32.9683 15.3Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M39 27.9C39 29 38.1 29.9 37 29.9C35.9 29.9 35 29 35 27.9C35 26.8 35.9 25.9 37 25.9C38.1 25.9 39 26.8 39 27.9Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M31 27.9C31 29 30.1 29.9 29 29.9C27.9 29.9 27 29 27 27.9C27 26.8 27.9 25.9 29 25.9C30.1 25.9 31 26.8 31 27.9Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30 36.1C31.9 37.1 34.1 37.1 36 36.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M30.5 15.4517C29.5855 14.9935 29 14.2895 29 13.5C29 12.1193 30.7909 11 33 11C35.2091 11 37 12.1193 37 13.5C37 14.2895 36.4145 14.9935 35.5 15.4517"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22 28.5C22 21 29 18 33 20.5C37 18 44 21 44 28.5"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M14 58V55C14 50 19 46 24 46C30 51 36 51 42 46C42.5017 46 43.0034 46.0403 43.5 46.1178"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.5 46.6L24 54.1H42L42.5 46.6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M20 47.1V58.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.1996 54.1C45.4463 52.4287 45 50.3512 45 48.1H57C57 50.3512 56.5537 52.4287 55.8004 54.1"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M41 57.1L61 57.1L59 60.1H43L41 57.1Z"
    }))));
  }
};

export default Barista;