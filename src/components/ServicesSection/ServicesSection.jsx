import React from 'react';
import Service1 from '../../assets/icons/service-1-vr-svg.svg';
import Service2 from '../../assets/icons/service-2-vr-svg.svg';
import Service3 from '../../assets/icons/service-3-vr-svg.svg';
import Service4 from '../../assets/icons/service-4-vr-svg.svg';
import Service5 from '../../assets/icons/service-5-vr-svg.svg';


const ServiceCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 m-4 w-full max-w-xs">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
  
  const ServicesSection = () => {
    const services = [
      {
        icon: <Service1 />,
        title: "Transferencias entre estudiantes",
        description: "Sin comisión"
      },
      {
        icon: <Service2 />,
        title: "Depósitos en efectivo",
        description: "Rápido y seguro"
      },
      {
        icon: <Service3 />,
        title: "Retiros en efectivo",
        description: "En cualquier sucursal"
      },
      {
        icon: <Service4 />,
        title: "Cobro de becas",
        description: "Estudiantiles"
      },
      {
        icon: <Service5 />,
        title: "Pago de matrícula",
        description: "Estudiantil"
      }
    ];
  
    return (
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;