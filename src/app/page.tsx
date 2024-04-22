import React from "react"
import Info from "./portfolio/info"
import Projects from "./portfolio/projects"
import Experience from "./portfolio/experience"
import Skills from "./portfolio/skills"
import Contact from "./portfolio/contact"

function Home() {
  return (
    
    <div className="w-dvh h-dvh flex flex-col justify-center items-center content-center border-solid border-2 bg-purple-400">
      <p className="text-5xl"> Donald Liu</p>
      <div className="w-4/5 h-5/6 flex space justify-center items-center flex-col bg-inherit bg-red-400">
        <div className="h-full flex flex-row content-center bg-inherit">
          <div className="w-4/5 flex flex-col ">
            <Info />
            <Projects />
          </div>
          <div className="w-1/5 flex flex-col ">
            <Experience />
            <Skills />
          </div>
        </div>
        <div className="w-full flex flex-row justify-center ">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;