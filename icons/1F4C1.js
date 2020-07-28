import React from 'react';

const FileFolder = ({
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
      d: "M58.831,59.603c0.5559-0.378,0.9222-1.0177,0.9222-1.7415V24.6081H16.8349v0.4927v31.4261 c0,0.0451-0.003,0.0893-0.0082,0.1344c-0.0073,0.0558-0.0867,0.5933-0.3357,1.3202c-0.0785,0.2418-0.1719,0.4732-0.2754,0.6998 c-0.0305,0.0683-0.0611,0.1355-0.0946,0.2052c-0.0605,0.1211-0.1177,0.2432-0.1852,0.359 c-0.1271,0.2341-0.2663,0.4705-0.4309,0.7066l42.1589,0.0103c0.1439,0,0.2845-0.0148,0.4205-0.0429 C58.3559,59.8634,58.6087,59.7542,58.831,59.603z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9B9B9A",
      stroke: "none",
      d: "M12.1338,60.0371c-0.04-0.5215,2.2655-0.2523,2.7831-0.3314c1.3427-0.205,1.7472-2.5912,1.8829-4.7953 l0.5022-29.349c0,0-0.3879-1.318-0.0754-1.318l2.9082,0.0717h37.8037L58,20.3664l-0.0038-0.0046l0,0 c-0.0169,0.2818-0.6078-1.9364-0.8105-1.7651c-0.0039,0.0025,0.0925-0.0379,0,0c0,0,0.135,0,0,0 c-0.5527,0-0.1779-1.6485-0.1779-1.6485l-27.3383-0.0025c-0.75,0-0.4256-3.6514-0.8223-3.8284 c-0.0001-0.0002-1.8003-1.0422-2.3372-1.0576c-0.0195-0.0005-11.3428-0.0052-11.3428-0.0052c-1.1026,0-3.2083,1.8996-3.2083,3.0026 c0,0-0.9313,41.2693-0.9563,41.1593c0-0.0001,0-0.0002,0-0.0002l-0.0241-0.0167l1.1915,4.0249l-0.0311-0.1686 C12.1382,60.0492,12.1343,60.0438,12.1338,60.0371z"
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
      d: "M57.0078,20.3044v-3.3562l-27.3383-0.0025c-0.198,0-0.3586-0.165-0.3586-0.3684l-0.0687-1.5169 c-0.116-1.7878-1.3398-3.0033-2.9967-3.0033H14.9589c-1.6569,0-3,1.3432-3,3V56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.9611,55.3694c-0.1472,2.6185-1.9172,4.3009-3.8299,4.5924l43.9148,0.0108c1.6569,0,3-1.3431,3-3V25.3151 c0-0.5523-0.4477-1-1-1H17.9649c-0.5523,0-1,0.4477-1,1L16.9611,55.3694z"
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
      d: "M57.0078,20.3044v-3.3562l-27.3383-0.0025c-0.198,0-0.3586-0.165-0.3586-0.3684l-0.0687-1.5169 c-0.116-1.7878-1.3398-3.0033-2.9967-3.0033H14.9589c-1.6569,0-3,1.3432-3,3V56"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.9611,55.3694c-0.1472,2.6185-1.9172,4.3009-3.8299,4.5924l43.9148,0.0108c1.6569,0,3-1.3431,3-3V25.3151 c0-0.5523-0.4477-1-1-1H17.9649c-0.5523,0-1,0.4477-1,1L16.9611,55.3694z"
    })));
  }
};

export default FileFolder;