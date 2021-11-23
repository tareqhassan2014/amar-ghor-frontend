import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Avatar,
  Button,
  Checkbox,
  Container,
  TextField,
  Typography,
  IconButton,
  CssBaseline,
  FormControlLabel,
} from "@mui/material";
import useAuth from "./useAuth";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const { signInUsingGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // loginUser(data.email, data.password, location, navigate);
  };

  return (
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              error={errors.email && true}
              margin="normal"
              fullWidth
              type="email"
              label="Email"
              defaultValue="admin@admin.com"
              helperText={errors.email && errors.email.message}
              {...register("email", {
                pattern: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/,
                required: "enter a valid email",
              })}
              autoFocus
            />

            <TextField
              error={errors.password && true}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              defaultValue="123456"
              autoComplete="current-password"
              helperText={errors.password && errors.password.message}
              {...register("password", { required: "password is required" })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" color="primary">
                  forget password ?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" color="primary">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                title="Google Login"
                onClick={() => signInUsingGoogle(location, navigate)}
              >
                <GoogleIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                title="Github Login"
                sx={{ color: "black", mx: 3 }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                title="Facebook Login"
                sx={{ color: "#1877f2" }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;