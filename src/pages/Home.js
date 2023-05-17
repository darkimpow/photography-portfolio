import React, {useContext} from 'react';
import HomePageNow from '../img/home/HomePageNow.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from "../transitions";

const Home = () => {

    return (
        /*motion for smooth transitions*/
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition1}
                        className='section'>
            <div className="container mx-auto h-full relative">
                {/* text & img wrapper */}
                <div className='flex flex-col justify-center'>
                    <div>
                        {/* text */}
                        <motion.div initial={{opacity: 0, y: '-50%'}} animate={{opacity: 1, y: 0}}
                                    exit={{opacity: 0, y: '-50%'}} transition={transition1}
                                    className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start '>
                            <h1 className='h1'>
                                photographer <br/> & film maker
                            </h1>
                            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Boston, Ma</p>
                            <Link to='/contact' className='btn mb-[30px] '>Contact</Link>
                        </motion.div>
                        {/* image here */}
                        <div className='flex justify-end  lg:max-h-max h-[500px]'>
                            <motion.div whileHover={{scale: 1.1}} initial={{scale: 0}} animate={{scale: 1}}
                                        exit={{scale: 0}} transition={transition1}
                                        className='relative lg:-right-40 overflow-hidden'>

                                <motion.img
                                    whileHover={{scale: 1.1}}
                                    transition={transition1}
                                    src={HomePageNow}
                                    alt=''
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};


export default Home;
