import React from 'react';

const MusicalScore = ({
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
    }), /*#__PURE__*/React.createElement("g", {
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
      d: "M31.3109,42.1835c-0.3895-4.0287,3.2811-7.3285,7.3285-7.3285s7.3285,3.32,7.3285,7.3285c0,1.9413-0.5746,9.4819-10.7869,9.1301 c-4.5864-0.3678-8.4458-3.7482-9.0968-8.831c-0.5015-3.9165,0.0223-7.3091,4.0759-11.3628 c4.0537-4.0537,5.2229-4.2957,9.3212-9.9483s2.5823-9.2909,2.3736-10.0085s-1.6073-3.0374-4.2006-3.0374 c-2.5934,0-3.8432,2.7692-4.1817,3.9137c-0.3385,1.1445-0.7269,3.4443-0.0932,7.8778c0.4744,3.3194,8.0552,32.289,8.9828,36.6029 c0.089,0.4139,0.1574,0.8321,0.1961,1.2496c0.0029,0.0308,0.0279,0.7657,0.0279,0.7657c0,2.7615-2.2386,5-5,5 c-2.7614,0-5-2.2385-5-5c0-0.3646,0.039-0.7202,0.1132-1.0627c0,0,0.3213-1.1083,0.8974-1.2909"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.9471",
      cy: "57.1464",
      r: "2",
      fill: "#000000",
      stroke: "none"
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
      d: "M31.3109,42.1835c-0.3895-4.0287,3.2811-7.3285,7.3285-7.3285s7.3285,3.32,7.3285,7.3285c0,1.9413-0.5746,9.4819-10.7869,9.1301 c-4.5864-0.3678-8.4458-3.7482-9.0968-8.831c-0.5015-3.9165,0.0223-7.3091,4.0759-11.3628 c4.0537-4.0537,5.2229-4.2957,9.3212-9.9483s2.5823-9.2909,2.3736-10.0085s-1.6073-3.0374-4.2006-3.0374 c-2.5934,0-3.8432,2.7692-4.1817,3.9137c-0.3385,1.1445-0.7269,3.4443-0.0932,7.8778c0.4744,3.3194,8.0552,32.289,8.9828,36.6029 c0.089,0.4139,0.1574,0.8321,0.1961,1.2496c0.0029,0.0308,0.0279,0.7657,0.0279,0.7657c0,2.7615-2.2386,5-5,5 c-2.7614,0-5-2.2385-5-5c0-0.3646,0.039-0.7202,0.1132-1.0627c0,0,0.3213-1.1083,0.8974-1.2909"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "33.9471",
      cy: "57.1464",
      r: "2",
      fill: "#000000",
      stroke: "none"
    })));
  }
};

export default MusicalScore;