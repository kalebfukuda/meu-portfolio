import React from "react";
import Banner from "../components/Banner";
import PersonalSection from "../components/PersonalSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import BannerSection from "../components/BannerSection";
import HistorySection from "../components/HistorySection";

function Home() {
  return (
    <div className="flex flex-col">
      <BannerSection />
      <HistorySection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
