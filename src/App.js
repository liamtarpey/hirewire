import "./App.css";
import LandingPage from "./pages/Landing/Landing.js";

// Theming
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";

/**
 * Currently we only have a landing page
 * Add react-router when the time is right and we need more pages
 * @returns {Object} React component
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
