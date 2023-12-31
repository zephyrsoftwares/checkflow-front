import React from "react";
import PropTypes from "prop-types";

// Utiliser une fonction nommée
const Input = React.forwardRef(function Input(props, ref) {
  return (
    <div className="mt-2">
      <input
        {...props}
        ref={ref}
        className={`block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
      />
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
