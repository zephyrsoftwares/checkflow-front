import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";

import { useAuth } from "../contexts/AuthContext";

import { NavbarLogo, NavbarProfileSection, NavbarSection } from "./index";

const NavbarMobile = ({ show, navigation, clients, setSidebarOpen }) => {
  const { currentUser, logout } = useAuth();

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 xl:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {/* CLOSE BUTTON */}
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              {/* NAVBAR MOBILE */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
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
                      image={
                        "https://avatars.githubusercontent.com/u/77414477?v=4"
                      }
                      lastname={""}
                      firstname={"Alcide"}
                      role={"Software Engineer"}
                    />
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

NavbarMobile.propTypes = {
  show: PropTypes.bool.isRequired,
  navigation: PropTypes.array.isRequired,
  clients: PropTypes.array.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default NavbarMobile;
