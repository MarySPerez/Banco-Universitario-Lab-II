import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/heroSection';
import ObjectivesSection from './components/ObjetiveSection/ObjetiveSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import MisionVisionSection from './components/MisionVisionSection/MisionVisionSection';


function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <HeroSection/>
        <ObjectivesSection/>
        <ServicesSection/>
        <MisionVisionSection/>
    </div>
  );
}

export default App;
