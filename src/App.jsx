import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import {v4 as uuidv4} from 'uuid';



function App() {
//Se crean algunos objetos usuarios
  const usersData = [
    { id: uuidv4(), name: 'Juan', username: 'ElJuan' },
    { id: uuidv4(), name: 'Nacho', username: 'NachoToNaiz' },
    { id: uuidv4(), name: 'Amanda', username: 'NaBig8' },
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar Usuarios
  const addUser = ( user )=>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuario, filtramos todos los id que sean distintos
  const deleteUser = ( id )=>{
    const arraySinElIdFiltrado = users.filter( user => user.id !== id )
    setUsers( arraySinElIdFiltrado )
  }

  //Editar usuario 
  const [ editing, setEditing ] = useState( false )

  const [ currentUser, setCurrentUser ] = useState({
    id: null,
    name: '',
    username: ''
  })

  const editRow = ( user ) => {
    setEditing( true )
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = ( id, updateUser ) =>{
    setEditing( false )
    setUsers( users.map( user => ( user.id === id ? updateUser : user ) ) )
  }
  
  return (
    <div className="container">
    <h1>Crud App con hooks</h1>
    <div className="flex-row">
      <div className="flex-large">


        {
          editing ? (
            <div>
              <h2>Editar Usuario</h2>
              <EditUserForm 
                currentUser={ currentUser }
                updateUser={ updateUser }
              />
            </div>
          ) : (
            <div>
              <h2>Agregar Usuario</h2>
              <AddUserForm addUser={ addUser }/>
            </div>
          )
        }

        

        
      </div>
      <div className="flex-large">
        <h2>Ver Usuarios</h2>
        <UserTable 
          users={ users } 
          deleteUser={ deleteUser } 
          editRow={ editRow }
        />
      </div>
    </div>
  </div>
  );
}

export default App;