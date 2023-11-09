import React, { Fragment } from "react";

const SectionHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
      <h2 className="text-base font-semibold leading-7 text-white">
        Activités de l&apos;équipe
      </h2>
      <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
        Voir tout
      </a>
    </header>
  );
};

export default SectionHeader;
