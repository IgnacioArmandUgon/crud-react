import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import UserTable from "./componentes/UserTable";
import AddUserForm from "./componentes/AddUserForm";


const App = () => {
  const usersData = [
     { id: uuidv4, name: 'Tania', username: 'floppydiskette' },
     { id: uuidv4, name: 'Craig', username: 'siliconeidolon' },
     { id: uuidv4, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar usuario
  const addUser = (user) => {
    console.log(user)
    user.id = uuidv4
    setUsers([...users, user])
  }

  //Eliminar usuario
  // const deleteUser = (id) => {
  //     console.log(id)
  // }

    return (
      <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
    );
}

export default App;