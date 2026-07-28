import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./i18n/LanguageContext";
import App from "./App.tsx";
import BlockGate from "./components/BlockGate.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <LanguageProvider>
      <BlockGate>
        <App />
      </BlockGate>
    </LanguageProvider>
  </HelmetProvider>
);

