import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "PESR Fin d'année",
    teamName: "Bain & Co",
    status: "online",
    statusText: "Modifié il y a 1m 32s",
    description: "Signé par Alcide FAUCHERON",
    environment: "Signé",
  },
  {
    id: 2,
    href: "#",
    projectName: "DAE 2023",
    teamName: "Crédit Suisse",
    status: "online",
    statusText: "Modifié il y a 1m 32s",
    description: "Deploys from GitHub",
    environment: "En cours",
  },
  {
    id: 3,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Modifié il y a 1m 32s",
    description: "Suspendu par Alcide FAUCHERON",
    environment: "Suspendu",
  },
  {
    id: 4,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Modifié il y a 1m 32s",
    description: "Deploys from GitHub",
    environment: "Brouillon",
  },

  {
    id: 5,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "error",
    statusText: "Modifié il y a 1m 32s",
    description: "Signature en attente",
    environment: "En attente",
  },
];

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const EngagementList = () => {
  return (
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
                  <span className="truncate font-light text-gray-200">
                    {deployment.teamName}
                  </span>
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
  );
};

export default EngagementList;
