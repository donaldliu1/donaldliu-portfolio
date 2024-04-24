import React from "react"
import Info from "./portfolio/info"
import Projects from "./portfolio/projects"
import Experience from "./portfolio/experience"
import Skills from "./portfolio/skills"
import Contact from "./portfolio/contact"

function Home() {
  return (
      <div id="stack" className="w-[900px] h-[675px] grid grid-cols-7 grid-rows-12 fixed top-[50%] left-[50%] ml-[-450px] mt-[-337.5px] bg-inherit">
        <Info />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
  );
}

export default Home;