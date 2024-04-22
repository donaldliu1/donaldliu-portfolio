import React from "react"
import Info from "./portfolio/info.tsx"
import Projects from "./portfolio/projects.tsx"
import Experience from "./portfolio/experience.tsx"
import Skills from "./portfolio/skills.tsx"
import Contact from "./portfolio/contact.tsx"

function Home() {
  return (
    <div className="w-dvh h-dvh flex justify-center items-center content-center border-solid border-2 bg-purple-400 ">
      <div className="w-3/5 h-4/6 flex space justify-center items-center flex-col bg-red-100">
        <div className="h-full flex flex-row content-center bg-blue-100">
          <div className="w-4/5 flex flex-col ">
            <Info />
            <Projects />
          </div>
          <div className="w-1/5 flex flex-col ">
            <Experience />
            <Skills />
          </div>
        </div>
        <div className="h-1/10 flex flex-row justify-center ">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;