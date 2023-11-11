import React from "react";
import PropTypes from "prop-types";
import { MenuIcon, SearchIcon } from "@heroicons/react/solid";

const SearchBar = ({ setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      {/* SIDEBAR TOGGLE */}
      <button
        type="button"
        className="-m-2.5 p-2.5 text-white xl:hidden"
        onClick={() => setSidebarOpen((open) => !open)}
      >
        {/* MENU ICON */}
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* SEARCH BAR */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="flex flex-1" action="#" method="GET">
          {/* SR LABEL */}
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>

          <div className="relative w-full">
            {/* SEARCH ICON */}
            <SearchIcon
              className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
              aria-hidden="true"
            />
            {/* INPUT */}
            <input
              id="search-field"
              className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
              placeholder="Search..."
              type="search"
              name="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  setSidebarOpen: PropTypes.func.isRequired,
};

export default SearchBar;
