import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mousey from "./components/Mousey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ViewProject from "./components/ViewProject";

function App() {
  const [browserTheme, setBrowserTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const browserThemeListener = (e) => {
      console.log(e);
      setBrowserTheme(e.matches ? "dark" : "light");
    };
    Aos.init();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", browserThemeListener);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", browserThemeListener);
  }, []);

  const updateFavIconBasedOnBrowserTheme = (theme) => {
    let link =
      document.querySelector('link[rel="shortcut icon"]') ||
      document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.id = "favicon";
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    theme === "dark"
      ? (link.href = `favicon_dark.ico`)
      : (link.href = `favicon_light.ico`);
  };

  return (
    <BrowserRouter>
      {browserTheme === "dark"
        ? updateFavIconBasedOnBrowserTheme("dark")
        : updateFavIconBasedOnBrowserTheme("light")}

      <div className="App">
        <Switch>
          <Route path="/view-project" exact component={ViewProject} />
          <Route path={["/", "/*"]} exact>
            <>
              <Header />
              <Mousey />
              <About />
              <Skills />
              <WorkExperience />
              <Projects />
              <Contact />
              <Footer />
            </>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
