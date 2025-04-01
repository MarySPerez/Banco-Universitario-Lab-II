import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/heroSection';
import ObjectivesSection from './components/ObjetiveSection/ObjetiveSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import MisionVisionSection from './components/MisionVisionSection/MisionVisionSection';


function App() {
  return (
    <div className="App"> 
      <div>
        {/* Navbar */}
        <Navbar/>
      </div>
      <div>
        {/* Imagen Principal */}
        <HeroSection/>
      </div>
      <div>
        {/* Nuestros Objetivos */}
        <ObjectivesSection/>
      </div>
      <div class="mb-35">
        {/* Nuestros Servicios */}
        <ServicesSection/>
      </div>
      <div class="mt-35">
        {/* Mision y Vision */}
        <MisionVisionSection/>
      </div>
    </div>
  );
}

export default App;
