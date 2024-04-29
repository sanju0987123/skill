import React from "react";

const ErrorMessage = ({ errors = [], className = "" }) => {
  return (
    Array.isArray(errors) && errors.length > 0 && (
      <div className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}>
        {errors.join(", ")}
      </div>
    )
  );
};

export { ErrorMessage };
