import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import VaritiesCard from "./components/VaritiesCard";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="mt-10">
      <VaritiesCard />
      </div>
    </>
  );
}

export default App;
