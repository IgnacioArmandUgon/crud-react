import React from "react";
import UserTable from "./componentes/UserTable";

const App = () => {
    return (
        <div className="container"> 
          <h1>Crud app con Hooks</h1>
          <div className="flex-row">
            <div className="flex-large">
              <h2>Add user</h2>
            </div>
            <div className="flex-large">
              <h2>View user</h2>
              <UserTable/>
            </div>
          </div>
        </div>
    );
}

export default App;