import React from "react";
import { FolderIcon } from "@heroicons/react/outline";

import { EngagementList, SectionHeader } from "./index";

const EngagementSection = () => {
  return (
    <main className="lg:pr-96">
      {/* HEADER */}
      <SectionHeader
        label={"Engagements"}
        link={"/engagements"}
        Icon={FolderIcon}
      />

      {/* LIST */}
      <EngagementList />
    </main>
  );
};

export default EngagementSection;
