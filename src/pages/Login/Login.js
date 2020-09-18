import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';
import LogoLogin from '../../assets/Image/logo.png'

//Material components
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import Box from '@material-ui/core/Box/Box';
import FormControl from '@material-ui/core/FormControl/FormControl';
import TextField from '@material-ui/core/TextField/TextField';

//App component
import ApiUrl from '../../services/ApiUrl';

const LogIn = () => {
  const history = useHistory();

  const [ mobilephone, setMobilephone ] = useState("");
  const [ errorLogin, setErrorLogin ] = useState(false);

  const handleOnChange = (name, value) => {
    if ( name === "mobilephone") {
      setMobilephone(value)
    }
  }

  const ifMatch = async (account) => {
    let config = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    }
    await fetch(`${ApiUrl}/v1/login/client`, config)
      .then(res => {
        console.log(res);
        if (res.status !== 400) {
          history.push("/categorias")
        } else {
          setErrorLogin(true);
        }
      })
  }

  const handleOnSubmit = () => {
    let account = { mobilephone }
    if ( account ) {
      ifMatch(account);
    }
  }

  return(

    <div className="login-page">
      <Box display="flex" className="auth-container">
        <Grid container item xs={12} justify="center">
          <Box>
            <img src={LogoLogin} />
            <Typography component="h3" variant="h3" className="subtitle-logo" align="center">
              Ingresa el número de teléfono <br/> de tu asesora independiente.
            </Typography>
          </Box>
          <Grid item xs={10}>
            <FormControl className="auth-form">
              <TextField
                label="Teléfono"
                type="text"
                name="mobilephone"
                variant="outlined"
                onChange={e => handleOnChange(e.target.name, e.target.value)}
                error={errorLogin ? true : null }
                helperText={errorLogin ? "Este número no es valido o no está registrado." : null }
              />
            </FormControl>
            <Box display="flex" justifyContent="center">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className="btn-auth"
                onClick={handleOnSubmit}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LogIn;