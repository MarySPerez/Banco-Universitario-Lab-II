import React from "react";
import Service1Icon from "../../assets/icons/service-1-vr-svg.svg";
import Service2Icon from "../../assets/icons/service-2-vr-svg.svg";
import Service3Icon from "../../assets/icons/service-3-vr-svg.svg";
import Service4Icon from "../../assets/icons/service-4-vr-svg.svg";
import Service5Icon from "../../assets/icons/service-5-vr-svg.svg";
import Services from '../../assets/images/home/services-web.jpg';

const services = [
  { icon: Service1Icon, text: "Transferencias entre estudiantes sin comisión" },
  { icon: Service2Icon, text: "Depósitos en efectivo" },
  { icon: Service3Icon, text: "Retiros en efectivo" },
  { icon: Service4Icon, text: "Cobro de becas estudiantiles" },
  { icon: Service5Icon, text: "Pago de matrícula estudiantil" }
];

const ServicesSection = () => {
  return (

    <div className="bg-gray-100 py-12">
      {/* Sección Principal */}
      <div classname="hidden lg:w-1/2 md:w-1/2  lg:block md:block">
        {/* Imagen Principal */}
        <img
          src={Services}
          alt="servicios"
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          loading="lazy"
          decoding="async"
          width="600"
          height="970"
          align= "right"
         />
      </div>
      <div className="container mx-auto px-4">
        {/* Sección de Servicios */}
        <div className="bg-white rounded-lg shadow-teal-500 shadow-lg overflow-hidden md:flex">
          {/* Titulo Principal */}
          <h2 className="tituloServicios">Nuestros Servicios</h2>
          <div className="servicios">
            {/* Sección de botones */}
            <div classname="servicio 1">
              <button className="servicio1-button">Transferencias entre estudiantes sin comisión</button>
            </div>
            <div classname="servicio 2">
              <button className="servicio2-button">Depósitos en efectivo</button>
            </div>
            <div classname="servicio 3">
              <button className="servicio3-button">Retiros en efectivo</button>
            </div>
            <div classname="servicio 4">
            <button className="servicio4-button">Cobro de becas estudiantiles</button>
            </div>
            <div classname="servicio 5">
            <button className="servicio5-button">Pago de matrícula estudiantil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
