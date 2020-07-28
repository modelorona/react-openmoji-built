import React from 'react';

const BirthdayCake = ({
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
      fill: "#fcea2b",
      stroke: "none",
      d: "M11,37c0,1.1045,50,2.1045,50,1v-7h-1V20c0-2.7612-2.2393-5-5-5H17c-2.7607,0-5,2.2388-5,5v11h-1V37z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M12,21.9238c1.9443-1.3081,4.6025-1.1064,6.3213,0.6123c1.9531,1.9522,5.1191,1.9522,7.0723,0 c1.9521-1.9521,5.1181-1.9521,7.0703,0c1.9531,1.9522,5.1191,1.9522,7.0722,0c1.9522-1.9521,5.1182-1.9521,7.0703,0 c1.9532,1.9522,5.1192,1.9522,7.0723,0c1.7188-1.7187,4.377-1.9204,6.3213-0.6123V20c0-2.7612-2.2393-5-5-5H17 c-2.7607,0-5,2.2388-5,5V21.9238z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      stroke: "none",
      d: "M5,60c0,1.1045,0.8955,2,2,2h58c1.1045,0,2-0.8955,2-2V41c0-2.7617-2.2393-5-5-5H10 c-2.7607,0-5,2.2383-5,5V60z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "12",
      r: "3",
      fill: "#ea5a47",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.251,45.5361c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0723,0 c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0722,0c1.9522,1.9522,5.1182,1.9522,7.0703,0 c1.9532-1.9521,5.1192-1.9521,7.0723,0c1.9522,1.9522,5.1182,1.9522,7.0703,0c1.6992-1.6982,4.3135-1.915,6.251-0.6591V41 c0-2.7617-2.2393-5-5-5H10c-2.7607,0-5,2.2383-5,5v3.877C6.9375,43.6211,9.5518,43.8379,11.251,45.5361z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "12",
      r: "3",
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
      d: "M36,10.75c0-2.7617,2.2383-5,5-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.251,45.5361c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0723,0 c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0722,0c1.9522,1.9522,5.1182,1.9522,7.0703,0 c1.9532-1.9521,5.1192-1.9521,7.0723,0c1.9522,1.9522,5.1182,1.9522,7.0703,0c1.6992-1.6982,4.3135-1.915,6.251-0.6591V41 c0-2.7617-2.2393-5-5-5H10c-2.7607,0-5,2.2383-5,5v3.877C6.9375,43.6211,9.5518,43.8379,11.251,45.5361z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,44.877V60c0,1.1045,0.8955,2,2,2h58c1.1045,0,2-0.8955,2-2V44.877"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.251,45.5361c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0723,0 c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0722,0c1.9522,1.9522,5.1182,1.9522,7.0703,0 c1.9532-1.9521,5.1192-1.9521,7.0723,0c1.9522,1.9522,5.1182,1.9522,7.0703,0c1.6992-1.6982,4.3135-1.915,6.251-0.6591V41 c0-2.7617-2.2393-5-5-5H10c-2.7607,0-5,2.2383-5,5v3.877C6.9375,43.6211,9.5518,43.8379,11.251,45.5361z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60",
      x2: "60",
      y1: "21.9238",
      y2: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "21.9238",
      y2: "32",
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
      d: "M12,21.9238c1.9443-1.3081,4.6025-1.1064,6.3213,0.6123c1.9531,1.9522,5.1191,1.9522,7.0723,0 c1.9521-1.9521,5.1181-1.9521,7.0703,0c1.9531,1.9522,5.1191,1.9522,7.0722,0c1.9522-1.9521,5.1182-1.9521,7.0703,0 c1.9532,1.9522,5.1192,1.9522,7.0723,0c1.7188-1.7187,4.377-1.9204,6.3213-0.6123V20c0-2.7612-2.2393-5-5-5H17 c-2.7607,0-5,2.2388-5,5V21.9238z"
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "12",
      r: "3",
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
      d: "M36,10.75c0-2.7617,2.2383-5,5-5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.251,45.5361c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0723,0 c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0722,0c1.9522,1.9522,5.1182,1.9522,7.0703,0 c1.9532-1.9521,5.1192-1.9521,7.0723,0c1.9522,1.9522,5.1182,1.9522,7.0703,0c1.6992-1.6982,4.3135-1.915,6.251-0.6591V41 c0-2.7617-2.2393-5-5-5H10c-2.7607,0-5,2.2383-5,5v3.877C6.9375,43.6211,9.5518,43.8379,11.251,45.5361z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5,44.877V60c0,1.1045,0.8955,2,2,2h58c1.1045,0,2-0.8955,2-2V44.877"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M11.251,45.5361c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0723,0 c1.9521,1.9522,5.1181,1.9522,7.0703,0c1.9531-1.9521,5.1191-1.9521,7.0722,0c1.9522,1.9522,5.1182,1.9522,7.0703,0 c1.9532-1.9521,5.1192-1.9521,7.0723,0c1.9522,1.9522,5.1182,1.9522,7.0703,0c1.6992-1.6982,4.3135-1.915,6.251-0.6591V41 c0-2.7617-2.2393-5-5-5H10c-2.7607,0-5,2.2383-5,5v3.877C6.9375,43.6211,9.5518,43.8379,11.251,45.5361z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "60",
      x2: "60",
      y1: "21.9238",
      y2: "32",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "21.9238",
      y2: "32",
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
      d: "M12,21.9238c1.9443-1.3081,4.6025-1.1064,6.3213,0.6123c1.9531,1.9522,5.1191,1.9522,7.0723,0 c1.9521-1.9521,5.1181-1.9521,7.0703,0c1.9531,1.9522,5.1191,1.9522,7.0722,0c1.9522-1.9521,5.1182-1.9521,7.0703,0 c1.9532,1.9522,5.1192,1.9522,7.0723,0c1.7188-1.7187,4.377-1.9204,6.3213-0.6123V20c0-2.7612-2.2393-5-5-5H17 c-2.7607,0-5,2.2388-5,5V21.9238z"
    })));
  }
};

export default BirthdayCake;