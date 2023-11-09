import React from "react";

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

const ActivityList = () => {
  return (
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
            Modif. sur <span className="text-gray-400">{item.projectName}</span>{" "}
            (<span className="font-mono text-gray-400">{item.commit}</span> on{" "}
            <span className="text-gray-400">{item.branch}</span>)
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
