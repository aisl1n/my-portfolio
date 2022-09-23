import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-green-900 to-green-500 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>Sobre</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad
          nemo rem cumque soluta ea assumenda quidem necessitatibus a, aut
          nesciunt delectus consectetur quia distinctio incidunt ratione ut
          sequi? Rem minima incidunt ipsam perferendis eum. Alias nisi quis modi
          natus. Deserunt maxime qui molestiae iste aut necessitatibus nam?
          Tempore, eos.
        </p>
        <br />

        <p className='text-xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
          non quo? Recusandae deleniti vel molestias cumque dolorum placeat
          atque accusantium ipsum voluptatem iusto, natus quisquam alias rerum
          voluptates suscipit. Nisi est nihil quis corrupti aliquam eum labore
          iure perspiciatis quae beatae officia a, laboriosam, nam eligendi
          veniam alias repellat. Facilis.
        </p>
      </div>
    </div>
  );
};

export default About;
