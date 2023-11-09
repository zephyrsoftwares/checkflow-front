import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <rect
                  y="4"
                  width="24"
                  height="1"
                  className="h-1 w-6 my-1 rounded-sm"
                />
                <rect
                  y="11"
                  width="24"
                  height="1"
                  className="h-1 w-6 my-1 rounded-sm"
                />
                <rect
                  y="18"
                  width="24"
                  height="1"
                  className="h-1 w-6 my-1 rounded-sm"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium opacity-50 cursor-not-allowed"
                  disabled
                >
                  Équipe
                </a>
                <a
                  href="#"
                  className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium opacity-50 cursor-not-allowed"
                  disabled
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
