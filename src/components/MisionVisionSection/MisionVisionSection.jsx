import styled from 'styled-components';
import React from 'react';

// Componentes Base
const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-wrap: balance;
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 3rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, #085F63 0%, #085F63 100%);
      transform: translateX(-50%);
    }
  }
`;

const TextBlock = styled.div`
  background: ${props => props.theme.cardBackground || '#f8f9fa'};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px #085F63;
  line-height: 1.6;
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  color: #085F63;

  @media (max-width: 767px) {
    margin-bottom: 2rem;
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: #ffffff;
      margin-top: 1.5rem;
    }
  }
`;

// Componente Principal
const MisionVisionSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Nuestra Misión y Visión</SectionTitle>
      <ContentWrapper>
        <TextBlock>
          <h3>Misión</h3>
          <p>
            Somos una confiable institución financiera comprometida con los estudiantes universitarios,
            brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión
            de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
          </p>
        </TextBlock>

        <TextBlock>
          <h3>Visión</h3>
          <p>
            Queremos ser la principal opción financiera para estudiantes universitarios en el país.
            Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente
            y nuestro compromiso con la educación y el desarrollo social.
          </p>
        </TextBlock>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MisionVisionSection;