import React from 'react';

const GardeningGloves = ({
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
      fill: "#5c9e31",
      d: "m38.23 15.46c-0.05391-0.9704 3.723-3.997 5.806-0.8783 0.3947 0.3603 2.126-1.389 4.198-1.123 1.4 0.1795 1.977 2.648 3.377 3.33 1.36 0.5103 2.606 1.286 3.663 2.283 0.3635 0.4755 0.115 1.578 0.4757 3.044 0.3318 1.349 3.817 1.221 3.044 2.854-2.177 4.831-4.721 9.489-7.608 13.93-2.395 3.375-4.231 7.113-5.439 11.07 0 0-12.28-21.09-7.517-34.51z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#b1cc33",
      d: "m13.37 19.06s0.5756-2.126 4.428-2.923c0.8819-1.102 0.7982-4.045 2.918-3.453 3.834 0.2536 4.765-1.352 8.137-0.7087 1.404 1.531 5.977 1.341 6.438 1.327 3.925 5.378 9.018 30.07 7.855 32.25-1.163 2.18-16.35 6.706-16.35 6.706s-14.88-32.77-13.42-33.2z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "m26.91 52.79 16.64-6.381 2.603 6.788a1.424 1.424 0 0 1-0.82 1.84l-13.62 5.221a1.816 1.816 0 0 1-2.345-1.045z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m38.19 15.22s3.818-2.736 5.841-0.8853c0.3971 0.3632 2.139-1.4 4.223-1.132 1.409 0.1809 1.989 2.668 3.398 3.356a11.01 11.03 0 0 1 3.685 2.301c0.3657 0.4793 0.1157 1.591 0.4786 3.068 0.3338 1.36 3.84 1.231 3.063 2.877a104.5 104.7 0 0 1-7.655 14.04 38.81 38.88 0 0 0-5.472 11.16s-12.36-21.26-7.562-34.79z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13.18 18.85s0.5791-2.142 4.455-2.946c1.064-0.8281 1.599-2.757 3.074-3.214a5.088 5.097 0 0 1 3.508 0.4824c0.9655 0.3721 2.368-1.018 3.354-1.107 1.408-0.128 2.653 1.232 3.801 1.39 1.193 0.1649 3.266-1.226 3.862-0.4086 3.949 5.421 9.073 30.31 7.903 32.51s-16.45 6.759-16.45 6.759-14.97-33.03-13.5-33.47z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m26.81 52.84 16.4-6.333 2.959 6.744c0.3185 0.7259-0.08601 1.57-0.825 1.854l-13.7 5.262c-0.9418 0.3618-1.998-0.1096-2.359-1.053z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m22.4 26.77c-1.102-3.313-2.039-8.034-4.299-9.815-0.771-0.6274-1.788-0.8635-2.756-0.6397-4.352 2.25 0.1619 9.156 1.219 12.29 0.8956 2.66 2.043 6.165 2.896 8.616 1.291 3.71 7.348 15.61 7.348 15.61"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.1 16.96c-0.2327-4.612 4.101-6.323 6.053-3.535 1.646 2.492 4.171 11 4.171 11"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m24.34 13.43c0.7753-0.8783 1.184-1.734 2.307-2.063 1.876-0.4919 3.014-0.1346 4.041 2.829 1.027 2.964 3.123 9.961 3.123 9.961"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m30.69 14.2s2.407-2.769 4.881-0.605c0.8942 1.681 5.535 19.73 5.535 19.73s2.617 10.46 2.104 13.18"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.79 34.83s2.102 2.661 3.196 2.531c2.798-0.3336 3.077-3.89 3.15-5.871 0.07328-1.981 0.5905-4.11 3.189-3.963 2.598 0.1468 3.99 0.5871 3.624 4.183-0.3663 3.596-3.003 13.5-3.003 13.5l5.263 4.562"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.99 17.27s2.13-3.556 3.022-3.979c0.9583-0.4541 4.163 0.1159 4.112 2.638-0.05132 2.522-3.619 8.345-3.619 8.345"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m44.12 15.93s1.683-2.82 3.258-2.961c2.068-0.3008 3.843 1.477 3.543 3.549-0.07685 0.4288-0.1936 0.8494-0.3487 1.256-1.45 3.36-3.132 6.616-5.034 9.742"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m50.79 17.62s2.353-1.24 3.71-0.1185a2.769 2.774 0 0 1 0.7127 4.046c-0.9842 1.768-5.122 9.663-5.122 9.663"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m55.03 22.19c0.0095-0.03558 4.244-0.8609 3.749 2.792-0.2663 1.964-13.84 25.29-13.84 25.29"
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
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m38.19 15.22s3.818-2.736 5.841-0.8853c0.3971 0.3632 2.139-1.4 4.223-1.132 1.409 0.1809 1.989 2.668 3.398 3.356a11.01 11.03 0 0 1 3.685 2.301c0.3657 0.4793 0.1157 1.591 0.4786 3.068 0.3338 1.36 3.84 1.231 3.063 2.877a104.5 104.7 0 0 1-7.655 14.04 38.81 38.88 0 0 0-5.472 11.16s-12.36-21.26-7.562-34.79z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13.18 18.85s0.5791-2.142 4.455-2.946c1.064-0.8281 1.599-2.757 3.074-3.214a5.088 5.097 0 0 1 3.508 0.4824c0.9655 0.3721 2.368-1.018 3.354-1.107 1.408-0.128 2.653 1.232 3.801 1.39 1.193 0.1649 3.266-1.226 3.862-0.4086 3.949 5.421 9.073 30.31 7.903 32.51s-16.45 6.759-16.45 6.759-14.97-33.03-13.5-33.47z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m26.81 52.84 16.4-6.333 2.959 6.744c0.3185 0.7259-0.08601 1.57-0.825 1.854l-13.7 5.262c-0.9418 0.3618-1.998-0.1096-2.359-1.053z"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m22.4 26.77c-1.102-3.313-2.039-8.034-4.299-9.815-0.771-0.6274-1.788-0.8635-2.756-0.6397-4.352 2.25 0.1619 9.156 1.219 12.29 0.8956 2.66 2.043 6.165 2.896 8.616 1.291 3.71 7.348 15.61 7.348 15.61"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.1 16.96c-0.2327-4.612 4.101-6.323 6.053-3.535 1.646 2.492 4.171 11 4.171 11"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m24.34 13.43c0.7753-0.8783 1.184-1.734 2.307-2.063 1.876-0.4919 3.014-0.1346 4.041 2.829 1.027 2.964 3.123 9.961 3.123 9.961"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m30.69 14.2s2.407-2.769 4.881-0.605c0.8942 1.681 5.535 19.73 5.535 19.73s2.617 10.46 2.104 13.18"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m18.79 34.83s2.102 2.661 3.196 2.531c2.798-0.3336 3.077-3.89 3.15-5.871 0.07328-1.981 0.5905-4.11 3.189-3.963 2.598 0.1468 3.99 0.5871 3.624 4.183-0.3663 3.596-3.003 13.5-3.003 13.5l5.263 4.562"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m36.99 17.27s2.13-3.556 3.022-3.979c0.9583-0.4541 4.163 0.1159 4.112 2.638-0.05132 2.522-3.619 8.345-3.619 8.345"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m44.12 15.93s1.683-2.82 3.258-2.961c2.068-0.3008 3.843 1.477 3.543 3.549-0.07685 0.4288-0.1936 0.8494-0.3487 1.256-1.45 3.36-3.132 6.616-5.034 9.742"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m50.79 17.62s2.353-1.24 3.71-0.1185a2.769 2.774 0 0 1 0.7127 4.046c-0.9842 1.768-5.122 9.663-5.122 9.663"
    }), /*#__PURE__*/React.createElement("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "m55.03 22.19c0.0095-0.03558 4.244-0.8609 3.749 2.792-0.2663 1.964-13.84 25.29-13.84 25.29"
    })));
  }
};

export default GardeningGloves;