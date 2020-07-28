import React from 'react';

const Wrench = ({
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
      fill: "#D0CFCE",
      stroke: "none",
      d: "M41,64.9049V36.4955l1.3665-0.5232c4.0791-1.5617,7.0017-5.2461,7.6335-9.623v0 c0.601-4.2688-0.4505-7.5594-3-10.1462c0,0-1.3928-1.4132-3.5973-2.4706C42.75,13.4194,42,13.9291,42,14.6615l0,7.6293l-2,3.0439 h-3h-1h-3l-2-3.0439l0-7.6293c0-0.7324-0.75-1.2421-1.4026-0.929C27.3928,14.7899,26,16.2031,26,16.2031 c-2.5495,2.5868-3.601,5.8774-3,10.1462c0.005,0.0356,0.0102,0.0712,0.0154,0.1068c0.6494,4.3916,3.72,8.0239,7.815,9.5916 L32,36.4955v28.4094"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,63.9064v-28l1.3665-0.5157c4.0791-1.5392,7.0017-5.1705,7.6335-9.4843v0c0.601-4.2073-0.4505-7.4505-3-10 c0,0-1.3928-1.3928-3.5973-2.435C42.75,13.1629,42,13.6653,42,14.3871l0,7.5193l-2,3h-3h-1h-3l-2-3l0-7.5193 c0-0.7219-0.75-1.2242-1.4026-0.9157C27.3928,14.5136,26,15.9064,26,15.9064c-2.5495,2.5495-3.601,5.7927-3,10 c0.005,0.0351,0.0102,0.0702,0.0154,0.1052c0.6494,4.3283,3.72,7.9082,7.815,9.4534L32,35.9064v28"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41,63.9064v-28l1.3665-0.5157c4.0791-1.5392,7.0017-5.1705,7.6335-9.4843v0c0.601-4.2073-0.4505-7.4505-3-10 c0,0-1.3928-1.3928-3.5973-2.435C42.75,13.1629,42,13.6653,42,14.3871l0,7.5193l-2,3h-3h-1h-3l-2-3l0-7.5193 c0-0.7219-0.75-1.2242-1.4026-0.9157C27.3928,14.5136,26,15.9064,26,15.9064c-2.5495,2.5495-3.601,5.7927-3,10 c0.005,0.0351,0.0102,0.0702,0.0154,0.1052c0.6494,4.3283,3.72,7.9082,7.815,9.4534L32,35.9064v28"
    })));
  }
};

export default Wrench;