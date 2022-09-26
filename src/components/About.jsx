import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen mt-20 bg-gradient-to-b from-green-900 to-green-500 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full pt-20'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>Sobre</p>
        </div>
        <p className='text-xl mt-10'>
        Me chamo Aislã Robson de Lucio, tenho 23 anos e resido na cidade de Parobé/RS. Atualmente, estou cursando o 3º semestre de Sistemas para Internet, na Universidade do Vale do Rio dos Sinos (UNISINOS). Valorizo muito a criatividade, a colaboração e o trabalho em equipe, estes são elementos que fizeram parte da minha trajetória até aqui. Me mantenho em constante aprimoramento e estudando para além do curso que realizo, de forma autodidata. Assim, acredito estar construindo o caminho para as oportunidades que possibilitam meus sonhos.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
