import React from 'react';

const Pinterest = ({
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
      fill: "#EA5A47",
      stroke: "none",
      d: "M50.3622,13.3183c3.4226,2.5336,5.8052,6.1842,6.4431,10.8288l0.0003,0 c0.2581,1.8665,0.3108,3.7547,0.1699,5.6071c-0.3371,4.4306-1.7802,8.6775-4.169,11.963 c-2.4141,3.3203-5.7904,5.6631-9.9682,6.2409c-1.0335,0.1429-2.1125,0.1777-3.2341,0.0923h-0.0022 c-2.5138-0.2008-3.9128-1.1702-5.5509-2.3051c-0.3176-0.22-0.6448-0.4467-0.9866-0.6719 c-0.6494,3.3256-1.3884,6.5671-2.5164,9.4346c-1.241,3.1546-2.95,5.8552-5.5166,7.7212l-0.7587,0.5516l-0.1312-0.9315 c-1.1372-8.0786,0.6192-14.6383,2.326-21.013c0.5895-2.2015,1.173-4.3809,1.6194-6.5495 c-1.0091-1.8256-1.2746-4.2101-0.9292-6.4641c0.2447-1.5968,0.7961-3.1377,1.6068-4.3764 c0.8358-1.2771,1.9515-2.2403,3.3011-2.6348c1.0442-0.3052,2.2108-0.2664,3.4739,0.234v0.0022 c4.1883,1.6604,2.7265,6.2482,1.2654,10.8337c-0.4592,1.4411-0.9184,2.882-1.1866,4.2245 c-0.538,2.6922-0.2293,4.8898,2.8056,5.4962v0.0022c1.6982,0.3438,3.2127,0.0237,4.5186-0.765 c1.7973-1.0854,3.2199-3.058,4.202-5.425c0.9987-2.4071,1.5368-5.2075,1.5503-7.9016c0.0177-3.5538-0.8719-6.9049-2.8162-8.8781 c-2.1871-2.2182-4.8792-3.3275-7.6482-3.5433c-2.6726-0.2083-5.4181,0.411-7.8568,1.6664 c-2.4425,1.2574-4.5741,3.1491-6.0144,5.4833c-1.5541,2.5187-2.3037,5.558-1.7675,8.875c0.1614,1.001,0.6428,1.7949,1.1052,2.5574 c1.0229,1.6868,1.9657,3.2416,0.161,6.4396l-0.2052,0.3636l-0.4064-0.0898c-2.8394-0.6276-4.766-2.004-5.9985-3.9446 c-1.2124-1.909-1.7319-4.3489-1.7767-7.1453v-0.0133c0.0608-5.2808,1.9603-9.9531,5.1533-13.4568 c3.2088-3.521,7.72-5.8598,12.9806-6.4482c0.5152-0.0579,1.0339-0.1017,1.5551-0.1317c0.5089-0.0292,1.0269-0.0443,1.5528-0.0455 C41.8678,9.1898,46.7073,10.6128,50.3622,13.3183L50.3622,13.3183z"
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
      d: "M50.3622,13.3183c3.4226,2.5336,5.8052,6.1842,6.4431,10.8288l0.0003,0c0.2581,1.8665,0.3108,3.7547,0.1699,5.6071 c-0.3371,4.4306-1.7802,8.6775-4.169,11.963c-2.4141,3.3203-5.7904,5.6631-9.9682,6.2409 c-1.0335,0.1429-2.1125,0.1777-3.2341,0.0923h-0.0022c-2.5138-0.2008-3.9128-1.1702-5.5509-2.3051 c-0.3176-0.22-0.6448-0.4467-0.9866-0.6719c-0.6494,3.3256-1.3884,6.5671-2.5164,9.4346c-1.241,3.1546-2.95,5.8552-5.5166,7.7212 l-0.7587,0.5516l-0.1312-0.9315c-1.1372-8.0786,0.6192-14.6383,2.326-21.013c0.5895-2.2015,1.173-4.3809,1.6194-6.5495 c-1.0091-1.8256-1.2746-4.2101-0.9292-6.4641c0.2447-1.5968,0.7961-3.1377,1.6068-4.3764 c0.8358-1.2771,1.9515-2.2403,3.3011-2.6348c1.0442-0.3052,2.2108-0.2664,3.4739,0.234v0.0022 c4.1883,1.6604,2.7265,6.2482,1.2654,10.8337c-0.4592,1.4411-0.9184,2.882-1.1866,4.2245 c-0.538,2.6922-0.2293,4.8898,2.8056,5.4962v0.0022c1.6982,0.3438,3.2127,0.0237,4.5186-0.765 c1.7973-1.0854,3.2199-3.058,4.202-5.425c0.9987-2.4071,1.5368-5.2075,1.5503-7.9016c0.0177-3.5538-0.8719-6.9049-2.8162-8.8781 c-2.1871-2.2182-4.8792-3.3275-7.6482-3.5433c-2.6726-0.2083-5.4181,0.411-7.8568,1.6664 c-2.4425,1.2574-4.5741,3.1491-6.0144,5.4833c-1.5541,2.5187-2.3037,5.558-1.7675,8.875c0.1614,1.001,0.6428,1.7949,1.1052,2.5574 c1.0229,1.6868,1.9657,3.2416,0.161,6.4396l-0.2052,0.3636l-0.4064-0.0898c-2.8394-0.6276-4.766-2.004-5.9985-3.9446 c-1.2124-1.909-1.7319-4.3489-1.7767-7.1453v-0.0133c0.0608-5.2808,1.9603-9.9531,5.1533-13.4568 c3.2088-3.521,7.72-5.8598,12.9806-6.4482c0.5152-0.0579,1.0339-0.1017,1.5551-0.1317c0.5089-0.0292,1.0269-0.0443,1.5528-0.0455 C41.8678,9.1898,46.7073,10.6128,50.3622,13.3183L50.3622,13.3183z"
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
      d: "M50.3622,13.3183c3.4226,2.5336,5.8052,6.1842,6.4431,10.8288l0.0003,0c0.2581,1.8665,0.3108,3.7547,0.1699,5.6071 c-0.3371,4.4306-1.7802,8.6775-4.169,11.963c-2.4141,3.3203-5.7904,5.6631-9.9682,6.2409 c-1.0335,0.1429-2.1125,0.1777-3.2341,0.0923h-0.0022c-2.5138-0.2008-3.9128-1.1702-5.5509-2.3051 c-0.3176-0.22-0.6448-0.4467-0.9866-0.6719c-0.6494,3.3256-1.3884,6.5671-2.5164,9.4346c-1.241,3.1546-2.95,5.8552-5.5166,7.7212 l-0.7587,0.5516l-0.1312-0.9315c-1.1372-8.0786,0.6192-14.6383,2.326-21.013c0.5895-2.2015,1.173-4.3809,1.6194-6.5495 c-1.0091-1.8256-1.2746-4.2101-0.9292-6.4641c0.2447-1.5968,0.7961-3.1377,1.6068-4.3764 c0.8358-1.2771,1.9515-2.2403,3.3011-2.6348c1.0442-0.3052,2.2108-0.2664,3.4739,0.234v0.0022 c4.1883,1.6604,2.7265,6.2482,1.2654,10.8337c-0.4592,1.4411-0.9184,2.882-1.1866,4.2245 c-0.538,2.6922-0.2293,4.8898,2.8056,5.4962v0.0022c1.6982,0.3438,3.2127,0.0237,4.5186-0.765 c1.7973-1.0854,3.2199-3.058,4.202-5.425c0.9987-2.4071,1.5368-5.2075,1.5503-7.9016c0.0177-3.5538-0.8719-6.9049-2.8162-8.8781 c-2.1871-2.2182-4.8792-3.3275-7.6482-3.5433c-2.6726-0.2083-5.4181,0.411-7.8568,1.6664 c-2.4425,1.2574-4.5741,3.1491-6.0144,5.4833c-1.5541,2.5187-2.3037,5.558-1.7675,8.875c0.1614,1.001,0.6428,1.7949,1.1052,2.5574 c1.0229,1.6868,1.9657,3.2416,0.161,6.4396l-0.2052,0.3636l-0.4064-0.0898c-2.8394-0.6276-4.766-2.004-5.9985-3.9446 c-1.2124-1.909-1.7319-4.3489-1.7767-7.1453v-0.0133c0.0608-5.2808,1.9603-9.9531,5.1533-13.4568 c3.2088-3.521,7.72-5.8598,12.9806-6.4482c0.5152-0.0579,1.0339-0.1017,1.5551-0.1317c0.5089-0.0292,1.0269-0.0443,1.5528-0.0455 C41.8678,9.1898,46.7073,10.6128,50.3622,13.3183L50.3622,13.3183z"
    })));
  }
};

export default Pinterest;