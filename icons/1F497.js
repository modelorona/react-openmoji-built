import React from 'react';

const GrowingHeart = ({
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
      fill: "#FFA7C0",
      d: "M59.5,25c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598 C33.8861,15.1536,29.7533,12.5,25,12.5c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034 L36,58.5397l20.7339-25.6975l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E67A94",
      d: "M56.4172,29.3999c0-5.9979-4.8623-10.8602-10.8602-10.8602c-4.1297,0-7.7204,2.3055-9.557,5.6992 c-1.8366-3.3937-5.4272-5.6992-9.557-5.6992c-5.9979,0-10.8602,4.8623-10.8602,10.8602c0,2.5803,0.9039,4.9472,2.4069,6.8104 l-0.0037,0.003L36,58.5397l18.014-22.3264l-0.0037-0.003C55.5133,34.347,56.4172,31.9802,56.4172,29.3999z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FFA7C0",
      d: "M53.865,33.0423c0-5.2482-4.2545-9.5027-9.5027-9.5027c-3.6135,0-6.7553,2.0173-8.3624,4.9868 c-1.607-2.9695-4.7488-4.9868-8.3624-4.9868c-5.2482,0-9.5027,4.2545-9.5027,9.5027c0,2.2578,0.7909,4.3288,2.106,5.9591 l-0.0032,0.0026L36,58.5397l15.7622-19.5356l-0.0032-0.0026C53.0741,37.3711,53.865,35.3001,53.865,33.0423z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#E67A94",
      d: "M51.3129,36.6848c0-4.4984-3.6467-8.1451-8.1451-8.1451c-3.0973,0-5.7903,1.7291-7.1677,4.2744 c-1.3774-2.5453-4.0704-4.2744-7.1677-4.2744c-4.4984,0-8.1451,3.6467-8.1451,8.1451c0,1.9352,0.6779,3.7104,1.8052,5.1078 l-0.0028,0.0022L36,58.5397l13.5105-16.7448l-0.0028-0.0022C50.635,40.3952,51.3129,38.6201,51.3129,36.6848z"
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
      strokeWidth: "0.1841",
      d: "M14.0568,32.6316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.5,25 c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598C33.8861,15.1536,29.7533,12.5,25,12.5 c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034L36,58.5397l20.7339-25.6975 l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25z"
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
      strokeWidth: "0.1841",
      d: "M14.0568,32.6316"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M59.5,25 c0-6.9036-5.5964-12.5-12.5-12.5c-4.7533,0-8.8861,2.6536-11,6.5598C33.8861,15.1536,29.7533,12.5,25,12.5 c-6.9036,0-12.5,5.5964-12.5,12.5c0,2.9699,1.0403,5.6942,2.7703,7.8387l-0.0043,0.0034L36,58.5397l20.7339-25.6975 l-0.0043-0.0034C58.4597,30.6942,59.5,27.9699,59.5,25z"
    })));
  }
};

export default GrowingHeart;