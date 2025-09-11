import React from "react";
import Banner from "../components/Banner";
import PersonalSection from "../components/PersonalSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <PersonalSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Home;
