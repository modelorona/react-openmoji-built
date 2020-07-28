import React from 'react';

const Fox = ({
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
      fill: "#E27022",
      stroke: "none",
      d: "M17.1228,5.3057L13.7993,9.348l-2.1112,12.8954l2.5003,11.9161l-2.5003,5.0356l0.4829,11.3882l2.2344,4.5 c0,0,6.9323-3.3333,8.7656,3.9167l12.9023,3.8333l13.216-4.25l0.715-2.439l3.5745-2.2785l3.5235,0.5481l2.5725-6.1293L60.3119,42 l-1.7215-6.5752l-0.7776-1.2636l1.4468-4.7673l0.2177-8.9431l-0.9631-9.823l-1.7047-3.8692L54.171,4.6667l-5.1846,6.5784 l-5.482,6.707H42.171l-5.1591-1.4108l-9.1742,0.5805l-4.75-5.0384l-3.2746-5.1667L17.1228,5.3057"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M11.3377,45.0833c6.0422-0.6554,11.9908,4.5417,15.9913,10.0022h0l6.0087,2.2478l2.6566,0.7608 L39.046,57.25l5.7089-2.0836c0,0,5.0827-11.2498,15.9161-10.1392l-2.0833,8.2542L56.9002,55l-3.1875-0.8438l-3.0625,1.3865 l-1.5173,3.0909c0,0-3.5452,4.4554-12.8684,4.4497c-5.8283-0.0036-12.2601-1.375-13.473-4.484 c-0.8609-2.2069-3.8288-5.0369-3.8288-5.0369l-4.493,0.3564L11.3377,45.0833z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      stroke: "none",
      d: "M28.796,60.9583c0,0-0.3695,3.5417,1.3778,5.0417c1.7472,1.5,6.4139,1.7083,6.4139,1.7083l5.9583-1.7917 c0,0,1.7083-1.6667,0.875-5l-2.75,0.7917l-6.4972,0.2083L28.796,60.9583z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M57.671,7.375l-3.0417,2.0417L50.171,15.375L48.6294,22.5l0.2083,1.9583c0,0,5,8.375,11.25,0.2917 l-0.5833-8.5833l-0.9167-7.25L57.671,7.375z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M14.2714,7.375l3.0417,2.0417l4.4583,5.9583l1.5417,7.125l-0.2083,1.9583c0,0-5,8.375-11.25,0.2917 l0.5833-8.5833l0.9167-7.25L14.2714,7.375z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M29.0454,41.681c0,0-3.0393,1.5997-4.5092,1.0171c-1.4698-0.5826-2.2313-2.14-1.7007-3.4785 c0.5306-1.3386,2.1522-1.9514,3.622-1.3688C27.9274,38.4334,29.0454,41.681,29.0454,41.681z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9943,56.9292c-1.513-0.2346-2.7355-0.9125-3.641-2.075v-0.698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.9156,10.2884c0,0,7.7517,5.915,5.3244,13.6668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.6069,58.0941c-1.4877-3.2886-4.481-4.3848-5.1857-4.2282l-3.5235,0.5481c-2.6622-2.6622-3.132-10.1791-3.132-10.1791 c-0.4337-4.7705,1.0302-8.0757,2.4227-10.0754l-0.3869-0.7301c-2.5056-6.1857-1.0179-15.6601-0.4698-21.6892 c0.3975-4.3723,2.6068-5.9162,3.7911-6.4345c0.4153-0.1818,0.8959-0.0599,1.1789,0.2943 c1.2956,1.6213,5.3162,6.5744,9.1241,10.4468c1.6822,1.7107,2.4508,3.2218,2.748,4.4518"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M42.9546,41.681c0,0,3.0393,1.5997,4.5092,1.0171c1.4698-0.5826,2.2313-2.14,1.7007-3.4785s-2.1522-1.9514-3.622-1.3688 C44.0726,38.4334,42.9546,41.681,42.9546,41.681z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0733,61.7083v-4.7791c1.513-0.2346,2.7355-0.9125,3.641-2.075v-0.698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7468,50.1562l1.1745,5.8367c0,0,0,6.6555-7.4385,6.1074h-2.8978c-7.4385,0.5481-7.4385-6.1074-7.4385-6.1074l1.1745-5.8367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0844,10.2884c0,0-7.7517,5.915-5.3244,13.6668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.3931,58.0941c1.4877-3.2886,4.481-4.3848,5.1857-4.2282l3.5235,0.5481c2.6622-2.6622,3.132-10.1791,3.132-10.1791 c0.4336-4.7691-1.0294-8.0739-2.4216-10.0737l0.3858-0.7317c2.5056-6.1857,1.0179-15.6601,0.4698-21.6892 c-0.3975-4.3723-2.6068-5.9162-3.7911-6.4345C54.4619,5.1239,53.9814,5.2458,53.6983,5.6 c-1.2956,1.6213-5.3162,6.5744-9.1241,10.4468c-1.7324,1.7618-2.4958,3.3118-2.7734,4.5611"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.6672,65.4494c-3.804,2.0509-7.418,2.0886-10.8055,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.0178,17.9521c0,0,6.0552-3.1842,13.7809-0.1044"
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
      fill: "#000000",
      stroke: "none",
      d: "M29.0454,41.681c0,0-3.0393,1.5997-4.5092,1.0171c-1.4698-0.5826-2.2313-2.14-1.7007-3.4785 c0.5306-1.3386,2.1522-1.9514,3.622-1.3688C27.9274,38.4334,29.0454,41.681,29.0454,41.681z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M35.9943,56.9292c-1.513-0.2346-2.7355-0.9125-3.641-2.075v-0.698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M16.9156,10.2884c0,0,7.7517,5.915,5.3244,13.6668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M23.6069,58.0941c-1.4877-3.2886-4.481-4.3848-5.1857-4.2282l-3.5235,0.5481c-2.6622-2.6622-3.132-10.1791-3.132-10.1791 c-0.4337-4.7705,1.0302-8.0757,2.4227-10.0754l-0.3869-0.7301c-2.5056-6.1857-1.0179-15.6601-0.4698-21.6892 c0.3975-4.3723,2.6068-5.9162,3.7911-6.4345c0.4153-0.1818,0.8959-0.0599,1.1789,0.2943 c1.2956,1.6213,5.3162,6.5744,9.1241,10.4468c1.6822,1.7107,2.4508,3.2218,2.748,4.4518"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000000",
      stroke: "none",
      d: "M42.9546,41.681c0,0,3.0393,1.5997,4.5092,1.0171c1.4698-0.5826,2.2313-2.14,1.7007-3.4785s-2.1522-1.9514-3.622-1.3688 C44.0726,38.4334,42.9546,41.681,42.9546,41.681z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M36.0733,61.7083v-4.7791c1.513-0.2346,2.7355-0.9125,3.641-2.075v-0.698"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7468,50.1562l1.1745,5.8367c0,0,0,6.6555-7.4385,6.1074h-2.8978c-7.4385,0.5481-7.4385-6.1074-7.4385-6.1074l1.1745-5.8367"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M55.0844,10.2884c0,0-7.7517,5.915-5.3244,13.6668"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M48.3931,58.0941c1.4877-3.2886,4.481-4.3848,5.1857-4.2282l3.5235,0.5481c2.6622-2.6622,3.132-10.1791,3.132-10.1791 c0.4336-4.7691-1.0294-8.0739-2.4216-10.0737l0.3858-0.7317c2.5056-6.1857,1.0179-15.6601,0.4698-21.6892 c-0.3975-4.3723-2.6068-5.9162-3.7911-6.4345C54.4619,5.1239,53.9814,5.2458,53.6983,5.6 c-1.2956,1.6213-5.3162,6.5744-9.1241,10.4468c-1.7324,1.7618-2.4958,3.3118-2.7734,4.5611"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M41.6672,65.4494c-3.804,2.0509-7.418,2.0886-10.8055,0"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.0178,17.9521c0,0,6.0552-3.1842,13.7809-0.1044"
    })));
  }
};

export default Fox;