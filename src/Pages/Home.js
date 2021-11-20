import Footer from "../Components/Footer/Footer";
import Features from "../Components/Home/Features";
import HelpDesk from "../Components/Home/HelpDesk";
import MobileApp from "../Components/Home/MobileApp";
import TopBanner from "../Components/Home/TopBanner";
import NavigationBar from "../Components/NavigationBar/NavigationBar";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <TopBanner />
      <HelpDesk />
      <MobileApp />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
