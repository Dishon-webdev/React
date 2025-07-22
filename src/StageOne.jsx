import  { useContext } from "react";
import StageTwo from "./StageTwo";
import ThemeContext from "./Context";

function StageOne() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Stage One - Current theme: {theme}</h2>
      <StageTwo />
    </div>
  );
}

export default StageOne;
