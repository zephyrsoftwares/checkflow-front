import React from "react";
import EngagementListItem from "./engagementlistitem";

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
    status: "error",
    statusText: "Modifié il y a 1m 32s",
    description: "En attente de validation",
    environment: "Suspendu",
  },
  {
    id: 3,
    href: "#",
    projectName: "Audit IT",
    teamName: "Société Générale",
    status: "offline",
    statusText: "Modifié il y a 1m 32s",
    description: "En attente de la mise en developpement",
    environment: "Brouillon",
  },
];

const EngagementList = () => {
  return (
    // LISTE D'ENGAGEMENTS
    <ul role="list" className="divide-y divide-white/5">
      {deployments.map((deployment) => (
        // ENGAGEMENT
        <EngagementListItem key={deployment.id} deployment={deployment} />
      ))}
    </ul>
  );
};

export default EngagementList;
