import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Tooltip } from "~/components/Tooltip";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Tooltip.Provider>
    <App />
  </Tooltip.Provider>
);
