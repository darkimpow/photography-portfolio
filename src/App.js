import React, {useContext} from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import {BrowserRouter as Router} from "react-router-dom";
import { motion } from 'framer-motion';

const App = () => {
  return (
  <>
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
    {/*cursor*/}
    <div className='w-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 '></div>
  </>
  );
};

export default App;
