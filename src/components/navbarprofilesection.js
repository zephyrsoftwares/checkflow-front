import React from "react";
import PropTypes from "prop-types";

import { useAuth } from "../contexts/AuthContext";

const NavbarProfileSection = ({}) => {
  const { currentUser } = useAuth();

  return (
    <li className="-mx-6 mt-auto p-4">
      <a
        href="#"
        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800 rounded-md"
      >
        {/* AVATAR */}
        <img
          className="h-10 w-10 rounded-full bg-gray-800"
          src={
            currentUser.profilePictureUrl ||
            "./images/default_profile_picture.png"
          }
          alt=""
        />
        <span className="sr-only">Votre profile</span>

        <div className="flex flex-col truncate">
          {/* USER NAMES */}
          <span aria-hidden="true">
            {currentUser.firstname} {currentUser.name}
          </span>

          {/* ROLE */}
          <span
            aria-hidden="true"
            className="font-mono text-gray-400 text-xs font-light"
          >
            {currentUser.fonction}
          </span>
        </div>
      </a>
    </li>
  );
};

NavbarProfileSection.propTypes = {
  image: PropTypes.string.isRequired,
};

export default NavbarProfileSection;
