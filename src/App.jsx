
import { useState } from "react";
import StageOne from "./StageOne";
import ThemeContext from "./Context";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>
        Hi Students - {theme}
      </h1>
      <StageOne />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change the theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
