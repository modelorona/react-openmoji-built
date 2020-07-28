import React from 'react';

const Ghost = ({
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
      fill: "#FFFFFF",
      stroke: "none",
      d: "M13.9953,51.377c-0.9623-2.069,3.4028-6.2239,6.017-12.0822c1.1268-2.5251,1.2295-4.7069,0.738-6.384 c-1.2826-2.5697-2.3564-3.62-3.4174-6.1225c-0.8441-1.991,8.174-0.2897,8.3927-0.3765c0.8853-0.7861,3.2644-9.554,5.4268-12.2402 c0.9874-1.2266,3.396-2.6415,5.7808-2.5013c2.0182,0.1187,4.1012,1.3013,4.9603,2.3747c2.171,2.7125,4.7139,12.2063,5.4308,12.3544 c1.9302,0.3988,7.9684-1.8974,8.321,0.4119c0.0771,0.5053-1.9201,5.7746-2.2439,6.1147c-0.5692,1.348-1.1653,3.3725-0.3164,5.4799 c1.2135,3.0123,6.055,8.5856,6.0544,14.0239c0,0.1925-0.9263,5.5194-7.6907,3.6474c-0.1511-0.0418-0.184-0.1383-0.2678-0.2018 c-1.5408-1.1691-4.7131-1.7748-7.61-0.9184c-3.4167,1.01-2.8112,2.9781-6.954,4.7235c-1.0835,0.4565-3.1113,1.2832-5.7731,1.0496 c-0.7152-0.0628-2.7788-0.2675-4.8115-1.6059c-2.9156-1.9198-2.3607-3.9289-4.7879-5.7011 C18.0291,51.0753,14.6921,52.875,13.9953,51.377z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "39.8979",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
      fill: "#3F3F3F",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.5193",
      cy: "30.3411",
      rx: "1.7742",
      ry: "2.1254",
      fill: "#3F3F3F",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M40.1212,56.6767C40.8364,56.614,45,55,46.9277,55.153C50.4076,55.4291,54.5728,57.7723,57,56 c3.2152-2.3476,1.2678-3.0961,1.9646-4.5942c0.9623-2.069-3.4028-6.2239-6.017-12.0822c-1.1268-2.5251-1.2295-4.7069-0.738-6.384 c1.2826-2.5697,2.3564-3.62,3.4174-6.1225c0.8441-1.991-8.174-0.2897-8.3927-0.3765c-0.8853-0.7861-1.102-6.8678-3.2644-9.554"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33.1007",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
      fill: "#3F3F3F",
      stroke: "none"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "39.8778",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
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
      d: "M13.9753,51.377c-0.9623-2.069,3.4028-6.2239,6.017-12.0822c1.1268-2.5251,1.2295-4.7069,0.738-6.384 c-1.2826-2.5697-2.3564-3.62-3.4174-6.1225c-0.8441-1.991,8.174-0.2897,8.3927-0.3765c0.8853-0.7861,3.2644-9.554,5.4268-12.2402 c0.9874-1.2266,3.396-2.6415,5.7808-2.5013c2.0182,0.1187,4.1012,1.3013,4.9603,2.3747c2.171,2.7125,4.7139,12.2063,5.4308,12.3544 c1.9302,0.3988,7.9684-1.8974,8.321,0.4119c0.0771,0.5053-1.9201,5.7746-2.2439,6.1147c-0.5692,1.348-1.1653,3.3725-0.3164,5.4799 c1.2135,3.0123,6.055,8.5856,6.0544,14.0239c0,0.1925-0.9263,5.5194-7.6907,3.6474c-0.1511-0.0418-4.9809-1.9766-7.8778-1.1202 c-3.4167,1.01-2.8112,2.9781-6.954,4.7235c-1.0835,0.4565-3.1113,1.2832-5.7731,1.0496c-0.7152-0.0628-2.7788-0.2675-4.8115-1.6059 c-2.9156-1.9198-2.3607-3.9289-4.7879-5.7011C18.009,51.0753,14.672,52.875,13.9753,51.377z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.4993",
      cy: "30.3411",
      rx: "1.7742",
      ry: "2.1254",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33.0806",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
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
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "39.8778",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
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
      d: "M13.9753,51.377c-0.9623-2.069,3.4028-6.2239,6.017-12.0822c1.1268-2.5251,1.2295-4.7069,0.738-6.384 c-1.2826-2.5697-2.3564-3.62-3.4174-6.1225c-0.8441-1.991,8.174-0.2897,8.3927-0.3765c0.8853-0.7861,3.2644-9.554,5.4268-12.2402 c0.9874-1.2266,3.396-2.6415,5.7808-2.5013c2.0182,0.1187,4.1012,1.3013,4.9603,2.3747c2.171,2.7125,4.7139,12.2063,5.4308,12.3544 c1.9302,0.3988,7.9684-1.8974,8.321,0.4119c0.0771,0.5053-1.9201,5.7746-2.2439,6.1147c-0.5692,1.348-1.1653,3.3725-0.3164,5.4799 c1.2135,3.0123,6.055,8.5856,6.0544,14.0239c0,0.1925-0.9263,5.5194-7.6907,3.6474c-0.1511-0.0418-4.9809-1.9766-7.8778-1.1202 c-3.4167,1.01-2.8112,2.9781-6.954,4.7235c-1.0835,0.4565-3.1113,1.2832-5.7731,1.0496c-0.7152-0.0628-2.7788-0.2675-4.8115-1.6059 c-2.9156-1.9198-2.3607-3.9289-4.7879-5.7011C18.009,51.0753,14.672,52.875,13.9753,51.377z"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "36.4993",
      cy: "30.3411",
      rx: "1.7742",
      ry: "2.1254",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "33.0806",
      cy: "23.2122",
      rx: "1.7074",
      ry: "3.1872",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    })));
  }
};

export default Ghost;