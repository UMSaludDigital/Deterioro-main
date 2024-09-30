
import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from "@mui/material";

const numbers = [
  {
    value: "Cedula de Ciudadania",
    label: "Cedula de Ciudadania",
  },
  {
    value: "Tarjeta de Identidad",
    label: "Tarjeta de Identidad",
  },
  {
    value: "Cedula de Extrangeria",
    label: "Cedula de Extrangeria",
  },
];
const Genero = [
  {
    value: "Masculino",
    label: "Masculino",
  },
  {
    value: "Femenino",
    label: "Femenino",
  },
  
];
const Ips = [
  {
    value: "Publica",
    label: "Publica",
  },
  {
    value: "Privada",
    label: "Privada",
  },
  {
    value: "Mixta",
    label: "Mixta",
  },

];
const NivelEducativo = [
  {
    value: "Educación inicial",
    label: "Educación inicial",
  },
  {
    value: "Educación primaria",
    label: "Educación primaria",
  },
  {
    value: "Educación secundaria",
    label: "Educación secundaria",
  },
  {
    value: "Educación superior",
    label: "Educación superior",
  },

];
const EstadoCivil = [
  {
    value: "Soltero",
    label: "Soltero",
  },
  {
    value: "Casado",
    label: "Casado",
  },

];
const SituacionLaboral = [
  {
    value: "Empleador",
    label: "Empleador",
  },
  {
    value: "Desempleado",
    label: "Desempleado",
  },

];
const FbDefaultFormulario = () => {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [value, setValue] = React.useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const [number, setNumber] = React.useState("");

  const handleChange3 = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Checkbox */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Agregar Nuevo Paciente
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="default-value"
              label="Nombre Completo"
              variant="outlined"
              defaultValue="Nombre"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Tipo de documento"
              value={number}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {numbers.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="Numero-de-Documento"
              label="Numero de Documento"
              type="Numero de Documento"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
             <TextField
              id="Fecha-de-Nacimiento"
              label="Fecha de Nacimiento"
              type="Fecha de Nacimiento"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
             <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Genero"
              value={Genero}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {Genero.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}  
            </TextField>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Ips"
              value={Ips}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {Ips.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}  
            </TextField>
            <TextField
              id="Telefono-de-Contacto"
              label="Telefono de Contacto"
              type="Telefono de Contacto"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Nivel educativo"
              value={NivelEducativo}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {NivelEducativo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}  
            </TextField>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Estado Civil"
              value={EstadoCivil}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {EstadoCivil.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}  
            </TextField>
            <TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Situacion Laboral"
              value={SituacionLaboral}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {SituacionLaboral.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}  
            </TextField>
            <TextField
              id="readonly-text"
              label="Tiene alguna enfermedad diagnosticada"
              defaultValue="Cual ?"
              inputprops={{
                readOnly: true,
              }}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <div>
              <Button color="primary" variant="contained">
                Agregar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FbDefaultFormulario;