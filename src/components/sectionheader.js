import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ label, link, Icon }) => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <div className="flex items-center">
        {/* ICON */}
        {Icon && <Icon className="flex-shrink-0 w-6 h-6 text-white me-2" />}
        {/* TITLE */}
        <h2 className="text-base font-semibold leading-7 text-white">
          {label}
        </h2>
      </div>

      {/* LINK */}
      <a
        href={link}
        className="text-sm font-semibold leading-6 text-gray-400 hover:underline"
      >
        Tout voir
      </a>
    </header>
  );
};

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
};

export default SectionHeader;
