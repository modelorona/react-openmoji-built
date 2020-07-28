import React from 'react';

const BoxingGlove = ({
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
      fill: "#ea5a47",
      stroke: "none",
      d: "M45.6055,50.9252V46.364c0,0,1.2674-1.1629,2.4125-2.3333c3.7692-3.8524,5.6146-9.8857,5.6146-9.8857 c5.0219-13.3527,0.71-17.7289,0.71-17.7289c-0.9967-1.3248-3.1441-0.5776-3.1441-0.5776c-0.3357-3.0657-1.217-5.0365-1.217-5.0365 c-2.3082-7.0949-21.9067-5.0803-21.9067-5.0803C15.1069,7.5175,15.9463,21.532,15.9463,21.532 c-0.011,18.5937,6.1272,24.8196,6.1272,24.8196v4.524c0,1.8644,5.2812,3.3819,11.7536,3.3819S45.6055,52.7896,45.6055,50.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M33.5724,66.5424c6.6195,0,12.0327-1.515,12.0327-3.3795l0.0005-0.0252V50.9252 c0,1.8644-5.3061,3.3324-11.7785,3.3324s-11.7536-1.5175-11.7536-3.3819v12.2496l0.0005,0.0376 c0,1.8644,5.4131,3.3795,12.0327,3.3795"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#ea5a47",
      stroke: "none",
      d: "M45.6055,50.9252"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      stroke: "none",
      d: "M45.1785,50.9252V46.364c0,0,1.2674-1.1629,2.4125-2.3333c3.7692-3.8524,5.6146-9.8857,5.6146-9.8857 c5.0219-13.3527,0.71-17.7289,0.71-17.7289c-0.9967-1.3248-3.1441-0.5776-3.1441-0.5776c-0.3357-3.0657-1.217-5.0365-1.217-5.0365 C48.5609,7.7486,40.9582,6.0735,36.5,5.5079c0,0,27.125,11.8671,3.6091,39.5366c-0.1393,0.1639-0.2027,0.3785-0.2025,0.5937 c0.0012,1.2357,0.0053,5.6832,0.0053,8.0304l-0.0057,0.0385C39.9062,53.707,43.9507,53.017,45.1785,50.9252z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      stroke: "none",
      d: "M39.9063,66.9688c4.0891-0.5312,6.695-2.125,6.695-3.5284l0.0006-0.0258V50.9252 c0,1.1917-2.7146,2.2375-6.6956,2.8449V66.9688z"
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
      d: "M45.6055,50.9252c0,1.8644-5.3061,3.3324-11.7785,3.3324s-11.7536-1.5175-11.7536-3.3819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6055,60.1059V46.364c0,0,1.2674-1.1629,2.4125-2.3333c3.7692-3.8524,5.6146-9.8857,5.6146-9.8857 c5.0219-13.3527,0.71-17.7289,0.71-17.7289c-0.9967-1.3248-3.1441-0.5776-3.1441-0.5776c-0.3357-3.0657-1.217-5.0365-1.217-5.0365 c-2.3082-7.0949-21.9067-5.0803-21.9067-5.0803C15.1069,7.5175,15.9463,21.532,15.9463,21.532 c-0.011,18.5937,6.1272,24.8196,6.1272,24.8196v16.7736l0.0005,0.0376c0,1.8644,5.4131,3.3795,12.0327,3.3795"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.5724,66.5424c5.3784,0,9.9603-1.0002,11.4895-2.3752c0.0209-0.0188,0.0413-0.0377,0.0611-0.0567"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.3212,13.5613c4.9387-4.4356,9.8773,2.2774,9.8773,2.2774s-6.0223,1.8613-4.9836,10.927"
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
      d: "M45.6055,50.9252c0,1.8644-5.3061,3.3324-11.7785,3.3324s-11.7536-1.5175-11.7536-3.3819"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.6055,60.1059V46.364c0,0,1.2674-1.1629,2.4125-2.3333c3.7692-3.8524,5.6146-9.8857,5.6146-9.8857 c5.0219-13.3527,0.71-17.7289,0.71-17.7289c-0.9967-1.3248-3.1441-0.5776-3.1441-0.5776c-0.3357-3.0657-1.217-5.0365-1.217-5.0365 c-2.3082-7.0949-21.9067-5.0803-21.9067-5.0803C15.1069,7.5175,15.9463,21.532,15.9463,21.532 c-0.011,18.5937,6.1272,24.8196,6.1272,24.8196v16.7736l0.0005,0.0376c0,1.8644,5.4131,3.3795,12.0327,3.3795"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.5724,66.5424c5.3784,0,9.9603-1.0002,11.4895-2.3752c0.0209-0.0188,0.0413-0.0377,0.0611-0.0567"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.3212,13.5613c4.9387-4.4356,9.8773,2.2774,9.8773,2.2774s-6.0223,1.8613-4.9836,10.927"
    })));
  }
};

export default BoxingGlove;