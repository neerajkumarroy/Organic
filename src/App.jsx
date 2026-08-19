import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OurPhilosophy from "./components/OurPhilosophy/OurPhilosophy";
import WhySection from "./components/WhySection/WhySection";
import OurMatchaCreation from "./components/OurMatchaCreation/OurMatchaCreation";
import OurJourney from "./components/OurJourney/FarmToCup";
import MomentsWithVerdea from "./components/MomentsWithVerdea/MomentsWithVerdea";
import StayInLoop from "./components/StayInLoop/StayInLoop";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";
import CAT from "./components/CAT/CAT";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <OurPhilosophy />
        <WhySection />
        <OurMatchaCreation />
        <OurJourney />
        <CAT />
        <Menu />
        <MomentsWithVerdea />
        <FAQ />
        <StayInLoop />
        <Footer />
      </main>
    </div>
  );
}

export default App;
