import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import EditUserForm from './components/UserForm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const localUsers = localStorage.getItem('users');
  const [users, setUsers] = useState(localUsers ? JSON.parse(localUsers) : []);
  const [editing, setEditing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  useEffect(() => {
    if (users.length !== 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    if (
      users.find(
        (thisUser) => thisUser.name === user.name || thisUser.username === user.username
      )
    ) {
      setIsError(true);
    } else {
      setIsError(false);
      setUsers([...users, user]);
    }
  };

  //Eliminar usuario, filtramos todos los id que sean distintos
  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className='container'>
      <h1>Crud App con hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <div>
            <h2>{editing ? 'Editar Usuario' : 'Agregar usuario'}</h2>
            <EditUserForm
              isEditing={editing}
              currentUser={currentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
          {isError && (
            <div className='dangerContainer'>
              <span className='danger'>Ya existe un usuario así</span>
              <button
                className='button transparent-button'
                onClick={() => setIsError(false)}
              >
                Ok
              </button>
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>Ver Usuarios</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
