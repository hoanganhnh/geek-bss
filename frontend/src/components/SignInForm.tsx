import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { Box, Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";

import { USER_DATA } from "@/constants";
import { useUser } from "@/contexts/AuthenticateProvider";
import { signIn } from "@/services/auth.service";
import { saveToLocalStorage } from "@/utils/local-storage";
import { validationSignInSchema } from "@/validations/authen.validation";
import { InputPassword } from "./common/Input";
import { isAxiosError } from "@/libs/axios-client";

function SignInForm() {
  const { setUser } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSignInSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const user = await signIn({
          username: values.username,
          password: values.password,
        });

        setUser(user);
        saveToLocalStorage(USER_DATA, user);
        Router.push("/home");
      } catch (error) {
        if (isAxiosError<{ password: string }>(error) && error.response) {
          formik.setFieldError("password", error.response.data.password);
        }
        if (isAxiosError<{ username: string }>(error) && error.response) {
          formik.setFieldError("username", error.response.data.username);
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        id="username"
        name="username"
        label="Username"
        title="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <InputPassword
        margin="normal"
        fullWidth
        id="password"
        name="password"
        label="Password"
        title="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <LoadingButton
        loading={loading}
        variant="contained"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
      >
        Sign In
      </LoadingButton>
      <Grid container>
        <Grid
          item
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex !important" }}
        >
          <Link href="/">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignInForm;
