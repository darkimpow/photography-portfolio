import React from 'react';
import NuaTwo from '../img/about/NuaTwo.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return <section className='section'>
    <div className="container mx-auto h-full relative">
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/*image*/}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden '>
          <img src={NuaTwo} alt='nua picture' />
        </div>
        {/*text here*/}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start '>
          <h1 className='h1'>About me</h1>
          <p className='mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing el
            it. Animi dignissimos dolorum eius eligend
            i ipsa quaerat suscipit! Accusantium aliquid autem dolorum?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            . Animi aut, molestiae! Debitis ea maxime similique.
          </p>
          <Link to={'/portfolio'}>View my world</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
