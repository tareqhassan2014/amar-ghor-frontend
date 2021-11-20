import { Container, Grid, Typography, Box, Button } from "@mui/material";
import LottieComponent from "../../Pages/LottieComponent";
import homeAnimationData from "../../media/48244-dashboard-data-visualization.json";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h3" align="center">
              Feature Rich Dashboard
            </Typography>

            <Typography sx={{ my: 2 }} align="center">
              প্রচুর উপকরণে সাজানো ড্যাশবোর্ড |
            </Typography>
            <Button
              component={Link}
              to="/dashboard"
              variant="contained"
              sx={{ ml: "150px" }}
            >
              Dashboard
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <LottieComponent
            animationData={homeAnimationData}
            height={250}
            width={400}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
