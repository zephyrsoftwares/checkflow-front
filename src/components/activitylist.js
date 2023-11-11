import React from "react";

import { ActivityListItem } from "./index";

const activityItems = [
  {
    id: 1,
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
    id: 2,
    user: {
      name: "Alcide FAUCHERON",
      imageUrl: "https://avatars.githubusercontent.com/u/58391011?v=4",
    },
    projectName: "PESR Fin d'année",
    commit: "Audit IT",
    branch: "Bain & Co",
    date: "3h",
    dateTime: "2023-01-23T09:00",
  },
];

const ActivityList = () => {
  return (
    // LISTE D'ACTIVITÉS
    <ul role="list" className="divide-y divide-white/5">
      {activityItems.map((item) => (
        // ACTIVITÉ
        <ActivityListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ActivityList;
