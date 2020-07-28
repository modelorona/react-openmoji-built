import React from 'react';

const Donkey = ({
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
      fill: "#9b9b9a",
      d: "m57.63 26.17v6.052l-0.1816 9.726c0.7836 2.203 3.635 10.68 9.632 9.014l-2.08-1.961-1-2s-0.7087-7.71-0.7014-8.107c0.0073-0.3975-0.6129-6.672-0.6129-6.672l-2.138-4.543z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m45.42 39.57 2.375 6.916-1.708 5.821-2.916 5.092 0.5595 1.822 2.339 0.08633 2.903-1.645 4.044-10.13-0.3066-1.341s-2.295-6.365-3.485-8.242z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m10 11 1.31 4.145c-1.752 3.865-3.739 7.616-5.623 11.42 0.6705 1.348 1.54 2.649 3.204 2.205 1.984 0.6069 2.247-1.583 3.315-2.739 1.805 0.11 3.454-1.772 4.179 0.7548 0.7257 2.527 3.196 3.488 3.526 6.032 0.5046 2.556 0.4774 5.554 2.163 7.637 1.045 2.084 4.09 2.407 4.45 4.775 0.9437 3.618 2.043 7.198 2.901 10.84-0.9267 1.922-0.2105 5.793 2.482 3.707 1.488-2.017 1.106-4.229 0.4183-6.445-0.3097-2.292-0.6345-4.576-0.3681-6.887 0.06374-1.28 0.1275-2.56 0.1912-3.84l7.759 3.765c3.27-1.203 6.841-1.355 9.937-2.94 7.28 9.074 5.599 7.407 5.002 9.597l-0.6871 4.305c-2.418 0.6647-0.5457 3.999 1.45 2.375 1.481-1.944 1.71-4.81 2.912-7.03 0.9828-2.047 1.329-4.546 0.06681-6.54l-1.99-4.475c4.963-2.284 4.866-9.681 1.926-15.22-2.47-0.6383-4.897-1.92-7.516-1.308-3.586 0.01145-7 1.424-10.57 1.352-3.476-0.2993-7.09 0.08479-10.41-1.166-2.153-2.069-3.635-4.884-5.964-6.754-2.728-1.784-5.67-3.149-8.7-4.305-1.599-0.8737-2.978-2.083-4.359-3.257"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "m21.87 41 0.6502 6.214 1.508 3.036-1.133 6.472-1.025 0.903 1.079 1.571 2.258-0.6175s1.876-1.641 1.876-2.016 2-4.188 2-4.188l-1.938-6.902-1.669-2.66-3.606-1.812z"
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
      d: "m16.31 22.62c-0.264 3.606-4.312 4.375-4.312 4.375l-1 1c-1.304 2.826-5.312 0.625-5.312-1.438 1.508-3.415 3.062-5.75 3.062-5.75-0.125-2.792 3.312-4.625 3.312-4.625l-1.278-1.772c-0.4364-0.5685-2.498-4.348-1.785-4.416 1.253-0.1186 6.042 2.815 7 4.938 0 0 8.865 0.9329 13.96 10.43 0.238 0.4441 9.877 2.308 16.07 0.4421 4.284-1.29 17.05-2.062 17.28 10.5 0.117 6.406-0.5624 9.268 3.688 13.69"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.19 37.02c-0.4424 1.631-1.221 3.426-2.589 4.642 0 0 1.096 4.786 3.172 6.804l-2.71 9.167-1.062 1.927c-0.3055 0.5545-0.8885 0.8989-1.522 0.8989v0c-1.252 0-2.096-1.276-1.594-2.423 0.968-2.212 2.16-2.956 2.389-8.301 0 0-6.612-3.939-5.632-9.837"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m17.78 27.49 2.668 5.633s-1.153 6.343 3.287 9.168l2.422 1.557 2.513 9.234 0.9167 3.833-0.4839 1.213c-0.4446 1.114 0.3761 2.325 1.576 2.325v0c0.7126 0 1.349-0.4454 1.594-1.115l0.7465-2.045c0.2401-0.6576 0.2986-1.368 0.1694-2.056l-1.331-4.089-0.1597-8.684c9.1e-5 9.1e-5 7.634 6.18 15.02 2.145"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.51 47.21 0.6035 4.42-1.74 4.287-0.3672 0.9192c-0.482 1.207 0.4068 2.519 1.706 2.519h0c0.7335 0 1.397-0.4362 1.687-1.11l0.7899-1.831"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.07 57.22-1.459 1.647c-0.4197 0.4739-1.064 0.682-1.682 0.5431v0c-1.221-0.2748-1.764-1.705-1.023-2.714 1.43-1.946 2.756-2.41 4.153-7.574"
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
      d: "m16.31 22.62c-0.264 3.606-4.312 4.375-4.312 4.375l-1 1c-1.304 2.826-5.312 0.625-5.312-1.438 1.508-3.415 3.062-5.75 3.062-5.75-0.125-2.792 3.312-4.625 3.312-4.625l-1.278-1.772c-0.4364-0.5685-2.498-4.348-1.785-4.416 1.253-0.1186 6.042 2.815 7 4.938 0 0 8.865 0.9329 13.96 10.43 0.238 0.4441 9.877 2.308 16.07 0.4421 4.284-1.29 17.05-2.062 17.28 10.5 0.117 6.406-0.5624 9.268 3.688 13.69"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m59.19 37.02c-0.4424 1.631-1.221 3.426-2.589 4.642 0 0 1.096 4.786 3.172 6.804l-2.71 9.167-1.062 1.927c-0.3055 0.5545-0.8885 0.8989-1.522 0.8989v0c-1.252 0-2.096-1.276-1.594-2.423 0.968-2.212 2.16-2.956 2.389-8.301 0 0-6.612-3.939-5.632-9.837"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m17.78 27.49 2.668 5.633s-1.153 6.343 3.287 9.168l2.422 1.557 2.513 9.234 0.9167 3.833-0.4839 1.213c-0.4446 1.114 0.3761 2.325 1.576 2.325v0c0.7126 0 1.349-0.4454 1.594-1.115l0.7465-2.045c0.2401-0.6576 0.2986-1.368 0.1694-2.056l-1.331-4.089-0.1597-8.684c9.1e-5 9.1e-5 7.634 6.18 15.02 2.145"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m23.51 47.21 0.6035 4.42-1.74 4.287-0.3672 0.9192c-0.482 1.207 0.4068 2.519 1.706 2.519h0c0.7335 0 1.397-0.4362 1.687-1.11l0.7899-1.831"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "m48.07 57.22-1.459 1.647c-0.4197 0.4739-1.064 0.682-1.682 0.5431v0c-1.221-0.2748-1.764-1.705-1.023-2.714 1.43-1.946 2.756-2.41 4.153-7.574"
    })));
  }
};

export default Donkey;