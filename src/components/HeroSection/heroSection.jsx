import Hero from '../../assets/images/home/hero-home.png';
import './heroSection.css';

const HeroSection = () => {
  return (
    <section className="seccion-principal">
      {/* Seccion Principal */}
      <div className="imagen-principal">
        {/* Imagen Principal */}
        <picture className="imagen">
          <source srcSet={Hero} type="image/png" /> 
          <img
            src={Hero}
            alt="imagen"
            className="imagen-home"
            loading="lazy"
            decoding="async"
            width="4616"
            height="1756"
            align= "center"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroSection;




//import Hero from '../../assets/images/home/hero-home.png';

//const HeroSection = () => {
   // return (
     // <section className="hero-section">//
      //  <div>
         //   <img src={Hero} alt="auto" height="608" width="1266" className="hero-home" />
      //  </div>
    //  </section>
  //  );
 // };
  
//  export default HeroSection;