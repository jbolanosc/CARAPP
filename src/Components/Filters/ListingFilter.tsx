import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

function valuetext(value: number) {
  return `${value}°C`;
}

const minDistance = 0;

export default function ListingFilter(props: any) {
  const [value1, setValue1] = React.useState<number[]>([30, 70]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
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
    >
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ marginBottom: "1%" }}>
          Transmission
        </FormLabel>
        <RadioGroup
          aria-label="Transmission"
          defaultValue="Transmission"
          name="radio-buttons-group"
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {props.filters.transmission.map((value: any) => {
            if (!Number.isSafeInteger(value))
              return (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={value}
                />
              );
          })}
        </RadioGroup>
        <Divider />
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ margin: "1%" }}>
            Price in 1000 USD
          </FormLabel>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </FormControl>
      </FormControl>
    </Paper>
  );
}
