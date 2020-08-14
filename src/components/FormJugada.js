import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#f3eae8",
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      decimalScale="0"
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    jugada: "",
    importe: "1320",
  });

  const classes = useStyles();

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <h1>Formulario</h1>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={enviarDatos}
            >
              <div>
                <TextField
                  type="text"
                  id="standard-required"
                  label="Nombre"
                  className="form-control"
                  onChange={handleInputChange}
                  name="nombre"
                ></TextField>
                <TextField
                  type="text"
                  id="standard-required"
                  label="Apellido"
                  className="form-control"
                  onChange={handleInputChange}
                  name="apellido"
                ></TextField>
              </div>
              <div>
                <TextField
                  label="Número"
                  type="text"
                  id="standard-required"
                  className="form-control"
                  onChange={handleInputChange}
                  name="numero"
                  maxlength="4"
                ></TextField>
                <TextField
                  label="Jugada"
                  type="text"
                  id="standard-required"
                  className="form-control"
                  onChange={handleInputChange}
                  name="jugada"
                  maxlength="2"
                ></TextField>
              </div>
              <div>
                <TextField
                  label="Importe"
                  value={datos.importe}
                  onChange={handleInputChange}
                  name="importe"
                  id="formatted-numberformat-input"
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                />

                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h1>Apuesta</h1>
            <ul>
              <li>{datos.nombre}</li>
              <li>{datos.apellido}</li>
              <li>{datos.importe}</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Formulario;
