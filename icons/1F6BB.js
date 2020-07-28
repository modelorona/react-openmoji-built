import React from 'react';

const Restroom = ({
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
      fill: "#61b2e4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.92 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m52.9 40.76-0.6409-15.31c-0.0917-1.839-1.369-3.742-3.169-3.759l-6.159-0.1083c-1.8 0.0175-3.688 1.917-3.78 3.756l-0.6511 15.42c-0.0047 0.1041 0.4262 0.8047 0.3844 0.8997l2.713-2.115-0.7458 17.69c-0.026 0.252 0.2117 0.5213 0.3655 0.72 0.0304 0.0387 0.0737 0.0644 0.1216 0.0721 0.1712 0 0.5256-0.3422 0.5888-0.9004l2.034-18.03 3.271 0.0264 2.319 18c0.0632 0.5591 0.4168 0.9004 0.588 0.9004 0.0479-0.0077 0.0912-0.0333 0.1216-0.072 0.1539-0.1987 0.2257-0.451 0.2-0.7031l-0.5709-17.71 2.482 2.026c-0.058-0.1074 0.5342-0.6882 0.5285-0.8108z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.68",
      cy: "16.01",
      r: "2.375",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m33.5 40.76-0.6593-15.5c-0.0917-1.839-1.111-3.489-2.911-3.507l-6.537-0.1605c-1.8 0.0175-3.51 1.617-3.601 3.456l-0.6906 15.71c-0.0047 0.1041 0.3547 0.7432 0.3129 0.8381l1.976-0.8318-0.2002 16.52c-0.0261 0.252 0.4771 0.4648 0.6308 0.6635 0.0303 0.0387 0.0737 0.0644 0.1216 0.0721 0.1711 0 0.5255-0.3422 0.5886-0.9004l2.033-18.03h3.555l1.648 18.14c0.0632 0.559 0.802 0.7859 0.9731 0.7859 0.0479-0.0077 0.0913-0.0333 0.1216-0.072 0.1539-0.1987 0.8316-0.4618 0.8059-0.7139l-0.1949-16.52 1.684 0.9198c-0.058-0.1074 0.3499-0.7567 0.3443-0.8792z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.35",
      cy: "16.01",
      r: "2.375",
      fill: "#fff"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.92 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.68",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m49.7 26.36 1.52 30.4c0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.36",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m30.33 26.67c-1.882 2.826-0.5416 4.886-0.0253 6.4 0.3669 1.076 0.6043 3.36 0.718 4.491 0.4803 4.781 0.802 19.2 0.802 19.2 0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6 0 0 0.4181-14.27 0.8585-19.01 0.1095-1.178 0.2965-3.559 0.6615-4.684 0.4939-1.522 1.933-3.791 0.0229-6.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m38.5 40.76 0.6336-15.2c0.1155-2.224 1.94-3.975 4.166-4h4.8c2.227 0.0249 4.051 1.776 4.166 4l0.6336 15.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m19.1 40.76 0.6336-15.2c0.1155-2.224 1.94-3.975 4.166-4h4.8c2.227 0.0249 4.051 1.776 4.166 4l0.6336 15.2"
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
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.92 61h-48c-0.5523 0-1-0.4477-1-1v-48c0-0.5523 0.4477-1 1-1h48c0.5523 0 1 0.4477 1 1v48c0 0.5523-0.4477 1-1 1z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "45.68",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m49.7 26.36 1.52 30.4c0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6l1.52-30.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "26.36",
      cy: "16.01",
      r: "2.375",
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m30.33 26.67c-1.882 2.826-0.5416 4.886-0.0253 6.4 0.3669 1.076 0.6043 3.36 0.718 4.491 0.4803 4.781 0.802 19.2 0.802 19.2 0.044 0.88-0.46 1.6-1.12 1.6-0.7812-0.1321-1.36-0.7976-1.383-1.59l-2.031-17.62c-0.1008-0.8744-0.5432-1.59-0.9832-1.59s-0.88 0.7152-0.9832 1.59l-2.034 17.62c-0.0229 0.792-0.602 1.458-1.383 1.59-0.66 0-1.164-0.72-1.12-1.6 0 0 0.4181-14.27 0.8585-19.01 0.1095-1.178 0.2965-3.559 0.6615-4.684 0.4939-1.522 1.933-3.791 0.0229-6.4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m38.5 40.76 0.6336-15.2c0.1155-2.224 1.94-3.975 4.166-4h4.8c2.227 0.0249 4.051 1.776 4.166 4l0.6336 15.2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m19.1 40.76 0.6336-15.2c0.1155-2.224 1.94-3.975 4.166-4h4.8c2.227 0.0249 4.051 1.776 4.166 4l0.6336 15.2"
    })));
  }
};

export default Restroom;