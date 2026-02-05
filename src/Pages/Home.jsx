import Footer from "../Components/Footer";
import HomeNav from "../Components/HomeNav";
import ProfieCta from "../Components/ProfieCta";
import Hero from "../Features/Home/Hero";
import HomeCards from "../Features/Home/HomeCards";
import Writing from "../Features/Home/Writing";

function Home() {
  return (
    <div>
      <HomeNav />
      <Hero />
      <HomeCards />
      <Writing />
      <Footer />
    </div>
  );
}

export default Home;
