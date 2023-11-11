import React from "react";

import { ActivityList, SectionHeader } from "./index";
import { StatusOnlineIcon } from "@heroicons/react/outline";

const ActivitySection = () => {
  return (
    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      {/* HEADER */}
      <SectionHeader
        label={"Dernières activités"}
        link={"/activites"}
        Icon={StatusOnlineIcon}
      />
      {/* LISTE */}
      <ActivityList />
    </aside>
  );
};

export default ActivitySection;
