import { Link, Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      sx={{ my: 5 }}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Amar Ghor
      </Link>
      {" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
