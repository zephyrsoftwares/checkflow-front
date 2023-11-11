import React from "react";
import logo from "../assets/images/logo_white.svg";
const NavbarLogo = () => {
  return (
    <div className="flex h-16 shrink-0 items-center justify-center border-b-[1.2px] border-white/5">
      <img className="h-8 w-auto" src={logo} alt="CheckFlow" />
    </div>
  );
};

export default NavbarLogo;
