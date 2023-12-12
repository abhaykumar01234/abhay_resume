import { Experience } from "~/pages/Experience";
import { Skills } from "~/pages/Skills";
import { Projects } from "./pages/Projects";

import { LaptopFrame } from "./components/Frames/Laptop";
import { Resume } from "./pages/Resume";

const App = () => {
  return (
    <div className="stack">
      <Resume />
      <div className={["stack", "g0", "center"].join(" ")}>
        <h3 className="title">My Qualification</h3>
        <big className="heading">Awesome Journey</big>
      </div>
      <br />
      <div className="columns">
        <Experience />
        <Skills />
      </div>
      <Projects />
      <LaptopFrame>
        {/* <img src="screen2.jpg" alt="screen" /> */}
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QFukNEBlizw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </LaptopFrame>
    </div>
  );
};

export default App;
