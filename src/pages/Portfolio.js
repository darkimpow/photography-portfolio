import React, { useContext } from 'react';
// import images
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

import Picture from '../img/portfolio/Picture.jpg';
import Image1 from '../img/portfolio/Image1.jpg';
import Image3 from '../img/portfolio/Image3.jpg';

const Portfolio = () => {
   // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='section'
        >
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
                    {/* text */}
                    <motion.div
                      //  onMouseEnter={mouseEnterHandler}
                       // onMouseLeave={mouseLeaveHandler}
                        initial={{ opacity: 0, y: '-80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-80%' }}
                        transition={transition1}
                        className='flex flex-col lg:items-start'
                    >
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-w-sm'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            <b> Exercitationem, veritatis.</b> Veritatis illum aut,
                            reprehenderit sed dolorem dolore.
                            <br />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
                        </p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
                            Hire me
                        </Link>
                    </motion.div>
                    {/* image grid */}
                    <div>
                        <div className="h-[600px] w-[400px] carousel carousel-vertical rounded-box">
                            <div className="carousel-item h-full">
                                <img src={Picture} alt="picture"  />
                            </div>
                            <div className="carousel-item h-full">
                                <img src={Image1} alt="picture 2" />
                            </div>
                            <div className="carousel-item h-full">
                                <img src={Image3} alt="picture 3" />
                            </div>

                        </div>

                    </div>
                    {/*image grid ends*/}
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;