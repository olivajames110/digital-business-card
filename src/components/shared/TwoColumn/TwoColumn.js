import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./TwoColumn.css";

const TwoColumn = (props) => {
  //Mui screen sizing
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      className="two-column-container"
      container
      columns={{ xs: 4, md: 12 }}
      spacing={isSmall ? 0 : 2}
    >
      {React.Children.map(props.children, (c) => (
        <Grid item xs={6}>
          {c}
        </Grid>
      ))}
    </Grid>
  );
};
export default TwoColumn;
