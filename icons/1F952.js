import React from 'react';

const Cucumber = ({
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
      fill: "#B1CC33",
      stroke: "none",
      d: "M61.0046,26.7496c0,1.5083-1.2175,2.7168-2.7076,2.7168c-0.1181,0-0.2271,0-0.3362-0.0273\tc-0.4998,3.6162-1.5537,7.087-3.0893,10.2762c1.0994,0.6724,1.4537,2.108,0.7814,3.2165c-0.6269,1.0812-1.9898,1.4537-3.0892,0.8904\tc-1.79,2.744-3.9524,5.2153-6.4238,7.3505c0.3634,0.4634,0.5451,1.0086,0.5451,1.6173c0,1.5082-1.2266,2.7167-2.7167,2.7167\tc-0.9086,0-1.6809-0.427-2.1716-1.0812c-1.5173,0.954-3.1256,1.799-4.7792,2.5077c0.2181,0.3907,0.3544,0.8268,0.3544,1.3084\tc0,1.4992-1.2175,2.7167-2.7349,2.7167c-1.3447,0-2.4805-0.9994-2.6713-2.2987c-2.644,0.6905-5.4334,1.0812-8.2773,1.1357\tc-0.209,0.009-0.4089,0.009-0.6178,0.009c-0.1999,0-0.4089,0-0.6087-0.009c-0.5179-0.0273-1.0267-0.0909-1.5264-0.1908h-0.0091\tc-0.0091,0.0091-0.0091,0.0091-0.0182,0.0091c-0.0091-0.0091-0.0091-0.0091-0.0091-0.0091\tc-0.0636-0.0091-0.1181-0.0182-0.1726-0.0273c-0.0091,0-0.0091,0-0.0181-0.009c-0.2362-0.0455-0.4725-0.1-0.7087-0.1636\tc-0.1454-0.0363-0.2999-0.0817-0.4543-0.1363c-0.0817-0.0091-0.1544-0.0364-0.2362-0.0727\tc-0.1454-0.0454-0.2908-0.0908-0.427-0.1454c-0.2999-0.109-0.5906-0.2271-0.8814-0.3726c-0.1726-0.0726-0.3453-0.1544-0.5088-0.2453\tc-0.0363-0.0091-0.0636-0.0273-0.0908-0.0455c-0.1635-0.0817-0.3271-0.1726-0.4816-0.2726\tc-0.1363-0.0727-0.2544-0.1544-0.3816-0.2362c-0.1817-0.109-0.3544-0.2271-0.527-0.3543c-2.0352-1.5628-3.4981-3.9524-3.4981-3.9524\tc-0.954-1.7173-1.4992-3.7161-1.4992-5.8423c0-6.6418,5.388-12.048,12.0298-12.0571c-0.0817-0.2362-0.1181-0.4724-0.1181-0.7269\tc0-1.5173,1.2175-2.7167,2.7258-2.7167c1.3084,0,2.4077,0.9268,2.6713,2.1716c4.9064-1.5628,11.521-4.8156,11.521-10.9577\tc0-5.0518,4.1341-9.1496,9.2222-9.1496c4.6884,0,8.5499,3.4618,9.1314,7.9502c0.0455,0.5179,0.0727,1.0358,0.0727,1.5719v0.209\th0.0273C59.7871,24.0238,61.0046,25.2505,61.0046,26.7496z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#5C9E31",
      stroke: "none",
      d: "M61.156,26.7496c0,1.5083-1.2175,2.7168-2.7076,2.7168c-0.1181,0-0.2271,0-0.3362-0.0273\tc-0.4998,3.6162-1.5537,7.087-3.0893,10.2762c1.0994,0.6724,1.4537,2.108,0.7814,3.2165c-0.6269,1.0812-1.9898,1.4537-3.0892,0.8904\tc-1.79,2.744-3.9524,5.2153-6.4238,7.3505c0.3634,0.4634,0.5451,1.0086,0.5451,1.6173c0,1.5082-1.2266,2.7167-2.7167,2.7167\tc-0.9086,0-1.6809-0.427-2.1716-1.0812c-1.5173,0.954-3.1256,1.799-4.7792,2.5077c0.2181,0.3907,0.3544,0.8268,0.3544,1.3084\tc0,1.4992-1.2175,2.7167-2.7349,2.7167c-1.3447,0-2.4804-0.9994-2.6713-2.2987c-2.644,0.6905-5.4334,1.0812-8.2773,1.1357\tc-0.209,0.009-0.4089,0.009-0.6178,0.009c-0.1999,0-0.4089,0-0.6087-0.009c-0.5179-0.0273-7.2203-2.8076-7.7201-2.9075\tc24.6078,4.1644,52.0172-27.8636,34.3238-42.595c0,0,8.5499,3.4618,9.1314,7.9502c0.0455,0.5179,0.0727,1.0358,0.0727,1.5719v0.209\th0.0273C59.9385,24.0238,61.156,25.2505,61.156,26.7496z"
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
      strokeWidth: "2",
      d: "M61.0046,26.7496c0,1.5083-1.2175,2.7168-2.7076,2.7168c-0.1181,0-0.2271,0-0.3362-0.0273\tc-0.4998,3.6162-1.5537,7.087-3.0893,10.2762c1.0994,0.6724,1.4537,2.108,0.7814,3.2165c-0.6269,1.0812-1.9898,1.4537-3.0892,0.8904\tc-1.79,2.744-3.9524,5.2153-6.4238,7.3505c0.3634,0.4634,0.5451,1.0086,0.5451,1.6173c0,1.5082-1.2266,2.7167-2.7167,2.7167\tc-0.9086,0-1.6809-0.427-2.1716-1.0812c-1.5173,0.954-3.1256,1.799-4.7792,2.5077c0.2181,0.3907,0.3544,0.8268,0.3544,1.3084\tc0,1.4992-1.2175,2.7167-2.7349,2.7167c-1.3447,0-2.4805-0.9994-2.6713-2.2987c-2.644,0.6905-5.4334,1.0812-8.2773,1.1357\tc-0.209,0.009-0.4089,0.009-0.6178,0.009c-0.1999,0-0.4089,0-0.6087-0.009c-0.5179-0.0273-1.0267-0.0909-1.5264-0.1908h-0.0091\tc-0.0091,0.0091-0.0091,0.0091-0.0182,0.0091c-0.0091-0.0091-0.0091-0.0091-0.0091-0.0091\tc-0.0636-0.0091-0.1181-0.0182-0.1726-0.0273c-0.0091,0-0.0091,0-0.0181-0.009c-0.2362-0.0455-0.4725-0.1-0.7087-0.1636\tc-0.1454-0.0363-0.2999-0.0817-0.4543-0.1363c-0.0817-0.0091-0.1544-0.0364-0.2362-0.0727\tc-0.1454-0.0454-0.2908-0.0908-0.427-0.1454c-0.2999-0.109-0.5906-0.2271-0.8814-0.3726c-0.1726-0.0726-0.3453-0.1544-0.5088-0.2453\tc-0.0363-0.0091-0.0636-0.0273-0.0908-0.0455c-0.1635-0.0817-0.3271-0.1726-0.4816-0.2726\tc-0.1363-0.0727-0.2544-0.1544-0.3816-0.2362c-0.1817-0.109-0.3544-0.2271-0.527-0.3543c-2.0352-1.5628-3.4981-3.9524-3.4981-3.9524\tc-0.954-1.7173-1.4992-3.7161-1.4992-5.8423c0-6.6418,5.388-12.048,12.0298-12.0571c-0.0817-0.2362-0.1181-0.4724-0.1181-0.7269\tc0-1.5173,1.2175-2.7167,2.7258-2.7167c1.3084,0,2.4077,0.9268,2.6713,2.1716c4.9064-1.5628,11.521-4.8156,11.521-10.9577\tc0-5.0518,4.1341-9.1496,9.2222-9.1496c4.6884,0,8.5499,3.4618,9.1314,7.9502c0.0455,0.5179,0.0727,1.0358,0.0727,1.5719v0.209\th0.0273C59.7871,24.0238,61.0046,25.2505,61.0046,26.7496z"
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
      d: "M61.0046,26.7496c0,1.5083-1.2175,2.7168-2.7076,2.7168c-0.1181,0-0.2271,0-0.3362-0.0273\tc-0.4998,3.6162-1.5537,7.087-3.0893,10.2762c1.0994,0.6724,1.4537,2.108,0.7814,3.2165c-0.6269,1.0812-1.9898,1.4537-3.0892,0.8904\tc-1.79,2.744-3.9524,5.2153-6.4238,7.3505c0.3634,0.4634,0.5451,1.0086,0.5451,1.6173c0,1.5082-1.2266,2.7167-2.7167,2.7167\tc-0.9086,0-1.6809-0.427-2.1716-1.0812c-1.5173,0.954-3.1256,1.799-4.7792,2.5077c0.2181,0.3907,0.3544,0.8268,0.3544,1.3084\tc0,1.4992-1.2175,2.7167-2.7349,2.7167c-1.3447,0-2.4805-0.9994-2.6713-2.2987c-2.644,0.6905-5.4334,1.0812-8.2773,1.1357\tc-0.209,0.009-0.4089,0.009-0.6178,0.009c-0.1999,0-0.4089,0-0.6087-0.009c-0.5179-0.0273-1.0267-0.0909-1.5264-0.1908h-0.0091\tc-0.0091,0.0091-0.0091,0.0091-0.0182,0.0091c-0.0091-0.0091-0.0091-0.0091-0.0091-0.0091\tc-0.0636-0.0091-0.1181-0.0182-0.1726-0.0273c-0.0091,0-0.0091,0-0.0181-0.009c-0.2362-0.0455-0.4725-0.1-0.7087-0.1636\tc-0.1454-0.0363-0.2999-0.0817-0.4543-0.1363c-0.0817-0.0091-0.1544-0.0364-0.2362-0.0727\tc-0.1454-0.0454-0.2908-0.0908-0.427-0.1454c-0.2999-0.109-0.5906-0.2271-0.8814-0.3726c-0.1726-0.0726-0.3453-0.1544-0.5088-0.2453\tc-0.0363-0.0091-0.0636-0.0273-0.0908-0.0455c-0.1635-0.0817-0.3271-0.1726-0.4816-0.2726\tc-0.1363-0.0727-0.2544-0.1544-0.3816-0.2362c-0.1817-0.109-0.3544-0.2271-0.527-0.3543c-2.0352-1.5628-3.4981-3.9524-3.4981-3.9524\tc-0.954-1.7173-1.4992-3.7161-1.4992-5.8423c0-6.6418,5.388-12.048,12.0298-12.0571c-0.0817-0.2362-0.1181-0.4724-0.1181-0.7269\tc0-1.5173,1.2175-2.7167,2.7258-2.7167c1.3084,0,2.4077,0.9268,2.6713,2.1716c4.9064-1.5628,11.521-4.8156,11.521-10.9577\tc0-5.0518,4.1341-9.1496,9.2222-9.1496c4.6884,0,8.5499,3.4618,9.1314,7.9502c0.0455,0.5179,0.0727,1.0358,0.0727,1.5719v0.209\th0.0273C59.7871,24.0238,61.0046,25.2505,61.0046,26.7496z"
    })));
  }
};

export default Cucumber;