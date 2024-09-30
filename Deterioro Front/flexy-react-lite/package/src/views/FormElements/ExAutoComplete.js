import React from "react";
import { Grid, Box } from "@mui/material";

import { ComboBoxAutocomplete } from "../../components/Forms/AutoComplete/ComboBoxAutocomplete";

const ExAutoComplete = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item lg={12} md={12} xs={12}>
          <ComboBoxAutocomplete />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExAutoComplete;
