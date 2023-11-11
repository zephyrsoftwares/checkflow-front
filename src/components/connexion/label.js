import React from "react";
import PropTypes from "prop-types";

const Label = ({ label }) => {
  return (
    <label className="block text-sm font-medium leading-6 text-white">
      {label}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Label;
