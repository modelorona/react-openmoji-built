import React from 'react';

const Sunflower = ({
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
      fill: "#FCEA2B",
      stroke: "none",
      d: "M43.2779,20.5208c0.2751-0.6458,1.4448-3.2894,1.915-3.8596c2.5924-3.1437,7.5403-3.3442,7.5403-3.3442 s0.7413,4.8964-1.8486,8.0389c-0.7005,0.8493-1.573,1.4837-2.4733,1.9575l-1.8646,0.8496 c0.8166-0.4354,3.5897-1.6339,4.5743-1.7568c4.0433-0.5046,7.7775,2.7478,7.7775,2.7478s-2.8239,4.0682-6.8647,4.5736 c-1.5043,0.1875-2.9658-0.1449-4.2082-0.6363l-1.5123-0.5623c1.0721,0.4001,3.6449,1.5619,4.525,2.46 c2.8519,2.9103,2.5281,7.8516,2.5281,7.8516s-4.9474,0.2194-7.7984-2.6884c-0.6293-0.6423-1.8855-3.7761-2.2431-4.5413 l0.7669,2.3973c0.2385,0.7124,0.3923,1.4743,0.4068,2.268c0.0742,4.074-3.5548,7.4433-3.5548,7.4433s-3.7467-3.2383-3.822-7.3099 c-0.0151-0.834,1.3468-4.7053,1.3468-4.7053l-1.1396,2.622c-1.7718,2.4884-4.5155,4.1433-7.5548,4.4487 c-0.9254,0.093-1.5437,0.0656-1.5437,0.0656s-0.3238-4.9413,2.5281-7.8516c0.8287-0.8457,1.8343-1.4269,2.844-1.8259l1.711-0.7108 c-0.0038,0.0015-4.3141,1.4544-5.7507,1.2753c-4.0408-0.5054-6.8647-4.5736-6.8647-4.5736s3.7341-3.2524,7.7775-2.7478 c0.8371,0.1045,3.8427,1.578,4.5608,1.9202l-2.2099-1.2115c-0.7715-0.4485-1.5076-1.0231-2.1146-1.759 c-2.59-3.1425-1.8486-8.0389-1.8486-8.0389s4.9479,0.2005,7.5403,3.3441c0.5013,0.6079,1.8537,3.2157,2.135,3.9064l-0.9102-1.9404 c-0.2945-0.7916-0.49-1.6496-0.5066-2.5482c-0.0737-4.0736,3.5548-7.4433,3.5548-7.4433s3.7478,3.2359,3.822,7.3099 c0.0163,0.8967-0.1467,1.7592-0.411,2.5592"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7923",
      cy: "26.177",
      r: "5",
      fill: "#F1B31C",
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M23.3647,38.9665c2.3438,2.8687,1.6469,7.3169,1.6469,7.3169s-4.4974-0.2037-6.8419-3.0725 s-1.6469-7.3169-1.6469-7.3169S21.0209,36.1001,23.3647,38.9665z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M36.6533,52.5013c2.8575-2.3347,7.2883-1.6405,7.2883-1.6405s-0.2029,4.4799-3.0605,6.8152 c-2.8575,2.3353-7.2883,1.6405-7.2883,1.6405S33.7981,54.836,36.6533,52.5013z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M25.9551,16.18"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#FFFFFF",
      strokeMiterlimit: "10",
      strokeWidth: "2",
      d: "M44.1915,16.0582"
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
      strokeMiterlimit: "10",
      d: "M65.7251,28.3957"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7923",
      cy: "26.177",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.8586,38.5631 c2.7895,3.4142,1.96,8.708,1.96,8.708s-5.3525-0.2425-8.1427-3.6566s-1.96-8.708-1.96-8.708S21.0691,35.1517,23.8586,38.5631z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M43.2779,20.5208 c0.2751-0.6458,1.4448-3.2894,1.915-3.8596c2.5924-3.1437,7.5403-3.3442,7.5403-3.3442s0.7413,4.8964-1.8486,8.0389 c-0.7005,0.8493-1.573,1.4837-2.4733,1.9575l-1.8646,0.8496c0.8166-0.4354,3.5897-1.6339,4.5743-1.7568 c4.0433-0.5046,7.7775,2.7478,7.7775,2.7478s-2.8239,4.0682-6.8647,4.5736c-1.5043,0.1875-2.9658-0.1449-4.2082-0.6363 l-1.5123-0.5623c1.0721,0.4001,3.6449,1.5619,4.525,2.46c2.8519,2.9103,2.5281,7.8516,2.5281,7.8516s-4.9474,0.2194-7.7984-2.6884 c-0.6293-0.6423-1.8855-3.7761-2.2431-4.5413l0.7669,2.3973c0.2385,0.7124,0.3923,1.4743,0.4068,2.268 c0.0742,4.074-3.5548,7.4433-3.5548,7.4433s-3.7467-3.2383-3.822-7.3099c-0.0151-0.834,1.3468-4.7053,1.3468-4.7053l-1.1396,2.622 c-1.7718,2.4884-4.5155,4.1433-7.5548,4.4487c-0.9254,0.093-1.5437,0.0656-1.5437,0.0656s-0.3238-4.9413,2.5281-7.8516 c0.8287-0.8457,1.8343-1.4269,2.844-1.8259l1.711-0.7108c-0.0038,0.0015-4.3141,1.4544-5.7507,1.2753 c-4.0408-0.5054-6.8647-4.5736-6.8647-4.5736s3.7341-3.2524,7.7775-2.7478c0.8371,0.1045,3.8427,1.578,4.5608,1.9202 l-2.2099-1.2115c-0.7715-0.4485-1.5076-1.0231-2.1146-1.759c-2.59-3.1425-1.8486-8.0389-1.8486-8.0389s4.9479,0.2005,7.5403,3.3441 c0.5013,0.6079,1.8537,3.2157,2.135,3.9064l-0.9102-1.9404c-0.2945-0.7916-0.49-1.6496-0.5066-2.5482 c-0.0737-4.0736,3.5548-7.4433,3.5548-7.4433s3.7478,3.2359,3.822,7.3099c0.0163,0.8967-0.1467,1.7592-0.411,2.5592"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2415,51.9973 c3.4142-2.7895,8.708-1.96,8.708-1.96s-0.2425,5.3525-3.6566,8.1427c-3.4142,2.7902-8.708,1.96-8.708,1.96 S32.8301,54.7868,36.2415,51.9973z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.3663,41.0292 c-3.438,3.548-7.676,10.246-5.829,20.735"
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
      strokeMiterlimit: "10",
      d: "M65.7251,28.3957"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "40.7923",
      cy: "26.177",
      r: "5",
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M23.8586,38.5631 c2.7895,3.4142,1.96,8.708,1.96,8.708s-5.3525-0.2425-8.1427-3.6566s-1.96-8.708-1.96-8.708S21.0691,35.1517,23.8586,38.5631z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M43.2779,20.5208 c0.2751-0.6458,1.4448-3.2894,1.915-3.8596c2.5924-3.1437,7.5403-3.3442,7.5403-3.3442s0.7413,4.8964-1.8486,8.0389 c-0.7005,0.8493-1.573,1.4837-2.4733,1.9575l-1.8646,0.8496c0.8166-0.4354,3.5897-1.6339,4.5743-1.7568 c4.0433-0.5046,7.7775,2.7478,7.7775,2.7478s-2.8239,4.0682-6.8647,4.5736c-1.5043,0.1875-2.9658-0.1449-4.2082-0.6363 l-1.5123-0.5623c1.0721,0.4001,3.6449,1.5619,4.525,2.46c2.8519,2.9103,2.5281,7.8516,2.5281,7.8516s-4.9474,0.2194-7.7984-2.6884 c-0.6293-0.6423-1.8855-3.7761-2.2431-4.5413l0.7669,2.3973c0.2385,0.7124,0.3923,1.4743,0.4068,2.268 c0.0742,4.074-3.5548,7.4433-3.5548,7.4433s-3.7467-3.2383-3.822-7.3099c-0.0151-0.834,1.3468-4.7053,1.3468-4.7053l-1.1396,2.622 c-1.7718,2.4884-4.5155,4.1433-7.5548,4.4487c-0.9254,0.093-1.5437,0.0656-1.5437,0.0656s-0.3238-4.9413,2.5281-7.8516 c0.8287-0.8457,1.8343-1.4269,2.844-1.8259l1.711-0.7108c-0.0038,0.0015-4.3141,1.4544-5.7507,1.2753 c-4.0408-0.5054-6.8647-4.5736-6.8647-4.5736s3.7341-3.2524,7.7775-2.7478c0.8371,0.1045,3.8427,1.578,4.5608,1.9202 l-2.2099-1.2115c-0.7715-0.4485-1.5076-1.0231-2.1146-1.759c-2.59-3.1425-1.8486-8.0389-1.8486-8.0389s4.9479,0.2005,7.5403,3.3441 c0.5013,0.6079,1.8537,3.2157,2.135,3.9064l-0.9102-1.9404c-0.2945-0.7916-0.49-1.6496-0.5066-2.5482 c-0.0737-4.0736,3.5548-7.4433,3.5548-7.4433s3.7478,3.2359,3.822,7.3099c0.0163,0.8967-0.1467,1.7592-0.411,2.5592"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M36.2415,51.9973 c3.4142-2.7895,8.708-1.96,8.708-1.96s-0.2425,5.3525-3.6566,8.1427c-3.4142,2.7902-8.708,1.96-8.708,1.96 S32.8301,54.7868,36.2415,51.9973z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "none",
      stroke: "#000000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M34.3663,41.0292 c-3.438,3.548-7.676,10.246-5.829,20.735"
    })));
  }
};

export default Sunflower;