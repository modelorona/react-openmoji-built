import React from 'react';

const EspressoMachine = ({
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
      x: "12",
      y: "12",
      rx: "1",
      width: "48",
      height: "48",
      fill: "#9B9B9A"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "M24 26H47L45 34H26L24 26Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "19",
      r: "4",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "35",
      x2: "35",
      y1: "19",
      y2: "18",
      stroke: "#D22F27",
      strokeLinecap: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M18.1518 15.3582C18.5434 14.7311 19.4566 14.7311 19.8482 15.3582L20.2182 15.9506C20.3944 16.2328 20.6993 16.4088 21.0317 16.4204L21.7298 16.4445C22.4687 16.4701 22.9253 17.261 22.578 17.9136L22.2499 18.5303C22.0937 18.8239 22.0937 19.1761 22.2499 19.4697L22.578 20.0864C22.9253 20.739 22.4687 21.5299 21.7298 21.5555L21.0317 21.5796C20.6993 21.5912 20.3944 21.7672 20.2182 22.0494L19.8482 22.6418C19.4566 23.2689 18.5434 23.2689 18.1518 22.6418L17.7818 22.0494C17.6056 21.7672 17.3007 21.5912 16.9683 21.5796L16.2702 21.5555C15.5313 21.5299 15.0747 20.739 15.422 20.0864L15.7501 19.4697C15.9063 19.1761 15.9063 18.8239 15.7501 18.5303L15.422 17.9136C15.0747 17.261 15.5313 16.4701 16.2702 16.4445L16.9683 16.4204C17.3007 16.4088 17.6056 16.2328 17.7818 15.9506L18.1518 15.3582Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#A57939",
      d: "M39 28C39 30.2091 46.7909 32 49 32C51.2091 32 53 30.2091 53 28C53 25.7909 51.2091 24 49 24C46.7909 24 39 25.7909 39 28Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "53.5",
      cy: "18.5",
      r: "2.5",
      fill: "#D22F27"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M25 52L45 52L43 55H27L25 52Z"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M35 53C38.3137 53 41 48.5228 41 43H29C29 48.5228 31.6863 53 35 53Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M41 43H42C42 42.4477 41.5523 42 41 42V43ZM29 43V42C28.4477 42 28 42.4477 28 43H29ZM40 43C40 45.6113 39.3629 47.9271 38.3851 49.5566C37.3955 51.206 36.1676 52 35 52V54C37.1461 54 38.9182 52.5554 40.1001 50.5856C41.294 48.5958 42 45.9115 42 43H40ZM29 44H41V42H29V44ZM35 52C33.8324 52 32.6045 51.206 31.6149 49.5566C30.6371 47.9271 30 45.6113 30 43H28C28 45.9115 28.706 48.5958 29.8999 50.5856C31.0818 52.5554 32.8539 54 35 54V52Z"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "53.5",
      cy: "18.5",
      r: "2.5",
      fill: "none",
      stroke: "#D0CFCE",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "12",
      y: "12",
      rx: "1",
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 26H24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M56 26L60 26"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "60",
      y1: "55",
      y2: "55",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.5 26H24L26 34H44"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "19",
      r: "4",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1996 49C29.4463 47.3287 29 45.2512 29 43H41C41 45.2512 40.5537 47.3287 39.8004 49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M18.1518 15.3582C18.5434 14.7311 19.4566 14.7311 19.8482 15.3582L20.2182 15.9506C20.3944 16.2328 20.6993 16.4088 21.0317 16.4204L21.7298 16.4445C22.4687 16.4701 22.9253 17.261 22.578 17.9136L22.2499 18.5303C22.0937 18.8239 22.0937 19.1761 22.2499 19.4697L22.578 20.0864C22.9253 20.739 22.4687 21.5299 21.7298 21.5555L21.0317 21.5796C20.6993 21.5912 20.3944 21.7672 20.2182 22.0494L19.8482 22.6418C19.4566 23.2689 18.5434 23.2689 18.1518 22.6418L17.7818 22.0494C17.6056 21.7672 17.3007 21.5912 16.9683 21.5796L16.2702 21.5555C15.5313 21.5299 15.0747 20.739 15.422 20.0864L15.7501 19.4697C15.9063 19.1761 15.9063 18.8239 15.7501 18.5303L15.422 17.9136C15.0747 17.261 15.5313 16.4701 16.2702 16.4445L16.9683 16.4204C17.3007 16.4088 17.6056 16.2328 17.7818 15.9506L18.1518 15.3582Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M39 28C39 30.2091 46.7909 32 49 32C51.2091 32 53 30.2091 53 28C53 25.7909 51.2091 24 49 24C46.7909 24 39 25.7909 39 28Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M53.5 21C52.1193 21 51 19.8807 51 18.5C51 17.1193 52.1193 16 53.5 16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25 52L45 52L43 55H27L25 52Z"
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
      x: "12",
      y: "12",
      rx: "1",
      width: "48",
      height: "48",
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 26H24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M56 26L60 26"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "60",
      y1: "55",
      y2: "55",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M40.5 26H24L26 34H44"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35",
      cy: "19",
      r: "4",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M30.1996 49C29.4463 47.3287 29 45.2512 29 43H41C41 45.2512 40.5537 47.3287 39.8004 49"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M18.1518 15.3582C18.5434 14.7311 19.4566 14.7311 19.8482 15.3582L20.2182 15.9506C20.3944 16.2328 20.6993 16.4088 21.0317 16.4204L21.7298 16.4445C22.4687 16.4701 22.9253 17.261 22.578 17.9136L22.2499 18.5303C22.0937 18.8239 22.0937 19.1761 22.2499 19.4697L22.578 20.0864C22.9253 20.739 22.4687 21.5299 21.7298 21.5555L21.0317 21.5796C20.6993 21.5912 20.3944 21.7672 20.2182 22.0494L19.8482 22.6418C19.4566 23.2689 18.5434 23.2689 18.1518 22.6418L17.7818 22.0494C17.6056 21.7672 17.3007 21.5912 16.9683 21.5796L16.2702 21.5555C15.5313 21.5299 15.0747 20.739 15.422 20.0864L15.7501 19.4697C15.9063 19.1761 15.9063 18.8239 15.7501 18.5303L15.422 17.9136C15.0747 17.261 15.5313 16.4701 16.2702 16.4445L16.9683 16.4204C17.3007 16.4088 17.6056 16.2328 17.7818 15.9506L18.1518 15.3582Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M39 28C39 30.2091 46.7909 32 49 32C51.2091 32 53 30.2091 53 28C53 25.7909 51.2091 24 49 24C46.7909 24 39 25.7909 39 28Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M53.5 21C52.1193 21 51 19.8807 51 18.5C51 17.1193 52.1193 16 53.5 16"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M25 52L45 52L43 55H27L25 52Z"
    })));
  }
};

export default EspressoMachine;