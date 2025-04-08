import React from "react";
import "./ServicesSection.css";
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
    <div className="seccion-principal">
      <div className="seccion-imagen-principal"> {/* Corregido classname -> className */}
        <img
          src={Services}
          alt="servicios"
          className="imagen"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="seccion-principal-servicios">
        <div className="titulo-servicios">
          <h2 className="tituloServicios">Nuestros Servicios</h2>
          <div className="seccion-servicios">
            {services.map((service, index) => (
              <div key={index} className={`servicio-${index + 1}`}>
                <button className="servicio-button">
                  <img 
                    src={service.icon} 
                    alt={`Icono servicio ${index + 1}`} 
                    className="icono-servicio"
                  />
                  <span>{service.text}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
