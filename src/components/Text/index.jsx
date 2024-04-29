import React from "react";

const sizeClasses = {
  txtQuicksandBold18: "font-bold font-quicksand",
  txtQuicksandRegular22Gray900: "font-normal font-quicksand",
  txtQuicksandMedium20: "font-medium font-quicksand",
  txtQuicksandSemiBold18: "font-quicksand font-semibold",
  txtQuicksandMedium22: "font-medium font-quicksand",
  txtQuicksandRegular15: "font-normal font-quicksand",
  txtQuicksandMedium18WhiteA700: "font-medium font-quicksand",
  txtQuicksandRegular18Gray900: "font-normal font-quicksand",
  txtQuicksandMedium25: "font-medium font-quicksand",
  txtQuicksandMedium30Bluegray600: "font-medium font-quicksand",
  txtRamaraja35Gray900: "font-normal font-ramaraja",
  txtQuicksandBold30: "font-bold font-quicksand",
  txtQuicksandRegular22Gray500: "font-normal font-quicksand",
  txtQuicksandBold22WhiteA700: "font-bold font-quicksand",
  txtQuicksandBold25WhiteA700: "font-bold font-quicksand",
  txtRamaraja40: "font-normal font-ramaraja",
  txtRamaraja140: "font-normal font-ramaraja",
  txtRamaraja25: "font-normal font-ramaraja",
  txtQuicksandBold25Gray900: "font-bold font-quicksand",
  txtQuicksandMedium30: "font-medium font-quicksand",
  txtQuicksandMedium18Gray500: "font-medium font-quicksand",
  txtQuicksandBold25: "font-bold font-quicksand",
  txtQuicksandMedium12: "font-medium font-quicksand",
  txtQuicksandMedium20WhiteA700: "font-medium font-quicksand",
  txtRamaraja25WhiteA700: "font-normal font-ramaraja",
  txtQuicksandSemiBold25: "font-quicksand font-semibold",
  txtQuicksandMedium30Gray500: "font-medium font-quicksand",
  txtQuicksandBold22: "font-bold font-quicksand",
  txtQuicksandMedium18Bluegray900: "font-medium font-quicksand",
  txtQuicksandSemiBold22: "font-quicksand font-semibold",
  txtQuicksandRegular22: "font-normal font-quicksand",
  txtQuicksandSemiBold20: "font-quicksand font-semibold",
  txtQuicksandMedium18: "font-medium font-quicksand",
  txtQuicksandMedium18Gray900: "font-medium font-quicksand",
  txtRamaraja30: "font-normal font-ramaraja",
  txtRamaraja50: "font-normal font-ramaraja",
  txtQuicksandRegular18: "font-normal font-quicksand",
  txtRamaraja90: "font-normal font-ramaraja",
  txtQuicksandRegular22WhiteA700: "font-normal font-quicksand",
  txtRamaraja35: "font-normal font-ramaraja",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
