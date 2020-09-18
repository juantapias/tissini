import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthUser from './services/Auth';
//App components
import Routes from './Routes';

const App = () => {
  const [ auth, setAuth ] = useState(false);

  return (
    <Fragment>
      <AuthUser.Provider value={{auth, setAuth}} >
      <Router>
        <Routes />
      </Router>
      </AuthUser.Provider>
    </Fragment>
  );
}

export default App;
