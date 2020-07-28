import React from 'react';

const Porpoise = ({
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
      fill: "#9b9b9a",
      d: "m35.337 37.683c1.0011 0.11144 4.0745 1.5116 3.8835 5.2204-0.27896 5.4165 7.6521-3.1107 1.0176-11.889"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m21.636 30.273c-1.0023-2.0393-1.1974-4.0835-1.453-7.0904-0.10149-1.1939 5.7639-1.1676 9.3481 0.57629 16.544-7.191 27.801 0.32681 28.149 6.9603 0 0 2.2673 0.85981 2.3226 3.2152 0.013 0.557 0.528 4.066-16.003 4.066h-8s-10-0.5-15.5 9.75c-0.29517 0.57883-0.50441 1.2045-0.62771 1.7365-1.0477 4.0472 5.5475 2.4327 6.6491 5.2532 0.40316 1.0322 1.1544 4.1685 0.56439 4.5874-0.0393 0.0283-0.0851 0.0437-0.13677 0.0467-0.19108 0.009-0.47061-0.16726-0.86303-0.59882-2.0599-1.5336-4.9982 0.51116-6.9868-0.6529-0.80032-0.46845-1.2022-1.2239-1.4915-1.7917-0.46148 0.7394-1.075 2.2683-2.1236 2.6224-1.8358 0.5511-4.5889 0.37522-5.8969 3.8416-1.1916-3.6368-2.3829-6.2308 2.0593-9.292 1.5604-1.057 3.9503-2.6878 4.0085-4.1251 0.009-0.18371-0.41609-10.673 5.9728-19.1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      "fill-rule": "evenodd",
      d: "m57.863 31.432c1.243 0.46701 2.1344 1.2238 2.1875 2.3926l-0.0508 0.17579s1.5608 3.2084-11.084 3.873l-7.5 0.12696h-5.416s-0.76556-0.0308-1.9668 0.125l-0.17969 0.004-0.082 0.0332c-1.8927 0.27635-4.7352 1.0324-7.5606 3.0234l-0.3125 0.125-0.18945 0.2461c-1.8744 1.4244-3.7096 3.3991-5.209 6.1934-0.19867 0.38958-0.34208 0.79051-0.46289 1.1797l-0.94532 1.2207c1.15-16.617 15.965-17.63 32.494-18.602 3.4332-0.23615 4.1602-0.33984 6.2793-0.11728z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m28.156 35.945c0.76004 0.66098 2.4918 3.5606 0.22546 6.5026-3.3099 4.2967 8.0632 1.7931 7.5983-9.2004l-0.89344-2.2005-7.6619 2.5989z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m36.334 38c1.2843 0.59584 3.0324 2.0769 2.8867 4.9043-0.201 3.904 3.839 0.552 3.64-4.904h-6.5273z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m29.429 39.379c-2.998 1.273-6.429 3.711-8.929 8.371-0.29517 0.57883-0.50441 1.2045-0.62771 1.7365-1.0477 4.0472 5.5475 2.4327 6.6491 5.2532 0.40316 1.0322 1.1544 4.1685 0.56439 4.5874-0.0393 0.0283-0.0851 0.0437-0.13677 0.0467-0.19108 0.009-0.47061-0.16726-0.86303-0.59882-2.0599-1.5336-4.9982 0.51116-6.9868-0.6529-0.80032-0.46845-1.2022-1.2239-1.4915-1.7917-0.46148 0.7394-1.075 2.2683-2.1236 2.6224-1.8358 0.5511-4.5889 0.37522-5.8969 3.8416-1.1916-3.6368-2.3829-6.2308 2.0593-9.292 1.5604-1.057 3.9503-2.6878 4.0085-4.1251 0.009-0.18371-0.41609-10.673 5.9728-19.1l0.0082-0.0046c-1.0023-2.0393-1.1974-4.0835-1.453-7.0904-0.10149-1.1939 5.7639-1.1676 9.3481 0.57629 16.544-7.191 27.801 0.32681 28.149 6.9603 0 0 2.2673 0.85981 2.3226 3.2152 0.014 0.558 0.529 4.067-16.002 4.067h-8s-0.1314-0.0066-0.37235-0.0028"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m28.156 35.945c0.76004 0.66098 2.4918 3.5606 0.22546 6.5026-3.3099 4.2967 8.0632 1.7931 7.5983-9.2004"
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
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m36.334 38c1.2843 0.59584 3.0324 2.0769 2.8867 4.9043-0.201 3.904 3.839 0.552 3.64-4.904h-6.5273z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m29.429 39.379c-2.998 1.273-6.429 3.711-8.929 8.371-0.29517 0.57883-0.50441 1.2045-0.62771 1.7365-1.0477 4.0472 5.5475 2.4327 6.6491 5.2532 0.40316 1.0322 1.1544 4.1685 0.56439 4.5874-0.0393 0.0283-0.0851 0.0437-0.13677 0.0467-0.19108 0.009-0.47061-0.16726-0.86303-0.59882-2.0599-1.5336-4.9982 0.51116-6.9868-0.6529-0.80032-0.46845-1.2022-1.2239-1.4915-1.7917-0.46148 0.7394-1.075 2.2683-2.1236 2.6224-1.8358 0.5511-4.5889 0.37522-5.8969 3.8416-1.1916-3.6368-2.3829-6.2308 2.0593-9.292 1.5604-1.057 3.9503-2.6878 4.0085-4.1251 0.009-0.18371-0.41609-10.673 5.9728-19.1l0.0082-0.0046c-1.0023-2.0393-1.1974-4.0835-1.453-7.0904-0.10149-1.1939 5.7639-1.1676 9.3481 0.57629 16.544-7.191 27.801 0.32681 28.149 6.9603 0 0 2.2673 0.85981 2.3226 3.2152 0.014 0.558 0.529 4.067-16.002 4.067h-8s-0.1314-0.0066-0.37235-0.0028"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m28.156 35.945c0.76004 0.66098 2.4918 3.5606 0.22546 6.5026-3.3099 4.2967 8.0632 1.7931 7.5983-9.2004"
    })));
  }
};

export default Porpoise;