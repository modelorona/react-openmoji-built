import React from 'react';

const HotBeverage = ({
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
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M39.06 20.6179L38.3551 19.9086L38.3529 19.9108L39.06 20.6179ZM39.0714 13.5355L38.3643 14.2426L39.0714 13.5355ZM31.2932 12.8284C30.9027 13.2189 30.9027 13.8521 31.2932 14.2426C31.6838 14.6331 32.3169 14.6331 32.7075 14.2426L31.2932 12.8284ZM36.243 13.5355L35.5359 14.2426V14.2426L36.243 13.5355ZM36.243 17.7782L35.5359 17.071V17.071L36.243 17.7782ZM32.7896 21.2316L33.4944 21.9409L33.4967 21.9387L32.7896 21.2316ZM32.7782 21.2429L33.4853 21.95L33.4853 21.95L32.7782 21.2429ZM32.7782 28.314L32.0711 29.0211L32.7782 28.314ZM40.5564 29.0211C40.9469 28.6306 40.9469 27.9974 40.5564 27.6069C40.1658 27.2164 39.5327 27.2164 39.1421 27.6069L40.5564 29.0211ZM35.6066 28.314L36.3137 27.6069H36.3137L35.6066 28.314ZM35.6066 24.0714L36.3137 24.7785L35.6066 24.0714ZM39.765 21.3272C39.7694 21.3228 39.774 21.3182 39.7785 21.3137L38.3643 19.8995C38.3613 19.9025 38.3582 19.9055 38.3551 19.9086L39.765 21.3272ZM39.7785 21.3137C42.1217 18.9705 42.1217 15.1715 39.7785 12.8284L38.3643 14.2426C39.9264 15.8047 39.9264 18.3374 38.3643 19.8995L39.7785 21.3137ZM39.7785 12.8284C37.4354 10.4853 33.6364 10.4853 31.2932 12.8284L32.7075 14.2426C34.2696 12.6805 36.8022 12.6805 38.3643 14.2426L39.7785 12.8284ZM32.7075 14.2426C33.4885 13.4616 34.7548 13.4616 35.5359 14.2426L36.9501 12.8284C35.388 11.2663 32.8553 11.2663 31.2932 12.8284L32.7075 14.2426ZM35.5359 14.2426C36.3169 15.0237 36.3169 16.29 35.5359 17.071L36.9501 18.4853C38.5122 16.9232 38.5122 14.3905 36.9501 12.8284L35.5359 14.2426ZM35.5359 17.071L32.0825 20.5245L33.4967 21.9387L36.9501 18.4853L35.5359 17.071ZM32.0847 20.5222C32.0802 20.5267 32.0756 20.5313 32.0711 20.5358L33.4853 21.95C33.4883 21.947 33.4914 21.944 33.4944 21.9409L32.0847 20.5222ZM32.0711 20.5358C29.7279 22.879 29.7279 26.678 32.0711 29.0211L33.4853 27.6069C31.9232 26.0448 31.9232 23.5121 33.4853 21.95L32.0711 20.5358ZM32.0711 29.0211C34.4142 31.3642 38.2132 31.3642 40.5564 29.0211L39.1421 27.6069C37.58 29.169 35.0474 29.169 33.4853 27.6069L32.0711 29.0211ZM39.1421 27.6069C38.3611 28.3879 37.0948 28.3879 36.3137 27.6069L34.8995 29.0211C36.4616 30.5832 38.9943 30.5832 40.5564 29.0211L39.1421 27.6069ZM36.3137 27.6069C35.5327 26.8258 35.5327 25.5595 36.3137 24.7785L34.8995 23.3642C33.3374 24.9263 33.3374 27.459 34.8995 29.0211L36.3137 27.6069ZM36.3137 24.7785L39.7671 21.325L38.3529 19.9108L34.8995 23.3642L36.3137 24.7785Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "color"
    }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M36 52C45.9411 52 54 43.9411 54 34H18C18 43.9411 26.0589 52 36 52Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      d: "M54 34H55C55 33.4477 54.5523 33 54 33V34ZM18 34V33C17.4477 33 17 33.4477 17 34H18ZM53 34C53 43.3888 45.3888 51 36 51V53C46.4934 53 55 44.4934 55 34H53ZM18 35H54V33H18V35ZM36 51C26.6112 51 19 43.3888 19 34H17C17 44.4934 25.5066 53 36 53V51Z"
    })), /*#__PURE__*/React.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M15.8703 55C15.5914 55 15.3245 54.8842 15.1384 54.6765C14.238 53.6714 13.4091 52.6009 12.6599 51.4729C12.2337 50.8314 12.7094 50 13.4796 50H58.5203C59.2905 50 59.7662 50.8314 59.34 51.4729C58.5908 52.6009 57.7619 53.6714 56.8615 54.6765C56.6754 54.8842 56.4085 55 56.1297 55H15.8703Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      "fill-rule": "evenodd",
      d: "M48.0399 50C48.7653 50 49.2472 50.7475 48.9166 51.3931C48.3424 52.5144 47.7073 53.5794 47.0174 54.5803C46.8345 54.8455 46.5311 55 46.209 55H56.1296C56.4085 55 56.6754 54.8842 56.8615 54.6765C57.7619 53.6714 58.5907 52.6009 59.34 51.4729C59.7662 50.8314 59.2905 50 58.5203 50H48.0399Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      "fill-rule": "evenodd",
      d: "M44.2544 50C50.0431 47.0075 54 40.9659 54 34H47C47 40.9659 44.5819 47.0075 41.0444 50H44.2544Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M54 34H55V33H54V34ZM44.2544 50V51H44.4976L44.7136 50.8883L44.2544 50ZM47 34V33H46V34H47ZM41.0444 50L40.3985 49.2365L38.3138 51H41.0444V50ZM53 34C53 40.5774 49.2648 46.2842 43.7952 49.1117L44.7136 50.8883C50.8214 47.7309 55 41.3543 55 34H53ZM47 35H54V33H47V35ZM41.6902 50.7635C45.5261 47.5186 48 41.1473 48 34H46C46 40.7844 43.6377 46.4965 40.3985 49.2365L41.6902 50.7635ZM44.2544 49H41.0444V51H44.2544V49Z"
    })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      "fill-rule": "evenodd",
      d: "M39.06 20.618C39.0638 20.6142 39.0676 20.6104 39.0714 20.6066C41.024 18.654 41.024 15.4882 39.0714 13.5355C37.1188 11.5829 33.953 11.5829 32.0004 13.5355C33.1719 12.364 35.0714 12.364 36.243 13.5355C37.4146 14.7071 37.4146 16.6066 36.243 17.7782L32.7896 21.2316C32.7858 21.2354 32.782 21.2392 32.7782 21.243C30.8256 23.1956 30.8256 26.3614 32.7782 28.314C34.7308 30.2666 37.8966 30.2666 39.8493 28.314C38.6777 29.4856 36.7782 29.4856 35.6066 28.314C34.435 27.1424 34.435 25.243 35.6066 24.0714L39.06 20.618Z",
      "clip-rule": "evenodd"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#D0CFCE",
      d: "M39.06 20.618L38.3551 19.9087L38.3529 19.9109L39.06 20.618ZM39.0714 13.5355L38.3643 14.2426L39.0714 13.5355ZM31.2932 12.8284C30.9027 13.219 30.9027 13.8521 31.2932 14.2426C31.6838 14.6332 32.3169 14.6332 32.7075 14.2426L31.2932 12.8284ZM36.243 13.5355L35.5359 14.2426V14.2426L36.243 13.5355ZM36.243 17.7782L35.5359 17.0711V17.0711L36.243 17.7782ZM32.7896 21.2316L33.4944 21.941L33.4967 21.9387L32.7896 21.2316ZM32.7782 21.243L33.4853 21.9501L33.4853 21.9501L32.7782 21.243ZM32.7782 28.314L32.0711 29.0211L32.7782 28.314ZM40.5564 29.0211C40.9469 28.6306 40.9469 27.9974 40.5564 27.6069C40.1658 27.2164 39.5327 27.2164 39.1421 27.6069L40.5564 29.0211ZM35.6066 28.314L36.3137 27.6069H36.3137L35.6066 28.314ZM35.6066 24.0714L36.3137 24.7785L35.6066 24.0714ZM39.765 21.3272C39.7694 21.3228 39.774 21.3183 39.7785 21.3137L38.3643 19.8995C38.3613 19.9025 38.3582 19.9056 38.3551 19.9087L39.765 21.3272ZM39.7785 21.3137C42.1217 18.9706 42.1217 15.1716 39.7785 12.8284L38.3643 14.2426C39.9264 15.8047 39.9264 18.3374 38.3643 19.8995L39.7785 21.3137ZM39.7785 12.8284C37.4354 10.4853 33.6364 10.4853 31.2932 12.8284L32.7075 14.2426C34.2696 12.6806 36.8022 12.6806 38.3643 14.2426L39.7785 12.8284ZM32.7075 14.2426C33.4885 13.4616 34.7548 13.4616 35.5359 14.2426L36.9501 12.8284C35.388 11.2663 32.8553 11.2663 31.2932 12.8284L32.7075 14.2426ZM35.5359 14.2426C36.3169 15.0237 36.3169 16.29 35.5359 17.0711L36.9501 18.4853C38.5122 16.9232 38.5122 14.3905 36.9501 12.8284L35.5359 14.2426ZM35.5359 17.0711L32.0825 20.5245L33.4967 21.9387L36.9501 18.4853L35.5359 17.0711ZM32.0847 20.5222C32.0802 20.5268 32.0756 20.5313 32.0711 20.5359L33.4853 21.9501C33.4883 21.947 33.4914 21.944 33.4944 21.941L32.0847 20.5222ZM32.0711 20.5358C29.7279 22.879 29.7279 26.678 32.0711 29.0211L33.4853 27.6069C31.9232 26.0448 31.9232 23.5122 33.4853 21.9501L32.0711 20.5358ZM32.0711 29.0211C34.4142 31.3643 38.2132 31.3643 40.5564 29.0211L39.1421 27.6069C37.58 29.169 35.0474 29.169 33.4853 27.6069L32.0711 29.0211ZM39.1421 27.6069C38.3611 28.388 37.0948 28.388 36.3137 27.6069L34.8995 29.0211C36.4616 30.5832 38.9943 30.5832 40.5564 29.0211L39.1421 27.6069ZM36.3137 27.6069C35.5327 26.8259 35.5327 25.5595 36.3137 24.7785L34.8995 23.3643C33.3374 24.9264 33.3374 27.459 34.8995 29.0211L36.3137 27.6069ZM36.3137 24.7785L39.7671 21.3251L38.3529 19.9109L34.8995 23.3643L36.3137 24.7785Z"
    }))), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24 47.4166C20.3175 44.1207 18 39.331 18 34H54C54 39.331 51.6825 44.1207 48 47.4166"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M56.8615 54.6765L56.1167 54.0092L56.8615 54.6765ZM59.34 51.4729L60.173 52.0262L59.34 51.4729ZM15.1384 54.6765L14.3936 55.3437L15.1384 54.6765ZM15.8832 54.0092C15.0148 53.0398 14.2154 52.0073 13.4929 50.9196L11.8269 52.0262C12.6029 53.1944 13.4612 54.303 14.3936 55.3437L15.8832 54.0092ZM13.4796 51H58.5203V49H13.4796V51ZM58.5071 50.9196C57.7845 52.0073 56.9851 53.0398 56.1167 54.0092L57.6063 55.3437C58.5387 54.303 59.397 53.1944 60.173 52.0262L58.5071 50.9196ZM56.1297 54H15.8703V56H56.1297V54ZM56.1167 54.0092C56.1209 54.0045 56.1252 54.0019 56.1277 54.0008C56.13 53.9998 56.1307 54 56.1297 54V56C56.6844 56 57.225 55.7693 57.6063 55.3437L56.1167 54.0092ZM58.5203 51C58.5261 51 58.5272 51.0007 58.5252 51.0001C58.5233 50.9996 58.5206 50.9985 58.5178 50.9969C58.5128 50.9938 58.5095 50.9902 58.5071 50.9859C58.5046 50.9814 58.4999 50.9704 58.5002 50.9525C58.5004 50.9435 58.5019 50.9347 58.5042 50.9273C58.5066 50.9198 58.5087 50.9171 58.5071 50.9196L60.173 52.0262C61.0716 50.6735 60.032 49 58.5203 49V51ZM13.4929 50.9196C13.4912 50.9171 13.4933 50.9198 13.4957 50.9273C13.498 50.9347 13.4995 50.9435 13.4997 50.9525C13.5 50.9704 13.4953 50.9814 13.4928 50.9859C13.4904 50.9902 13.4871 50.9938 13.4821 50.9968C13.4793 50.9985 13.4766 50.9996 13.4747 51.0001C13.4727 51.0007 13.4738 51 13.4796 51V49C11.9679 49 10.9283 50.6735 11.8269 52.0262L13.4929 50.9196ZM14.3936 55.3437C14.7749 55.7693 15.3155 56 15.8703 56V54C15.8692 54 15.8699 53.9998 15.8722 54.0008C15.8747 54.0019 15.879 54.0045 15.8832 54.0092L14.3936 55.3437Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M51 45H55.5C58.5376 45 61 42.5376 61 39.5C61 36.4624 58.5376 34 55.5 34H53"
    })));
  } else {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      id: "emoji",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("g", {
      id: "line-supplement"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M39.06 20.6179L38.3551 19.9086L38.3529 19.9108L39.06 20.6179ZM39.0714 13.5355L38.3643 14.2426L39.0714 13.5355ZM31.2932 12.8284C30.9027 13.2189 30.9027 13.8521 31.2932 14.2426C31.6838 14.6331 32.3169 14.6331 32.7075 14.2426L31.2932 12.8284ZM36.243 13.5355L35.5359 14.2426V14.2426L36.243 13.5355ZM36.243 17.7782L35.5359 17.071V17.071L36.243 17.7782ZM32.7896 21.2316L33.4944 21.9409L33.4967 21.9387L32.7896 21.2316ZM32.7782 21.2429L33.4853 21.95L33.4853 21.95L32.7782 21.2429ZM32.7782 28.314L32.0711 29.0211L32.7782 28.314ZM40.5564 29.0211C40.9469 28.6306 40.9469 27.9974 40.5564 27.6069C40.1658 27.2164 39.5327 27.2164 39.1421 27.6069L40.5564 29.0211ZM35.6066 28.314L36.3137 27.6069H36.3137L35.6066 28.314ZM35.6066 24.0714L36.3137 24.7785L35.6066 24.0714ZM39.765 21.3272C39.7694 21.3228 39.774 21.3182 39.7785 21.3137L38.3643 19.8995C38.3613 19.9025 38.3582 19.9055 38.3551 19.9086L39.765 21.3272ZM39.7785 21.3137C42.1217 18.9705 42.1217 15.1715 39.7785 12.8284L38.3643 14.2426C39.9264 15.8047 39.9264 18.3374 38.3643 19.8995L39.7785 21.3137ZM39.7785 12.8284C37.4354 10.4853 33.6364 10.4853 31.2932 12.8284L32.7075 14.2426C34.2696 12.6805 36.8022 12.6805 38.3643 14.2426L39.7785 12.8284ZM32.7075 14.2426C33.4885 13.4616 34.7548 13.4616 35.5359 14.2426L36.9501 12.8284C35.388 11.2663 32.8553 11.2663 31.2932 12.8284L32.7075 14.2426ZM35.5359 14.2426C36.3169 15.0237 36.3169 16.29 35.5359 17.071L36.9501 18.4853C38.5122 16.9232 38.5122 14.3905 36.9501 12.8284L35.5359 14.2426ZM35.5359 17.071L32.0825 20.5245L33.4967 21.9387L36.9501 18.4853L35.5359 17.071ZM32.0847 20.5222C32.0802 20.5267 32.0756 20.5313 32.0711 20.5358L33.4853 21.95C33.4883 21.947 33.4914 21.944 33.4944 21.9409L32.0847 20.5222ZM32.0711 20.5358C29.7279 22.879 29.7279 26.678 32.0711 29.0211L33.4853 27.6069C31.9232 26.0448 31.9232 23.5121 33.4853 21.95L32.0711 20.5358ZM32.0711 29.0211C34.4142 31.3642 38.2132 31.3642 40.5564 29.0211L39.1421 27.6069C37.58 29.169 35.0474 29.169 33.4853 27.6069L32.0711 29.0211ZM39.1421 27.6069C38.3611 28.3879 37.0948 28.3879 36.3137 27.6069L34.8995 29.0211C36.4616 30.5832 38.9943 30.5832 40.5564 29.0211L39.1421 27.6069ZM36.3137 27.6069C35.5327 26.8258 35.5327 25.5595 36.3137 24.7785L34.8995 23.3642C33.3374 24.9263 33.3374 27.459 34.8995 29.0211L36.3137 27.6069ZM36.3137 24.7785L39.7671 21.325L38.3529 19.9108L34.8995 23.3642L36.3137 24.7785Z"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M24 47.4166C20.3175 44.1207 18 39.331 18 34H54C54 39.331 51.6825 44.1207 48 47.4166"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#000",
      d: "M56.8615 54.6765L56.1167 54.0092L56.8615 54.6765ZM59.34 51.4729L60.173 52.0262L59.34 51.4729ZM15.1384 54.6765L14.3936 55.3437L15.1384 54.6765ZM15.8832 54.0092C15.0148 53.0398 14.2154 52.0073 13.4929 50.9196L11.8269 52.0262C12.6029 53.1944 13.4612 54.303 14.3936 55.3437L15.8832 54.0092ZM13.4796 51H58.5203V49H13.4796V51ZM58.5071 50.9196C57.7845 52.0073 56.9851 53.0398 56.1167 54.0092L57.6063 55.3437C58.5387 54.303 59.397 53.1944 60.173 52.0262L58.5071 50.9196ZM56.1297 54H15.8703V56H56.1297V54ZM56.1167 54.0092C56.1209 54.0045 56.1252 54.0019 56.1277 54.0008C56.13 53.9998 56.1307 54 56.1297 54V56C56.6844 56 57.225 55.7693 57.6063 55.3437L56.1167 54.0092ZM58.5203 51C58.5261 51 58.5272 51.0007 58.5252 51.0001C58.5233 50.9996 58.5206 50.9985 58.5178 50.9969C58.5128 50.9938 58.5095 50.9902 58.5071 50.9859C58.5046 50.9814 58.4999 50.9704 58.5002 50.9525C58.5004 50.9435 58.5019 50.9347 58.5042 50.9273C58.5066 50.9198 58.5087 50.9171 58.5071 50.9196L60.173 52.0262C61.0716 50.6735 60.032 49 58.5203 49V51ZM13.4929 50.9196C13.4912 50.9171 13.4933 50.9198 13.4957 50.9273C13.498 50.9347 13.4995 50.9435 13.4997 50.9525C13.5 50.9704 13.4953 50.9814 13.4928 50.9859C13.4904 50.9902 13.4871 50.9938 13.4821 50.9968C13.4793 50.9985 13.4766 50.9996 13.4747 51.0001C13.4727 51.0007 13.4738 51 13.4796 51V49C11.9679 49 10.9283 50.6735 11.8269 52.0262L13.4929 50.9196ZM14.3936 55.3437C14.7749 55.7693 15.3155 56 15.8703 56V54C15.8692 54 15.8699 53.9998 15.8722 54.0008C15.8747 54.0019 15.879 54.0045 15.8832 54.0092L14.3936 55.3437Z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M51 45H55.5C58.5376 45 61 42.5376 61 39.5C61 36.4624 58.5376 34 55.5 34H53"
    })));
  }
};

export default HotBeverage;