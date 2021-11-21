import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import useAuth from "../Authentication/useAuth";
import { useNavigate } from "react-router";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";

const SideDrawer = ({ openDrawer, setOpenDrawer }) => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
          onKeyDown={() => setOpenDrawer(false)}
        >
          {/* Show Profile Here */}
          {user?.email && (
            <Paper sx={{ textAlign: "center", py: 3, my: 3, mx: 1 }}>
              <Avatar
                alt={user?.displayName}
                src={user?.photoURL}
                sx={{ m: "auto" }}
              />
              <Typography>{user?.displayName}</Typography>
              <Typography>{user?.email}</Typography>
            </Paper>
          )}

          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Find" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            {user?.email ? (
              <ListItem button onClick={logOut}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="LogOut" />
              </ListItem>
            ) : (
              <ListItem button onClick={() => navigate("/login")}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
            )}
          </List>
          <Divider />
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default SideDrawer;
