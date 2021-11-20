import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Box,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import SwipeableTemporaryDrawer from "./SideDrawer";
import { useState } from "react";

const NavigationBar = () => {
  //function start here
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const useStyles = makeStyles({
    mobilView: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    desktopView: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
  });

  const classes = useStyles();


  //return start here
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
            className={classes.mobilView}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.desktopView}>GHOR</Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography className={classes.mobilView}>GHOR</Typography>

          <Box className={classes.desktopView}>
            <Button component={Link} to="/login" color="inherit">
              Find
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
      <SwipeableTemporaryDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Box>
  );
};

export default NavigationBar;
