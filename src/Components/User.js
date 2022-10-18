import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";

export default function User() {
  const [users, setUsers] = useState();
  const isOnline = navigator.onLine;

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        localStorage.setItem("usersData", JSON.stringify(data));
      })
      .catch((e) => {
        !isOnline && setUsers(JSON.parse(localStorage.getItem("usersData")));
      });
  }, [isOnline]);

  return (
    <div className="d-flex text-secondary flex-column text-centervw-100">
      <div>
        {!isOnline && (
          <Alert key={"warning"} variant={"warning"}>
            You are in offline mode
          </Alert>
        )}
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
