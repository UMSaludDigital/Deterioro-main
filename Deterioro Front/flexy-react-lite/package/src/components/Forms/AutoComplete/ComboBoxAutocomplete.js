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

import Autocomplete from '@mui/material/Autocomplete';

import BaseCard from "../../BaseCard/BaseCard";
const test = [
  {
    value: "Test 1",
    label: "Test 1",
  },
  {
    value: "TTest 2",
    label: "Test 2",
  },
  {
    value: "Test 3",
    label: "Test 3",
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
const ComboBoxAutocomplete = () => {
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
              TEST DE CARACTERIZACIÓN
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
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Seeleccione el test que desea"
              value={test}
              onChange={handleChange3}
              sx={{
                mb: 2,
              }}
            >
              {test.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
              <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              ÁREA DE COMPRENSIÓN Y COMUNICACIÓN 
            </Typography>
            <br></br>
            En una escala del 1 al 5, donde 1 es Nunca, 2 es Leve, 3 es Moderado, 4 es Severa y 5 es Extrema/No puedo hacerlo. Por favor responda las siguientes preguntas:
            En los últimos 30 días cuánta dificultad ha tenido para: <br></br>
            <br></br>
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
              label="Telefono de Contacto 1"
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "Test #1", year: 1994 },
  { label: "Test #2", year: 1972 },
  { label: "Test #3", year: 1974 },
  { label: "Test #4", year: 2008 },
  { label: "Test #5", year: 1957 },
  { label: "Test #6", year: 1993 },
  { label: "Test #7", year: 1994 },
  
];

export { ComboBoxAutocomplete };
