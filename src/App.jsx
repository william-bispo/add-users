import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import "./App.css";
import UserList from "./components/UsersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </div>
  );
}

export default App;
