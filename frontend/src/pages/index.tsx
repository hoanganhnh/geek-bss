import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Container, CssBaseline, Box, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Copyright from "@/components/Copyright";
import SEO from "@/components/common/SEO";
import SignInForm from "@/components/SignInForm";

const theme = createTheme();
function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="Login" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <SignInForm />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
