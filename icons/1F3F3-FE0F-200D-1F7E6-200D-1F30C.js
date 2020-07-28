import React from 'react';

const UnitedFederationOfPlanetsFlag = ({
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
      fill: "#1E50A0",
      d: "M67 17H5.31909V54.8044H67V17Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M33 31C33 31.5523 32.5523 32 32 32C32.5523 32 33 32.4477 33 33C33 32.4477 33.4477 32 34 32C33.4477 32 33 31.5523 33 31Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M32 31.75C31.8619 31.75 31.75 31.8619 31.75 32C31.75 32.1381 31.8619 32.25 32 32.25V31.75ZM33.25 31C33.25 30.8619 33.1381 30.75 33 30.75C32.8619 30.75 32.75 30.8619 32.75 31H33.25ZM32.75 33C32.75 33.1381 32.8619 33.25 33 33.25C33.1381 33.25 33.25 33.1381 33.25 33H32.75ZM34 32.25C34.1381 32.25 34.25 32.1381 34.25 32C34.25 31.8619 34.1381 31.75 34 31.75V32.25ZM32 32.25C32.6904 32.25 33.25 31.6904 33.25 31H32.75C32.75 31.4142 32.4142 31.75 32 31.75V32.25ZM33.25 33C33.25 32.3096 32.6904 31.75 32 31.75V32.25C32.4142 32.25 32.75 32.5858 32.75 33H33.25ZM34 31.75C33.3096 31.75 32.75 32.3096 32.75 33H33.25C33.25 32.5858 33.5858 32.25 34 32.25V31.75ZM32.75 31C32.75 31.6904 33.3096 32.25 34 32.25V31.75C33.5858 31.75 33.25 31.4142 33.25 31H32.75Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M38 33C38 33.5523 37.5523 34 37 34C37.5523 34 38 34.4477 38 35C38 34.4477 38.4477 34 39 34C38.4477 34 38 33.5523 38 33Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M37 33.75C36.8619 33.75 36.75 33.8619 36.75 34C36.75 34.1381 36.8619 34.25 37 34.25V33.75ZM38.25 33C38.25 32.8619 38.1381 32.75 38 32.75C37.8619 32.75 37.75 32.8619 37.75 33H38.25ZM37.75 35C37.75 35.1381 37.8619 35.25 38 35.25C38.1381 35.25 38.25 35.1381 38.25 35H37.75ZM39 34.25C39.1381 34.25 39.25 34.1381 39.25 34C39.25 33.8619 39.1381 33.75 39 33.75V34.25ZM37 34.25C37.6904 34.25 38.25 33.6904 38.25 33H37.75C37.75 33.4142 37.4142 33.75 37 33.75V34.25ZM38.25 35C38.25 34.3096 37.6904 33.75 37 33.75V34.25C37.4142 34.25 37.75 34.5858 37.75 35H38.25ZM39 33.75C38.3096 33.75 37.75 34.3096 37.75 35H38.25C38.25 34.5858 38.5858 34.25 39 34.25V33.75ZM37.75 33C37.75 33.6904 38.3096 34.25 39 34.25V33.75C38.5858 33.75 38.25 33.4142 38.25 33H37.75Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M37 29C37 29.5523 36.5523 30 36 30C36.5523 30 37 30.4477 37 31C37 30.4477 37.4477 30 38 30C37.4477 30 37 29.5523 37 29Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M36 29.75C35.8619 29.75 35.75 29.8619 35.75 30C35.75 30.1381 35.8619 30.25 36 30.25V29.75ZM37.25 29C37.25 28.8619 37.1381 28.75 37 28.75C36.8619 28.75 36.75 28.8619 36.75 29H37.25ZM36.75 31C36.75 31.1381 36.8619 31.25 37 31.25C37.1381 31.25 37.25 31.1381 37.25 31H36.75ZM38 30.25C38.1381 30.25 38.25 30.1381 38.25 30C38.25 29.8619 38.1381 29.75 38 29.75V30.25ZM36 30.25C36.6904 30.25 37.25 29.6904 37.25 29H36.75C36.75 29.4142 36.4142 29.75 36 29.75V30.25ZM37.25 31C37.25 30.3096 36.6904 29.75 36 29.75V30.25C36.4142 30.25 36.75 30.5858 36.75 31H37.25ZM38 29.75C37.3096 29.75 36.75 30.3096 36.75 31H37.25C37.25 30.5858 37.5858 30.25 38 30.25V29.75ZM36.75 29C36.75 29.6904 37.3096 30.25 38 30.25V29.75C37.5858 29.75 37.25 29.4142 37.25 29H36.75Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.5",
      cy: "33.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "43.5",
      cy: "32.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.5",
      cy: "38.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5",
      cy: "35.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "35.5",
      cy: "32.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "29.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "30.5",
      cy: "35.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "36.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "41.5",
      cy: "27.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.5",
      cy: "26.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37.5",
      cy: "25.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "29.5",
      cy: "31.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "39.5",
      cy: "31.5",
      r: "0.5",
      fill: "#fff"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M27.4883 23.4277L27.0605 24.2832L28.7715 23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.7774 24.711C25.4352 25.3954 25.3496 26.1368 25.3496 26.422L26.2051 25.9942"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M23.2108 28.9885C23.496 29.9866 24.2374 31.6405 24.9218 30.2717M24.0663 26.422C24.0663 27.4201 24.323 29.1596 25.3496 28.133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M22.7831 31.555C23.0682 32.553 23.8952 34.207 24.9218 32.8382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M22.3553 33.6937C22.7831 34.6918 23.8952 36.3457 24.9218 34.9769"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M23.2108 36.688C24.0663 37.9712 25.7773 37.9712 26.2051 36.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M25.3496 39.2544C25.9199 39.6822 27.4884 40.4521 27.4884 38.3989"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M27.0605 41.3932C27.4883 41.5358 28.4293 41.7354 28.7715 41.3932C29.1137 41.051 29.0567 40.3951 28.7715 40.1099"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M32.6213 43.9596C32.6213 43.9596 33.6418 44.6502 34.76 43.5319C35.1022 43.1897 34.3323 42.819 33.9045 42.6764C33.049 42.6764 30.7392 42.5909 30.0548 42.2487"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M45.1113 23.4277L45.5391 24.2832L43.8281 23"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M46.8223 24.711C47.1645 25.3954 47.25 26.1368 47.25 26.422L46.3945 25.9942"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M49.3888 28.9885C49.1036 29.9866 48.3622 31.6405 47.6778 30.2717M48.5333 26.422C48.5333 27.4201 48.2766 29.1596 47.2501 28.133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M49.8165 31.555C49.5314 32.553 48.7044 34.207 47.6778 32.8382"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M50.2443 33.6937C49.8165 34.6918 48.7044 36.3457 47.6778 34.9769"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M49.3888 36.688C48.5333 37.9712 46.8223 37.9712 46.3946 36.688"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M47.25 39.2544C46.6797 39.6822 45.1113 40.4521 45.1113 38.3989"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M45.5391 41.3932C45.1113 41.5358 44.1703 41.7354 43.8281 41.3932C43.4859 41.051 43.5429 40.3951 43.8281 40.1099"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M39.9783 43.9596C39.9783 43.9596 38.9579 44.6502 37.8396 43.5319C37.4974 43.1897 38.2673 42.819 38.6951 42.6764C39.5506 42.6764 41.8604 42.5909 42.5448 42.2487"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "32",
      r: "9",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.15"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#fff",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "M11.5 48.5H60.5"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
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
      strokeWidth: "2",
      d: "M67 17H5V55H67V17Z"
    })));
  }
};

export default UnitedFederationOfPlanetsFlag;