import React from "react";
import PropTypes from "prop-types";
import classNames from "../utils/classnames";

const NavbarItem = ({ item }) => {
  return (
    <li key={item.id} className="mt-1">
      <a
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-800 text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-800",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
        )}
      >
        {item.icon ? (
          // ICON
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        ) : (
          // INITIALS
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
            {item.initial}
          </span>
        )}
        {/* NAME */}
        <span className="truncate">{item.name}</span>
      </a>
    </li>
  );
};

NavbarItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NavbarItem;
