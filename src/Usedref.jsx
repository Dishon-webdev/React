import { useRef } from "react";

function Stopwatch() {
  const inputRef0 = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const handleClick = () => {
    alert("");
   const refArray=[inputRef0,inputRef1,inputRef2];

   for (let i of refArray) {
    const xyz=i.current.value.trim();
    if(xyz=== ""){
        i.current.focus();
        return;
    }
   }
  };
  return (
    <>
      <div>
        <input ref={inputRef0} placeholder="Enter your Email" /> <br></br>
        <input ref={inputRef1} placeholder="Enter your mobile number" /> <br></br>
        <input ref={inputRef2} placeholder="Enter your password" /> <br></br>

        <button className="btn btn-primary text-white" onClick={handleClick}>
          Click me to go there
        </button>
      </div>
    </>
  );
}

export default Stopwatch;
