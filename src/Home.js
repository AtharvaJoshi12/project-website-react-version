import React from "react";
import MyHead from "./Components/MyHead";
import Navbar from "./Components/Navbar";
import ProjectContainer from "./Components/ProjectContainer";

function Home() {
  return (
    <div>
      <MyHead />
      <Navbar />
      <ProjectContainer />
    </div>
  );
}

export default Home;
