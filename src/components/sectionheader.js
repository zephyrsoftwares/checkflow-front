import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ label, link }) => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      {/* TITLE */}
      <h2 className="text-base font-semibold leading-7 text-white">{label}</h2>

      {/* LINK */}
      <a
        href={link}
        className="text-sm font-semibold leading-6 text-indigo-400"
      >
        Voir tout
      </a>
    </header>
  );
};

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SectionHeader;
