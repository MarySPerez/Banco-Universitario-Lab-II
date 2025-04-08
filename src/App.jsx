import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/heroSection';
import ObjectivesSection from './components/ObjetiveSection/ObjetiveSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import MisionVisionSection from './components/MisionVisionSection/MisionVisionSection';


function App() {
  return (
    <div className="App"> 
      <div classname= "navbar">
        {/* Navbar */}
        <Navbar/>
      </div>
      <div classname= "hero">
        {/* Imagen Principal */}
        <HeroSection/>
      </div>
      <div classname= "objetives">
        {/* Nuestros Objetivos */}
        <ObjectivesSection/>
      </div>
      <div classname= "services">
        {/* Nuestros Servicios */}
        <ServicesSection/>
      </div>
      <div classname= "misionvision">
        {/* Mision y Vision */}
        <MisionVisionSection/>
      </div>
    </div>
  );
}

export default App;
