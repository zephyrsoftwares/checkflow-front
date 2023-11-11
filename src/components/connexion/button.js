import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
