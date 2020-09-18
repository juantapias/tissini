import React, { useContext } from 'react';
import AuthUser from './services/Auth';
import { Switch, Route, Redirect } from "react-router-dom";

//App component
import LogIn from './pages/Login/Login';
import Categorias from './pages/Categorias/Categorias';
import Catalogo from './pages/Catalogo/Catalogo';
import Carrito from './pages/Carrito/Carrito';

const Routes = () => {
  const Auth = useContext(AuthUser);

  return (
    <Switch>
      <ProtectedLoged exact path="/" component={LogIn} />
      <Route exact path="/categorias" auth={Auth.auth} component={Categorias} />
      <Route exact path="/catalogo/:id" component={Catalogo} />
      <Route exact path="/carrito" component={Carrito} />
    </Switch>
  );
}

const ProtectedDashboard = ({auth ,component:Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render = {() => auth ? (
        <Component />
      ) : ( <Redirect to="/" />)}
    />
  );
}

const ProtectedLoged = ({auth ,component:Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render = {() => !auth ? (
        <Component />
      ) : ( <Redirect to="/categorias" />)}
    />
  );
}

export default Routes;

