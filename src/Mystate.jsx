import { useState } from "react";

function Count() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = () => {
    alert(`Your current email is : ${email}`);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <h1>Count = {number}</h1>
      <button className="btn btn-primary" onClick={() => setNumber(number + 5)}>Calculate</button>
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      <button className="btn btn-info text-white m-3" onClick={handleSubmit}>Click</button>
    </>
  );
}

export default Count;
