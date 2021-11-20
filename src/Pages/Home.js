import { Typography, Box } from "@mui/material";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h1">Home</Typography>
      </Box>
    </>
  );
};

export default Home;
