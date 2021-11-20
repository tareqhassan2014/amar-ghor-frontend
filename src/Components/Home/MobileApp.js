import { Container, Grid, Typography, Box } from "@mui/material";
import LottieComponent from "../../Pages/LottieComponent";
import homeAnimationData from "../../media/45041-google-play.json";
import googlePlay from "../../media/27173-googleplay-button.json";

const MobileApp = () => {
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
            <Typography variant="h3">
              Our Android App Coming Very Soon
            </Typography>
            <Typography sx={{ my: 2 }}>
              আমাদের অ্যান্ড্রয়েড অ্যাপস খুব শীঘ্রই আসছে
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} sx={{ m: "auto" }}>
          <LottieComponent
            animationData={homeAnimationData}
            height={400}
            width={270}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MobileApp;
