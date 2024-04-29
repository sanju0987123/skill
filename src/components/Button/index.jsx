import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[19px]" };
const variants = {
  outline: {
    black_900: "border border-black-900 border-solid text-gray-900",
    white_A700: "border border-solid border-white-A700 text-white-A700",
    gray_900: "border border-gray-900 border-solid text-gray-900",
  },
  fill: {
    white_A700: "bg-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    gray_500: "bg-gray-500 text-white-A700",
  },
};
const sizes = { xs: "p-1", sm: "p-2", md: "p-[11px]", lg: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900", "white_A700", "gray_900", "gray_500"]),
};

export { Button };
