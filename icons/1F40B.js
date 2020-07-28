import React from 'react';

const Whale = ({
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
      fill: "#61b2e4",
      d: "m23.065 26.72c-4.1282 3.8472-5.5675 8.7526-5.5888 14.429-0.006 1.6437 1.7126 2.0844 2.9248 0.97512 3.5672-2.5162 6.8185-8.6309 4.9638-11.042"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m30.041 14.415c-8.6237-0.0962-15.832 3.2259-17.484 5.0703 4.89 16.658 15.151 15.654 22.777 15.324l0.0762 0.99804c1.6115-0.0652 3.0624-0.10263 4.25 0.0527 1.0494 0.13734 1.8668 0.41137 2.4688 0.86523 0.60199 0.45387 1.0483 1.0936 1.3281 2.207a1.0001 1.0001 0 0 0 0.30273 0.49805c0.28067 0.85815 0.59483 1.6448 1.0801 2.1602 0.0385 0.47969 0.0486 0.9432 0.0156 1.5918-0.54151 4.0693-4.2846 0.5379-6.4883 2.6406-0.80175 0.76502-2.8088 3.2889-2.4512 3.918 0.0239 0.042 0.0577 0.0776 0.10352 0.10156 0.16953 0.0886 0.49707 0.0475 1.0352-0.17773 2.5151-0.519 4.3131 2.5755 6.6074 2.3613 0.92332-0.0862 1.6072-0.59985 2.1094-0.99218 0.10561 0.86518 0.0158 2.5092 0.81641 3.2734 1.4307 1.2756 4.0008 2.2803 3.7207 5.9746 2.6173-2.7921 4.7922-4.639 2.0606-9.291-0.96732-1.6175-1.5274-2.5131-1.0508-3.6445 0.26265-0.34637 1.0229-1.2044 1.2852-1.5977 9.5709-10.006 1.1331-21.326-6.4043-26.412-5.2994-3.5758-10.984-4.8641-16.158-4.9219z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m35.021 30.718-5.826-1.4363-4.1621-4.3906-5.6055-4.8906v0.00004l-5.9219 2.2988 5.877 9.1035 6.9394 3.4043 0.89453 0.8711c1.4444 0.20036 2.8744 0.26277 4.2461 0.2539 1.3804-0.009 2.7116-0.0754 3.9479-0.12544"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m35.718 26.72c-4.1282 3.8472-5.5675 8.7526-5.5888 14.429-0.006 1.6437 1.7126 2.0844 2.9248 0.97512 3.5672-2.5162 6.8185-8.6309 4.9638-11.042l1.2145-4.0815z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m19.5 31.459c-1.4394 2.8807-2.0101 6.1344-2.0234 9.6914-0.006 1.6437 1.7116 2.0839 2.9238 0.97461 2.3696-1.6714 4.5906-4.9279 5.2773-7.6348"
    }), /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "m27.718 34.762c-0.36802-0.0442-0.73634-0.0977-1.1043-0.16218-5.489-0.96174-10.897-4.3507-14.057-15.115 2.6444-2.951 19.51-9.6836 33.642-0.148 7.5374 5.086 15.975 16.405 6.4039 26.411-0.26228 0.39322-1.0215 1.2521-1.2841 1.5985-0.47657 1.1314 0.0837 2.0265 1.051 3.644 2.7316 4.6521 0.55534 6.4992-2.062 9.2913 0.2801-3.6943-2.2893-4.6988-3.72-5.9743-0.80061-0.76418-0.71022-2.4091-0.81583-3.2743-0.50218 0.39233-1.1858 0.90701-2.1091 0.99321-2.2943 0.21419-4.0926-2.881-6.6078-2.362-0.53808 0.2252-0.86574 0.26644-1.0353 0.17783-0.0458-0.024-0.0803-0.0582-0.10419-0.10016-0.35758-0.62906 1.649-3.1537 2.4508-3.9187 2.2037-2.1027 5.9472 1.4291 6.4887-2.6402 0.0684-1.3457-0.0397-1.9035-0.22987-3.4344-0.31633-2.5468-1.4236-3.8344-3.0607-4.4589"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m38.033 31.082c1.6283 0.069 3.0443 0.24313 4.2708 0.49887"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13.961 23.298c-0.42519-1.68 1.1394-2.486 3.2694-2.7908 5.7206-0.81857 8.8438 7.6773 14.428 9.7485"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m35.718 26.72c-4.1282 3.8472-5.5675 8.7526-5.5888 14.429-0.006 1.6437 1.7126 2.0844 2.9248 0.97512 3.5672-2.5162 6.8185-8.6309 4.9638-11.042"
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
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m19.5 31.459c-1.4394 2.8807-2.0101 6.1344-2.0234 9.6914-0.006 1.6437 1.7116 2.0839 2.9238 0.97461 2.3696-1.6714 4.5906-4.9279 5.2773-7.6348"
    }), /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "m27.718 34.762c-0.36802-0.0442-0.73634-0.0977-1.1043-0.16218-5.489-0.96174-10.897-4.3507-14.057-15.115 2.6444-2.951 19.51-9.6836 33.642-0.148 7.5374 5.086 15.975 16.405 6.4039 26.411-0.26228 0.39322-1.0215 1.2521-1.2841 1.5985-0.47657 1.1314 0.0837 2.0265 1.051 3.644 2.7316 4.6521 0.55534 6.4992-2.062 9.2913 0.2801-3.6943-2.2893-4.6988-3.72-5.9743-0.80061-0.76418-0.71022-2.4091-0.81583-3.2743-0.50218 0.39233-1.1858 0.90701-2.1091 0.99321-2.2943 0.21419-4.0926-2.881-6.6078-2.362-0.53808 0.2252-0.86574 0.26644-1.0353 0.17783-0.0458-0.024-0.0803-0.0582-0.10419-0.10016-0.35758-0.62906 1.649-3.1537 2.4508-3.9187 2.2037-2.1027 5.9472 1.4291 6.4887-2.6402 0.0684-1.3457-0.0397-1.9035-0.22987-3.4344-0.31633-2.5468-1.4236-3.8344-3.0607-4.4589"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m38.033 31.082c1.6283 0.069 3.0443 0.24313 4.2708 0.49887"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m13.961 23.298c-0.42519-1.68 1.1394-2.486 3.2694-2.7908 5.7206-0.81857 8.8438 7.6773 14.428 9.7485"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m35.718 26.72c-4.1282 3.8472-5.5675 8.7526-5.5888 14.429-0.006 1.6437 1.7126 2.0844 2.9248 0.97512 3.5672-2.5162 6.8185-8.6309 4.9638-11.042"
    })));
  }
};

export default Whale;