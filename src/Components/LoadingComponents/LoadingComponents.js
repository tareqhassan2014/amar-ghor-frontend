import Box from "@mui/material/Box";
import LottieComponent from "../../Pages/LottieComponent";
import loading from '../../media/loading-lottie.json';

const LoadingComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LottieComponent animationData={loading} height={400} width={600} />
    </Box>
  );
};

export default LoadingComponent;
