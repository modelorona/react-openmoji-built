import React from 'react';

const ClosedMailboxWithRaisedFlag = ({
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
      d: "M27.815,13.7636c-0.6841,0-1.3577,0.0737-2.0103,0.221h-0.0105c-0.642-0.1474-1.3051-0.221-1.9891-0.221 H27.815z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M32.4985,57.778V35.8865h6.7358V57.778 c0,1.8523-1.5156,3.3679-3.3679,3.3679c-0.9262,0-1.7682-0.3789-2.3786-0.9893C32.8774,59.5461,32.4985,58.7042,32.4985,57.778z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61B2E4",
      stroke: "#61B2E4",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M58.6049,25.9766 v10.1458c0,2.0313-1.3472,3.7152-3.0733,3.9468c-0.1368,0.0211-0.2736,0.0315-0.4209,0.0315l-29.5639-0.0315 c1.1367,0,2.0523-1.0419,2.0523-2.3154V25.9766c0-5.957-4.2099-12.2086-3.5257-12.2086h23.8174 c0.6841,0,1.3471,0.0737,1.9891,0.221h0.0105C54.8476,15.052,58.6049,20.0197,58.6049,25.9766z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      d: "M34.5192,25.9722v11.7771c0,1.2735-0.9156,2.3154-2.0523,2.3154H15.1748 c-1.1367,0-2.0418-1.0419-2.0418-2.3154V25.0356c0.242-3.7679,1.9892-7.0621,4.5782-9.1039 c1.7155-1.3577,3.831-2.1681,6.0938-2.1681c0.6841,0,1.3471,0.0737,1.9891,0.221h0.0105 C30.7619,15.0476,34.5192,20.0153,34.5192,25.9722z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      d: "M41.0868,31.3539h0.9347c0.6427,0,1.1684-0.4404,1.1684-0.9786v-9.9812h2.1031 c0.6426,0,1.1684-0.4404,1.1684-0.9786v-7.437c0-0.5383-0.5258-0.9786-1.1684-0.9786h-4.2061 c-0.6426,0-1.1684,0.4403-1.1684,0.9786v18.3968C39.9184,30.9135,40.4442,31.3539,41.0868,31.3539z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      d: "M39.23,44.875V57.78c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.815,13.7636 c-0.6841,0-1.3577,0.0737-2.0103,0.221h-0.0105c-0.642-0.1474-1.3051-0.221-1.9891-0.221H27.815z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.87,13.7698H24.31c-0.08,0-0.16,0-0.24,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.35,14.4298c4.22,1.63,7.25,6.19,7.25,11.55v10.14c0,2.03-1.34,3.72-3.07,3.95c-0.14,0.02-0.27,0.03-0.42,0.03l-29.56-0.03 c0.07,0,0.14,0,0.21-0.01"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.5192,25.9722v11.7771 c0,1.2735-0.9156,2.3154-2.0523,2.3154H15.1748c-1.1367,0-2.0418-1.0419-2.0418-2.3154V25.0356 c0.242-3.7679,1.9892-7.0621,4.5782-9.1039c1.7155-1.3577,3.831-2.1681,6.0938-2.1681c0.6841,0,1.3471,0.0737,1.9891,0.221h0.0105 C30.7619,15.0476,34.5192,20.0153,34.5192,25.9722z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5528,17.4051v3.1153 c0,0.5789,0.4736,1.0525,1.0525,1.0525h2.1049c0.5789,0,1.0525-0.4736,1.0525-1.0525V17.363v-0.021"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0868,31.3539h0.9347 c0.6427,0,1.1684-0.4404,1.1684-0.9786v-9.9812h2.1031c0.6426,0,1.1684-0.4404,1.1684-0.9786v-7.437 c0-0.5383-0.5258-0.9786-1.1684-0.9786h-4.2061c-0.6426,0-1.1684,0.4403-1.1684,0.9786v18.3968 C39.9184,30.9135,40.4442,31.3539,41.0868,31.3539z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.23,44.875V57.78 c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
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
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.815,13.7636 c-0.6841,0-1.3577,0.0737-2.0103,0.221h-0.0105c-0.642-0.1474-1.3051-0.221-1.9891-0.221H27.815z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.87,13.7698H24.31c-0.08,0-0.16,0-0.24,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M51.35,14.4298c4.22,1.63,7.25,6.19,7.25,11.55v10.14c0,2.03-1.34,3.72-3.07,3.95c-0.14,0.02-0.27,0.03-0.42,0.03l-29.56-0.03 c0.07,0,0.14,0,0.21-0.01"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.5192,25.9722v11.7771 c0,1.2735-0.9156,2.3154-2.0523,2.3154H15.1748c-1.1367,0-2.0418-1.0419-2.0418-2.3154V25.0356 c0.242-3.7679,1.9892-7.0621,4.5782-9.1039c1.7155-1.3577,3.831-2.1681,6.0938-2.1681c0.6841,0,1.3471,0.0737,1.9891,0.221h0.0105 C30.7619,15.0476,34.5192,20.0153,34.5192,25.9722z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.5528,17.4051v3.1153 c0,0.5789,0.4736,1.0525,1.0525,1.0525h2.1049c0.5789,0,1.0525-0.4736,1.0525-1.0525V17.363v-0.021"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.0868,31.3539h0.9347 c0.6427,0,1.1684-0.4404,1.1684-0.9786v-9.9812h2.1031c0.6426,0,1.1684-0.4404,1.1684-0.9786v-7.437 c0-0.5383-0.5258-0.9786-1.1684-0.9786h-4.2061c-0.6426,0-1.1684,0.4403-1.1684,0.9786v18.3968 C39.9184,30.9135,40.4442,31.3539,41.0868,31.3539z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.23,44.875V57.78 c0,1.85-1.51,3.37-3.36,3.37c-0.93,0-1.77-0.38-2.38-0.99s-0.99-1.46-0.99-2.38V44.8438"
    })));
  }
};

export default ClosedMailboxWithRaisedFlag;