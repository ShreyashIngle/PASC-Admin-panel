import React from "react";

const sizes = {
  headingxs: "text-[20px] font-bold",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-500 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
