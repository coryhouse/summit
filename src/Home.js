import React, { useState, useEffect } from "react";
import { getAllUsers } from "./api/userApi";

// Functional component
// In Q1, we can start adding state to functional component.
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(usersResponse => setUsers(usersResponse));
  }, []);

  return (
    <div>
      <h2>Welcome Home</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.email}</li>
        ))}
      </ul>
      <img
        src="/logo.png"
        alt="Summit Logo"
        style={{ width: 50, height: 50 }}
      />
    </div>
  );
}

export default Home;
