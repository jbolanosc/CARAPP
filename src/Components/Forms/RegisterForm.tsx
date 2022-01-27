import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

export default function RegisterForm(props: any) {
  const validationSchema = yup.object({
    firstname: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    lastname: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="firstname"
        name="firstname"
        label="firstname"
        type="text"
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
        sx={{ margin: "2%" }}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ margin: "2%" }}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        sx={{ margin: "2%" }}
      />
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
