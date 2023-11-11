import React from "react";

import { EngagementList, SectionHeader } from "./index";

const EngagementSection = () => {
  return (
    <main className="lg:pr-96">
      {/* HEADER */}
      <SectionHeader label={"Engagements"} link={"/activites"} />

      {/* LIST */}
      <EngagementList />
    </main>
  );
};

export default EngagementSection;
