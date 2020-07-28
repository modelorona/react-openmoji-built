import React from 'react';

const CurlyLoop = ({
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
      fill: "#3f3f3f",
      d: "M60.9905,21.7168a1.0416,1.0416,0,0,0-.6263-1.017,25.4744,25.4744,0,0,0-9.87-2.0747,27.2926,27.2926,0,0,0-14.39,3.8742H35.741a27.292,27.292,0,0,0-14.39-3.8742,25.422,25.422,0,0,0-9.6957,2.0015,1.0417,1.0417,0,0,0-.635.9585l-.0122,1.3739a.9713.9713,0,0,0,1.3313.9166,17.822,17.822,0,0,1,6.9084-1.3763,24.7961,24.7961,0,0,1,10.0328,1.7289,1.0083,1.0083,0,0,1,.1826,1.7318c-2.8342,2.1263-9.33,7.7453-9.33,14.5821,0,8.7447,7.4163,14.8328,15.3862,14.8328h.8056c7.97,0,15.3862-6.0881,15.3862-14.8328,0-6.8368-6.4956-12.4558-9.33-14.5821a1.0083,1.0083,0,0,1,.1826-1.7318A24.7959,24.7959,0,0,1,52.597,22.4993a17.8225,17.8225,0,0,1,6.9588,1.3974.9776.9776,0,0,0,1.3676-.8424ZM47.2544,40.3091A11.0682,11.0682,0,0,1,35.9832,51.2772c-6.12,0-11.5741-3.5752-11.5741-11.0287,0-6.48,8.6115-11.77,10.86-13.04a1.0031,1.0031,0,0,1,1.0439.033C38.5517,28.691,47.36,34.7541,47.2544,40.3091Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M60.9905,21.7168a1.0416,1.0416,0,0,0-.6263-1.017,25.4744,25.4744,0,0,0-9.87-2.0747,27.2926,27.2926,0,0,0-14.39,3.8742H35.741a27.292,27.292,0,0,0-14.39-3.8742,25.422,25.422,0,0,0-9.6957,2.0015,1.0417,1.0417,0,0,0-.635.9585l-.0122,1.3739a.9713.9713,0,0,0,1.3313.9166,17.822,17.822,0,0,1,6.9084-1.3763,24.7961,24.7961,0,0,1,10.0328,1.7289,1.0083,1.0083,0,0,1,.1826,1.7318c-2.8342,2.1263-9.33,7.7453-9.33,14.5821,0,8.7447,7.4163,14.8328,15.3862,14.8328h.8056c7.97,0,15.3862-6.0881,15.3862-14.8328,0-6.8368-6.4956-12.4558-9.33-14.5821a1.0083,1.0083,0,0,1,.1826-1.7318A24.7959,24.7959,0,0,1,52.597,22.4993a17.8225,17.8225,0,0,1,6.9588,1.3974.9776.9776,0,0,0,1.3676-.8424ZM47.2544,40.3091A11.0682,11.0682,0,0,1,35.9832,51.2772c-6.12,0-11.5741-3.5752-11.5741-11.0287,0-6.48,8.6115-11.77,10.86-13.04a1.0031,1.0031,0,0,1,1.0439.033C38.5517,28.691,47.36,34.7541,47.2544,40.3091Z"
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
      d: "M60.9905,21.7168a1.0416,1.0416,0,0,0-.6263-1.017,25.4744,25.4744,0,0,0-9.87-2.0747,27.2926,27.2926,0,0,0-14.39,3.8742H35.741a27.292,27.292,0,0,0-14.39-3.8742,25.422,25.422,0,0,0-9.6957,2.0015,1.0417,1.0417,0,0,0-.635.9585l-.0122,1.3739a.9713.9713,0,0,0,1.3313.9166,17.822,17.822,0,0,1,6.9084-1.3763,24.7961,24.7961,0,0,1,10.0328,1.7289,1.0083,1.0083,0,0,1,.1826,1.7318c-2.8342,2.1263-9.33,7.7453-9.33,14.5821,0,8.7447,7.4163,14.8328,15.3862,14.8328h.8056c7.97,0,15.3862-6.0881,15.3862-14.8328,0-6.8368-6.4956-12.4558-9.33-14.5821a1.0083,1.0083,0,0,1,.1826-1.7318A24.7959,24.7959,0,0,1,52.597,22.4993a17.8225,17.8225,0,0,1,6.9588,1.3974.9776.9776,0,0,0,1.3676-.8424ZM47.2544,40.3091A11.0682,11.0682,0,0,1,35.9832,51.2772c-6.12,0-11.5741-3.5752-11.5741-11.0287,0-6.48,8.6115-11.77,10.86-13.04a1.0031,1.0031,0,0,1,1.0439.033C38.5517,28.691,47.36,34.7541,47.2544,40.3091Z"
    })));
  }
};

export default CurlyLoop;