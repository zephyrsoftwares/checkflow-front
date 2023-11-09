import React from "react";

import ActivityList from "../components/activitylist";
import SectionHeader from "./sectionheader";

const ActivitySection = () => {
  return (
    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      <SectionHeader title={"Activités de l'équipe"} link={"/activites"} />
      <ActivityList />
    </aside>
  );
};

export default ActivitySection;
