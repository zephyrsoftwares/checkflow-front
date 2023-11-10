import React, { useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import EngagementSection from "../components/engagementsection";
import ActivitySection from "../components/activitysection";

const Accueil = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-full">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="xl:pl-72 h-full">
        <SearchBar setSidebarOpen={setSidebarOpen} />
        <EngagementSection />
        <ActivitySection />
      </div>
    </div>
  );
};

export default Accueil;
