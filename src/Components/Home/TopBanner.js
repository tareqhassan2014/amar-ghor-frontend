import { Button, Container, Grid, Typography, Box } from "@mui/material";
import LottieComponent from "../../Pages/LottieComponent";
import homeAnimationData from "../../media/home.json";

const TopBanner = () => {
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
          <Box sx={{p:3}}>
            <Typography variant="h3">Find Your Safe House</Typography>
            <Typography sx={{ my: 2 }}>
              ঘর খোঁজার ঝামেলা থেকে বাঁচুন সাধ্যের মধ্যে আপনার পছন্দের ঠিকানা
              খুঁজুন ।
            </Typography>
            <Button variant="contained" sx={{ mx: "auto" }}>
              ঘর খুঁজুন
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <LottieComponent
            animationData={homeAnimationData}
            height={300}
            width={400}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopBanner;
