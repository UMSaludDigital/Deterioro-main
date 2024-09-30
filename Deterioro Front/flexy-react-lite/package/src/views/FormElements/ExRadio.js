import React from "react";

import {
  Grid,
  Box,
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";

import BaseCard from "../../components/BaseCard/BaseCard";

const ExRadio = () => {
  // 2
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange2 = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange2,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  
  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Test de Caracterizacion">
            <Box
              sx={{
                textAlign: "left",
              }}
              
            >
            </Box>
          </BaseCard>
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item
          xs={12}
          lg={4}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
        </Grid>
        <Grid
          item
          xs={100}
          lg={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="Area de compresion y Comunicacion">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="Nunca"
                control={<Radio />}
                label="Nunca"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Leve"
                control={<Radio />}
                label="Leve"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Moderado"
                control={<Radio />}
                label="Moderado"
                labelPlacement="top"
              />
               <FormControlLabel
                value="Severa"
                control={<Radio />}
                label="Severa"
                labelPlacement="top"
              />
               <FormControlLabel
                value="Extrema"
                control={<Radio />}
                label="Extrema"
                labelPlacement="top"
              />
            </RadioGroup>
          </BaseCard>
        </Grid>

        
      </Grid>
    </Box>
  );
};

export default ExRadio;
