import React from 'react';

const GlobeShowingEuropeAfrica = ({
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
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "36",
      cy: "36",
      r: "28",
      fill: "#92D3F5",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      stroke: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.4394,11.4301C48.9012,12.3361,47.7952,13.5726,47,14c-1.2452,0.6692-1.904,0.2672-3,1c-1.2689,0.8484-1.2095,1.9379-2,2 c-0.8018,0.063-0.6879-1.993-1-3c-0.4521-1.4585-0.2307-1.5267-1-2c-1.0834-0.6665-3.2121-1.0502-5,0 c-0.7094,0.4167-0.7506,0.682-3,4c-1.7096,2.5218-2.188,3.1093-2,4c0.1989,0.9419,0.0427,1.7474,1,2 c1.1873,0.3132,1.3661-0.2722,2-1c1.3282-1.525,2.3581-3.7828,3-4c0.5713-0.1933,2.0656,1.3495,2,3c-0.0463,1.1654-0.852,1.922-2,3 c-0.7417,0.6965-2.875,1.5-6,2c-1.719,0.275-1.4083,0.8524-2.0625,1.5938c-0.8427,0.955-0.4615,2.1691-1.2812,3.3125 c-1.0252,1.43-3.4727,1.7917-3.6564,2.7188C22.8432,33.4154,24.9604,33.9845,26,34c0.8505,0.0127,1.0644-0.7721,3-2 c0.7408-0.47,1.75-1.2812,2.6875-1.25c0.5041,0.0168,1.8289,0.2852,2.3438,0.7188c0.5938,0.5-0.1562,1.8438-0.4062,3.1562 s-2.8976,1.8646-3.8542,2.0208c-1.5737,0.257-4.1439-0.5228-5.6042,0.9375c-1,1-1.1155,1.766-1.1667,3.4167 c-0.0129,0.4172,0.937,3.0323,2,4c1.1442,1.0416,2.2939-0.8356,4,0c1.7456,0.8549,2.493,2.7288,3,4 c0.5078,1.2731,0.1756,1.1679,1,5c0.4146,1.9271,0.3191,1.1194,1,4c0.5632,2.3826,0.5889,2.7678,1,3 c1.1732,0.6628,3.8997-0.8162,5-3c0.6895-1.3683,0.2111-1.9625,1-5c0.3928-1.5123,0.5892-2.2685,1-3 c1.7332-3.0861,4.8828-3.1256,5-5c0.0802-1.2824-1.3573-1.8515-1-3c0.3421-1.0997,1.8099-1.0603,2-2 c0.2579-1.2752-2.2492-2.316-2-3c0.2822-0.7746,4.0696-1.0098,6,1c0.6397,0.666,0.4982,0.9775,2,4c1.3839,2.7851,1.7637,3.0431,2,3 c0.4287-0.0782,0.3223-1.1355,1-3c0.3243-0.8922,1.0927-3.0062,2-3c0.6247,0.0043,0.7386,1.0097,2,2 c0.7103,0.5576,1.7908,0.8806,2.3474,1.0378C63.7747,40.0932,64,38.0729,64,36c0-10.6315-5.9252-19.8791-14.6535-24.6206"
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
      cy: "36",
      r: "28",
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
      d: "M49.4394,11.4301C48.9012,12.3361,47.7952,13.5726,47,14c-1.2452,0.6692-1.904,0.2672-3,1c-1.2689,0.8484-1.2095,1.9379-2,2 c-0.8018,0.063-0.6879-1.993-1-3c-0.4521-1.4585-0.2307-1.5267-1-2c-1.0834-0.6665-3.2121-1.0502-5,0 c-0.7094,0.4167-0.7506,0.682-3,4c-1.7096,2.5218-2.188,3.1093-2,4c0.1989,0.9419,0.0427,1.7474,1,2 c1.1873,0.3132,1.3661-0.2722,2-1c1.3282-1.525,2.3581-3.7828,3-4c0.5713-0.1933,2.0656,1.3495,2,3c-0.0463,1.1654-0.852,1.922-2,3 c-0.7417,0.6965-2.875,1.5-6,2c-1.719,0.275-1.4083,0.8524-2.0625,1.5938c-0.8427,0.955-0.4615,2.1691-1.2812,3.3125 c-1.0252,1.43-3.4727,1.7917-3.6564,2.7188C22.8432,33.4154,24.9604,33.9845,26,34c0.8505,0.0127,1.0644-0.7721,3-2 c0.7408-0.47,1.75-1.2812,2.6875-1.25c0.5041,0.0168,1.8289,0.2852,2.3438,0.7188c0.5938,0.5-0.1562,1.8438-0.4062,3.1562 s-2.8976,1.8646-3.8542,2.0208c-1.5737,0.257-4.1439-0.5228-5.6042,0.9375c-1,1-1.1155,1.766-1.1667,3.4167 c-0.0129,0.4172,0.937,3.0323,2,4c1.1442,1.0416,2.2939-0.8356,4,0c1.7456,0.8549,2.493,2.7288,3,4 c0.5078,1.2731,0.1756,1.1679,1,5c0.4146,1.9271,0.3191,1.1194,1,4c0.5632,2.3826,0.5889,2.7678,1,3 c1.1732,0.6628,3.8997-0.8162,5-3c0.6895-1.3683,0.2111-1.9625,1-5c0.3928-1.5123,0.5892-2.2685,1-3 c1.7332-3.0861,4.8828-3.1256,5-5c0.0802-1.2824-1.3573-1.8515-1-3c0.3421-1.0997,1.8099-1.0603,2-2 c0.2579-1.2752-2.2492-2.316-2-3c0.2822-0.7746,4.0696-1.0098,6,1c0.6397,0.666,0.4982,0.9775,2,4c1.3839,2.7851,1.7637,3.0431,2,3 c0.4287-0.0782,0.3223-1.1355,1-3c0.3243-0.8922,1.0927-3.0062,2-3c0.6247,0.0043,0.7386,1.0097,2,2 c0.7103,0.5576,1.7908,0.8806,2.3474,1.0378C63.7747,40.0932,64,38.0729,64,36c0-10.6315-5.9252-19.8791-14.6535-24.6206"
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
      cy: "36",
      r: "28",
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
      d: "M49.4394,11.4301C48.9012,12.3361,47.7952,13.5726,47,14c-1.2452,0.6692-1.904,0.2672-3,1c-1.2689,0.8484-1.2095,1.9379-2,2 c-0.8018,0.063-0.6879-1.993-1-3c-0.4521-1.4585-0.2307-1.5267-1-2c-1.0834-0.6665-3.2121-1.0502-5,0 c-0.7094,0.4167-0.7506,0.682-3,4c-1.7096,2.5218-2.188,3.1093-2,4c0.1989,0.9419,0.0427,1.7474,1,2 c1.1873,0.3132,1.3661-0.2722,2-1c1.3282-1.525,2.3581-3.7828,3-4c0.5713-0.1933,2.0656,1.3495,2,3c-0.0463,1.1654-0.852,1.922-2,3 c-0.7417,0.6965-2.875,1.5-6,2c-1.719,0.275-1.4083,0.8524-2.0625,1.5938c-0.8427,0.955-0.4615,2.1691-1.2812,3.3125 c-1.0252,1.43-3.4727,1.7917-3.6564,2.7188C22.8432,33.4154,24.9604,33.9845,26,34c0.8505,0.0127,1.0644-0.7721,3-2 c0.7408-0.47,1.75-1.2812,2.6875-1.25c0.5041,0.0168,1.8289,0.2852,2.3438,0.7188c0.5938,0.5-0.1562,1.8438-0.4062,3.1562 s-2.8976,1.8646-3.8542,2.0208c-1.5737,0.257-4.1439-0.5228-5.6042,0.9375c-1,1-1.1155,1.766-1.1667,3.4167 c-0.0129,0.4172,0.937,3.0323,2,4c1.1442,1.0416,2.2939-0.8356,4,0c1.7456,0.8549,2.493,2.7288,3,4 c0.5078,1.2731,0.1756,1.1679,1,5c0.4146,1.9271,0.3191,1.1194,1,4c0.5632,2.3826,0.5889,2.7678,1,3 c1.1732,0.6628,3.8997-0.8162,5-3c0.6895-1.3683,0.2111-1.9625,1-5c0.3928-1.5123,0.5892-2.2685,1-3 c1.7332-3.0861,4.8828-3.1256,5-5c0.0802-1.2824-1.3573-1.8515-1-3c0.3421-1.0997,1.8099-1.0603,2-2 c0.2579-1.2752-2.2492-2.316-2-3c0.2822-0.7746,4.0696-1.0098,6,1c0.6397,0.666,0.4982,0.9775,2,4c1.3839,2.7851,1.7637,3.0431,2,3 c0.4287-0.0782,0.3223-1.1355,1-3c0.3243-0.8922,1.0927-3.0062,2-3c0.6247,0.0043,0.7386,1.0097,2,2 c0.7103,0.5576,1.7908,0.8806,2.3474,1.0378C63.7747,40.0932,64,38.0729,64,36c0-10.6315-5.9252-19.8791-14.6535-24.6206"
    })));
  }
};

export default GlobeShowingEuropeAfrica;