import { useEffect, useState } from "react";

function Useeffect() {
  const [name, setName] = useState(false);
  useEffect(() => {
    alert("What about the treat?");
    setName(false);
  }, [name]);

  const handleClick = () => {
    setName(true);
  };
  return (
    <>
      <div>
        <h1>Happy Birthday Akachcheliyan</h1>
        <button onClick={handleClick}>Thank you</button>
      </div>
    </>
  );
}

export default Useeffect;
