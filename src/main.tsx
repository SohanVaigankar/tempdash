import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// components
import App from "./App.tsx";
// context
import { ThemeContextProvider, UserContextProvider } from "./context/index.ts";
// styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </ThemeContextProvider>
);
