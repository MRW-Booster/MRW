import React from "react";
import {
  AboutOurGame,
  HeroSection,
  OurTeam,
  Roadmap,
} from "../components/home";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutOurGame />
      <OurTeam />
      <Roadmap />
    </div>
  );
};

export default Home;
