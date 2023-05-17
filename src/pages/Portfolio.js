import React, { useContext } from 'react';
// import images
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
//Picture log here
import Picture from '../img/portfolio/Picture.jpg';
import Image1 from '../img/portfolio/Image1.jpg';
import Picture3 from '../img/portfolio/Picture3.jpg';
import Picture4 from '../img/portfolio/Picture4.jpg';
import Picture5 from '../img/portfolio/Picture5.jpg';
import Picture6 from '../img/portfolio/Picture6.jpg';
import Picture7 from '../img/portfolio/Picture7.jpg';
import Picture8 from '../img/portfolio/Picture8.jpg';
import Picture9 from '../img/portfolio/Picture9.jpg';
import Picture10 from '../img/portfolio/Picture10.jpg';


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
                            {/*Picture 1*/}
                            <div className="carousel-item h-full">
                                <img src={Picture} alt="picture"  />
                            </div>
                            {/*Picture 2*/}
                            <div className="carousel-item h-full">
                                <img src={Image1} alt="picture 2" />
                            </div>
                            {/*Picture 3*/}
                            <div className="carousel-item h-full">
                                <img src={Picture3} alt="picture 3" />
                            </div>
                            {/*Picture 4*/}
                            <div className="carousel-item h-full">
                                <img src={Picture4} alt="picture 4" />
                            </div>
                            {/*Picture 5*/}
                            <div className="carousel-item h-full">
                                <img src={Picture5} alt="picture 5" />
                            </div>
                            {/*Picture 6*/}
                            <div className="carousel-item h-full">
                                <img src={Picture6} alt="picture 6" />
                            </div>
                            {/*Picture 7*/}
                            <div className="carousel-item h-full">
                                <img src={Picture7} alt="picture 7" />
                            </div>
                            {/*Picture 8*/}
                            <div className="carousel-item h-full">
                                <img src={Picture8} alt="picture 8" />
                            </div>
                            {/*Picture 9*/}
                            <div className="carousel-item h-full">
                                <img src={Picture9} alt="picture 9" />
                            </div>
                            {/*Picture 10*/}
                            <div className="carousel-item h-full">
                                <img src={Picture10} alt="picture 10" />
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