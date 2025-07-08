import { useContext } from "react";
import ThemeContext from "./Context";

function StageThree() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Stage Three - {theme}</h1>
    </div>
  );
}

export default StageThree;
