// SectionHero.jsx
import Hero from '../../assets/images/home/hero-home.png';

const HeroSection = () => {
  return (
    <section className="bg-white border-t-2 border-b-2 border-gray-300 mt-40 md:mt-[500px] px-4 md:px-8 lg:px-[130px] py-8 md:py-12 lg:py-[60px]">
      <div className="max-w-7xl mx-auto">
        <picture>
          <source srcSet={Hero} type="image/png" /> 
          <img
            src={Hero}
            alt="imagen"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
            width="1266"
            height="608"
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