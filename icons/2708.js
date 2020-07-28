import React from 'react';

const Airplane = ({
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
      fill: "#9B9B9A",
      d: "M43.2237,23.5985L37.7003,22.78l-21.3-3.547c-2.5478-0.4214-5.1427,0.4102-6.971,2.234l-3.579,3.573 c-0.3903,0.3907-0.3901,1.0238,0.0005,1.4142c0.114,0.1139,0.2538,0.1986,0.4075,0.2468l20.929,6.568l3.8119,1.1561"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      d: "M36.1513,37.924l2.394,6.663l6.575,20.954c0.1654,0.527,0.7266,0.8201,1.2535,0.6548 c0.1538-0.0482,0.2936-0.1329,0.4075-0.2468l3.578-3.578c1.8248-1.8278,2.6569-4.4229,2.235-6.971l-3.549-21.311l-0.893-5.915 L36.1513,37.924z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M9.3413,49.6l8.619,3.716c0.2418,0.1044,0.4326,0.2998,0.531,0.544l3.5481,8.8l3.9609-4.01l-0.691-5.951 c-0.0351-0.3033,0.0702-0.606,0.286-0.822l28.8-28.794c1.0236-1.2048,1.3221-2.8662,0.782-4.352l0,0l-0.157-0.585 c-0.1859-0.6966-0.7258-1.2433-1.42-1.438l-0.579-0.159c-1.4628-0.5363-3.102-0.2238-4.265,0.813l-28.856,28.812 c-0.2199,0.2198-0.5297,0.3248-0.838,0.284l-5.846-0.776L9.3413,49.6z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.3723,36.082 l3.243,19.472c0.3715,2.2297-0.3566,4.5016-1.955,6.1l-3.578,3.578l-6.534-20.824"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.2233,32.2 l-20.659-6.482l3.578-3.578c1.5985-1.5984,3.8703-2.3265,6.1001-1.955l19.472,3.243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.1423,18.469l-0.158-0.585 c-0.2797-1.0374-1.0847-1.8511-2.119-2.142l-0.579-0.159c-1.8103-0.6506-3.8324-0.2362-5.241,1.074l-28.853,28.808l-6.339-0.842 l-5.253,5.312l9.964,4.3l0,0l4.1171,10.206l5.371-5.428l-0.747-6.428l28.8-28.795C56.3978,22.3393,56.7954,20.2989,56.1423,18.469z"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M48.3723,36.082 l3.243,19.472c0.3715,2.2297-0.3566,4.5016-1.955,6.1l-3.578,3.578l-6.534-20.824"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.2233,32.2 l-20.659-6.482l3.578-3.578c1.5985-1.5984,3.8703-2.3265,6.1001-1.955l19.472,3.243"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M56.1423,18.469l-0.158-0.585 c-0.2797-1.0374-1.0847-1.8511-2.119-2.142l-0.579-0.159c-1.8103-0.6506-3.8324-0.2362-5.241,1.074l-28.853,28.808l-6.339-0.842 l-5.253,5.312l9.964,4.3l0,0l4.1171,10.206l5.371-5.428l-0.747-6.428l28.8-28.795C56.3978,22.3393,56.7954,20.2989,56.1423,18.469z"
    })));
  }
};

export default Airplane;