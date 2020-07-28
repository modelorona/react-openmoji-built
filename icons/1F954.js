import React from 'react';

const Potato = ({
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
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0417,27.8733c0,18.2898-7.5955,27.2079-14.6746,31.5411c-6.1848,3.8041-11.9917,4.1064-11.9917,4.1064 c-10.8076,0-19.5746-8.767-19.5746-19.5746c0-6.6509,3.7337-11.4301,8.3765-16.0729C33.2467,15.804,31.9388,9.5079,42.8303,9.5079 c8.956,0,16.2114,7.2681,16.2114,16.224C59.0417,26.5381,59.0417,27.8733,59.0417,27.8733z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#a57939",
      stroke: "none",
      d: "M59.0449,25.73c0,0.81,0,2.14,0,2.14c0,18.29-7.6,27.21-14.68,31.54 c-6.1801,3.81-11.9901,4.11-11.9901,4.11c-1.67,0-3.28-0.21-4.8199-0.6c31.56-8.62,25.35-49.89,25.35-49.89 C56.6449,16,59.0449,20.59,59.0449,25.73z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.2737",
      cy: "51.6496",
      r: "3.2408",
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
      d: "M59.0417,27.8733c0,18.2898-7.5955,27.2079-14.6746,31.5411c-6.1848,3.8041-11.9917,4.1064-11.9917,4.1064 c-10.8076,0-19.5746-8.767-19.5746-19.5746c0-6.6509,3.7337-11.4301,8.3765-16.0729C33.2467,15.804,31.9388,9.5079,42.8303,9.5079 c8.956,0,16.2114,7.2681,16.2114,16.224C59.0417,26.5381,59.0417,27.8733,59.0417,27.8733z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.534",
      cy: "16.2145",
      r: "1.2603",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.2737",
      cy: "51.6496",
      r: "3.2408",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0417,27.8733c0,18.2898-7.5955,27.2079-14.6746,31.5411c-6.1848,3.8041-11.9917,4.1064-11.9917,4.1064 c-10.8076,0-19.5746-8.767-19.5746-19.5746c0-6.6509,3.7337-11.4301,8.3765-16.0729C33.2467,15.804,31.9388,9.5079,42.8303,9.5079 c8.956,0,16.2114,7.2681,16.2114,16.224C59.0417,26.5381,59.0417,27.8733,59.0417,27.8733z"
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
      d: "M59.0417,27.8733c0,18.2898-7.5955,27.2079-14.6746,31.5411c-6.1848,3.8041-11.9917,4.1064-11.9917,4.1064 c-10.8076,0-19.5746-8.767-19.5746-19.5746c0-6.6509,3.7337-11.4301,8.3765-16.0729C33.2467,15.804,31.9388,9.5079,42.8303,9.5079 c8.956,0,16.2114,7.2681,16.2114,16.224C59.0417,26.5381,59.0417,27.8733,59.0417,27.8733z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.534",
      cy: "16.2145",
      r: "1.2603",
      fill: "#000000",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "38.2737",
      cy: "51.6496",
      r: "3.2408",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.0417,27.8733c0,18.2898-7.5955,27.2079-14.6746,31.5411c-6.1848,3.8041-11.9917,4.1064-11.9917,4.1064 c-10.8076,0-19.5746-8.767-19.5746-19.5746c0-6.6509,3.7337-11.4301,8.3765-16.0729C33.2467,15.804,31.9388,9.5079,42.8303,9.5079 c8.956,0,16.2114,7.2681,16.2114,16.224C59.0417,26.5381,59.0417,27.8733,59.0417,27.8733z"
    })));
  }
};

export default Potato;