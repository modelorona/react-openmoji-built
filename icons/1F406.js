import React from 'react';

const Leopard = ({
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
      fill: "#F4AA41",
      stroke: "none",
      d: "M10.921,22.5547l-4.0185,2.0136l-2.5423,1.7802l-0.8686,2.7256l-1.4696,4.1912l1.8157,2.3282l5.8333-1.5797 l1.6224,1.5797l3.6707,1.9249l1.2487,4.3261l-4.0418,3.9438l-1.4167,4.3797l0.539,2.6654l2.8043,2.3565l3.0014-2.8463 c0,0-0.5245-3.0007,0.9404-4.3388c1.4649-1.3381,3.3757-3.7385,3.3757-3.7385v8.4005l0.6012,2.5443l2.2353,0.4577l1.3519-1.8344 l1.4614-12.9224l2.2658,0.2907l5.9944,0.5474l4.2084-2.0965l1.1374,4.6127l3.6984,3.7385l-0.79,4.7548l1.175,2.2688l2.5399-1.4963 l2.3975-4.1153v-3.6284l-4.1458-4.0474l7.6544,5.3456l2.7721,1.7794l0.7162,5.8899l1.9164,0.9706l1.8163-1.4347l-0.7805-9.0342 L57.9183,43.88l-3.4836-5.7002l0.2779-4.3048l-0.5946-5.3399c-3.7098-1.924-7.58-2.9066-11.6334-2.8146l-8.4753-0.0539 l-7.4206,0.5278l-4.8427-1.3913l-6.8252-0.2347l-1.6817-1.3828L10.921,22.5547z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M42.2127,37.086c0,0-10.6875-4.6485-14.25-0.211l-0.8976,4.037l4.3849,0.963l7.2002-1.375L42.2127,37.086z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M19.921,40.875l-4.9167,2.6667l-3.5503,4.4631v5.4119l4.4253,1.6116l1.4167-2.945 c0,0-0.3051-2.6254,0.7435-3.875c1.0486-1.2496,3.2982-4.125,3.2982-4.125l-0.25-2.2083L19.921,40.875z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFFFFF",
      stroke: "none",
      d: "M40.6294,43.0417c0,0,7.625-1.2709,9.8333,2.6041v3.7292l-3.75,5.6533l-2.2083,0.1827l-1.125-1.5443 l0.99-4.375l-0.6984-1.625l-1.4583-2.5295L40.6294,43.0417z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      stroke: "none",
      d: "M54.046,33.8333c0,0,2.5005,9.2708,6.3755,11.8124c3.875,2.5417,5.7079,2.9792,7.8745,2.5626 c1.8129-0.3486,1.5833-2.5626,1.5833-2.5626H67.796l-6.0833-3.2291l-1.5719-3.2761l-0.7198-2.8489l-1.0833-4.0282L54.874,29.049 l-2.0363-1.1324L54.046,33.8333z"
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
      d: "M14.3304,24.5107h6.2586c0.7536,0,1.4984,0.1615,2.1843,0.4735l0.9154,0.4165c1.3718,0.6241,2.8873,0.8609,4.3831,0.6759 c5.4788-0.6773,18.8505-0.9925,23.8963,1.3062c6.9315,3.1578,6.4836,7.3762,7.3482,9.6455 c0.8646,2.2692,2.9583,9.0061,9.6667,8.5999"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.1805,35.1274c0.4163,2.1503,1.4556,4.6774,3.6201,7.4476v11.1514c0,1.1046,0.8954,2,2,2h0.1891 c1.0865,0,1.9746-0.8635,1.9993-1.9497c0.0903-3.9687,1.4782-15.2085,2.4732-16.836c0,0-0.6371-2.5625-1.25-4.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.2006,35.0056c0.415,0.6388,1.6554,1.4664,2.4862,1.8528c0.4386,0.204,0.753,0.6061,0.8782,1.0733l1.2429,4.6375 c0,0-7.3532,3.9727-4.451,10.976c0.2972,0.7173,1.0845,1.4253,2.1262,1.5869c1.0894,0.169,3.0014-0.6707,2.3248-2.6707"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.9975,40.6854c0,0,7.5589,2.9477,14.0283-2.9477c0,0,0.1031,1.7447,6.2829,6.0852c0,0,3.7501,2.8987,7.6317,4.7127 l0.5507,5.6552c0.0906,0.9305,1.1792,1.5357,2.1141,1.5357h0c1.0579,0,1.892-0.9006,1.8109-1.9555l-0.615-7.9988 c-0.0424-0.5518-0.4406-0.9553-0.9528-1.1649c-1.3235-0.5416-3.4173-4.1666-4.7819-7.2291l-0.4167-3.316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.567,40.0831c0,0,1.352,4.1254,6.2702,8.5451l-0.8725,4.0737c-0.2501,1.1677,0.6401,2.2688,1.8343,2.2688h0 c0.7351,0,1.4005-0.426,1.7053-1.0949c0.6068-1.3321,1.3466-3.5208,2.0204-4.5392"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.8249,26.0657c1.7351-2.7653-1.6752-4.625-3.754-2.9065c-1.5286,1.2637-2.3807,1.2238-2.3807,1.2238 c-3.8209,1.0685-3.5524,3.9198-3.5524,3.9198l-1.6985,4.6446c-0.0943,0.3356,0.0237,0.6948,0.2985,0.9092l1.6702,1.3022 c0.5103,0.3978,1.188,0.4859,1.7866,0.2402c1.6796-0.6895,5.3397-2.6848,5.3397-5.6474"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.8006,44.2085c0,0-2.9432,1.5902-4.3161,3.7385"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.1796,35.6907c-0.8284,0-1.5-0.6716-1.5-1.5c0-0.8284,0.6716-1.5,1.5-1.5c0.3365,0,0.6472,0.1108,0.8975,0.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.1366,32.2635c-0.8284,0-1.5-0.6716-1.5-1.5s0.6716-1.5,1.5-1.5c0.3365,0,0.6472,0.1108,0.8975,0.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.4841,32.8772c-0.6478-0.5164-0.7544-1.4601-0.238-2.1079c0.5164-0.6478,1.4601-0.7544,2.1079-0.238 c0.2632,0.2098,0.437,0.4901,0.5161,0.7924"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.5144,32.1c-0.6478-0.5164-0.7544-1.4601-0.238-2.1079c0.5164-0.6478,1.4601-0.7544,2.1079-0.238 c0.2632,0.2098,0.437,0.4901,0.5161,0.7924"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.3948,35.5775c0.5438-0.6249,1.4913-0.6907,2.1162-0.1468c0.6249,0.5438,0.6907,1.4913,0.1468,2.1162 c-0.2209,0.2539-0.5085,0.4155-0.814,0.4814"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.0056,34.7229c0.5438-0.6249,1.4913-0.6907,2.1162-0.1468c0.6249,0.5438,0.6907,1.4913,0.1468,2.1162 c-0.2209,0.2539-0.5085,0.4155-0.814,0.4814"
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
      d: "M14.3304,24.5107h6.2586c0.7536,0,1.4984,0.1615,2.1843,0.4735l0.9154,0.4165c1.3718,0.6241,2.8873,0.8609,4.3831,0.6759 c5.4788-0.6773,18.8505-0.9925,23.8963,1.3062c6.9315,3.1578,6.4836,7.3762,7.3482,9.6455 c0.8646,2.2692,2.9583,9.0061,9.6667,8.5999"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M18.1805,35.1274c0.4163,2.1503,1.4556,4.6774,3.6201,7.4476v11.1514c0,1.1046,0.8954,2,2,2h0.1891 c1.0865,0,1.9746-0.8635,1.9993-1.9497c0.0903-3.9687,1.4782-15.2085,2.4732-16.836c0,0-0.6371-2.5625-1.25-4.25"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M12.2006,35.0056c0.415,0.6388,1.6554,1.4664,2.4862,1.8528c0.4386,0.204,0.753,0.6061,0.8782,1.0733l1.2429,4.6375 c0,0-7.3532,3.9727-4.451,10.976c0.2972,0.7173,1.0845,1.4253,2.1262,1.5869c1.0894,0.169,3.0014-0.6707,2.3248-2.6707"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M27.9975,40.6854c0,0,7.5589,2.9477,14.0283-2.9477c0,0,0.1031,1.7447,6.2829,6.0852c0,0,3.7501,2.8987,7.6317,4.7127 l0.5507,5.6552c0.0906,0.9305,1.1792,1.5357,2.1141,1.5357h0c1.0579,0,1.892-0.9006,1.8109-1.9555l-0.615-7.9988 c-0.0424-0.5518-0.4406-0.9553-0.9528-1.1649c-1.3235-0.5416-3.4173-4.1666-4.7819-7.2291l-0.4167-3.316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M38.567,40.0831c0,0,1.352,4.1254,6.2702,8.5451l-0.8725,4.0737c-0.2501,1.1677,0.6401,2.2688,1.8343,2.2688h0 c0.7351,0,1.4005-0.426,1.7053-1.0949c0.6068-1.3321,1.3466-3.5208,2.0204-4.5392"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M13.8249,26.0657c1.7351-2.7653-1.6752-4.625-3.754-2.9065c-1.5286,1.2637-2.3807,1.2238-2.3807,1.2238 c-3.8209,1.0685-3.5524,3.9198-3.5524,3.9198l-1.6985,4.6446c-0.0943,0.3356,0.0237,0.6948,0.2985,0.9092l1.6702,1.3022 c0.5103,0.3978,1.188,0.4859,1.7866,0.2402c1.6796-0.6895,5.3397-2.6848,5.3397-5.6474"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M21.8006,44.2085c0,0-2.9432,1.5902-4.3161,3.7385"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M49.1796,35.6907c-0.8284,0-1.5-0.6716-1.5-1.5c0-0.8284,0.6716-1.5,1.5-1.5c0.3365,0,0.6472,0.1108,0.8975,0.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M32.1366,32.2635c-0.8284,0-1.5-0.6716-1.5-1.5s0.6716-1.5,1.5-1.5c0.3365,0,0.6472,0.1108,0.8975,0.298"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M40.4841,32.8772c-0.6478-0.5164-0.7544-1.4601-0.238-2.1079c0.5164-0.6478,1.4601-0.7544,2.1079-0.238 c0.2632,0.2098,0.437,0.4901,0.5161,0.7924"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M17.5144,32.1c-0.6478-0.5164-0.7544-1.4601-0.238-2.1079c0.5164-0.6478,1.4601-0.7544,2.1079-0.238 c0.2632,0.2098,0.437,0.4901,0.5161,0.7924"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M34.3948,35.5775c0.5438-0.6249,1.4913-0.6907,2.1162-0.1468c0.6249,0.5438,0.6907,1.4913,0.1468,2.1162 c-0.2209,0.2539-0.5085,0.4155-0.814,0.4814"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M22.0056,34.7229c0.5438-0.6249,1.4913-0.6907,2.1162-0.1468c0.6249,0.5438,0.6907,1.4913,0.1468,2.1162 c-0.2209,0.2539-0.5085,0.4155-0.814,0.4814"
    })));
  }
};

export default Leopard;