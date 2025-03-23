import Hero from '../../assets/images/home/hero-home.png';

const HeroSection = () => {
    return (
      <section className="hero-section">
        <div>
            <img src={Hero} alt="auto" height="608" width="1266" className="hero-home" />
        </div>
      </section>
    );
  };
  
  export default HeroSection;