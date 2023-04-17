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
    <Link to={'/'}>
      {/*<img src={} alt='picture' />*/}
    </Link>
      {/*nav intially hidden - show onm desktop mode here*/}
    </div>
  </header>;
};

export default Header;
