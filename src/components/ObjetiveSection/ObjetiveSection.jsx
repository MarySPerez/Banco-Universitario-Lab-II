import './ObjetiveSection.css';
import IconObjctives from '../../assets/icons/objectives-svg.svg';

const ObjectivesSection = () => {
    return (
      <section className="objectives-section">
        
        
        <div className="objectives-container">
            <h2 className="section-title">¿Cuáles son nuestros objetivos?</h2>

          <div className="objectives-grid">
            {/* Objetivo 1 */}
            <div className="objective-card">
              <img src={IconObjctives} alt="icono objetivos" className="objective-icon" />
              <p className="objective-description">
                Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión 
                de sus recursos financieros, a través de nuestros canales digitales y nuestros puntos 
                de atención presencial.
              </p>
            </div>


          </div>
        </div>
      </section>
    );
  };

  export default ObjectivesSection;