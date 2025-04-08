import React from 'react';
import './MisionVisionSection.css';
import Vision from '../../assets/images/home/vision-mision.jpg';

const MisionVision = () => {
  return (
    <div className="seccion-principal">
      {/* Sección Principal */}
      <div className="seccion-texto">
        {/* Sección de Texto */}
        <div className="seccion-mision">
            {/* Seccion Misión */}
          <div className="titulo-mision">
            {/* Titulo Misión */}
            <h2 className="titulo-m">Misión</h2>
          </div>
          <div classname= "descripcion-mision">
            {/* Descripcion Mision */}
            <p className="descripcion-m">
            Somos una confiable institución financiera comprometida con los estudiantes universitarios,
            brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión
            de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
            </p>
          </div>
        </div>
        <div className="seccion-vision">
          {/* Seccion Visión */}
          <div className="titulo-vision">
            {/* Titulo Visión */}
            <h2 className="titulo-v">Visión</h2>
          </div>
          <div classname= "descripcion-vision">
            {/* Descripcion Vision */}
            <p className="descripcion-v">
            Queremos ser la principal opción financiera para estudiantes universitarios en el país.
            Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente
            y nuestro compromiso con la educación y el desarrollo social.
            </p>
          </div>
        </div>
      </div>
      <div className= "seccion-imagen-principal">
        {/* Imagen Vision */}
          <img
            src={Vision}
            alt="vision y mision"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
            width="997"
            height="608"
            align= "center"
          />
      </div>
    </div>
  );
};

export default MisionVision;
