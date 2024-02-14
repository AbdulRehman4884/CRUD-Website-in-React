import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  });

  const loadUser = () => {
    axios.get("http://localhost:3001").then((result) => setUser(result.data));
  };
  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/delete/" + id).then(loadUser());
  };
  return (
    <>
      <div className="d-flex vh-100 bg-ptimary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            Add+
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user.map((user) => (
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <Link to={`/edit/${user._id}`} className="btn btn-success">
                      Update
                    </Link>
                    <Link
                      className="btn btn-success"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
