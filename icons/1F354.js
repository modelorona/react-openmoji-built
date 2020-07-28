import React from 'react';

const Hamburger = ({
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
      fill: "#a57939",
      d: "m57.6 48.95-41.6 0.347c-1.104 0.0092-2-0.8955-2-2v-6.75c0-1.104 0.8955-2 2-2l41.89 0.6072z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "m32.88 49.47h-17.88c-1.104 0-2 0.7013-2 1.566v4.699c0 0.865 0.8955 1.566 2 1.566h42c1.104 0 2-0.7013 2-1.566v-4.699c0-0.865-0.8955-1.566-2-1.566h-17.79"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "m48 49.3h9c1.104 0 2 0.7168 2 1.601v4.803c0 0.8841-0.8955 1.601-2 1.601h-9z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "m59 27.53c0 0.7243-0.8955 1.312-2 1.312h-42c-1.104 0-2-0.5872-2-1.312 1.484-7.465 11.21-13.23 23-13.23s21.52 5.765 23 13.23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "m42 15.14c3.074 3.299 5.156 7.823 6 13.67h9c1.104 0 2-0.5738 2-1.281-1.5-7.201-10.66-11.53-17-12.39z"
    }), /*#__PURE__*/React.createElement("polygon", {
      transform: "translate(14.26 17.08) scale(.5893)",
      fill: "#fcea2b",
      points: "49.94 35.25 22.06 35.25 36 49.19"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#6a462f",
      strokeWidth: "0",
      d: "m48 38.48v10.82h8c1.104 0 2-0.8955 2-2v-6.75c0-1.104-0.8955-2-2-2h-6.666"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "16.33",
      y: "31.2",
      width: "39.35",
      height: "2.093",
      fill: "#ea5a47",
      "fill-rule": "evenodd",
      stroke: "#ea5a47",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      "paint-order": "stroke fill markers"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      "fill-rule": "evenodd",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m49.04 31.2h6.661v2.126h-6.661z",
      "paint-order": "stroke fill markers"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      stroke: "#b1cc33",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m15.89 37.09 40.58-0.3828c2.212-0.4852 2.519-1.021 2.732-2.267-1.861 1.266-3.301 1.278-4.582 1.438-2.319-0.01147-4.462 0.02441-5.933-1.85l-5.997-0.4466-4.338 1.914-4.338-0.0638-4.785-1.659-5.104-0.2552c-1.222 1.475-3.522 1.902-4.913 2.361-2.134-0.3929-4.418 0.8084-6.398-1.438 0.4895 1.538 0.4986 1.973 3.08 2.65z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5c9e31",
      stroke: "#5c9e31",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m49.02 37.84 7.438-1.134c2.212-0.4852 2.519-1.021 2.732-2.267-1.861 1.266-3.301 1.278-4.582 1.438-2.319-0.01147-2.088-0.01915-4.079-1.018l-1.509-0.8729z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      "fill-rule": "evenodd",
      stroke: "#d22f27",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "m49.04 31.2h4.185v2.126h-4.185z",
      "paint-order": "stroke fill markers"
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
      d: "m32.88 49.3h-16.88c-1.104 0-2-0.8955-2-2v-6.75c0-1.104 0.8955-2 2-2h40c1.104 0 2 0.8955 2 2v6.75c0 1.104-0.8955 2-2 2h-16.79z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m32.88 49.47h-17.88c-1.104 0-2 0.7013-2 1.566v4.699c0 0.865 0.8955 1.566 2 1.566h42c1.104 0 2-0.7013 2-1.566v-4.699c0-0.865-0.8955-1.566-2-1.566h-17.79z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59 27.93c0 0.7243-0.8955 1.312-2 1.312h-42c-1.104 0-2-0.5872-2-1.312 1.484-7.465 11.21-13.23 23-13.23s21.52 5.765 23 13.23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m43.24 38.93h-14.48l7.242 7.164z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.19 34.1c-0.7619 0.3964-1.358 0.8199-2.487 1.002-1.368 0.3587-3.178 0.2195-4.602 0-1.928-0.3112-2.302-1.326-4.602-1.708-1.424-0.2195-3.178-0.2195-4.602 0-2.299 0.3815-2.673 1.396-4.602 1.708-1.424 0.2195-3.178 0.2195-4.602 0-1.928-0.3112-2.302-1.326-4.602-1.708-1.424-0.2195-3.178-0.2195-4.602 0-2.299 0.3815-2.673 1.396-4.602 1.708-1.424 0.2195-3.178 0.2195-4.602 0-1.129-0.1823-1.725-0.6058-2.487-1.002",
      "paint-order": "stroke fill markers"
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
      d: "m32.88 49.3h-16.88c-1.104 0-2-0.8955-2-2v-6.75c0-1.104 0.8955-2 2-2h40c1.104 0 2 0.8955 2 2v6.75c0 1.104-0.8955 2-2 2h-16.79z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m32.88 49.47h-17.88c-1.104 0-2 0.7013-2 1.566v4.699c0 0.865 0.8955 1.566 2 1.566h42c1.104 0 2-0.7013 2-1.566v-4.699c0-0.865-0.8955-1.566-2-1.566h-17.79z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59 27.93c0 0.7243-0.8955 1.312-2 1.312h-42c-1.104 0-2-0.5872-2-1.312 1.484-7.465 11.21-13.23 23-13.23s21.52 5.765 23 13.23z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m43.24 38.93h-14.48l7.242 7.164z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.19 34.1c-0.7619 0.3964-1.358 0.8199-2.487 1.002-1.368 0.3587-3.178 0.2195-4.602 0-1.928-0.3112-2.302-1.326-4.602-1.708-1.424-0.2195-3.178-0.2195-4.602 0-2.299 0.3815-2.673 1.396-4.602 1.708-1.424 0.2195-3.178 0.2195-4.602 0-1.928-0.3112-2.302-1.326-4.602-1.708-1.424-0.2195-3.178-0.2195-4.602 0-2.299 0.3815-2.673 1.396-4.602 1.708-1.424 0.2195-3.178 0.2195-4.602 0-1.129-0.1823-1.725-0.6058-2.487-1.002",
      "paint-order": "stroke fill markers"
    })));
  }
};

export default Hamburger;