import React from "react";
import PropTypes from "prop-types";

const NavbarProfileSection = ({ image, firstname, lastname }) => {
  return (
    <li className="-mx-6 mt-auto">
      <a
        href="#"
        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
      >
        {/* AVATAR */}
        <img className="h-8 w-8 rounded-full bg-gray-800" src={image} alt="" />
        <span className="sr-only">Votre profile</span>
        {/* USER NAMES */}
        <span aria-hidden="true">
          {firstname} {lastname}
        </span>
      </a>
    </li>
  );
};

NavbarProfileSection.propTypes = {
  image: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default NavbarProfileSection;
