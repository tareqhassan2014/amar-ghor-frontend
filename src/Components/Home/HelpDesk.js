import { Button, Container, Grid, Typography, Box, Link } from "@mui/material";
import LottieComponent from "../../Pages/LottieComponent";
import helpAnimationData from "../../media/customer-service-support-agent-animation.json";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const HelpDesk = () => {
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
            <Typography variant="h3">Need any Help Just Call</Typography>

            <Typography sx={{ my: 2 }}>
            যেকোন সমস্যার জন্য কল করুন |
            </Typography>
            <Button
              component={Link}
              href="tel:+8801944981668"
              variant="contained"
              startIcon={<LocalPhoneIcon />}
            >
              +880-1944981668
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <LottieComponent
            animationData={helpAnimationData}
            height={400}
            width={400}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpDesk;
