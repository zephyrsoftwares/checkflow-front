import React from "react";
import PropTypes from "prop-types";

import { NavbarItem } from "./index";

const NavbarSection = ({ title, itemlist }) => {
  return (
    <li>
      {/* SECTION TITLE */}
      <div className="text-xs font-semibold leading-6 text-gray-400">
        {title}
      </div>
      {/* NAVIGATION LIST */}
      <ul className="mt-1">
        {itemlist.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
      </ul>
    </li>
  );
};

NavbarSection.propTypes = {
  title: PropTypes.string.isRequired,
  itemlist: PropTypes.array.isRequired,
};

export default NavbarSection;
