import React from 'react';
import Socials from "./Socials";
import Toy from "../img/header/Toy.png";
import MobileNav from "./MobileNav";
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='bg-orange-200 fixed w-full px-[30px]
  lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      {/*logo placed here*/}
    <Link to={'/'} className='max-w-[200px]'>
      {/*<img src={} alt='picture' />*/}
    </Link>
      {/*nav initially hidden - show onm desktop mode here*/}
      <nav className='hidden lg:flex gap-x-12 font-semibold  '>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
        <Link to={'/contacts'} className='text-[#696c6d] hover:text-primary transition'>Contacts</Link>
      </nav>
      {/*socials links here*/}
      <Socials />
      {/*Mobile view*/}
      <MobileNav />
    </div>
  </header>;
};

export default Header;
