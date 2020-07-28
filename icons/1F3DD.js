import React from 'react';

const DesertIsland = ({
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
      fill: "#F1B31C",
      stroke: "#F1B31C",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M55,50c-1.5318-2.2976-6-6-11-6c-1,0-1.6479,0.1075-2.4739,0.2521L30.6883,45c-1.4621,0-2.8392,0-3.6883,0 c-4.1231,0-7.5181,3.0361-9,6c0,0-0.953,1.6965-0.7547,2.2304C17.3462,53.5021,18,53.4167,18,53.4167h37.8333 c0,0,1.75,0.5,0.9167-1C55.9167,50.9167,55,50,55,50z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#92D3F5",
      stroke: "#92D3F5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M66,55c-2-3-5.2153-4.2184-7-4c-3.4536,0.4226-5.6051,3.6469-8.5,3c-3.0688-0.6857-3.5667-3.3277-6-3 c-3.0049,0.4046-4.3383,4.0176-8,4c-0.3861-0.0019-1.3036-0.0068-2.3333-0.4544C31.5565,53.411,31.1107,50.5751,27.5,51 c-4.0531,0.477-5.909,4.5912-9,4c-2.6975-0.5159-3.112-3.5376-6-4c-2.6618-0.4262-5.2581,1.9705-7,4H66z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M44,11c-0.6902-0.3647-2.1404-1.036-4-1c-0.7209,0.0139-4.1718,0.1831-6,3c-1.0579,1.63-1.0448,3.3162-1,4 c0,0,2.7047-3.8756,5.8958-4.4583c2.1818-0.3984,3.4561-0.4574,4.3171-0.6458C44.1086,11.6999,44.2636,11.1393,44,11z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "#5C9E31",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M32.1196,20.097c-1.2964-0.8621-3.4264-2.0067-6.256-2.4212c-1.2909-0.1891-5.6496-0.6543-9.8613,1.9381 c-1.2756,0.7852-2.1981,1.6419-2.7981,2.2738C13.2042,21.8877,20.1891,23.9167,32.1196,20.097"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M57,17c-1.0036-0.7717-1.7235-1.2799-3.0353-1.9725C52.841,14.4342,50.3939,13.13,47,13c-1.5682-0.0601-4.8729-0.1943-8,2 c-2.4655,1.73-3.574,3.9823-4,5c0,0,4.7083-1.4583,6.125-1.6667c1.4167-0.2083,4.0791-0.605,5.6247-0.605 c1.5709,0,3.7086-0.02,5.542,0.1884c1.8333,0.2083,3.4132,0.4239,4.2377,0.7421c0.6706,0.2588,0.9765,0.3843,1.0628-0.4235 C57.617,18.0029,57.5523,17.4247,57,17z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M50,30c-0.2987-1.0506-1.0579-3.1512-3-5c-0.6188-0.5891-3.124-2.8339-7-3c-2.2968-0.0984-4.0812,0.5756-5,1 c0,0,0.8466,1.0302,2.4858,1.9526c1.6392,0.9224,5.0975,3.1633,7.2225,3.9387S48.5,29.7917,50,30"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "1.8",
      d: "M31,23c-0.6941-0.2235-1.7119-0.7514-3-1c-3.5551-0.6861-8.9903-0.0524-12,4c-1.9682,2.6501-2.0579,5.6294-2,7 c0,0,2.5474-1.9157,6.8333-4.5553c4.0392-2.4876,5.7563-2.6764,9.7817-3.314C32.062,24.9016,31.6554,23.2111,31,23z"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36.2569,31.4845 33.6811,32.1747 31.7431,27.5176 35.6068,26.4824"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.4858,36.0687 34.2031,36.6476 32.5142,31.8682 37.4382,31"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "38.4282,41.0681 34.4434,41.4168 33.0114,36.5229 38.9886,36"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#A57939",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9945,46.157 33.9945,46.157 32.9945,41.157 38.9945,41.157"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36.2569,31.4845 33.6811,32.1747 31.7431,27.5176 35.6068,26.4824"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.4858,36.0687 34.2031,36.6476 32.5142,31.8682 37.4382,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5.5,55c1.7419-2.0295,4.3382-4.4262,7-4c2.888,0.4624,3.3025,3.4841,6,4c3.091,0.5912,4.9469-3.523,9-4 c3.6107-0.4249,4.0565,2.411,6.6667,3.5456C35.1964,54.9932,36.1139,54.9981,36.5,55c3.6617,0.0176,4.9951-3.5954,8-4 c2.4333-0.3277,2.9312,2.3143,6,3c2.8949,0.6469,5.0464-2.5774,8.5-3c1.7847-0.2184,5,1,7,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5261,44.2521C42.3521,44.1075,43,44,44,44c5,0,9.4682,3.7024,11,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,51c1.4819-2.9639,4.8769-6,9-6c0.8491,0,2.2262,0,3.6883,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,33c-0.0579-1.3706,0.0318-4.3499,2-7c3.0097-4.0524,8.4449-4.686,12-4c1.2881,0.2486,2.3112,0.6668,3,1"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "38.4282,41.0681 34.4434,41.4168 33.0114,36.5229 38.9886,36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35,20c0.426-1.0177,1.5345-3.27,4-5c3.1271-2.1943,6.4318-2.0601,8-2c3.3939,0.13,5.8763,1.4067,7,2 c1.3118,0.6926,2.3149,1.4347,3,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.1196,20.097c-1.2964-0.8621-3.4264-2.0067-6.256-2.4212c-1.2909-0.1891-5.6496-0.6543-9.8613,1.9381 c-1.2756,0.7852-2.1981,1.6419-2.7981,2.2738"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,11c-0.7129-0.3879-2.1404-1.036-4-1c-0.7209,0.0139-4.1718,0.1831-6,3c-1.0579,1.63-1.0448,3.3162-1,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35,23c0.9188-0.4244,2.7032-1.0984,5-1c3.876,0.1661,6.3812,2.4109,7,3c1.9421,1.8488,2.7013,3.9494,3,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.955,28.0291c-0.123-0.5023-0.3779-1.2592-0.9401-2.0289c-0.3279-0.4488-0.6751-0.7854-0.9699-1.0293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1464,28.8913c-0.1875-0.4818-0.539-1.1991-1.1969-1.8887c-0.3836-0.4022-0.7718-0.6906-1.0959-0.8939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2254,30.8223c-0.2152-0.4702-0.6079-1.1657-1.3048-1.816c-0.4064-0.3791-0.8107-0.6444-1.146-0.8286"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.1829,33.8604c-0.2002-0.4767-0.5706-1.1844-1.2466-1.8563c-0.3942-0.3919-0.7899-0.6698-1.1192-0.8645"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.8452,19.4397c0.0009-0.5171,0.0699-1.3128,0.4345-2.1935c0.2126-0.5135,0.4705-0.9226,0.6993-1.2292"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.7497,19.3783c0.0684-0.5125,0.2406-1.2925,0.717-2.118c0.2779-0.4814,0.587-0.8533,0.8539-1.1274"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.044,20.5649c0.0981-0.5077,0.3154-1.2763,0.8391-2.0726c0.3054-0.4644,0.6356-0.8177,0.918-1.0758"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7461,23.0349c0.082-0.5105,0.2749-1.2856,0.773-2.0982c0.2906-0.4738,0.6094-0.8374,0.8835-1.1043"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9945,46.157 33.9945,46.157 32.9945,41.157 38.9945,41.157"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.0087,27.0625c0.3036-0.4185,0.8256-1.0231,1.637-1.5233c0.4731-0.2917,0.9217-0.4722,1.2868-0.5866"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.2092,29.2998c0.3557-0.3753,0.9521-0.9066,1.8218-1.2966c0.5071-0.2274,0.9755-0.3478,1.3524-0.4136"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1841,32.1912c0.3769-0.354,1.0033-0.8496,1.8942-1.1884c0.5195-0.1975,0.9941-0.2904,1.3741-0.3341"
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
    }, /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "36.2569,31.4845 33.6811,32.1747 31.7431,27.5176 35.6068,26.4824"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.4858,36.0687 34.2031,36.6476 32.5142,31.8682 37.4382,31"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M5.5,55c1.7419-2.0295,4.3382-4.4262,7-4c2.888,0.4624,3.3025,3.4841,6,4c3.091,0.5912,4.9469-3.523,9-4 c3.6107-0.4249,4.0565,2.411,6.6667,3.5456C35.1964,54.9932,36.1139,54.9981,36.5,55c3.6617,0.0176,4.9951-3.5954,8-4 c2.4333-0.3277,2.9312,2.3143,6,3c2.8949,0.6469,5.0464-2.5774,8.5-3c1.7847-0.2184,5,1,7,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.5261,44.2521C42.3521,44.1075,43,44,44,44c5,0,9.4682,3.7024,11,6"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18,51c1.4819-2.9639,4.8769-6,9-6c0.8491,0,2.2262,0,3.6883,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M14,33c-0.0579-1.3706,0.0318-4.3499,2-7c3.0097-4.0524,8.4449-4.686,12-4c1.2881,0.2486,2.3112,0.6668,3,1"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "38.4282,41.0681 34.4434,41.4168 33.0114,36.5229 38.9886,36"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35,20c0.426-1.0177,1.5345-3.27,4-5c3.1271-2.1943,6.4318-2.0601,8-2c3.3939,0.13,5.8763,1.4067,7,2 c1.3118,0.6926,2.3149,1.4347,3,2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.1196,20.097c-1.2964-0.8621-3.4264-2.0067-6.256-2.4212c-1.2909-0.1891-5.6496-0.6543-9.8613,1.9381 c-1.2756,0.7852-2.1981,1.6419-2.7981,2.2738"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44,11c-0.7129-0.3879-2.1404-1.036-4-1c-0.7209,0.0139-4.1718,0.1831-6,3c-1.0579,1.63-1.0448,3.3162-1,4"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35,23c0.9188-0.4244,2.7032-1.0984,5-1c3.876,0.1661,6.3812,2.4109,7,3c1.9421,1.8488,2.7013,3.9494,3,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.955,28.0291c-0.123-0.5023-0.3779-1.2592-0.9401-2.0289c-0.3279-0.4488-0.6751-0.7854-0.9699-1.0293"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.1464,28.8913c-0.1875-0.4818-0.539-1.1991-1.1969-1.8887c-0.3836-0.4022-0.7718-0.6906-1.0959-0.8939"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.2254,30.8223c-0.2152-0.4702-0.6079-1.1657-1.3048-1.816c-0.4064-0.3791-0.8107-0.6444-1.146-0.8286"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M20.1829,33.8604c-0.2002-0.4767-0.5706-1.1844-1.2466-1.8563c-0.3942-0.3919-0.7899-0.6698-1.1192-0.8645"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.8452,19.4397c0.0009-0.5171,0.0699-1.3128,0.4345-2.1935c0.2126-0.5135,0.4705-0.9226,0.6993-1.2292"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46.7497,19.3783c0.0684-0.5125,0.2406-1.2925,0.717-2.118c0.2779-0.4814,0.587-0.8533,0.8539-1.1274"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50.044,20.5649c0.0981-0.5077,0.3154-1.2763,0.8391-2.0726c0.3054-0.4644,0.6356-0.8177,0.918-1.0758"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.7461,23.0349c0.082-0.5105,0.2749-1.2856,0.773-2.0982c0.2906-0.4738,0.6094-0.8374,0.8835-1.1043"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "37.9945,46.157 33.9945,46.157 32.9945,41.157 38.9945,41.157"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M39.0087,27.0625c0.3036-0.4185,0.8256-1.0231,1.637-1.5233c0.4731-0.2917,0.9217-0.4722,1.2868-0.5866"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M42.2092,29.2998c0.3557-0.3753,0.9521-0.9066,1.8218-1.2966c0.5071-0.2274,0.9755-0.3478,1.3524-0.4136"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1841,32.1912c0.3769-0.354,1.0033-0.8496,1.8942-1.1884c0.5195-0.1975,0.9941-0.2904,1.3741-0.3341"
    })));
  }
};

export default DesertIsland;