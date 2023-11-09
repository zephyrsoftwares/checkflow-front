import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChartSquareBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  StatusOnlineIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  MenuIcon,
  ChevronRightIcon,
  SelectorIcon,
  SearchIcon,
} from "@heroicons/react/solid";

import Navbar from "../components/navbar";

const statuses = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};
const environments = {
  Brouillon: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  En_cours: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
  Suspendu: "text-red-400 bg-red-400/10 ring-red-400/30",
  Signé: "text-green-400 bg-green-400/10 ring-green-400/30",
  En_attente: "text-amber-400 bg-amber-400/10 ring-amber-400/30",
};
const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "PESR Fin d'année",
    teamName: "Bain & Co",
    status: "online",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Signé",
  },
  {
    id: 1,
    href: "#",
    projectName: "DAE 2023",
    teamName: "Crédit Suisse",
    status: "online",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "En cours",
  },
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Suspendu",
  },
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Brouillon",
  },

  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "error",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "En attente",
  },
];
const activityItems = [
  {
    user: {
      name: "Ibrahim ADLANI",
      imageUrl: "https://avatars.githubusercontent.com/u/77414477?v=4",
    },
    projectName: "DAE 2023",
    commit: "Audit IT",
    branch: "Crédit Suisse",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Alcide FAUCHERON",
      imageUrl: "https://avatars.githubusercontent.com/u/58391011?v=4",
    },
    projectName: "PESR Fin d'année",
    commit: "Audit IT",
    branch: "Bain & Co",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Accueil = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="xl:pl-72 h-full">
        {/* Sticky search header */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-white xl:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form className="flex flex-1" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <SearchIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                  aria-hidden="true"
                />
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

        <main className="lg:pr-96">
          <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div className="flex items-center">
              <ServerIcon
                className="h-6 w-6 text-white me-2"
                aria-hidden="true"
              />
              <h1 className="text-base font-semibold leading-7 text-white">
                Engagements
              </h1>
            </div>

            {/* Sort dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
                Sort by
                <SelectorIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900",
                        )}
                      >
                        Entreprise
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900",
                        )}
                      >
                        Dernière modification
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-50" : "",
                          "block px-3 py-1 text-sm leading-6 text-gray-900",
                        )}
                      >
                        Nom
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </header>

          {/* Deployment list */}
          <ul role="list" className="divide-y divide-white/5">
            {deployments.map((deployment) => (
              <li
                key={deployment.id}
                className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
              >
                <div className="min-w-0 flex-auto">
                  <div className="flex items-center gap-x-3">
                    <div
                      className={classNames(
                        statuses[deployment.status],
                        "flex-none rounded-full p-1",
                      )}
                    >
                      <div className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                      <a href={deployment.href} className="flex gap-x-2">
                        <span className="truncate">{deployment.teamName}</span>
                        <span className="text-gray-400">/</span>
                        <span className="whitespace-nowrap">
                          {deployment.projectName}
                        </span>
                        <span className="absolute inset-0" />
                      </a>
                    </h2>
                  </div>
                  <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                    <p className="truncate">{deployment.description}</p>
                    <svg
                      viewBox="0 0 2 2"
                      className="h-0.5 w-0.5 flex-none fill-gray-300"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <p className="whitespace-nowrap">{deployment.statusText}</p>
                  </div>
                </div>
                <div
                  className={classNames(
                    environments[deployment.environment.replace(/ /g, "_")],
                    "rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset",
                  )}
                >
                  {deployment.environment}
                </div>
                <ChevronRightIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </main>

        {/* Activity feed */}
        <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
          <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <h2 className="text-base font-semibold leading-7 text-white">
              Activités de l&apos;équipe
            </h2>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-indigo-400"
            >
              Voir tout
            </a>
          </header>
          <ul role="list" className="divide-y divide-white/5">
            {activityItems.map((item) => (
              <li key={item.commit} className="px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-x-3">
                  <img
                    src={item.user.imageUrl}
                    alt=""
                    className="h-6 w-6 flex-none rounded-full bg-gray-800"
                  />
                  <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                    {item.user.name}
                  </h3>
                  <time
                    dateTime={item.dateTime}
                    className="flex-none text-xs text-gray-600"
                  >
                    {item.date}
                  </time>
                </div>
                <p className="mt-3 truncate text-sm text-gray-500">
                  Modif. sur{" "}
                  <span className="text-gray-400">{item.projectName}</span> (
                  <span className="font-mono text-gray-400">{item.commit}</span>{" "}
                  on <span className="text-gray-400">{item.branch}</span>)
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Accueil;
