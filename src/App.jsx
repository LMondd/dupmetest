import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GamePage from "./pages/game.jsx";
import HomePage from "./pages/home.jsx";
import { createContext, useState } from "react";

export const AppContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <AppContext.Provider value={{
      theme,
      setTheme
    }}>
      <Router>
        <Routes>
          <Route path="/game" element={<GamePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;


