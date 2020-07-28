import React from 'react';

const Badger = ({
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
      id: "Badger_Color_1",
      fill: "#9b9b9a",
      d: "M66.345,45.6765c2.0234.0968,1.1253-25.4583-15.5132-25.51C45.4029,20.15,34.7472,22.99,29.32,23.1375c-1.3974.038-4.4352.048-5.5315-.8195-.6186-.49-.2131-2.0038-1.8438-2.5609-1.1324-.3868-2.5413.9451-3.38,1.2805a23.09,23.09,0,0,0-8.2973,4.9681c-1.0957,1.0031-4.95,2.0035-4.8145,3.4828.1849,2.0187,7.2729,3.5853,7.2729,3.5853s7.0964,1.9422,9.1168,3.2779c3.1615,2.09,10.39,10.7109,10.1412,11.268-.1254.28-4.8936.3328-4.8145,2.8682.0543,1.7409,2.7658,1.7414,2.7658,1.7414h5.0193c.9442-.6272,1.3347-3.1729,1.4305-4.3023.0854-1.0068-1.5759-3.6953-.611-3.995,2.4779-.77,4.77.3993,10.6533.6146.8446.0309,0,3.38,0,3.38s-4.6731,1.5124-4.61,2.8682c.0672,1.4341,2.356,1.4341,2.356,1.4341h5.634s4.0166-7.5875,4.712-8.1949c2.6539-2.3175,4.9935-1.83,9.1168-4.5072C63.6362,39.5272,64.2135,45.5746,66.345,45.6765Z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Color_2",
      fill: "#fff",
      d: "M12.5971,27.7718c2.95-2.6329,12.8133-4.2885,12.0353-5.3581-2.488-3.4211-5.2288-1.764-6.0679-1.4286-2.2451.8973-5.8749,1.2566-8.2973,4.9682-.8119,1.244-5.8456,2.4133-4.8145,3.4828C7.922,31.9972,14.1355,32.5718,19.91,32.9a60.57,60.57,0,0,1,13.016,2.354S28.45,22.588,13.4142,29.8212C12.2059,30.4025,11.7034,28.5694,12.5971,27.7718Z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Color_3",
      fill: "#3f3f3f",
      d: "M53.1224,51.7357l7.5048.4936s2.7368-3.1236,2.4876-5.7715c-.13-1.384-2.4173-5.7715-2.4173-5.7715l-4.49,1.5637,2.3011,4.3785-4.0365,1.9379Z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Color_4",
      fill: "#3f3f3f",
      d: "M24.8284,51.2053c-1.0614,1.5379-7.4582-.4936-7.4582-.4936l1.0783-3.0751,4.6564-1.4519.6847-9.0428s3.2307,2.6146,3.5553,3.8918C27.99,43.5726,26.5268,48.7446,24.8284,51.2053Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_1",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M66.6878,44.68c.9551-4.1388.7825-24.4613-15.856-24.5126C45.4029,20.15,34.7472,22.99,29.32,23.1375c-1.3974.038-4.4352.048-5.5315-.8195-.6186-.49-.2131-2.0038-1.8438-2.5609-1.1324-.3868-2.5413.9451-3.38,1.2805a23.3153,23.3153,0,0,0-8.2973,4.9681S5.4492,28.09,5.4527,29.4885c.0065,2.5891,7.2729,3.5853,7.2729,3.5853s7.0964,1.9422,9.1168,3.2779c3.1615,2.09,10.39,10.7109,10.1412,11.268-.1254.28-4.8936.3328-4.8145,2.8682.0543,1.7409,2.7658,1.7414,2.7658,1.7414h5.0193c.9442-.6272,1.3347-3.1729,1.4305-4.3023.0854-1.0068-1.5759-3.6953-.611-3.995,2.4779-.77,4.77.3993,10.6533.6146.8446.0309,0,3.38,0,3.38s-4.6731,1.5124-4.61,2.8682c.0672,1.4341,2.356,1.4341,2.356,1.4341h5.634s4.0166-7.5875,4.712-8.1949c2.6539-2.3175,4.9935-1.83,9.1168-4.5072"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8961,43.0439l3.2286,3.9687c-.6286.92-7.115.4826-6.0023,4.7231.1348.5136,1.5354.49,2.0664.492,1.0578.0036,4.2311,0,4.2311,0"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_3",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.55,36.88s2.1119,7.22.8225,9.1084c-.6286.92-7.115.4826-6.0023,4.7231.1348.5136,1.5354.49,2.0664.492,1.0578.0036,4.2311,0,4.2311,0"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_4",
      d: "M7.9183,27.2494l.2742,4.7876c-.9434.379-3.314-2.3569-3.314-2.3569S7.03,26.853,7.9183,27.2494Z"
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
      id: "Badger_Line_1",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M66.6878,44.68c.9551-4.1388.7825-24.4613-15.856-24.5126C45.4029,20.15,34.7472,22.99,29.32,23.1375c-1.3974.038-4.4352.048-5.5315-.8195-.6186-.49-.2131-2.0038-1.8438-2.5609-1.1324-.3868-2.5413.9451-3.38,1.2805a23.3153,23.3153,0,0,0-8.2973,4.9681S5.4492,28.09,5.4527,29.4885c.0065,2.5891,7.2729,3.5853,7.2729,3.5853s7.0964,1.9422,9.1168,3.2779c3.1615,2.09,10.39,10.7109,10.1412,11.268-.1254.28-4.8936.3328-4.8145,2.8682.0543,1.7409,2.7658,1.7414,2.7658,1.7414h5.0193c.9442-.6272,1.3347-3.1729,1.4305-4.3023.0854-1.0068-1.5759-3.6953-.611-3.995,2.4779-.77,4.77.3993,10.6533.6146.8446.0309,0,3.38,0,3.38s-4.6731,1.5124-4.61,2.8682c.0672,1.4341,2.356,1.4341,2.356,1.4341h5.634s4.0166-7.5875,4.712-8.1949c2.6539-2.3175,4.9935-1.83,9.1168-4.5072"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M55.8961,43.0439l3.2286,3.9687c-.6286.92-7.115.4826-6.0023,4.7231.1348.5136,1.5354.49,2.0664.492,1.0578.0036,4.2311,0,4.2311,0"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_3",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M22.55,36.88s2.1119,7.22.8225,9.1084c-.6286.92-7.115.4826-6.0023,4.7231.1348.5136,1.5354.49,2.0664.492,1.0578.0036,4.2311,0,4.2311,0"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Badger_Line_4",
      d: "M7.9183,27.2494l.2742,4.7876c-.9434.379-3.314-2.3569-3.314-2.3569S7.03,26.853,7.9183,27.2494Z"
    })));
  }
};

export default Badger;