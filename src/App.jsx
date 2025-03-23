import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/heroSection';
import ObjectivesSection from './components/ObjetiveSection/ObjetiveSection';

function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <HeroSection/>
        <ObjectivesSection/>
    </div>
  );
}

export default App;
