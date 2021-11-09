import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ItemList from "../../Components/List/ItemsList";

export default function Landing() {
  return (
    <Container
      component="main"
      sx={{ mt: 8, mb: 2, height: "100%" }}
      maxWidth="xl"
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Car List
      </Typography>
      <ItemList />
    </Container>
  );
}
