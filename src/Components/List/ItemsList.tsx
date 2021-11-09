import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ItemCard from "../ItemCard/ItemCard";
import ListingFilter from "../Filters/ListingFilter";
import SearchFilter from "../Filters/SearchFilter";
import Pagination from "@mui/material/Pagination";
import {
  EngineType,
  TurboType,
  EngineSizes,
  Transmissions,
  VehicleTypes,
} from "../../models/Enums/EnumFilters";

export default function ItemList() {
  const [items, setItems] = useState({});
  const [filters, setFilters] = useState({
    transmission: Object.values(Transmissions),
    year: [],
    engine: EngineSizes,
    engineSize: "",
    fuel: EngineType,
    turbo: TurboType,
    type: VehicleTypes,
    doors: 0,
    seats: 0,
    colors: [],
    dealRating: {
      fair: [],
      good: [],
      highPrice: [],
      overPriced: [],
    },
    dealerRating: 0,
    mileage: 0,
    yearFrom: 1900,
    yearTo: 2020,
  });

  const handleChange = () => {};

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6} md={2}>
          <Stack spacing={2}>
            <SearchFilter />
            <ListingFilter filters={filters} setFilters={handleChange} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={10}>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "space-between",
              flexDirection: "column",
            }}
          >
            <Stack spacing={2}>
              <ItemCard />
              <ItemCard />
            </Stack>
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
