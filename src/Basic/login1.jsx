import { useState } from "react";

function Login1() {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name === "Dishon" && password === "@123") {
      setSubmit(true);
    } else {
      setSubmit(false);
      setName("");
      setPassword("");
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <fieldset>
        <legend>Login Page</legend>
        <h1>My Login Page</h1>
        {!submit ? (
          <div>
            <label>Enter your User Name:-</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={handleChange}
            />
            <br />
            <br />
            <label>Enter Your Password:-</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <div>
            <h1>Welcome Back</h1>
          </div>
        )}
      </fieldset>
    </>
  );
}

export default Login1;
