import React from "react";
import { Button, Paper } from "@mui/material";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const ReusableForm = (props: any) => {
  return (
    <Paper
      elevation={3}
      sx={{
        minHeight: "80vh",
        margin: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="text" onClick={props.setRegister}>
        {!props.register
          ? "Do not have an account? Register"
          : "have an account? Login"}
      </Button>
      <h1>{props.register ? "REGISTER" : "LOGIN"}</h1>
      {props.register ? <RegisterForm /> : <LoginForm />}
    </Paper>
  );
};

export default ReusableForm;
