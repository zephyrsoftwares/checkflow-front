import React, { useState } from "react";

import {
  Navbar,
  SearchBar,
  EngagementSection,
  ActivitySection,
} from "../components";

const Accueil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-full">
      {/* LEFT PANEL */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* MAIN PANEL */}
      <div className="xl:pl-72 h-full">
        <SearchBar setSidebarOpen={setSidebarOpen} />
        <EngagementSection />
        <ActivitySection />
      </div>
    </div>
  );
};

export default Accueil;
