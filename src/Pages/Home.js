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
      <Features />
      <MobileApp />
      <Footer />
    </>
  );
};

export default Home;
