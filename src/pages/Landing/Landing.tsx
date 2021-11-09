import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Image from "../../img/landrover.jpg"; // Import using relative path

export default function Landing() {
  return (
    <Container
      component="main"
      sx={{
        mb: 2,
        height: "100vh",
        backgroundImage: `url(${Image})`,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
      }}
      maxWidth="xl"
    >
      <Paper
        sx={{
          height: "50%",
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"This is the landing page"}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Paper>
    </Container>
  );
}
