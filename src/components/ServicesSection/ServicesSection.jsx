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
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
      {/* Servicios */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-teal-900 border-b-2 pb-2 mb-4">Nuestros Servicios</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img src={service.icon} alt="Icono de servicio" className="w-6 h-6" />
              <p className="text-gray-700">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Imagen */}
      <div className="w-full md:w-1/2">
      <picture>
          <source srcSet={Services} type="image/jpg" /> 
          <img
            src={Services}
            alt="servicios"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            loading="lazy"
            decoding="async"
            width="600"
            height="970"
          />
        </picture>
      </div>
    </div>
  );
};

export default ServicesSection;
