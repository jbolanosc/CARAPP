import React from "react";
import {
  Paper,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import TableItems from "../../Inventory/Table";
import Personal from "../Personal/Personal";

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid item md={4} xs={12}>
        <Personal />
      </Grid>
      <Grid item md={8} xs={12}>
        <TableItems title="Favorite" />
      </Grid>
      <Grid item md={12} xs={12}>
        <TableItems title="Items owned" />
      </Grid>
    </Grid>
  );
}
