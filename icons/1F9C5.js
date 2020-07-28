import React from 'react';

const Onion = ({
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
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#f4aa41",
      d: "M38.4912,16.7851l.0168-.0011a3.5657,3.5657,0,0,1-1.9173-4.5094l-3.0652,1.94L31.88,16.2681s.1379.7632-.0658.7984C20.8294,18.9628,12.5172,27.7978,12.5172,38.418c0,12.0034,10.6151,21.734,23.7094,21.734s23.7093-9.7306,23.7093-21.734C59.9359,27.1151,50.5227,17.8306,38.4912,16.7851Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#e27022",
      d: "M37.3583,9.74s-2.4851,5.7564.5827,7.2051l-.0168.001c12.0316,1.0456,21.4447,10.33,21.4447,21.633,0,12.0033-10.615,20.4085-23.7093,20.4085,0,0,8.0283-1.9112,13.0787-8.4973,4.3078-5.6179,6.3119-13.7888.813-23.2031-1.9052-3.2618-6.2748-6.9157-11.8291-8.5751-.1088-.0325-1.4118-.6586-1.4956-.7352-.4363-.3985-.7207-1.5541-.567-4.0836A9.8024,9.8024,0,0,1,37.3583,9.74Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.4166,14.6311l4.3043-6.1339a20.0263,20.0263,0,0,0-1.22,2.2393c-2.7869,6.1037,2.1232,6.3747,2.1232,6.3747C51.1091,18.61,59.9359,27.59,59.9359,38.4438c0,11.9029-10.615,21.5522-23.7093,21.5522S12.5173,50.3467,12.5173,38.4438c0-8.2317,5.0767-15.3855,12.5394-19.0154a24.8313,24.8313,0,0,1,3.0884-1.2525q.1238-.0406.2481-.08.1619-.0515.3249-.1009a25.4857,25.4857,0,0,1,3.2831-.7619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.9929,60.2041l-5.797,2.59Z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "40.931 62.794 35.993 60.204 35.993 62.794"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.3755,53.4552c-2.33-2.343-3.9821-8.237-3.9821-15.1375,0-5.8044,1.1693-10.8967,2.9272-13.7624"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.7259,49.8921c-1.7551-1.7652-3-6.2059-3-11.4048,0-4.3732.881-8.21,2.2054-10.3689"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.28,49.8921c1.7551-1.7652,3-6.2059,3-11.4048,0-4.3732-.8811-8.21-2.2055-10.3689"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.2155,53.4552c2.33-2.343,3.9822-8.237,3.9822-15.1375,0-5.8044-1.1693-10.8967-2.9273-13.7624"
    }))));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.4166,14.6311l4.3043-6.1339a20.0263,20.0263,0,0,0-1.22,2.2393c-2.7869,6.1037,2.1232,6.3747,2.1232,6.3747C51.1091,18.61,59.9359,27.59,59.9359,38.4438c0,11.9029-10.615,21.5522-23.7093,21.5522S12.5173,50.3467,12.5173,38.4438c0-8.2317,5.0767-15.3855,12.5394-19.0154a24.8313,24.8313,0,0,1,3.0884-1.2525q.1238-.0406.2481-.08.1619-.0515.3249-.1009a25.4857,25.4857,0,0,1,3.2831-.7619"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M35.9929,60.2041l-5.797,2.59Z"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      points: "40.931 62.794 35.993 60.204 35.993 62.794"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M32.3755,53.4552c-2.33-2.343-3.9821-8.237-3.9821-15.1375,0-5.8044,1.1693-10.8967,2.9272-13.7624"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.7259,49.8921c-1.7551-1.7652-3-6.2059-3-11.4048,0-4.3732.881-8.21,2.2054-10.3689"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M49.28,49.8921c1.7551-1.7652,3-6.2059,3-11.4048,0-4.3732-.8811-8.21-2.2055-10.3689"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.2155,53.4552c2.33-2.343,3.9822-8.237,3.9822-15.1375,0-5.8044-1.1693-10.8967-2.9273-13.7624"
    }))));
  }
};

export default Onion;