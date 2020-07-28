import React from 'react';

const WritingHand = ({
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
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("polyline", {
      fill: "#3F3F3F",
      points: "26.2964,36.76 45.9,6.2368 50.2011,9.0841 34.088,35.1123"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "#3F3F3F",
      points: "18.943,53.7111 15.5519,58.5351 9.7396,62.8728 11.7478,55.8081 15.5519,50.2713"
    })), /*#__PURE__*/React.createElement("g", {
      id: "hair"
    }), /*#__PURE__*/React.createElement("g", {
      id: "skin"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M12.5112,54.6969c-1.1821-1.3451-2.3342-3.0456-2.2442-4.012l2.6885-18.4595 c0-0.8427,0.1873-1.5918,1.0708-2.0703l16.3478-8.2712c0.5202-0.2526-1.2442-2.812,4.2487-0.4575"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M20.5423,40.4964l0.659-3.9539c0.0669-0.5425,0.6064-1.3509,0.9989-1.5091l2.1077-0.8445"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M21.943,53.1389c2.3774,7.0276,10.894,6.7402,5.0421-2.1684"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M23.4274,51.9706c4.8738,8.5664,15.5709,8.7109,6.3068-4.2992"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M28.1211,49.2805c13.3104,17.7473,14.1027,4.4061,5.0706-1.307"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#FCEA2B",
      d: "M56.7973,52.2387c-13.0477,2.7879-14.9603-3.4116-21.2146-4.3521 c-5.087-1.0545-10.7889,2.251-12.7396,3.8613c-4.4436,4.2833-10.2629-1.5712-4.7642-5.6889l7.2546-6.7291l8.2677-3.938 l7.8137-10.3699L60.054,35.0334c5.6531,5.6531,5.6531,14.8187,0,20.4719C55.5271,56,47.5057,59.6859,36.5,58.1731"
    }), /*#__PURE__*/React.createElement("polygon", {
      fill: "#FCEA2B",
      points: "38.1318,42.8737 16.516,42.8737 25.1355,35.4801 26.0625,36.581 34.088,35.1123 40.7208,23.534 44.2882,25.4333"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "32.059",
      y: "45.907",
      width: "21.4808",
      height: "11.2677",
      fill: "#FCEA2B"
    })), /*#__PURE__*/React.createElement("g", {
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
      d: "M10.6323,52.6212l2.3232-20.3958c0-0.8427,0.1873-1.5918,1.0708-2.0703l17.1784-8.7194"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.5423,39.4964l0.659-3.9539c0.0669-0.5425,0.6064-1.3509,0.9989-1.5091l2.1077-0.8445"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "26.0625,35.7879 45.9,6.2368 50.2011,9.0841 33.7304,34.1889"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "15.5519,56.7748 13.5163,59.5388 8.7396,64.8728 11.4942,58 13.534,54.9614"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7044,26.2517c0,0,12.6258,6.0141,16.3497,8.7817c6.4166,4.769,5.6531,14.8187,0,20.4719 c-4.527,0.4947-8.1479,2.0335-18.2172,2.0335"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.078,55.9386 c0.6067,3.2292-4.422,4.7876-5.0939,0.133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0112,55.7907 c0.6388,3.2142-4.2872,4.1327-4.9332,0.1478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.0495,55.3947 c0.6599,3.2167-4.3629,3.6515-5.0383,0.396"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.0495",
      x2: "38.456",
      y1: "55.3947",
      y2: "52.6134",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.0112",
      x2: "33.0091",
      y1: "55.7907",
      y2: "51.2344",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.078",
      x2: "28.4548",
      y1: "55.9386",
      y2: "52.8617",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.9842",
      x2: "23.8906",
      y1: "56.0715",
      y2: "55.3947",
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
      d: "M56.7973,52.2387c-13.0477,2.7879-14.9603-3.4116-21.2146-4.3521c-5.087-1.0545-10.7889,2.251-12.7396,3.8613 c-4.4436,4.2833-10.2629-1.5712-4.7642-5.6889c0,0,5.0087-4.6922,7.2546-5.7291c2.183-1.0079,9.5516-2.1251,9.5516-2.1251"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      version: "1.1",
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
      d: "M10.6323,52.6212l2.3232-20.3958c0-0.8427,0.1873-1.5918,1.0708-2.0703l17.1784-8.7194"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M19.5423,39.4964l0.659-3.9539c0.0669-0.5425,0.6064-1.3509,0.9989-1.5091l2.1077-0.8445"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "26.0625,35.7879 45.9,6.2368 50.2011,9.0841 33.7304,34.1889"
    }), /*#__PURE__*/React.createElement("polyline", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      points: "15.5519,56.7748 13.5163,59.5388 8.7396,64.8728 11.4942,58 13.534,54.9614"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M43.7044,26.2517c0,0,12.6258,6.0141,16.3497,8.7817c6.4166,4.769,5.6531,14.8187,0,20.4719 c-4.527,0.4947-8.1479,2.0335-18.2172,2.0335"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M29.078,55.9386 c0.6067,3.2292-4.422,4.7876-5.0939,0.133"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.0112,55.7907 c0.6388,3.2142-4.2872,4.1327-4.9332,0.1478"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M39.0495,55.3947 c0.6599,3.2167-4.3629,3.6515-5.0383,0.396"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "39.0495",
      x2: "38.456",
      y1: "55.3947",
      y2: "52.6134",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "34.0112",
      x2: "33.0091",
      y1: "55.7907",
      y2: "51.2344",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "29.078",
      x2: "28.4548",
      y1: "55.9386",
      y2: "52.8617",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "23.9842",
      x2: "23.8906",
      y1: "56.0715",
      y2: "55.3947",
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
      d: "M56.7973,52.2387c-13.0477,2.7879-14.9603-3.4116-21.2146-4.3521c-5.087-1.0545-10.7889,2.251-12.7396,3.8613 c-4.4436,4.2833-10.2629-1.5712-4.7642-5.6889c0,0,5.0087-4.6922,7.2546-5.7291c2.183-1.0079,9.5516-2.1251,9.5516-2.1251"
    })));
  }
};

export default WritingHand;