import React from "react";

import SectionHeader from "../components/sectionheader";
import EngagementList from "../components/engagementlist";

export const EngagementSection = () => {
  return (
    <main className="lg:pr-96">
      <SectionHeader />
      <EngagementList />
    </main>
  );
};

export default EngagementSection;
