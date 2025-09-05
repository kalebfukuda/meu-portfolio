import React from 'react';
import Banner from '../components/Banner';
import PersonalSection from '../components/PersonalSection';
import ProjectsSection from '../components/ProjectsSection';

function Home() {
  return (
     <div className="flex flex-col min-h-screen">
      <Banner />
      <PersonalSection />
      <ProjectsSection />
    </div>
  );
}

export default Home;
