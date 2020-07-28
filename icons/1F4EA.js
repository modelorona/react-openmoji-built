import React from 'react';

const ClosedMailboxWithLoweredFlag = ({
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
      fill: "#FFFFFF",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M32.4985,57.778V35.8865h6.7358V57.778 c0,1.8523-1.5156,3.3679-3.3679,3.3679c-0.9262,0-1.7682-0.3789-2.3786-0.9893C32.8774,59.5461,32.4985,58.7042,32.4985,57.778z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M39.23,44.875V57.78c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "#61B2E4",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M56.541,25.8265 v9.8247c0,1.967-1.3046,3.5976-2.976,3.8218c-0.1324,0.0204-0.2649,0.0305-0.4076,0.0305L24.5292,39.473 c1.1007,0,1.9874-1.009,1.9874-2.2422V25.8265c0-5.7684-4.0766-11.8222-3.4142-11.8222H46.166c0.6624,0,1.3045,0.0713,1.9262,0.214 h0.0102C52.9026,15.2476,56.541,20.0581,56.541,25.8265z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M40.0996,29.0166v0.9051c0,0.6223,0.4264,1.1314,0.9476,1.1314h9.6653v2.0365 c0,0.6222,0.4264,1.1314,0.9476,1.1314h7.2016c0.5212,0,0.9476-0.5091,0.9476-1.1314v-4.073c0-0.6222-0.4264-1.1314-0.9476-1.1314 H41.0472C40.526,27.8853,40.0996,28.3944,40.0996,29.0166z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M33.2176,25.8222v11.4044c0,1.2332-0.8867,2.2422-1.9874,2.2422H14.4855 c-1.1007,0-1.9772-1.009-1.9772-2.2422V24.9152c0.2344-3.6486,1.9262-6.8386,4.4333-8.8158C18.6029,14.7848,20.6514,14,22.8426,14 c0.6624,0,1.3045,0.0713,1.9262,0.214h0.0102C29.5792,15.2433,33.2176,20.0538,33.2176,25.8222z"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.23,44.875V57.78 c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.09,14.0098l0.01-0.01h23.07c0.66,0,1.3,0.08,1.92,0.22h0.01c3.97,0.85,7.14,4.28,8.12,8.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.53,39.4698l28.63,0.03c0.14,0,0.27-0.01,0.4-0.03c0.84-0.11,1.58-0.57,2.12-1.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0996,29.0166v0.9051 c0,0.6223,0.4264,1.1314,0.9476,1.1314h9.6653v2.0365c0,0.6222,0.4264,1.1314,0.9476,1.1314h7.2016 c0.5212,0,0.9476-0.5091,0.9476-1.1314v-4.073c0-0.6222-0.4264-1.1314-0.9476-1.1314H41.0472 C40.526,27.8853,40.0996,28.3944,40.0996,29.0166z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.2176,25.8222v11.4044 c0,1.2332-0.8867,2.2422-1.9874,2.2422H14.4855c-1.1007,0-1.9772-1.009-1.9772-2.2422V24.9152 c0.2344-3.6486,1.9262-6.8386,4.4333-8.8158C18.6029,14.7848,20.6514,14,22.8426,14c0.6624,0,1.3045,0.0713,1.9262,0.214h0.0102 C29.5792,15.2433,33.2176,20.0538,33.2176,25.8222z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6616,17.5263v3.0167 c0,0.5605,0.4586,1.0192,1.0192,1.0192h2.0383c0.5605,0,1.0192-0.4586,1.0192-1.0192v-3.0575v-0.0204"
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
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.23,44.875V57.78 c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.09,14.0098l0.01-0.01h23.07c0.66,0,1.3,0.08,1.92,0.22h0.01c3.97,0.85,7.14,4.28,8.12,8.7"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.53,39.4698l28.63,0.03c0.14,0,0.27-0.01,0.4-0.03c0.84-0.11,1.58-0.57,2.12-1.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.0996,29.0166v0.9051 c0,0.6223,0.4264,1.1314,0.9476,1.1314h9.6653v2.0365c0,0.6222,0.4264,1.1314,0.9476,1.1314h7.2016 c0.5212,0,0.9476-0.5091,0.9476-1.1314v-4.073c0-0.6222-0.4264-1.1314-0.9476-1.1314H41.0472 C40.526,27.8853,40.0996,28.3944,40.0996,29.0166z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M33.2176,25.8222v11.4044 c0,1.2332-0.8867,2.2422-1.9874,2.2422H14.4855c-1.1007,0-1.9772-1.009-1.9772-2.2422V24.9152 c0.2344-3.6486,1.9262-6.8386,4.4333-8.8158C18.6029,14.7848,20.6514,14,22.8426,14c0.6624,0,1.3045,0.0713,1.9262,0.214h0.0102 C29.5792,15.2433,33.2176,20.0538,33.2176,25.8222z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.6616,17.5263v3.0167 c0,0.5605,0.4586,1.0192,1.0192,1.0192h2.0383c0.5605,0,1.0192-0.4586,1.0192-1.0192v-3.0575v-0.0204"
    })));
  }
};

export default ClosedMailboxWithLoweredFlag;