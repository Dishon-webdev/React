import { useRef } from "react";

function Stopwatch() {
  const inputRef0 = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const handleClick = () => {
    const refArray = [inputRef0, inputRef1, inputRef2];
    for (let i of refArray) {
      const xyz = i.current.value.trim();
      if (xyz === "") {
        i.current.focus();
        
        return;
      }
    }
  };
  return (
    <>
      <div>
        <div className="container ">
          <div className="card bg-secondary rounded-5">
            <h2 className="text-center text-success bg-light mb-3 pb-1 ">
              Sign Up
            </h2>
            <input
              className="mb-1 form-control"
              ref={inputRef0}
              placeholder="Enter your Email"
            />{" "}
            <br></br>
            <input
              className="mb-1 form-control"
              ref={inputRef1}
              placeholder="Enter your mobile number"
            />{" "}
            <br></br>
            <input
              className="mb-1 form-control"
              ref={inputRef2}
              placeholder="Enter your password"
            />{" "}
            <br></br>
            <button className="btn btn-primary text-white rounded-pill" onClick={handleClick}>
              Click me to go there
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
