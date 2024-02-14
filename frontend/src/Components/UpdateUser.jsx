import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/getuser/" + id).then((result) => {
      console.log(result);
      setName(result.data.Name);
      setEmail(result.data.Email);
      setAge(result.data.Age);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id, {
        Name: name,
        Email: email,
        Age: age,
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    navigate("/");
  };
  return (
    <>
      <div className="d-flex vh-100 bg-ptimary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="Name"
                aria-describedby="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 ">
              <label for="exampleInputAge1" class="form-label">
                Age
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputage1"
                aria-describedby="ageHelp"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
