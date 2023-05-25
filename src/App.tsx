import { Experience } from "~/pages/Experience";
import { Skills } from "./pages/Skills";

const App = () => {
  return (
    <div className="stack">
      <div className={["stack", "g0", "center"].join(" ")}>
        <h3 className="title">My Qualification</h3>
        <big className="heading">Awesome Journey</big>
      </div>
      <br />
      <div className="columns">
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default App;
