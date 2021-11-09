import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function About() {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Sticky footer
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {"This is the About page"}
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </Container>
  );
}
