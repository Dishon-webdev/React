import { useState } from "react";

function Login() {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name === "Dishon") {
      setSubmit(true);
    } else {
      setSubmit(false);
      setName("");
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      {!submit ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>You are logged in as {name}</h1>
        </div>
      )}
    </>
  );
}

export default Login;
