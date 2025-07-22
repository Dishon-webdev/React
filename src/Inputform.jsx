import { useEffect, useState } from "react";
import axios from "axios";

function InputForm() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [m_no, setMobile] = useState(0);
  const [password, setPassword] = useState();
  const [description, setDescription] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setMobile(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handledescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      id,
      email,
      m_no,
      password,
      description,
    };

    if (m_no.length !== 10) {
      alert("Check the mobile number");
      return;
    }

    if (password.length !== 8) {
      alert("Password must be 8 characters.");
      return;
    }

    axios
      .post("http://localhost:5000/post2", payload)
      .then((res) => {
        update();
        console.log("submited", res.data);
      })
      .catch((error) => {
        console.log("dishon", error.response.data.dishon);
        const content = error.response.data.dishon;
        if (content.includes("Duplicate")) {
          alert("Duplicate found");
        }
      });
  };

  const handleDelete = (id) => {
    let url = `http://localhost:5000/delete/${id}`;
     axios.delete(url).then((res) => {
      alert("Are you sure want to delete? ");
      update();
     }) 
  };

  const [user, setUser] = useState([]);

  const update = () => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Fetching error", err);
      });
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      {/* <div className="container col-6">
        <div className="card" style={{width:"130px",height:"130px"}}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
          <br></br>
          <br />
          <label htmlFor="">Id</label>
          <input type="text" name="email" value={id} onChange={handleId} />
          <br />
          <button className="btn btn-info mt-2">Submit</button>
        </form>
        </div>
      </div> */}
      <br></br> <br></br>
      <div className="row">
        <div className="col-4">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleName}
                required
              />{" "}
              <br></br> <br></br>
              <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={handleId}
              />{" "}
              <br></br> <br></br>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />{" "}
              <br></br> <br></br>
              <input
                type="text"
                placeholder="Mobile number"
                value={m_no}
                onChange={handlePhone}
              />{" "}
              <br></br>
              <br></br>
              <input
                type="password"
                placeholder="Password must be 8 characters."
                value={password}
                onChange={handlePassword}
                required
              />{" "}
              <br></br>
              <br></br>
              <textarea
                cols={40}
                rows={5}
                placeholder="Optional"
                value={description}
                onChange={handledescription}
              ></textarea>{" "}
              <br></br> <br></br>
              <button className="btn btn-danger">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-8">
          <div>
            <h1 className="bg-info text-white mt-3">Data base's details</h1>
            <ul>
              {user.map((xyz) => (
                <li key={xyz.id}>{xyz.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <table className="table table-boarder table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile number</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                {user.map((bio) => (
                  <tr key={bio.id}>
                    <td>{bio.name}</td>
                    <td>{bio.email}</td>
                    <td>{bio.m_no}</td>
                    <td>{bio.description}</td>
                  <td><button className="text-danger" onClick={() => handleDelete(bio.id)}>
                    DELETE
                    </button></td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputForm;
