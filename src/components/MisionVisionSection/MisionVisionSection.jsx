import React from 'react';
import './MisionVisionSection.css';
import Vision from '../../assets/images/home/vision-mision.jpg';

const MissionVision = () => {
  return (
    <div className="bg-teal-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h2 className="text-xl font-bold ml-2">Misión</h2>
          </div>
          <p className="text-sm">
            Somos una confiable institución financiera comprometida con los estudiantes universitarios,
            brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión
            de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
          </p>
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <h2 className="text-xl font-bold ml-2">Visión</h2>
          </div>
          <p className="text-sm">
            Queremos ser la principal opción financiera para estudiantes universitarios en el país.
            Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente
            y nuestro compromiso con la educación y el desarrollo social.
          </p>
        </div>
      </div>
      <div>
      <picture>
          <source srcSet={Vision} type="image/jpg" /> 
          <img
            src={Vision}
            alt="vision y mision"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
            width="1266"
            height="608"
          />
        </picture>
      </div>
    </div>
  );
};

export default MissionVision;
