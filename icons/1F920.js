import React from 'react';

const CowboyHatFace = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "38",
      r: "24",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M36,23.3153c9.267-0.1288,15.3345-2.4577,15.3345-2.4577c2.5862,2.315,4.6453,5.2066,5.9755,8.4727 c0,0,10.5948-8.3618,2.2954-15.1052c0,0-4.0069-3.8593-10.0363,1.6462c0,0-3.8861,3.6651-13.5691,3.706 c-9.683-0.0409-13.5691-3.706-13.5691-3.706c-6.0294-5.5055-10.0363-1.6462-10.0363-1.6462 C4.0952,20.9685,14.69,29.3303,14.69,29.3303c1.3301-3.2661,3.3893-6.1577,5.9755-8.4727 C20.6655,20.8576,26.733,23.1866,36,23.3153z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6A462F",
      d: "M36,19.5773c6.0519-0.0256,9.767-1.4279,11.7566-2.5053c0,0-1.6341-0.5702-1.3904-2.7816 c0.0725-0.6576,0.3541-1.6277,0.7107-2.549c0.6391-1.651,0.1938-2.9689-4.1138-5.1348c0,0-2.0825-1.0407-2.8202-1.2739 C39.0599,4.9904,37.209,4.7124,36,6.1508c-1.209-1.4384-3.0599-1.1604-4.1428-0.8181c-0.7377,0.2332-2.8202,1.2739-2.8202,1.2739 c-4.3076,2.1659-4.7529,3.4838-4.1138,5.1348c0.3566,0.9213,0.6382,1.8914,0.7107,2.549c0.2437,2.2114-1.3904,2.7816-1.3904,2.7816 C26.233,18.1494,29.9481,19.5517,36,19.5773L36,19.5773z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M50.595,43.64c0.012,1.5397-0.2838,3.0662-0.87,4.49c-12.49,3.03-25.43,0.34-27.49-0.13 c-0.5588-1.3852-0.8407-2.8664-0.83-4.36h0.11c0,0,14.8,3.59,28.89,0.07L50.595,43.64z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M49.7251,48.13c-1.79,4.27-6.35,7.23-13.69,7.23c-7.41,0-12.03-3.03-13.8-7.36 C24.2951,48.47,37.235,51.16,49.7251,48.13z"
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
      d: "M33.2301,24.7652"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9221,46.0367"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.0684",
      cy: "32.818",
      rx: "3",
      ry: "5.4038"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.9316",
      cy: "32.8216",
      rx: "3",
      ry: "5.4038"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.4382,32.925C58.8059,34.5577,59,36.2562,59,38c0,12.7025-10.2975,23-23,23S13,50.7025,13,38 c0-1.7438,0.1941-3.4423,0.5618-5.075"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,23.3153c9.267-0.1288,15.3345-2.4577,15.3345-2.4577c2.5862,2.315,4.6453,5.2066,5.9755,8.4727 c0,0,10.5948-8.3618,2.2954-15.1052c0,0-4.0069-3.8593-10.0363,1.6462c0,0-3.8861,3.6651-13.5691,3.706 c-9.683-0.0409-13.5691-3.706-13.5691-3.706c-6.0294-5.5055-10.0363-1.6462-10.0363-1.6462 C4.0952,20.9685,14.69,29.3303,14.69,29.3303c1.3301-3.2661,3.3893-6.1577,5.9755-8.4727 C20.6655,20.8576,26.733,23.1866,36,23.3153z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.5773c6.0519-0.0256,9.767-1.4279,11.7566-2.5053c0,0-1.6341-0.5702-1.3904-2.7816c0.0725-0.6576,0.3541-1.6277,0.7107-2.549 c0.6391-1.651,0.1938-2.9689-4.1138-5.1348c0,0-2.0825-1.0407-2.8202-1.2739C39.0599,4.9904,37.209,4.7124,36,6.1508 c-1.209-1.4384-3.0599-1.1604-4.1428-0.8181c-0.7377,0.2332-2.8202,1.2739-2.8202,1.2739 c-4.3076,2.1659-4.7529,3.4838-4.1138,5.1348c0.3566,0.9213,0.6382,1.8914,0.7107,2.549c0.2437,2.2114-1.3904,2.7816-1.3904,2.7816 C26.233,18.1494,29.9481,19.5517,36,19.5773L36,19.5773z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.595,43.64 c0.012,1.5397-0.2838,3.0662-0.87,4.49c-12.49,3.03-25.43,0.34-27.49-0.13c-0.5588-1.3852-0.8407-2.8664-0.83-4.36h0.11 c0,0,14.8,3.59,28.89,0.07L50.595,43.64z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.7251,48.13 c-1.79,4.27-6.35,7.23-13.69,7.23c-7.41,0-12.03-3.03-13.8-7.36C24.2951,48.47,37.235,51.16,49.7251,48.13z"
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
      d: "M33.2301,24.7652"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.9221,46.0367"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "28.0684",
      cy: "32.818",
      rx: "3",
      ry: "5.4038"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "43.9316",
      cy: "32.8216",
      rx: "3",
      ry: "5.4038"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M58.4382,32.925C58.8059,34.5577,59,36.2562,59,38c0,12.7025-10.2975,23-23,23S13,50.7025,13,38 c0-1.7438,0.1941-3.4423,0.5618-5.075"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,23.3153c9.267-0.1288,15.3345-2.4577,15.3345-2.4577c2.5862,2.315,4.6453,5.2066,5.9755,8.4727 c0,0,10.5948-8.3618,2.2954-15.1052c0,0-4.0069-3.8593-10.0363,1.6462c0,0-3.8861,3.6651-13.5691,3.706 c-9.683-0.0409-13.5691-3.706-13.5691-3.706c-6.0294-5.5055-10.0363-1.6462-10.0363-1.6462 C4.0952,20.9685,14.69,29.3303,14.69,29.3303c1.3301-3.2661,3.3893-6.1577,5.9755-8.4727 C20.6655,20.8576,26.733,23.1866,36,23.3153z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36,19.5773c6.0519-0.0256,9.767-1.4279,11.7566-2.5053c0,0-1.6341-0.5702-1.3904-2.7816c0.0725-0.6576,0.3541-1.6277,0.7107-2.549 c0.6391-1.651,0.1938-2.9689-4.1138-5.1348c0,0-2.0825-1.0407-2.8202-1.2739C39.0599,4.9904,37.209,4.7124,36,6.1508 c-1.209-1.4384-3.0599-1.1604-4.1428-0.8181c-0.7377,0.2332-2.8202,1.2739-2.8202,1.2739 c-4.3076,2.1659-4.7529,3.4838-4.1138,5.1348c0.3566,0.9213,0.6382,1.8914,0.7107,2.549c0.2437,2.2114-1.3904,2.7816-1.3904,2.7816 C26.233,18.1494,29.9481,19.5517,36,19.5773L36,19.5773z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M50.595,43.64 c0.012,1.5397-0.2838,3.0662-0.87,4.49c-12.49,3.03-25.43,0.34-27.49-0.13c-0.5588-1.3852-0.8407-2.8664-0.83-4.36h0.11 c0,0,14.8,3.59,28.89,0.07L50.595,43.64z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.7251,48.13 c-1.79,4.27-6.35,7.23-13.69,7.23c-7.41,0-12.03-3.03-13.8-7.36C24.2951,48.47,37.235,51.16,49.7251,48.13z"
    })));
  }
};

export default CowboyHatFace;