import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./contexts/ThemeContext.tsx";
// import Location from "./Location.tsx";
// import LocatorPorvider from "./contexts/LocatorContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
   {/* <LocatorPorvider>
   <Location/>
   </LocatorPorvider> */}
  </StrictMode>
);
