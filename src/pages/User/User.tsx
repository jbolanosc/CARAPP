import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Profile from "../../Components/User/Profile/Profile";

interface IProfileProps {
  name?: string;
}

export default function User(props: IProfileProps) {
  return (
    <Container component="div" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome
      </Typography>
      <Grid>
        <Profile />
      </Grid>
    </Container>
  );
}
