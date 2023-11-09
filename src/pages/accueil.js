import React from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import EngagementSection from "../components/engagementsection";
import ActivitySection from "../components/activitysection";

const Accueil = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="xl:pl-72 h-full">
        <SearchBar />
        <EngagementSection />
        <ActivitySection />
      </div>
    </div>
  );
};

export default Accueil;
