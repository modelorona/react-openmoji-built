import React from 'react';

const SpoutingWhale = ({
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
      id: "color",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m22.3 44.828c0.62116 2.6752 1.8697 5.2427 3.5273 7.752 0.90598 1.3714 2.5825 0.78665 2.9766-0.8086 0.3406-0.88089 0.54173-1.8991 0.63282-2.959"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      strokeMiterlimit: "10",
      d: "m46.638 14.502c-0.69375 0.20563-0.99696 3.4163-0.94922 4.5234 0.13123 3.0431 5.2776 3.0916 2.8477 6.4004-10.496 11.84-26.393-3.7844-34.527 3.6602-1.2447 11.436 16.858 27.45 30.99 17.914 8.2058-5.537 10.459-14.795 11.082-20.096 0.44063-1.1459 1.4648-1.4028 3.2832-1.8984 5.1933-1.4603 4.9047-4.3002 4.9531-8.127-2.3585 2.8572-4.9069 1.8006-6.8223 1.7285-1.1068-0.004-2.1817 1.2444-2.8574 1.7949-0.0901-0.63086-0.22618-1.4757-0.83203-2.1777-1.5055-1.7445-4.947-0.75965-6.4004-2.877-0.2318-0.53526-0.43943-0.79209-0.62305-0.84571-0.0497-0.0145-0.0983-0.0137-0.14453 0z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#d0cfce",
      d: "m57 26.054-0.21093 0.0645-0.8086 1.4707c0.005-0.04 0.0143-0.0893 0.0195-0.12891v-0.041c-0.0185 0.0842-0.0415 0.16082-0.0605 0.24414l-1.4375 2.6152c-0.32488 1.4765-0.7974 3.0771-1.4277 4.7051-5.5366 8.8989-15.765 7.7844-22.539 3.2774-3.7744-2.5113-8.691-7.2733-11.914-7.6699-2.1209-0.26099-4.4794 1.0163-4.0644 3.1387l-0.73243 1.291c1.5312 4.4107 5.0009 8.6791 9.3711 11.699 6.3756 4.406 14.943 6.1214 22.389 1.0977 8.2808-5.5876 10.687-14.682 11.416-20.201v-1.5625z"
    }), /*#__PURE__*/React.createElement("path", {
      fill: "#61b2e4",
      d: "m35.89 40.827c0.52212 5.6188 3.5252 9.756 8.0055 13.242 1.2972 1.0094 2.6965-0.0816 2.5593-1.7191 0.18853-4.3613-2.6643-10.672-5.7064-10.677"
    })), /*#__PURE__*/React.createElement("g", {
      id: "line",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m19.455 13.84c-0.60501-0.05852-1.225 0.02574-1.8105 0.25195-1.1711 0.45243-2.2349 1.3801-3.2305 2.6895a1.0001 1.0001 0 1 0 1.5918 1.209c0.84851-1.1159 1.687-1.7735 2.3594-2.0332 0.67236-0.25974 1.1465-0.21155 1.7051 0.1582 1.1171 0.73951 2.4316 3.3282 2.8516 8a1.0001 1.0001 0 1 0 1.992 -0.177c-0.44453-4.9449-1.6394-8.1008-3.7383-9.4902-0.52471-0.34735-1.1157-0.5489-1.7207-0.60742z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m31.482 12.607c-0.58064-0.042-1.1664 0.02885-1.7383 0.22852-2.2876 0.79867-3.91 3.4604-4.0977 7.8066a1.0001 1.0001 0 1 0 1.998 0.08594c0.16828-3.8968 1.521-5.5714 2.7598-6.0039 1.2387-0.43247 2.7986 0.18985 3.9043 1.9863a1.0001 1.0001 0 1 0 1.7031 -1.0488c-1.095-1.78-2.787-2.928-4.529-3.054z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m23.621 9.8984a1.0001 1.0001 0 0 0 -0.9375 1.3086c0.23434 0.75994 0.47877 1.3276 0.52344 2.291a1.0001 1.0001 0 1 0 1.998 -0.0918c-0.05933-1.2798-0.41693-2.1587-0.61133-2.7891a1.0001 1.0001 0 0 0 -0.973 -0.7186z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m47.197 39.408a1.0001 1.0001 0 0 0 -0.45312 0.10156c-1.8686 0.87872-3.8974 1.2318-5.9609 1.166a1.0005 1.0005 0 1 0 -0.0625 2c2.3349 0.07443 4.6887-0.32934 6.875-1.3574a1.0001 1.0001 0 0 0 -0.39844 -1.9102z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m35.881 39.812a1.0001 1.0001 0 0 0 -0.98633 1.1074c0.55062 5.9255 3.7748 10.351 8.3867 13.939 0.92395 0.71896 2.1822 0.74704 3.0117 0.1582 0.81921-0.58152 1.2323-1.6077 1.1523-2.7109 0.0848-2.3988-0.60528-5.1302-1.7383-7.3789-0.573-1.136-1.258-2.147-2.066-2.918-0.809-0.772-1.785-1.332-2.891-1.334a1.0001 1.0001 0 1 0 -0.0039 2c0.41508 0.000772 0.93767 0.22972 1.5137 0.7793 0.576 0.54958 1.1634 1.3891 1.6602 2.375 0.99351 1.9718 1.6211 4.5361 1.5371 6.4785a1.0001 1.0001 0 0 0 0.002 0.12695c0.04343 0.51845-0.16406 0.83943-0.32422 0.95312s-0.25174 0.18498-0.625-0.10547c-4.349-3.384-7.13-7.236-7.623-12.548a1.0001 1.0001 0 0 0 -1.006 -0.922z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m18.742 29.598c-1.3102-0.16123-2.6473 0.12971-3.6934 0.85742s-1.7749 2.0657-1.4648 3.5254a1.0004 1.0004 0 1 0 1.957 -0.41602c-0.14637-0.68904 0.08536-1.0751 0.64844-1.4668 0.56308-0.39172 1.4832-0.61719 2.3086-0.51562 1.1912 0.14659 3.2104 1.3256 5.2793 2.8535s4.24 3.3501 6.2031 4.6562c1.6868 1.1223 3.5736 2.0425 5.5586 2.6719a1.0001 1.0001 0 1 0 0.60547 -1.9062c-1.7971-0.56986-3.5214-1.4095-5.0547-2.4297-1.8113-1.2051-3.9857-3.0197-6.125-4.5996s-4.1909-2.9804-6.2227-3.2305z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "m47.088 13.537c-0.22746-0.06636-0.48987-0.06298-0.70898 0.002a1.0001 1.0001 0 0 0 -0.56641 0.4355c-0.05501 0.06363-0.17767 0.10759-0.21875 0.16797-0.1475 0.2168-0.23961 0.4286-0.32031 0.65234-0.16141 0.44749-0.26733 0.94662-0.35156 1.4668-0.16847 1.0403-0.23662 2.1166-0.20703 2.8027 0.04492 1.0417 0.55371 1.8755 1.1172 2.4648 0.56348 0.58931 1.1829 1.0031 1.6367 1.3691 0.45379 0.36608 0.68125 0.65614 0.72656 0.82031 0.04379 0.15864 0.0323 0.43304-0.42383 1.0723-2.4573 2.7517-5.1138 3.8598-7.9922 4.1543-2.8939 0.29613-6.0153-0.27891-9.1367-1.0195-3.1214-0.74062-6.2292-1.6434-9.1758-1.8887-2.9465-0.24526-5.8277 0.21834-8.1094 2.3066a1.0001 1.0001 0 0 0 -0.31836 0.62891c-0.53279 4.8955 2.0932 10.255 6.252 14.473 4.1587 4.218 9.9272 7.3313 16.002 7.4531a1.0002 1.0002 0 1 0 0.03906 -2c-5.411-0.107-10.766-2.949-14.618-6.856-3.716-3.769-5.902-8.477-5.664-12.406 1.7232-1.4054 3.7526-1.8133 6.25-1.6055 2.6499 0.22057 5.6972 1.0888 8.8789 1.8438 3.1817 0.75494 6.5117 1.3995 9.8047 1.0625 3.293-0.33696 6.5447-1.716 9.3242-4.8516a1.0001 1.0001 0 0 0 0.05859 -0.07031c0.70787-0.96386 0.99617-1.9556 0.75586-2.8262-0.24031-0.87061-0.85297-1.4057-1.3984-1.8457-0.54547-0.44004-1.0848-0.8143-1.4473-1.1934-0.36244-0.37906-0.54376-0.69206-0.56445-1.1719-0.01815-0.42098 0.03896-1.5033 0.18359-2.3965 0.02429-0.14998 0.05926-0.23374 0.08789-0.37109 0.97887 1.0781 2.3142 1.4774 3.4375 1.6934 1.2548 0.24123 2.2067 0.45425 2.6523 0.9707 0.395 0.45773 0.50982 1.051 0.59766 1.666a1.0001 1.0001 0 0 0 1.623 0.63281c0.42358-0.34506 0.82902-0.76705 1.2461-1.0898 0.4154-0.32149 0.79355-0.47788 0.9707-0.47852 0.79079 0.03415 1.9603 0.32826 3.3242 0.23047 0.78247-0.0561 1.6188-0.35407 2.4473-0.83203-0.04598 0.94817-0.1374 1.795-0.4082 2.4316-0.45912 1.0795-1.3264 1.9223-3.7559 2.6055-0.90157 0.24561-1.6514 0.43093-2.3359 0.77344-0.68673 0.34362-1.3068 0.93666-1.6113 1.7285a1.0001 1.0001 0 0 0 -0.05859 0.24219c-0.50394 4.2894-2.1224 11.218-7.1543 16.445a1.0001 1.0001 0 1 0 1.4414 1.3867c5.4136-5.6241 7.1052-12.838 7.6621-17.381 0.12997-0.32454 0.23922-0.44467 0.61523-0.63281 0.39013-0.19521 1.0618-0.38791 1.9746-0.63672a1.0001 1.0001 0 0 0 0.0078 -0.002c2.7639-0.7772 4.3477-2.0838 5.0547-3.7461 0.707-1.6622 0.60312-3.445 0.62695-5.3301a1.0001 1.0001 0 0 0 -1.7715 -0.64844c-1.0282 1.2456-1.9102 1.5322-2.877 1.6016-0.96676 0.06931-2.0122-0.19401-3.1367-0.23633a1.0001 1.0001 0 0 0 -0.0332 -0.002c-0.93055-0.0034-1.6391 0.46234-2.2051 0.90039-0.06379 0.04937-0.08339 0.07703-0.14453 0.12695-0.15103-0.35599-0.28809-0.71736-0.58594-1.0625-1.0598-1.2281-2.5834-1.3952-3.7891-1.627-1.1963-0.22998-2.0498-0.46754-2.5293-1.1504-0.23642-0.55444-0.44269-1.0362-1.1816-1.252z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22.281 43.816a1.0001 1.0001 0 0 0 -0.92773 1.2383c0.65605 2.8254 1.9628 5.4979 3.666 8.0762 0.64539 0.97697 1.8281 1.4071 2.8027 1.1152 0.95991-0.28745 1.6798-1.1245 1.959-2.1914 0.36882-0.97988 0.58488-2.0531 0.67969-3.1562a1.0008 1.0008 0 1 0 -1.9941 -0.17188c-0.085 0.98918-0.27348 1.921-0.56836 2.6836a1.0001 1.0001 0 0 0 -0.03906 0.12109c-0.12467 0.5047-0.42268 0.74234-0.61133 0.79883s-0.298 0.0937-0.55859-0.30078c-1.612-2.4402-2.8024-4.9028-3.3887-7.4277a1.0001 1.0001 0 0 0 -1.019 -0.785z",
      color: "#000000"
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
      id: "line",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m19.455 13.84c-0.60501-0.05852-1.225 0.02574-1.8105 0.25195-1.1711 0.45243-2.2349 1.3801-3.2305 2.6895a1.0001 1.0001 0 1 0 1.5918 1.209c0.84851-1.1159 1.687-1.7735 2.3594-2.0332 0.67236-0.25974 1.1465-0.21155 1.7051 0.1582 1.1171 0.73951 2.4316 3.3282 2.8516 8a1.0001 1.0001 0 1 0 1.992 -0.177c-0.44453-4.9449-1.6394-8.1008-3.7383-9.4902-0.52471-0.34735-1.1157-0.5489-1.7207-0.60742z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m31.482 12.607c-0.58064-0.042-1.1664 0.02885-1.7383 0.22852-2.2876 0.79867-3.91 3.4604-4.0977 7.8066a1.0001 1.0001 0 1 0 1.998 0.08594c0.16828-3.8968 1.521-5.5714 2.7598-6.0039 1.2387-0.43247 2.7986 0.18985 3.9043 1.9863a1.0001 1.0001 0 1 0 1.7031 -1.0488c-1.095-1.78-2.787-2.928-4.529-3.054z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m23.621 9.8984a1.0001 1.0001 0 0 0 -0.9375 1.3086c0.23434 0.75994 0.47877 1.3276 0.52344 2.291a1.0001 1.0001 0 1 0 1.998 -0.0918c-0.05933-1.2798-0.41693-2.1587-0.61133-2.7891a1.0001 1.0001 0 0 0 -0.973 -0.7186z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m47.197 39.408a1.0001 1.0001 0 0 0 -0.45312 0.10156c-1.8686 0.87872-3.8974 1.2318-5.9609 1.166a1.0005 1.0005 0 1 0 -0.0625 2c2.3349 0.07443 4.6887-0.32934 6.875-1.3574a1.0001 1.0001 0 0 0 -0.39844 -1.9102z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m35.881 39.812a1.0001 1.0001 0 0 0 -0.98633 1.1074c0.55062 5.9255 3.7748 10.351 8.3867 13.939 0.92395 0.71896 2.1822 0.74704 3.0117 0.1582 0.81921-0.58152 1.2323-1.6077 1.1523-2.7109 0.0848-2.3988-0.60528-5.1302-1.7383-7.3789-0.573-1.136-1.258-2.147-2.066-2.918-0.809-0.772-1.785-1.332-2.891-1.334a1.0001 1.0001 0 1 0 -0.0039 2c0.41508 0.000772 0.93767 0.22972 1.5137 0.7793 0.576 0.54958 1.1634 1.3891 1.6602 2.375 0.99351 1.9718 1.6211 4.5361 1.5371 6.4785a1.0001 1.0001 0 0 0 0.002 0.12695c0.04343 0.51845-0.16406 0.83943-0.32422 0.95312s-0.25174 0.18498-0.625-0.10547c-4.349-3.384-7.13-7.236-7.623-12.548a1.0001 1.0001 0 0 0 -1.006 -0.922z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m18.742 29.598c-1.3102-0.16123-2.6473 0.12971-3.6934 0.85742s-1.7749 2.0657-1.4648 3.5254a1.0004 1.0004 0 1 0 1.957 -0.41602c-0.14637-0.68904 0.08536-1.0751 0.64844-1.4668 0.56308-0.39172 1.4832-0.61719 2.3086-0.51562 1.1912 0.14659 3.2104 1.3256 5.2793 2.8535s4.24 3.3501 6.2031 4.6562c1.6868 1.1223 3.5736 2.0425 5.5586 2.6719a1.0001 1.0001 0 1 0 0.60547 -1.9062c-1.7971-0.56986-3.5214-1.4095-5.0547-2.4297-1.8113-1.2051-3.9857-3.0197-6.125-4.5996s-4.1909-2.9804-6.2227-3.2305z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      strokeMiterlimit: "10",
      d: "m47.088 13.537c-0.22746-0.06636-0.48987-0.06298-0.70898 0.002a1.0001 1.0001 0 0 0 -0.56641 0.4355c-0.05501 0.06363-0.17767 0.10759-0.21875 0.16797-0.1475 0.2168-0.23961 0.4286-0.32031 0.65234-0.16141 0.44749-0.26733 0.94662-0.35156 1.4668-0.16847 1.0403-0.23662 2.1166-0.20703 2.8027 0.04492 1.0417 0.55371 1.8755 1.1172 2.4648 0.56348 0.58931 1.1829 1.0031 1.6367 1.3691 0.45379 0.36608 0.68125 0.65614 0.72656 0.82031 0.04379 0.15864 0.0323 0.43304-0.42383 1.0723-2.4573 2.7517-5.1138 3.8598-7.9922 4.1543-2.8939 0.29613-6.0153-0.27891-9.1367-1.0195-3.1214-0.74062-6.2292-1.6434-9.1758-1.8887-2.9465-0.24526-5.8277 0.21834-8.1094 2.3066a1.0001 1.0001 0 0 0 -0.31836 0.62891c-0.53279 4.8955 2.0932 10.255 6.252 14.473 4.1587 4.218 9.9272 7.3313 16.002 7.4531a1.0002 1.0002 0 1 0 0.03906 -2c-5.411-0.107-10.766-2.949-14.618-6.856-3.716-3.769-5.902-8.477-5.664-12.406 1.7232-1.4054 3.7526-1.8133 6.25-1.6055 2.6499 0.22057 5.6972 1.0888 8.8789 1.8438 3.1817 0.75494 6.5117 1.3995 9.8047 1.0625 3.293-0.33696 6.5447-1.716 9.3242-4.8516a1.0001 1.0001 0 0 0 0.05859 -0.07031c0.70787-0.96386 0.99617-1.9556 0.75586-2.8262-0.24031-0.87061-0.85297-1.4057-1.3984-1.8457-0.54547-0.44004-1.0848-0.8143-1.4473-1.1934-0.36244-0.37906-0.54376-0.69206-0.56445-1.1719-0.01815-0.42098 0.03896-1.5033 0.18359-2.3965 0.02429-0.14998 0.05926-0.23374 0.08789-0.37109 0.97887 1.0781 2.3142 1.4774 3.4375 1.6934 1.2548 0.24123 2.2067 0.45425 2.6523 0.9707 0.395 0.45773 0.50982 1.051 0.59766 1.666a1.0001 1.0001 0 0 0 1.623 0.63281c0.42358-0.34506 0.82902-0.76705 1.2461-1.0898 0.4154-0.32149 0.79355-0.47788 0.9707-0.47852 0.79079 0.03415 1.9603 0.32826 3.3242 0.23047 0.78247-0.0561 1.6188-0.35407 2.4473-0.83203-0.04598 0.94817-0.1374 1.795-0.4082 2.4316-0.45912 1.0795-1.3264 1.9223-3.7559 2.6055-0.90157 0.24561-1.6514 0.43093-2.3359 0.77344-0.68673 0.34362-1.3068 0.93666-1.6113 1.7285a1.0001 1.0001 0 0 0 -0.05859 0.24219c-0.50394 4.2894-2.1224 11.218-7.1543 16.445a1.0001 1.0001 0 1 0 1.4414 1.3867c5.4136-5.6241 7.1052-12.838 7.6621-17.381 0.12997-0.32454 0.23922-0.44467 0.61523-0.63281 0.39013-0.19521 1.0618-0.38791 1.9746-0.63672a1.0001 1.0001 0 0 0 0.0078 -0.002c2.7639-0.7772 4.3477-2.0838 5.0547-3.7461 0.707-1.6622 0.60312-3.445 0.62695-5.3301a1.0001 1.0001 0 0 0 -1.7715 -0.64844c-1.0282 1.2456-1.9102 1.5322-2.877 1.6016-0.96676 0.06931-2.0122-0.19401-3.1367-0.23633a1.0001 1.0001 0 0 0 -0.0332 -0.002c-0.93055-0.0034-1.6391 0.46234-2.2051 0.90039-0.06379 0.04937-0.08339 0.07703-0.14453 0.12695-0.15103-0.35599-0.28809-0.71736-0.58594-1.0625-1.0598-1.2281-2.5834-1.3952-3.7891-1.627-1.1963-0.22998-2.0498-0.46754-2.5293-1.1504-0.23642-0.55444-0.44269-1.0362-1.1816-1.252z",
      color: "#000000"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22.281 43.816a1.0001 1.0001 0 0 0 -0.92773 1.2383c0.65605 2.8254 1.9628 5.4979 3.666 8.0762 0.64539 0.97697 1.8281 1.4071 2.8027 1.1152 0.95991-0.28745 1.6798-1.1245 1.959-2.1914 0.36882-0.97988 0.58488-2.0531 0.67969-3.1562a1.0008 1.0008 0 1 0 -1.9941 -0.17188c-0.085 0.98918-0.27348 1.921-0.56836 2.6836a1.0001 1.0001 0 0 0 -0.03906 0.12109c-0.12467 0.5047-0.42268 0.74234-0.61133 0.79883s-0.298 0.0937-0.55859-0.30078c-1.612-2.4402-2.8024-4.9028-3.3887-7.4277a1.0001 1.0001 0 0 0 -1.019 -0.785z",
      color: "#000000"
    })));
  }
};

export default SpoutingWhale;