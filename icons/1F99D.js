import React from 'react';

const Raccoon = ({
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
      id: "Raccoon_Color_1",
      fill: "#9b9b9a",
      d: "M68,46.0482c-8.5836-1.8729-10.9068-27.4119-25.0432-26.3849-7.6982.5593-16.6668,5.6741-22.2635,6.5983a3.9075,3.9075,0,0,1-2.7307-.4559,3.7672,3.7672,0,0,1-1.6771-2.5171c-.1828-.8992-.5442-2.24-1.0917-2.364C14.0624,20.6675,11.81,24.1,11.81,24.1a9.9569,9.9569,0,0,1-2.501,2.8858c-2.0327,1.6158-4.6068,2.7269-4.5291,3.1064.3167,1.5468,2.4434,1.8351,4.2617,2.0749,2.2874.3017,4.9741,2.8107,5.75,4.1116,2.6978,4.5216-.0368,14.53-2.5561,17.5111a4.1532,4.1532,0,0,0,2.6168-.0426c2.5827-.9107,5.7165-10.7861,5.7165-10.7861l-.5021,8.1674L21.37,52.9172,27.206,43.376s3.5544-1.2523,5.2169-1.96c3.0645-1.3047,9.42-1.497,9.42-1.497l-1.0786,11.21,1.3035,1.7886,1.7408-2.5163L48.65,41.5592,47.0738,35.494S45.6189,50.5782,48.889,53.4825A3.68,3.68,0,0,0,50.34,53.9L53.414,34.456S60.6846,46.9117,65,47.4A3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Color_2",
      fill: "#3f3f3f",
      d: "M46.5707,34.6377c-.9484.9119,1.9071,3.0626,1.8272,5.95-.04,1.4479-1.6635,3.067-1.5932,4.6652.1562,3.5483.6919,6.993,2.0843,8.23A3.68,3.68,0,0,0,50.34,53.9s3.985-20.8669,2.6541-20.3964C49.3528,34.7914,46.9224,34.3,46.5707,34.6377Z"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Color_3",
      fill: "#3f3f3f",
      d: "M14.7914,36.2788c2.6978,4.5216-.0368,14.53-2.5561,17.5111a4.1532,4.1532,0,0,0,2.6168-.0426c2.5827-.9107,5.7165-10.7861,5.7165-10.7861S14.0152,34.9779,14.7914,36.2788Z"
    }), /*#__PURE__*/React.createElement("g", {
      id: "Raccoon_Color_4"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237,15.089,15.089,0,0,1-1.5316-1.8629c-.4687-.6614-.9253-1.3864-1.3759-2.1582-.6009-1.029-1.1911-2.1412-1.7848-3.297-.4779-.93-.958-1.8882-1.4479-2.8539-.4354-.8584-.8786-1.7228-1.3347-2.5786-.3527-.6617-.7131-1.3184-1.0836-1.9632C53.0874,23.876,53.414,34.456,53.414,34.456s.4544.7785,1.2035,1.9538c.3887.61.8568,1.3269,1.382,2.0974.4253.6239.888,1.283,1.3762,1.9489.5253.7165,1.08,1.4409,1.65,2.1378.459.5615.9277,1.1053,1.3982,1.6127A18.4164,18.4164,0,0,0,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237,15.089,15.089,0,0,1-1.5316-1.8629c-.4687-.6614-.9253-1.3864-1.3759-2.1582-.6009-1.029-1.1911-2.1412-1.7848-3.297-.4779-.93-.958-1.8882-1.4479-2.8539-.4354-.8584-1.0279-3.4985-1.3347-2.5786A15.6256,15.6256,0,0,1,54.6175,36.41s.8568,1.3269,1.382,2.0974c.4253.6239.888,1.283,1.3762,1.9489.5253.7165,1.08,1.4409,1.65,2.1378.459.5615.9277,1.1053,1.3982,1.6127A18.4164,18.4164,0,0,0,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237,15.089,15.089,0,0,1-1.5316-1.8629c-.4687-.6614-.9253-1.3864-1.3759-2.1582-.6009-1.029-1.1911-2.1412-1.7848-3.297-.4779-.93-.945-3.813-1.4479-2.8539-1.2176,2.3224-.9226,2.3224-2.6869,4.5547,0,0,.888,1.283,1.3762,1.9489.5253.7165,1.08,1.4409,1.65,2.1378.459.5615.9277,1.1053,1.3982,1.6127A18.4164,18.4164,0,0,0,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237,15.089,15.089,0,0,1-1.5316-1.8629c-.4687-.6614-.9253-1.3864-1.3759-2.1582-.6009-1.029-1.3139-4.508-1.7848-3.297-.9692,2.4925-.9692,2.4925-2.7586,3.65,0,0,1.08,1.4409,1.65,2.1378.459.5615.9277,1.1053,1.3982,1.6127A18.4164,18.4164,0,0,0,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237,15.089,15.089,0,0,1-1.5316-1.8629c-.4687-.6614-.9837-2.9612-1.3759-2.1582-.9191,1.8813-1.2168,1.8813-2.8934,2.49,0,0,.9277,1.1053,1.3982,1.6127A18.4164,18.4164,0,0,0,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#9b9b9a",
      d: "M68,46.0482a6.4553,6.4553,0,0,1-3.1734-1.9237c-.5287-.5371-1.1939-2.6492-1.5316-1.8629-.6072,1.4139-1.2953,1.4139-2.8711,1.945,0,0,1.383,1.4092,2.0562,1.9388A5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#3f3f3f",
      d: "M68,46.0482c-1.1568-.2524-2.676-3.2194-3.1734-1.9237A3.6079,3.6079,0,0,1,62.48,46.1454,5.37,5.37,0,0,0,65,47.4,3.9663,3.9663,0,0,0,68,46.0482Z"
    })), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Color_5",
      fill: "#3f3f3f",
      d: "M8.4163,27.8386c.11-.52,2.0436-2.2155,2.3293-1.7673,1.5751,2.4706,4.9,3.6781,3.1757,5.4847-1.4241,1.492-2.502-.897-3.4152-1.7928C9.7539,29.0253,8.1981,28.87,8.4163,27.8386Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_1",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67.2223,45.4956c-8.5835-1.8729-10.1291-26.8593-24.2655-25.8323-7.6982.5593-16.6668,5.6741-22.2635,6.5983a3.9075,3.9075,0,0,1-2.7307-.4559,3.7672,3.7672,0,0,1-1.6771-2.5171c-.1828-.8992-.5442-2.24-1.0917-2.364C14.0624,20.6675,11.81,24.1,11.81,24.1a9.9569,9.9569,0,0,1-2.501,2.8858c-2.0327,1.6158-4.6068,2.7269-4.5291,3.1064.3167,1.5468,2.4434,1.8351,4.2617,2.0749,2.2874.3017,4.9741,2.8107,5.75,4.1116,2.6978,4.5216.43,13.6571-2.0894,16.6384"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.2587,34.456c.9481,5.1214-2.7548,12.6329-2.7548,18.4612"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_3",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.3763,35.494s2.9038,4.5632.83,7.882c-1.6289,2.6061-3.7693,7.0031-4.6134,8.771a1.3545,1.3545,0,0,1-1.2227.77h-.0206a1.3523,1.3523,0,0,1-1.2828-1.7886,14.0455,14.0455,0,0,0,.5021-8.1674"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_4",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.0738,35.494s2.9039,4.5632.83,7.882c-1.6288,2.6061-3.7693,7.0031-4.6134,8.771a1.3543,1.3543,0,0,1-1.2226.77h-.0206a1.3524,1.3524,0,0,1-1.2829-1.7886c.6141-1.8177,1.8478-7.8764,1.0786-11.21,0,0-9.73.6118-14.6366,3.4571"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.5686,42.9612c-.575-3.0259-2.8886-3.6623-5.7772-6.6824"
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
      id: "Raccoon_Line_1",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M67.2223,45.4956c-8.5835-1.8729-10.1291-26.8593-24.2655-25.8323-7.6982.5593-16.6668,5.6741-22.2635,6.5983a3.9075,3.9075,0,0,1-2.7307-.4559,3.7672,3.7672,0,0,1-1.6771-2.5171c-.1828-.8992-.5442-2.24-1.0917-2.364C14.0624,20.6675,11.81,24.1,11.81,24.1a9.9569,9.9569,0,0,1-2.501,2.8858c-2.0327,1.6158-4.6068,2.7269-4.5291,3.1064.3167,1.5468,2.4434,1.8351,4.2617,2.0749,2.2874.3017,4.9741,2.8107,5.75,4.1116,2.6978,4.5216.43,13.6571-2.0894,16.6384"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_2",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M53.2587,34.456c.9481,5.1214-2.7548,12.6329-2.7548,18.4612"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_3",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M26.3763,35.494s2.9038,4.5632.83,7.882c-1.6289,2.6061-3.7693,7.0031-4.6134,8.771a1.3545,1.3545,0,0,1-1.2227.77h-.0206a1.3523,1.3523,0,0,1-1.2828-1.7886,14.0455,14.0455,0,0,0,.5021-8.1674"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_4",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M47.0738,35.494s2.9039,4.5632.83,7.882c-1.6288,2.6061-3.7693,7.0031-4.6134,8.771a1.3543,1.3543,0,0,1-1.2226.77h-.0206a1.3524,1.3524,0,0,1-1.2829-1.7886c.6141-1.8177,1.8478-7.8764,1.0786-11.21,0,0-9.73.6118-14.6366,3.4571"
    }), /*#__PURE__*/React.createElement("path", {
      id: "Raccoon_Line_5",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M20.5686,42.9612c-.575-3.0259-2.8886-3.6623-5.7772-6.6824"
    })));
  }
};

export default Raccoon;