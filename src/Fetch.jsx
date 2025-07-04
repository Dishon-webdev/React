import { useEffect, useState } from "react";

function Fetch() {
  const [jsondata, setJson] = useState([]);

  useEffect(() => {
    fetch("https://dummy-json.mock.beeceptor.com/todos")
    .then((response )=> response.json())
    .then((data) => setJson(data) );
  }, []);

  const handlecheck = () => {
    console.log("Here is : ", jsondata);
  };
  return (
    <>
      <div>
        <button onClick={handlecheck}>check now</button>
      </div>

      <br></br>
      <ul>
        {jsondata.map((dishon)=>(
            <li>{dishon.id}</li>
        ))}
      </ul>
    </>
  );
}

export default Fetch;
