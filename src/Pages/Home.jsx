import HomeNav from "../Components/HomeNav";
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
    </div>
  );
}

export default Home;
