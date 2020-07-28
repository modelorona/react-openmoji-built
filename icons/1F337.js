import React from 'react';

const Tulip = ({
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
      fill: "#5C9E31",
      stroke: "none",
      d: "M23.6968,59.4302c0,0-8.7685-5.362-9.193-14.6985c-0.4359-9.5866,9.2144-26.9468,9.2144-26.9468 S18.9979,38.4911,23.6968,59.4302z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      stroke: "none",
      d: "M50.7169,27.3033c-2.7631-0.1233-8.0574,1.5799-9.5149,2.8892c-2.4893,2.2362-2.9448,2.8517-3.8431,6.4732 c-0.1034,0.4169,0.08,0.5524,0.1891,1.413c0.1488,1.1738-3.5923-1.3633-3.5923-1.3633c-2.1365-1.8582-1.2818-5.2882-0.1597-7.8879 c2.6922-6.2376,14.314-9.8962,16.4506-8.0381c0,0,0.9568,1.2159,1.1218,6.4742L50.7169,27.3033z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      stroke: "none",
      d: "M49.2783,21.504"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#F4AA41",
      stroke: "none",
      d: "M57.2882,29.8721c1.3436,2.4925-3.0561,13.578-9.7327,14.8346c-2.1528,0.4052-3.8746-0.0623-5.7286-1.4619 c-0.9986-0.7539-1.8237-1.7212-2.4582-2.7997v0c-1.5547-2.3665-0.8443-5.7082,0.9387-7.9079 C44.5854,27.2595,55.7335,27.5056,57.2882,29.8721"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      stroke: "none",
      d: "M52.9482,22.6663c2.1629-0.5025,4.2949-0.3222,4.8381,0.3621"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E27022",
      stroke: "none",
      d: "M51.3683,27.2636c0,0-0.3688-4.5372-0.4588-4.763c-0.1099-0.2756,3.1089-2.0736,6.8768-1.1484 c3.7679,0.9252,0,7.9946,0,7.9946l-1.3267-0.9953c-0.2155-0.1617-0.4588-0.2727-0.7228-0.3265 C54.5558,27.7843,51.3683,27.2636,51.3683,27.2636z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#b1cc33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M61.9542,33.4929"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#b1cc33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M46.7396,16.5557"
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
      d: "M23.6968,59.4302 c0,0-8.7685-5.362-9.193-14.6985c-0.4359-9.5866,9.2144-26.9468,9.2144-26.9468S18.9979,38.4911,23.6968,59.4302z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0878,41.2889 c-3.438,3.548-7.676,10.246-5.829,20.735"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4232,21.1029"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.0838,29.8721 c1.3436,2.4925-3.0561,13.578-9.7327,14.8346c-2.1528,0.4052-3.8746-0.0623-5.7286-1.4619 c-0.9986-0.7539-1.8237-1.7212-2.4582-2.7997v0c-1.5547-2.3665-0.8443-5.7082,0.9387-7.9079 C44.381,27.2595,55.5291,27.5056,57.0838,29.8721"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.5368,22.3417 c2.1629-0.5025,4.2949-0.3222,4.8381,0.3621"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.375,22.7039 c0.3869,0.5853,0.2321,2.1634-0.3773,3.8327"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.5658,35.9276 c-2.1322-1.8631-1.8894-4.8477-0.7613-7.4448c2.7067-6.2313,13.5127-8.9826,15.645-7.1195"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.3038,21.1954 c0.506,0.5262,0.7973,1.5901,0.8465,3.1014"
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
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.6968,59.4302 c0,0-8.7685-5.362-9.193-14.6985c-0.4359-9.5866,9.2144-26.9468,9.2144-26.9468S18.9979,38.4911,23.6968,59.4302z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0878,41.2889 c-3.438,3.548-7.676,10.246-5.829,20.735"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.4232,21.1029"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M57.0838,29.8721 c1.3436,2.4925-3.0561,13.578-9.7327,14.8346c-2.1528,0.4052-3.8746-0.0623-5.7286-1.4619 c-0.9986-0.7539-1.8237-1.7212-2.4582-2.7997v0c-1.5547-2.3665-0.8443-5.7082,0.9387-7.9079 C44.381,27.2595,55.5291,27.5056,57.0838,29.8721"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.5368,22.3417 c2.1629-0.5025,4.2949-0.3222,4.8381,0.3621"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M58.375,22.7039 c0.3869,0.5853,0.2321,2.1634-0.3773,3.8327"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.5658,35.9276 c-2.1322-1.8631-1.8894-4.8477-0.7613-7.4448c2.7067-6.2313,13.5127-8.9826,15.645-7.1195"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.3038,21.1954 c0.506,0.5262,0.7973,1.5901,0.8465,3.1014"
    })));
  }
};

export default Tulip;