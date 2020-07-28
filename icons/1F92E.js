import React from 'react';

const FaceVomiting = ({
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
      r: "24",
      fill: "#FCEA2B"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#B1CC33",
      d: "M47.1996,51.282c2.4604,0,5.4331,1.947,5.4331,3.6822c0,1.1754-0.9151,2.2-2.2701,2.7388 c0.9556,3.1123-1.2429,4.6605-2.9806,4.8865c-1.0209,0.1328-2.1134-0.4142-2.7863-1.093c0,1.3994-1.1345,2.5339-2.5339,2.5339 c-1.3994,0-2.9144-0.937-2.9144-2.3364c-0.3126,1.0449-1.2813,1.8065-2.428,1.8065c-1.0988,0-2.2616-0.8964-2.6128-1.8743 c-0.3646,1.4932-1.6132,2.2102-2.9144,1.9393c-1.0753-0.2239-1.8354-1.051-1.9545-1.9724 c-0.1766,1.2269-1.5284,2.4373-2.8041,2.4373c-1.3994,0-2.5339-1.1345-2.5339-2.5339c-1.3994,0-3.1504-0.8857-3.1504-2.2852 c0-1.3994,1.1473-2.6613,2.5467-2.6613c-0.6745-0.4553-1.118-1.2267-1.118-2.1017c0-1.3994,1.7368-2.7662,3.1362-2.7662 c-0.1313-0.2663-0.2489-0.5384-0.3522-0.8158c-0.3427-0.9206-0.5273-1.8993-0.5273-2.9141c0-5.4121,5.2516-9.7995,11.7297-9.7995 s11.7297,4.3874,11.7297,9.7995C47.8941,49.1212,47.6491,50.2425,47.1996,51.282z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin-shadow"
    }), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "25.1678,26.4126 31.7548,30.4265 25.1678,34.1644"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46.8322,26.4126 40.2452,30.4265 46.8322,34.1644"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.2197,50.0387C57.217,46.1546,59,41.2854,59,36c0-12.7031-10.2978-23-23-23c-12.7031,0-23,10.2969-23,23 c0,5.9897,2.2896,11.4448,6.0414,15.5376"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.2806,19.0706c0.5464,1.4632,1.6142,2.6709,2.9996,3.3911c1.3093,0.8663,2.8945,1.2106,4.4451,0.9702"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.7194,19.0706c-0.5464,1.4632-1.6142,2.6709-2.9996,3.3911c-1.3093,0.8663-2.8945,1.2106-4.4451,0.9702"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.1996,51.282c2.4604,0,5.4331,1.947,5.4331,3.6822c0,1.1754-0.9151,2.2-2.2701,2.7388 c0.9556,3.1123-1.2429,4.6605-2.9806,4.8865c-1.0209,0.1328-2.1134-0.4142-2.7863-1.093c0,1.3994-1.1345,2.5339-2.5339,2.5339 c-1.3994,0-2.9144-0.937-2.9144-2.3364c-0.3126,1.0449-1.2813,1.8065-2.428,1.8065c-1.0988,0-2.2616-0.8964-2.6128-1.8743 c-0.3646,1.4932-1.6132,2.2102-2.9144,1.9393c-1.0753-0.2239-1.8354-1.051-1.9545-1.9724 c-0.1766,1.2269-1.5284,2.4373-2.8041,2.4373c-1.3994,0-2.5339-1.1345-2.5339-2.5339c-1.3994,0-3.1504-0.8857-3.1504-2.2852 c0-1.3994,1.1473-2.6613,2.5467-2.6613c-0.6745-0.4553-1.118-1.2267-1.118-2.1017c0-1.3994,1.7368-2.7662,3.1362-2.7662 c-0.1313-0.2663-0.2489-0.5384-0.3522-0.8158c-0.3427-0.9206-0.5273-1.8993-0.5273-2.9141c0-5.4121,5.2516-9.7995,11.7297-9.7995 s11.7297,4.3874,11.7297,9.7995C47.8941,49.1212,47.6491,50.2425,47.1996,51.282z"
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
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "25.1678,26.4126 31.7548,30.4265 25.1678,34.1644"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "46.8322,26.4126 40.2452,30.4265 46.8322,34.1644"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M54.2197,50.0387C57.217,46.1546,59,41.2854,59,36c0-12.7031-10.2978-23-23-23c-12.7031,0-23,10.2969-23,23 c0,5.9897,2.2896,11.4448,6.0414,15.5376"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.2806,19.0706c0.5464,1.4632,1.6142,2.6709,2.9996,3.3911c1.3093,0.8663,2.8945,1.2106,4.4451,0.9702"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M28.7194,19.0706c-0.5464,1.4632-1.6142,2.6709-2.9996,3.3911c-1.3093,0.8663-2.8945,1.2106-4.4451,0.9702"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M47.1996,51.282c2.4604,0,5.4331,1.947,5.4331,3.6822c0,1.1754-0.9151,2.2-2.2701,2.7388 c0.9556,3.1123-1.2429,4.6605-2.9806,4.8865c-1.0209,0.1328-2.1134-0.4142-2.7863-1.093c0,1.3994-1.1345,2.5339-2.5339,2.5339 c-1.3994,0-2.9144-0.937-2.9144-2.3364c-0.3126,1.0449-1.2813,1.8065-2.428,1.8065c-1.0988,0-2.2616-0.8964-2.6128-1.8743 c-0.3646,1.4932-1.6132,2.2102-2.9144,1.9393c-1.0753-0.2239-1.8354-1.051-1.9545-1.9724 c-0.1766,1.2269-1.5284,2.4373-2.8041,2.4373c-1.3994,0-2.5339-1.1345-2.5339-2.5339c-1.3994,0-3.1504-0.8857-3.1504-2.2852 c0-1.3994,1.1473-2.6613,2.5467-2.6613c-0.6745-0.4553-1.118-1.2267-1.118-2.1017c0-1.3994,1.7368-2.7662,3.1362-2.7662 c-0.1313-0.2663-0.2489-0.5384-0.3522-0.8158c-0.3427-0.9206-0.5273-1.8993-0.5273-2.9141c0-5.4121,5.2516-9.7995,11.7297-9.7995 s11.7297,4.3874,11.7297,9.7995C47.8941,49.1212,47.6491,50.2425,47.1996,51.282z"
    })));
  }
};

export default FaceVomiting;