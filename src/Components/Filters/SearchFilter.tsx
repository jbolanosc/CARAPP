import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SearchFilter() {
  const values = [];
  const minValue: number = 1900;
  const maxValue: number = new Date().getFullYear();
  const [yearFrom, setYearFrom] = React.useState(minValue);
  const [yearTo, setYearTo] = React.useState(maxValue);

  (function generateValues() {
    for (let i: number = minValue; i <= maxValue; i++) {
      values.push(<MenuItem value={i}>{i}</MenuItem>);
    }
  })();

  const handleChangeFrom = (event: SelectChangeEvent) => {
    setYearFrom(parseInt(event.target.value));
  };

  const handleChangeTo = (event: SelectChangeEvent) => {
    if (parseInt(event.target.value) >= yearFrom)
      setYearTo(parseInt(event.target.value));
  };

  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      elevation={2}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearFrom.toString()}
          label="Age"
          onChange={handleChangeFrom}
        >
          {values}
        </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ margin: "1%" }}>
          To
        </FormLabel>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={yearTo.toString()}
          label="Age"
          onChange={handleChangeTo}
        >
          {values}
        </Select>
      </FormControl>
    </Paper>
  );
}
