import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  FolderIcon,
  StatusOnlineIcon,
  HomeIcon,
  CogIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import { NavbarWeb, NavbarMobile } from "./index";

const navigation = [
  {
    id: 1,
    name: "Accueil",
    href: "/",
    icon: HomeIcon,
    current: false,
    initial: "SS",
  },
  {
    id: 2,
    name: "Engagements",
    href: "/",
    icon: FolderIcon,
    current: true,
    initial: "SS",
  },
  {
    id: 3,
    name: "Activités",
    href: "/activite",
    icon: StatusOnlineIcon,
    current: false,
    initial: "SS",
  },
  {
    id: 4,
    name: "Équipe",
    href: "/equipe",
    icon: UserGroupIcon,
    current: false,
    initial: "SS",
  },
  {
    id: 5,
    name: "Réglages",
    href: "/reglages",
    icon: CogIcon,
    current: false,
    initial: "SS",
  },
];
const clients = [
  {
    id: 7,
    name: "Crédit Suisse",
    href: "#",
    initial: "CS",
    current: false,
  },
  {
    id: 8,
    name: "Société Générale",
    href: "#",
    current: false,
    initial: "SG",
  },
  {
    id: 9,
    name: "Bain & Co",
    href: "#",
    current: true,
    initial: "BC",
  },
];

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* MOBILE NAVBAR */}
      <NavbarMobile
        show={sidebarOpen}
        as={Fragment}
        navigation={navigation}
        clients={clients}
        setSidebarOpen={setSidebarOpen}
      />

      {/* NAVBAR */}
      <NavbarWeb navigation={navigation} clients={clients} />
    </>
  );
};

Navbar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
