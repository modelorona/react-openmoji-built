import React from 'react';

const StopSign = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.3878,14.7292H27.6122c-0.2652,0-0.5196,0.1054-0.7071,0.2929L15.0429,26.8843c-0.1875,0.1875-0.2929,0.4419-0.2929,0.7071 V44.367c0,0.2652,0.1054,0.5196,0.2929,0.7071l11.8622,11.8622c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h16.7756 c0.2652,0,0.5196-0.1054,0.7071-0.2929l11.8622-11.8622c0.1875-0.1875,0.2929-0.4419,0.2929-0.7071V27.5914 c0-0.2652-0.1054-0.5196-0.2929-0.7071L45.0949,15.0221C44.9074,14.8346,44.653,14.7292,44.3878,14.7292z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.323,39.5L39.323,39.5c-1.3807,0-2.5-1.1193-2.5-2.5v-2c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v2 C41.823,38.3807,40.7037,39.5,39.323,39.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.1449,33.8941c-0.205-0.7975-1.0911-1.3973-2.1532-1.3973l0,0c-1.2139,0-2.1979,0.7834-2.1979,1.75 c0,0.9664,0.984,1.75,2.1979,1.75l-0.0447,0.0064c1.2139,0,2.1979,0.7835,2.1979,1.75s-0.984,1.75-2.1979,1.75l0,0 c-1.0621,0-1.9482-0.5998-2.1532-1.3973"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.6462",
      x2: "33.6462",
      y1: "32.5",
      y2: "32.5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6462",
      x2: "31.6462",
      y1: "32.5",
      y2: "39.5",
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
      d: "M45.7936,39.5v-7h2.6692c0.9629,0,1.7434,0.7806,1.7434,1.7435l0,0c0,0.9629-0.7805,1.7434-1.7434,1.7434h-2.6692"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#D22F27",
      d: "M45.9411,10.9792H26.0589c-0.2652,0-0.5196,0.1054-0.7071,0.2929L11.2929,25.331 C11.1054,25.5185,11,25.7729,11,26.0381v19.8822c0,0.2652,0.1054,0.5196,0.2929,0.7071l14.0589,14.0589 c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h19.8822c0.2652,0,0.5196-0.1054,0.7071-0.2929l14.0589-14.0589 C60.8946,46.4399,61,46.1855,61,45.9203V26.0381c0-0.2652-0.1054-0.5196-0.2929-0.7071L46.6482,11.2721 C46.4607,11.0846,46.2063,10.9792,45.9411,10.9792z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.3878,14.7292H27.6122c-0.2652,0-0.5196,0.1054-0.7071,0.2929L15.0429,26.8843c-0.1875,0.1875-0.2929,0.4419-0.2929,0.7071 V44.367c0,0.2652,0.1054,0.5196,0.2929,0.7071l11.8622,11.8622c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h16.7756 c0.2652,0,0.5196-0.1054,0.7071-0.2929l11.8622-11.8622c0.1875-0.1875,0.2929-0.4419,0.2929-0.7071V27.5914 c0-0.2652-0.1054-0.5196-0.2929-0.7071L45.0949,15.0221C44.9074,14.8346,44.653,14.7292,44.3878,14.7292z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.323,39.5L39.323,39.5c-1.3807,0-2.5-1.1193-2.5-2.5v-2c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v2 C41.823,38.3807,40.7037,39.5,39.323,39.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.1449,33.8941c-0.205-0.7975-1.0911-1.3973-2.1532-1.3973l0,0c-1.2139,0-2.1979,0.7834-2.1979,1.75 c0,0.9664,0.984,1.75,2.1979,1.75l-0.0447,0.0064c1.2139,0,2.1979,0.7835,2.1979,1.75s-0.984,1.75-2.1979,1.75l0,0 c-1.0621,0-1.9482-0.5998-2.1532-1.3973"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.6462",
      x2: "33.6462",
      y1: "32.5",
      y2: "32.5",
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6462",
      x2: "31.6462",
      y1: "32.5",
      y2: "39.5",
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.7936,39.5v-7h2.6692c0.9629,0,1.7434,0.7806,1.7434,1.7435l0,0c0,0.9629-0.7805,1.7434-1.7434,1.7434h-2.6692"
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
      d: "M45.9411,10.9792H26.0589c-0.2652,0-0.5196,0.1054-0.7071,0.2929L11.2929,25.331C11.1054,25.5185,11,25.7729,11,26.0381v19.8822 c0,0.2652,0.1054,0.5196,0.2929,0.7071l14.0589,14.0589c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h19.8822 c0.2652,0,0.5196-0.1054,0.7071-0.2929l14.0589-14.0589C60.8946,46.4399,61,46.1855,61,45.9203V26.0381 c0-0.2652-0.1054-0.5196-0.2929-0.7071L46.6482,11.2721C46.4607,11.0846,46.2063,10.9792,45.9411,10.9792z"
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.3878,14.7292H27.6122c-0.2652,0-0.5196,0.1054-0.7071,0.2929L15.0429,26.8843c-0.1875,0.1875-0.2929,0.4419-0.2929,0.7071 V44.367c0,0.2652,0.1054,0.5196,0.2929,0.7071l11.8622,11.8622c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h16.7756 c0.2652,0,0.5196-0.1054,0.7071-0.2929l11.8622-11.8622c0.1875-0.1875,0.2929-0.4419,0.2929-0.7071V27.5914 c0-0.2652-0.1054-0.5196-0.2929-0.7071L45.0949,15.0221C44.9074,14.8346,44.653,14.7292,44.3878,14.7292z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.323,39.5L39.323,39.5c-1.3807,0-2.5-1.1193-2.5-2.5v-2c0-1.3807,1.1193-2.5,2.5-2.5l0,0c1.3807,0,2.5,1.1193,2.5,2.5v2 C41.823,38.3807,40.7037,39.5,39.323,39.5z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M26.1449,33.8941c-0.205-0.7975-1.0911-1.3973-2.1532-1.3973l0,0c-1.2139,0-2.1979,0.7834-2.1979,1.75 c0,0.9664,0.984,1.75,2.1979,1.75l-0.0447,0.0064c1.2139,0,2.1979,0.7835,2.1979,1.75s-0.984,1.75-2.1979,1.75l0,0 c-1.0621,0-1.9482-0.5998-2.1532-1.3973"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.6462",
      x2: "33.6462",
      y1: "32.5",
      y2: "32.5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "31.6462",
      x2: "31.6462",
      y1: "32.5",
      y2: "39.5",
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
      d: "M45.7936,39.5v-7h2.6692c0.9629,0,1.7434,0.7806,1.7434,1.7435l0,0c0,0.9629-0.7805,1.7434-1.7434,1.7434h-2.6692"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M45.9411,10.9792H26.0589c-0.2652,0-0.5196,0.1054-0.7071,0.2929L11.2929,25.331C11.1054,25.5185,11,25.7729,11,26.0381v19.8822 c0,0.2652,0.1054,0.5196,0.2929,0.7071l14.0589,14.0589c0.1875,0.1875,0.4419,0.2929,0.7071,0.2929h19.8822 c0.2652,0,0.5196-0.1054,0.7071-0.2929l14.0589-14.0589C60.8946,46.4399,61,46.1855,61,45.9203V26.0381 c0-0.2652-0.1054-0.5196-0.2929-0.7071L46.6482,11.2721C46.4607,11.0846,46.2063,10.9792,45.9411,10.9792z"
    })));
  }
};

export default StopSign;