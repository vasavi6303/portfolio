import React, { useState, useEffect } from "react";
import { projects } from "../ProjectList";
import Project from "./Project";

function Projects() {
  let delay = 0;
  let proj_num = 0;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <h1 className="gold text-center uppercase">
          Projects <i className="fas fa-tasks"></i>
        </h1>

        <div className="pt-5 mt-lg-5 justify-content-center">
          <div className="row" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {projects.map((p, index) => {
              // delaying animation according to the screen size
              if (windowSize.width >= 992) {
                // dividing by no.of cards in a row
                if (proj_num % 3 === 0) delay = 0; 
                else if (proj_num % 3 === 1) delay = 200;
                else delay = 400;
              } else if (windowSize.width >= 576) {
                if (proj_num % 2 === 0) delay = 0;
                else delay = 300;
              } else delay = 0;

              proj_num += 1;
              return <Project {...p} key={index} delay={delay} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
