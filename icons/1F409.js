import React from 'react';

const Dragon = ({
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
      fill: "#B1CC33",
      stroke: "#B1CC33",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,24c-1.0833-0.5833-4-1-5.9167-0.9167C38.1667,23.1667,37,21,37,21c-0.9,1.35-0.315,2.7675,0.6007,3.9184 c1.1508,1.4463,2.8225,2.3985,4.6286,2.7916C47.7267,28.9066,48,30,48,30l-0.1945,2.8581 c3.8914,1.5502,4.6086,4.4578,4.8891,5.4505l-4.3577,0.0076c3.4697,2.4416,4.3264,7.3677,4.3264,7.3677L50,46 c-0.1667,3-3.5,7.9167-8,11s-2.25,7.75-2.25,7.75S34,58,42,51s0.5833-15,0.5833-15c1.5833,12-4.4167,14.5833-4.4167,14.5833 C30.3333,52.1667,29.75,47.25,29.75,47.25l3.75,1.4167c8.5,0.6667,0.1667-11.0833,0.1667-11.0833 C24.3333,32.1667,20,40,19.5833,38.5833c-0.4167-1.4167,1.5833-4.75,1.5833-4.75c-1.8333-1.1667-10.8333,3.0833-10.8333,3.0833 C9.6667,35.8333,17.5833,31,17.5833,31C16.1667,29,10,29,10,29s4-6,14.1667-2.8333L37,34c0,0-6.7368-6.8764-8-12 c-1.2801-5.1922,2.6184-8.4931,2-8l-3.3306-4.3319c1.9432-0.5218,3.5669,0.7807,4.1322,1.2131l-1.578-5.122 c2.5024,0.1211,3.7895,2.1179,4.2473,2.7901L36,5l3.9167,3.5c0,0,2.0833-1.5,3,0.25C43.8333,10.5,46,14,49.0833,14.5833 c3.0833,0.5833,1.5,3.9167,1.5,3.9167S46,17,44,17s-2.75,1.5833-2.75,1.5833S41,18,45,20S46,24,46,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#EA5A47",
      stroke: "none",
      d: "M50,21c0,0,4,2,3,4c0,0,3.3333,0,4.1667,2.5C58,30,63,28,63,28l-4.3333-2.1667c0,0,0-2.8333-1.3333-2.8333 C56,23,53,20,50,21z"
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
      d: "M52.6632,45.6838c0,0-0.8567-4.9261-4.3264-7.3677"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.6945,38.3086c-0.2805-0.9927-0.9977-3.9003-4.8891-5.4505"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,30c0,0-0.2733-1.0934-5.7707-2.29c-1.806-0.3931-3.4777-1.3453-4.6286-2.7916C36.685,23.7675,36.1,22.35,37,21 c0,0,1.1667,2.1667,3.0833,2.0833C42,23,44.9167,23.4167,46,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,24c0,0,3-2-1-4s-3.75-1.4167-3.75-1.4167S42,17,44,17s6.5833,1.5,6.5833,1.5s1.5833-3.3333-1.5-3.9167 C46,14,43.8333,10.5,42.9167,8.75c-0.9167-1.75-3-0.25-3-0.25L36,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.1667,26.1667C14,23,10,29,10,29s6.1667,0,7.5833,2c0,0-7.9167,4.8333-7.25,5.9167c0,0,9-4.25,10.8333-3.0833 c0,0-2,3.3333-1.5833,4.75c0.4167,1.4167,4.75-6.4167,14.0833-1c0,0,8.3333,11.75-0.1667,11.0833L29.75,47.25 c0,0,0.5833,4.9167,8.4167,3.3333c0,0,6-2.5833,4.4167-14.5833c0,0,7.4167,8-0.5833,15s-2.25,13.75-2.25,13.75S37.5,60.0833,42,57 s7.8333-8,8-11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,14c0.6184-0.4931-3.2801,2.8078-2,8c1.2632,5.1236,8,12,8,12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.4709,8.5493c-0.4579-0.6722-1.7449-2.669-4.2473-2.7901"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.8016,10.8812c-0.5653-0.4324-2.189-1.7348-4.1322-1.2131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,21c0,0,4,2,3,4c0,0,3.3333,0,4.1667,2.5C58,30,63,28,63,28l-4.3333-2.1667c0,0,0-2.8333-1.3333-2.8333C56,23,53,20,50,21z"
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
      d: "M52.6632,45.6838c0,0-0.8567-4.9261-4.3264-7.3677"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M52.6945,38.3086c-0.2805-0.9927-0.9977-3.9003-4.8891-5.4505"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48,30c0,0-0.2733-1.0934-5.7707-2.29c-1.806-0.3931-3.4777-1.3453-4.6286-2.7916C36.685,23.7675,36.1,22.35,37,21 c0,0,1.1667,2.1667,3.0833,2.0833C42,23,44.9167,23.4167,46,24"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M46,24c0,0,3-2-1-4s-3.75-1.4167-3.75-1.4167S42,17,44,17s6.5833,1.5,6.5833,1.5s1.5833-3.3333-1.5-3.9167 C46,14,43.8333,10.5,42.9167,8.75c-0.9167-1.75-3-0.25-3-0.25L36,5"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M24.1667,26.1667C14,23,10,29,10,29s6.1667,0,7.5833,2c0,0-7.9167,4.8333-7.25,5.9167c0,0,9-4.25,10.8333-3.0833 c0,0-2,3.3333-1.5833,4.75c0.4167,1.4167,4.75-6.4167,14.0833-1c0,0,8.3333,11.75-0.1667,11.0833L29.75,47.25 c0,0,0.5833,4.9167,8.4167,3.3333c0,0,6-2.5833,4.4167-14.5833c0,0,7.4167,8-0.5833,15s-2.25,13.75-2.25,13.75S37.5,60.0833,42,57 s7.8333-8,8-11"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31,14c0.6184-0.4931-3.2801,2.8078-2,8c1.2632,5.1236,8,12,8,12"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.4709,8.5493c-0.4579-0.6722-1.7449-2.669-4.2473-2.7901"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M31.8016,10.8812c-0.5653-0.4324-2.189-1.7348-4.1322-1.2131"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M50,21c0,0,4,2,3,4c0,0,3.3333,0,4.1667,2.5C58,30,63,28,63,28l-4.3333-2.1667c0,0,0-2.8333-1.3333-2.8333C56,23,53,20,50,21z"
    })));
  }
};

export default Dragon;