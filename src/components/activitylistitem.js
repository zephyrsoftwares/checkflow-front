import React from "react";
import PropTypes from "prop-types";

const ActivityListItem = ({ item }) => {
  return (
    <li key={item.id} className="px-4 py-4 sm:px-6 lg:px-8">
      {/* LIGNE SUPERIEURE */}
      <div className="flex items-center gap-x-3">
        {/* AVATAR */}
        <img
          src={item.user.imageUrl}
          alt=""
          className="h-6 w-6 flex-none rounded-full bg-gray-800"
        />

        {/* NOM */}
        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
          {item.user.name}
        </h3>

        {/* TIME */}
        <time
          dateTime={item.dateTime}
          className="flex-none text-xs text-gray-600"
        >
          {item.date}
        </time>
      </div>

      {/* LIGNE INFERIEURE */}
      <p className="mt-3 truncate text-sm text-gray-500">
        {/* ACTION */}
        Modif. sur <span className="text-gray-400">
          {item.projectName}
        </span>{" "}
        {/* TARGET */}
        <span className="font-mono text-gray-400">{item.commit}</span> on{" "}
        <span className="text-gray-400">{item.branch}</span>
      </p>
    </li>
  );
};

ActivityListItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default ActivityListItem;
