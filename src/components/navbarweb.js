import React from "react";
import PropTypes from "prop-types";
import { NavbarLogo, NavbarProfileSection, NavbarSection } from "./index";

const NavbarWeb = ({ navigation, clients }) => {
  return (
    <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col h-full">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
        {/* LOGO */}
        <NavbarLogo />

        {/* NAVIGATION */}
        <nav className="flex flex-1 flex-col">
          {/* NAVIGATION SECTION LIST */}
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {/* NAVIGATION SECTION */}
            <NavbarSection title={"Navigation"} itemlist={navigation} />
            {/* CLIENTS SECTIONS */}
            <NavbarSection title={"Clients"} itemlist={clients} />

            {/* PROFILE SECTION */}
            <NavbarProfileSection
              image={"https://avatars.githubusercontent.com/u/77414477?v=4"}
              lastname={"ADLANI"}
              firstname={"Ibrahim"}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

NavbarWeb.propTypes = {
  navigation: PropTypes.array.isRequired,
  clients: PropTypes.array.isRequired,
};

export default NavbarWeb;
