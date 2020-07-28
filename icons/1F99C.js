import React from 'react';

const Parrot = ({
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
      fill: "#d22f27",
      d: "M31.6975,20.781a7.3117,7.3117,0,0,1-3.0456-5.8955,7.5631,7.5631,0,0,1,7.6947-7.424,7.7334,7.7334,0,0,1,7.689,7.1139c.1765,3.1324.0058,6.3177.0058,9.455v1.7054c1.5,1.79,4.0184,5.4063,5.919,15.99.4,2.2264,4.4292,12.201,4.7353,15.99-.7893.3807-1.5784,1.9036-2.3677,2.2843-.4122-1.7023-4.8688-12.1253-7.1028-13.7057a8.471,8.471,0,0,0-2.3676-1.1421c-2.1077-.71-3.9029-1.3173-5.429-1.89a6.0469,6.0469,0,0,1-2.8577.7475c-4.5765,0-8.2866-5.3692-8.2866-11.9924C26.2843,26.8587,28.54,22.4737,31.6975,20.781Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#f1b31c",
      d: "M27.8238,16.864l-.003-.0145,1.7367,2.2186a3.4693,3.4693,0,0,1-5.3388-.749Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d22f27",
      d: "M29.8021,32.5882c-.0114-3.5853,1.6194-7.117,5.1825-8.5828a7.1956,7.1956,0,0,1,5.5074-.0042c2.9734,1.276,4.6026,4.4632,5.7132,7.5022a66.7013,66.7013,0,0,1,2.61,9.38c.2643,1.2761.4358,2.5771.6448,3.863.16.9815,1.1217,3.6747.7448,4.5942-.55,1.3419-5.7909-.4749-6.967-.941A25.49,25.49,0,0,1,36.3318,44.2a19.4484,19.4484,0,0,1-5.5989-7.0507A11.7711,11.7711,0,0,1,29.8021,32.5882Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#1e50a0",
      d: "M30.962,27.6954c-.0026.1084-.0181.2156-.0178.3242a11.7726,11.7726,0,0,0,.9309,4.5612,19.4463,19.4463,0,0,0,5.5989,7.0507A25.4882,25.4882,0,0,0,44.38,43.8307a23.78,23.78,0,0,0,5.1828,1.3938c.2907,1.1925.9688,3.3188.6421,4.1158-.55,1.3419-5.7909-.4749-6.967-.941A25.4938,25.4938,0,0,1,36.3318,44.2a19.4484,19.4484,0,0,1-5.5989-7.0507,11.7731,11.7731,0,0,1-.9308-4.5613A10.3962,10.3962,0,0,1,30.962,27.6954Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fcea2b",
      d: "M28.7246,10.9187a7.3027,7.3027,0,0,0-.8762,5.9453L23.08,18.779A7.48,7.48,0,0,1,23,17.7408,6.6464,6.6464,0,0,1,28.7246,10.9187Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M31,10c-.1248-.0181-.2732-.02-.4079-.0312A7.2164,7.2164,0,0,0,31.6974,20.781c-.0874.0469-.1714.1034-.2575.1544A8.1279,8.1279,0,0,0,37,18a6.5956,6.5956,0,0,0,1-2C37.6238,15.2173,35.3359,10.63,31,10Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8021,32.5882c-.0114-3.5853,1.6194-7.117,5.1825-8.5828a7.1956,7.1956,0,0,1,5.5074-.0042c2.9734,1.276,4.6026,4.4632,5.7132,7.5022a66.7013,66.7013,0,0,1,2.61,9.38c.2643,1.2761.4358,2.5771.6448,3.863.16.9815,1.1217,3.6747.7448,4.5942-.55,1.3419-5.7909-.4749-6.967-.941A25.49,25.49,0,0,1,36.3318,44.2a19.4484,19.4484,0,0,1-5.5989-7.0507A11.7711,11.7711,0,0,1,29.8021,32.5882Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.8484,16.864,23.08,18.779A7.48,7.48,0,0,1,23,17.7408a6.6464,6.6464,0,0,1,5.7246-6.8221"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.769,53.4211a24.8711,24.8711,0,0,1,.9267,4.2946c-.7615.3807-1.5229,1.9036-2.2843,2.2843a50.4224,50.4224,0,0,0-2.282-5.8286C48.4063,52.548,47.48,51.4162,46.6957,50"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.5575,19.0681a3.4693,3.4693,0,0,1-5.3388-.749"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.6957",
      x2: "34.6957",
      y1: "45",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0873",
      x2: "61",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      x2: "42.9895",
      y1: "52.1722",
      y2: "52.1722",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2793,44.01c-4.4155,0-7.995-5.3692-7.995-11.9924,0-5.1589,2.1758-9.5439,5.2226-11.2366A7.4106,7.4106,0,0,1,35.9924,7.4615a7.5768,7.5768,0,0,1,7.4184,7.1139c.12,2.2168.0732,4.46.0353,6.6942-.0156.9227-.03,1.8438-.03,2.7608v1.7054"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.6974,20.781c-.0874.0469-.1714.1034-.2575.1544A8.1279,8.1279,0,0,0,37,18a6.5956,6.5956,0,0,0,1-2c-.3762-.7827-2.6641-5.37-7-6-.1248-.0181-.2732-.02-.4079-.0312"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.6957",
      x2: "40.6957",
      y1: "48",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M29.8021,32.5882c-.0114-3.5853,1.6194-7.117,5.1825-8.5828a7.1956,7.1956,0,0,1,5.5074-.0042c2.9734,1.276,4.6026,4.4632,5.7132,7.5022a66.7013,66.7013,0,0,1,2.61,9.38c.2643,1.2761.4358,2.5771.6448,3.863.16.9815,1.1217,3.6747.7448,4.5942-.55,1.3419-5.7909-.4749-6.967-.941A25.49,25.49,0,0,1,36.3318,44.2a19.4484,19.4484,0,0,1-5.5989-7.0507A11.7711,11.7711,0,0,1,29.8021,32.5882Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M27.8484,16.864,23.08,18.779A7.48,7.48,0,0,1,23,17.7408a6.6464,6.6464,0,0,1,5.7246-6.8221"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M52.769,53.4211a24.8711,24.8711,0,0,1,.9267,4.2946c-.7615.3807-1.5229,1.9036-2.2843,2.2843a50.4224,50.4224,0,0,0-2.282-5.8286C48.4063,52.548,47.48,51.4162,46.6957,50"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.5575,19.0681a3.4693,3.4693,0,0,1-5.3388-.749"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.6957",
      x2: "34.6957",
      y1: "45",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "57.0873",
      x2: "61",
      y1: "52",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "13",
      x2: "42.9895",
      y1: "52.1722",
      y2: "52.1722",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.2793,44.01c-4.4155,0-7.995-5.3692-7.995-11.9924,0-5.1589,2.1758-9.5439,5.2226-11.2366A7.4106,7.4106,0,0,1,35.9924,7.4615a7.5768,7.5768,0,0,1,7.4184,7.1139c.12,2.2168.0732,4.46.0353,6.6942-.0156.9227-.03,1.8438-.03,2.7608v1.7054"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M31.6974,20.781c-.0874.0469-.1714.1034-.2575.1544A8.1279,8.1279,0,0,0,37,18a6.5956,6.5956,0,0,0,1-2c-.3762-.7827-2.6641-5.37-7-6-.1248-.0181-.2732-.02-.4079-.0312"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "40.6957",
      x2: "40.6957",
      y1: "48",
      y2: "52",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    })));
  }
};

export default Parrot;